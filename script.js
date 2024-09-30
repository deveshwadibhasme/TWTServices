function loader() {
    document.querySelector('#preloader').style.transform = 'translateY(-100%)'
}
function scrolling() {
    document.body.style.overflow = 'visible'
}
window.addEventListener('load', () => {
    setTimeout(loader, 2000)
    setTimeout(scrolling,2500)
})

const menu = document.querySelector('.menu')
const header = document.querySelector('header')

menu.addEventListener('click', () =>{
    header.classList.toggle('active')
})

menu.onClick.toggle(menu.innerHTML = '&Cross;')

menu.addEventListener('touchup', () =>{
    menu.classList.toggle('active')
    header.classList.toggle('active')
})

