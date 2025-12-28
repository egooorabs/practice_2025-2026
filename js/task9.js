function updateArray(arr, size) {
  const updatedArray = [];
  let index = 0;

  while (index < arr.length) {
    updatedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return updatedArray;
}

console.log('Задача 9. Ответ:');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 100, 200, 300, 555, 897, 990, 11101];
const groupSize = 5;
const result = updateArray(array, groupSize);
console.log(result);