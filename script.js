var parallaxdiv = document.getElementsByClassName("parallax")[0];
var parallaxtext = document.getElementById("parallax-text");
var parallaxbutton = document.getElementById("parallax-button");

window.addEventListener("scroll", function() {
    var scrolledHeight = window.scrollY;
    parallaxdiv.style.backgroundPositionY = scrolledHeight * 0.05 + "px";
    parallaxtext.style.left =  50 + scrolledHeight * 0.05 + "%";
    parallaxbutton.style.right =  44 + scrolledHeight * 0.05 + "%";
});