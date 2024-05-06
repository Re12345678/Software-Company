let bar=document.getElementById("toggle");
let link=document.getElementById("links");
let close=document.getElementById("close");
bar.onclick=function(){
link.style.display="flex";
}
close.onclick=function(){
    link.style.display="none";
    }


    let slideIndex = 0;

    function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n < 0) {
    slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
    slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    }
    
    function nextSlide() {
    showSlide(++slideIndex);
    }
    
    function prevSlide() {
    showSlide(--slideIndex);
    }
    
    showSlide(slideIndex);