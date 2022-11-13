
4
5
6
7
8
9
10
11
12
var $simpleCarousel = document.querySelector(".js-carousel--simple");
 
new Glider($simpleCarousel, {
  slidesToShow: 2,
  slidesToScroll: 2,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});
  