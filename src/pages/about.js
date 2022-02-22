import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import CmtPage from "../components/cmt";
const AboutPage = {
    render() {
        return `
        <div class="">
        ${Header.render()}
        <main>
            <div class="banner">
                ${Banner.render()}
            </div>
            <h1>About Page</h1>
            ${CmtPage.render()}
        </main>
        ${Footer.render()}
    </div>
        
        `;
    },
};

export default AboutPage;