//Importing stream module
const fs = require('fs');
const stream = require('stream');

//we have 4 types of stream:
// - writables
// - readable
// - duplex
// - transform

//Creating Readable Stream
const reader = fs.createReadStream('input.txt',"utf-8"); //utf-8 for encoding to strings

//Creating Writable Stream
const writer = fs.createWriteStream('output.txt');

//Readable
console.log("-------\nData being read from input.txt:\n-------");

reader.on('data',(chunk)=>{
  console.log(chunk);
  writer.write(chunk); //simultaneously writing to output.txt
});
reader.on('end',()=>{
  console.log("Streaming Ended");
  writer.end();
});


//handling err events
reader.on('error', (err) => {
  console.error('Error reading file:', err);
});

writer.on('error', (err) => {
  console.error('Error writing to file:', err);
});


//writing is done
writer.on('finish', () =>{
  console.log("------\nData written to output.txt\n------");
});