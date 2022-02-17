import { signup } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const SignUp = {
    render() {
        return /*html*/`
        ${Header.render()}
        <form id="formSignup" style="text-align: center;
        margin-top: 30px;">
                <input type="email" id="email" class="border border-black" placeholder="Your email"/>
                <br>
                <input type="password" id="password" class="border border-black" placeholder="Your password"style="
                margin-top: 20px;"/>
                <br>
                <button style="
                margin-top: 10px; padding: 10px;width: 190px;">Đăng ký</button>
        </form>
        ${Footer.render()}
        `;
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                if(data){
                    toastr.success("Đăng ký thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href="/signin"
                    }, 2000)
                }    
            } catch (error) {
                toastr.error(error.response.data);
            }
            
        })
    }
}
export default SignUp;