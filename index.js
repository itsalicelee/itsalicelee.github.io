// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active');
    } else {
        smallMenu.classList.add('header__sm-menu--active');
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none');
        headerHamMenuCloseBtn.classList.add('d-none');
    } else {
        headerHamMenuBtn.classList.add('d-none');
        headerHamMenuCloseBtn.classList.remove('d-none');
    }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active');
        headerHamMenuBtn.classList.remove('d-none');
        headerHamMenuCloseBtn.classList.add('d-none');
    });
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container');

headerLogoConatiner.addEventListener('click', () => {
    location.href = 'index.html';
});

const toggle = document.getElementById('toggle');
const about = document.getElementById('about');
const body = document.body;
const header = document.getElementsByClassName('header')[0];
const header_link = document.getElementsByClassName('header__link');
const header_logo_sub = document.getElementsByClassName('header__logo-sub')[0];
const header_sec_sub = document.getElementsByClassName('heading-sec__sub')[0];

toggle.addEventListener('input', (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
        about.classList.add('dark-theme');
        header.classList.add('dark-theme');
        header_logo_sub.classList.add('dark-theme');
        header_sec_sub.classList.add('dark-theme');
        for (let i = 0; i < header_link.length; i++) {
            header_link[i].classList.add('dark-theme');
        }
    } else {
        body.classList.remove('dark-theme');
        about.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        header_sec_sub.classList.remove('dark-theme');
        header_logo_sub.classList.remove('dark-theme');
        for (let i = 0; i < header_link.length; i++) {
            header_link[i].classList.remove('dark-theme');
        }
    }
});
