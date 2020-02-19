// const carouselSlide = document.getElementsByClassName('carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let counter = 0;

// const total = carouselImages.length;

// const size = carouselImages[0].clientWidth;

// nextBtn.addEventListener('click', ()=>{
//     counter++;
//     if (counter >= total) {
//         counter = 0;
//     }
//     carouselSlide.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
// });

// prevBtn.addEventListener('click', ()=>{
//     counter--;
//     if (counter < 0) {
//         counter = total - 1;
//     }
//     carouselSlide.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
// });



function slide1() {
  document.getElementById('imagem').src = "./images/foto1.jpg";
  setTimeout("slide2()", 3000)
}

function slide2() {
  document.getElementById('imagem').src = "./images/foto2.jpg";
  setTimeout("slide3()", 3000)
}

function slide3() {
  document.getElementById('imagem').src = "./images/foto3.jpg";
  setTimeout("slide1()", 3000)
}

