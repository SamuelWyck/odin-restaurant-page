import homeChicken from "./imgs/chicken.jpeg";

const homePage = (function() {
    const contentDiv = document.querySelector("#content");


    let createTagLineElement = function() {
        const para = document.createElement("p");
        para.textContent = "Family owned since 1647. Qualtiy service with bouncy chicken.";
        return para
    };

    let createImgElement = function() {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img-banner");

        const chickenImg = document.createElement("img");
        chickenImg.src = homeChicken;

        imgDiv.appendChild(createTagLineElement());
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