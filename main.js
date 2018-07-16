// window.onload = function() {
// 	var cartas = document.querySelector("#carta-jogo-da-memoria1")
// 	cartas.addEventListener("click", clickCard)

// 	function clickCard() {
// 		this.classList.add("virado")

// 	}
// }


window.onload = function() {
	var cartas = document.querySelectorAll(".carta-jogo-da-memoria");
	var numberClicked = 0;
	var clicked = null;

	for (var i=0; i<cartas.length; i++) {
		cartas[i].addEventListener("click", clickCard)
	}


	function clickCard() {
		if(this === clicked) {
			return;
		}

		numberClicked++;

		if (numberClicked>2) {

			numberClicked=1;

			for (var i=0; i<cartas.length; i++) {
				if(cartas[i].classList.contains('success') === false) {
					cartas[i].classList.remove("virado");
				}
			}
		}

		this.classList.add("virado");

		if(clicked !== null && this.className === clicked.className) {
			this.classList.add('success');
			clicked.classList.add('success');
		}

		clicked = this;
	}
}