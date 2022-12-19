// primero creo una variable que contenga el documento que quiero controlar
const form = document.getElementById('form');
//defino las variables de los demás elementos que quiero capturar
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Definición de funciones
//Show inputs error message
//Función para mostrar el mensaje de error
function showError(input,message){
    const formControl = input.parentElement; //Captura el elemento padre, en este ejemplo es el div con clase form-control div
    formControl.className='form-control error' ;//Sobreescribimos la clase de este elemento con la del error
    const smallTag = formControl.querySelector('small');
    smallTag.innerText =message;
}

//Función para mostrar el mensaje de éxito
function showSuccess(input){
    const formControl = input.parentElement; //Captura el elemento padre, en este ejemplo es el div con clase form-control div
    formControl.className='form-control success' ;//Sobreescribimos la clase de este elemento con la del error


}


//Función para validar el email
function isValidEmail(email){
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//Se incluye la verificación de campos vacíos
function checkRequired(inputArray){
    inputArray.forEach(function(item){
        if(item.value.trim()===''){
            showError(item, `${item.id.charAt(0).toUpperCase()}${item.id.slice(1)} Is required`);
        }else{
            showSuccess(item)
        }
    });
}

//Se incluye la verificación de longitud del texto ingresado
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,`${input.id.charAt(0).toUpperCase()}${input.id.slice(1)} must be at least ${min} characters`);
    }else if(input.value.length>max){
        showError(input, `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)} must be less than ${max}`);
    }else{
        showSuccess(input);
    }
}


//Se incluye la validación de que los dos passwords coincidan
function checkPasswordsMatch(input1, input2){
    if(input1.value!==input2.value){
        showError(input2, "Paswwords do not match")
    }
}

//Debemos agregar un listener al formulario cuando le demos en el boton submit
//el evento que queremos escuchar se llama submit, creamos una función con un parámetro llamado event
form.addEventListener('submit', function(event){
    event.preventDefault();
    //console.log('submit');

    checkRequired([username, email, password, password2]); //activa la función para hacer un check sobre campos vacios
    checkLength(username, 3,15); //activa la función para hacer verificar longitud del usuario ingresado
    checkLength(password, 6, 25); //activa la función para hacer verificar longitud de la contraseña ingresada
    checkPasswordsMatch(password, password2);

})