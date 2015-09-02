using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MeerkatMania.Startup))]
namespace MeerkatMania
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
