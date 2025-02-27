/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

    a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

    The four operators are "add", "subtract", "divide", "multiply".

    A few examples:(Input1, Input2, Input3 --> Output)*/

function arithmetic(a, b, operator) {
    if (operator === 'add'){
        return a+b;
    }else if (operator === 'sub'){
        return a - b;
    } else if (operator === 'mult'){
        return a * b;
    } else {
        return a / b;
    }
}


console.log(arithmetic(2,3, 'add'));