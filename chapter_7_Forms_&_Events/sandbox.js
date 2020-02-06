const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]+[0-9]*(\.[a-zA-Z]+[0-9]*)*$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    let username = e.target.username.value;
    if(pattern.test(username) && username.length > 5) {
        feedback.textContent = 'it is valid username :)';
    } else {
        feedback.textContent = 'it is invalid username :(';
    }
});

// form.username.oninput = e => {
//     console.dir(e.target);
//     let username = e.target.value;
//     if(pattern.test(username) && username.length > 5) {
//         console.log('it is valid username :)');
//     } else {
//         console.log('it is invalid username :(');
//         console.dir(e.target);
//         form.username.className = 'error';
//     }
// };
// console.dir(form.username);

form.username.addEventListener('keypress', e => {
    let username = e.target.value;
    if(pattern.test(username) && username.length > 5) {
        //e.target.className = 'error';
        e.target.setAttribute('class', 'success');
        console.dir(e);
    } else {
        //e.target.className = 'error';
        e.target.setAttribute('class', 'error');
        console.dir(e);
    }
});

