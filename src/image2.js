import dispayImage1 from "./image1";
import dispayImage3 from "./image3";
function dispayImage2(){
    const imageContainer = document.querySelector("#image-container");
    const image1 = document.createElement("img");
    image1.src = ("https://placehold.co/400/orange/white")
    imageContainer.appendChild(image1);

    const image1Ball = document.querySelector(".image2");
    image1Ball.classList.add("lighted-ball")

    const prevArrow = document.querySelector(".arrow-previous")
        prevArrow.addEventListener("click",function(){
        image1Ball.classList.remove("lighted-ball");
        imageContainer.removeChild(image1);
        dispayImage1()
    })
    const nextArrow = document.querySelector(".arrow-next")
    nextArrow.addEventListener("click",function(){
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage3()
})
function nextImage(){
    const image1Ball = document.querySelector(".image2");
    image1Ball.classList.remove("lighted-ball");
    imageContainer.removeChild(image1);
    dispayImage3();
}
setTimeout(() => {
    nextImage();
  }, "3000");
}
export default dispayImage2