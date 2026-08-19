const navBar = document.querySelector('.nav-bar')


// Change navbar background on scroll
window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 100) {
        navBar.classList.add('nav-bar--scroll')
    } else {
        navBar.classList.remove('nav-bar--scroll')
    }
})