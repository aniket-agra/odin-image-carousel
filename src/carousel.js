import "./style.css"

let bodyElem = document.querySelector("body");

let carouselElem = document.createElement("div");
carouselElem.classList.add("carousel");

for (let i = 0; i < 10; i++) {
    let image = document.createElement("img");
    image.classList.add("picture");
    image.setAttribute("src", "");
    image.setAttribute("alt", `Img${i}`);
    carouselElem.appendChild(image);
}

bodyElem.appendChild(carouselElem);