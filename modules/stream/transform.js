//A Transform stream in Node.js is a "special type of duplex stream" that allows you to modify or transform the data as it flows from the readable side to the writable side.

const fs = require('fs');
const { Transform } = require('stream');

//Readable --> Transform --> Writable
const reader = fs.createReadStream('input.txt');
const writer = fs.createWriteStream('demo.txt');
const reverse = new Transform({
  transform(chunk, encoding, callback){
    callback(null,chunk.toString().split('').reverse().join(''));
  }
});

reader.pipe(reverse).pipe(writer);


writer.on('finish', () => {
  console.log('Transformed data written to demo.txt');
});