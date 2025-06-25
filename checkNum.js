function allNumbers(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    return arr.every(item => typeof item === "number");
}

console.log(allNumbers([1, 2, 3]));        // true
console.log(allNumbers([1, "two", 3]));    // false
