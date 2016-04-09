// 75
// 95 64
// 17 47 82
// 18 35 87 10
// 20 04 82 47 65
// 19 01 23 75 03 34
// 88 02 77 73 07 63 67
// 99 65 04 28 06 16 70 92
// 41 41 26 56 83 40 80 70 33
// 41 48 72 33 47 32 37 16 94 29
// 53 71 44 65 25 43 91 52 97 51 14
// 70 11 33 28 77 73 17 78 39 68 17 57
// 91 71 52 38 17 14 91 43 58 50 27 29 48
// 63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

// 3
// 7 4
// 2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:


document.addEventListener('DOMContentLoaded', function () {
	console.log("Dom has laoded");

	var pyramid = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";

	findHighestSum(pyramid);

});

function findHighestSum(pyramidString){
	var structuredPyramidArray = buildPyramid(pyramidString);


	var highestArray = structuredPyramidArray.map(logArrayElements);


};

function buildPyramid(pyramidString){
	var brokenArray = pyramidString.split(" ");
	var pyramidArray = new Array;
	// console.log(brokenArray);
	var z = 0;
	var rowCount = 0;

	for (var i=0; z<brokenArray.length; i++){
		var x = i+1;
		var row = new Array;

		while (x>0){
			row.push(brokenArray[z]);
			z++;
			x--;
		};
			rowCount++;
			pyramidArray.push(row);
	};
	return(pyramidArray);
};

function logArrayElements(row, indexOfRow, array) {
	// gives you the top and bottom arrays
	var base = array[array.length - 1];
	var top = array[0];
	var baseHighestIndex = base.indexOf(getMaxOfArray(base).toString());

	var tempArray = [row[baseHighestIndex-1], row[baseHighestIndex], row[baseHighestIndex+1]];

	

	console.log(baseHighestIndex-1);
	console.log("index of row is: " + indexOfRow + " temp array is: " + tempArray);
	console.log("////////////////////////////////");
	
};

function getMaxOfArray(tempArray) {
	return Math.max.apply(null, tempArray);
};



////////////////////OLD CODE

// function logArrayElements(row, indexOfRow, array) {
// 	var possibleNums = new Array;
	
// 	// gets the max value of the row
// 	var max = getMaxOfArray(row);

// 	// save the index of the max value to an array!
// 	possibleNums.push(row.indexOf(max));

// 	// WHAT IF I COUNT THE NUMBER OF ROWS IN THE ARRAY array.length then i find the highest numbers

// 	// check to see if indexofMAX is 1 indices away from the last number in the array possibleNums. FUCK but a different route could still be greater. have to eventually check to see if it's greater than the highest number found thus far in array.
// 	// var previousIndex = row.indexOf(max);
	

// 	// for (var i=0; i<3; i++){
// 	// 	var x = previousIndex + i;
// 	// 	possibleNums.push(x);
// 	// };

// 	console.log("////////////////////////////////");
// 	console.log("PreviousIndex: " + previousIndex);
// 	console.log("max is: " + max);
// 	console.log("row contains: " + row);
// 	// console.log(indexOfRow + "th row");
// };

