
function Welcome(){
    let username = prompt("What is your name?");
    let message="Welcome " + username;
    document.getElementById('saywelcome').innerHTML = message;  

}
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
// lights()

function Pizza(){
    let topping = prompt("What is your favourite Pizza topping");
    let message= topping + " Pizza";
    document.getElementById('pizza').innerHTML = message;  
}
function Song(){
    let songtitle = prompt("What is your favourite song?");
    let message= songtitle;
    document.getElementById('favsong').innerHTML = message;  
}
function Movie(){
    let moviename = prompt("What is your favourite song?");
    let message= moviename + " -Is a good choice!";
    document.getElementById('favmovie').innerHTML = message;  
}
function Sport(){
    let sportname = prompt("What is your favourite song?");
    let message= sportname;
    document.getElementById('favsport').innerHTML = message;  
}
