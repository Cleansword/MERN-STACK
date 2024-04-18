import fs from "fs/promises"
let a=await fs.readFile("sagar.txt")
console.log(a.toString())

let b=await fs.writeFile("sagar.txt"," \nthis is an amazing source to learn backend")