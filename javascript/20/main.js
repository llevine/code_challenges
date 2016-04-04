
// Factorial digit sum

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

var totalSum = 1;

document.addEventListener('DOMContentLoaded', function () {
	console.log("Dom has laoded");

	// findSum(10);
	findSum(100);

	alert(totalSum);
});

function findSum(n){
	while (n > 0){
		totalSum *= n;
		n--;
	};

	var sumString = totalSum.toString().split("e").shift().toString();
	var sumArray = sumString.replace(".", "").split("");
	totalSum = 0;

	for (var i = 0; i<sumArray.length; i++){
		totalSum += parseInt(sumArray[i]);
	};
	return totalSum;
};

