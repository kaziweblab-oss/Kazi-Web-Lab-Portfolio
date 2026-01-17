/*--------------------------
 Navigation Section Elements 
----------------------------*/
var menuBtn = document.querySelector("#nav-btn");
var mobileMenu = document.querySelector("#nav-bar");
var overlay = document.querySelector("#overlay");
var navLinks = document.querySelectorAll(".nav-menu__link");
var stickyNavButton = document.querySelector("#second-btn");
var navSection = document.querySelector("#nav");
var navClick = document.querySelector(".my");
var navClick1 = document.querySelector(".my1");
var navClick2 = document.querySelector(".my2");
var navClick3 = document.querySelector(".my3");

/*------------------
 Navigation Section
--------------------*/

let isScrolling;
let ignoreScroll = false;
function closeMenu() {
  window.clearTimeout(isScrolling);
  if (mobileMenu.classList.contains("menu--open1")) {
    mobileMenu.classList.remove("menu--open1");
    mobileMenu.classList.add("nav-bar1");
    overlay.classList.remove("overlay-1");
  } else {
    mobileMenu.classList.remove("menu--open2");
    mobileMenu.classList.add("nav-bar2");
    overlay.classList.remove("overlay-2");
  }
  stickyNavButton.classList.remove("show");
}

/*-------------------------
 Logic for Scrollin Event
--------------------------*/
window.addEventListener("scroll", () => {
  if (mobileMenu.classList.contains("menu--open1")) {
    mobileMenu.classList.remove("nav-bar2");
    mobileMenu.classList.add("nav-bar1");
    mobileMenu.classList.remove("menu--open1");
    overlay.classList.remove("overlay-1");
  } else {
    mobileMenu.classList.remove("nav-bar1", "menu--open2");
    mobileMenu.classList.add("nav-bar2");
    overlay.classList.remove("overlay-2");
  }

  if (ignoreScroll) return;

  if (window.scrollY > navSection.offsetHeight) {
    stickyNavButton.classList.add("show");

    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      if (
        !mobileMenu.classList.contains("menu--open1") &&
        !mobileMenu.classList.contains("menu--open2")
      ) {
        stickyNavButton.classList.remove("show");
      }
    }, 2500);
  } else {
    stickyNavButton.classList.remove("show");
  }
});

/*----------------------------
 Event for Clicking Menu Link
------------------------------*/
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    ignoreScroll = true;
    closeMenu();

    setTimeout(() => {
      ignoreScroll = false;
    }, 500);
  });
});

/*-----------------------
 Events for Button Click
-------------------------*/
stickyNavButton.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("menu--open2");
  if (mobileMenu.classList.contains("menu--open2")) {
    overlay.classList.add("overlay-2");
    stickyNavButton.classList.add("show");
    window.clearTimeout(isScrolling);
  } else {
    closeMenu();
  }
});

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("nav-bar2");
  mobileMenu.classList.toggle("menu--open1");
  if (mobileMenu.classList.contains("menu--open1")) {
    overlay.classList.add("overlay-1");
  } else {
    mobileMenu.classList.add("nav-bar1");
    overlay.classList.remove("overlay-1");
    closeMenu();
  }
});

/*------------------------------
 Event for Clicking Nav Section
-------------------------------*/

navClick.addEventListener("click", () => {
  if (mobileMenu.classList.contains("menu--open1")) {
    mobileMenu.classList.remove("nav-bar2", "menu--open1");
    mobileMenu.classList.add("nav-bar1");
    overlay.classList.remove("overlay-1");
  }
});

navClick1.addEventListener("click", () => {
  if (mobileMenu.classList.contains("menu--open1")) {
    mobileMenu.classList.remove("nav-bar2", "menu--open1");
    mobileMenu.classList.add("nav-bar1");
    overlay.classList.remove("overlay-1");
  }
});

navClick2.addEventListener("click", () => {
  if (mobileMenu.classList.contains("menu--open1")) {
    mobileMenu.classList.remove("nav-bar2", "menu--open1");
    mobileMenu.classList.add("nav-bar1");
    overlay.classList.remove("overlay-1");
  }
});

navClick3.addEventListener("click", () => {
  if (mobileMenu.classList.contains("menu--open1")) {
    mobileMenu.classList.remove("nav-bar2", "menu--open1");
    mobileMenu.classList.add("nav-bar1");
    overlay.classList.remove("overlay-1");
  }
});

overlay.addEventListener("click", closeMenu);

/*-----------------------------
 Hero Section Typewriter Logic
------------------------------*/
var textElement = document.querySelector(".typewriter");
var words = ["Web Developer", "UI Designer", "Problem Solver"];
var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;

function type() {
  var currentWord = words[wordIndex];
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  var typeSpeed = isDeleting ? 100 : 200;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }
  setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  if (mobileMenu) {
    mobileMenu.classList.add("animation");
  }
  if (textElement) {
    type();
  }
});

/*-----------------------------------------
 All js clearing for Screen sizes above 576px
------------------------------------------*/

const desktopView = window.matchMedia("(min-width: 576px)");

function handleScreenChange(e) {
  if (e.matches) {
    mobileMenu.classList.remove(
      "menu--open1",
      "menu--open2",
      "nav-bar1",
      "nav-bar2",
      "animation"
    );
    overlay.classList.remove("overlay-1", "overlay-2");
    stickyNavButton.classList.remove("show");

    window.clearTimeout(isScrolling);
  } else {
    mobileMenu.classList.add("animation");
  }
}

desktopView.addEventListener("change", handleScreenChange);
handleScreenChange(desktopView);

/*-----------------------------------------
 Logic to Disable Scroll DURING Resize Only
------------------------------------------*/
let resizeTimer;

window.addEventListener("resize", () => {
  ignoreScroll = true;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ignoreScroll = false;
  }, 500);
});
