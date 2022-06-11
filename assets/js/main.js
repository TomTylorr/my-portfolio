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
			if (listElement.classList.contains("tab-link__active")) {
				listElement.classList.remove("tab-link__active")
			}
			content[i].classList.add("display-none")
		}

		let currentDataAtr = tab.dataset.content;

		for (let i = 0; i < length; i++) {
			if (content[i].classList.contains(currentDataAtr)) {
				content[i].classList.remove("display-none");
			}
		}

		currentElement = e.target;
		currentElement.classList.add("tab-link__active");
	}
});

const myWorksVideos = document.querySelector('.my-works_videos');
const myWorksVideos1C = document.querySelector('.my-works_videos1C');
const myWorksDesign = document.querySelector('.my-works_design-items');
const myWorksVideoWrappper = document.querySelector('.my-works_video-wrappper');
const overlay = document.querySelector('.my-works_overlay');
const myWorksOverlayTitle = document.querySelector('.my-works_overlay-title');
const myWorksOverlayText = document.querySelector('.my-works_overlay-text');
const myWorksOverlayLink = document.querySelector('.my-works_overlay-link');

let videoCurrentID,
	videoCurrent;

myWorksVideos.addEventListener('mouseover', function (e) {
	if (e.target.id == "my-works_video") {
		videoCurrentID = e.target.offsetParent.id;
		videoCurrent = document.getElementById(videoCurrentID)
		mouseover(videoCurrent);
		myWorksOverlayLink.classList.remove("display-none");
	}
});

myWorksVideos.addEventListener('mouseleave', function (e) {
	overlay.classList.add("display-none");
});

myWorksVideos1C.addEventListener('mouseover', function (e) {
	if (e.target.id == "my-works_video") {
		videoCurrentID = e.target.offsetParent.id;
		videoCurrent = document.getElementById(videoCurrentID)
		mouseover(videoCurrent);
		myWorksOverlayLink.classList.add("display-none");
	}
});

myWorksVideos1C.addEventListener('mouseleave', function (e) {
	overlay.classList.add("display-none");
});


myWorksDesign.addEventListener('mouseover', function (e) {
	if (e.target.id == "my-works_design_img") {
		videoCurrentID = e.target.parentElement.id;
		videoCurrent = document.getElementById(videoCurrentID)
		mouseover(videoCurrent);
		myWorksOverlayLink.classList.add("display-none");
	}
});

myWorksDesign.addEventListener('mouseleave', function (e) {
	overlay.classList.add("display-none");
});


function mouseover(videoCurrent) {
	myWorksOverlayTitle.innerHTML = data[videoCurrentID][0];
	myWorksOverlayText.innerHTML = data[videoCurrentID][1];
	myWorksOverlayLink.href = data[videoCurrentID][2];
	videoCurrent.appendChild(overlay);
	overlay.classList.remove("display-none");
}

let data = {
	"video1": ['Учебный проект', "CSS, HTML, JS, FlexBox, Grid", "#"],
	"video2": ['Производство кухонных фасадов', "WordPress + WooCommerce", "https://fasad-mg.by"],
	"video3": ['Сайт был на Deal.by', "WordPress, Bootstrap4", "https://микрон.бел"],
	"video4": ['RS-School', "CSS, HTML, JS, FlexBox, Grid,<br> Смена языка и фона", "#"],
	"video5": ['Новое производство', "CSS, HTML, JS, FlexBox", "#"],
	"video6": ['Сайт на Украину', "WordPress + WooCommerce", "https://sklu.net"],
	"video1c_1": ['Внешняя обработка', "Читаю прайс  в CSV и XML формате, строю иерархию, создаю номенклатуру, создаю свойства для выгрузки на сайт, поднимаю свойства", "#"],
	"video1c_2": ['Регламентное задание', "Скачиваю архив, распаковываю, читаю XML и загружаю: количество, цены, фото в 1С для уже существующих товаров, создаю новые карточки, если их не было", "#"],
	"photo-desing1": ['Каталог', "Делал каталог с 0 на 32 страницы, вплоть до вывода в печать.", "вавав"],
	"photo-desing2": ['Коммерческое', "Разработал коммерческое на фирму, которая занимается кухонными фасадами", "вавав"],
	"photo-desing3": ['Прайс-лист', "Прайс-лит в Украину", "вавав"],
	"photo-desing4": ['Коммерческое', "Листовка или коммерческое в Польшу", "вавав"],
	"photo-desing5": ['Визитка', "Визка для брата Барбера", "вавав"],
	"photo-desing6": ['Визитка', "Компания ООО 'Албико-групп'", "вавав"],
	"photo-desing7": ['Стенд', "Стенд по охране труда на фирму", "вавав"],
	"photo-desing8": ['VK', "Пост в группу VK", "вавав"],
	"photo-desing9": ['Листовка', "На выставку в Украину", "вавав"],
	"photo-desing10": ['Email-рассылка', "Рассылка email через сервис Unisender", "вавав"],
	"photo-desing11": ['Логотип', "Логотип для интернет-магазина", "вавав"],
	"photo-desing12": ['VK', "Пост в VK", "вавав"],
	"photo-desing13": ['Печать на двери', "График работы на дверь фирмы", "вавав"],
	"photo-desing14": ['Логотип', "Логотип для производственной фирмы", "вавав"],
	"photo-desing15": ['Логотип', "Логотип для фирмы в Украину", "вавав"],
	"photo-desing16": ['Шапка в FaceBook', "Шапка для группы в FaceBook", "вавав"]
}


const modal = document.getElementById("myModal");
const mainBtn = document.getElementById("mainBtn");
const span = document.getElementsByClassName("close")[0];

mainBtn.onclick = function () {
	modal.style.display = "block";
}

span.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function (e) {
	if (e.target == modal) {
		modal.style.display = "none";
	}
}


mainBtn3.onclick = function () {
	modal.style.display = "block";
}




