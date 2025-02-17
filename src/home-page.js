import homeChicken from "./imgs/chicken.jpeg";

const homePage = (function() {
    const contentDiv = document.querySelector("#content");


    let createImgElement = function() {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img-banner");

        const chickenImg = document.createElement("img");
        chickenImg.src = homeChicken;

        imgDiv.appendChild(chickenImg);

        return imgDiv;
    };

    let createPage = function() {
        const imgElement = createImgElement();

        contentDiv.appendChild(imgElement);
    };
    
    return {"createPage": createPage};
})();

export default homePage;