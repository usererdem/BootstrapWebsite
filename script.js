'use strict';
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const btnClosePopup = document.querySelector('.close-popup');
const btnsOpenPopup = document.querySelectorAll('.show-popup');
console.log(btnsOpenPopup);

function openPopup() {
    //console.log('Button clicked');
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
  function closePopup() {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
  }

  for (let i = 0; i < btnsOpenPopup.length; i++)
  btnsOpenPopup[i].addEventListener('click', openPopup);

btnClosePopup.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    closePopup();
  }
});