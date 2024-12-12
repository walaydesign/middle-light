AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

var swiperBuilding = new Swiper(".building_swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
})

var swiperInternational = new Swiper(".international_swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
        nextEl: "#international_next",
        prevEl: "#international_prev",
    },
})