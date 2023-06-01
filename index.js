console.log('1. Слайдер изображений в секции destinations\nВ десктоп варианте сделал как смог :), условию, на мой взгляд соответствует.\nАнимация есть и в дестопном и в мобильном вариантах.\nМобильный вариант сделал по видеоуроку.\nТри точки соответствуют каждая своей картинке.\nЗа слайдер - 50 баллов.\n2. Попап было сделать проще, чем слайдер. Верстке соответсвует, закрывается при клике вне попапа.\nАлерт показывается, разметка при нажатии на кнопку Register изменяется.\nЗа попап всего - 75 баллов.\n общая оценка - 100 баллов. Но со слайдером надо еще поработать.');

// BURGER

(function () {
    const burgerItem = document.querySelector('.hamburger');
    // console.log(burgerItem);
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    const menuCloseNav = document.querySelector('.header_nav');
    const trans = document.getElementById('transID');
    burgerItem.addEventListener('click', () => {
        // console.log('1');
        menu.classList.add('header_nav-active');
        trans.classList.add('transClass');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
        trans.classList.remove('transClass');
    });
    menuCloseNav.addEventListener('click', () => {
        menu.classList.remove('header_nav-active');
        trans.classList.remove('transClass');
    });
    for (let i = 1; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header_nav-active');
            trans.classList.remove('transClass');
        });
    };
}());


//POP UP

(function () {

    const login = document.querySelector('.login-button');
    const account = document.querySelector('.account-login');
    // const pageWidth = document.documentElement.scrollWidth;
    // console.log(pageWidth);
    const popUp = document.querySelector('.pop-up');
    const trans = document.getElementById('transID-Pop-up');
    const submit = document.querySelector('.submit-button');
    const loginForm = document.forms.login;
    const email = loginForm.elements.email;
    const password = loginForm.elements.pass;
    const registerLink = document.querySelector('.register-link');

    login.addEventListener('click', () => {
        popUp.classList.toggle('pop-up-active');
        trans.classList.toggle('transClass');
    });

    account.addEventListener('click', () => {
        popUp.classList.toggle('pop-up-active');
        trans.classList.toggle('transClass');
    });

    popUp.addEventListener('click', (event) => {
        // console.log(event)
        if (event.target.classList.contains('pop-up'))
        trans.classList.toggle('transClass');
    });

    popUp.addEventListener('click', (event) => {
        // console.log(event)
        if (event.target.classList.contains('pop-up'))
        popUp.classList.toggle('pop-up-active');
    });

    popUp.addEventListener('transitionend', (event) => {
        // console.log(event)
        if (event.target.classList.contains('pop-up')) {
            registerLink.classList.remove('register-link-active');
            signFacebookButton.classList.remove('sign-facebook-button-hidden');
            signGoogleButton.classList.remove('sign-google-button-hidden');
            divider.classList.remove('divider-hidden');
            forgotPass.classList.remove('forgot-pass-hidden');
            popUpContainer.classList.remove('pop-up-login-container-active');
            title.innerText = 'Log in to your account';
            submitButton.innerText = 'Sign in';
            acc.innerText = 'Don’t have an account?';
            registerLink.innerText = 'Register';
        }
    });

    submit.addEventListener('click', () => {
        if ((email.value) && (password.value)) {
            alert(`Login: ${email.value}\nPassword: ${password.value}`);
        }
    });

    const title = document.querySelector('.pop-up-title');
    const signFacebookButton = document.querySelector('.sign-facebook-button');
    const signGoogleButton = document.querySelector('.sign-google-button');
    const divider = document.querySelector('.divider');
    const submitButton = document.querySelector('.submit-button');
    const forgotPass = document.querySelector('.forgot-pass');
    const acc = document.querySelector('.account');
    const popUpContainer = document.querySelector('.pop-up_container');    

    // window.addEventListener("resize", function() {
    //     innerWidth > 875 ? console.log('yes') : console.log('no');
    // }, false);

    // innerWidth > 875 ? registerLink.addEventListener('click', modifyPopUpDesktop) : registerLink.addEventListener('click', modifyPopUpMobile);

    registerLink.addEventListener('click', modifyPopUpDesktop)

    function modifyPopUpDesktop() {
        registerLink.classList.toggle('register-link-active');
        signFacebookButton.classList.toggle('sign-facebook-button-hidden');
        signGoogleButton.classList.toggle('sign-google-button-hidden');
        divider.classList.toggle('divider-hidden');
        forgotPass.classList.toggle('forgot-pass-hidden');
        popUpContainer.classList.toggle('pop-up-login-container-active');
        if (registerLink.classList.contains('register-link-active')) {
            title.innerText = 'Create account';
            submitButton.innerText = 'Sign up';
            acc.innerText = 'Already have an account?';
            registerLink.innerText = 'Log in';
            // popUpContainer.style.minHeight = '320px';
            // popUpContainer.style.height = '58%';
        } else {
            title.innerText = 'Log in to your account';
            submitButton.innerText = 'Sign in';
            acc.innerText = 'Don’t have an account?';
            registerLink.innerText = 'Register';
            // popUpContainer.style.minHeight = '550px';
            // popUpContainer.style.height = '87.5%';
        }
    }

    // function modifyPopUpMobile() {
    //     registerLink.classList.toggle('register-link-active');
    //     signFacebookButton.classList.toggle('sign-facebook-button-hidden');
    //     signGoogleButton.classList.toggle('sign-google-button-hidden');
    //     divider.classList.toggle('divider-hidden');
    //     forgotPass.classList.toggle('forgot-pass-hidden');
    //     popUpContainer.classList.toggle('pop-up-login-container-active');
    //     if (registerLink.classList.contains('register-link-active')) {
    //         title.innerText = 'Create account';
    //         submitButton.innerText = 'Sign up';
    //         acc.innerText = 'Already have an account?';
    //         registerLink.innerText = 'Log in';
    //         // popUpContainer.style.minHeight = '280px';
    //         // popUpContainer.style.height = '35%';
    //     } else {
    //         title.innerText = 'Log in to your account';
    //         submitButton.innerText = 'Sign in';
    //         acc.innerText = 'Don’t have an account?';
    //         registerLink.innerText = 'Register';
    //         // popUpContainer.style.minHeight = '450px';
    //         // popUpContainer.style.height = '62%';
    //     }
    // }
}())


