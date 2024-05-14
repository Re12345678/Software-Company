// const ticon=document.querySelector("#ticon");
let links=document.getElementById("links");
let close=document.getElementById("close");
let ticon=document.getElementById("ticon");

ticon.onclick=function(){
links.style.display="flex";
}
close.onclick=function(){
    links.style.display="none";
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


// filter

const fibuttons=document.querySelectorAll(".buttons");
const filteritems=document.querySelectorAll(".filterd-images .items");

const filtercards = (e) => {
    // Remove 'active' class from all elements
    const activeElements = document.querySelectorAll('.active');
    activeElements.forEach(element => {
        element.classList.remove('active');
    });
    e.target.classList.add('active');

    filteritems.forEach(item=>{
        item.classList.add("hide");
    if(item.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        item.classList.remove("hide");
    }
    })
};
fibuttons.forEach(button =>button.addEventListener("click",filtercards));



let curds=document.querySelectorAll(".curds .box");
let bollets=document.querySelectorAll(".bollets .bollet");

const moveactive = (e) => {
    const activeBollet = document.querySelector(".bollets .active");
    if (activeBollet) {
        activeBollet.classList.remove("active");
    }
    e.target.classList.add("active");

    const bolletDataName = e.target.dataset.name;
    curds.forEach(item => {
        item.style.cssText = "transform:translatey(0);";
        if (item.dataset.name === bolletDataName) {
            item.style.cssText = "transform:translatey(10px);";
        }
    });
};

bollets.forEach(button => button.addEventListener("click", moveactive));





let isMoving = false;
let slideInterval;
let currentSpeed = 0.5; // Initial speed
const deceleration = 0.01; // Deceleration rate

function handleMouseMove(event) {
    if (!isMoving) {
        isMoving = true;
        smoothSlide();
    }
}

function handleMouseLeave() {
    clearInterval(slideInterval);
    isMoving = false;
}

function smoothSlide() {
    const slider = document.querySelector('.curds');
    const maxScroll = slider.scrollWidth - slider.offsetWidth;

    slideInterval = setInterval(() => {
        if (!isMoving) {
            clearInterval(slideInterval);
            return;
        }

        slider.scrollLeft += currentSpeed;

        if (slider.scrollLeft <= 0 || slider.scrollLeft >= maxScroll) {
            isMoving = false;
            clearInterval(slideInterval);
            return;
        }

        currentSpeed -= deceleration;
        if (currentSpeed <= 0) {
            currentSpeed = 0;
            isMoving = false;
            clearInterval(slideInterval);
        }
    }, 16); // Approx. 60 FPS
}

document.querySelector('.curds').addEventListener('mousemove', handleMouseMove);
document.querySelector('.curds').addEventListener('mouseleave', handleMouseLeave);
