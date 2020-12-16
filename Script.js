alert("Wlecome aboard");
var Clienttyp = prompt("Are you and organization or a business?");

Clienttell(Clienttyp);

function Clienttell(Clienttyp) {
    if (Clienttyp == 'organization') {
        alert("You will be redirected to Org solutions");
    }
    else if (Clienttyp == 'business') {
        alert("You will be redirected to business solutions");
    }
    else {
        alert("Kindly enter a matching answer organization or business owner");
    }
}

var  age = prompt("Kindly enter your age");

function agerestriction(age) {

    if (age => 15) {
        alert("You are legally allowed to enter this website");
    }
    else {
        alert("kindly make sure to have a gaurdian by your side :)");
    }
}
agerestriction(age);
