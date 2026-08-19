const mobileMenuItems = document.querySelector('.mobile-menu-items')
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
const header = document.querySelector('.header')

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuItems.classList.toggle('mobile-menu-items-hidden')
})

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (scrollY > 100) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})


