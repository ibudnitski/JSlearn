/*
Выделить число
важность: 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

    Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

    Например:

alert( extractCurrencyValue('$120') === 120 ); // true*/

let sum = "321310";

console.log(sum.length);

function extractCurrencyValue(str) {
    return +sum.slice(1);
}

console.log(extractCurrencyValue(sum));