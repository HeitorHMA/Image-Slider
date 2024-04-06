import dispayImage2 from "./image2";
import dispayImage5 from "./image5";
function dispayImage1(){
    const imageContainer = document.querySelector("#image-container");
    const image1 = document.createElement("img");
    image1.src = ("https://placehold.co/400")
    imageContainer.appendChild(image1);

    const image1Ball = document.querySelector(".image1");
    image1Ball.classList.add("lighted-ball")

    const prevArrow = document.querySelector(".arrow-previous")
        prevArrow.addEventListener("click",function(){
        image1Ball.classList.remove("lighted-ball");
        imageContainer.removeChild(image1);
        dispayImage5();
    })
    const nextArrow = document.querySelector(".arrow-next")
    nextArrow.addEventListener("click",function(){
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage2()
})
function nextImage(){
    const image1Ball = document.querySelector(".image1");
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage2();
}
setTimeout(() => {
    nextImage();
  }, "3000");
}
export default dispayImage1