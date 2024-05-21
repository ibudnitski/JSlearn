/*
let user = {
    name: "Igor",
    age: 36
};


console.log(`Name: ` + user.name + `\n` +  `Age: ` + user.age);*/

/*
const person = {
    firstName: "Igor",
    lastName: "Budnitski",
    age: 35,
    isEmployed: true,
    sayHi: function () {
        console.log("Hi! I am Igor!")
    }
}


const person2 = {
    firstName: "Andrei",
    lastName: "Budnitski",
    age: 34,
    isEmployed: false,
    sayHi: () => console.log("Hi! I am Andrei!")
}*/

/*
// Task #1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = `Pete`;
delete user.name;
console.log(user.surname);*/

/*
// Task #2

let schedule = {};

function isEmpty(obj) {
    /!*return Object.keys(obj).length === 0;*!/
    for (const objKey in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(schedule));

schedule["8:30 May"] = 21;

console.log(isEmpty(schedule));*/

/*
// Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (const salariesKey in salaries) {
    sum += salaries[salariesKey];
}
console.log(sum);*/

/*// Task #4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] === `number`){
            obj[key] = (obj[key] * 2);
        }
    }
}

multiplyNumeric(menu);

console.log(menu.height);
console.log(menu.width);
console.log(menu.title);*/

/*let user = {
    name: "John",
    age: 32,
    isAlive: true,
};

let cloneUser = { ...user};
cloneUser.name = "Igor";
console.log(cloneUser.name);
console.log(user.name);*/

/*let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(`Hi! I am ${this.firstName}`);
        arrow();
    }
};

user.sayHi();// Ilya*/

// Task #6

/*function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name);*/
