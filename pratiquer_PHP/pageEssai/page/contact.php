<?php require 'header.php'; ?>
<div class="ontainer pt-5 mt-5 df=flex text-center ">
    <h1 > Ajouter un produit aus enchère</h1>
</div>

<div class="text-justify">
    <p>
    Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:
    </p>
</div>


<section class=" container linear-gradient">
    <!-- je ve juste essayer de mettre une barre d'acceil
    <div id="acceuil"> 
        <div> <a href="acceuil/mon_1_html.html">Home</a>

        </div>
        <div>en savoir plus</div>
        <div>devis</div>
        <div>Formulaire</div>
        <div>contact</div>
    </div> -->
    <!-- fin de la barre barre d'acceil-->
    <div id="contenu" class="mt-5 pt-5" >
        
    <form action="../index.php" method="POST">
            <div class="form-group row">
                <label for="nom_produit" class="col-md-3 col-form-label font-weight-bold">Nom du produit:</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" id="nom_produit2" name="nom_produit2"
                        placeholder="Exemple : iphone 6, etc." pattern="[a-zA-Z0-9 ]+" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="description" class="col-md-3 col-form-label font-weight-bold">Description:</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" id="description2" name="description2"
                        placeholder="Description du produit" pattern="[a-zA-Z0-9 é & è ç ! à ù , ; . £ * # ' ]+">
                </div>
            </div>

            <div class="form-group row">
                <label for="image" class="col-md-3 col-form-label font-weight-bold">Image du produit</label>
                <div class="col-md-9">
                    <input type="file" class="form-control" name="image2" id="image2" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="prix_initial" class="col-md-3 col-form-label font-weight-bold">Prix initial (en €):</label>
                <div class="col-md-9">
                    <input type="number" class="form-control" id="prix_initial2" name="prix_initial2"
                        placeholder="Exemple : 2€" required min="1" step="0.01">
                </div>
            </div>

            <div class="form-group row">
                <label for="prix_clic" class="col-md-3 col-form-label font-weight-bold">Prix du clic (en cts)</label>
                <div class="col-md-9">
                    <input type="number" class="form-control" id="prix_clic2" name="prix_clic2"
                        placeholder="Exemple : 30cts" required min="1">
                </div>
            </div>

            <div class="form-group row">
                <label for="augmentation_prix" class="col-md-3 col-form-label font-weight-bold">Augmentation prix
                    enchère (en cts):</label>
                <div class="col-md-9">
                    <input type="number" class="form-control" id="augmentation_prix2" name="augmentation_prix2"
                        placeholder="Exemple : 2cts" required min="1">
                </div>
            </div>

            <div class="form-group row">
                <label for="augmentation_duree" class="col-md-3 col-form-label font-weight-bold">Augmentation durée
                    enchère (en secondes):</label>
                <div class="col-md-9">
                    <input type="number" class="form-control" id="augmentation_duree2" name="augmentation_duree2"
                        placeholder="Exemple : 30sec" required min="1">
                </div>
            </div>

     
            <div id="valider" lass="row  justify-content-lg-start ml-lg-0">
                     <form action="disabled_card.php">
                    <input type="submit" id="val" value="REGISTER">
                    </from>
            </div>

                <!-- **  ******  la fin de mon contenu pour le formulaire            ******* ***********    ******** *******-->
        
       
    </div>
</section>
   
<?php require 'footer.php'; ?>