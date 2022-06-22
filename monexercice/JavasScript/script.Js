let menu = prompt("Opération");
    menu = parseInt(menu)

switch (menu){
    case 1 :
        alert("Faire un retrait");
        document.write("Combien voulez retirer ?")
        break;
        case 2 :
            alert("Consulter mon solde");
            document.write("Votre solde est de:")
            break;
        case 3 :
            alert("Faire un virement");
            document.write("Faire un virement de:")
             break;
        case 4 :
            alert("Faire un Dépot");
            document.write("Combien voulez déposer ?")
            break;
        case 5 :
            alert("Consulter mon historique");
            document.write("Votre historique:")
            break;
        case 6 :
            alert("Demande de rib");
            document.write("Voici votre rib")
            break;
        case 7 :
            alert("Reprendre ma carte");
            document.write("A bientot")
            break;
            default :
            alert("rien afficher pour cette valeur");

}

