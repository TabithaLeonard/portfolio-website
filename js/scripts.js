console.log('Hi! Welcome to My Portfolio Website, take a look around.')
// eslint-disable-next-line no-unused-vars
function menuToggle () {
  const x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
