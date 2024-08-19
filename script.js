const menu = document.querySelector('.menu')
const header = document.querySelector('header')

menu.addEventListener('click', () =>{
    menu.classList.toggle('active')
    header.classList.toggle('active')
})
menu.addEventListener('touchup', () =>{
    menu.classList.toggle('active')
    header.classList.toggle('active')
})

