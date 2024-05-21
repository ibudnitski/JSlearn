"use strict";

/*
let person = {
    name: "Igor",
    age: 36,
    [Symbol.toPrimitive](hint) {
        if (hint === 'number'){
            return this.age; // valueOf
        }else if (hint === 'string'){
            return this.name; //toString
        } else {
            return "hello";
        }
    }
}

alert(person);
alert(+person);
alert(person + "HEL");
*/


let person = {
    name: "Igor",
    surName: "Budnitski",
    age: 32,
    toString(){
        return this.name + " " + this.surName;
    },
    valueOf() {
        return this.age;
    }
}
alert(person);
alert(person + 10);
// alert(person.toString());
// alert(person.valueOf());