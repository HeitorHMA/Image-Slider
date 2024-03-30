function dispayImage1(){
    const imageContainer = document.querySelector("#image-container");
    const image1 = document.createElement("img");
    image1.src = ("https://placehold.co/400")
    imageContainer.appendChild(image1);

    const image1Ball = document.querySelector(".image1");
    image1Ball.classList.add("lighted-ball")
}
export default dispayImage1