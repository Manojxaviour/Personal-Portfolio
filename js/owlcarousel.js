$(".clients-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
});
