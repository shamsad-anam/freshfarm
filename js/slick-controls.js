let prevBtn =
  '<span class="slick-prev"><box-icon type="solid" name="chevron-left"></box-icon></span>';

let nextBtn =
  '<span class="slick-next"><box-icon type="solid" name="chevron-right"></box-icon></span>';

// ::: top hero slider :::
$(".hero").slick({
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 5000,
  arrows: false,
  // prevArrow: prevBtn,
  // nextArrow: nextBtn,
});
// ::: testimonials section :::
$(".testimonials").slick({
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 5000,
  prevArrow: prevBtn,
  nextArrow: nextBtn,
});

// ::: side banner slider :::
$(".side-slider").slick({
  autoplay: true,
  prevArrow: prevBtn,
  nextArrow: nextBtn,
});

// ::: group products slide :::
$(".group-slider").slick({
  autoplay: false,
  prevArrow: prevBtn,
  nextArrow: nextBtn,
});

// ::: sp-verti group slide :::
$(".group-slider-vert").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: prevBtn,
  nextArrow: nextBtn,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

/// ::: cart-slider :::\
$(".cart-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: prevBtn,
  nextArrow: nextBtn,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// ::: product variation slider :::
$(".product-variation-slider").slick({
  autoplay: false,
  prevArrow: prevBtn,
  nextArrow: nextBtn,
  slidesToShow: 4,
});
