function fancyCapitalize(sentence) {
    if (typeof sentence !== "string") return "Invalid input";

    return sentence.split(" ").map(word => {
        if (word.length < 2) return word.toUpperCase();
        return word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
    }).join(" ");
}

console.log(fancyCapitalize("kabir codes every day"));
// ➤ KabiR CodeS EverY DaY
