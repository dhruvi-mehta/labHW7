document.body.style.backgroundColor = "#ffecd9"



function clickSingapore(){
	singapore.classList.add("clear")
	bubs.classList.remove("clear")
	sunset.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I have lived in Singapore all my life and I am hoping to go back in the summer!"
}

let singapore = document.querySelector("#singapore");
singapore.addEventListener("click", clickSingapore);

function clickBubs(){
	bubs.classList.add("clear")
	singapore.classList.remove("clear")
	sunset.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I really love bubble tea, I can basically have it everyday oops. Its probably not very good for you."
}

let bubs = document.querySelector("#bubs");
bubs.addEventListener("click", clickBubs);



function clickSunset(){
	sunset.classList.add("clear")
	singapore.classList.remove("clear")
	bubs.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I am also very obsessed with sunsets and sunrises :)"
}

let sunset = document.querySelector("#sunset");
sunset.addEventListener("click", clickSunset);













// $(document).ready(function() {

// 	var body = $("body"); 

// 	$("#button").click(function() { 
// 		body.toggleClass("play");
// 	});


// });


