/*!
 * SWIPER PLUGIN
 * https://swiperjs.com/
 */

// import { getIndex } from '@js/helpers/getIndex'
import Swiper, { Pagination } from 'swiper'

/*
Pagination,
EffectFade,
Controller,
Scrollbar,
Autoplay,
Parallax,
*/

import '@scss/components/swiper'
//import '@scss/libs/swiper'
//import 'swiper/css'

function initSliders() {
    if (document.querySelector('.blog__slider')) {
        new Swiper('.blog__slider', {
            modules: [Pagination],
            observer: true,
            observeParents: true,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            touchRatio: 3,
            simulateTouch: true,
            lazy: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slidesPerGroup: 2
                }
            }
        })
    }
    if (document.querySelector('.clients__slider')) {
        new Swiper('.clients__slider', {
            modules: [Pagination],
            observer: true,
            observeParents: true,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            touchRatio: 3,
            lazy: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    }
}

window.addEventListener('load', () => {
    initSliders()
})
