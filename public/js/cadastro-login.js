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
  const nome_cad = input_nome_cad.value;
  const email = input_email_cad.value.toLowerCase();
  const senha = input_senha_cad.value;
  const conf_senha = input_conf_senha_cad.value;

  var dados_invalidos = false;

  if(nome_cad == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'warning',
      title: 'Informe seu nome'
    })
    input_nome_cad.style.borderColor = "#ff0000";
    var dados_invalidos = true;
  }
  else if (email == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'warning',
      title: 'Informe seu email'
    })

    input_nome_cad.style.borderColor = "#00ff00";
    input_email_cad.style.borderColor = "#ff0000";
    dados_invalidos = true;
  }

  else if (email.indexOf("@") < 3 || (email.lastIndexOf(".") - email.indexOf("@")) < 4 || (email.length - email.lastIndexOf(".")) < 3 || invalidEmailChar(email)) {
    // alert("Informe um e-mail válido");

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'Informe um e-mail válido'
    })
    input_email_cad.style.borderColor = "#ff0000";

    dados_invalidos = true;
  }
  else if (senha == "") {
    // alert("informe uma senha");
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'warning',
      title: 'informe uma senha'
    })
    input_email_cad.style.borderColor = "#00ff00";
    input_senha_cad.style.borderColor = "#ff0000";
    dados_invalidos = true;
  }  
  else if (senha.length < 5){
    // alert("A senha deve possuir no mínimo 5 caracteres")
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'warning',
      title: 'A senha deve possuir no mínimo 5 caracteres'
    })
    input_senha_cad.style.borderColor = "#ff0000";

    dados_invalidos = true;
  }
  else if (senha != conf_senha){
    // alert("senhas se diferem")
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'senhas se diferem'
    })
    input_senha_cad.style.borderColor = "#ff0000";
    input_conf_senha_cad.style.borderColor = "#ff0000";

    dados_invalidos = true;
  }
  else{
    // alert("cadastro realizado com sucesso !!!")
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'cadastro realizado com sucesso !!! TO CERTOO'
    })
    input_email_cad.style.borderColor = "#00ff00";
    input_senha_cad.style.borderColor = "#00ff00";
    input_conf_senha_cad.style.borderColor = "#00ff00";
  }

  if (!dados_invalidos) {
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nome_cad,
          emailServer: email,
          senhaServer: senha
      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {
        //Cadastro realizado
        resposta.json().then(json => {
          alert('Here')
          console.log(json);
          console.log(JSON.stringify(json));

          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.id;
      });
          abaLogar();
      } else {
          throw ("Houve um erro ao tentar realizar o cadastro!");
      }
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
  });
  }

}

// validacao do login

function validarLogin() {
  const email_log = input_email_log.value;
  const senha_log = input_senha_log.value;

    if (email_log == "" || senha_log == "") {
      // alert("Erro")
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Erro !!! Precisa preencher todos os campos'
      })

      audio_triste.play();
      input_senha_log.style.borderColor = "#ff0000";
      input_email_log.style.borderColor = "#ff0000";
    }else {
      // alert("entrando")
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Entrando ...'
      })

      input_email_log.style.borderColor = "#00ff00";
      input_senha_log.style.borderColor = "#00ff00";
    }
}