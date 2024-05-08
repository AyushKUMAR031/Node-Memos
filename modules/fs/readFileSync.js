//Unlike readFile, which is asynchronous, readFileSync operates synchronously. 
//This means it will block further execution of code until it completes reading the file.

const data = fs.readFileSync('file.txt')
console.log(data);//it will print the data in buffer format.
//<Buffer 54 68 69 73 20 69 73 20 61 20 74 65 78 74 20 66 69 6c 65 2e>
console.log("Finished reading the file.")

//output:
//<Buffer 54 68 69 73 20 69 73 20 61 20 74 65 78 74 20 66 69 6c 65 2e>
//Finished reading the file.


//to get the value in readable format:
const data = fs.readFileSync('file.txt')
console.log(data.toString()); //with toString() it is converted into string type
console.log("Finished reading the file.")

//output:
//This is a text file.
//Finished reading the file.