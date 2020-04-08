const greet = name => {
    console.log(`hello ${name}`);
};

greet('mario');
greet('luigi');
greet('link');
greet('mario');
greet('luigi');
greet('link');
greet('mario');
greet('luigi');
greet('link');

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName() {
        return this.name;
    }
}