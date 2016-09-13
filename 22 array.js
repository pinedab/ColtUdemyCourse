var test1 = ["a", "b", "c", "d"];
var test2 = [0, 8, 2, 4, 1, 9, 9, 6];
var test3 = ["what", "the", 5] 
var test4 = ["Two", "Birds","One", "Stone"];
var test5 = [1,1,1,1];
var test6 = ["bat", "bat", "bat"];
var test7 = [0, 2, 4, 6]

console.log("Create a function that returns an array in reverse order, line by line");
function printReverse(arr) {
		var newArr = [];
		for (var i = arr.length - 1; i >= 0; i--) {
			console.log(arr[i]);
			newArr.push(arr[i]);
		}
		return	newArr;}

console.log("Create a function that checks if all elements are in an array are identical");
function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false
		}
	}
	return true}

console.log("Create a function that adds all numbers in an array together");
function sumArray(str) {
	var sum = 0;
	for (var i = 0; i < str.length; i++) {
			sum += str[i];
		}
	return sum;
//	var result = 0
//	arr.forEach(function(number){
//		result += number;
//	});
// return result
}

console.log("Create a function that checks numbers in an array and returns the largest number");
function max(arr) {
	var patientX = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > patientX) {
			patientX = arr[i];
		}
	}
	return patientX
}