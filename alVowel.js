function hasAllVowels(str) {
    if (typeof str !== "string") return "Invalid input";

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();

    return vowels.every(vowel => str.includes(vowel));
}

console.log(hasAllVowels("Education")); // true
console.log(hasAllVowels("Kabir"));     // false
