const editBtn = document.querySelector(".editbtn");
const deleteBtn = document.querySelector(".deletebtn");
const checkbox = document.querySelector('input[type="checkbox"]')
const title = document.querySelector('h2')
const statuse = document.querySelector('.status')
const time = document.querySelector('.time')

checkbox.addEventListener('click',()=> {
   if(checkbox.checked){
    title.style.textDecoration = 'line-through'
    statuse.innerText = 'Complete'
    statuse.style.backgroundColor = "rgba(11, 222, 11, 0.56)"
    
} else{
     title.style.textDecoration = ''
     statuse.innerText = 'In Progress'
     statuse.style.backgroundColor = "rgba(210, 204, 16, 0.54)"
}
})

deleteBtn.addEventListener('click',()=> alert("Todo deleted"))
editBtn.addEventListener('click',()=> console.log("Todo Edited"))


function countdown(){
const today = new Date().getTime();
const duedate = new Date("2026-4-16").getTime();
const timeremain = duedate - today
const days = Math.floor(timeremain / (1000 * 60 * 60 * 24))
const hours = Math.floor((timeremain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
const minutes = Math.floor((timeremain % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((timeremain % (1000 * 60)) / 1000)
time.innerText = `${days} Days `
// console.log(`${days} ${hours} ${minutes} ${seconds}`)
}

setInterval(countdown, 5000)

console.log()
