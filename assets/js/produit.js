// Connexion à l'API
connexionAPI(afficherProduit);

// Récupération de l'URL
let url = window.location.href;
url = url.split('?id=');
const id = url[1];

// Déclaration des variables

	// Produits
	let photoProduit = document.getElementById("photo");
	let prixProduit = document.getElementById("prix");
	let nomProduit = document.querySelector("h2");
	let lentillesProduit = document.getElementById("lentilles");
	let descProduit = document.getElementById("desc");
	let champProduit = document.querySelector(".produit-page");

	// Boutons & inputs
	let ajouterAuPanier = document.getElementById("panier");

// Affichage des données
function afficherProduit(data){

	// Récupération du produit voulu en fonction de l'ID de l'URL
	const informationsProduit = data.filter(item => item._id == id);
	const produit = informationsProduit[0];

	// Si il n'y a pas de produit correspondant à l'ID récupéré
	if(!produit) {

		// Création d'un message d'erreur
		champProduit.style.display = "block";
		let messageErreur = '<h2 class="centre">Oups, il semblerait que ce produit n\'existe pas..</h2><br>';
		messageErreur += '<p class="centre">Tu peux revenir à l\'accueil en cliquant <a href="./index.html"><span>ICI</span></a></p>';

		// Insertion du message d'erreur
		champProduit.innerHTML = messageErreur;
	}

	// Sinon
	else {

		// Déclaration de la variable lentilles
		let lentilles = "";

		// Création d'une boucle pour récupérer les lentilles
		for(let i = 0; i < produit.lenses.length; i++){

			// Si la variable lentille est vide, alors on y stocke la première lentille
			if(lentilles == "") {
				lentilles = produit.lenses[i];
			}
			// Sinon, on y ajoute la deuxième lentille avec une virgule
			else {
				lentilles += ", "+ produit.lenses[i];
			}
		}

		// Insertion des informations du produit dans la page
		nomProduit.textContent = produit.name;
		lentillesProduit.textContent = lentilles;
		descProduit.textContent = produit.description;
		prixProduit.innerHTML = produit.price/100 + "&euro;";
		photoProduit.setAttribute("src", produit.imageUrl);
	}
}

// Création d'une fonction pour l'ajout au panier
function ajouterPanier() {

	// Récupération des informations du panier
	let panier = JSON.parse(localStorage.getItem("panier")) || [];

	// La variable contenant les informations
	var informationsObjet = {"id": id};

	// Si le panier est vide on stocke simplement les informations du produit dedans
	if(!panier) {
		localStorage.setItem("panier", [JSON.stringify(informationsObjet)]);
	}

	// Sinon on ajoute les informations du produit à celles déjà stockées
	else {
		console.log(panier);
		panier.push(informationsObjet);
		localStorage.setItem("panier", [JSON.stringify(panier)]);
	}
	modal("notification", "Article ajouté au panier");
	console.log(panier);
}

// Ajout des évènements
ajouterAuPanier.addEventListener("click", ajouterPanier);