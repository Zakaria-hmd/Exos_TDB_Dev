const btn = document.getElementById('btn');
btn.addEventListener('click', boutton );

function boutton (){
    document.getElementById("rep").innerHTML =`Bonjour je suis ${nom } ${prénom} nous sommes le ${date}`

    const nom = document.getElementById('username').value;
const prénom = document.getElementById('first name').value;
let date = new Date()
}



//let input =  document.getElementById("username")
//console.log('username');

