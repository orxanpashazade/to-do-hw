let ListArea = document.querySelector(".myListArea")
let inputData = document.querySelector("input")
let addTaskButton = document.querySelector(".addTaskBtn")
addTaskButton.addEventListener("click", addTask)
function addTask(e){
    e.preventDefault()
    let inputData = document.querySelector("input")
    if(inputData.value === ''){
        alert("Task`in adini daxil et!")
    }else{
    let taskArea = document.createElement("li")
    taskArea.classList.add("flex","justify-between", "p-[10px]", "w-[300px]", "h-[50px]", "bg-[#2980B9]","rounded-[10px]")

    let textContainer = document.createElement("div")
    let taskContent = document.createElement("p")
    taskArea.appendChild(textContainer)
    taskArea.appendChild(taskContent)
    textContainer.appendChild(taskContent)
    taskContent.innerText = inputData.value
    inputData.value =''
    let iconsContainer = document.createElement("div")
    iconsContainer.classList.add("flex","gap-[5px]")
    taskArea.appendChild(iconsContainer)

    let editTask = document.createElement("i")
    editTask.classList.add("text-[20px]")
    taskArea.appendChild(editTask)

    let deleteTask = document.createElement("i")
    taskArea.appendChild(deleteTask)

    iconsContainer.appendChild(editTask)
    editTask.classList.add("fa-solid")
    editTask.classList.add("fa-pen-to-square")
    iconsContainer.appendChild(deleteTask)
    deleteTask.classList.add("fa-solid")
    deleteTask.classList.add("fa-trash")
    
    ListArea.appendChild(taskArea)

    deleteTask.addEventListener("click",deleteTaskFunc)
function deleteTaskFunc(e){
   if(e.target.closest(".fa-trash")){
    let AllList = e.target.closest(".myListArea")
    AllList.remove()
   }
}
editTask.addEventListener("click", editTaskFunc)
function editTaskFunc(e){
    if(e.target.closest(".fa-pen-to-square")){
        let newTask = prompt("Edit your task!")
        if (newTask === ''){
            alert("PLease enter task!")
        }
        else{
            taskContent.textContent = newTask
        }
    }
}
    }

    
}
