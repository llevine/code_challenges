// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 3^2 + 4^2 = 5^2  (9 + 16 = 25)

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
	var pythagArray = new Array();
	var tripletFound = false;
	var product = 0;

// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
	console.log('Dom Has Loaded');
	pythag();
	alert(product);

});

function pythag(){
	var c_list = new Array();

	// populates the c_list array with all possible c^2 values
	for (var i = 0; i <= 1000; i++) {
		var square = Math.pow(i, 2);
		c_list.push(square);
	}

	// keeps running the findPythags function until it finds the correct triplet
	while (tripletFound == false){
		findPythags(c_list);
	};
};

function findPythags(array, highest){
	var highest = Math.max(...array);
	array.pop();
	
	// going through each element of c_list 
	for (var i = 0; i<array.length; i++){
		var lowest = array[i];
		var difference = (highest - lowest);
		var index = array.indexOf(difference);

		if (index != -1) {
			checkForSolution(lowest, difference, highest);
			if (tripletFound){
				break;
			}			
		}
	}
};

function checkForSolution(lowest, difference, highest){
	var a = Math.sqrt(lowest);
	var b = Math.sqrt(difference);
	var c = Math.sqrt(highest);

	if ( a + b + c == 1000){
		console.log("triplet has been found a: " + a + " b: " + b + " c: " + c);
		tripletFound = true;
		product = a * b * c;
		console.log(product);
		return product;
	}
}