const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    // slidesPerView: 5,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-img-right',
        prevEl: '.swiper-button-img-left',
    },
    mousewhell:{
        sensivity: 1,
        eventsTarget: ".swiper-slide"
    },
    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    speed: 400,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.7,
            spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        780: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});
const swiper_3 = new Swiper('.swiper_3', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,

    slidesPerView: 3.5,


    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-img-right',
    //     prevEl: '.swiper-button-img-left',
    // },
    navigation: {
        nextEl: '.swiper-button-img-right',
        prevEl: '.swiper-button-img-left',
    },
    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    mousewhell:{
        sensivity: 1,
        eventsTarget: ".swiper-slide"
    },
    speed: 400,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1.7,
            spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.5,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.7,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 3.2
        },
        1000: {
            slidesPerView: 3.2
        },
        1100: {
            slidesPerView: 3.2
        },
        1200: {
            slidesPerView: 3.2
        }
    }

});


const swiper__no__loop = new Swiper('.swiper__no__loop', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    navigation: {
        nextEl: '.swiper-button-img-right',
        prevEl: '.swiper-button-img-left',
    },
    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-img-right',
    //     prevEl: '.swiper-button-img-left',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    speed: 400,
    mousewhell:{
        sensivity: 1,
        eventsTarget: ".swiper-slide"
    },
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.7,
            // loop: true,
            spaceBetween: 5
        },
        // // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3,
        //     spaceBetween: 10
        // },
        540:{
            slidesPerView: 1.7,
            // loop: true,
            spaceBetween: 5
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.7,
            // loop: true,
            spaceBetween: 10
            
        },
        800: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
        
        
    }
});



// pop up
function openForm1() {
    document.getElementById("myForm-1").style.display = "block";
}

function openForm2() {
    document.getElementById("myForm-2").style.display = "block";
}

function openForm3() {
    document.getElementById("myForm-3").style.display = "block";
}

function closeForm1() {
    document.getElementById("myForm-1").style.display = "none";
}

function closeForm2() {
    document.getElementById("myForm-2").style.display = "none";
}

function closeForm3() {
    document.getElementById("myForm-3").style.display = "none";
}



// category cart btn

const btn__close = document.querySelectorAll('#btn__close__need');
const btn__open = document.querySelectorAll('#btn__open__need');

// console.log(btn__open);

for (let i = 0; i < btn__close.length; i++) {
    btn__close[i].onclick = function () {
        btn__open[i].classList.add('close__open__btn__img')
        console.log(btn__open[i].classList);
        btn__close[i].classList.remove('close__hidden__btn__img')
        btn__close[i].style.display = 'none';
        console.log(btn__close[i].classList);
    }
}




/*
1 способ
Алгоритм:
    1 Устанавливаем active классы вручную на кнопку и на блок-контента
    2 Скрываем в CSS все блоки контента, кроме активного
    3 в JS обрабатываем клик по кнопкам
    4 При клике:
        - проверяем содержание active класса, что бы избежать лишних вызовов ф-ций
        - очищаем циклом все active - классы у кнопок и у блок-контента
            для этого напишем функцию очистки классов
        - устанавливаем новый активный класс
            для этого напишем функцию установки активного класса
*/

const tabItems = Array.from(document.querySelectorAll('.tab-item'))
const contentItems = Array.from(document.querySelectorAll('.content-item'))
const chanseCloseBtn = document.querySelectorAll('.close__btn')
const mainMinHeight = document.querySelector('.container__chance__infoblock__main__div')
// const hbgc = document.querySelector('.head__bgr__clr__div__580')



