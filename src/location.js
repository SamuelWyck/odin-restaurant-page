import USPic from "./imgs/us.jpeg";
import FrenchPic from "./imgs/french.jpeg";


const location = (function() {
    const contentDiv = document.querySelector("div");
    const usAddress1 = "145 West 53rd Street, New York, New York 10019";
    const usAddress2 = "3655 South Las Vegas Blvd South, Las Vegas, Nevada 89109";
    const frenchAddress1 = "52 Rue Francois Miron, 75004 Paris, France";
    const frenchAddress2 = "Parc du Chateau de, 78000 Versailles, France";


    function createParaElement(text) {
        const para = document.createElement("p");
        para.textContent = text;
        return para;
    };

    function createImg(img) {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        return imgElement;
    };

    function createGrid() {

    };

    let createPage = function() {
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("location-content");

    };

    return {"createPage": createPage};
})();

export default location;