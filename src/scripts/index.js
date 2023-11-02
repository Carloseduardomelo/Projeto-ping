const error = document.getElementById('error')
const button = document.getElementById('button')
const input= document.getElementById('email')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


button.addEventListener('click' , () => {

    console.log(input.value)

    if(input.value == ''){
        error.style.display = 'block'
        error.innerHTML = 'digite o email antes de proseguir'
    }else if(validateEmail(input.value) === false){
        error.style.display = 'block'
        error.innerHTML = 'email invalido'
    }else{
        error.style.display = 'none'
    }
})