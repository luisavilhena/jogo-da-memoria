// window.onload = function() {
// 	var carta1 = document.querySelector("#carta-jogo-da-memoria1")
// 	carta1.addEventListener("click", clickCard)

// 	function clickCard() {
// 		this.classList.add("virado")

// 	}
// }


window.onload = function() {
	var carta1 = document.querySelectorAll(".carta-jogo-da-memoria");
	var numberClicked = 0;
	var clicked = null;

	for (var i=0; i<carta1.length; i++) {
		carta1[i].addEventListener("click", clickCard)
	}


	function clickCard() {
		if(this === clicked) {
			return;
		} else {
			clicked = this;
		}

		this.classList.add("virado");

		numberClicked++;

		if (numberClicked>2) {

			numberClicked=1;

			for (var i=0; i<carta1.length; i++) {

				if(carta1[i] !== this) {
					carta1[i].classList.remove("virado");
				}

			}
		}

		console.log(numberClicked)
	}
}