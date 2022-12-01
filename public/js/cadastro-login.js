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

function validar_cadastro() {
  var email_cad = input_email_cad.value;
  var senha_cad = input_senha_cad.value;
  var conf_senha_cad = input_conf_senha_cad.value;


  if(senha_cad != conf_senha_cad || email_cad == ""){
    alert("ERRO! senhas se diferem")
  }else {
    alert("sucesso")
  }

  return {entrar}
}
