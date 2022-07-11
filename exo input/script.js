function getValue(nombre) {
    // Sélectionner l'élément input et récupérer sa valeur
    var nombre = document.getElementById("in").value;
    
    
    document.getElementById("resultat").innerHTML = nombre * nombre
    // Afficher la valeur
    //alert(`${input*input}`);
}
console.log(getValue(nombre));



