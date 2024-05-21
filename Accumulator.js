/* TASK
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        let number = +prompt("Please enter a number", "");
        this.value += number;
    }
}

let acc = new Accumulator(1);

acc.read();
acc.read();

alert(acc.value);*/

/*
//Optional Chaining
let user = {
    address: {
        city: "Tallinn",
        street: "Geoloogia",
        houseNumber: "12",
        apNum: 23
    }
};

// console.log(user.address.street);
console.log(user?.address);
*/
