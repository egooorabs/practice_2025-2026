function fac(n) {
  if (n < 0) return null;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log('Задача 1. Ответ')
console.log(fac(10))