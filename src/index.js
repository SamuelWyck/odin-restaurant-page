import "./styles.css";
import homePage from "./home-page.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";


const pageHandler = (function() {
    const header = document.querySelector("header");
    const contentDiv = document.querySelector("#content");
    const home = homePage;
    const menu = menuPage;
    const about = aboutPage;

    showPage(home);


    header.addEventListener("click", function(event) {
        if (event.target.matches(".banner")) {
            showPage(home);
        } else if (event.target.matches(".menu-btn")) {
            showPage(menu);
        } else if (event.target.matches(".order-btn")) {

        } else if (event.target.matches(".about-btn")) {
            showPage(about);
        }
    });

    function showPage(page) {
        clearContent();
        page.createPage();
    };

    function clearContent() {
        contentDiv.innerHTML = "";
    };

})();