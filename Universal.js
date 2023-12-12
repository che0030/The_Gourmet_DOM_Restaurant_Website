
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

console.log('universal script fully loaded')


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
    

//  End Universal Script
/* ---------------------------------------------------------------- */

