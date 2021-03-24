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
		for (var x =0;x<1000; x++ ) 
        {
			if (x % 3 === 0) {
				sum += x;
			}
		}
	document.getElementById("sumthree").innerHTML=sum;
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
        document.getElementById("whilesumthree").innerHTML=sum1;
}

 //Reiterates integers fron 1-100 (multiples of 4 = FOUR , multiples of 10 = TEN, multiples of 4&10 = TenFour!)
//logs all output to console. The way this code runs similar to the for loop forsumofthrees().
function tenFour() {
    for (i = 1; i <= 100; i++) {
        if (i % 4 === 0 && i % 10 === 0) {
            console.log("TenFour!");
        }
        else if (i % 4 === 0) {
            console.log("FOUR");
        }
        else if (i % 10 === 0) {
            console.log("TEN");
        }
        else {
            console.log(i);
        }
    }
}

//Finds what century it is with a given year
function centuryFromYear() {
    var x = parseInt(prompt("Enter a year: "));
    if (x >= 0 && x <= 100) {
        output = 1;
    }
    if (x >= 101 && x <= 200) {
        output = 2;
    }
    if (x >= 201 && x <= 300) {
        output = 3;
    }
    if (x >= 301 && x <= 400) {
        output = 4;
    }
    if (x >= 401 && x <= 500) {
        output = 5;
    }
    if (x >= 501 && x <= 600) {
        output = 6;
    }
    if (x >= 601 && x <= 700) {
        output = 7;
    }
    if (x >= 701 && x <= 800) {
        output = 8;
    }
    if (x >= 801 && x <= 900) {
        output = 9;
    }
    if (x >= 901 && x <= 1000) {
        output = 10;
    }
    if (x >= 1001 && x <= 1100) {
        output = 11;
    }
    if (x >= 1101 && x <= 1200) {
        output = 12;
    }
    if (x >= 1201 && x <= 1300) {
        output = 13;
    }
    if (x >= 1301 && x <= 1400) {
        output = 14;
    }
    if (x >= 1401 && x <= 1500) {
        output = 15;
    }
    if (x >= 1501 && x <= 1600) {
        output = 16;
    }
    if (x >= 1601 && x <= 1700) {
        output = 17;
    }
    if (x >= 1701 && x <= 1800) {
        output = 18;
    }
    if (x >= 1801 && x <= 1900) {
        output = 19;
    }
    if (x >= 1901 && x <= 2000) {
        output = 20;
    }
    if (x >= 2001 && x <= 2100) {
        output = 21;
    }
document.getElementById("century").innerHTML = output;
} 

//Finds the third angle with two angles of a triangle
function thirdAngle() {
    var angle1 = parseInt(prompt("Enter Angle one: "));
    var angle2 = parseInt(prompt("Enter Angle two: "));
    var angletotal = 180 - angle1 - angle2;
    if (angletotal <= 180) {
       output = angletotal;
    }
    if (angle1 < 0) {
        output = "Invalid. Enter two angles of a triangle";
    }
    if (angle2 < 0) {
        output = "Invalid. Enter two angles of a triangle";
    }
    if (angletotal < 0) {
        output = "Invalid. Enter two angles of a triangle";
    }
document.getElementById("angles").innerHTML = output;
}
