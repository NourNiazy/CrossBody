$('.stat-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
       Counter: $(this).text()
    }, {
       duration: 5000,
       step: function (func) {
          $(this).text(parseFloat(func).toFixed(size));
       }
    });
 });
 
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    nav:true,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});












