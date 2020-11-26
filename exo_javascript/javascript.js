/* exo1 */
/*
let main = document.getElementById("main-content");
console.log(main);

let important = document.getElementsByClassName("important");
console.log(important);

let article = document.getElementsByTagName("article");
console.log(article);

let elt = document.querySelector("article > ul.important > li ");
console.log(elt) ; */

/*895649887+446558888888888888888888888888888888888888888888888888888888888888*/

/* exo2 */
/*
const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt);
console.log (newElt);


let element = document.getElementById("main");
element.innerHTML = "<ul><li>element1</li><li>element1</li></ul>";

let desc = document.getElementsByTagName("p")
*/

/* Exo3 */
/*
var enfant=document.getElementById("child");
var parent=document.getElementById("parent");
var enfantCount=document.getElementById("child-count");
var parentCount=document.getElementById("parent-count");
var enfantScore = 0;
var parentScore = 0;

parent.addEventListener("click", function() {         
    parentCount.innerHTML = ++parentScore;  
  
  console.log(parentCount);
});

enfant.addEventListener("click", function() {         
    enfantCount.innerHTML = ++enfantScore;  
  
  console.log(parentCount);
});
*/

/* Exo4 */
const Nom = document.querySelector('input');
const resName = document.getElementById('res-name');

Nom.addEventListener('change', updateValue);

function updateValue(a) {
  resName.textContent = a.target.value;
}

/*
const Genre = document.getElementById('gender');
const resGenre = document.getElementById('res-gender');

Genre.addEventListener('change', function(event){
         resGenre.textContent = event.target.value;
                       });

var mouseX = document.getElementById("mouse-x");
var mouseY = document.getElementById("mouse-y");
var posX = 0;
var posY = 0;
 
mouseX.addEventListener("mousemove", function (event) {
  posX = event.offsetX;
  posY = event.offsetY;
  mouseX.textContent = posX;
  mouseY.textContent = posY;
})
*/

/* git pull recuperer
git push envoyer
git add
git commit pour metre pour sortir la dedans control ginom*/


