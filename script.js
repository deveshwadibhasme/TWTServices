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

