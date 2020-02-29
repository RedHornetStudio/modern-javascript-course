// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data
localStorage.setItem('name', 'luigi');
localStorage.setItem('age', 40);

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

// deleting data from local storage
//localStorage.removeItem('name')
localStorage.clear()

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

////////////////////////
localStorage.setItem('person', `{
    "name": "Hey",
    "age": 30,
    "work": "Dark Knight"
}`);

localStorage.setItem('myArray', '["50", "20", "30", 20]');

const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];
localStorage.setItem('todos', JSON.stringify(todos));

let person = localStorage.getItem('person');
let array = localStorage.getItem('myArray');
let todosFromLocalStorage = localStorage.getItem('todos');

array = JSON.parse(array);
person = JSON.parse(person);
todosFromLocalStorage = JSON.parse(todosFromLocalStorage);

console.log(typeof person);
console.log(typeof array);
console.log(typeof todosFromLocalStorage);
console.log(person);
console.log(array);
console.log(todosFromLocalStorage);