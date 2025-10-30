let inp = document.querySelector('input');
let btn = document.querySelector('#add');
let ul = document.querySelector('ul');
let btnclr = document.querySelector('#clear');


btn.addEventListener('click', function(){
    let value = inp.value;

    //create a new element
    let li = document.createElement('li');
    li.textContent = value;

    ul.appendChild(li);

    localStorage.setItem('todos', ul.innerHTML);

    inp.value = '';
})

function setData(){
ul.innerHTML=  localStorage.getItem('todos');
}

setData();


btnclr.addEventListener('click', function(){
    ul.textContent = '';
    localStorage.clear();
})