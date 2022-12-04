const email = sessionStorage.EMAIL_USUARIO;
const nome = sessionStorage.NOME_USUARIO;

if(email == null){
    location = "../cadastro-login.html"
}

function sair() {
    sessionStorage.clear();
    
    location = "../index.html"
}

function nomeUsuario () {
    nome_usuario.innerHTML = nome;
}

function personagens () {
    const vila = sessionStorage.VILA_USUARIO;
    const personagens_vila_folha = ["Naruto","sasuke","minato","kakashi","jiraya"];
    const personagens_vila_nevoa = ["Haku Yuki","Jinin Akebino","Jinpachi Munashi","Kisame Hoshigaki","Kushimaru Kuriarare"];
    const personagens_vila_pedra = ["Ōnoki","Kitsuchi","Kurotsuchi","Akatsuchi","Mu"];
    const personagens_vila_nuvem = ["Mu","Killer Bee","Motoi","Karui","kira"];
    const personagens_vila_areia = ["Gaara","temaki","akasuna","Chiyo","baki"];
    const personagens_vila_som = ["Jiroubou","Juugo","Kabuto Yakushi","Karin Uzumaki","Kidoumaru"];

    var personagens_cadastrados = [];

    fetch(`/usuarios/listar_personagem_cadastrado/${sessionStorage.ID_USUARIO}`).then(function (resposta) {
  
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                for (let i = 0; i < resposta.length; i++) {
                    const personagem = resposta[i].nomePersonagem;
                    personagens_cadastrados.push(personagem);                             
                }
                criarOptions();
            });  
        } else {
            throw ("Houve um erro ao buscar dados!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    function criarOptions() {
        if (vila == "folha") {
            if (personagens_cadastrados.length == personagens_vila_folha.length){
                alert("Todos os personagens dessa vila já foram cadastrados");
            }
            for (let index = 0; index < personagens_vila_folha.length; index++) {
                const personagem = personagens_vila_folha[index];
                var cadastrado = false;
                for (let index = 0; index < personagens_cadastrados.length; index++) {               
                    if (personagem == personagens_cadastrados[index]) {
                        cadastrado = true;
                    }                
                }    
                if (!cadastrado){
                    select_personagens.innerHTML += `<option value="${personagem}">${personagem}</option>`; 
                }                   
            }
        } else if (vila == "nevoa") {
            if (personagens_cadastrados.length == personagens_vila_nevoa.length){
                alert("Todos os personagens dessa vila já foram cadastrados");
            }
            for (let index = 0; index < personagens_vila_nevoa.length; index++) {
                const personagem = personagens_vila_nevoa[index];
                var cadastrado = false;
                for (let index = 0; index < personagens_cadastrados.length; index++) {               
                    if (personagem == personagens_cadastrados[index]) {
                        cadastrado = true;
                    }                
                }    
                if (!cadastrado){
                    select_personagens.innerHTML += `<option value="${personagem}">${personagem}</option>`; 
                }                   
            }
        } else if (vila == "pedra") {
            if (personagens_cadastrados.length == personagens_vila_pedra.length){
                alert("Todos os personagens dessa vila já foram cadastrados");
            }
            for (let index = 0; index < personagens_vila_pedra.length; index++) {
                const personagem = personagens_vila_pedra[index];
                var cadastrado = false;
                for (let index = 0; index < personagens_cadastrados.length; index++) {               
                    if (personagem == personagens_cadastrados[index]) {
                        cadastrado = true;
                    }                
                }    
                if (!cadastrado){
                    select_personagens.innerHTML += `<option value="${personagem}">${personagem}</option>`; 
                }                   
            }
        } else if (vila == "nuvem") {
            if (personagens_cadastrados.length == personagens_vila_nuvem.length){
                alert("Todos os personagens dessa vila já foram cadastrados");
            }
            for (let index = 0; index < personagens_vila_nuvem.length; index++) {
                const personagem = personagens_vila_nuvem[index];
                var cadastrado = false;
                for (let index = 0; index < personagens_cadastrados.length; index++) {               
                    if (personagem == personagens_cadastrados[index]) {
                        cadastrado = true;
                    }                
                }    
                if (!cadastrado){
                    select_personagens.innerHTML += `<option value="${personagem}">${personagem}</option>`; 
                }                   
            }
        } else if (vila == "areia") {
            if (personagens_cadastrados.length == personagens_vila_areia.length){
                alert("Todos os personagens dessa vila já foram cadastrados");
            }
            for (let index = 0; index < personagens_vila_areia.length; index++) {
                const personagem = personagens_vila_areia[index];
                var cadastrado = false;
                for (let index = 0; index < personagens_cadastrados.length; index++) {               
                    if (personagem == personagens_cadastrados[index]) {
                        cadastrado = true;
                    }                
                }    
                if (!cadastrado){
                    select_personagens.innerHTML += `<option value="${personagem}">${personagem}</option>`; 
                }                   
            }
        } else {
            if (personagens_cadastrados.length == personagens_vila_som.length){
                alert("Todos os personagens dessa vila já foram cadastrados");
            }
            for (let index = 0; index < personagens_vila_som.length; index++) {
                const personagem = personagens_vila_som[index];
                var cadastrado = false;
                for (let index = 0; index < personagens_cadastrados.length; index++) {               
                    if (personagem == personagens_cadastrados[index]) {
                        cadastrado = true;
                    }                
                }    
                if (!cadastrado){
                    select_personagens.innerHTML += `<option value="${personagem}">${personagem}</option>`; 
                }                   
            }
        }   
    }    
}

function catalogar() {
    const id_usuario = sessionStorage.ID_USUARIO;
    const personagem = select_personagens.value;
    const forca = Number(input_forca.value);
    const resistencia = Number(input_resistencia.value);
    const velocidade = Number(input_velocidade.value);
    const chakra = Number(input_chakra.value);    

    var dados_invalidos = false;

    if (forca == "" || resistencia == "" || velocidade == "" || chakra == "") {
        // alert("campos vazios")
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
            title: 'Campos vazios'
        });
        dados_invalidos = true;
    }
    else if (forca < 0 || forca > 100 ||
        resistencia < 0 || resistencia > 100 ||
        velocidade < 0 || velocidade > 100 ||
        chakra < 0 || chakra > 100) {
        // alert("errado")
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
            title: 'Erro! Os valores devem estar dentro dos critérios'
        });
        dados_invalidos = true;
    }
    else if (personagem == 0) {
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
            title: 'Selecione um personageme'
        });
        dados_invalidos = true;
    }

    if (!dados_invalidos) {
        fetch("/usuarios/cadastrar_personagem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                personagemServer: personagem,
                forcaServer: forca,
                resistenciaServer: resistencia,
                velocidadeServer: velocidade,
                chakraServer: chakra,
                idUsuarioServer: id_usuario,
            })
        }).then(function (resposta) {
      
            console.log("resposta: ", resposta);
      
            if (resposta.ok) {
              //Cadastro realizado
              resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
      
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
                    title: 'catalogado com sucesso! Dattebayo !!!'
                })
                
                setTimeout(() => {
                    location.reload()
                  }, 1000)
            });
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }

    // MEDIA DOS ATRIBUTOS

    // var media_forca = 
    // var media_resistencia =
    // var media_velocidade = 
    // var media_chakra =

}

