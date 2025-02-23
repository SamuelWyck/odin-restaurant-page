import chefPic from "./imgs/chef.jpeg";
import currentPic from "./imgs/current.jpeg";


const about = (function() {
    const contentDiv = document.querySelector("#content");
    const founderText = "In 1647, in a little village outside of Paris, our founder, Monsieur Poulet le Coq, made a groundbreaking discovery. While experimenting with new chicken recipes he realized that using rubber chickens would make sure his food was always al dente. With this discovery Le Coq immediately opened a restaurant to sell food made with rubber chickens. The restaurant was a huge success, and Le Coq was the proud owner for 67.5 years before his death in 1714. His final wish was that his family continue running the restaurant so that the art of rubber chicken cooking would not be lost to the world.";
    const currentDayText = "Today Le Caoutchouc Poulet still honors Monsieur Poulet le Coq's wishes. We proudly trace our ownership through an unbroken line of Coqs all the way back to Monsieur Poulet le Coq himself. Through the years, though we have grown and opened new locations across the world, we still hold to our original mission to provide the best quality rubber chicken in the world.";


    function createImg(img) {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        return imgElement;
    };

    function createParaElement(text) {
        const para = document.createElement("p");
        para.innerText = text;
        return para;
    };

    function createGridItem(content, img=false) {
        const item = document.createElement("div");
        item.classList.add("about-grid-item");
        
        let contentElement = null;
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
        grid.classList.add("about-grid")

        grid.appendChild(createGridItem(founderText, false));
        grid.appendChild(createGridItem(chefPic, true));
        grid.appendChild(createGridItem(currentPic, true));
        grid.appendChild(createGridItem(currentDayText, false));

        return grid;
    };

    let createPage = function() {
        const aboutDiv = document.createElement("div");
        aboutDiv.classList.add("about-content");

        const titlePara = createParaElement("Our Story");
        titlePara.classList.add("about-title");
        const grid = createGrid();

        aboutDiv.appendChild(titlePara);
        aboutDiv.appendChild(grid);

        contentDiv.appendChild(aboutDiv);
    };

    return {"createPage": createPage};
})();

export default about;