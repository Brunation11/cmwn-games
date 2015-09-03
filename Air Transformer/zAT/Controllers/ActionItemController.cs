﻿using System;
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

namespace AirTransformers.Controllers
{
    public class ActionItemController : Base.BaseController
    {
        static string platform_url = ConfigurationManager.AppSettings["CMWN.Platform.URL"].ToString();

        private Module _this_module;
        private Module _previous_module;

        // GET: ActionItem
        public ActionResult AI1()
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

                    CoreActionItem(action_name);

                    return View();
                }
                else
                {
                    return RedirectToAction(module, "ActionItem");
                }
            }
            return View();
        }

        public ActionResult AI11()
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

        public ActionResult AI3()
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


        public ActionResult AI4()
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

        public ActionResult AI5()
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

        public ActionResult AI6()
        {
            User user = Session["User"] as User;
            //test to make sure a user account is available if not - this is demo mode / no track or uploading
            if (user != null)
            {
                InitalizeUser();

                string action_name = this.ControllerContext.RouteData.Values["action"].ToString();
                ViewBag.ActionItem = action_name;

                CoreActionItem(action_name);

                SubmitFinalAction();

            }
            return View();
        }

        public ActionResult AI7(string mode)
        {
            InitalizeUser();

            if (mode != null)
            {
                ViewBag.Demo = 1;
            }
            else
            {
                ViewBag.Demo = 0;
            }

            //figure out where the user left off and progress to that module
            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            //ViewBag.Title = "AIR TRANSFORMERS";
            ViewBag.GameLevel = 1;
            ViewBag.GameMode = 0;
            ViewBag.GameScore = 0;

            return View();
        }

        public ActionResult Game(string mode)
        {
            InitalizeUser();

            if (mode != null)
            {
                ViewBag.Demo = 1;
            }
            else
            {
                ViewBag.Demo = 0;
            }

            //figure out where the user left off and progress to that module
            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            ViewBag.Title = "CMWN - AIR TRANSFORMERS - GAME";
            ViewBag.GameLevel = 1;
            ViewBag.GameMode = 0;
            ViewBag.GameScore = 0;

            return View();
        }

        public JsonResult ProcessScore(string score, string action_item, string level)
        {
            string action_name = this.ControllerContext.RouteData.Values["action"].ToString();
            string message;

            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            //check to see if this is in demo mode (no user) - if not, no need to log the score
            if (user == null)
            {
                return Json("good");
            }

            //find the moduleid that is the game
            _this_module = new Module().SelectGameModule();

            ActionItemStat ais = new ActionItemStat();
            ais = ais.Exists(user.UserID, _this_module.ModuleID, "Carbon Catchers Game Score", string.Format("Level {0}", level));

            //check to see if this is a replay (if the score for this user / level exists)
            if (ais != null)
            {
                //check to see if this score is better than the previous score
                if (!(int.Parse(ais.CheckScore(user.UserID, _this_module.ModuleID, "Carbon Catchers Game Score", string.Format("Level {0}", level))) > int.Parse(score)))
                {
                    //update score
                    ais.StatisticValue = score;
                    ais.UpdateDate = DateTime.Now;
                    ais.Edit(ais, out message);
                }

                //create a replay record
                ais = new ActionItemStat();
                ais.ModuleID = _this_module.ModuleID;
                ais.UserID = user.UserID;
                ais.CreateDate = DateTime.Now;
                ais.StatisticValue = score;
                ais.StatisticUOM = string.Format("Level {0}", level);
                ais.StatisticName = "Carbon Catchers Game Replay";

                ais.Insert(ais, out message);
            }
            else
            {
                ais = new ActionItemStat();
                ais.ModuleID = _this_module.ModuleID;
                ais.UserID = user.UserID;
                ais.CreateDate = DateTime.Now;
                ais.StatisticValue = score;
                ais.StatisticUOM = string.Format("Level {0}", level);
                ais.StatisticName = "Carbon Catchers Game Score";

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
            //see if you need to get application context
            if (Session["AppContext"] == null)
            {
                AuthenticateApplicationContext("Flip");
            }

            AuthToken at = Session["AppContext"] as AuthToken;

            //get the user account so we can determine what the folder structure should be
            User user = Session["AppUser"] as User;

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