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

//Button for Function 1 (larger number)//
//enter 2 numbers which are assigned a variable, larger one gets outputed//
function largernumber() {
    let largnum1 = parseInt(prompt("Insert a NUMBER"));
    let largnum2 = parseInt(prompt("Insert a another NUMBER"));

    if (largnum1>largnum2) {
      document.getElementById("button1").innerHTML= largnum1 + " is bigger";
    }
    else if (largnum1 < largnum2){
      document.getElementById("button1").innerHTML= largnum2 + " is bigger";
    }
    else if (largnum1 === largnum2){
      document.getElementById("button1").innerHTML="Nice try, Try again";
    } 
    else{
      document.getElementById("button1").innerHTML="Make sure its numbers your putting in";
    } 
}

//Button for Function 2 (sign of product)//
//enter 3 numbers, progarm multiplies the numbers and gives sign of the product (why testing is it is elow or above 0)//
  function signOfProduct() {
    let signnum1 = parseInt(prompt("Insert a NUMBER"));
    let signnum2 = parseInt(prompt("Insert a another NUMBER"));
    let signnum3 = parseInt(prompt("Insert one more NUMBER"));

    if (signnum1*signnum2*signnum3 < 0){
      document.getElementById("button2").innerHTML = " The product will be negative (-)";
    }
    else if (signnum1*signnum2*signnum3 > 0){
      document.getElementById("button2").innerHTML = " The product will be positive (+)";
    }
    else if (signnum1*signnum2*signnum3 == 0){
      document.getElementById("button2").innerHTML = " The product is 0 --- neither positive nor negative";
    }  
    else{
        document.getElementById("button2").innerHTML="Make sure you are putting in numbers";
    }
  } 

//Button for Function 3 (number sort)//
//enter 3 numbers and sort from low to high. each number is assigned a varible, then one of the 6 possiblities is outputed//
  function threeNumberSort() {
    let sortnum1 = parseInt(prompt("Insert a NUMBER"));
    let sortnum2 = parseInt(prompt("Insert a another NUMBER"));
    let sortnum3 = parseInt(prompt("Insert the third NUMBER"));
    

    if (sortnum1 <= sortnum2 && sortnum2 <= sortnum3){
      document.getElementById("button3").innerHTML = sortnum1+ "<" + sortnum2 + "<" + sortnum3;
    }
    else if (sortnum1 <= sortnum3 && sortnum3 <= sortnum2){
      document.getElementById("button3").innerHTML = sortnum1+ "<" + sortnum3 + "<" + sortnum2;
    }
    else if (sortnum2 <= sortnum1 && sortnum1 <= sortnum3){
      document.getElementById("button3").innerHTML = sortnum2+ "<" + sortnum1 + "<" + sortnum3;
    }
    else if (sortnum2<=sortnum3&&sortnum3<=sortnum1){
      document.getElementById("button3").innerHTML = sortnum2+ "<" + sortnum3 + "<" + sortnum1;
    }
    else if (sortnum3<=sortnum1&&sortnum1<=sortnum2){
      document.getElementById("button3").innerHTML = sortnum3+ "<" + sortnum1 + "<" + sortnum2;
    }
    else if (sortnum3<=sortnum2&&sortnum2<=sortnum1){
      document.getElementById("button3").innerHTML = sortnum3+ "<" + sortnum2 + "<" + sortnum1;
    }
    else{
      document.getElementById("button3").innerHTML= "Enter a number instead "
    }
  } 

  
//Button for Function 4 (forSumThrees)//
//using for loops setting conditions for and the loop. and preform only if i is a multiple of 3 with 0 remainder. The output is the sum of all multiples of 3's up to 1000 //
  function forSumThrees() {
    let runningTotal= 0;
    let sumOfThrees=0;
    for (let i=1; i<=1000; i++){
      if(i % 3 === 0){
        sumOfThrees = runningTotal +=i;
      }
    }
    document.getElementById("button4").innerHTML= sumOfThrees;
  }

  
//Button for Function 5 (whileSumThrees)//
////using while loops setting conditions for and the loop. and preform only if i is a multiple of 3 with 0 remainder. The output is the sum of all multiples of 3's up to 1000//
  function whileSumThrees() {
  let runningtotal= 0;
  let i = 0;
    while(i<1000){
      i++
      if(i%3===0){
        document.getElementById("button5").innerHTML = runningtotal += i;
      }
    }  
  }

