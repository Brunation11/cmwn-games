using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using CMWN.Core;
using System.Configuration;
using System.Net;
using Newtonsoft.Json;
using System.Collections.Specialized;
using System.Text;
using System.Threading.Tasks;

namespace CanIt.Controllers
{
    public class ActionItemController : Base.BaseController
    {
        static string platform_url = ConfigurationManager.AppSettings["CMWN.Platform.URL"].ToString();

        private Module _this_module;
        private Module _previous_module;

        // GET: ActionItem
        public ActionResult Index()
        {
            User user = Session["User"] as User;
            //test to make sure a user account is available if not - this is demo mode / no track or uploading
            if (user != null)
            {
                InitalizeUser();

                string module = WhereAmIAt();

                if (module == "Index")
                {
                    string action_name = this.ControllerContext.RouteData.Values["action"].ToString();
                    ViewBag.ActionItem = action_name;

                    //CoreActionItem(action_name);

                    return RedirectToAction("AI1");
                }
                else
                {
                    return RedirectToAction(module, "ActionItem");
                }
            }
            return RedirectToAction("AI1");
        }

        public ActionResult AI1()
        {
            User user = Session["User"] as User;
            //test to make sure a user account is available if not - this is demo mode / no track or uploading
            if (user != null)
            {
                InitalizeUser();

                string action_name = this.ControllerContext.RouteData.Values["action"].ToString();
                ViewBag.ActionItem = action_name;

                CoreActionItem(action_name);

            }
            return View();
        }

        public ActionResult AI2()
        {
            User user = Session["User"] as User;
            //test to make sure a user account is available if not - this is demo mode / no track or uploading
            if (user != null)
            {
                InitalizeUser();

                string action_name = this.ControllerContext.RouteData.Values["action"].ToString();
                ViewBag.ActionItem = action_name;

                CoreActionItem(action_name);

            }
            return View();
        }

        public bool AI3()
        {
            User user = Session["User"] as User;
            //test to make sure a user account is available if not - this is demo mode / no track or uploading
            if (user != null)
            {
                InitalizeUser();

                string action_name = this.ControllerContext.RouteData.Values["action"].ToString();
                ViewBag.ActionItem = action_name;

                CoreActionItem(action_name);

                //submit final action
                SubmitFinalAction();

            }
            return true;
        }

        public ActionResult AI4()
        {
            return View();
        }
        public JsonResult ProcessScore(string score, string action_item, string level)
        {
            string action_name = this.ControllerContext.RouteData.Values["action"].ToString();
            string message;

            User user = CoreActionItem(action_item);
            ActionItem ai = Session["ActionItem"] as ActionItem;

            ActionItemStat ais = new ActionItemStat();
            ais = ais.Exists(user.UserID, _this_module.ModuleID, "[Your Game] Game Score", string.Format("Level {0}", level));

            //check to see if this is a replay (if the score for this user / level exists)
            if (ais != null)
            {
                //check to see if this score is better than the previous score
                if (!(int.Parse(ais.CheckScore(user.UserID, _this_module.ModuleID, "[Your Game] Game Score", string.Format("Level {0}", level))) > int.Parse(score)))
                {
                    //update score
                    ais.StatisticValue = score;
                    ais.UpdateDate = DateTime.Now;
                    ais.Edit(ais, out message);
                }

                //create a replay record
                ais = new ActionItemStat();
                //ais.ActionItemID = ai.ActionItemID;
                ais.ModuleID = _this_module.ModuleID;
                ais.UserID = user.UserID;
                ais.CreateDate = DateTime.Now;
                ais.StatisticValue = score;
                ais.StatisticUOM = string.Format("Level {0}", level);
                ais.StatisticName = "[Your Game] Game Replay";

                ais.Insert(ais, out message);
            }
            else
            {
                ais = new ActionItemStat();
                //ais.ActionItemID = ai.ActionItemID;
                ais.ModuleID = _this_module.ModuleID;
                ais.UserID = user.UserID;
                ais.CreateDate = DateTime.Now;
                ais.StatisticValue = score;
                ais.StatisticUOM = string.Format("Level {0}", level);
                ais.StatisticName = "[Your Game] Game Score";

                ais.Insert(ais, out message);
            }

            return Json("good");

        }
               
