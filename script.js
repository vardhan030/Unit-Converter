function convert() {

	const inputValue = document.getElementById("inputValue").value;
	const fromUnit = document.getElementById("fromUnit").value;
	const toUnit = document.getElementById("toUnit").value;

	// Convert the input value to meters
	let meters;

	switch (fromUnit) {
		case "cm":
			meters = inputValue / 100;
			break;
		case "m":
			meters = inputValue;
			break;
		case "km":
			meters = inputValue * 1000;
			break;
		case "in":
			meters = inputValue * 0.0254;
			break;
		case "ft":
			meters = inputValue * 0.3048;
			break;
		case "yd":
			meters = inputValue * 0.9144;
			break;
		case "mi":
			meters = inputValue * 1609.344;
			break;
	}

	// Convert meters to the selected unit
	let result;

	switch (toUnit) {
		case "cm":
			result = meters * 100;
			break;
		case "m":
			result = meters;
			break;
		case "km":
			result = meters / 1000;
			break;
		case "in":
			result = meters / 0.0254;
			break;
		case "ft":
			result = meters / 0.3048;
			break;
		case "yd":
			result = meters / 0.9144;
			break;
		case "mi":
			result = meters / 1609.344;
			break;
	}

	document.getElementById("result").innerHTML = `${inputValue} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}