// Déclaration d'une constante contenant le lien de l'API
var API = "http://localhost:3000/api/cameras";

// Création d'une fonction de connexion à l'API
function connexionAPI(fonctionRetour, lien) {
	if(lien){ API = lien; }
	
	return new Promise ((resolve, reject) => {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
		    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		    	const data = JSON.parse(this.responseText);
		        fonctionRetour(data);
		    }
		};
		request.open("GET", API);
		request.send();
	});


}