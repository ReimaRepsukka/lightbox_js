var lightbox = document.getElementById("lightbox");
var imageGrid = document.getElementById("gridcontent");
var lightbox_img = lightbox.querySelector("img");
var images = imageGrid.querySelectorAll("img");
var currentId = 0;
var counter = 0;

imageGrid.querySelectorAll("img").forEach(markImage);
imageGrid.addEventListener("click", showImage);
lightbox.addEventListener("click", clickLightbox);

//Set id for image like "img_1"
function markImage(image){
    image.id="img_" + counter++;
}

//Shows the clicked image in lightbox and sets current selected id
function showImage(e){
    let elem = e.target;
    if(elem.tagName.toLowerCase() === "img"){
        lightbox.classList.add("active"); 
        lightbox_img.src = elem.src;
        currentId = elem.id.substring(4);
    }
}

//Hides the lightbox if it's clicked. 
//Shows next image, if the image is clicked.
function clickLightbox(e){
    if(e.target === e.currentTarget)
        lightbox.classList.remove("active");
    else{
        currentId = currentId >= images.length-1 ? 0 : ++currentId;
        lightbox_img.src = document.getElementById("img_"+currentId).src;
    }
}