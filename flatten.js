function flattenOnce(nestedArray) {
    if (!Array.isArray(nestedArray)) return "Invalid input";

    return [].concat(...nestedArray);
}

console.log(flattenOnce([1, [2, 3], [4, 5]]));
// ➤ [1, 2, 3, 4, 5]