//Button for Function 6 (tenFour)//  
//finding the multiples if 4,10 and both in console using forloops. outputs onto console.log//
  function tenFour() {
    let forloop = 0
    for (let i=1; i<=100; i++){
      if (i%4===0 && i%10===0){
        console.log ("TenFour!");
      }
      else if (i%10===0){
        console.log ("Ten");
      }
      else if (i%4===0){
        console.log ("Four");
      }
      else{
        console.log (i);
      }
    }
  }

  
//Button for Function 7 (centuryFromYear)//
//rounding up the the nearest 100 to find the century the input year is in by using math.ceil//
  function  centuryFromYear() {
    let yearnum1 = parseInt(prompt("Enter the year please: "))
    if (yearnum1>0){
      // math.ceil rounds the number up to the nearest 100 //
      document.getElementById("button7").innerHTML= "The year you have entered is in the " +  Math.ceil (yearnum1/100) +"th"+ " century"
    }
    else{
      document.getElementById("button7").innerHTML= "Make sure you have entered a number "
    }
  }


//Button for Function 8 (thirdAngle)//
//assign provided angle varibles, subtract from 180 (total of all angles in triagle) to get last angle//
  function thirdAngle() {
    let angnum1 = parseInt(prompt( "Enter the first angle°"))
    let angnum2 =  parseInt(prompt( "Enter the second angle°"))
    let angnum3 = 180-(angnum1+angnum2)
    if (angnum3>0){
      document.getElementById("button8").innerHTML= "The third angle is " + angnum3+ "°"
    }
    else if (num3<=0){
      document.getElementById("button8").innerHTML= "Enter two angles of a triangle please"
    }
    else{
      document.getElementById("button8").innerHTML= "Make sure you entered a number"
    }
  } 


//Button for Function 9//
  function function9() {
    alert('Assignment 9 coming with a bang!')
  }
//Button for Function 10//
function function10() {
    alert('Assignment 10 coming with a bang!')
  }

//Function for encryption assignment 
function encryption(){
  //Prompts the user for a plaintext message and outputs an encrypted version of the message that the user typed in
  
  // Created prompt for the user and defined the variables 
  let plainText = prompt ("Please enter a message you wish to encrypt: ");
  let cipherText = "";
  let firstLetter = "";
  let wordList = plainText.split(" "); 

  wordList.reverse();//Reverses the order of letters and words in wordList

  //For-loop for each word in the wordList 
  for(let i = 0; i < wordList.length; i= i+1){

     firstLetter = wordList[i][0]; //Save first letter of the word
     cipherText += (wordList[i]).slice(1); //Add the word to the cipherText string but with the first letter sliced off
     cipherText += firstLetter + "?? "; //Add the first letter and "??" to the ending of the word
     
  }

  //Replaces vowels in the cipherText string to its specified number and outputs the result onto the button in the page
  document.getElementById("encrypt1").innerHTML = cipherText.replace(/a/g, "1").replace(/e/g, "2").replace(/i/g, "3").replace(/o/g, "4").replace(/u/g, "5");
    
}

//Function for decryption assignment 
function decryption(){
  //Prompts the user for the encrypted message and outputs the decrypted version of the message that the user typed in

  // Created prompt for the user and defined the variables typed
  let cipherText = prompt("Please enter the message you wish to decrypt: ");
  let plainText  = "";
  let lastLetter = "";
  let cipherList = cipherText.split(" "); 


  cipherList.reverse();//Reverses the order of letters and words in cipherList


  //For-loop for each word in the cipherList
  for(let i = 0; i < cipherList.length; i= i+1){

     const thirdBack = cipherList[i].length -3; //Set constant for the third letter from the end of each word on the cipherList
     lastLetter = cipherList[i][thirdBack]; //Saves the third letter from the end of each word

     //Adds lastLetter to the front of the word, then adds the word to the plainText string with the last 3 letter/symbols sliced off, followed by a space
     plainText += lastLetter + (cipherList[i]).slice(0,-3) + " "; 

  }

  //Replaces numbers in the plainText string to its specified vowel and outputs the result onto the button
  document.getElementById("decrypt1").innerHTML = plainText.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u");

}

