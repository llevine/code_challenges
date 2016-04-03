// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// ------------------------------

$(document).ready(function(){
	console.log("Loaded Bro");

// What is a prime number
// A number is greater than 1 is called a prime number, if it has only two factors, namely 1 and the number itself.	

	// largestPrimeFactor(48);
	document.write("the soluction is: " + highestPrime(13195));
	// factors(48);
});



// find lowest divisible
// divide the main number by the lowest divisible. to get a high divisible
// see if that high divisible 

var isPrime = function(lowest, highest){
	document.write("highest in if prime is: " + highest + "<br>" + "lowest in if prime is: " + lowest + "<br>"); 
	
	var x = 2;
	while (x < highest){
		if (highest % x == 0){
			x++;
		}
		else {
			return true;
		}
	};
};

function highestPrime(num){
	var i = 0;

	while (i < num){
		console.log("i in while loop is: " + i);

		// i is the low prime therefor highest prime would be num/i
		// checking to see if i is a factor of the main number
		var highest = num/i;
		if (num % i === 0 && isPrime(i, highest)){
			return i;
		}
		else {
			i++;
		}
	};

};

	// 	if (num % i == 0){
	// 		var smallestPrimeHldr = i;
	// 		var largestPrimeHldr = num/i;
	// 		if (isPrime(largestPrimeHldr)){
	// 			return largestPrimeHldr;
	// 		}
	// 		console.log("small is: " + smallestPrimeHldr);
	// 		console.log("large is: " + largestPrimeHldr);
	// 		// highest = i;
	// 		// return highest;
	// 	};
	// };