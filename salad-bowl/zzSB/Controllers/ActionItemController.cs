using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CMWN.Core;

namespace SaladBowl.Controllers
{
    public class ActionItemController : Base.BaseController
    {
        private Module _this_module;
        private Module _previous_module;

        // GET: ActionItem
        public ActionResult Index()
        {
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

            ViewBag.Title = "CMWN - SALAD RAIN - GAME";
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
            ais = ais.Exists(user.UserID, _this_module.ModuleID, "Salad Rain Game Score", string.Format("Level {0}", level));

            //check to see if this is a replay (if the score for this user / level exists)
            if (ais != null)
            {
                //check to see if this score is better than the previous score
                if (!(int.Parse(ais.CheckScore(user.UserID, _this_module.ModuleID, "Salad Rain Game Score", string.Format("Level {0}", level))) > int.Parse(score)))
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
                ais.StatisticName = "Salad Rain Game Replay";

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
                ais.StatisticName = "Salad Rain Game Score";

                ais.Insert(ais, out message);
            }

            return Json("good");

        }

        public ActionResult AI1()
        {
            return View();
        }

        public ActionResult AI2()
        {
            return View();
        }

        public ActionResult AI3()
        {
            return View();
        }


        public ActionResult AI4()
        {
            return View();
        }

        public ActionResult AI5()
        {
            return View();
        }

        public ActionResult AI6()
        {
            return View();
        }

        public ActionResult AI7()
        {
            return View();
        }

        public ActionResult AI8()
        {
            return View();
        }

        public ActionResult AI9()
        {
            return View();
        }










    }
}