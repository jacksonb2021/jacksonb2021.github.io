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
		Username: "jaxrules3@gmail.com",
		Password: "05B19070362DFBDCCEF9C91B055BE85C6C9E",
		To: "jacksonburns2021@gmail.com",
		From: email,
		Subject: subject,
		Body: str
	}).then(
		message => alert("mail sent successfully")
	);

}