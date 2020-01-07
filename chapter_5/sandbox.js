class Blog {
    constructor(title, likes = 100) {
        this.title = title;
        this.likes = likes;
    }

    logLikes() {
        return this.likes;
    }
}

let user = {
    name: 'John',
    age: 30,
    email: 'john@inbox.lv',
    location: 'riga',
    blogs: [new Blog('why android rules', 30), new Blog('10 things to make with javascript', 100)],

    login() {
        console.log('user is logged in');
    },

    logout() {
        console.log('user is logged out');
    },

    logBlogs() {
        console.log(`The user ${this.name} has written the following blogs`);
        this.blogs.forEach((value) => {
            console.log(`-${value.title}. Likes: ${value.likes}`);
        });
    }
};

console.log(user);

user.logBlogs();

let blog = new Blog('aaaaaa', 30);
let blog2 = new Blog('aaaaaa');

console.log(blog2);