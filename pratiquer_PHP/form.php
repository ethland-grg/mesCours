


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
    <link rel="stylesheet" href="form.css">
</head>

<body class="linear-gradient">
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
    <div id="contenu">
        <div id="fondForm">
            <div id="titre">
                <h4> EVENT REGISTRATION FORM </h4>

            </div>
            <!-- **  ******    ******** ** Ma contenue  formulaire commence ici*****************    **********   *******-->
            <form id="bloc" action="/form.html" method="GET">

                <!-- **  ******  Mes ensembles des bloc  formulaire *-->
                <div id="section">
                    <!-- **  ******  Mon premier bloc pour aligner -->

                    <!-- **  ****** ******* mes labels à l'aide du flex en colonne   *********************     ************* *-->
                    <div id="lab">

                        <p><label for="Nom"> Name</label></p>
                        <p class="companyLabel"><label for="">Compagny</label></p>
                        <p><label for="">E-mail</label></p>
                        <p><label for="Phone"> Phone</label></p>
                        <p><label for="subject"> Subject</label></p>
                    </div>
                    <!-- **  ****** ******* fin de mes labes   *********************  *********************    ************* *-->

                    <!-- **  ******  Mon deux-ème bloc pour les champs toujour à l'aide du flex        *******   ***************-->

                    <div>
                        <div id="champNom">
                            <div>
                                <div> <input type="text" name=" Nom" value="" class="champ" pattern="[A-Za-z]+" required/></div>
                                <span class="indiceNom"> First Name</span>
                            </div>
                            <div>
                                <div><input type="text" name="Nom" value="" class="champ" pattern="[A-Za-z]+" required/></div>
                                <span class="indiceNom">Last Name</span>
                            </div>

                        </div>
                        <div class="indice1">
                            <input type="text" name=" Company" value="" class="champ1"  required/>
                        </div>
                        <div class="indice">
                            <input type="email" name=" E-mail" value="" class="champ1" required />
                        </div>
                        <div id="champPhone">
                            <div class="indice">
                                <div><input type="text" name=" areaCode" value="" class="champ2" required pattern="[+][0-9]{1,4}|00[0-9]{1,4}" /></div>
                                <div class="indiceNom"> Area Code</div>
                            </div>
                            <div class="indice">
                                <input type="text" name="phoneNumber" value="" class="champ3" required pattern="[0-9]{9,10}"/>
                                <div class="indiceNom"> Phone Number</div>
                            </div>
                        </div>


                        <div class="indice1">
                            <select name="subject" required class="champ1 fill ">
                                <option value="" class="selection"  >Choose Option</option>
                                <option value="Subject1" class="selection">Subject1</option>
                                <option value="Subject2" class="selection">subject2</option>
                                <option value="Subject3" class="selection">subject3</option>
                                <option value="Subject4" class="selection">Subject4</option>
                                <option value="Subject5" class="selection">subject5</option>
                                <option value="Subject6" class="selection">subject6</option>
                            </select>
                        </div>
   
                    </div>

                </div>

                <!-- **  ******  Mon dernier bloc ; c'est la validation de mon formulaire  *************       **********-->


                <!-- ******************************************************************************************************************************************* -->


                <div id="pied">
                    <div> <b> Are you an existing customer ? </b>

                    </div>
                    <div id="blocChek">
                        <div class="chek">
                            <input type="radio" name="demo6" class="demo6" id="demo6-a" checked>
                            <label for="demo6-a">Yes</label>
                        </div>
                        <div class="chek">
                            <input type="radio" name="demo6" class="demo6" id="demo6-b">
                            <label for="demo6-b">No</label>
                        </div>
                    </div>

                </div>

                <div id="valider">

                    <input type="submit" id="val" value="REGISTER">

                </div>

                <!-- **  ******  la fin de mon contenu pour le formulaire            ******* ***********    ******** *******-->

            </form>
        </div>
        
       
    </div>

   

</body>

</html>