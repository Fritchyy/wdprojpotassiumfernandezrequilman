/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/


// ----- GLITCH STARTER PROJECT HELPER CODE -----

//Function for page redirection through buttons
function pageRedirection(page) {
  switch (page){
    case 1:
      window.location.href = 'a2mainPage.html'
      break; 
    case 2: 
      window.location.href = 'b1settingPage.html'; 
      break; 
    case 3: 
      window.location.href = 'app/public/a1menu.html'; 
      break;
    case 4: 
      window.location.href = 'c1guidePage.html'; 
      break;
    case 5:
      window.location.href = 'b2fonttypePage.html'
      break;
  }
}

function navDropdown(){
  document.getElementById("")
}

//Function for changing font type
function changeFont(type){
  switch(type){
    case 1:
     document.documentElement.style.setProperty('--font', "Sour Gummy")
      break;
    case 2:
     document.documentElement.style.setProperty('--font', "Comfortaa")
      break;
  }
  
}
