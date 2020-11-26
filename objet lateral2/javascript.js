/*function creerNouvellePersonne(nom) {
  var obj = {};
  obj.nom = nom;
  obj.salutation = function () {
    alert('Salut ! Je m\'appelle ' + this.nom + '.');
  };
  return obj;
}
var salva = creerNouvellePersonne('Salva');
  salva.nom;
  salva.salutation();

var landry = creerNouvellePersonne("landry");
landry.nom;
landry.salutation();
*/
// *******************************************************
// 2 éme exemple -------------------------

/*
function Personne(nom) {
  this.nom = nom;
  this.salutation = function() {
    alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
  };
}
var personne1 = new Personne("Bob");
var personne2 = new Personne("Sarah");
personne1.nom;
personne1.salutation();
personne2.nom;
personne2.salutation();
*/

// **********************************************************
// 3éme exemple
// *******************************************
var personne1 = new Personne('Bob');
var personne2 = new Personne('Sarah');

function Personne(nom) {
  this.nom = nom;
  this.salutation = function() {
    alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
  };
}

{
  nom: 'Bob',
  salutation = function() {
    alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
  }
}

{
  nom: 'Sarah',
  salutation = function() {
    alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
  }
}
personne1.nom;
personne1.salutation();
personne2.nom;
personne2.salutation();

// *************************************************************************
