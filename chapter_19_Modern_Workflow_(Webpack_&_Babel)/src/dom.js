console.log('dom file');

const body = document.querySelector('body');

const styleBody = color => {
    body.style.background = color;
};

const addTitle = text => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

const contact = 'mario@thenetninja.co.uk';

styleBody('red');
addTitle('hello, world from the dom file');

export {styleBody, addTitle, contact};