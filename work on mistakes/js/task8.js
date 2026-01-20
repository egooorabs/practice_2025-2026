function repeatChars(str, k) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < k; j++) {
      result = result + str[i];
    }
  }

  return result;
}

console.log("Задача 8. Ответ:");
console.log(repeatChars("abc", 3));
console.log(repeatChars("Hi!", 2));
console.log(repeatChars("x", 5));
