using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SendASmile.Startup))]
namespace SendASmile
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
