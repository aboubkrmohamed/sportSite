 
 const pics =[
    "imges/slide3.jpg",
    "imges/slide2.jpg", 
    "imges/slide1.jpg",
    "imges/slide4.jpg",
    "imges/slide5.jpg"

 ];

 let slider=document.getElementById('slider')


setInterval(function(){
    var a =Math.floor(Math.random()*pics.length)
 
        slider.style.backgroundImage=`url(${pics[a]})`;


},4000)


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

   
  });
  

  let linkShowSlider=document.getElementById('linkShowSlider');
  let linkHideSlider =document.getElementById('linkHideSlider');
   
  let mainSwiper =document.getElementById('mainSwiper') 

  linkShowSlider.addEventListener('click',function()
  {
    mainSwiper.style.bottom="0";
    linkHideSlider.style.display="block";
    linkShowSlider.style.display="none"
  })
  linkHideSlider.addEventListener('click',function()
  {
    mainSwiper.style.bottom="-60%";
    linkShowSlider.style.display="block";
    linkHideSlider.style.display="none"
  })