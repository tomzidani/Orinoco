// Déclaration des variables
var notificationDiv = document.getElementById("notification");

function Notification(message) {
	notificationDiv.textContent = message;
	$("#modal").fadeIn();
}