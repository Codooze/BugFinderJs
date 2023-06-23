
function reverseNumber(number) {
    let reversedNumber = '';

    for (let i = 0; i <= number.length; i++) {
        reversedNumber += number.charAt(number.length - i);
    }

    return reversedNumber;
}
console.log(reverseNumber(12345)); // Expected output: '54321'