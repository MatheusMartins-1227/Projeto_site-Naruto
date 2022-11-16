var formEntrar = document.querySelector('#Entrar')
var formCadatrar = document.querySelector('#cadastrar')
var btColor = document.querySelector('.btColor')

document.querySelector('#btLogar')
  .addEventListener('click', () => {
    formEntrar.style.left = "25px"
    formCadatrar.style.left = "450px"
    btColor.style.left = "0px"
})

document.querySelector('#btCadastro')
  .addEventListener('click', () => {
    formEntrar.style.left = "-450px"
    formCadatrar.style.left = "25px"
    btColor.style.left = "110px"
})