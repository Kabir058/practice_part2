function sumDigits(num) {
    if (typeof num !== "number" || num < 0) return "Invalid input";

    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumDigits(12345)); // ➤ 15
