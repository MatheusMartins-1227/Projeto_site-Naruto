function abaLogar() {
  entrar.style.left = "25px"
  cadastrar.style.left = "450px"
  btColor.style.left = "0px"
}

function abaCadastrar() {
  entrar.style.left = "-450px"
  cadastrar.style.left = "25px"
  btColor.style.left = "110px"
}

function invalidEmailChar(email) {
  const valid_chars = [".","-","_","@","0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var invalid_char = false;
  for (let index = 0; index < email.length; index++) {
      const char_email = email[index];
      if (valid_chars.indexOf(char_email) == -1) {
          invalid_char = true;
      }
  }
  if (invalid_char) {
      return true;
  }
  return false;
}

// validacao do cadastro

function validarCadastro () {
  const email = input_email_cad.value.toLowerCase();
  const senha = input_senha_cad.value;
  const conf_senha = input_conf_senha_cad.value;

  var validacao_dados   

  if (email == "") {
    alert("Informe seu email");
    input_email_cad.style.borderColor = "#ff0000";
  }
  else if (email.indexOf("@") < 3 || (email.lastIndexOf(".") - email.indexOf("@")) < 4 || (email.length - email.lastIndexOf(".")) < 3 || invalidEmailChar(email)) {
    alert("Informe um e-mail válido");
    input_email_cad.style.borderColor = "#ff0000";
  }
  else if (senha == "") {
    alert("informe uma senha");
    input_email_cad.style.borderColor = "#00ff00";
    input_senha_cad.style.borderColor = "#ff0000";
  }  
  else if (senha.length < 5){
    alert("A senha deve possuir no mínimo 5 caracteres")
    input_senha_cad.style.borderColor = "#ff0000";
  }
  else if (senha != conf_senha){
    alert("senhas se diferem")
    input_senha_cad.style.borderColor = "#ff0000";
    input_conf_senha_cad.style.borderColor = "#ff0000";
  }
  else{
    alert("cadastro realizado com sucesso !!!")
    input_email_cad.style.borderColor = "#00ff00";
    input_senha_cad.style.borderColor = "#00ff00";
    input_conf_senha_cad.style.borderColor = "#00ff00";
  }
}

// validacao do login

function validarLogin() {
  const email_log = input_email_log.value;
  const senha_log = input_senha_log.value;

    if (email_log == "" || senha_log == "") {
      alert("Erro")
      input_senha_log.style.borderColor = "#ff0000";
      input_email_log.style.borderColor = "#ff0000";
    }else {
      alert("entrando")
      input_email_log.style.borderColor = "#00ff00";
      input_senha_log.style.borderColor = "#00ff00";
    }
}