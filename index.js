
//  Universal Script
/* ---------------------------------------------------------------- */
 
 // burger icon
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
 
 
 // extra effects
 /* ---------------------------------------------------------------- */
 // scroll: at top of page, overlay
 window.addEventListener('scroll', function() {
     const overlay = document.querySelector('#overlay');
     console.log("overlay passed")
     if (window.scrollY > 0) {
         overlay.style.display = 'none';
     } else {
         overlay.style.display = 'block';
     } 
 })
 
 //  End Universal Script
 /* ---------------------------------------------------------------- */
 
 
 // index page only
 /* ---------------------------------------------------------------- */
 
 // click burger icon > hides the middle nav
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
     // error here
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
 
     console.log('index script fully loaded')
 

    //  scrolling hides the header and brigns it back
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const headerContainer = document.querySelector('#header-container'); 
    let currentScrollPos = window.scrollY;

    if (currentScrollPos > lastScrollTop){
        headerContainer.style.display = 'none';
    } else {
        // Scrolling Up
        headerContainer.style.display = 'flex';
    }
        // For Mobile or negative scrolling
    lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos; 
}, false);
