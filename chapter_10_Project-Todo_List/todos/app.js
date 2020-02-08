const add = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

add.addEventListener('submit', e => {
    e.preventDefault();
    const text = e.target.add.value.trim();
    if(text.length) {
        addTodo(text);
    }
    e.target.add.value = '';
});

todos.addEventListener('click', e => {
    if(e.target.tagName == 'I') {
        e.target.parentElement.remove();
    }
});

search.addEventListener('input', e => {
    filterTodos(e.target.value.trim().toLowerCase());
});

const addTodo = text => {
    const li = document.createElement('LI');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    const span = document.createElement('SPAN');
    span.textContent = text;
    li.appendChild(span);
    const i = document.createElement('I');
    i.className = 'far fa-trash-alt delete';
    li.appendChild(i);
    todos.appendChild(li);
};

const filterTodos = text => {
    const spans = document.querySelectorAll('.todos span')
    spans.forEach(span => {
        if(span.textContent.toLowerCase().includes(text)) {
            span.parentElement.removeAttribute('style');
        } else {
            span.parentElement.setAttribute('style', 'display: none !important;');
        }
    });
};