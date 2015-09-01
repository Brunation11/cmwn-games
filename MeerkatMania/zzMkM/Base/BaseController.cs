using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CMWN.Core;

namespace MeerkatMania.Base
{
    public class BaseController : Controller
    {

        public void InitalizeUser()
        {
            User user = new User().SelectThis(1);
            ActionItem ai = new ActionItem().SelectThis(int.Parse(ConfigurationManager.AppSettings["CMWN.ActionItemID"]));

            Session["AppUser"] = user;
            Session["ActionItem"] = ai;
        }

        public void ModuleCheck(int ModuleID)
        {
            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            //check progress and see if I need to create a new record
            //make sure the ActioItemProgress is not already there
            ActionItemProgress aip = new ActionItemProgress().SelectByModule(ModuleID, user.UserID);

            if (aip == null)
            {
                ActionItemProgress new_aip = new ActionItemProgress();

                new_aip.UserID = user.UserID;
                new_aip.ModuleID = ModuleID;
                new_aip.StartDate = DateTime.Now.Date;
                new_aip.StartTime = DateTime.Now.TimeOfDay;

                string message;
                new_aip.Insert(new_aip, out message);
            }
        }

        public void UpdateProgress(int ModuleID)
        {
            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            ActionItemProgress aip = new ActionItemProgress().SelectByModule(ModuleID, user.UserID);
            string message;

            if (aip != null)
            {
                aip.EndDate = DateTime.Now.Date;
                aip.EndTime = DateTime.Now.TimeOfDay;

                aip.Edit(aip, out message);
            }

        }

        public string WhereAmIAt()
        {
            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            IQueryable<ActionItemProgress> list_aip = new ActionItemProgress().SelectByUser(user.UserID, ai.ActionItemID);

            if (list_aip.Count() > 0)
            {
                ActionItemProgress aip = list_aip.ToList().Last();
                return aip.Module.ModuleName;
            }
            else
            {
                return "Index";
            }

        }
    }
}