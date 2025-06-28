function isUniqueArray(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    let set = new Set(arr);
    return set.size === arr.length;
}

console.log(isUniqueArray([1, 2, 3, 4]));   // true
console.log(isUniqueArray([1, 2, 2, 4]));   // false
