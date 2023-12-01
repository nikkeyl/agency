/* Isotope.js filter https://isotope.metafizzy.co/ */

import Isotope from 'isotope-layout'

// не использовать вместе с lazy load

/*
для контейнера
@media (max-width: md(430)) {
    width: auto !important;
}
для карточки
@media (max-width: md(430)) {
    width: 100%;
}
*/

export function filter() {
    function imagesInit() {
        const images = document.querySelectorAll('.projects-filter__image-ig')
        if (images.length) {
            images.forEach(image => {
                const imageItem = image.querySelector('img')
                const padding = (imageItem.offsetHeight / imageItem.offsetWidth) * 100
                image.style.paddingBottom = `${padding}%`
                imageItem.classList.add('init')
            })
        }
    }

    function gridInit() {
        const items = document.querySelector('.projects-filter__items')
        const itemsGrid = new Isotope(items, {
            itemSelector: '.projects-filter__item',
            masonry: {
                fitWidth: false,
                gutter: 20
            }
        })
        document.addEventListener('click', e => {
            const targetElement = e.target
            if (targetElement.closest('.projects-filter__button')) {
                const filterItem = targetElement.closest('.projects-filter__button')
                const filterValue = filterItem.dataset.filter
                const filterActiveItem = document.querySelector(
                    '.projects-filter__button.active'
                )
                filterValue === '*'
                    ? itemsGrid.arrange({ filter: `` })
                    : itemsGrid.arrange({
                        filter: `[data-filter="${filterValue}"]`
                    })
                filterActiveItem.classList.remove('active')
                filterItem.classList.add('active')
                e.preventDefault()
            }
        })
    }

    window.addEventListener('load', () => {
        // imagesInit()
        gridInit()
    })
}