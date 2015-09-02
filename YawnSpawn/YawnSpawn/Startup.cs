using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(YawnSpawn.Startup))]
namespace YawnSpawn
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
