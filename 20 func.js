
function isEven(x) {
	if (typeof x !== "number"){
			return "This is not a number! Try again!";
		}
//	else if (x % 2 === 0) {
//			return true;
//		}
//		return false;
//SHORTER VERSION
	return x % 2 === 0
}

function factorial(x) {
	if (typeof x !== "number"){
			return "This is not a number! Try again!";
		}
//	else if (x === 0 || x === 1){
//		return 1;
//	}
//	for(var i = x; --i;){
//			x *= i;
//	}
//	return x;
//ALTERNATE VERSION
//define result variable
	var result = 1;
//calculate and store in result
	for (var i = 2; i <= x; i++) {
		//result = result * 1;
		result *= i
	}
//return result variable
	return result;
}

function kebabToSnake(str) {
//replace all '-' with "_"
	var str2;
//	for (var i = str.length - 1; i >= 0; i--) {
//		if(str[i] === "-"){
//			str2 = str.replace(/-/g,"_");
//		}
//	}
//return str
//	return str2;
//ALTERNATE VERSION
//replace all '-' with "_"
str2 = str.replace(/-/g,"_");
//return str
return str2
}