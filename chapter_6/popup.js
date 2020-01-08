const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    console.dir(popupWrapper);
    popupWrapper.style.display = 'block';
});

popupWrapper.addEventListener('click', e => {
    if(e.target.className === 'popup-wrapper' || e.target.className === 'popup-close') {
        popupWrapper.style.display = 'none';
    }
});