import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import AdminNewPage from "./pages/admin/news";
import editNews from "./pages/admin/edit";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/admin/dashboard";
import NewList from "./components/admin/newList";
import AddProduct from "./pages/admin/add";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/product": () => {
        print(AdminNewPage.render());
    },
    "/admin/product/edit/:id": ({ data }) => {
        const { id } = data;
        print(editNews.render(id));
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/admin/newList": () => {
        print(NewList.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/add": () => {
        print(AddProduct.render());
    },
});

router.resolve();

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.luongDuong = luongDuong;
//         this.luongBot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Lượng đường: ${this.luongDuong}
//             Lượng bột: ${this.luongBot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// console.log(banhDeo.luongDuong) // 10
// const banhNuong = new KhuanBanh(30, 50);
// banhDeo.luongDuong = 20
// console.log(banhDeo.luongDuong)// 20
// banhDeo.showInfo();

// banhNuong.showInfo();
