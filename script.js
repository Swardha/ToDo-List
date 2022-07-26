const form = document.querySelector('#show-form');
const add = document.querySelector('#add-btn');
const input = document.querySelector('input');

const list = document.querySelector('#add-todo');

add.addEventListener('click', (e)=>{
 e.preventDefault();
//  for null input value
 if(input.value.length==0){
    input.value="Please enter a task";
 }else{
    //  creating list element
const todoDiv = document.createElement('div');
todoDiv.classList.add('tododiv');
 const addWork = input.value;
 const newList = document.createElement('LI');
 newList.innerText = addWork;
//  adding class for list element
 newList.classList.add('li-item');
 todoDiv.append(newList);
 input.value='';
//  creating delete button
const newBtn = document.createElement('button');
newBtn.innerHTML =`<i class="fa-solid fa-trash-can"></i>`;
newBtn.classList.add('delete-btn');
todoDiv.append(newBtn);
list.append(todoDiv);
}

})
// function for delete button
list.addEventListener('click', (e)=>{
    
    const item = e.target;
 
    if(item.classList[0]=='delete-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
})



