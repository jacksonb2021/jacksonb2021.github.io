function contactMe() {
	let name = document.getElementById("name").value;
	document.getElementById("name").value = "";
	let email = document.getElementById("email").value;
	document.getElementById("email").value = "";
	let message = document.getElementById("body").value;
	document.getElementById("body").value = "";
	let subject = "Website Contact";
	let str = `Name: ${name} <br/> Email: ${email} <br/> Message: <br/> ${message}`;
	Email.send({
		SecureToken: "c499b695-248b-4326-a188-2f7180a4d977",
		To: "jacksonburns2021@gmail.com",
		From: "jakie@maxblowers.dev",
		Subject: subject,
		Body: str
	}).then(
		message => {
			if(message==="OK"){
				alert("Email sent successfully")
			}
			else{
				alert("Error sending message")
				console.error(message)
			}

		}
	)
}


function aboutMe(){
	let file = "aboutme.txt";
	fetch(file)
		.then(response => response.text())
		.then(text => document.getElementById("aboutme").innerHTML = text)
	
}


function collapsible(){
	let collapsable  = document.getElementsByClassName("collapsablebutton");
	for(let i of collapsable){
		i.addEventListener("click",function(){
			this.classList.toggle("active");
			let content = this.nextElementSibling;
			if(content.style.display==="block"){
				content.style.display="none";

			} else{
				content.style.display="block";
			}

		});
	}
}


function fetchIP(){
	fetch("https://api.ipify.org?format=json")
		.then(response => response.json())
		.then(data => {
			let str = "IP: " + data.ip + "<br\>Time: " + new Date().toLocaleString();
			str+="<br\>Browser: " + navigator.userAgent;
			let loc = geoip.lookup(data.ip);
			console.log(loc);
			//str+="<br\>Location: " + loc.city + ", " + loc.region + ", " + loc.country;
			// Email.send({
			// 	SecureToken: "c499b695-248b-4326-a188-2f7180a4d977",
			// 	To: "jacksonburns2021@gmail.com",
			// 	From: "jakie@maxblowers.dev",
			// 	Subject: "new website visitor",
			// 	Body: data.ip
			// })
		});
}

window.addEventListener("load", myInit, true); function myInit(){
	collapsible();
	aboutMe();
	fetchIP();
}
