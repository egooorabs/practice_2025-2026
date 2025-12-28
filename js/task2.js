function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log('Задача 2. Ответ:');
const text = "яблоко банан грибок пятка капуста рак дезоксирибонуклеиновая-кислота";
const longest = findLongestWord(text);
console.log(longest);