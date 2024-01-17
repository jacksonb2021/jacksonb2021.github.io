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
		Username: "jackie@maxblowers.dev",
		Password: "E06250AC6F9B4D584D687813DFF47C48CF22",
		To: "jacksonburns2021@gmail.com",
		From: email,
		Subject: subject,
		Body: str
	}).then(
		message => alert("mail sent successfully")
	).catch(
		error => alert("Error sending email: ", error)
	);


}

