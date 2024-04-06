import dispayImage3 from "./image3";
import dispayImage5 from "./image5";
function dispayImage4(){
    const imageContainer = document.querySelector("#image-container");
    const image1 = document.createElement("img");
    image1.src = ("https://placehold.co/400/red/green")
    imageContainer.appendChild(image1);

    const image1Ball = document.querySelector(".image4");
    image1Ball.classList.add("lighted-ball")

    const prevArrow = document.querySelector(".arrow-previous")
        prevArrow.addEventListener("click",function(){
        image1Ball.classList.remove("lighted-ball");
        imageContainer.removeChild(image1);
        dispayImage3()
    })
    const nextArrow = document.querySelector(".arrow-next")
    nextArrow.addEventListener("click",function(){
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage5()
})
}
export default dispayImage4