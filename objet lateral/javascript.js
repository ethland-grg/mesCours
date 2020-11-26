let Landry = {
    nom :['Etheve', 'Landry'   ],
    age :42,
    mail : "ethlanggrg@gmail.com",

    bonjour : function () {
        alert ( " Bonjour, je suis " + this.nom[1]+", j'ai "+
        this.age + " ans ");
    }
    
}
bonjour()
document.getElementById("p1").innerHTML = "Nom : " + Landry.nom;
document.getElementById('p2').innerHTML = "Age : " + Landry.age + " Ans";

// methode 1 pour modifier l'age ou autre 
/*Landry.age = 28;

document.getElementById('p3').innerHTML = "Nouvel age: " + Landry.age +" Ans"
Landry.taille =178;
Landry.prez = function () {
   alert ( " Bonjour, je suis " +this.nom[1]+", j'ai "+
        this.age + " ans et je mesure " + this.taille + " cm"); 
}
Landry.bonjour();
Landry.prez();
// methode 2 pour modifier l'age ou autre
Landry["age"]= 25;
document.getElementById("p4").innerHTML= "Age: " + Landry["age"];
//****************************************** */
/*
function Utilisateur(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;
    this.bonjour = function () {
        alert ( " Bonjour, je suis " + this.nom[1]+", j'ai "+
            this.age + " ans ");
    }
}


//***************************************************** 
let Landry1= new Utilisateur(["Etheve", "Landry"], 29, "ethlandgrg@gmail.com");
Landry1.bonjour();
*/