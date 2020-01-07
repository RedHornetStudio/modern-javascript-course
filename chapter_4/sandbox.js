// const speak = function(i) {
//     console.log('aaaaaaaa', i);
// };

// function hello(i) {
//     console.log('hello with i', i);
// }

// speak('ss', 'ccccc');
// hello('ssssssssssss', 'ccccc');

// console.log(typeof speak);
// console.log(typeof hello);

// let array = ['Shaun', 'John'];

// console.log(typeof array);

// const great = () => 'hello, world';

// console.log(great());

/////////////////////////////////////////

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 10, 10], 0.2), typeof bill);

/////////////////////////////

const myFunc = (callbackFunction) => {
    let value = 50;
    callbackFunction(value);
};

myFunc((v) => {
    console.log(v);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((value, index) => {
    console.log(value, index);
});

let myArrayObject = {
    0: 'John',
    1: 'Mike',
    2: 'Luigi',
    3: 'li',
    length: 4,
    insideObject: {
        name: 'Hei',
        surname: 'Way',

        arrowFunc() {
            console.log(this);
        }
    },

    myForEach(callBackFunction) {
        for(let i = 0; i < this.length; i++) {
            callBackFunction(this[i]);
        }
    },

    callArrowFunc() {
        this.insideObject.arrowFunc();
    }
};

myArrayObject.myForEach((value) => {
    console.log(value);
});

myArrayObject.callArrowFunc();