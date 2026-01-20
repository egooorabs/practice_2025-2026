function sumPositive(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}

let numbers = [-2, 5, 3, -1, 0, 7];
let numbers2 = [-100, 10, 200, 0, -24, 110, -1, -17];
console.log("Задача 1. Ответ:");
console.log(sumPositive(numbers));
console.log(sumPositive(numbers2))