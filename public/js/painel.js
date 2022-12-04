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

function criarGraficos () {
    const ctchakra = document.getElementById('myChart_chakra');

    new Chart(ctchakra, {
        type: 'doughnut',
        data: {
            labels: ['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sasuke', 'Sakura', 'Rocke Lee'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 10, 3, 21, 33, 17, 9, 1],
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
            labels: ['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sasuke', 'Sakura', 'Rocke Lee'],
            datasets: [{
                label: '# of Votes',
                data: [4, 19, 3, 10, 3, 5, 22, 17, 9, 1],
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
            labels: ['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sasuke', 'Sakura', 'Rocke Lee'],
            datasets: [{
                label: '# of Votes',
                data: [19, 32, 3, 4, 3, 21, 33, 50, 9, 22],
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
            labels: ['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sasuke', 'Sakura', 'Rocke Lee'],
            datasets: [{
                label: '# of Votes',
                data: [11, 19, 3, 55, 3, 31, 33, 17, 9, 1],
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