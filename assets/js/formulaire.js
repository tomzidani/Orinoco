// Déclaration des variables
var erreurDiv = document.getElementById("erreur");
var inputPrenom = document.getElementById("prenom");
var inputNom = document.getElementById("nom");
var inputEmail = document.getElementById("email");
var inputAdresse = document.getElementById("adresse");
var inputVille = document.getElementById("ville");
var btnConfirmer = document.getElementById("confirmer");

function erreur(message){
	erreurDiv.textContent = message;
	erreurDiv.style.display = "block";
}

function confirmerCommande() {
	const regexNomPrenom = /^[a-zA-Z ]+$/;
	const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const prenom = inputPrenom.value;
	const nom = inputNom.value;
	const email = inputEmail.value;
	const adresse = inputAdresse.value;
	const ville = inputVille.value;

	if(prenom != "" && nom != "" && ville != "" && adresse != "" && email != "") {
		if(prenom.length >= 2 && prenom.length <= 50) {
			if(regexNomPrenom.test(prenom) == true) {
				if(nom.length >= 2 && nom.length <= 50) {
					if(regexNomPrenom.test(nom) == true) {
						if(email.length >= 5 && email.length <= 50) {					
							if(regexEmail.test(email) == true) {
								if(adresse.length >= 5 && adresse.length <= 170) {
									if(ville.length >= 2 && ville.length <= 70) {
										var contact = {nom: nom, prenom: prenom, email: email, adresse: adresse, ville: ville};
										var produits = localStorage.getItem("panier");
										console.log(produits);
										console.log(contact);
									}
									else
									{
										erreur("Votre ville doit contenir entre 2 et 70 caractères");
									}
								}
								else
								{
									erreur("Votre adresse postale doit contenir entre 5 et 170 caractères");
								}
							}
							else
							{
								erreur("Merci d'entrer une adresse e-mail valide");

							}
						}
						else
						{
							erreur("Votre adresse e-mail doit contenir entre 5 et 50 caractères");
						}
					}
					else
					{
						erreur("Votre nom contient des caractères non autorisés")				
					}
				}
				else
				{
					erreur("Votre nom doit contenir entre 2 et 50 caractères");					
				}
			}
			else
			{
				erreur("Votre prénom contient des caractères non autorisés")
			}
		}
		else
		{
			erreur("Votre prénom doit contenir entre 2 et 50 caractères");
		}
	}
	else
	{
		erreur("Les champs sont vides");
	}
}

// Ajout des évènements
btnConfirmer.addEventListener("click", confirmerCommande);