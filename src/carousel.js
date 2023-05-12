import "./style.css"

let bodyElem = document.querySelector("body");

let carouselElem = document.createElement("div");
carouselElem.classList.add("carousel");

let displayElem = document.createElement("div");
displayElem.classList.add("display");

for (let i = 0; i < 10; i++) {
    let image = document.createElement("img");
    image.classList.add("picture");
    image.setAttribute("src", "");
    image.setAttribute("alt", `Img${i}`);
    if (i === 0) {
        displayElem.appendChild(image);
        carouselElem.appendChild(displayElem);
    }
    else
        carouselElem.appendChild(image);
}

bodyElem.appendChild(carouselElem);