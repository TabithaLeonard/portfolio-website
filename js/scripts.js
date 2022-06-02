console.log("Hi! Welcome to My Portfolio Website, take a look around.")
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle'){
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}