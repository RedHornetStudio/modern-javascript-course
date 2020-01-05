// let myObjArray = {
//     'name': 'John',
//     surname: 'Deer',
//     array: ['aa', 'bb', 'cc']
// }

// console.log(myObjArray.array[1], typeof myObjArray.array[1]);

function addFive() {
    var i = 50000;
    console.log('i in function:', i);
}

let name = 'John';
i = 10;

if(true) {
    let name = 'Deer';
    let surname = 'ggggggg';
    console.log('inside first code block:', name, surname);
}

for(let i = 0; i < 5; i++) {
    let name = 'aaaa';
    if(i === 1) {
        name = 'For';
    }
    console.log('inside second code block:', name, i);
}

console.log('outside code block:', name);

addFive();
console.log(i);

