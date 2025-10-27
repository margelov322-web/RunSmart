const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 50,
    speed: 1000,
    direction: 'horizontal',
    // autoHeight: 'true',
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});