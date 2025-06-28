function reverseWords(sentence) {
    if (typeof sentence !== "string") return "Invalid input";

    return sentence.split(" ").map(word =>
        word.split("").reverse().join("")
    ).join(" ");
}

console.log(reverseWords("Kabir is smart")); // ➤ "ribaK si trams"
