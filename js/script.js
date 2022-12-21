 (function($) {
    $(document).ready(function() {
        if (window.matchMedia('(max-width: 1023px)').matches) {
            $('#catalog-menu li').equalHeight();

            $('.spoiler_box a').on('click touchstart', function() {
                $(this).parents('.spoiler_box').siblings('.hidden-box').slideToggle();
                $(this).siblings().toggleClass('off');
                isopen = $(this).siblings().hasClass('off');
                $(this).text(isopen ? "Свернуть" : "Развернуть");
            });
        }

        /*Вызываем слайдер*/
        $('.slider-inner ul').bxSlider({
            auto: true,
            pause: 5000,
            mode : 'fade',
            controls: false,
            pager : true,
            minSlides: 1,
            maxSlides: 1,
            responsive: true
        });

        /***-=- Img changer -=- ***/

        $(".other-img img").on("click", function(){
            var that = this;
            if($('.main-image .image img').attr('src') !=$(this).attr("data-href")) {
                $(this).addClass("current").parent().siblings().children().removeClass("current");
                $(".main-image .image img").fadeOut(200, function(){
                    $(this).attr("src", $(that).attr("data-href")).fadeIn(200);
                });
            }
            return false;
        });


        $(".owl-carousel").owlCarousel({
            loop:false,
            responsiveClass:true,
            navText:'',
            margin: 0,
            dots: false,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:3,
                    nav:true
                },
                1280:{
                    items:4,
                    nav:true
                }
            }

        });

        $('.to-cart').click(function(e) {
            $.fancybox({
                content: $('.success_cart'),
                type: 'html',
                scrollOutside : false,
                padding: 0,
                maxWidth: 846,
                helpers: {
                    overlay: {
                        locked: false
                    }
                }
            });
            e.preventDefault();
        })

    });
})(jQuery);
