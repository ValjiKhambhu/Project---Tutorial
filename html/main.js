
console.log("hello world")

//const fs=require("fs")
const fs=require("fs/promises")

//console.log(fs)

console.log("starting")

//fs.writeFileSync("harry.txt","harry is a good boy")
fs.writeFile("harry2.txt","harry is a good boy",()=>{
    console.log("done")
    fs.readFile("harry.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

console.log("ending")