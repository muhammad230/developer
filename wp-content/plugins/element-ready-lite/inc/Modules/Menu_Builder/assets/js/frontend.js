! function($) {
    "use strict";
    jQuery(".navbar-toggler").on("click", (function() {
        jQuery(this).toggleClass("active")
    })), jQuery(".navbar-nav a").on("click", (function() {
        jQuery(".navbar-toggler").removeClass("active")
    }));
    var subMenu = jQuery(".sub-menu-bar .navbar-nav .sub-menu"),
        subMenuToggler;
    subMenu.length && (subMenu.parent("li").children("a").append((function() {
        return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>'
    })), jQuery(".sub-menu-bar .navbar-nav .sub-nav-toggler").on("click", (function() {
        jQuery(this).parent().parent().children(".sub-menu").slideToggle()
    })));

    function er_is_Valid_Http_Url(string) {
        try {
            const url = new URL(string);
            return "http:" === url.protocol || "https:" === url.protocol
        } catch (err) {
            return !1
        }
    }
    var Elements_Ready_Menu = function($scope, $) {
            var main_menu, $container_2, $container;
            $scope.find(".main-menu").on("click", (function() {
                $(this).toggleClass("active")
            })), $scope.find(".element-ready-navbar > li > .nav-link.has-child").on("click", (function() {
                if (er_is_Valid_Http_Url($(this).attr("href"))) {
                    var valid_url = new URL($(this).attr("href"));
                    window.location.href = valid_url
                }
            })), $scope.find(".element-ready-style2").length && $(".stellarnav").stellarNav({
                theme: "light",
                breakpoint: 991,
                position: "right"
            }), $scope.find(".element-ready-fs-menu-wrapper").length && (jQuery(".hamburger").click((function() {
                var $this = jQuery(this);
                $this.hasClass("is-active") ? (jQuery(".fsmenu, .logo").removeClass("is-active"), jQuery(".fsmenu, .logo").addClass("close-menu")) : (jQuery(".fsmenu, .logo").removeClass("close-menu"), jQuery(".fsmenu, .logo").addClass("is-active")), $this.toggleClass("is-active")
            })), jQuery(".fsmenu--list-element").hover((function() {
                jQuery(this).addClass("open"), jQuery(this).removeClass("is-closing")
            }), (function() {
                jQuery(this).removeClass("open"), jQuery(this).addClass("is-closing")
            })))
        },
        Element_Ready_Menu_Offcanvas = function($scope, $) {
            var $navigation_button = $scope.find(".navigation-button"),
                bodyOvrelay = $(".element-ready-body-overlay"),
                sidebarMenu = $(".element-ready-sidebar-menu");
            $(document).on("click", ".element-ready-body-overlay", (function(e) {
                e.preventDefault(), bodyOvrelay.removeClass("active"), sidebarMenu.removeClass("active")
            })), $(document).on("click", ".sidebar-menu-close", (function(e) {
                e.preventDefault(), bodyOvrelay.removeClass("active"), sidebarMenu.removeClass("active")
            })), $(document).on("click", ".navigation-button", (function(e) {
                e.preventDefault(), sidebarMenu.addClass("active"), bodyOvrelay.addClass("active")
            }))
        },
        Element_Ready_Mobile_Menu_Offcanvas = function($scope, $) {
            var $container = $scope.find(".element-ready-mobile-menu-wr");
            let icon_class = $container.data("indicator") ? $container.data("indicator") : "fa fa-angle-down";
            var $offcanvasNav = $scope.find(".element_ready_offcanvas_main_menu"),
                $offcanvasNavSubMenu = $offcanvasNav.find(".element-ready-sub-menu");
            $offcanvasNavSubMenu.parent().prepend(`<span class="element-ready-menu-expand"><i class="${icon_class}"></i></span>`), $offcanvasNavSubMenu.slideUp(), $offcanvasNav.on("click", "li a, li .element-ready-menu-expand", (function(e) {
                var $this = $(this);
                $this.parent().attr("class").match(/\b(element-ready-menu-item-has-children|has-children|has-sub-menu|element-ready-element-ready-sub-menu)\b/) && ("#" === $this.attr("href") || $this.hasClass("element-ready-menu-expand")) && (e.preventDefault(), $this.siblings("ul:visible").length ? $this.siblings("ul").slideUp("slow") : ($this.closest("li").siblings("li").find("ul:visible").slideUp("slow"), $this.siblings("ul").slideDown("slow"))), $this.is("a") || $this.is("span") || $this.attr("clas").match(/\b(element-ready-menu-expand)\b/) ? $this.parent().toggleClass("menu-open") : $this.is("li") && $this.attr("class").match(/\b('element-ready-menu-item-has-children')\b/) && $this.toggleClass("menu-open")
            }))
        };
    $(window).on("elementor/frontend/init", (function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/element-ready-mobile-offcanvas-menu.default", Element_Ready_Mobile_Menu_Offcanvas), elementorFrontend.hooks.addAction("frontend/element_ready/element-ready-header-offcanvas.default", Element_Ready_Menu_Offcanvas), elementorFrontend.hooks.addAction("frontend/element_ready/element-ready-menu.default", Elements_Ready_Menu)
    })), $(".element_ready_offcanvas_main_menu > li a").on("click", (function(e) {
        const mq = window.matchMedia("(max-width: 1024px)");
        if (er_is_Valid_Http_Url($(this).attr("href"))) {
            var valid_url = new URL($(this).attr("href"));
            window.location.href = valid_url
        }
        mq.matches && $(".sidebar-menu-close").click()
    }))
}(jQuery);