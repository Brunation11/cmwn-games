using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BikeBits.Startup))]
namespace BikeBits
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
