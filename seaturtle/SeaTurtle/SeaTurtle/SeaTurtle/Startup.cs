using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SeaTurtle.Startup))]
namespace SeaTurtle
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
