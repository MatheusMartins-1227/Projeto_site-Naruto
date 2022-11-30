const formEntrar = document.querySelector('#entrar')
const formCadatrar = document.querySelector('#cadastrar')
const btColor = document.querySelector('.btColor')

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


//  VALIDAÇÃO DE CADASTRO

function cadastrar() {
  const email = input_email.value;
  const senha = input_senha.value;
  const conf_sennha = input_conf_senha;

  // if (email.indexOf("@") > -1) {
  //   alert("Tem arroba !");
  // } else {
  //   alert("Não tem arroba !");
  // }

 
  if ( senha != conf_sennha) {
    alert("senhas diferentes")
  }else {
    alert("cadastrado")
  }

}
