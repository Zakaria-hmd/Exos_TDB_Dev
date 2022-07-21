//let chaine =
 //"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip";
//let reg = new RegExp("(o)", "g");
//let res = chaine.match(/o/g);
//document.getElementById("origin").innerHTML = `Chaîne d'origine : ${chaine} <br/>`;
//document.getElementById("occ").innerHTML = res;
//document.getElementById("myString").innerHTML ="Chaîne traitée : " + 
//chaine.replace(reg, "<span style='background-color: red'>$1</span>") + "<br>";  

function TrouverOccurence(){
var leTexte=document.getElementById("texte").innerHTML;
var termes=document.getElementById("occurence").value;

leTexte = leTexte.split("<span style=\"colors:red;background-color:yellow;\">").join("");
leTexte = leTexte.split("</span>").join("");

if(termes!="")
{
    var expReg = new RegExp(termes,"ig");
    var formeRpl = "<span style='colors:red;background-color:yellow;'>" + termes + "</span>"; 
     leTexte = leTexte.replace(expReg,formeRpl);
     document.getElementById("texte").innerHTML = leTexte;
}
}