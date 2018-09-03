var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
var current = 0;

// clear all img
function reset(){
    for(let i=0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = "block";
}

// show prev
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// left arrow click
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();