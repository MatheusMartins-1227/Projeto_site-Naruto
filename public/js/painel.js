const email = sessionStorage.EMAIL_USUARIO;
const nome = sessionStorage.NOME_USUARIO;

if(email == null){
    location = "../cadastro-login.html"
}

function sair() {
    sessionStorage.clear()
    
    location = "../index.html"
}

function nomeUsuario () {
    nome_usuario.innerHTML = nome;
}

var personagens = [];
var medias_chakras = [];
var medias_velocidades = [];
var medias_resistencias = [];
var medias_forcas = [];

function carregarDados() {
    fetch("/usuarios/listar").then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                //Respostas em Json Vetorizado resposta[] 
                for (var posicao = 0; posicao < resposta.length; posicao++) {
                    personagens.push(resposta[posicao].nomePersonagem);
                    medias_chakras.push(resposta[posicao].media_chakra);
                    medias_velocidades.push(resposta[posicao].media_velocidade);
                    medias_resistencias.push(resposta[posicao].media_resistencia);
                    medias_forcas.push(resposta[posicao].media_forca);
                }    
                criarGraficos();      
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function criarGraficos() {
    const ctchakra = document.getElementById('myChart_chakra');

    new Chart(ctchakra, {
        type: 'doughnut',
        data: {
            labels: personagens,
            datasets: [{
                label: 'Média',
                data: medias_chakras,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctvelo = document.getElementById('myChart_velocidade');

    new Chart(ctvelo, {
        type: 'doughnut',
        data: {
            labels: personagens,
            datasets: [{
                label: 'Média',
                data: medias_velocidades,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctresi = document.getElementById('myChart_resistencia');

    new Chart(ctresi, {
        type: 'doughnut',
        data: {
            labels: personagens,
            datasets: [{
                label: 'Média',
                data: medias_resistencias,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctfor = document.getElementById('myChart_forca');

    new Chart(ctfor, {
        type: 'doughnut',
        data: {
            labels: personagens,
            datasets: [{
                label: 'Média',
                data: medias_forcas,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}