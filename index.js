function contactMe() {
	let name = document.getElementById("name").value;
	document.getElementById("name").value = "";
	let email = document.getElementById("email").value;
	document.getElementById("email").value = "";
	let message = document.getElementById("body").value;
	document.getElementById("body").value = "";
	let subject = "Website Contact";
	let str = "name: " + name + "\nemail: " + email + "\nmessage: \n" + message;
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "jacksonburns2021@gmail.com",
		Password: "22F9A0E55B2A0DB37140C3951FE236EAC475",
		To: "jacksonburns2021@gmail.com",
		From: email,
		Subject: subject,
		Body: str
	}).then(
		message => alert("mail sent successfully")
	);

}