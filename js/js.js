 
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


var swiperHome = new Swiper(".mySwiper", {
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


 
  // let scrollvalue=window.scrollY;

  // window.addEventListener("scroll", () => {

  //    if(scrollvalue >50)
  //   {
  //     console.log(scrollvalue)
  //     mainSwiper.style.bottom="0%";
  //   } 
 
  // })

  function showAndHideSlider ()
  {
    let scrollvalue=window.scrollY;
  if(scrollvalue <5)
    {
      console.log(scrollvalue)
      mainSwiper.style.bottom="-50%";
    } 

    else if(scrollvalue <15)
    {
      console.log(scrollvalue)
      mainSwiper.style.bottom="-40%";
    } 

    else if(scrollvalue <25)
    {
      console.log(scrollvalue)
      mainSwiper.style.bottom="-30%";
    }

    else if(scrollvalue <35)
    {
      console.log(scrollvalue)
      mainSwiper.style.bottom="-20%";
    }

    else if(scrollvalue <45)
    {
      console.log(scrollvalue)
      mainSwiper.style.bottom="-10%";
    }

    else if(scrollvalue <65)
    {
      console.log(scrollvalue)
      mainSwiper.style.bottom="0%";
    }

 

  }

  window.addEventListener('scroll',showAndHideSlider);


   var SwiperTicket = new Swiper('.SwiperTicket', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.btnNextTicket',
      prevEl: '.btnPrevTicket',
    },
    on: {
      resize: function () {
        SwiperTicket.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
 