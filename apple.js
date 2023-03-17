const back_img = document.querySelectorAll('.background-img');

//background changing effect
let i = 1;
function changeImg() {
  back_img[i].style.opacity = 0;
  i = (i + 1) % back_img.length;
  back_img[i].style.zIndex = 1;
  back_img[i].style.opacity = 1;
  setTimeout("changeImg()", 8000);
}
changeImg();

// macbook section 

const anime_logo = document.querySelector('.anime-logo');
const load = document.querySelector('.load');
const laptop = document.querySelector('.laptop');

const mac_animation = function () {
  gsap.from('.anime-logo', { duration: 3, opacity: 0, ease: 'slow', delay: 3 })
  gsap.from('.load', { duration: 3, opacity: 0, ease: 'slow', delay: 3 })
  gsap.from('.juice', { duration: 2, x: '-200px', delay: 3, ease: 'none' })
  gsap.to('.mac-face', { duration: 1, opacity: 1, delay: 8 })
  gsap.to('.face-2', { duration: 1, opacity: 1, delay: 8.5 })
  gsap.to('.anime-logo', { duration: 0.5, delay: 7, opacity: 0, ease: 'slow' })
  gsap.to('.load', { duration: 0.5, opacity: 0, delay: 7, ease: 'slow' })
  gsap.to('.juice', { duration: 0.5, opacity: 0, delay: 7, ease: 'none' })
}

const gone = function () {
  anime_logo.classList.remove('hidden-face');
  load.classList.remove('hidden-face');
}
// observer to observe laptop animation 

const animeOptions = {
  threshold: 0,
  rootMargin: "0px 0px -450px 0px"
};

const anime_observer = new IntersectionObserver(function (entries, anime_observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      gsap.to('.face', { duration: 2, rotateX: '0deg' })
      setTimeout(function () {
        gone();
        mac_animation();
      }, 100);
      console.log('working');
      anime_observer.unobserve(entry.target);
    }
  });
}, animeOptions);

anime_observer.observe(laptop);
// watch slides

const bands_catalog = document.querySelectorAll('.band-div');
const slides_side_btn = document.querySelectorAll('.arrow-side');
const numberOfImages_band = document.querySelectorAll('.band-div').length;

const watchs_catalog = document.querySelectorAll('.watch-div');
const slides_up_btn = document.querySelectorAll('.arrow-up')
const numberOfImages_watch = document.querySelectorAll('.watch-div').length;

// vertically slides 
let imageIndex_band = 1;
let translateX = 0;

slides_side_btn.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'left') {
      if (imageIndex_band !== numberOfImages_band) {
        imageIndex_band++;
        translateX -= 400;
      }
    } else {
      if (imageIndex_band !== 1) {
        imageIndex_band--;
        translateX += 400;
      }
    }
    for (let i = 0; i < bands_catalog.length; i++) {
      bands_catalog[i].style.transform = `translateX(${translateX}px)`;
    }
  });
});

// horizontally slides 
let imageIndex_watch = 1;
let translateY = 0;

slides_up_btn.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'up') {
      if (imageIndex_watch !== numberOfImages_watch) {
        imageIndex_watch++;
        translateY -= 302;
      }
    } else {
      if (imageIndex_watch !== 1) {
        imageIndex_watch--;
        translateY += 302;
      }
    }
    for (let i = 0; i < watchs_catalog.length; i++) {
      watchs_catalog[i].style.transform = `translateY(${translateY}px)`;
    }
  });
});

// rotation of 3d phone
const box = document.querySelector('.box');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const control = document.querySelector('.disc');

let bool = true;
let r = 30;
let u = 0;
const play = function () {
  if (bool) {
    playpause = setInterval(() => {
      box.style.transform = `rotateX(${u}deg) rotateY(${r++}deg)`
    }, 100);
  }
  else {
    clearInterval(playpause);
  }
}
play();

control.addEventListener('mouseover', () => {
  bool = false
  play()
})

control.addEventListener('mouseout', () => {
  bool = true
  play()
})

up.addEventListener('click', function () {
  box.style.transform = `rotateX(${u += 10}deg) rotateY(${r}deg)`
});

down.addEventListener('click', function () {
  box.style.transform = `rotateX(${u -= 10}deg) rotateY(${r}deg)`
});

right.addEventListener('click', function () {
  box.style.transform = `rotateX(${u}deg) rotateY(${r += 20}deg)`
});

left.addEventListener('click', function () {
  box.style.transform = `rotateX(${u}deg) rotateY(${r -= 20}deg)`
});