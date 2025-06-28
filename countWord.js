function countWords(sentence) {
    if (typeof sentence !== "string") return "Invalid input";

    let words = sentence.trim().split(/\s+/); // split by space
    return words.length;
}

console.log(countWords("Kabir is learning JavaScript every day!"));
// ➤ 6
