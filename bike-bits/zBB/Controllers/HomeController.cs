using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CMWN.Core;

namespace BikeBits.Controllers
{
    public class HomeController : Base.BaseController
    {
        public ActionResult Index(int? uid)
        {
            User user = new User();
            if (uid != null)
            {
                //need to check if the user is in the system
                if (!user.Exists(uid.GetValueOrDefault()))
                {
                    string message;
                    //creaet user in db
                    user.UserSystemGUID = Guid.NewGuid().ToString();
                    user.PublicID = uid;
                    user.CreatedBy = "Integration System";
                    user.Insert(user, out message);

                }

                user = user.SelectByPublicID(uid.GetValueOrDefault());
                Session["User"] = user;

                InitalizeUser();
            }
            return RedirectToAction("AI1","ActionItem");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}