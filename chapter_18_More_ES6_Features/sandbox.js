// rest parameter
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => {
        return num * 2;
    });
};

const result = double(1, 5, 4, 2, 3, 12);
console.log(result);

// spread syntax (arrays)
const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun-li', ...people];
console.log(members);

// spread syntax (objects)
const person = { name: 'shaun', age: 30, job: 'net ninja' };
const personClone = { ...person, location: 'manchester' };
console.log(person);
console.log(personClone);

///////////////////////////////////////////// sets
const namesArray = ['ryu', 'shun-li', 'ryu', 'shaun'];
console.log(namesArray);

// const nameSet = new Set(['ryu', 'shun-li', 'ryu', 'shaun']);
// const nameSet = new Set(namesArray);
// console.log(nameSet);

// const uniqueNames = [...nameSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(30);
ages.add(25).add(20);
ages.add(25);
ages.delete(25);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(25));

ages.clear();
console.log(ages);

const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 32}
])

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
});

///////////////////////////////////////////// symbols
const symboleOne = Symbol('a generic name');
const symboleTwo = Symbol('a generic name');

console.log(symboleOne, symboleTwo, typeof symboleOne);
console.log(symboleOne == symboleTwo);

const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
ninja.belt = 'balck';

ninja[symboleOne] = 'ryu';
ninja[symboleTwo] = 'shaun';

console.log(ninja);
console.log(ninja[symboleOne]);