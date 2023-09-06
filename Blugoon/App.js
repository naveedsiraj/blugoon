
const menutoggle = document.querySelector('#menu-toggle');

menutoggle.addEventListener('click', () => {
    document.querySelector('.main-container').classList.toggle('show');
});
