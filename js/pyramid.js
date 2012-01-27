var character;
	while (!character){
	character = prompt("Input any letter to build a pyramid of it:");
}

var writecharacterMultipleTimes = function () {
	for (var A = 0; A < 10; A++) {
		for (var B = 0; B <= A; B++) { 
			document.write(character);
		}
		document.write('<br>');
	}
};

writecharacterMultipleTimes();