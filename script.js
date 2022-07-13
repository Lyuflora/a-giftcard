const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
const color = ['#2fb9c2', '#3d4464', '#ffc33f'];
downButton.style.backgroundColor = color[activeSlideIndex];

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    downButton.style.backgroundColor = color[activeSlideIndex];

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

// show and close modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modalDetal = document.querySelector('.modal-detail');

console.log(modal);

const modalTexts = ['GK6GP-KJ23X-7Y3NP','','FYM5W-Q8MI6-CWL8Q'];

const ExitModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const OpenModal = function () {
  console.log('open modal');
  modalDetal.textContent=modalTexts[activeSlideIndex];
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); //blurred bg
};
btnCloseModal.addEventListener('click', ExitModal);
overlay.addEventListener('click', ExitModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    ExitModal();
  }
});