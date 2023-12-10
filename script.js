var parallaxdiv = document.getElementsByClassName("parallax")[0];
var parallaxtext = document.getElementById("parallax-text");
var parallaxbutton = document.getElementById("parallax-button");

var textSectionCenter = document.getElementsByClassName("text-section-center")[0];
var textSectionGrid = document.getElementsByClassName("text-section-grid")[0];
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

window.addEventListener("scroll", function() {
    var scrolledHeight = window.scrollY;
    parallaxdiv.style.backgroundPositionY = scrolledHeight * 0.05 + "px";
    parallaxtext.style.left =  50 + scrolledHeight * 0.05 + "%";
    parallaxbutton.style.right =  44 + scrolledHeight * 0.05 + "%";

    // when the text section is in the viewport, start the animation "fromTop"
    if (isInViewport(textSectionCenter)) {
        textSectionCenter.classList.add("fromTop");
    }
    if (isInViewport(textSectionGrid)) {
        textSectionGrid.classList.add("fromTop");
    }
});


setInterval(function() {
    // check if we are on top of the page
    var scrolledHeight = window.scrollY;
    if (scrolledHeight == 0) {
        parallaxbutton.style.zIndex = 50;
    }
    else {
        parallaxbutton.style.zIndex = 0;
    }
}, 100);




