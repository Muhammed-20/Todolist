//! selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList   =  document.querySelector(".todo-list");
const todoFilter =  document.querySelector(".filter-todo");

const alertWarning = document.querySelector(".alert-warning");
const alertSucces = document.querySelector(".alert-succes");

/*eevent  */

todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodo);

function addTodo(e){

     e.preventDefault();
     const isEmpty = str => !str.trim().length;
     if(isEmpty(todoInput.value)){
     alertWarning.style.display = "block";
     setTimeout(() => {
          alertWarning.style.display = "none";
     }, 3000);
     todoInput.value = "";


     }else{

     alertSucces.style.display = "block";
     setTimeout(() => {
          alertSucces.style.display = "none";
     }, 3000);

     const todoDiv = document.createElement("div")
     todoDiv.classList.add("todo");

     
     const completebtn = document.createElement("button")
     completebtn.innerHTML="<i class='fas fa-check-circle'></i>";
     completebtn.classList.add("complete-btn")
     todoDiv.appendChild(completebtn);
     
     const todoItem = document.createElement("li");
     todoItem.innerText=todoInput.value;
     todoItem.classList.add("todo-item");
     todoDiv.appendChild(todoItem);

     const trashbtn = document.createElement("button");
     trashbtn.innerHTML="<i class='fa fa-minus-circle'>";
     trashbtn.classList.add("trash-btn");
     todoDiv.appendChild(trashbtn);

     todoList.appendChild(todoDiv); // en son todoDiv i todoListe append ediyoruz ve ekranda çıkıyor.

     todoInput.value = "";
     
     }
      
    

}

function deleteCheck(e){
   
     const item = e.target; // todoListin içerisindeki nereye tıklarsak onu alıyor.
     

     //? delete todo
     if (item.classList[0] === "trash-btn"){
          const todo =item.parentElement; // tıkladığımızın parentElementini yani üst  öğeisni
          todo.classList.add("fall");
          todo.addEventListener("transitionend", function(){
          todo.remove();
          });          
     }
    
     // check 
     if(item.classList[0] === "complete-btn"){
          const todo = item.parentElement;
          const todoParentElement = todo.parentNode;
          todo.classList.toggle("completed");
          todoParentElement.firstChild.childNodes[2].style.display = "none";
          
     }
}
function filterTodo(e){
     const todos = todoList.childNodes;
     todos.forEach(function (item) {
          switch (e.target.value) {
               case "all":
                    item.style.display = "flex";
                    break;
               case "completed":
                    if (item.classList.contains("completed")) {
                    item.style.display ="flex"; 
               } else {
                    item.style.display ="none";
               }
                    break;
               case "uncompleted":
                    if (!item.classList.contains("completed")) {
                         item.style.display = "flex";
               }else {
                    item.style.display = "none";
               }
                    break;
          }
     })

     
}