// primero creo una variable que contenga el documento que quiero controlar
const form = document.getElementById('form');
//defino las variables de los demás elementos que quiero capturar
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Definición de funciones
//Show inputs error message
function showError(input,message){
    const formControl = input.parentElement; //Captura el elemento padre, en este ejemplo es el div con clase form-control div
    formControl.className='form-control error' ;//Sobreescribimos la clase de este elemento con la del error
    const smallTag = formControl.querySelector('small');
    smallTag.innerText =message;
}





//Debemos agregar un listener al formulario cuando le demos en el boton submit
//el evento que queremos escuchar se llama submit, creamos una función con un parámetro llamado event
form.addEventListener('submit', function(event){
    event.preventDefault();
    //console.log('submit');
    console.log(username.value); // capturamos aqui la variable del elementbyid y la propiedad exacta

    if(username.value===''){
        showError(username,'Username is required'); //Llamamos una función que se va a llamar showError

    }else{
        showSuccess(username)
    }
})