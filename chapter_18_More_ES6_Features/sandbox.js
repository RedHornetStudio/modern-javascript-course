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