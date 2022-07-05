window.addEventListener('DOMContentLoaded', () => {

	let allElems = document.querySelectorAll('.tabcontent-header');

	allElems.forEach((elem) => {
		/*вещаем на каждый элемент обработчик на событие click*/
		elem.addEventListener('click', function () {
			/*у нажатого элемента получаем родителя*/
			let parentElem = this.parentNode;
			/*находим элемент с контентом*/
			let contentBlock = parentElem.querySelector('.tabcontent-text');
			/*аналогичная проверка на наличие класса active*/
			if (contentBlock.classList.contains("tabcontent-text__active")) {
				contentBlock.classList.remove('tabcontent-text__active');
			} else {
				contentBlock.classList.add('tabcontent-text__active');
			}



		});
	});

});