        public bool AuthenticateApplicationContext(string context)
        {
            //get this ai's public id
            ActionItem ai = Session["ActionItem"] as ActionItem;

            //call the authentication function to get 
            string service_authentication = ConfigurationManager.AppSettings["CMWN.Platform.Services.Authentication.URL"].ToString();
            string auth_parm_key1 = "oauth_consumer_key=";
            string auth_parm_value1;

            switch (context)
            {
                case ("Whiteboard"):
                    auth_parm_value1 = ConfigurationManager.AppSettings["CMWN.Platform.Services.Whiteboard.Key"].ToString();
                    break;
                case ("Flip"):
                    auth_parm_value1 = ConfigurationManager.AppSettings["CMWN.Platform.Services.Flip.Key"].ToString();
                    break;
                default:
                    auth_parm_value1 = ConfigurationManager.AppSettings["CMWN.Platform.Services.Whiteboard.Key"].ToString();
                    break;
            }

            string auth_token;
            string call_back_name = "";

            AuthToken at = new AuthToken();
            at = GetPlatformResponse(platform_url + service_authentication + auth_parm_key1 + auth_parm_value1 + call_back_name);
            auth_token = at.oauth_token;

            ai.AuthToken = at.oauth_token;
            ai.AuthExpirationDate = DateTime.Parse(at.oauth_token_expiry);

            //store this in session - we might need it again
            Session["AppContext"] = at;

            return true;
        }

        public AuthToken GetPlatformResponse(string url)
        {
            string result;

            var http = (HttpWebRequest)WebRequest.Create(url);
            var response = http.GetResponse();

            var stream = response.GetResponseStream();
            var sr = new StreamReader(stream);

            result = sr.ReadToEnd();

            stream.Close();
            AuthToken at = new AuthToken();

            at = JsonConvert.DeserializeObject<AuthToken>(result);

            response.Close();

            return at;

        }

        public bool SubmitFinalAction()
        {
            //get the user account so we can determine what the folder structure should be
            User user = Session["AppUser"] as User;

            //check to make sure this is necessary - must have a user
            if (user == null)
            {
                return false;
            }
            
            //see if you need to get application context
            if (Session["AppContext"] == null)
            {
                AuthenticateApplicationContext("Flip");
            }

            AuthToken at = Session["AppContext"] as AuthToken;

            
            //get the action item so we can store the picture in the correct gallery
            ActionItem ai = Session["ActionItem"] as ActionItem;

            //create url that will submit to
            string post_url = ConfigurationManager.AppSettings["CMWN.Platform.Services.Post.Action.URL"].ToString();

            string url = string.Format("{0}{1}oauth_consumer_key={2}&oauth_token={3}", platform_url, post_url, at.oauth_consumer_key, at.oauth_token);

            WebRequest request = HttpWebRequest.Create(url);
            request.Method = "POST";
            //This is important, MVC uses the content-type to discover the action parameters
            request.ContentType = "application/x-www-form-urlencoded";

            string public_id = new Module().SelectPublicID(ai.ActionItemID);

            string postParameters = String.Format("uid={0}&nid={1}&flip_nid={2}", user.PublicID, public_id, ai.PublicID.ToString());

            byte[] postData = Encoding.UTF8.GetBytes(postParameters);

            using (Stream postStream = request.GetRequestStream())
            {
                postStream.Write(postData, 0, postData.Length);
                postStream.Close();
            }

            request.BeginGetResponse(new AsyncCallback(Post_Completed), request);

            return true;
        }

        private void Post_Completed(IAsyncResult result)
        {
            WebRequest request = (WebRequest)(result.AsyncState);
            WebResponse response = request.EndGetResponse(result);
            // Parse response
        }
    }
    public class AuthToken
    {
        public string oauth_consumer_key { get; set; }
        public string oauth_token { get; set; }
        public string oauth_token_expiry { get; set; }
    }
}