// const para = document.querySelector('p');

// console.log(para);

// const paras = document.querySelectorAll('p');

// console.log(paras);

// let array = new Array(0, 4, 5, 8, 2);

// console.log(array);

//2.///////////////////////////////////////////////

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     para.innerText += '<a href="https://translate.google.lv/">new text</a>'; 
// });

// paras.forEach(para => {
//     para.innerHTML += '<a href="https://translate.google.lv/">new text</a>'; 
// });

// const people = ['Mario', 'Hey', 'John', 'Luigi'];

// const content = document.querySelector('.content');

// people.forEach(person => {
//     content.innerHTML += `<li>${person}</li>`;
// });

//3./////////////////////////////////////////////////////////////////

// const link = document.querySelector('a');

// // console.log(link.getAttribute('href'));
// // console.log(link.getAttribute('class'));
// // console.log(link.className, typeof link.className);

// link.setAttribute('href', 'https://www.thenetninja.co.uk/');
// link.innerText = 'The Net Ninja Website';

// link.className = 'link-to-ninja';
// link.setAttribute('asdfsgg', 'gggggggggggggggggg');
// // console.log(link.getAttribute('class'));
// // console.dir(link);
// // console.log(link.getAttribute('asdfsgg'));

// const mssg = document.querySelector('.test');

// // console.log(mssg.getAttribute('class'));
// // console.log(mssg.getAttribute('id'));
// // console.log(mssg.id);

// mssg.setAttribute('style', 'color: red;');
// mssg.style.fontSize = '70px';
// mssg.style.backgroundColor = 'black';

//console.dir(mssg);

//4.//////////////////////////////////////////////////////

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(paragraph => {
//     paragraph.className = '';
//     console.dir(paragraph);
//     if(paragraph.textContent.includes('error')) {
//         paragraph.classList.add('error');
//     }
//     if(paragraph.textContent.includes('success')) {
//         paragraph.classList.add('success');
//     }
// });

// let myString = 'My name is John.';

// let res = myString.match(/name/);

// console.log(res);

//5.///////////////////////////////////////////////////////////

// const article = document.querySelector('article');

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
//     // child.className = 'article-element class-name';
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// console.log(title.nextElementSibling.parentElement.children);

//6./////////////////////////////////////////////////////////////////

// const button = document.querySelector('button');

// const ul = document.querySelector('ul');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do up';
//     const li2 = document.createElement('li');
//     li2.textContent = 'something new to do down';
//     ul.prepend(li);
//     ul.append(li2);
// });

// // const items = document.querySelectorAll('li');

// // items.forEach(item => {
// //     item.addEventListener('click', e => {
// //         console.log('event in li');
// //         //e.stopPropagation();
// //         e.target.remove();
// //     });
// // });

// ul.addEventListener('click', e => {
//     if(e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// });

//7.///////////////////////////////////////////////////////////////////////

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('information is copied');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//     box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// });