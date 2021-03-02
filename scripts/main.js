
function Welcome(){
    let username = prompt("What is your name?");
    let message="Welcome " + username;
    document.getElementById('saywelcome').innerHTML = message;  

}