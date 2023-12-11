
// Define variables
const hamburgerMenuButton = document.querySelector('#hamburger-menu-button');
const dropdownContent = document.querySelector('#dropdown-js');
const navMiddle = document.querySelector('#nav-middle-js');

// hamburger: click to activate dropdown
hamburgerMenuButton.addEventListener('click', function() {
// shows the dropdown menu options
dropdownContent.classList.toggle('dropdown-content-show-on-click');
// dropdown styles differently by popping out on entire screen, via class

});


// hamburger: animation to become x only
hamburgerMenuButton.addEventListener('click', function() {
hamburgerMenuButton.classList.toggle('xbutton-active');
});

// hiding the middle nav
hamburgerMenuButton.addEventListener("click", function() {
navMiddle.classList.toggle("hidden");
});

// hover changes image src
// define variables
const eatButton = document.querySelector('#eat');
const drinkButton = document.querySelector('#drink');
const visitButton = document.querySelector('#visit');
const backgroundImage = document.querySelector('#background-image');

// each button listens for hover and changes 
eatButton.addEventListener('mouseover', function() {
backgroundImage.src = './Images/eat1_medium.jpg';
// image quality vs. screen size.... can't see any visible difference?
backgroundImage.srcset = './Images/eat1_medium.jpg 1920w, ./Images/eat1_large.jpg 2400w';
backgroundImage.sizes = '(min-width: 300px) 100vw, (min-width: 1200px) 100vw';
});

drinkButton.addEventListener('mouseover', function() {
    backgroundImage.src = './Images/drink1_medium.jpg';
    backgroundImage.srcset = './Images/drink1_medium.jpg 1920w, ./Images/drink1_large.jpg 2400w';
    backgroundImage.sizes = '(min-width: 300px) 100vw, (min-width: 1200px) 100vw';
});

visitButton.addEventListener('mouseover', function() {
    backgroundImage.src = './Images/story2_medium.jpg';
    backgroundImage.srcset = './Images/story2_medium.jpg 1920w, ./Images/story2_large.jpg 2400w';
    backgroundImage.sizes = '(min-width: 300px) 100vw, (min-width: 1200px) 100vw';
});
