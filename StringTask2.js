/*
Усечение строки
важность: 5
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

    Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

    Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"*/

let strM = "Всем приветю Меня зовут Игорь, мне 36 лет!";

function truncate(str, maxlength) {
    let strLength = str.length;
    if (strLength > maxlength) {
        let result =  str.substring(0, maxlength-1) + "…";
        return result;
    }else {
        return str;
    }
}


console.log(truncate(strM, 20));