function secondMax(arr) {
  if (arr.length < 2) {
    return null;
  }

  let max = arr[0];
  let second = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] < max) {
      second = arr[i];
    }
  }

  return second;
}

console.log("Задача 7. Ответ:");
console.log(secondMax([1, 3, 2, 4, 5]));
console.log(secondMax([10, 10, 5]));
console.log(secondMax([7]));
console.log(secondMax([-1, -2, -3]));
