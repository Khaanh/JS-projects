const passwordBox = document.getElementById("password");
const notification = document.getElementById("notification");
const passLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!£$%^&*()_+=></:-";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	while (passLength > password.length) {
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}

	passwordBox.value = password;
}

function setNotification(copied) {
	notification.classList.remove("hidden");
	notification.innerHTML = `Copied: ${copied}`;

	setTimeout(() => {
		notification.classList.add("hidden");
	}, 3000);
}

function copyPassword() {
	passwordBox.select();
	navigator.clipboard.writeText(passwordBox.value);
	setNotification(passwordBox.value);
}
