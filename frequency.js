function charFrequency(str) {
    if (typeof str !== "string") return "Invalid input";

    let freq = {};
    for (let char of str.toLowerCase()) {
        if (char === " ") continue;
        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
}

console.log(charFrequency("Kabir Khan"));
// ➤ { k: 1, a: 2, b: 1, i: 1, r: 1, h: 1, n: 1 }
