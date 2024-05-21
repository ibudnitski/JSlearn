// let str = "hello";
// console.log(str.toUpperCase());
// console.log(str);
// str.toUpperCase();

// convert up to 32
// let num = 76;
// console.log(num.toString(16)); // convert number to 16 number
// console.log(num.toString(2)); // convert to binary
// console.log(123..toString(2));

// console.log(0.23.toString(2)); // interesting behaviour

// console.log(Math.round(3.5));

// let num = 12.3456673;
// console.log(num.toFixed(2));
// num = num.toFixed(2);
// console.log(num);
// let sum = .1.toFixed(1) + .2.toFixed(2);
// console.log(+sum == 0.3);
// let num = "100p;x";
// console.log(parseFloat("234", 2));

// let word = "Igor";
// console.log("Hello\nWorld!");
let word = "This is good!";
console.log(word.indexOf("RR"));


/*
let str = "vasja";

for (const strElement of str) {
    console.log(strElement);
}*/

function checkSpam(str){
    let lowStr = str.toLowerCase();
    return lowStr.includes("viagra") || lowStr.includes("xxx");
}

console.log(checkSpam("viagra"));
