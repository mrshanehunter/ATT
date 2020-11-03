
 
function preloadImages(e) {
    var imageArray = new Array(
    './assets/atttarotcard.png',
    './assets/hdiw-01.svg',
    './assets/readersign-01.svg',
    './assets/readerzodiac-01.svg',
    './assets/sampleYorN.png',
    './assets/chakra/base.svg',
    './assets/chakra/crown.svg',
    './assets/chakra/heart.svg',
    './assets/chakra/sacral.svg',
    './assets/chakra/sevenchakra.svg',
    './assets/chakra/solar.svg',
    './assets/chakra/thirdEye.svg',
    './assets/chakra/throat.svg',
    './assets/readingImages/CF.jpg',
    './assets/readingImages/CFB.jpg',
    './assets/readingImages/HF.jpg',
    './assets/readingImages/HWB.jpg',
    './assets/readingImages/HWBB.jpg',
    './assets/readingImages/LR.jpg',
    './assets/readingImages/LRB.jpg',
    './assets/readingImages/NMSM.jpg',
    './assets/readingImages/NMSQ.jpg',
    './assets/readingImages/RVL.jpg',
    './assets/readingImages/RVLB.jpg',
    './assets/readingImages/SQ5.jpg',
    './assets/readingImages/SQ10.jpg',
    './assets/readingImages/SUB.jpg',
    './assets/testimonialcards/TCC0.png',
    './assets/testimonialcards/TCC1.png',
    './assets/testimonialcards/TCC2.png',
    './assets/testimonialcards/TCC3.png',
    './assets/testimonialcards/TCC4.png',
    './assets/testimonialcards/TCC5.png',
    './assets/testimonialcards/TCC6.png',
    './assets/testimonialcards/TCC7.png',
    './assets/testimonialcards/TCC8.png',
    './assets/testimonialcards/TCC9.png',
    );
 
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.src = imageArray[i];
    }
}

this.addEventListener("DOMContentLoaded", preloadImages, true);
