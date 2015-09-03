using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CMWN.Core;

namespace BikeBits.Base
{
    public class BaseController : Controller
    {

        public void InitalizeUser()
        {
            User user = Session["User"] as User;
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

        public void ResetProgress(int ModubleID)
        {


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

        public CMWN.Core.User CoreActionItem(string action_name)
        {
            User user = Session["AppUser"] as User;
            ActionItem ai = Session["ActionItem"] as ActionItem;

            //need to find the previous module_id to update the progress
            Module this_module = new Module().SelectByActionItem(ai.ActionItemID).FirstOrDefault(m => m.ModuleName == action_name);
            Module previous_module = new Module().SelectPreviousModule(this_module.ModuleID);

            ModuleCheck(this_module.ModuleID);

            if (this_module.ModuleID != previous_module.ModuleID)
            {
                UpdateProgress(previous_module.ModuleID);
            }
            return user;
        }
    }
}