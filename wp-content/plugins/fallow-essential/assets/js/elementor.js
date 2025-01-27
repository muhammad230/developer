(function($) {
    var Fallow_Testimonial = function($scope, $) {
        var $slider = $scope.find(".fallow-testimonial-slider");

        if ($slider.length) {
            var $control = JSON.parse($slider.attr("data-controls"));

            $slider.slick({
                dots: $control.dot == "yes" ? true : false,
                infinite: $control.auto_loop == "yes" ? true : false,
                autoplay: $control.auto_play == "yes" ? true : false,
                autoplaySpeed: 2000,
                arrows: $control.arrow == "yes" ? true : false,
                prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
                nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "0",
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            arrows: false,
                        },
                    },
                ],
            });
        }

        var $slider_2 = $scope.find(".fallow-testimonial-slider-2");

        if ($slider_2.length) {
            var $control = JSON.parse($slider_2.attr("data-controls"));
            $slider_2.slick({
                dots: $control.dot == "yes" ? true : false,
                infinite: $control.auto_loop == "yes" ? true : false,
                autoplay: $control.auto_play == "yes" ? true : false,
                autoplaySpeed: 2000,
                arrows: $control.arrow == "yes" ? true : false,
                prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
                nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "0",
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            arrows: false,
                        },
                    },
                ],
            });
        }
    };

    var Fallow_Image_Carousel = function($scope, $) {
        var $image_carousel = $scope.find(".fallow-video-player-slider");
        console.log($image_carousel);
        //===== fallow VIDEO PLAYER slick slider
        $image_carousel.slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    },
                },
            ],
        });
    };

    $(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/fallow-testimonial.default",
            Fallow_Testimonial
        );
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/fallow-image-carousel.default",
            Fallow_Image_Carousel
        );
    });
})(jQuery);