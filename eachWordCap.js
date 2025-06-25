function titleCase(sentence) {
    if (typeof sentence !== "string") return "Invalid input";

    return sentence.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ");
}

console.log(titleCase("kabir is learning JAVASCRIPT")); // ➤ Kabir Is Learning Javascript
