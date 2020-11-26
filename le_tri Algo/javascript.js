


var i, taille, p;
taille = parseInt(prompt("Donner la taille"));
var tab1 = [];
var tab2 = [];
var tab3 = [];

 
for (i = 0; i < taille; i++) {

  tab1[i] = parseInt(prompt("Donner un nombre pour le tableau 1"));

}
console.log(tab1);

for (i = 0; i < taille; i++) {

  tab2[i] = parseInt(prompt("Donner un nombre pour le tableau 2"));

  
}
 
console.log(tab2);

/*
je crée mes tableau avec l'instruction document.createElement et en ajoutant
la classe du tableau dans bootstrap

*/

/*-----------------------------------------------------------------------------------------*/
// mon tableau 1

var tablo1 = document.createElement("table");
tablo1.className = "table table-bordered";
var tr = document.createElement("tr");
//var titre1 = document.createElement("h5")
for (i = 0; i < taille; i++) {
  var td = document.createElement("td");
  td.innerText = tab1[i];
  tr.append(td);
 // 
}
tablo1.append(tr);
document.getElementById("tab1").append(tablo1);
//document.write("Tableau1 :");


/*-----------------------------------------------------------------------------------------*/

// mon tableau 2

var tablo2 = document.createElement("table");
tablo2.className = "table table-bordered";
var tr = document.createElement("tr");
for (i = 0; i < taille; i++) {
  var td = document.createElement("td");
  td.innerText = tab2[i];
  tr.append(td)

}

tablo2.append(tr);
document.getElementById("tab2").append(tablo2);



/*-----------------------------------------------------------------------------------------*/
// mon tableau  de la somme


var tablo3 = document.createElement("table");
tablo3.className = "table table-bordered";
var tr = document.createElement("tr");
for (i = 0; i < taille; i++) {
  var td = document.createElement("td");
  tab3[i] = tab1[i]+tab2[i];
  td.innerText = tab3[i];
  tr.append(td)

}
tablo3.append(tr);
document.getElementById("tab3").append(tablo3);

console.log(tab3)

/*-----------------------------------------------------------------------------------------*/
  
var nb = document.getElementById("toto").value;