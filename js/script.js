/*const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const sectionOneOptions = {
   rootMargin: "-200px 0px 0px 0px" 
};
const sectionOneObserver = new IntersectionObserver(function(enteries ,sectionOneOptions){
    enteries.forEach(entery=>{
     if(!entery.isIntersecting){
         header.classList.add("nav-scrolled");
     }  
     else{
         header.classList.remove("nav-scrolled");
     } 
    });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);*/


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