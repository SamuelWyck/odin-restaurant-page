import chefPic from "./imgs/chef.jpeg";
import currentPic from "./imgs/current.jpeg";


const about = (function() {
    const contentDiv = document.querySelector("#content");
    const founderText = "";
    const currentDayText = "";


    function createImg(img) {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        return imgElement;
    };

    function createPara(text) {
        const para = document.createElement("p");
        para.innerText = text;
        return para;
    };

    function createGridItem(content, img=false) {
        const item = document.createElement("div");
        item.classList.add("about-grid-item");
        
        const contentElement = null;
        if (!img) {
            contentElement = createParaElement(content);
        } else {
            contentElement = createImg(content);
        }

        item.appendChild(contentElement);
        return item;
    };

    function createGrid() {
        const grid = document.createElement("div");

        grid.appendChild(createGridItem(founderText, false));
        grid.appendChild(createGridItem(chefPic, true));
        grid.appendChild(createGridItem(currentPic, true));
        grid.appendChild(createGridItem(currentDayText, false));

        return grid;
    };

    let createPage = function() {
        const aboutDiv = document.createElement("div");
        aboutDiv.classList.add("about-content");

        const titlePara = createPara("Our Story");
        const grid = createGrid();

        aboutDiv.appendChild(titlePara);
        aboutDiv.appendChild(grid);

        contentDiv.appendChild(aboutDiv);
    };

    return {"createPage": createPage};
})();

export default about;