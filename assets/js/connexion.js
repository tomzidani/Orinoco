// Déclaration d'une constante contenant le lien de l'API
var API = "http://localhost:3000/api/cameras";

// Création d'une fonction de connexion à l'API
function connexionAPI(fonctionRetour, lien) {
	if(lien){ API = lien; }
	fetch(API)
	  .then(function (response) {
	    return response.json();
	  })
	  .then(function (data) {
	    fonctionRetour(data);
	    console.log("Connexion à l'API effectuée.");
	  })
	  .catch(function (err) {
	    console.log(err);
	  });	
}