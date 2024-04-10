let maxmessages =
	[
		"It's war max",
		"You're cooked",
		"Go build a website silly boy",
		"Do you like my new website?",
		"🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓",
		"I bet you can't find my site",
		"Go checkout my website at https://jacksonb2021.github.io",
		"HEHEHEHEHEHEHEHEHEHEHEHEHE",
		"You're late for work",
		"You have an overnight UITS shift",
		"I'm right behind you",
		"I bought your website",
		"Do you admit defeat?",
		"You can go hard but I can get harder",
		"I'm the hardest man alive"
	]

function sendEmail(){
	incrementCounter();

	let max = maxmessages.length-1;
	let min=0;
	let randIndex= Math.floor(Math.random()*(max-min+1))+min;

	Email.send({
		SecureToken: "910875bf-132e-40b8-9a1e-b8faa1a81026",
		To: "maxblowers@outlook.com",
		From: "jakie@maxblowers.dev",
		Subject: "MaxDestroyer",
		Body: maxmessages[randIndex]
	})
	//randIndex= Math.floor(Math.random()*(max-min+1))+min;

	// Email.send({
	// 	SecureToken: "910875bf-132e-40b8-9a1e-b8faa1a81026",
	// 	To: "blowersmax@arizona.edu",
	// 	From: "jakie@maxblowers.dev",
	// 	Subject: "MaxDestroyer",
	// 	Body: maxmessages[randIndex]
	// })
}



function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function incrementCounter(){
	let counter = document.getElementById("counter");
	document.cookie="counter="+(Number(counter.innerHTML)+1);//`counter=${Number(counter.innerHTML)+1}`;

	counter.innerHTML = getCookie("counter");
}


function loadCounter(){
	let counter = getCookie("counter");
	let number;

	if(counter===""){
		number = ""+0;
	} else{
		number = counter;
	}
	document.getElementById("counter").innerHTML=number;
}

function resetCounter(){
	document.cookie="counter=0";
	loadCounter();
}

let button = document.getElementById("evil-button");
button.addEventListener("click",sendEmail);

let clear = document.getElementById("reset-button")
clear.addEventListener("click",resetCounter)


window.addEventListener("load",loadCounter)
