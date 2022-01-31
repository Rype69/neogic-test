using System.Web.Mvc;
using MVVM.UI.Web.Models.Home;

namespace MVVM.UI.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Categories()
        {
            var model = new CategoriesViewModel();
            return View(model);
        }

        public ActionResult Index()
        {
            IndexViewModel model = null;
            return View(model);
        }
    }
}
