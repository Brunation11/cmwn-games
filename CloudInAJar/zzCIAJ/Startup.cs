using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CloudInAJar.Startup))]
namespace CloudInAJar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
