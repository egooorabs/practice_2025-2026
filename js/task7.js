function deleteFalseValues(arr) {
    return arr.filter(Boolean);
}

console.log('Задача 7. Ответ:');
const arrayFirst = [5, 12, false, 2, '', 10, null, 'hello', undefined, NaN, 8, -0, 0n, document.all, 3];
const trueValues = deleteFalseValues(arrayFirst);
console.log(trueValues);