window.onload = function() {
	var carta1 = document.querySelector("#carta-jogo-da-memoria1")
	carta1.addEventListener("click", clickCard)

	function clickCard() {
		this.classList.add("virado")

	}
}
