/*
function minValue(a, b){
    return a > b ? a : b;
}

console.log(minValue(3, 3));
console.log(minValue(6, 4));
console.log(minValue(2, 2));

console.log(".............................")
function powFunction(a, n) {
    return Math.pow(a, n);
}

console.log(powFunction(3, "2"));
console.log(powFunction(2, 2));
console.log(powFunction(3, 6));
console.log(powFunction(5, 5));*/

/*
let sayHi = function (name) {
    console.log("Hello, " + name);
}

sayHi("Irina");*/

function askQuestion(question, yes, no) {
    if (confirm(question)){
        yes();
    }else {
        no();
    }
}

let showOK = function (){
    console.log("OK")
};

let showCancel = function (){
    console.log("Cancel")
};

askQuestion("Are you agree?", showOK, showCancel);