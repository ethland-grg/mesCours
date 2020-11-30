<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $nomProduit = $_SESSION["nomProduit"];
    $nom = $_SESSION["nom"];
    echo "Les données mémorisées dans les variables de session sont bien accessibles :<br><ul>";
    echo "<li>" .$_SESSION["prenom"]."</li>";
    echo "<li>".$_SESSION["nom"]."</li></ul>";
  ?>
</body>
</html>