const todoInput = document.querySelector("input")
const addBtn = document.querySelector(".add_todo")
const updateBtn = document.querySelector(".update_todo")
const list = document.querySelector("ul")
let todoArray = []
let innputValue = ""
let index


// add todo buitton click
addBtn.addEventListener("click",function(){
    innputValue = todoInput.value;
    todoArray.push(innputValue);
    todoFun()

})

function todoFun (){
    list.innerHTML = ""
    todoArray.map((todo,todoIndex)=>{
        list.innerHTML +=`<li>${todo} <div><button class="edit">Edit</button> <button class="delete">Delete</button></div></li>`
        // delete button
        let deleteBtn = document.querySelectorAll(".delete")
       let deleteArray = Array.from(deleteBtn)
       deleteArray.map((item,deleteIndex)=>{
        item.addEventListener("click",function(){
            todoArray.splice(deleteIndex,1)
            todoFun()
        })
       })
    //    Edit button
    let editBtn = document.querySelectorAll(".edit")
       let editArray = Array.from(editBtn)
       editArray.map((item,editIndex)=>{
        item.addEventListener("click",function(){
            todoInput.value = todoArray[editIndex]
            todoInput.focus()
            addBtn.style.display = "none"
            updateBtn.style.display = "block"
            index = editIndex
        })
       })
    })
}

// update button
updateBtn.addEventListener("click",function(){
    todoArray[index] = todoInput.value;
    todoInput.value = "";
    addBtn.style.display = "block"
    updateBtn.style.display = "none"
    todoFun()
})