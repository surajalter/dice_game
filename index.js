function roll() {
	var number1 = Math.floor(Math.random() * 6) + 1;
	var number2 = Math.floor(Math.random() * 6) + 1;
	document
		.querySelectorAll(".dice")[0]
		.setAttribute("src", "images/dice" + number1 + ".png");
	document
		.querySelectorAll(".dice")[1]
		.setAttribute("src", "images/dice" + number2 + ".png");
	if (number1 > number2) {
		document.querySelector(".heading").innerHTML = "🥇Player 1 Wins!";
	} else if (number1 < number2) {
		document.querySelector(".heading").innerHTML = "Player 2 Wins!🥇";
	} else {
		document.querySelector(".heading").innerHTML = "Its a draw!";
	}
}

document.querySelector("input").addEventListener("click", function () {
	roll();
});
