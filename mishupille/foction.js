




var compteur = 0;
var signe_user, signe_ordinateur;
var ScoreOrdi = 0;
var ScoreUtilisateur = 0;
var scorejoueur =0;
var meilleur = 0;

//var Led_User=0, Led_ordinateur=0



function utilisateur() {
    var nom = prompt("entrez votre nom svp");
    document.getElementById("nomutilsateur").innerText = nom;

}

//ici mes fonction en utilisant nombre aleatoir pour doner une valeur au UC

function mathRandomInt() {

    return Math.round(Math.random() * 3);
}

function choix_ordi() {
    var machine = mathRandomInt();
    if (machine == 1) {
        document.getElementById("sing_ordi").className = "pierre";
        signe_ordinateur = "pierre";
    } else if (machine == 2) {
            document.getElementById("sing_ordi").className = "feuille";
            signe_ordinateur = "feuille";
        } else {
                document.getElementById("sing_ordi").className = "ciseaux";
                signe_ordinateur = "ciseaux";
        }
}

function boutonClique(params) {
    if (compteur < 3) {
        compteur++;
        document.getElementById("compt").innerText = compteur;
        choix_ordi();
        if (params == 1) {
            document.getElementById("sing_joueur").className = "pierre";
            signe_user = "pierre";
            } else if (params == 2) {
                document.getElementById("sing_joueur").className = "feuille";
                signe_user = "feuille";
            } else {
                document.getElementById("sing_joueur").className = "ciseaux";
                signe_user = "ciseaux";
            }
        Comparaison();
    }
    // pour suprimer classe cligne
    if(compteur == 3){
        document.getElementById("cligne").className = "";
    }
}

function boutoRest() {
    if(compteur >= 3){
        compteur = 0;
        document.getElementById("compt").innerText = compteur;
        document.getElementById("sing_joueur").className = "";
        document.getElementById("sing_ordi").className = "";
        for (i = 1; i <= 3; i++) {
            document.getElementById("led" + i).style.background = "";
            document.getElementById("led" + (3 + i)).style.background = "";
            document.getElementById("bordJouer").style.border = "";
            document.getElementById("bordJouer1" ).style.border = "";
        }
        ScoreOrdi = 0;
        ScoreUtilisateur = 0;
        Led_User = 0;
        Led_ordinateur = 0;
        document.getElementById("final").innerText = "";
        document.getElementById("resultat").innerText = "";
        document.getElementById("cligne").className = "cligne";
    }
}

function Comparaison() {

    if (signe_user == signe_ordinateur) {
        document.getElementById("resultat").innerText = "Egalité";
        ScoreOrdi++;
        ScoreUtilisateur++;
        signal(0);
        bordure(0);
        }else if (signe_user == "pierre" && signe_ordinateur == "ciseaux" || signe_user == "ciseaux" && signe_ordinateur == "feuille" || signe_user == "feuille" && signe_ordinateur == "pierre") {
            document.getElementById("resultat").innerText = " Gagné";
            ScoreUtilisateur++;
            signal(1);
            bordure(1)
        }else {
            document.getElementById("resultat").innerText = "Perdu";
            ScoreOrdi++;
        //Led_ordinateur==Led_ordinateur+1;
            signal(2);
            bordure(2);
    }
    ComparaisonScore();
    
}
// ici pour alumer les leds 
function signal(params) {
    if (params == 0) {
        document.getElementById("led" + compteur).style.background = "green";
        document.getElementById("led" + (3 + compteur)).style.background = "green";
        } else if (params == 1) {
            document.getElementById("led" + compteur).style.background =  "green";
            document.getElementById("led" + (3 + compteur)).style.background = "red";
        } else {
            document.getElementById("led" + compteur).style.background = "red";
            document.getElementById("led" + (3 + compteur)).style.background = "green";
        }
        
}
// ici pour changer le bordure des cadre joueur

function bordure(params) {
    if (params == 0) {
        document.getElementById("bordJouer").style.border = "4px solid orange ";
        document.getElementById("bordJouer1").style.border = "4px solid orange";
        } else if (params == 1) {
            document.getElementById("bordJouer").style.border =  "4px solid green";
            document.getElementById("bordJouer1").style.border = "4px solid red";
        } else {
            document.getElementById("bordJouer").style.border = "4px solid red";
            document.getElementById("bordJouer1").style.border = "4px solid green";
        }
        
}

function ComparaisonScore() {
    if (compteur == 3) {
        if (ScoreUtilisateur == ScoreOrdi) {
            document.getElementById("final").innerText = "Mantch nul";

        } else if (ScoreOrdi > ScoreUtilisateur) {
            document.getElementById("final").innerText = "Vous avez perdu, tentez votre chance";

        } else {
            document.getElementById("final").innerText = "Felicitation, vous avez gagnagé la partie";
        }
        affichescore()
    }
    
}

function affichescore(params) {
    if (compteur == 3 && ScoreOrdi < ScoreUtilisateur) {
        scorejoueur++;
        document.getElementById("scorejoueur").innerText = scorejoueur;
    } else {
        scorejoueur = 0;
        document.getElementById("scorejoueur").innerText = scorejoueur;
    }
    meilleurscore()
}
function meilleurscore(params) {
    if (meilleur <= scorejoueur) {
        meilleur = scorejoueur;
        document.getElementById("meilleur").innerText = scorejoueur;
        
    }
    
}
