function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
      }
    }

    if (isDuplicate === false) {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, 2, 2, 3, 4, 4, 5];
let arr2 = [2, 2, 22, 3, 33, 33, 6, 6, 666, 666];
console.log("Задача 2. Ответ:");
console.log(removeDuplicates(arr));
console.log(removeDuplicates(arr2))