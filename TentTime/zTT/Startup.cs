using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TentTime.Startup))]
namespace TentTime
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
