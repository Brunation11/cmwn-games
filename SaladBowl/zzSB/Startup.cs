using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SaladBowl.Startup))]
namespace SaladBowl
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
