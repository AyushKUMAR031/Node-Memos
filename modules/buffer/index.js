//A buffer in Node.js is a temporary storage that allows manipulation and conversion of binary data.


//Converting buffer and String
const Buffer = require('buffer').Buffer;

// Creating a buffer from a string
const buf = Buffer.from('Hello World');

//hexadecimal output
console.log(buf)

//for string output
console.log(buf.toString())



