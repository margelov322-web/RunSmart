'use strict'

const formElement = document.querySelector('form#consultation')

//получение данных с полей формы consultation при срабатывании submit
formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formElement)

    console.log('Form data:', Object.fromEntries(formData))
})

//выполнение запроса к серверу
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('responce :', response)
    return response.json()
  })
  .then((json) => console.log(json));


// Скрипт отправки данных с форм submit в Google Sheets
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxvHWETM2WYd9EDOgRx4A-jZRmvhMDKRcev8Z31hzJBTJB6tyerSroxHPibBHhtH96U/exec'
// const form = document.forms['submit-to-google-sheet']
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })