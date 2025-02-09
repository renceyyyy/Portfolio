
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 3000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
        
    });
    $(document).ready(function () {
        $(".menu-btn").click(function () {
            $(".menu").toggleClass("active");
            $(".menu-btn i").toggleClass("active");
        });
    });
    
