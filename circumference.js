function calcCircumference(){
	let PI = Math.PI;
	var radius = parseFloat(document.getElementById("inputradius").value);
	// console.log(radius);

	if(radius > 0){
		let circumferenceValue = (2 * PI * radius);
		showOutput(circumferenceValue.toFixed(2));
	}
	else{
		alert("Radius cannot be negative");
	}
}

function showOutput(circumferenceValue){
	let output = `The circumference of a circle is ${circumferenceValue} unit.`;
	document.getElementById("displayCircumference").innerHTML = output;
}