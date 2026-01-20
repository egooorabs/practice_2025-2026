function splitByIndex(inputArr) {
  let a = [];
  let b = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (i % 2 === 0) {
      a.push(inputArr[i]);
    } else {
      b.push(inputArr[i]);
    }
  }

  return [a, b];
}

let myArray = [1, 2, 3, 4, 5];
console.log("Задача 4. Ответ:");
console.log(splitByIndex(myArray));
