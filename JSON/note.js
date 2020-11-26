/*Afin de créer une requête, nous avons besoin d'instancier un nouvel 
objet XMLHttpRequest à partir de son constructeur en utilisant le mot clé new. 
Ajouter la ligne suivante à votre script :*/

var request = new XMLHttpRequest();

/*Maintenant, nous avons besoin d'ouvrir une nouvelle requête grâce à la méthode open(). 
Ajoutez la ligne suivante :*/

request.open('GET', requestURL)

/* Cette méthode prend au moins deux paramètres — il y a d'autres paramètres optionnels disponibles.  
Deux suffiront pour notre exemple :

La méthode HTTP à utiliser sur le réseau pour notre requête. Dans notre cas, 
la méthode GET est appropriée dans la mesure où nous voulons simplement récupérer quelques données.
L'URL où adresser notre requête — il s'agit de l'URL du fichier JSON dont nous parlions tout à l'heure.*/
