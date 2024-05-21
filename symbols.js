const id = Symbol("SYMBOL");

let user = {
    name: "Igor",
    age: 32,
    isTall: true,
    [id]: 1212121212
}

user[id] = "3213213123";

for (const userKey in user) {
    console.log(userKey);
}
console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));
console.log(user[id]);