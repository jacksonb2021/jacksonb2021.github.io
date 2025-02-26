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
		SecureToken: "79f085f2-0a80-4b70-8fac-cc12379d8b9e",
		To: "jacksonburns2021@gmail.com",
		From: "ismell@jacksonburns.dev",
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
		.then(text=> {
				let str = text;
				let today = new Date();
				let OG = new Date(2003,0,27);
				let years = today.getTime()- OG.getTime();
				//console.log(years);

				const yearsDifference = Math.floor(years / (1000 * 60 * 60 * 24 * 365.25));
				str = str.replace("{age}", yearsDifference);

				document.getElementById("aboutme").innerHTML =str;

			}


		)

}

function currentJobTime(){
	let currentDate = new Date();
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let month = months[currentDate.getMonth()];
	let year = currentDate.getFullYear();
	let string = `${month} ${year} (current) <br>`
	let startDate = new Date("July 22, 2024");
	console.log(startDate.getDate());


	let yearDifference = (currentDate.getFullYear()-startDate.getFullYear() )* 12;
	console.log(yearDifference)

	let monthDifference = currentDate.getDate()-startDate.getDate();
	monthDifference = yearDifference-monthDifference;
	if (monthDifference/12>=1) {
		yearDifference = Math.floor(monthDifference/12);
		string += `${yearDifference} year`
		if(yearDifference!==1){
			string+='s'
		}

	}

	string += ` ${(monthDifference%12)} months</p>`;
	document.getElementById("currentjobtime").innerHTML+=string
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
			let ip = data.ip;
			fetch(`https://api.ipregistry.co/${ip}?key=wozyaj34hirju6ol`)
				.then(response=>response.json())
				.then(output=>{
					console.log(output)
					let str = `IP: ${ip}<br\>Time: ${new Date().toLocaleString()}`;
					str+=`<br\>Company: ${output.company.name}`
					str+=`<br\>Domain: ${output.company.domain}`
					str+="<br\>Location: "+output.location.city+ ", "+ output.location.region.name +" "+output.location.postal
					let location =
						`<a href="https://www.google.com/maps/search/${output.location.latitude},${output.location.longitude}">MAP PIN</a>`

					str+=`<br\>Coordinates: ${output.location.latitude}, ${output.location.longitude} <br\> ${location}`
					Email.send({
						SecureToken: "79f085f2-0a80-4b70-8fac-cc12379d8b9e",
						To: "jacksonburns2021@gmail.com",
						From: "ismell@jacksonburns.dev",
						Subject: "new website visitor",
						Body: str
					})
				})


		});
}

function randomPic(){
	let photoID = document.getElementById("mypic")
	let pic = 'pictures/me/headshot.jpg'
	// let random = Math.floor(Math.random()*(4-1+1))+1;
	// let pic = 'pictures/me/me'
	// pic = pic + random + '.jpg';
	photoID.src = pic;
}


window.addEventListener("load", myInit, true); function myInit(){
	randomPic();
	collapsible();
	aboutMe();
	fetchIP();
	currentJobTime();
}
