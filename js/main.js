const bluring = () => {
  document.querySelector("main").classList.toggle("filter");
  document.querySelector(".application").classList.toggle("show");
}

const animatedObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated-show');
    }
  });
});

const animated = document.querySelectorAll('.animated');
animated.forEach((el) => animatedObserver.observe(el));

const swiper = new Swiper(".swiper", {
  spaceBetween: 70,
  slidesPerView: "auto",
  watchSlidesProgress: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
  },
});