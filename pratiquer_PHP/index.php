

<!-- mannipuler les lettres et mot ( strings) -->

/*
echo strlen ("Hello Landry ' '"); // afficher le nombre des lettres dans une chaine caractère en php
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

// Encore da les condition et la même façon de javascript ( les  boucle)

$i = 1; 

while               // ito zany ilay boucle atao hoe raha mbola ( tanque)
 ($i < 6) 
{

  echo $i;
  $i++;
}
$i = 1; 

$i = 1; 

do                 // mitovy @ ambony io ihany fa asina fotsiny raha tsy hoe ( ataovy fona raha tsy hoe)
 {
    echo $i;
    $i++;
} 
while
 ($i < 10);


 
for
($i = 0; $i < 10; $i++) { // mitovy @ java ihany an!
 echo $i;
}


function myFunction(){
    echo " Hello Michael";
}
myFunction();



function myFunction($fname, $lname) { // pour que la fonction fonctionne il faut l'appeler en dehor de l'acolade avec ses paramettre precis
   
    echo  $fname;
  
  }
  myFunction("Dieu", "Merci");



  // ******************ON PASSE MAINTENANT SUR LE TABLEAU***************

  $fruits = array("Apple", "Banana", "Orange"); 
echo count($fruits); // count est donc l'element dans un tableau
echo $fruits[1]         // selection element à l'aide de l'index du tableau

$age = array ("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");  //à revoir azoazo fa tsy tena azo tsara ny fiasany sy ny interet-ny

echo " Ben is " . $age["Ben"] ." ". "Years old.";


foreach($age as $x => $y) {  // parcourir dans un tableau 
    echo "Key=" . $x. ", Value=" . $y;
}

$colors = array("red", "green", "blue", "yellow"); 
print_r($colors);
sort($colors); /// je ne comprend pas du tout ça ne reagit pas du tout
rsort($colors);
asort($colors);







?>
*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="welcome.php" method="post">
First name: <input type="text" name="fname">
</form>
Welcome <?php echo $_POST["fname"]; ?>
</body>
</html>



