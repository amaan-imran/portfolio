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
<script>
        //alerts//
function function1(){
    alert("Assignment 1 coming soon")
}
function function2(){
    alert("Assignment 2 coming soon")
}
function function3(){
    alert("Assignment 3 coming soon")
}
function function4(){
    alert("Assignment 4 coming soon")
}
function function5(){
    alert("Assignment 5 coming soon")
}
function function6(){
    alert("Assignment 6 coming soon")
}
function function7(){
    alert("Assignment 7 coming soon")
}
function function8(){
    alert("Assignment 8 coming soon")
}
function function9(){
    alert("Assignment 9 coming soon")
}
function function10(){
    alert("Assignment 10 coming soon")
}
</script>