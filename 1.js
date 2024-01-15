let currentSlide = 0;  
const slides = document.querySelectorAll('#slideshow img');  
  
function nextSlide() {  
    slides[currentSlide].style.opacity = 0;  
    currentSlide = (currentSlide +1) % slides.length;  
    slides[currentSlide].style.opacity = 1;  
}  
  
setInterval(nextSlide, 2000); 