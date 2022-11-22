var changement = document.getElementById("Social-Media");
var test = document.getElementById("LogoContact");
var Website = document.getElementById("Website");
var Logowebsite = document.getElementById("Logowebsite");

changement.addEventListener("transitionend", function() {
    test.style.opacity="1";
    //test.style.width="3px"; //utile pour minimiser les logo si l'utilisateur place sa souris en dehors de la div.
});

function Internet() {
    Website.style.opacity="1";
    Website.style.width="265px";
    Website.style.height="265px";

}

function telechargement() {

}