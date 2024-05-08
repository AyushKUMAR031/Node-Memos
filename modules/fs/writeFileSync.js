const fs = require('fs');

const b = fs.writeFileSync('file2.txt', "This is the data2")
console.log(b); //it doesn't return anything so it prints Undefined.
console.log("Finished reading the file.")

//output:
//undefined
//Data written in the file..
