const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

const changeColor = function() {
  h1.style.color = 'red'
}
const changeBgColor = function() {
  h1.style.background = 'green'
}

btn.addEventListener('click', changeColor)
btn.addEventListener('click', changeBgColor)
// btn.removeEventListener('click', changeBgColor)
