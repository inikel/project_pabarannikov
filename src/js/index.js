// import { courseSwitcher } from "./modules/courseSwitcher.js";
// import { feedbackSwiper } from "./modules/swiper.js"
// import { feedbackSwiper2 } from "./modules/swiper.js"
// import { mobMenu } from "./modules/mobMenu.js"
// import { phoneRegionSwitcher } from "./modules/phoneRegionSwitcher.js";

const programStageController = () => {
  const programStages = [...document.getElementsByClassName('program-stage')];

  programStages.forEach(stage => {
    stage.addEventListener('click', () => {
      stage.classList.toggle('_opened')
    })
  })
}

const feedbackSwiper = new Swiper('.swiper-feedbacks-container', {
  spaceBetween: 20,
  updateOnImagesReady: true,
  pagination: {
    el: '.swiper-feedback-pagination',
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-feedback-button-next',
    prevEl: '.swiper-feedback-button-prev',
  },
})

const feedbackSwiper2 = new Swiper('.swiper-teachers-container', {
  spaceBetween: 20,
  pagination: {
    el: '.swiper-teachers-pagination',
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-teacher-button-next',
    prevEl: '.swiper-teacher-button-prev',
  },
})

const courseSwitcher = () => {
  const switcher = document.getElementById('course-switcher'),
    benefitsList = document.getElementById('course-type__benefits');

  switcher.addEventListener('click', () => {

    if (switcher.classList.contains('_offline')) {

      switcher.classList.remove('_offline')
      benefitsList.classList.remove('_offline')

    } else {
      switcher.classList.add('_offline')
      benefitsList.classList.add('_offline')
    }
  })
}

const phoneRegionSwitcher = () => {
  const switcher = document.getElementById('region-select'),
    options = [...document.getElementsByClassName('region-select__option')],
    currentFlag = document.querySelector('.region-select__current-country'),
    currentCode = document.getElementById('region-select-code')

  switcher.addEventListener('click', () => {
    switcher.classList.toggle('_opened')
  })

  options.forEach(option => {
    option.addEventListener('click', () => {
      currentFlag.innerHTML = `
        <svg> 
            <use href=${option.dataset.iconId}></use>
        </svg>
      `
      currentCode.innerHTML = option.dataset.code
      switcher.classList.toggle('_opened')
    })
  })
}

const mobMenu = () => {
  const menuBtn = document.getElementById('mobile-menu-btn'),
    header = document.getElementById('header');

  menuBtn.addEventListener('click', () => header.classList.toggle('_opened'));
}

const proofDocs = () => {
  const docs = document.getElementById('proof-docs'),
        openBtn = document.getElementById('skillproof-show-docs-btn'),
        closeBtn = document.getElementById('skillproof-hide-docs-btn'),
        docsContainer = document.querySelector('.proof-docs__container')

  document.addEventListener('click', (e) => {

    let target = e.target

    if (docs.classList.contains('_open') && target !== docsContainer && !docsContainer.contains(target)) {
      docs.classList.remove('_open')
    }

    if (target === openBtn) {
      docs.classList.add('_open')
    }

    if (target === closeBtn) {
      docs.classList.remove('_open')
    }
  })
}

const navController = () => {
  const links = [...document.getElementsByClassName('nav-link')],
        header = document.getElementById('header')

  links.forEach(l => {
    l.addEventListener('click', e => {
      e.preventDefault();

      if (window.innerWidth < 1280 && header.classList.contains('_opened')) {
        header.classList.remove('_opened')
      }

      window.scrollTo({
        top: document.getElementById(l.dataset.linkTo).offsetTop - header.offsetHeight,
        left: 0,
        behavior: 'smooth'
      })
    })
  })
}

function init() {
  courseSwitcher();
  mobMenu();
  phoneRegionSwitcher();
  programStageController();
  navController();
  proofDocs();
}

init()