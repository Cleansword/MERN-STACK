//working with file and path
const fs=require("fs")
// console.log(fs)
console.log("starting")
// fs.writeFileSync("sagar.txt","hello sagar, are you working with the fole and path?")  //this is not in use

fs.writeFile("sagar.txt","hello sagar, are you working with the fole and path?",()=>{
    console.log("done")
    fs.readFile("sagar.txt",(error,data)=>{  //reading file with callback
        console.log(error,data.toString())
    })
})
console.log("ending")

//appending some data to the file

fs.appendFile("sagar.txt"," off course yes ",(error,data)=>{
    console.log(data)
})
