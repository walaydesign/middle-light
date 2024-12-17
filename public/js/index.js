AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 55;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

var swiperBuilding = new Swiper(".building_swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
})

var swiperSilent = new Swiper(".silent_swiper", {
    slidesPerView: 1,
    loop: true,
    parallax: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
})

var swiperLuxury = new Swiper(".luxury_swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
        nextEl: "#luxury_next",
        prevEl: "#luxury_prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
})

$(window).on("resize", function() {
    mapResize();
})
mapResize();

function mapResize() {
    if($(window).width() <= 991) {
        let mapWidth = $(".map_pic").height() * 1.78;
        let windowWidth = $(window).width();
        let mapX = (mapWidth - windowWidth) * 0.3;
        $(".map_inner").animate({scrollLeft: mapX});
    }
}