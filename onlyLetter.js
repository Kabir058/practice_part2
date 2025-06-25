function isAlpha(str) {
    if (typeof str !== "string") return "Invalid input";

    return /^[a-zA-Z]+$/.test(str);
}

console.log(isAlpha("Kabir"));     // ➤ true
console.log(isAlpha("Kabir123"));  // ➤ false
