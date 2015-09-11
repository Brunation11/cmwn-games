using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TagIt.Startup))]
namespace TagIt
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
