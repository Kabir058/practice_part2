function removeDuplicateChars(str) {
    if (typeof str !== "string") return "Invalid input";

    let result = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicateChars("kabirrrahman")); // ➤ kabirhman
