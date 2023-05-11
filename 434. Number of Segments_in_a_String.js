let countSegments = s => {
    return s.split(" ").filter(word => word !== "").length
};
let s = "Hello, my name is John"
// let s ="Hello"
// let s =""

console.log(countSegments(s));