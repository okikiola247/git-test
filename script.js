const btn = document .querySelector(".btn")
const container = document .querySelector(".container")


btn.addEventListener('click', displayNotification)

function displayNotification(){
    container.classList.add('display-modal')
}


const close = document.querySelector('.close')
close.addEventListener('click', displayRemove)


function displayRemove(){
    container.classList.remove('display-modal')
}