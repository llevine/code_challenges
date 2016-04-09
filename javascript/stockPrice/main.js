// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

//   var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// // returns 6 (buying for $5 and selling for $11)

// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).


// stock market closes at 4:30pm

	console.log("Loaded Bro");
	var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
	// var stockPricesYesterday = [11, 10, 7, 5, 4, 2];
	// var stockPricesYesterday = [10, 25, 6, 8, 5, 8, 11, 9, 10, 7, 5, 8, 11, 9];
	difference = 0;
	
	getGreatestProfit(stockPricesYesterday);
	console.log(getGreatestProfit(stockPricesYesterday));

function getGreatestProfit(prices){
	greatestProfitFound = false;

	// while (i<prices.length){
		// console.log("original array prices is: " + prices);
		while (greatestProfitFound == false){
			var newArray = splitArray(prices);
			
			return isItGreatest(newArray);
			// console.log(isItGreatest(newArray));
		};
};

function splitArray(prices){
		var range = findRange(prices);

		var maxIndex = prices.indexOf(range["max"]);
		var minIndex = prices.indexOf(range["min"]);
		var arrayWithMax = prices.slice(0, maxIndex+1);
		var arrayWithMin = prices.slice(minIndex, prices.length);

		var arrayOfArray = [arrayWithMin, arrayWithMax];
		return arrayOfArray;
}

function findRange(prices){
		var max = Math.max(...prices);
		var min = Math.min(...prices);

		var maxMinHash = {max: max, min: min};
		return maxMinHash;
}


function isItGreatest(array){
	for (i = 0; i<array.length; i++){
		var range = findRange(array[i]);
		var newDifference = range["max"] - range["min"];
		
		if (newDifference > difference) {
			difference = newDifference;
		}
	}
	greatestProfitFound = true;
	return difference;
}
