document.addEventListener("DOMContentLoaded", function () {
	let letter2 = 0;
	const text = "Привет, меня зовут";
	function typeText() {
		if (letter2 < text.length) {
			document.getElementById("header_about-title-js").innerHTML += text.charAt(letter2);
			letter2++;
			let speed = Math.floor(Math.random() * 150) + 50;
			setTimeout(typeText, speed);
		}
	}
	typeText();
});



let letter = 0;
const name2 = "Дмитрий!";
function typeText2() {
	if (letter < name2.length) {
		document.getElementById("header_about-title__underline-js").innerHTML += name2.charAt(letter);
		letter++;
		let speed = Math.floor(Math.random() * 1000) + 50;
		setTimeout(typeText2, speed);
	}
}

typeText2();

