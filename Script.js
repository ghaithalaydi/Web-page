alert("Welcome aboard");
let Clienttyp = prompt("Are you and organization or a business?");

while (Clienttyp !== "business" && Clienttyp !== "organization") {
    prompt("Kindly enter a matching answer organization or business owner");
}
clientrating();
function clientrating() {
    let Rating = prompt("How many stars would you give our website(1-5)");
    while (Rating > 5 || Rating <= 0 || NaN(Rating)) {
        rate = prompt("kindly enter a number between 1-5");
    }
    return rate
}

let showrating = function () {
    let img2 = <img src="images/star2.png" />;
    let Ratings = clientrating();
    let result = "";
    for (let i = 1; i < Ratings; i++) {
        result = result + "  " + img2;
    }
    return result;
}

// function Clienttell(Clienttyp) {
//     if (Clienttyp == 'organization') {
//         alert("You will be redirected to Org solutions");
//     }
//     else if (Clienttyp == 'business') {
//         alert("You will be redirected to business solutions");
//     }
//     else {
//         alert("Kindly enter a matching answer organization or business owner");
//     }
// }
// Clienttell(Clienttyp);
// var age = prompt("Kindly enter your age");

// function agerestriction(age) {

//     if (age => 15) {
//         alert("You are legally allowed to enter this website");
//     }
//     else {
//         alert("kindly make sure to have a gaurdian by your side");
//     }
// }
// agerestriction(age);

// var game = prompt("Want to play a quick game?");

// function gameoutcome(game) {
//     if (game == "yes") {
//         alert("lets start");
//         var firstno = prompt("Kindly enter your first number");
//         var secondno = prompt("kindly enter your second number");
//         alert("you have entered " + firstno + " & " + secondno + " Tada!!");
//     }
//     else if (game == "no") {
//         alert("maybe next time");
//     }
//     else {
//         alert("invalid input");
//     }
// }
// gameoutcome(game);