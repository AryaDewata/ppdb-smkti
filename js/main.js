const nav = document.querySelector("nav");
const navLink = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  backgroundNavbar();
};

function backgroundNavbar() {
  if (document.documentElement.scrollTop < 100) {
    nav.style.background = "none";
    nav.style.backdropFilter = "none";
    nav.style.boxShadow = "none";
    navLink.forEach((e) => (e.style.color = "white"));
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.8)";
    nav.style.backdropFilter = "blur(2px)";
    nav.style.boxShadow = "0.1px 0.5px 8px rgba(0, 0, 0, 0.1)";
    navLink.forEach((e) => (e.style.color = "#8d8d8d"));
  }
}

const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  // element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
  if (document.documentElement.scrollTop > 200) nav.classList.add("nav--alt");
  else nav.classList.remove("nav--alt");
});
