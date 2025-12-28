function cutText(str, maxLength) {
    if (str.length > maxLength) {
        if (maxLength >= 3) {
            return str.slice(0, maxLength - 3) + '...';
        }
        else {
            return str.slice(0, maxLength) + '...';
        }
    }
    else {
        return str;
    }
}

console.log('Задача 4. Ответ:');
console.log(cutText('дезоксирибонуклеиновая', 6));
console.log(cutText('на пенёк сел, должен был косарь отдать', 100));