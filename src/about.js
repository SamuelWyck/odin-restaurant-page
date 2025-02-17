import chefPic from "./imgs/chef.jpeg";
import currentPic from "./imgs/current.jpeg";


const about = (function() {
    const contentDiv = document.querySelector("#content");
    const founderText = "In 1646, in a little village outside of Paris, our founder, Monsieur le Coq, made a groundbreaking discovery. While experimenting with new chicken recipes he realized that using rubber chickens would make sure his food was always al dente. With this discovery Monsieur le Coq immediately opened a restaurant to sell food made with rubber chickens. The restaurant was a huge success and Monsieur le Coq was the proud owner for 67.5 years before his death. His final wish was that his family continue running the restaurant so that the art of rubber chicken cooking would not be lost to the world.";
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