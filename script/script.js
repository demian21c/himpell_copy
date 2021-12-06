$(document).ready(function(){
  
  $(".section .slider").slick({
    autoplay: true,
    dots: true,
  });
  
  $(".section02 > .section02-wrap > .product-slide").slick({
    autoplay: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
  
  $(".section04 > .section04-wrap > .review-slide").slick({
    autoplay: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});