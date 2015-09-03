using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AirTransformers.Startup))]
namespace AirTransformers
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
