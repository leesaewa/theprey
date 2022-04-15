//header
let headerScroll = document.querySelector('header');
let headerHeight = headerScroll.offsetHeight;

window.onscroll = function() {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    headerScroll.classList.add("scroll");
  } else {
    headerScroll.classList.remove("scroll");
  }
}

// nav
const mobileNav = document.querySelector(".hamburger");
const navContents = document.querySelector("nav");
const navLinkBtn = document.querySelector(".out-btn");

mobileNav.addEventListener("click", () => {
  navContents.classList.toggle("open");
  mobileNav.classList.toggle("open");
  navLinkBtn.classList.toggle("open");
});



//modal
const modalBody = document.querySelector("body");
const modalBtn = document.querySelectorAll("[data-target]");
const closeBtn = document.querySelectorAll(".close-btn");
const overlay = document.querySelector("#overlay");

modalBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
    modalBody.style.overflow = "hidden";
  });
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(btn.dataset.target).classList.remove("active");
    overlay.classList.remove("active");
    modalBody.style.overflow = "auto";
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
    modalBody.style.overflow = "auto";
  }
}


// slider
const slides = document.querySelectorAll(".slides li");
const numOfSlide  = slides.length;
let slideNum = 0;

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function eventHandler() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNum++;

  if(slideNum > (numOfSlide - 1)) {
    slideNum = 0;
  }

  slides[slideNum].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  eventHandler()
});

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNum--;

  if(slideNum < 0) {
    slideNum = numOfSlide - 1;
  }

  slides[slideNum].classList.add("active");
});

let autoPlay;
let repeater = () => {
  autoPlay = setInterval("eventHandler()", 4000);
};
repeater();





//tab
const tabs = document.querySelectorAll(".tab-nav li")
const tabContents = document.querySelectorAll(".tab-cont");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (clk) => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
    clk.preventDefault();
  });
});




// scroll top
const topScroll = document.getElementById("topScroll");

topScroll.addEventListener("click", function(event) {
  event.preventDefault();
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
});
