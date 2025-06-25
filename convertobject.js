function toQueryString(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) return "Invalid input";

    return Object.entries(obj).map(([key, value]) => 
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ).join("&");
}

console.log(toQueryString({ name: "Kabir", age: 24 }));
// ➤ name=Kabir&age=24
