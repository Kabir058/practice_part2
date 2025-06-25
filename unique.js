function mergeUnique(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";

    return [...new Set([...arr1, ...arr2])];
}

console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // ➤ [1, 2, 3, 4, 5]
