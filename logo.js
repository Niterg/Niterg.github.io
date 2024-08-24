// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('animation container'),
//     path: './Images/Icons/icons8-linkedin-2.json',
//     render: 'svg',
//     loop: true,
//     autoplay: true,
//     name: 'linkedin animation'
// });
//Play an animation back on second click

let iconMenu = document.querySelector('.bodymovinanim');
let animationMenu = bodymovin.loadAnimation({
    container: iconMenu,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "./Images/Icons/icons8-linkedin-2.json"
});

var directionMenu = 1;
iconMenu.addEventListener('mouseenter', (e) => {
    iconMenu.style.opacity = "100";
    animationMenu.setDirection(directionMenu);
    animationMenu.play();

});

iconMenu.addEventListener('mouseleave', (e) => {
    animationMenu.setDirection(-directionMenu);
    animationMenu.play();

});

// Get the modal and button elements
var modal = document.getElementById("menu-modal");
var btn = document.getElementById("menu-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
