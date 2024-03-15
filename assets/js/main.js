function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const mytimeout = setTimeout(layout,3000)
function  layout()
{
    document.getElementById("preloader").classList.remove("image")
    document.getElementById("img").style.display ="none"
}
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
      setTimeout(function () {
        let loadingOverlay = document.getElementById("loadingOverlay");
        loadingOverlay.style.display = "none";
        document.querySelector("body").classList.remove("overflow_hidden");
      }, 3000);
    });
  })