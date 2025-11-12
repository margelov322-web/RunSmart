'use strict'

const consultBtns = document.querySelectorAll('[data-modal="consultation"]')
const overlay = document.querySelector('.overlay')
const modalCloses = document.querySelectorAll('.modal__close')
const modalClose = document.querySelector('.modal__close')
const orderBtns = document.querySelectorAll('[data-modal="order"]')
const catalogTabsSection = document.querySelector('#tabs-content-1')
const submitBtns = document.querySelectorAll('.button__submit')

// вызов поп-апа consultation
for (let i = 0; i < consultBtns.length; i++) {
    consultBtns[i].addEventListener('click', function() {
        document.querySelector('#consultation').classList.add('visible')
        document.querySelector('.overlay').classList.add('visible')
    })
}

// прослушка кликов по секции каталожных табов и вызов-попапов при нажатии кнопки order при помощи делегирования событий
catalogTabsSection.addEventListener('click', (event) => {
    console.log('клик по секции Таб')
    if(event.target.classList.contains('button-catalog')) {
        console.log('клик по кнопке заказа в каталоге')
        document.querySelector('.overlay').classList.add('visible')
        document.querySelector('#order').classList.add('visible')
    }
})

//скрытие поп-апа по клику на оверлей
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        document.querySelector('#consultation').classList.remove('visible')
        document.querySelector('#order').classList.remove('visible')
        document.querySelector('.overlay').classList.remove('visible')  
    }
})
//скрытие поп-апа по клику на крестик
for (let i = 0; i < modalCloses.length; i++) {
    modalCloses[i].addEventListener('click', function() {
        document.querySelector('#consultation').classList.remove('visible')
        document.querySelector('#order').classList.remove('visible')
        document.querySelector('.overlay').classList.remove('visible')  
    })
}