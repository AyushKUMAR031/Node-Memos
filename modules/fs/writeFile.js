//Asynchronous vs. Synchronous: 
//Similar to readFile(), writeFile() is asynchronous, 
//meaning it doesn't block the execution of subsequent code. 
//On the other hand, writeFileSync() is synchronous, so it will block further execution until the write operation is completed.

const fs = require('fs');

fs.writeFile('file2.txt',"This is the data",()=>{
  console.log("Data written in the file..")
});
console.log("Finished reading the file.")

//output:
//Finished reading the file.
//Data written in the file.

