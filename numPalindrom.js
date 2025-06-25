function longestWord(sentence) {
    if (typeof sentence !== "string") return "Invalid input";

    let words = sentence.split(" ");
    return words.reduce((longest, word) => 
        word.length > longest.length ? word : longest, ""
    );
}

console.log(longestWord("Kabir writes clean JavaScript daily")); // ➤ JavaScript
