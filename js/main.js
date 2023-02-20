
$('.product-slider').owlCarousel({
loop:true,
margin:30,
responsiveClass:true,
autoplay:true,
nav:false,
dots: false,
responsive:{
0:{
    items:3,
   
},
769:{
    items:3,
    nav:false
},
800:{
    items:5,
    nav:false
},
1000:{
    items:6,
    nav:true,
    loop:false
},
1200:{
    items:7,
    nav:true,
    loop:false
}
}
})

$('.main-sliders').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    items:1,
    nav:true,
    dots: true

});

const checkbox = document.getElementById('checkbox');
const logo = document.getElementById('logo');
const sun = document.getElementById('sun');
const shop = document.getElementById('shop');
 
checkbox.addEventListener('change', ()=>{
document.body.classList.toggle('dark-mode');
if(document.body.classList.contains("dark-mode")){
logo.src = "img/dark-logo.png"
sun.src = "img/dark-sun.png"
shop.src = "img/dark-shop.png"
 
}else{
logo.src = "img/light-logo.png"
sun.src = "img/001-sun.png"
shop.src = "img/002-shopping-bag copiar 3.png"
 
}
})
