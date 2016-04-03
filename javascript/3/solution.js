// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// ------------------------------

$(document).ready(function(){
	console.log("Loaded Bro");

// What is a prime number
// A number is greater than 1 is called a prime number, if it has only two factors, namely 1 and the number itself.	

	// largestPrimeFactor(48);
	console.log(highestPrime(13195));
	// factors(48);
});


var isPrime = function(num){
	for(var i = 2; i < num - 1; i++){
		if(num % i == 0){
			return false
		}
	}
	return true
}

var highestPrime = function(num){
	var highest = 0;
	for(var i = 0; i <= num; i++){
		console.log(i);
		if(num % i === 0 && isPrime(i)){
			highest = i;
		}
	}
	return highest
}


// function factors(num){
// 	console.log("got here");

// 	var factorArray = new Array;

// 	for (var i=num; i>1; i--){
// 		if (num % i == 0 && i % 2 != 0){
// 			factorArray.push(i);
// 		};
// 	};
// 	for (var i = factorArray.length; i>1; i--){
// 		if (factorArray[i] % i != 0){
// 			console.log("this is " + factorArray[i] % i == 0);
// 		};
// 	};
// ///////////////////////////

	// var i=num;
	// var factorArray = new Array;

	// while (i>1){
	// 	// if it's odd and it has no factors then it is a prime
	// 	if (num % i == 0 && i % 2 != 0){
	// 		factorArray.push(i);
	// 		i--;
	// 	}
	// 	else {
	// 		i--;
	// 	}	
	// };
	// document.write(factorArray);
// };

// ///////////////////////////////////////



// function largestPrimeFactor(num){
// 	document.write("starting number is: " + num + "<br>");
// 	document.write("////////////////////////////////////////////" + "<br>");
	

// 	var factors = new Array;

// 	for(var i=num; i>1; i--){
// 		if(num % i == 0 && i % 2 != 0 && prime(i)){
// 			factors.push(i);
// 			document.write("a factor of the number is: " + i + "<br>");
// 		};
// 	};

// 	document.write("a factor of the number is: " + factors + "<br>");
// 	document.write("////////////////////////////////////////////" + "<br>");
// 	document.write("////////////////////////////////////////////" + "<br>");

// };



// function prime(num){
// 	console.log(num);
// 	var primeArray = new Array;

// 	for(var i=num; i>1; i--){
// 		if (num % i == 0 && i % 2 != 0){
// 			console.log("got to the prime test true option");
// 			primeArray.push(i);
// 			console.log("prime array pushed is: " + i);
// 		}
// 		else {
// 			console.log("got to the prime test false option");
// 			return false;
// 		}
// 	}
// // this function returns true or false if the number is prime

// };