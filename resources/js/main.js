$(document).ready(function(){
  // Mixit up 
  
  var mixer = mixitup('.cont');
  // Sticky Top nav

  $(window).on("scroll",function(){
    var navbar = $('.navbar');
    var sticky = $('.head h1').offset().top;
    


  if ($(window).scrollTop() >= sticky) {
        navbar.addClass('sticky')
       } else {
        navbar.removeClass('sticky');
       }
  });
  
  
});

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.header nav .container ul li a');
  window.addEventListener('scroll', () =>{

  let current = ""
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if(scrollY >= sectionTop - sectionHeight/2 ){
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    });
})