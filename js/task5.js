function capitalLetter(str) {
    const lowerCaseStr = str.toLowerCase();

    const words = lowerCaseStr.split(' ');

    const TextStr = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return '';
    });

    return TextStr.join(' ');
}

console.log('Задача 5. Ответ:');
console.log(capitalLetter('это мой гриб и я его ем!'));
console.log(capitalLetter('пОЧЕМУ МИР НАСТОЛЬКО ЖЕСТОК?'));
console.log(capitalLetter('пРоСтО тАк'));