import dispayImage2 from "./image2";
import dispayImage4 from "./image4";
function dispayImage3(){
    const imageContainer = document.querySelector("#image-container");
    const image1 = document.createElement("img");
    image1.src = ("https://placehold.co/400/black/white")
    imageContainer.appendChild(image1);

    const image1Ball = document.querySelector(".image3");
    image1Ball.classList.add("lighted-ball")

    const prevArrow = document.querySelector(".arrow-previous")
        prevArrow.addEventListener("click",function(){
        image1Ball.classList.remove("lighted-ball");
        imageContainer.removeChild(image1);
        dispayImage2()
    })
    const nextArrow = document.querySelector(".arrow-next")
    nextArrow.addEventListener("click",function(){
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage4()
})
function nextImage(){
    const image1Ball = document.querySelector(".image3");
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage4();
}
setTimeout(() => {
    nextImage();
  }, "3000");
}
export default dispayImage3