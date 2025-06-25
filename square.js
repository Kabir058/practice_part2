function isPerfectSquare(num) {
    if (typeof num !== "number" || num < 0) return false;

    let root = Math.sqrt(num);
    return root === Math.floor(root);
}

console.log(isPerfectSquare(25));  // true
console.log(isPerfectSquare(20));  // false
