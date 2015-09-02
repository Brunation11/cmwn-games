using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CMWN.Core;

namespace YawnSpawn.Controllers
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

        private CMWN.Core.User CoreActionItem(string action_name)
        {
            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            //need to find the previous module_id to update the progress
            _this_module = new Module().SelectByActionItem(ai.ActionItemID).FirstOrDefault(m => m.ModuleName == action_name);
            _previous_module = new Module().SelectPreviousModule(_this_module.ModuleID);

            ModuleCheck(_this_module.ModuleID);

            if (_this_module.ModuleID != _previous_module.ModuleID)
            {
                UpdateProgress(_previous_module.ModuleID);
            }
            return user;
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


        public ActionResult AI31()
        {
            return View();
        }


        public ActionResult AI32()
        {
            return View();
        }



        public ActionResult AI33()
        {
            return View();
        }



        public ActionResult AI34()
        {
            return View();
        }



        public ActionResult AI35()
        {
            return View();
        }



        public ActionResult AI36()
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