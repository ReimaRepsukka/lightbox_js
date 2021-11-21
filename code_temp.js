var lightbox = document.getElementById("lightbox");
var imageGrid = document.getElementById("gridcontent");
var lightbox_img = lightbox.querySelector("img");
var images = imageGrid.querySelectorAll("img");

//Grid is the "currentTarget" of events.
imageGrid.addEventListener("click", showImage);
lightbox.addEventListener("click", clickLightbox);

//Shows the clicked image in lightbox and sets current selected id
function showImage(e){
    let elem = e.target;
    if(elem.tagName.toLowerCase() === "img"){
        lightbox.classList.add("active");
        lightbox_img.src = elem.src;
    }
}

//Hides the lightbox if it's clicked.
function clickLightbox(e){
    //If the outside of image is clicked.
    // if(e.target === e.currentTarget)
        lightbox.classList.remove("active");
}