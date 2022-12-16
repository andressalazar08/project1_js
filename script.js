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



//Debemos agregar un listener al formulario cuando le demos en el boton submit
//el evento que queremos escuchar se llama submit, creamos una función con un parámetro llamado event
form.addEventListener('submit', function(event){
    event.preventDefault();
    //console.log('submit');

    //Sección para el username
    console.log(username.value); // capturamos aqui la variable del elementbyid y la propiedad exacta

    if(username.value===''){
        showError(username,'Username is required'); //Llamamos una función que se va a llamar showError

    }else{
        showSuccess(username)
    }


    //Sección para el email
    console.log(email.value); // capturamos aqui la variable del elementbyid y la propiedad exacta

    if(email.value===''){
        showError(email,'Email is required'); //Llamamos una función que se va a llamar showError

    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid'); //Llamamos una función que se va a llamar showError

    }
    else{
        showSuccess(email)
    }


    //Sección para el password
    console.log(password.value); // capturamos aqui la variable del elementbyid y la propiedad exacta

    if(password.value===''){
        showError(password,'password is required'); //Llamamos una función que se va a llamar showError

    }else{
        showSuccess(password)
    }


    //Sección para el password2
    console.log(password2.value); // capturamos aqui la variable del elementbyid y la propiedad exacta

    if(password2.value===''){
        showError(password2,'Password again is required'); //Llamamos una función que se va a llamar showError

    }else{
        showSuccess(password2)
    }


})