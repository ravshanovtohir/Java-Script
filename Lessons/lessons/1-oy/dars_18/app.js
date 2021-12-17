"use strict"
console.clear()
let arr = ["a", "b", "c", 1, 2, 3, 4]
let a = (arr) => arr.map((v) => (typeof v === "string" ? v.toUpperCase() : v))
let result = a(arr)
console.log("->", result);
console.log(!!NaN);