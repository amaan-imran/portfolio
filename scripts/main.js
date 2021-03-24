// Greetings function
function Welcome(){
    let username = prompt("What is your name?");
    let message="Welcome " + username;
    document.getElementById('saywelcome').innerHTML = message;  
}
// Lights
function lights(){

     let color= prompt("This website will ask you question, are you ok with that?");
    if (color === "Yes") {
        console.log("STOP!");
    }
    else if (color=== "yes"){
        console.log("GO!");
    }
    else if (color ==="maybe"){
        console.log("Stop if it is safe to do so");
    }
    else {
        console.log("invalid input");
    }
}
// Pizza Question
function Pizza(){
    let topping = prompt("What is your favourite Pizza topping");
    let message= topping + " Pizza";
    document.getElementById('pizza').innerHTML = message;  
}
// Song question
function Song(){
    let songtitle = prompt("What is your favourite song?");
    let message= songtitle;
    document.getElementById('favsong').innerHTML = message;  
}
// Movie Question
function Movie(){
    let moviename = prompt("What is your favourite song?");
    let message= moviename + " -Is a good choice!";
    document.getElementById('favmovie').innerHTML = message;  
}
// Sport Question
function Sport(){
    let sportname = prompt("What is your favourite song?");
    let message= sportname;
    document.getElementById('favsport').innerHTML = message;  
}

        
function function1(){
    alert("Assignment 1 coming soon");
}
function function2() {
    alert("Assignment 2 coming soon");
}
function function3(){
    alert("Assignment 3 coming soon");
}
function function4(){
    alert("Assignment 4 coming soon");
}
function function5(){
    alert("Assignment 5 coming soon");
}
function function6(){
    alert("Assignment 6 coming soon");
} 
function function7(){
    alert("Assignment 7 coming soon");
}
function function8(){
    alert("Assignment 8 coming soon");
}
function function9(){
    alert("Assignment 9 coming soon");
}
function function10(){
    alert("Assignment 10 coming soon");
}

// Create a JavaScript function, largerNumber() 
// that prompts the user for two integers and uses conditional statement(s) to alert the user to the larger of the two numbers. 
// For example: largerNumber(3, 18) returns 18
function largerNumber() {
	alert("Enter two numbers in the following prompt")
		var number1 = parseInt(prompt("Enter the first number"));
		var number2 = parseInt(prompt("Enter the second number"));
			if (number1 > number2) {
				alert("The larger number of the two is: " + number1);
			} else if (number2 > number1) {
				alert("The larger number of the two is: " + number2);
			}
	}
// Create a JavaScript function, signOfProduct(), 
// that prompts the user for 3 integers and uses conditional statement(s) to output the sign of product of three numbers to the user in an alert. 
// For example: signOfProduct(3, -7, 2) returns The sign is - 
function signOfProduct() {
	alert("Enter three numbers in the following prompt")
		var n1 = parseInt(prompt("Enter the first number", "0"));
		var n2 = parseInt(prompt("Enter the second number", "0"));
		var n3 = parseInt(prompt("Enter the third number", "0"));
		var product = n1 * n2 * n3;
			if (product > 0) {
				alert("The sign of the product is: positive: " + product);
			} else if (product < 0) {
				alert("The larger number of the two is: negative: " + product);
			}
}
// Create a JavaScript function, threeNumberSort(), 
// that prompts the user for 3 numbers and uses conditional statement(s) to sort the numbers from least to greatest. 
// Display an alert box to show the result. For example: threeNumberSort(0, -1, 4)  returns (4, 0, -1)
function threeNumberSort() {
	alert("Enter three numbers in the following prompt")
		var sort1 = parseInt(prompt("Enter the first number", "0"));
		var sort2 = parseInt(prompt("Enter the second number", "0"));
		var sort3 = parseInt(prompt("Enter the third number", "0"));
			if (sort1 < sort2 && sort2 < sort3) {
				alert(sort1 + ", " + sort2 + ", " + sort3);
			} else if (sort1 < sort3 && sort3 < sort2) {
				alert(sort1 + ", " + sort3 + ", " + sort2);
			} else if (sort2 < sort1 && sort1 < sort3) {
				alert(sort2 + ", " + sort1 + ", " + sort3);
			} else if (sort2 < sort3 && sort3 < sort1) {
				alert(sort2 + ", " + sort3 + ", " + sort1);
			} else if (sort3 < sort2 && sort2 < sort1) {
				alert(sort3 + ", " + sort2 + ", " + sort1);
			} else if (sort3 < sort1 && sort1 < sort2) {
				alert(sort3 + ", " + sort1 + ", " + sort2);
			}
}
// 8 2 4
// Create a JavaScript function, forSumThrees(), that uses a for loop to sum the multiples of 3 under 1000. Log the result to the console
function forSumThrees() {
	var sum = 0;
		for (let i = 0; i < 1000; i++) {
			if (i % 3 === 0) {
				sum += i;
			}
		}
	console.log(sum);
}
// Create a JavaScript function, whileSumThrees(), that uses a while loop to sum the multiples of 3 under 1000. Log the result to the console
function whileSumThrees() {
	var sum1 = 0;
	let x = 0;
		while (x < 1000) {
			if (x % 3 === 0) {
				sum1 += x;
			}
		x++;
		}
	console.log(sum1)
}

// Create a JavaScript function, tenFour() that iterates (counts through) the integers from 1 to 100. 
// For multiples of 4 print the word Four instead of the number and for the multiples of 10 print Ten. 
// For numbers which are multiples of both four and ten print TenFour!.
function tenFour() {
	for (var i = 1; i <= 100; i++) {
	 		if (i % 4 === 0 && i % 10 === 0) {
	 				console.log(i + "TenFour!");
	 		}	else if (i % 4 === 0) {
	 				console.log(i + "Four");
	 		}	else if (i % 10 === 0) {
	 				console.log(i + "Ten");
	 		}	else {
	 				console.log(i);
	 		}
	 } 
}

