const para = document.querySelector('p');
const button = document.querySelector('button');
const ul = document.querySelector('form');

console.dir(ul);

para.style.margin = '20px';

console.dir(para);

button.addEventListener('click', () => {
    console.log(ul.second);
});

button.addEventListener('click', () => {
    console.log('button clicked second');
});

console.dir(button);

ul.addEventListener('click', e => {
    console.log(e.target);
});

const myFunc = () => {
    console.log('func fired');
    return myFunc;
};

const myFuncSecond = myFunc();
console.log(myFuncSecond());