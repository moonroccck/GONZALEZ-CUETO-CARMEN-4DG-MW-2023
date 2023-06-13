/* */
function comprobarEmail() {


	var email = document.getElementById("email-usuario");

	var validarEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


	if (validarEmail.test(email.value)) {
		alert('Email correcto');
		return true;
	} else {
		alert('Email incorrecto');
		return false;
	}

}
let currentImageIndex = 0;

function startTransition() {
	const images = document.querySelectorAll('.image-transition');

	images[currentImageIndex].classList.remove('active');
	currentImageIndex = (currentImageIndex + 1) % images.length;
	images[currentImageIndex].classList.add('active');
}

setInterval(startTransition, 3000); // Cambia de imagen cada 3 segundos


//Funcion para carrusel de divs
const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(slideIndex) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    
      slides[slideIndex].classList.add('active');
    }
    
    function nextSlide() {
      currentSlide++;
      if (currentSlide === slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    }
    //document.getElementById('izq').
    document.querySelector('#izq').addEventListener('click', prevSlide);
    document.querySelector('#der').addEventListener('click', nextSlide);
    
    showSlide(currentSlide);