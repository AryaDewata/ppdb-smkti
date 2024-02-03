const nav = document.querySelector("nav");
const navLink = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  backgroundNavbar();
};

function backgroundNavbar() {
  if (document.documentElement.scrollTop < 100) {
    nav.style.background = "none";
    nav.style.boxShadow = "none";
    navLink.forEach((e) => (e.style.color = "white"));
  } else {
    nav.style.background = "white";
    nav.style.boxShadow = "0.5px 0.5px 3px grey";
    navLink.forEach((e) => (e.style.color = "#7d7d7d"));
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
