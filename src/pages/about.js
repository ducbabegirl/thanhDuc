import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

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
        </main>
        ${Footer.render()}
    </div>
        
        `;
    },
};

export default AboutPage;