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
		let speed = Math.floor(Math.random() * 600) + 50;
		setTimeout(typeText2, speed);
	}
}

typeText2();

const designContents = document.querySelector('.tabs');
const content = document.querySelector('.my-works_videos-wrapper').children;

let currentElement;
designContents.addEventListener('click', function (e) {

	let list = designContents.children;
	let length = list.length;

	if (e.target.classList.contains('tab-link')) {

		let tab = e.target;

		for (let i = 0; i < length; i++) {
			let listElement = list[i].firstChild;
			if (listElement.classList.contains("tab-link__active")){
				listElement.classList.remove("tab-link__active")
			}
			content[i].classList.add("display-none")	
		}

		let currentDataAtr = tab.dataset.content;

		for (let i = 0; i < length; i++) {
			if (content[i].classList.contains(currentDataAtr)){
				content[i].classList.remove("display-none");
			}	
		}

		currentElement = e.target;
		currentElement.classList.add("tab-link__active");
	}
});
	
