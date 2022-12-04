const email = sessionStorage.EMAIL_USUARIO;
const nome = sessionStorage.NOME_USUARIO;

if(email == null){
    location = "../cadastro-login.html"
}

function sair() {
    sessionStorage.clear()
    
    location = "../index.html"
}


function catalogar() {
    var forca = Number(input_forca.value);
    var resistencia = Number(input_resistencia.value);
    var velocidade = Number(input_velocidade.value);
    var chakra = Number(input_chakra.value);

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
        })
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
        })
    } else {
        // alert("catalogado com sucesso !!!")
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
    }

    // MEDIA DOS ATRIBUTOS

    // var media_forca = 
    // var media_resistencia =
    // var media_velocidade = 
    // var media_chakra =

}

