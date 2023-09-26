let input=document.getElementById('inp')
let btn = document.getElementById('btn')
let todoList=document.getElementById('todo')

let todos=[];
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos'))||[]
    todos.forEach(todo=>Addtodo(todo))
}  

btn.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    Addtodo(input.value)
    input.value=''
})

function Addtodo(todo){
    let para=document.createElement('p')
    para.innerText=todo
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1)
        todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}