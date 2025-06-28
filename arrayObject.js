function arrayToObject(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    let obj = {};
    arr.forEach((item, index) => {
        obj[index] = item;
    });

    return obj;
}

console.log(arrayToObject(["apple", "banana", "cherry"]));
// ➤ { 0: "apple", 1: "banana", 2: "cherry" }
