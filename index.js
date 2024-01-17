

function aboutMe(){
	let file = "aboutme.txt";
	fetch(file)
		.then(response => response.text())
		.then(text => document.getElementById("aboutme").innerHTML = text)
	
}
