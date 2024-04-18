const fs=require('fs')
const data="what are you doing man!!"


// writeFile is used to create a file and take data in the file.

// fs.writeFile("hey.txt",data,function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


//AppendFile is used add data in the file

// const a=" <br>ki haal chal mere bhai";
// fs.appendFile("hey.txt",a,function(err){
//     if(err) throw err;
//     else console.log("done")
// })


//Rename is used to rename the file 

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) throw err;
//     else console.log("done")

// })

//copy file to another directory

// fs.copyFile("hello.txt","./copy/copy.txt",function(err){
//     if(err) throw err;
//     else console.log("copied")
// })

//uplink is used to delete the file 

// fs.unlink("hello.txt",function(err){
//     if(err) throw err;
//     else console.log("deleted")
// })

fs.unlink("./copy/copy.txt",function(err){
    if(err) throw err;
    else console.log("deleted")
})

