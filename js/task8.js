function checkSimilarElemtents(arr) {
    const [str1 , str2] = arr

    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    for (let char of lowerStr2){
        if (!lowerStr1.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log('Задача 8. Ответ:');
console.log(checkSimilarElemtents(["мандарин", "МАНДАрИИИНННННННННН"]))
console.log(checkSimilarElemtents(["Оливье", "aaaaсалатОливье"]))
console.log(checkSimilarElemtents(["", "облепиха"]))
console.log(checkSimilarElemtents(["это мой грибок и я его ем!", "гриб"]))
console.log(checkSimilarElemtents(["111222333444555", "12345"]))