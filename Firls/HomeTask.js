let title = "It time to learn JS";

function reverseTitle(title) {
    return title.split('').reverse().join('');
}

console.log(reverseTitle(title));

function isPolindrom(str) {

    reversed = str.split('').reverse().join('');
    if (str == reversed) {
        return true;
    }
    return false;
}

console.log(isPolindrom("aba"));
console.log(isPolindrom("abcc"));
console.log(isPolindrom("madam"));

let arr = [1, 2, 3, 4, 5, 6];

function getPairedNumber(arr) {

    let paired = arr.filter(num => num % 2 === 0);
    return paired.reverse();
}

console.log(getPairedNumber(arr));