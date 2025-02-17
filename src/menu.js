import saladPic from "./imgs/salad.jpeg";
import soupPic from "./imgs/soup1.jpeg";
import sandwichPic from "./imgs/sandwich.jpeg";
import roastPic from "./imgs/roast1.jpeg";


const menu = (function() {
    const contentDiv = document.querySelector("#content");


    function createTitle() {
        const para = document.createElement("p");
        para.classList.add("menu-title");
        para.innerText = "Signature Dishes";
        return para;
    };

    function createGridItem(img, title) {
        const itemDiv = document.createElement("div");
        
        const imgElement = document.createElement("img");
        imgElement.src = img;

        const para = document.createElement("p");
        para.innerText = title;

        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(para);

        return itemDiv;
    };

    function createGrid() {
        const grid = document.createElement("div");
        grid.classList.add("menu-grid");

        grid.appendChild(createGridItem(saladPic, "Chicken Salad"));
        grid.appendChild(createGridItem(soupPic, "Chicken Soup"));
        grid.appendChild(createGridItem(sandwichPic, "Chicken Sandwich"));
        grid.appendChild(createGridItem(roastPic, "Roast Chicken"));

        return grid;
    };

    let createPage = function() {
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu-content");

        menuDiv.appendChild(createTitle());
        menuDiv.appendChild(createGrid());

        contentDiv.appendChild(menuDiv);
    };

    return {"createPage": createPage};
})();

export default menu;