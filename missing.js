function findMissing(arr, n) {
    if (!Array.isArray(arr) || typeof n !== "number") return "Invalid input";

    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return total - sum;
}

console.log(findMissing([1, 2, 4, 5], 5)); // ➤ 3
