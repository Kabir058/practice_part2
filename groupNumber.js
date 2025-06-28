function groupEvenOdd(numbers) {
    if (!Array.isArray(numbers)) return "Invalid input";

    let result = { even: [], odd: [] };

    for (let num of numbers) {
        if (num % 2 === 0) result.even.push(num);
        else result.odd.push(num);
    }

    return result;
}

console.log(groupEvenOdd([1, 2, 3, 4, 5, 6]));
// ➤ { even: [2, 4, 6], odd: [1, 3, 5] }
