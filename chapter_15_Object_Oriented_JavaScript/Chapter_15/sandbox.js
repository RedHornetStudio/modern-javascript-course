class User {
    constructor(username, email = 'default@email.com') {
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() {
        console.log(`${this.username} has a score of ${++this.score}`);
        return this;
    }
}

class Admin extends User {
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter(elem => {
            return elem !== user;
        });
    }
}

const userOne = new User('shaun', 'shaun@email.com');
const userTwo = new User('luigi');
const userThree = new Admin('admin', 'admin@email.com', 'ninja');

userOne.login().incScore().incScore().logout();
console.log(userTwo);

let users = [userOne, userTwo, userThree];
console.log(users);
console.log(userThree);

userThree.deleteUser(userTwo);
console.log(users);

///////////////////////// old method of creating objects

function OldUser(username, email) {
    this.username = username;
    this.email = email;
}

OldUser.prototype.login = function() {
    console.log(`${this.username} has logged in`);
    return this;
}

OldUser.prototype.logout = function() {
    console.log(`${this.username} has logged out`);
    return this;
}

OldUser.prototype.PI = 3.14;

function OldAdmin(username, email, title) {
    OldUser.call(this, username, email);
    this.title = title;
}

OldAdmin.prototype = Object.create(User.prototype);

OldAdmin.prototype.deleteUsers = function() {
    // delete user
};

const oldUserOne = new OldUser('olduser', 'olduser@email.com');
console.log(oldUserOne);
oldUserOne.login().logout();

const oldAdmin = new OldAdmin('oldAdmin', 'oldAdmin@email.com', 'oldNinja');
console.log(oldAdmin);

