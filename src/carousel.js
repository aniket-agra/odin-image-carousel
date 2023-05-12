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

let prevBtn = document.createElement("button");
prevBtn.textContent = "Prev";
prevBtn.addEventListener("click", slideRight);
bodyElem.appendChild(prevBtn);

let nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.addEventListener("click", slideLeft);
bodyElem.appendChild(nextBtn);

function slideRight(e) {
    console.log(carouselElem.querySelector(".carousel > img:last-child"));

}

function slideLeft(e) {
    console.log(carouselElem.querySelector(".carousel > img:nth-child(2)"));
}