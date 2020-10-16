let i = 0;
let testimonials = [];
let time = 4000;

testimonials[0] = `../assets/testimonialcards/tcc0.png`;
testimonials[1] = `../assets/testimonialcards/tcc1.png`;
testimonials[2] = `../assets/testimonialcards/tcc2.png`;
testimonials[3] = `../assets/testimonialcards/tcc3.png`;
testimonials[4] = `../assets/testimonialcards/tcc4.png`;
testimonials[5] = `../assets/testimonialcards/tcc5.png`;
testimonials[6] = `../assets/testimonialcards/tcc6.png`;
testimonials[7] = `../assets/testimonialcards/tcc7.png`;
testimonials[8] = `../assets/testimonialcards/tcc8.png`;
testimonials[9] = `../assets/testimonialcards/tcc9.png`;

function carouselSlide() {
    document.slide.src = testimonials[i];
    

    if(i < testimonials.length -1) {
        i++;
    }else {
        i = 0;
    }

    setTimeout("carouselSlide()", time);
}

// window.onload = carouselSlide();