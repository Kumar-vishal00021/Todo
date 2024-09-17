var todoData=JSON.parse(localStorage.getItem("todo-data")) || [];
function addtodoformsubmite(event){
    event.preventDefault();
    const formData= new FormData(event.target);
    let tittle=formData.get('todoinput');
    todoData.push({tittle:tittle});
    // let innerHTML="";
    // todoData.forEach(data=>{
    //     innerHTML=innerHTML+`<li>${data.tittle}</li>`
    // });
    // document.getElementById('todos').innerHTML=innerHTML;
    let todosWraperElement=document.getElementById('todos');
    let li=document.createElement('li');
    li.innerText=tittle;

    const button=document.createElement("button");
    button.innerText="delete";
    li.appendChild(button)
    todosWraperElement.appendChild(li);
    event.target.reset();
    localStorage.setItem("todo-data",JSON.stringify(todoData))
}
function renderTodos(){
    let todosWraperElement=document.getElementById("todos");
    todoData.forEach(todo=>{
        let li=document.createElement('li')
        li.innerText=todo.tittle
        todosWraperElement.appendChild(li)
    })
}
renderTodos();