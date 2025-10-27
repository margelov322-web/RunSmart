'use strict';

const refs = {
    navigation: document.querySelector('#tabs-content-1 [data-navigation]'),
    content: document.querySelectorAll('#tabs-content-1 [data-content]')
};

refs.navigation.addEventListener('click', onChangeNavigation)

function onChangeNavigation(event) { //функция переключения табов

    const {target} = event; //деструктуризация (извлекли объект target из события event)

    if (target.nodeName !== 'BUTTON') return; //прерывание функции, если клик не по кнопке, а по элементу иного типа

    const currentTab = target; //объявление текущей кнопки: кладем в нее элемент, по которому сделан клик

    clearPrevClasses(); //объявление и удаление классов активности кнопки и отображения контента

    addCurrentClasses(currentTab); //сопоставление контента с активной кнопкой и добавление классов активности кнопки и видимости контента

};


function clearPrevClasses() { //объявление и удаление классов активности кнопки и отображения контента
    const prevActiveTab = refs.navigation.querySelector('.button-catalog-tab_active');
    const prevActiveContent = document.querySelector('.catalog__content_contentShow');
    if (prevActiveTab) {
        prevActiveTab.classList.remove('button-catalog-tab_active');
        prevActiveContent.classList.remove('catalog__content_contentShow');
    };
};

function addCurrentClasses(currentTab) { //сопоставление контента с активной кнопкой и добавление классов активности кнопки и видимости контента 
    const currentDataTab = currentTab.dataset.tab; //получение значения дата-атрибута активного таба
    const currentContent = window.document.querySelector(`[data-content=${currentDataTab}]`); //объявление контента, который нужно выводить в соответствии с дата-атрибутом передаваемым из активного таба
    currentContent.classList.add('catalog__content_contentShow'); //добавления класса видимости
    currentTab.classList.add('button-catalog-tab_active'); //добавления класса активности
};


const ItemsRefs = document.querySelectorAll('.catalog-item__link');

ItemsRefs.forEach(a => {
    a.addEventListener('click', function() {
        console.log('clicked');
    })
})