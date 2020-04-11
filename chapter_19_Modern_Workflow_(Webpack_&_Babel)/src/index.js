import {styleBody, addTitle, contact} from './dom';
import users, {getPremUsers} from './data';

console.log('index fiel');

styleBody('green');
addTitle('test');

console.log(contact);
console.log(users);

const premUsers = getPremUsers(users);
console.log(premUsers);

console.log('test1234567');