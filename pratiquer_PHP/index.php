

<!-- mannipuler les lettres et mot ( strings) -->

<?php
echo strlen ("Hello Landry ' '"); // afficher le nombre des lettre en php
echo strrev ( "Landry");         // inverser des mots en php

// remplacer un mot dans une autre variable

$oldtxt = " Hello World ! ";
echo ($oldtxt);
$newtxt = str_replace("World", "Dolly", $oldtxt);
echo ($newtxt);

// une condition simple de la même façon que if

$color = "blue"; // regenerer la variable ici afin de definir la condition utilisée
switch
 ($color) {
  
case
 "red":
    echo "Hello";
    break;
  
case
 "green":
    echo "Welcome";
    break;
}


switch
 ($color) {
  
case
 "red":
    echo "Hello";
    break;
  
case
 "green":
    echo "Welcome";
    break;
default:
echo "Neither";
break;
}

?>