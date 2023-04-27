"use strict";

console.log("the index.js has begun executing...");


// Here I declare all of the variables that I will need
// to hold element objects from the HTML page.
// This will let me interact with them.

// greeting is a DIV tag, and I can change it's .innerHTML
const greeting = document.getElementById("greeting");

// nameTextbox is an INPUT tag of type textbox, and it 
// has a .value property with it's value.
const nameTextbox = document.getElementById("nameTextbox");

// pressMeButton is a button element, it will raise an 
// "onclicked" event that I want to respond to.
const pressMeButton = document.getElementById("pressMeButton");


function init(){
    console.log ("hello from inside the init function!")
    // code inside the init function here will run
    // when the page is finished initializing.

    // it does so because of the window.onload line below...

    pressMeButton.onclick = onPressMeButtonClicked;

}


// This line of code will wire up the init function to execute
// when the page is done loading.
window.onload = init;

function onPressMeButtonClicked(){
    // code inside this function should execute when the button is pressed!
    console.log("hello from inside the onPressMeButtonClicked() function!");
    
    let username = nameTextbox.value;

    greeting.innerHTML = `Hello to ${username} from inside the onPressMeButtonClicked function!`;
    

}

console.log("the index.js has finished executing...");