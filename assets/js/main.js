//Use Strict Mode
(function ($) {
    "use strict";

//Begin - Document Ready
    $(document).ready(function () {

//==============___Page Loader___================
        $('#loading-wraper').fadeIn(300);

//==============___Testimonials - owl Carousel___================
        $("#testimonial-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            pagination: true,
            singleItem: true,
            navigationText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        });

//==============_Lightbox_================
//Nivo Lightbox
        $('a.nivobox').nivoLightbox({effect: 'fade'});


//==============___Scrollbars___================
        $('.section-vcardbody').perfectScrollbar({
            wheelSpeed: 0.9
        });

//==============___Menu & Pages Animation___================

        var linkHome = 0;
        var linkPage = '';

        function pageOn() {
            $('#main-menu').addClass('main-menu-pgactive main-menu-right');
            $('#section-home').addClass('section-vcardbody-pgactive');
            $('.profileActive').removeClass('profileActive');
            $('#profile2').addClass('profileActive');
            linkHome = 1;
        }

        function pageOff() {
            $('.section-page-active').removeClass('section-page-active');
            $('#main-menu').removeClass('main-menu-pgactive main-menu-right');
            $('#section-home').removeClass('section-vcardbody-pgactive');
            $('.profileActive').removeClass('profileActive');
            $('#profile1').addClass('profileActive');
            linkHome = 0;
        }


        $(".link-page").on('click', function (event) {
            event.preventDefault();
            $('.menuActive').removeClass('menuActive');
            $(this).addClass('menuActive');
            linkPage = $(this).attr('href');
            $('.section-page-active').removeClass('section-page-active');
            $(linkPage).addClass('section-page-active');
            pageOn();
        });


        $(".link-home").on('click', function (event) {
            event.preventDefault();

            if (linkHome == 0) {
                //pageOn();
            } else if (linkHome == 1) {
                $('.menuActive').removeClass('menuActive');
                $(this).addClass('menuActive');
                pageOff();
            }
        });

//==============___Blog - Ajax___================

        $(".loadPost").on('click', function (event) {
            event.preventDefault();
            //$("#postHere").html('loading...');
            $('.section-page-active').removeClass('section-page-active');
            $('#page-blog-single').addClass('section-page-active');
            pageOn();
            loadPost();
        });

//==============___Contact Form Validator and Ajax Sender___================

//Modal for Contact Form
        $('.modal-wrap').on('click', function () {
            $('.modal-wrap').fadeOut(300);
        });

//Mobile menu
        function mobileMenu() {
            var x = document.getElementById('myLinks');
            if (x.classList.length === 0) {
                x.classList.add('open_drow');
            } else {
                x.classList.remove('open_drow');
            }
            // if ($(x).hasClass('open_drow')) {
            //     $(x).removeClass('open_drow')
            // } else {
            //     $(x).addClass('open_drow')
            // }
        }

        $('#mobile-btn').on('click', function () {
            mobileMenu();
        });

        $('#myLinks a').on('click', function () {
            mobileMenu();
        });


//End - Document Ready
    });

//End - Use Strict mode
})(jQuery);