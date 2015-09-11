using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AnimalID.Startup))]
namespace AnimalID
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
