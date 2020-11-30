
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


  <form name="MonFormulaire" method="post" action="ajoutproduit.php">
    <table><tr><td><label>Prénom</label></td>
      <td><input type="text" name="prenom"></td></tr>
      <tr><td><label>Nom</label></td>
      <td><input type="text" name="nom"></td></tr>
      <tr><td><input type="submit" name="Nom" value="Envoyer"></td>
      <td></td></tr>
    </table>
    </form>


<?php require 'footer.php'; ?>

