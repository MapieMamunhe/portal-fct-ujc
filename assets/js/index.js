$(document).ready(function () {
    $("#news").hide();

        $("#news").slideDown(800, function() {
        $("aside").animate(
            {
            right: "0"
        },
        1000,
        'easeOutBounce',
        );
        });
      
}); // end ready

/**Codigo para o slide show */

let slideIndex = 1;
showSlides(slideIndex);

// controle de proximo/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// controle de botoes (dots)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}