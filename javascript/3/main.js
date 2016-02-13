// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

$(document).ready(function(){
	console.log("Loaded Bro");

// What is a prime number
// A number is greater than 1 is called a prime number, if it has only two factors, namely 1 and the number itself.	

	// prime(13195);
	prime(6);
});

function prime(number){

	var	primeNumberArray = new Array(number);

	for(var i=1; i<primeNumberArray.length; i++){
		if ( i % 2 == 1 ) {
			primeNumberArray[i] = i;

		};
	};
	
	console.log(primeNumberArray);
};