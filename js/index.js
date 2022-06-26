// declare variable
const nav = document.getElementById("links");
// menu hamburger html node
const cancle = document.getElementById("hamburger");

// nav menu hamburger icons
const hamburger = () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
    cancle.setAttribute("src", "./images/cancel-svgrepo-com.svg");
  } else {
    nav.style.display = "none";
    cancle.setAttribute("src", "./images/icon-hamburger.svg");
  }
};

// change the article background image when width  less than 540px
if (window.screen.width < 540) {
  document
    .getElementById("article-1-image")
    .setAttribute("src", "./images/image-mockups-2.png");
}
