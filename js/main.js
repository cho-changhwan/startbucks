const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute("placeholder", '통합검색');
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute("placeholder", '');
});

const badgeEl = document.querySelector("header .badges");

const  toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    gsap.to(toTopEl, .2, {
      x : 0
    });
    // badgeEl.style.display = 'none';
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    
    gsap.to(toTopEl, .2, {
      x : 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo : 0
  });
});


const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});


// Swiper
// new Swiper(선택자,옵션);
new Swiper('.notice-line .swiper', {
  direction: 'vertical', //수직
  autoplay: true,
  loop: true
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생
  autoplay: {
    delay: 5000 //500 - 0.5초
  },

  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },

  navigation: {
    prevEl: '.promotion .swiper-prev', //이전
    nextEl: '.promotion .swiper-next', //이후
  }
});

new Swiper('.awards .swiper', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl: '.awards .swiper-prev', //이전
    nextEl: '.awards .swiper-next', //이후
  }
});

const promotionEl = document.querySelector(".promotion");
const promotionToogleBtn = document.querySelector(".toggle_promotion");
let isHidePromosion = false;
promotionToogleBtn.addEventListener("click", function () {
  isHidePromosion = !isHidePromosion;
  if (isHidePromosion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //보임처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(seletor, delay, size) {
  // gsap.to(요소, 시간 , 옵션)
  gsap.to(seletor,        //선택자
     random(1.5, 2.5), {  //동작 시간 (애니메이션)
    y: size, //Y축
    repeat: -1, //반복 -1=무한
    yoyo: true,
    ease: Power1.easeInOut,
    delay : random(0,delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 25);


const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElements : spyEl,   //보여짐 여부를 감시할 요소를 지정
    triggerHook : .8          
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

// 자동 연도

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();