AOS.init();

// ---------------------------------------

window.onscroll = function (e) {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.querySelector("header");

  scrollY <= this.lastScroll
    ? header.classList.add("showed")
    : header.classList.remove("showed");

  scrollY <= this.lastScroll
    ? header.classList.add("showed")
    : responsiveNav.classList.remove("active");

  this.lastScroll = scrollY;
};

// ---------------------------------------

function smoothScroll(e) {
  console.log(e);
  e.scrollIntoView({
    behavior: "smooth",
  });
}

// ---------------------------------------

let menu = document.getElementById("menu");
let responsiveNav = document.querySelector(".responsive-nav");

menu.onclick = () => {
  responsiveNav.classList.toggle("active");
};
