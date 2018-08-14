(function() {
    
    let slider = document.querySelector(".slider");
    let slides = slider.querySelectorAll(".slide");
    let slidesContainer = document.querySelector(".slides__container");
    let arrowRight = document.querySelector(".slider__arrow--right")
    let arrowLeft = document.querySelector(".slider__arrow--left")
    
    
    let counter = 0;
    let slideWidth = 325;
    
    function startSlider() {
        slidesContainer.style.marginLeft = `0px`;
        counter === 0;
        arrowLeft.style.display = "none";
    };
    
    function slidePreviosus() {
        arrowRight.style.display = "block";
        counter--;
        if (counter !== 0) {
            changeSlide(counter);
        } else {
            startSlider();
        }
    }
    
    function slideNext() {
        arrowLeft.style.display = "block";
        let resize = window.innerWidth;
        counter++;
    
        if (resize >= 1200) {
            let condition = slides.length - 3;
            lastSlide(condition);
        } else if (resize >= 768) {
           let condition = slides.length - 2;
            lastSlide(condition);
        } else {
            let condition = slides.length - 1;
            lastSlide(condition);
        }
    }
    
    function lastSlide(condition){
    
        if (counter !== condition) {
            changeSlide(counter);
        } else {
            changeSlide(counter);
            arrowRight.style.display = "none";
            counter = condition;
        }
    }
    
    function changeSlide(nr) {
        slidesContainer.style.marginLeft = `-${counter * slideWidth}px`;
    }
    
    arrowRight.addEventListener("click", slideNext);
    arrowLeft.addEventListener("click", slidePreviosus);
    // changeSlide(counter);
    startSlider();


}());

