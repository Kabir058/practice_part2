function endsWithWord(sentence, word) {
    if (typeof sentence !== "string" || typeof word !== "string") return "Invalid input";

    return sentence.trim().toLowerCase().endsWith(word.toLowerCase());
}

console.log(endsWithWord("Kabir is learning JavaScript", "JavaScript")); // true
console.log(endsWithWord("He is focused", "python")); // false
