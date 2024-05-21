class Animal {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }



    sayHi(name, age, gender) {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I am ${this.gender}`)
    }
}

let animal1 = new Animal("Elephant", 23, "Male");

animal1.sayHi();

