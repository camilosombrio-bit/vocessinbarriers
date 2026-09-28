const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach(image=>{
    image.addEventListener("click",()=>{
        image.classList.toggle("gallery-active");
    });
});
