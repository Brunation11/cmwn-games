using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CanIt.Startup))]
namespace CanIt
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
