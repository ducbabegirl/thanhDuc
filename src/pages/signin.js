import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Signin = {
    render() {
        return /*html*/`
        <div id="header">
        ${Header.render()}
    </div>
        <form id="formSignin" style="text-align: center;
        margin-top: 30px;">
                <input type="email" id="email" class="border border-black" placeholder="Your email"/>
                <br>
                <input type="password" id="password" class="border border-black" placeholder="Your password"style="
                margin-top: 20px;"/>
                <br>
                <button style="
                margin-top: 10px; padding: 10px;width: 190px;">Đăng nhập</button>
        </form>
        ${Footer.render()}
        
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call API login
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // lưu dữ liệu vào localStorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                setTimeout(() => {
                // kiểm tra quyền dựa trên ID
                    if (data.user.id === 1) {
                        document.location.href = "/#/admin/dashboard";
                    } else {
                        document.location.href = "/#/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
                // console.log(error.response.data);
            }
        });
    },
};
export default Signin;