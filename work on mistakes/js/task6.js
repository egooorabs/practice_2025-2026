function getAdultsNames(arr) {
  let names = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      names.push(arr[i].name);
    }
  }

  return names;
}


let people = [
  { name: "Вася", age: 17 },
  { name: "Петя", age: 20 },
  { name: "Маша", age: 18 },
  { name: "Оля", age: 25 }
];

console.log("Задача 6. Ответ:");
console.log(getAdultsNames(people));

