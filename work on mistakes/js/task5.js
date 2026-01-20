function isPalindrome(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log("Задача 5. Ответ:");
console.log(isPalindrome("abba"));
console.log(isPalindrome("AbBa"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"))
