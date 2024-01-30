var readlineSync = require('readline-sync');
var length = readlineSync.question('String Length? [1-100] ');

if (length === '') {
    return;
}

length = parseInt(length, 10);

if (length <= 0) {
    console.error('Length must be bigger than zero!');
    return;
}
else if (length > 100) {
    console.error('Length must be equal or less than 100!');
    return;
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

var result = randomString(length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log('Result\n' + result);