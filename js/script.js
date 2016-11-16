var link = document.querySelector(".contacts-email");
var popup = document.querySelector(".modal-email");
var close = popup.querySelector(".modal-email-close");
var username = popup.querySelector("[name=username]");
var form = popup.querySelector("form");
var email = popup.querySelector(("[name=email]"));
var storage = localStorage.getItem("username");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-email-show");
	if (storage) {
		username.value = storage;
		email.focus();
	} else {
		username.focus();
	}

});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-email-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
	if (!username.value || !email.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("username", username.value);
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-email-show")) {
			popup.classList.remove("modal-email-show");
			popup.classList.remove("modal-error");
		}
	}
});
