window.addEventListener('scroll', function() {
  console.log("Scrollin'");
});
var scroll = window.requestAnimationFrame ||
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}
loop();
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
  observer.observe(target);
});


 /*Responsive Menue*/
 function myFunction() {
  var x = document.getElementById("myLinks");
  var y=document.querySelector(".topnav img");
  var z=document.querySelector(".topnav");
  var w=document.querySelector(".topnav .icon i")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="block";
    z.style.alignItems="center";
    w.classList.remove("fa-times");
    w.classList.add("fa-bars");
  } else {
    x.style.display = "block";
    y.style.display="block";
    z.style.alignItems="flex-start";
    w.classList.remove("fa-bars");
    w.classList.add("fa-times");
  }
}


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".black").css("background" , "black");
        }
  
        else{
            $(".black").css("background" , "transparent");  	
        }
    })
  })





  /*Popup*/ 
  var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}