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
		SecureToken: "79f085f2-0a80-4b70-8fac-cc12379d8b9e",
		To: "maxblowers@outlook.com",
		From: "ismell@jacksonburns.dev",
		Subject: "MaxDestroyer",
		Body: maxmessages[randIndex]
	})
	randIndex= Math.floor(Math.random()*(max-min+1))+min;

	Email.send({
		SecureToken: "79f085f2-0a80-4b70-8fac-cc12379d8b9e",
		To: "blowersmax@arizona.edu",
		From: "ismell@jacksonburns.dev",
		Subject: "MaxDestroyer",
		Body: maxmessages[randIndex]
	})
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
			return Number(c.substring(name.length, c.length));
		}
	}
	return 0;
}

function incrementCounter(){
	let counter = document.getElementById("counter");
	let next = getCookie("counter")+1;
	document.cookie="counter="+next;

	counter.innerHTML = next;
}


function loadCounter(){
	let counter = getCookie("counter");
	document.getElementById("counter").innerHTML=counter;
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
