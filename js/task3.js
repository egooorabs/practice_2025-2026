function maxInSubarrays(arr) {
  return arr.map(subArr => Math.max(...subArr));
}


console.log('Задача 3. Ответ:');
const subarrays = [[1, 2, 3], [94, 68], [11, 127, 70, 478]];
const finalResult = maxInSubarrays(subarrays);
console.log(finalResult);