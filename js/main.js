/*-----------------------------------------------------------------------------------

    Theme Name: Techno - IT Solutions & Technology Template
    Description: IT Solutions & Technology Template
    Author: Chitrakoot Web
    Version: 1.0
        
    ---------------------------------- */

!(function (s) {
  "use strict";
  var i = s(window);

  function o() {
    var e, o;
    (e = s(".full-screen")),
      (o = i.height()),
      e.css("min-height", o),
      (e = s("header").height()),
      (o = s(".screen-height")),
      (e = i.height() - e),
      o.css("height", e);
  }
  s("#preloader").fadeOut("normall", function () {
    s(this).remove();
  }),
    i.on("scroll", function () {
      var e = i.scrollTop(),
        o = s(".navbar-brand img"),
        t = s(".navbar-brand.logodefault img"),
        a = s(".navbar-brand.dark img");
      e <= 50
        ? (s("header").removeClass("scrollHeader").addClass("fixedHeader"),
          o.attr(
            "src",
            "img/logos/Shreshta_Technologies-01-BG removed (1).png"
          ))
        : (s("header").removeClass("fixedHeader").addClass("scrollHeader"),
          o.attr(
            "src",
            "img/logos/Shreshta_Technologies-01-BG removed (1).png"
          )),
        t.attr("src", "img/logos/Shreshta_Technologies-01-BG removed (1).png"),
        a.attr("src", "img/logos/Shreshta_Technologies-01-BG removed (1).png");
    }),
    i.on("scroll", function () {
      500 < s(this).scrollTop()
        ? s(".scroll-to-top").fadeIn(400)
        : s(".scroll-to-top").fadeOut(400);
    }),
    s(".scroll-to-top").on("click", function (e) {
      e.preventDefault(),
        s("html, body").animate(
          {
            scrollTop: 0,
          },
          600
        );
    }),
    s(".parallax,.bg-img").each(function (e) {
      s(this).attr("data-background") &&
        s(this).css(
          "background-image",
          "url(" + s(this).data("background") + ")"
        );
    }),
    s(".story-video").magnificPopup({
      delegate: ".video",
      type: "iframe",
    }),
    s(".popup-social-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    }),
    s(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    s(".tab1").click(function () {
      s(".second, .third, .four, .five").fadeOut(), s(".first").fadeIn(1200);
    }),
    s(".tab2").click(function () {
      s(".first, .third, .four, .five").fadeOut(), s(".second").fadeIn(1200);
    }),
    s(".tab3").click(function () {
      s(".second, .first, .four, .five").fadeOut(), s(".third").fadeIn(1200);
    }),
    s(".tab4").click(function () {
      s(".first, .second, .third, .fifth").fadeOut(), s(".four").fadeIn(1200);
    }),
    s(".tab5").click(function () {
      s(".first, .second, .third, fifth").fadeOut(), s(".fifth").fadeIn(1200);
    }),
    s(".v-tab1").click(function () {
      s(".v-second, .v-third").fadeOut(), s(".v-first").fadeIn(1e3);
    }),
    s(".v-tab2").click(function () {
      s(".v-first, .v-third").fadeOut(), s(".v-second").fadeIn(1e3);
    }),
    s(".v-tab3").click(function () {
      s(".v-econd, .v-first").fadeOut(), s(".v-third").fadeIn(1e3);
    }),
    i.resize(function (e) {
      setTimeout(function () {
        o();
      }, 500),
        e.preventDefault();
    }),
    s(".vision-wrapper").on("mouseenter", function (e) {
      var o = s(this).data("background");
      s(".vision-changebg").animate(
        {
          opacity: 0.9,
        },
        50,
        function () {
          s(".vision-changebg").css("background-image", "url(" + o + ")");
        }
      ),
        s(".vision-changebg").delay(50).animate(
          {
            opacity: 0.9,
          },
          50
        );
    }),
    0 !== s(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      s(".copy-clipboard").on("click", function () {
        var e = s(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    o(),
    s(".current-year").text(new Date().getFullYear()),
    s(document).ready(function () {
      s(".vision-changebg").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        center: !1,
        nav: !1,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 5e3,
        margin: 0,
        smartSpeed: 900,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          992: {
            items: 4,
            loop: !1,
          },
        },
      }),
        s(".service-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 20,
          responsive: {
            0: {
              items: 1,
            },
            767: {
              items: 2,
            },
            992: {
              items: 3,
            },
            1200: {
              items: 4,
            },
          },
        }),
        s(".service2-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          margin: 30,
          responsive: {
            0: {
              items: 1,
              margin: 20,
              dots: !1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1200: {
              items: 3,
            },
          },
        }),
        s(".service3-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1200: {
              items: 3,
            },
          },
        }),
        s(".portfolio1-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 20,
          responsive: {
            0: {
              items: 1,
            },
            767: {
              items: 2,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
            1200: {
              items: 4,
            },
          },
        }),
        s(".portfolio2-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          nav: !1,
          dots: !0,
          center: !0,
          margin: 20,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 2,
            },
            1200: {
              items: 2,
            },
          },
        }),
        s(".portfolio3-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 20,
          responsive: {
            0: {
              items: 1,
            },
            767: {
              items: 2,
            },
            992: {
              items: 3,
            },
            1200: {
              items: 4,
            },
          },
        }),
        s(".testimonial-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          center: !0,
          nav: !1,
          dots: !1,
          margin: 0,
          items: 1,
        }),
        s(".testimonial2-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 1,
            },
            992: {
              items: 1,
            },
            1200: {
              items: 2,
            },
          },
        }),
        s(".testimonial3-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 800,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 15,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            575: {
              items: 1,
            },
            768: {
              items: 1,
            },
            992: {
              items: 1,
            },
          },
        }),
        s(".testimonial4-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 15,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            575: {
              items: 1,
            },
            768: {
              items: 1,
            },
            992: {
              items: 2,
            },
          },
        }),
        s(".testimonial5-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 10,
          responsive: {
            0: {
              items: 1,
              margin: 15,
              dots: !1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          },
        }),
        s(".client1-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 50,
          responsive: {
            0: {
              items: 1,
              margin: 0,
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            992: {
              items: 4,
            },
          },
        }),
        s(".client2-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            992: {
              items: 4,
            },
            1200: {
              items: 5,
            },
          },
        }),
        s(".client3-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            992: {
              items: 4,
            },
            1200: {
              items: 5,
            },
          },
        }),
        s(".pricing-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 20,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 1,
            },
            992: {
              items: 2,
            },
          },
        }),
        s(".blog-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            768: {
              items: 1,
            },
            992: {
              items: 2,
            },
          },
        }),
        s(".blog-client").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          nav: !1,
          dots: !1,
          items: 1,
          margin: 15,
        }),
        s(".blog-post-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          nav: !1,
          dots: !1,
          items: 1,
          margin: 15,
        }),
        s(".portfolio-detail").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 800,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 20,
          responsive: {
            0: {
              items: 1,
              dots: !1,
            },
            767: {
              items: 2,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          },
        }),
        s(".banner1 .owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !0,
          navText: [
            "<i class='ti-arrow-left'></i>",
            "<i class='ti-arrow-right'></i>",
          ],
          autoplay: !0,
          smartSpeed: 500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: {
            0: {
              nav: !1,
            },
            768: {},
          },
        }),
        s(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        s(".slider-fade").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          s("h3").removeClass("animated fadeInDown"),
            s("h1").removeClass("animated fadeInLeft"),
            s("p").removeClass("animated fadeInLeft"),
            s(".butn").removeClass("animated fadeInUp"),
            s(".video_btn").removeClass("animated fadeInUp"),
            s(".video-text").removeClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h3")
              .addClass("animated fadeInDown"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInLeft"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInLeft"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".butn")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".video_btn")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".video-text")
              .addClass("animated fadeInUp");
        }),
        0 !== s(".horizontaltab").length &&
          s(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
              var o = s(this),
                t = s("#nested-tabInfo");
              s("span", t).text(o.text()), t.show();
            },
          }),
        0 !== s(".verticaltab").length &&
          s(".verticaltab").easyResponsiveTabs({
            type: "vertical",
            width: "auto",
            fit: !0,
            closed: "accordion",
            tabidentify: "hor_1",
            activate: function (e) {
              var o = s(this),
                t = s("#nested-tabInfo2");
              s("span", t).text(o.text()), t.show();
            },
          }),
        s(".countup").counterUp({
          delay: 25,
          time: 2e3,
        }),
        s(".countdown").countdown({
          date: "01 Oct 2024 00:01:00",
          format: "on",
        });
    }),
    i.on("load", function () {
      var o = s(".portfolio-gallery-isotope").isotope({});
      s(".filtering").on("click", "span", function () {
        var e = s(this).attr("data-filter");
        o.isotope({
          filter: e,
        });
      }),
        s(".filtering").on("click", "span", function () {
          s(this).addClass("active").siblings().removeClass("active");
        }),
        s(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),
        s(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        }),
        i.stellar();
    });
})(jQuery);
