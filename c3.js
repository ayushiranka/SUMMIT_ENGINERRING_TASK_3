const image0 = document.querySelector("#image0");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const image4 = document.querySelector("#image4");

image0.addEventListener("click", function () {
  image0.style.top = "0%";
  image0.style.left = "0%";
  image0.style.transform = "rotate(360deg) translate(0%, -100%)";
  image1.style.top = "50%";
  image1.style.left = "50%";
  image1.style.transform = "rotate(360deg) translate(-50%, -50%)";
});
image1.addEventListener("click", function () {
  image1.style.top = "0%";
  image1.style.right = "0%";
  image1.style.transform = "rotate(-360deg) translate(+100%, -100%)";
  image2.style.top = "50%";
  image2.style.left = "50%";
  image2.style.transform = "rotate(360deg) translate(-50%, -50%)";
});
image2.addEventListener("click", function () {
  image2.style.bottom = "0%";
  image2.style.left = "0%";
  image2.style.transform = "rotate(-360deg) translate(-0%, +175%)";
  image3.style.top = "50%";
  image3.style.left = "50%";
  image3.style.transform = "rotate(-360deg) translate(-50%, -50%)";
});
image3.addEventListener("click", function () {
  image3.style.bottom = "0%";
  image3.style.right = "0%";
  image3.style.transform = "rotate(360deg) translate(+100%, +175%)";
  image4.style.top = "50%";
  image4.style.left = "50%";
  image4.style.transform = "rotate(-360deg) translate(-50%, -50%)";
});
image4.addEventListener("click", function () {
  image4.style.top = "0%";
  image4.style.left = "0%";
  image4.style.transform = "rotate(360deg) translate(0%, -100%)";
  image0.style.top = "50%";
  image0.style.left = "50%";
  image0.style.transform = "rotate(-360deg) translate(-50%, -50%)";
});