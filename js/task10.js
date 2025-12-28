function recursion(arr,n) {
    if (n < 1) {
        return;
    }
    
    arr.push(n);

    recursion(arr, n - 1);
}

console.log('Задача 10. Ответ:');
let array2 = [];
recursion(array2, 3);
console.log(array2);