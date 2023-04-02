// Импортирую библиотеку
import throttle from 'lodash.throttle';  

// Нахожу форму
const form = document.querySelector('.feedback-form') 

// Создаю объект , в котором будут храниться значения импута 
const formData = {}; 
getValueLocalStorage() 

// Добавляю слушателя на форму
form.addEventListener('submit', onSubmit)


// Очищаю поля инпутов и удаляю ключ на локальном хранилище
function onSubmit(evt) {
  evt.preventDefault()
  console.log(formData)
  evt.currentTarget.reset()
    localStorage.removeItem('feedback-form-state')
 }


// Ставлю слушателя на форму , использую бибилиотеку lodash
form.addEventListener('input', throttle(onInput, 500))

/*  Записываю значения инпутов в объект и
  сохраняю его в виде строки  на локальном хранилище */
function onInput(evt) {
  evt.preventDefault()
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}
 
// Возвращаю  свойства объекта  с локального хранилища  в значения инпутов 
function getValueLocalStorage() { 
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'))
  if (savedMessage) { 
    Object.entries(savedMessage).forEach(function ([name,value]) { 
      form.elements[name].value = value;
    })
  }
};