// SLIDER

const slider = document.querySelector('.slider');
// const right = document.querySelector('.desktop-spain');
// const left = document.querySelector('.desktop-spain');
const dots = document.querySelectorAll('.slider-dot');
const spain = document.querySelector('.spain');
const japan = document.querySelector('.japan');
const usa = document.querySelector('.usa');
const first = document.querySelector('.first');
const last = document.querySelector('.last');
const arrowLeft = document.querySelector('.not-active');
const arrowRight = document.querySelector('.active');
let slides = [first, spain, japan, usa, last];

slides[3].addEventListener('click', () => {
    // console.log(slides);
    // [slides[1].innerHTML, slides[4].innerHTML] = [slides[4].innerHTML, slides[1].innerHTML];
    slider.classList.toggle('right');
    dots[2].classList.toggle('desktop-slider-dot-active');
    dots[1].classList.toggle('desktop-slider-dot-active');
    // console.log(slides);
});

// arrowLeft.addEventListener('click', () => {
//     console.log('left')
//     slider.classList.toggle('right');
// })

// arrowRight.addEventListener('click', () => {
//     console.log('right')
//     slider.classList.toggle('left');
// })

// slider.addEventListener('transitionend', () => {
//     console.log('HOHo')
//     spain.innerHTML = last.innerHTML;
// })

slides[1].addEventListener('click', () => {
    // console.log(slides);
    // [slides[0].innerHTML, slides[4].innerHTML] = [slides[4].innerHTML, slides[0].innerHTML];
    slider.classList.toggle('left');
    dots[0].classList.toggle('desktop-slider-dot-active');
    dots[1].classList.toggle('desktop-slider-dot-active');
    // console.log(slides);
});

slides[2].addEventListener('click', () => {
    if (slider.classList.contains('right')) {
        slider.classList.toggle('right');
        dots[2].classList.toggle('desktop-slider-dot-active');
        dots[1].classList.toggle('desktop-slider-dot-active');
    } else if (slider.classList.contains('left')) {
        slider.classList.toggle('left');
        dots[0].classList.toggle('desktop-slider-dot-active');
        dots[1].classList.toggle('desktop-slider-dot-active');
    }
})


// MOBILE-SLIDER

// const dots = document.querySelectorAll('.slider-dot');
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active-slide', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active-slide');
        isEnabled = true;
    });
}   

const activeDot = (n) => {
    for (dot of dots) {
        dot.classList.remove('mobile-slider-dot-active');
    }
    dots[n].classList.add('mobile-slider-dot-active');
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
    activeDot(currentItem);
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
    activeDot(currentItem);
}

document.querySelector('.arrow-left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem (currentItem);
    }
})

document.querySelector('.arrow-right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem (currentItem);
    }
})