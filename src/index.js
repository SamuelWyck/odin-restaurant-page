import "./styles.css";
import homePage from "./home-page";


const pageHandler = (function() {
    const header = document.querySelector("header");
    const contentDiv = document.querySelector("#content");
    const home = homePage;

    showHomePage();
    

    header.addEventListener("click", function(event) {
        if (event.target.matches(".banner")) {
            showHomePage();
        } else if (event.target.matches(".menu-btn")) {

        } else if (event.target.matches(".order-btn")) {

        } else if (event.target.matches("about-btn")) {

        }
    });

    function showHomePage() {
        clearContent();
        home.createPage();
    };

    function clearContent() {
        contentDiv.innerHTML = "";
    };

})();