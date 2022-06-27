

var n =  new Number
estPrem = new Boolean(true)

function tester()
 {
      n=Number(document.test.nbre.value);
      console.log(n)
      estPrem=true;


            for (var i = 2; i < n; i++)
                if (n % i === 0) estPrem=false;
            return n > 1;
           
        }
       document.test.rep.value=estPrem



        //function nbrPremier(nbr) {
          //for (var i = 2; i < nbr; i++)
              //if (nbr % i === 0) return false;
          //return nbr > 1;
          //document.getElementById("Nb")
          //alert(nbrPremier);
      //}