const clearActiveClass = (element, className = 'is-active') => {
    element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${className}`)
}
const chanseFooter = document.querySelector('.chanse__footer')
const chanseFooterF = document.querySelector('.chanse__footer__f')
// console.log(chanseFooter);
// console.log(chanseFooterF);

const ctB = document.querySelector('.ctb')

let x1 = (Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight));
let x2 = (ctB.offsetHeight);
// console.log(x2);
function mHHelper() {
    // if (chanseFooter != null) {
        if (x2 < x1) {
            // chanseFooter.style.position = 'absolute'        
            // chanseFooter.style.bottom = '0'        
            // chanseFooterF.classList.add('chanse__footer')
            // chanseFooterF.classList.remove('chanse__footer__f')
        }
        else{
            // chanseFooter.style.position = 'relative'
            // chanseFooterF.classList.add('chanse__footer__f')
            // chanseFooterF.classList.remove('chanse__footer')
        }    
    // }
    
}
window.addEventListener('load',mHHelper)

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {

        if (item.classList.contains('is-active')) return
        // console.log(item)
        for (let i = 0; i < chanseCloseBtn.length; i++) {
            chanseCloseBtn[i].onclick = function () {
                for (let l = 0; l < openNeedText.length; l++) {        
                    openNeedText[l].classList.remove('opened')
                    openNeedText[l].classList.add('hidden')
                    // console.log(openNeedText[l]);
                    if (ctB.offsetHeight > 950) {
                        if (chanseFooter != null) {
                            // chanseFooter.classList.add('chanse__footer')
                            chanseFooter.style.position = 'absolute'
                            // chanseFooter.style.bottom = (x2 - chanseFooter.offsetHeight) * -1
                        }    
                    }
                    
                }

                clearActiveClass(tabItems)
                clearActiveClass(contentItems)

            }
        }
        // mainMinHeight.style.minHeight = 'auto';
        // let x1 = (Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight));
        // let x2 = (ctB.offsetHeight);
    
        // if (x2 < x1) {
        //     chanseFooter.style.position = 'absolute'        
        //     chanseFooter.style.bottom = '0'        
        // }
        // else{
        //     chanseFooter.style.position = 'relative'
        // }
        if (chanseFooter != null) {
            // chanseFooter.classList.remove('chanse__footer')
            chanseFooter.style.position = 'relative'
            // chanseFooter.style.bottom = (x2 - chanseFooter.offsetHeight) * -1
        }
        // console.log(chanseFooterF.classList);


        clearActiveClass(tabItems)
        clearActiveClass(contentItems)

        setActiveClass(tabItems, index)
        setActiveClass(contentItems, index)
    }

    )
}

tabItems.forEach(checkoutTabs)


const openNeedText = document.querySelectorAll('.hidden')
const openBtn = document.querySelectorAll('.main__about__form__input__button')

for (let k = 0; k < openBtn.length; k++) {
    openBtn[k].onclick = function () {
        for (let i = 0; i < openNeedText.length; i++) {        
            openNeedText[i].classList.add('opened')
            openNeedText[i].classList.remove('hidden')
        }
    }
}

const catDetails = document.querySelectorAll('.cat__cart__akard__details')
// console.log(catDetails);

for (let i = 0; i < catDetails.length; i++) {
    const catDetailsI = catDetails[i];
    console.log(catDetailsI.classList);
    // catDetailsI.value = ""
}

// accardion
var acc = document.getElementsByClassName("accardion__div");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("sfw__helper")
    } else {
      panel.style.maxHeight = 30000 + "px";
      panel.classList.add("sfw__helper")
    } 
  });
}



/* header */
const headerBg = document.querySelector('.header__img__div')


function headerBgc() {
    // console.log(headerBg.offsetWidth);
    if (ctB.offsetWidth < 960) {
        if(pageYOffset > 0){
            headerBg.style.backgroundColor = '#fff';
        }
        else{ 
            headerBg.style.backgroundColor = 'transparent';
        }
    }
    
}

window.addEventListener('scroll',headerBgc)

/* gallery slider helper */
const gallerySwiper = document.querySelector('.image__slider__opening')
const gallerySwiperWripper = document.querySelector('.image__book__div')
const gallerySliders = document.querySelectorAll('.gallerySlides')

function gallerySlidering() {
    for (let i = 0; i < gallerySliders.length; i++) {
        const gallerySlidersArr = gallerySliders[i];
        if (ctB.offsetWidth < 960) {
            gallerySwiper.classList.add('swiper')
            gallerySwiperWripper.classList.add('swiper-wrapper')
            gallerySlidersArr.classList.add('swiper-slide')
            gallerySlidersArr.style.margin = '0'
        }
        
    }
}

window.addEventListener('scroll',gallerySlidering)


// articles

const bsdf = document.querySelector('.footer__bgr__clr__div__900')

function bsdfTop() {
    const x2_2 = (ctB.offsetHeight)
    if (bsdf != null) {
        bsdf.style.top = (x2_2 - chanseFooterF.offsetHeight - bsdf.offsetHeight) + 'px';
        // console.log(bsdf.style.top);
        console.log(x2_2 - chanseFooterF.offsetHeight - bsdf.offsetHeight);
    }
}

window.addEventListener('resize', bsdfTop)
window.addEventListener('load', bsdfTop)


// console.log(artCartText[0].offsetHeight);
// console.log(artCart[1].offsetHeight);
// function artCartBtnMargin() {
//     const artCart = document.querySelectorAll('.art__cart__about__block__div__mob')
//     const artCartImg = document.querySelectorAll('.art__cart__about__block__img')
//     const artCartText = document.querySelectorAll('.art__cart__about__text__block')
//     const artCartBtn = document.querySelectorAll('.art__cart__about__block__link__div')
//     const artCartImgPlusText = document.querySelectorAll('.art__cart__img__and__text')
    
//     let x5 = artCartBtn[0]
//     console.log(x5);
//     console.log(x5.offsetHeight);
//     x5.style.marginTop = 10 + "px";
//     console.log(x5.style.marginTop);
// }

// window.addEventListener('scroll', artCartBtnMargin)
// window.addEventListener('load', artCartBtnMargin)

const ssm = document.querySelectorAll('.swiper-slide-ml')
const ssh = document.querySelector('swiper__scroll__helper')
const ssm7 = document.querySelector('.container')
const ssmText = document.querySelectorAll('.swp__h2__btn__div')
// console.log(ssmText);
// console.log(ssm);
function ssm1() {
    if (ssm != null) {
        const x2_3 = (ctB.offsetWidth)
        const ssm5 = document.querySelector('.accardion__div')
        const ssm6 = document.querySelector('.chance__container')
        const slider__fw = document.querySelectorAll('.swiper__full__width')
        const ssm7 = document.querySelector('.container')
        // console.log(ssm5);
        if (ssm5 != null) {
            // console.log(ssm5);
            // const ssm2 = ssm5.offsetWidth
            if (x2_3 < 1200) {
                // console.log('x');
                // if (ssm.classList.contains('swiper-slide-active')) {
                getComputedStyle(ssm5);
                const marg = getComputedStyle(ssm5).marginLeft;
                    // console.log(ssm2);
                    // console.log(x2_3);
                    // console.log(marg);
                    // ssm.style.marginLeft = marg;
                    // console.log(ssm.style.marginLeft);
                    // console.log('x');
                    // console.log(slider__fw);
                for (let i = 0; i < slider__fw.length; i++) {
                    slider__fw[i].style.marginLeft = (0 - parseInt(marg)) + 'px';
                    // console.log('x');
                }

                    

                // }
                // else{
                //     getComputedStyle(ssm5);
                //     const marg = getComputedStyle(ssm5).marginLeft;
                //     ssm.style.marginLeft = parseInt(0 - parseInt(marg)) + 'px';
                
                // }
                
            }
            else{
                for (let i = 0; i < slider__fw.length; i++) {
                    slider__fw[i].style.marginLeft = 0;
                    // console.log('x');
                }
            }
        }
        if (ssm6 != null) {
            console.log(ssm6);
            // const ssm2 = ssm6.offsetWidth
            if (x2_3 < 1200) {
                    getComputedStyle(ssm6);
                    const marg = getComputedStyle(ssm6).marginLeft;
                    // console.log(ssm2);
                    // console.log(x2_3);
                    // console.log(marg);
                    // ssm.style.marginLeft = marg;
                    // console.log(ssm.style.marginLeft);
                    slider__fw.style.marginLeft = (0 - parseInt(marg)) + 'px';                    
                    // console.log(slider__fw.style.marginLeft);    
                // else{
                //     getComputedStyle(ssm6);
                //     const marg = getComputedStyle(ssm6).marginLeft;
                //     ssm.style.marginLeft = parseInt(0 - parseInt(marg)) + 'px';
                // }
            }
            else{
                for (let i = 0; i < slider__fw.length; i++) {
                    slider__fw[i].style.marginLeft = 0;
                    // console.log('x');
                }
            }
        }
        
        if (x2_3 < 1200) {
            for (let i = 0; i < slider__fw.length; i++) {    
                slider__fw[i].style.width = (ctB.offsetWidth) + 'px'
            }
            // console.log(slider__fw.offsetWidth);
            // console.log(ctB.offsetWidth);
        }    
    }
    
    
    
}

window.addEventListener('resize', ssm1)
window.addEventListener('resized', ssm1)
window.addEventListener('load', ssm1)
window.addEventListener('scroll', ssm1)







