/*function User(name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
    this.sayHi = function () {
        console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
    }
}

let user1 = new User("Igor", 35, true);
let user2 = new User("Andrei", 23, false);
let user3 = new User("Irina", 32, );
let user4 = new User();

function printUsers(user) {
    for (const userKey in user) {
        if (typeof user[userKey] !== "function"){
            console.log(`${userKey} = ${user[userKey]}`);
        }
    }
}
user4.sayHi();
printUsers(user4);*/

// user1.sayHi();
// user2.sayHi();
// user3.sayHi();
//
// printUsers(user1);
// printUsers(user2);
// printUsers(user3);

/*let admin = new function () {
    this.name = "Igor";
    this.age = 36;
}

console.log(admin);*/

function Calculator() {
    this.read = function (){
        this.a = +prompt("Please enter first number:", "");
        this.b = +prompt("Please enter second number:", "");
    }

    this.sum = function () {
        return this.a + this.b;
    }

    this.multiply = function (){
        return this.a * this.b;
    }
}

let calc = new Calculator();
calc.read();
alert(`Sum = ` + calc.sum());
alert(`Multiplication = ` + calc.multiply());