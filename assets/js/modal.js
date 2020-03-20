// Déclaration des variables
var notificationDiv = document.getElementById("notification");
var fermerDiv = document.getElementById("fermer");

// Ajout des évènements
fermerDiv.addEventListener("click", function() {
	$("#modal").fadeOut();
})


// Création de fonction de notifications
function Notification(message) {
	notificationDiv.textContent = message;
	$("#modal").fadeIn();
}