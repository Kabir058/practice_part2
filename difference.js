function maxDifference(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return "Invalid input";

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
}

console.log(maxDifference([10, 2, 33, 5, 17])); // ➤ 31
