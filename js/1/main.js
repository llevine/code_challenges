$(document).ready(function(){
	console.log("Loaded Bro");
	// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
	// Find the sum of all the multiples of 3 or 5 below 1000.

	sum(10);
	sum(1000);
})



function sum(cap) {
	// find all multiples of 3 and 5 below a number
	// check all numbers between 1 and "cap"
	// something is a multiple of a number when there is no remainder when u divide it by
	var range = new Array(cap);
	var multiples = new Array;
	var total = 0;

	for(var i=1; i<range.length; i++){
		range[i]=i;
		if (range[i] % 3  === 0 || range[i] % 5 === 0) {
			total += range[i];
			// console.log("range[i] = " + range[i]);
			// console.log("total in loop is = " + total);
		};
	};
	console.log(total);
	// total = 233168
	return total;
};