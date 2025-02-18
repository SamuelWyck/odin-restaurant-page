import USPic from "./imgs/us.jpeg";
import FrenchPic from "./imgs/french.jpeg";


const location = (function() {
    const contentDiv = document.querySelector("div");
    const usAddress1 = "145 West 53rd Street, New York, New York 10019";
    const usAddress2 = "3655 South Las Vegas Blvd South, Las Vegas, Nevada 89109";
    const frenchAddress1 = "52 Rue Francois Miron, 75004 Paris, France";
    const frenchAddress2 = "Parc du Chateau de, 78000 Versailles, France";

    const contentMap = {
        "0": [usAddress1, false],
        "1": [USPic, true],
        "2": [usAddress2, false],
        "3": [USPic, true],
        "4": [frenchAddress1, false],
        "5": [FrenchPic, true],
        "6": [frenchAddress2, false],
        "7": [FrenchPic, true]
    };


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

    function createGridItem(content, img=false) {
        const item = document.createElement("div");
        item.classList.add("locations-grid-item");

        let element = null;
        if (img) {
            element = createImg(img);
        } else {
            element = createParaElement(content);
        }

        item.appendChild(element);
        return item;
    };

    function createGrid() {
        const grid = document.createElement("div");
        grid.classList.add("locations-grid");

        for (let i = 0; i < Object.keys(contentMap).length; i += 1) {
            const content = contentMap[i];
            grid.appendChild(createGridItem(content[0], content[1]));
        }

        return grid;
    };

    let createPage = function() {
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("location-content");

        const title = createParaElement("Locations");
        title.classList.add("locations-title");
        const grid = createGrid();

        locationDiv.appendChild(title);
        locationDiv.appendChild(grid);
        
        contentDiv.appendChild(locationDiv);
    };

    return {"createPage": createPage};
})();

export default location;