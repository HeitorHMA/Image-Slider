import dispayImage1 from "./image1";
import dispayImage4 from "./image4";
function dispayImage5(){
    const imageContainer = document.querySelector("#image-container");
    const image1 = document.createElement("img");
    image1.src = ("https://placehold.co/400/white/black")
    imageContainer.appendChild(image1);

    const image1Ball = document.querySelector(".image5");
    image1Ball.classList.add("lighted-ball")

    const prevArrow = document.querySelector(".arrow-previous")
        prevArrow.addEventListener("click",function(){
        image1Ball.classList.remove("lighted-ball");
        imageContainer.removeChild(image1);
        dispayImage4()
    })
    const nextArrow = document.querySelector(".arrow-next")
    nextArrow.addEventListener("click",function(){
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage1()
})
}
export default dispayImage5