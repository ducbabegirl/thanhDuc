import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminAddPost from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
// import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import CartPage from "./pages/cart";
import ProductDetailPage from "./pages/products/detail";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};router.on("/admin/*", () => {}, {
    before: (done) =>{ 
        if(localStorage.getItem('user')){
            console.log('ahihi');
            const userId = JSON.parse(localStorage.getItem('user')).id;
            if(userId === 1){
                done();
            } else {
                document.location.href="/"
            }
        }
    }
})

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => print(ProductDetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/products/detail": () => print(ProductDetailPage),
    "/cart": () => print(CartPage),

});

router.resolve();