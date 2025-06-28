function findCommon(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";

    return arr1.filter(item => arr2.includes(item));
}

console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6]));
// ➤ [3, 4]
