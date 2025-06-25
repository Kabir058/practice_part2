function isHexColor(code) {
    if (typeof code !== "string") return "Invalid input";

    return /^#([0-9A-F]{3}){1,2}$/i.test(code);
}

console.log(isHexColor("#f06"));        // true
console.log(isHexColor("#ff0066"));     // true
console.log(isHexColor("ff0066"));      // false
