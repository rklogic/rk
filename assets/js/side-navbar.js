(function ($, window, document) {
    $(function () {

        $.rk.sidebar(
            '#menu',
            '#main',
            '#side-navbar',
            '#sidebar-menu-button'
        );
    });

    $.rk = {};

    var openIconClass = "fa-bars";
    var closeIconClass = "fa-times";
    var sideBarWidth = "260px";
    var sreenSize = $(window).width();
    var animationSpeed = 500;

    $.rk.sidebar = function (menu, main, sidenav, button) {
        $(menu).on('click', function (e) {
            if ($(button).hasClass(openIconClass)) {
                openNavBar(main, sidenav);
            }

            if ($(button).hasClass(closeIconClass)) {
                closeNavBar(main, sidenav);
            }

            $(button).toggleClass(closeIconClass);
            $(button).toggleClass(openIconClass);
        });

        $(main).click(function () {

            if ($(button).hasClass(closeIconClass)) {
                closeNavBar(main, sidenav);
                $(button).removeClass(closeIconClass).addClass(openIconClass);
            }
        });
    };

    function openNavBar(main, sidenav) {

        $(sidenav).css('width', sideBarWidth);
        $(main).addClass('overlay');
    }

    function closeNavBar(main, sidenav) {
        $(sidenav).css('width', '0px');
        $(main).removeClass('overlay');
    }


}(window.jQuery, window, document));