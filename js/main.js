window.addEventListener('DOMContentLoaded', () => {

	let allElems = document.querySelectorAll('.tabcontent-header');
	const arrow = document.querySelector('.tabcontent-header__image');

	allElems.forEach((elem) => {
		/*вещаем на каждый элемент обработчик на событие click*/
		elem.addEventListener('click', function () {
			/*у нажатого элемента получаем родителя*/
			let parentElem = this.parentNode;
			/*находим элемент с контентом*/
			let contentBlock = parentElem.querySelector('.tabcontent-text');
			let arrow = parentElem.querySelector('.tabcontent-header__image');
			/*аналогичная проверка на наличие класса active*/
			if (contentBlock.classList.contains("tabcontent-text__active")) {
				contentBlock.classList.remove('tabcontent-text__active');
			} else {
				contentBlock.classList.add('tabcontent-text__active');
			}

			if (arrow.classList.contains("tabcontent-header__image_active")) {
				arrow.classList.remove('tabcontent-header__image_active');
			} else {
				arrow.classList.add('tabcontent-header__image_active');
			}

		});
	});




	const btn = document.querySelector('.menu-btn'),
		navMenu = document.querySelector('.header-menu__nav'),
		navMenuActive = document.querySelector('.header-menu__active');
	btn.addEventListener('click', function () {
		navMenu.classList.toggle('header-menu__active');
		btn.classList.toggle('menu-btn-active');
	});


	const slides = document.querySelectorAll('.slaidservice-list__item'),
		vanSlider = document.querySelectorAll('.vantage-slider'),
		cardSlider = document.querySelectorAll('.card-slader__slaide'),
		racallSlider = document.querySelectorAll('.recall-slaider__slaide'),
		prev = document.querySelector('.slaidservice-prev'),
		next = document.querySelector('.slaidservice-next'),
		prev1 = document.querySelector('.slaidservice-prev1'),
		next1 = document.querySelector('.slaidservice-next1'),
		prev2 = document.querySelector('.slaidservice-prev2'),
		next2 = document.querySelector('.slaidservice-next2'),
		prev3 = document.querySelector('.slaidservice-prev3'),
		next3 = document.querySelector('.slaidservice-next3'),
		ordinal = document.querySelectorAll('.number-slide__ordina');

	let numberSlide = 1;

	showSlides(numberSlide);
	showSlides1(numberSlide);
	showSlides2(numberSlide);
	showSlides3(numberSlide);

	function showSlides(n) {
		if (n > slides.length) {
			numberSlide = 1;
		}
		if (n < 1) {
			numberSlide = slides.length;
		}

		slides.forEach(item => item.style.display = 'none');

		slides[numberSlide - 1].style.display = '';
	}

	function plusSlides(n) {
		showSlides(numberSlide += n);
	}

	prev.addEventListener('click', () => {
		plusSlides(-1);
	});
	next.addEventListener('click', () => {
		plusSlides(1);
	});

	// 1

	function showSlides1(n) {

		if (n > vanSlider.length) {
			numberSlide = 1;
		}
		if (n < 1) {
			numberSlide = vanSlider.length;
		}

		vanSlider.forEach(item => item.style.display = 'none');

		vanSlider[numberSlide - 1].style.display = '';
	}

	function plusSlides1(n) {
		showSlides1(numberSlide += n);
	}

	prev1.addEventListener('click', () => {
		plusSlides1(-1);
	});
	next1.addEventListener('click', () => {
		plusSlides1(1);
	});

	// 2

	function showSlides2(n) {

		if (n > cardSlider.length) {
			numberSlide = 1;
		}
		if (n < 1) {
			numberSlide = cardSlider.length;
		}

		cardSlider.forEach(item => item.style.display = 'none');

		cardSlider[numberSlide - 1].style.display = '';

	}

	function plusSlides2(n) {
		showSlides2(numberSlide += n);
	}

	prev2.addEventListener('click', () => {
		plusSlides2(-1);
	});
	next2.addEventListener('click', () => {
		plusSlides2(1);
	});


	// 3

	function showSlides3(n) {

		if (n > racallSlider.length) {
			numberSlide = 1;
		}
		if (n < 1) {
			numberSlide = racallSlider.length;
		}

		racallSlider.forEach(item => item.style.display = 'none');

		racallSlider[numberSlide - 1].style.display = '';

	}

	function plusSlides3(n) {
		showSlides3(numberSlide += n);
	}

	prev3.addEventListener('click', () => {
		plusSlides3(-1);
	});
	next3.addEventListener('click', () => {
		plusSlides3(1);
	});


	// комментарии

	// const movieDB = {
	// 	movies: []
	// };

	// const addForm = document.querySelector('.commet'),
	// 	addInput = addForm.querySelector('.commet-block__input'),
	// 	addInput2 = document.querySelector('.commet-block__input2'),
	// 	recall = document.querySelector('.recall-list');

	// addForm.addEventListener('submit', (event) => {
	// 	event.preventDefault();

	// 	const newCommet = addInput.value;
	// 	// const newCommet2 = addInput2.value;

	// 	movieDB.movies.push(newCommet);
	// 	// recall.movies.push(newCommet2);
	// 	createMovieList(movieDB.movies, recall);

	// 	event.target.reset();
	// });

	// function createMovieList(films, parent) {
	// 	// отчистка содержимого родителя
	// 	parent.innerHTML = "";
	// 	films.forEach((commet) => {
	// 		parent.innerHTML += `
	// 		<li class="recall-list__item recall-slaider__slaide">
	// 			<div class="recall-list__text">
	// 				<p class="recall-list__text_title">${commet}</p>
	// 			</div>
	// 		</li>
	// 	`;
	// 	});
	// }
	// createMovieList(movieDB.movies, recall);


	// let comments = [];
	// loadComments();

	// document.querySelector('.commet-button').onclick = function () {
	// 	event.preventDefault();

	// 	let commentName = document.querySelector('.commet-block__input');
	// 	let commentBody = document.querySelector('.commet-block__input2');


	// 	let comment = {
	// 		name: commentName.value,
	// 		body: commentBody.value
	// 	};

	// 	console.log(comment);

	// 	commentName.value = '';
	// 	commentBody.value = '';

	// 	comments.push(comment);

	// 	saveComments();
	// 	showComments();
	// };

	// function saveComments() {
	// 	localStorage.setItem('comments', JSON.stringify(comments));
	// }

	// function loadComments() {
	// 	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
	// 	localStorage.clear();

	// 	showComments();
	// }

	// function showComments() {
	// 	let commentField = document.querySelector('.recall-list');
	// 	let out = '';
	// 	comments.forEach(function (item) {
	// 		out += `
	// 		<li class="recall-list__item recall-slaider__slaide">
	// 			<div class="recall-list__text">
	// 				<p class="recall-list__text_title">${item.name}</p>
	// 				<p class="recall-list__text_subtitle">${item.body}</p>
	// 			</div>
	// 		</li>`;

	// out += `<p class="recall-list__text_title">${item.name}</p>`;
	// out += `<p class="recall-list__text_subtitle">${item.body}</p>`;
	// 	});
	// 	commentField.innerHTML = out;
	// }


	// let comments = [];
	// loadComments();

	// document.getElementById('comment-add').onclick = function () {

	// 	let commentName = document.getElementById('comment-name');
	// 	let commentBody = document.getElementById('comment-body');

	// 	let comment = {
	// 		name: commentName.value,
	// 		body: commentBody.value
	// 	};

	// 	commentName.value = '';
	// 	commentBody.value = '';

	// 	comments.push(comment);

	// 	saveComments();
	// 	showComments();
	// };

	// function saveComments() {
	// 	localStorage.setItem('comments', JSON.stringify(comments));
	// }

	// function loadComments() {
	// 	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
	// 	localStorage.clear();

	// 	showComments();
	// }

	// function showComments() {
	// 	let commentField = document.getElementById('comment-field');
	// 	let out = '';
	// 	comments.forEach(function (item) {
	// 		out += `<p class="recall-list__text_title">${item.name}</p>`;
	// 		out += `<p class="recall-list__text_subtitle">${item.body}</p>`;
	// 	});
	// 	commentField.innerHTML = out;
	// }





	// // 3) модальное окно

	// const modalTrigger = document.querySelectorAll('[data-modal]'),
	// 	modal = document.querySelector('.modal');

	// // функция для окрытия окна
	// function openModal() {
	// 	modal.classList.add('show');
	// 	modal.classList.remove('hide');
	// 	// modal.classList.toggle('show');
	// 	document.body.style.overflow = 'hidden';
	// 	// если пользователь сам открыл окно, то чтобы не сработал таймер открытия
	// 	clearInterval(modalTimerId);
	// }

	// // открытие окна по клику на кнопку
	// modalTrigger.forEach(btn => {
	// 	btn.addEventListener('click', openModal);
	// });

	// // зыкрыть окно по клику на крестик
	// function closeModal() {
	// 	modal.classList.add('hide');
	// 	modal.classList.remove('show');
	// 	// modal.classList.toggle('show');
	// 	document.body.style.overflow = '';
	// }



	// // закрытие окна по клику на поджложку
	// modal.addEventListener('click', (e) => {
	// 	if (e.target === modal || e.target.getAttribute('data-close') == '') {
	// 		closeModal();
	// 	}
	// });

	// // закрытие окна на клавишу Esc
	// document.addEventListener('keydown', (e) => {
	// 	if (e.code === "Escape" && modal.classList.contains('show')) {
	// 		closeModal();
	// 	}
	// });

});