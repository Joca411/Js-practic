var names = [];

function askUser() {
	let name = prompt("Unesite ime : ");
	if (name !== "kraj") {
		names[names.length] = name;
		askUser();
	} else {
		displayName();
	}
}

askUser();

function displayName() {
	for (let i = 0; i < names.length; i++) {
		console.log(names[i]);
	}
}
