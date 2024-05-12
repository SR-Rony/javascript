const todoInput = document.querySelector("input")
const addBtn = document.querySelector(".add_todo")
const list = document.querySelector("ul")
let todoArray = []
let innputValue = ""


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
       let deleteBtn = document.querySelectorAll(".delete")
       let deleteArray = Array.from(deleteBtn)
       deleteArray.map((item,deleteIndex)=>{
        item.addEventListener("click",function(){
            todoArray.splice(deleteIndex,1)
            todoFun()
        })
       })
    })
}