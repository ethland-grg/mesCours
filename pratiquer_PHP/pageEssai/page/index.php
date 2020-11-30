
<?php 
require 'header.php'; 
$title = "page d'accueil";

?>
 <pre>
   <?php print_r($_SERVER); ?>
 </pre>

  <div class="starter-template">
    <h1>Bootstrap starter template</h1>
    <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
  </div>


  <?php
    $prenom = $_SESSION["nom_produit"];
    $nom = $_SESSION["nom"];
    echo "Les données mémorisées dans les variables de session sont bien accessibles :<br><ul>";
    echo "<li>\$_SESSION[\"prenom\"] vaut ".$_SESSION["prenom"]."</li>";
    echo "<li>\$_SESSION[\"nom\"] vaut ".$_SESSION["nom"]."</li></ul>";
  ?>


<?php require 'footer.php'; ?>

