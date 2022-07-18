//recup des élements 
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// evenemtns
form.addEventListener('clik',e=>{
    e.preventDefault();
    form_verify();
})


//Fonctions
function form_verify(){
// Obtenir toutes les valeurs des inputs
const userValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
// username verify
if (userValue ===""){
    let mesage = "username ne peut pas être vide"; 
    setError(username,message)
}
}
function setError(elem,message){
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
    // ajout du message d'erreur
    small.innertText = message
    // ajout de la classe error 
    formControl.className = "form-control error";
}