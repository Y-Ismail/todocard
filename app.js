const editBtn = document.querySelector(".editbtn");
const deleteBtn = document.querySelector(".deletebtn");
const checkbox = document.querySelector('input[type="checkbox"]')
const title = document.querySelector('h2')
const description = document.querySelector('.description')
const statuse = document.querySelector('.status')
const priority = document.querySelector('.priority')
let time = document.querySelector('.time')
const dueDate = document.querySelector('#duedate')
const titleInput = document.querySelector('#titleinput')
const descInput = document.querySelector('#descriptioninput')
const priorityInput = document.querySelector('#priorityinput')
const dateInput = document.querySelector('#dateinput')
const saveBtn = document.querySelector('#savebtn')
const closeBtn = document.querySelector('#closebtn')
const todoCard = document.querySelector('#todocard')
const editForm = document.querySelector('#editform')
const duein = document.querySelector('.duein')
const due = document.querySelector('#due')
const expand = document.querySelector('[data-testid="test-todo-expand-toggle"]')
const collapsible = document.querySelector('[data-testid="test-todo-collapsible-section"]')
const states = document.getElementById('states')


states.addEventListener('change',()=>{
     console.log(states.value)
       statuse.innerText = states.value
     if(states.value === 'Done'){
        
          checkbox.checked = true
           statuse.style.backgroundColor = "rgba(11, 222, 11, 0.56)"
     }else if(states.value === 'In Progress'){
        
          checkbox.checked = false
           statuse.style.backgroundColor = "rgba(11, 215, 222, 0.98)"
     } else if(states.value === 'Pending'){

          checkbox.checked = false
          statuse.style.backgroundColor = "rgba(215, 222, 11, 0.98)"
     }

     checkedFn()
    
     

})

console.log(collapsible.innerText.length)

function showldExpand(){
const isOverflow = collapsible.scrollHeight > 155

if(isOverflow){
     expand.style.display = 'block'
}else{
     expand.style.display = 'none'
}
}
showldExpand()


expand.addEventListener('click',()=> {
     collapsible.classList.toggle('expanded')
     if(collapsible.classList.contains('expanded')){
          expand.innerText = 'Show Less'
     }else{
          expand.innerText = 'Show More'
     }
})

function checkDue(){
     if(Date.now() > new Date(dueDate.innerText).getTime()){
          console.log("Check the box")
          checkbox.checked = true;
          duein.innerHTML = 'Overdue by'
     } else{
          duein.innerHTML = 'Due in &rightsquigarrow;'
     }
     
}
checkDue()

if(duein.innerHTML === 'Overdue by'){
          duein.style.colr = 'red'
     }
titleInput.value = title.innerText;
descInput.value = description.innerText;


function checkedFn(){
     if(checkbox.checked){
    title.style.textDecoration = 'line-through'
    statuse.innerText = 'Done'
    statuse.style.backgroundColor = "rgba(11, 222, 11, 0.56)"
    due.innerText = "Completed"
    document.body.firstElementChild.style.opacity = 0.5
    
} else{
     title.style.textDecoration = ''
     
     statuse.style.backgroundColor = statuse.style.backgroundColor
     due.innerHTML = `<span class="duein">${duein.innerText}</span>
            <time data-testid="test-todo-time-remaining" class="time"></
            time>`
          statuse.innerText = states.value
            document.body.firstElementChild.style.opacity = 1   
          } 
}

checkbox.addEventListener('change',()=> {
      if(checkbox.checked){
    title.style.textDecoration = 'line-through'
    statuse.innerText = 'Done'
    states.value = statuse.innerText
    statuse.style.backgroundColor = "rgba(11, 222, 11, 0.56)"
    due.innerText = "Completed"
    document.body.firstElementChild.style.opacity = 0.5
    
} else{
     title.style.textDecoration = ''
     
     statuse.style.backgroundColor = "rgba(210, 204, 16, 0.54)"
     due.innerHTML = `<span class="duein">${duein.innerText}</span>
            <time data-testid="test-todo-time-remaining" class="time"></
            time>`
            
          statuse.innerText = "Pending"
          states.value = statuse.innerText
            document.body.firstElementChild.style.opacity = 1   
          } 

})

deleteBtn.addEventListener('click',()=> alert("Todo deleted"))
editBtn.addEventListener('click',()=> {
     titleInput.value = title.innerText;
     descInput.value = description.innerText;
     console.log("Todo Edited")
     todoCard.style.display = 'none'
     editForm.style.display = 'block'
     
})


function countdown(){
time = document.querySelector('.time')
if(time){
const today = new Date().getTime();
const duedate = new Date(`${dueDate.innerText}`).getTime();
const timeremain = Math.abs(duedate - today)
const days = Math.floor(timeremain / (1000 * 60 * 60 * 24))
time.innerText = `${days} Days `
}  

}


setInterval(countdown, 1000)

function closeEdit(){
     todoCard.style.display = 'block'
     editForm.style.display = 'none'
}

closeBtn.addEventListener('click',closeEdit)



saveBtn.addEventListener('click',()=> {
     let chosendate = new Date(dateInput.value)
     console.log(dateInput.value)
     const duevalue = chosendate.toLocaleDateString("en-GB",{year:"numeric", day:"numeric",month:"long"})
     // titleInput.value === '' ? title.innerText = title.innerText  : title.innerText = titleInput.value;
     if(titleInput.value === ''){
        return  
     } else{
          title.innerText = titleInput.value;
     }
     if(descInput.value === ''){
          return 
     } else{
          description.innerText = descInput.value
     }
     if(dateInput.value === ''){
          dueDate.innerText = dueDate.innerText 
     } else{
           dueDate.innerText = duevalue;
     }

     if(Date.now() > chosendate){
          duein.innerText = 'Overdue by'
     }
     
     
     if(priorityInput.value === 'Low'){
          priority.innerText = `${priorityInput.value} 🟢`
          priority.style.backgroundColor = 'Green'
           priority.style.color = 'white'
     } else if(priorityInput.value === 'Medium'){
          priority.innerText = `${priorityInput.value} 🟡`
          priority.style.backgroundColor = 'rgb(229, 229, 84)'
          priority.style.color = 'black'
     } else{
          priority.innerText = `${priorityInput.value} 🔴`
          priority.style.backgroundColor = 'rgb(188, 37, 37)'
           priority.style.color = 'white'
     }


     closeEdit()
     checkedFn()
     checkDue()
     showldExpand()
})


if(priority.innerText === 'High'){

}