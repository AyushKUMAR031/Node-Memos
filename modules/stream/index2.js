//Doing the same using pipe stream or pipe method.
const fs = require('fs');
const stream = require('stream');


const reader = fs.createReadStream('input.txt');

const writer = fs.createWriteStream('out.txt');

// Pipe the data from the readable stream to the writable stream
reader.pipe(writer);


writer.on('finish', () => {
  console.log('Data written to out.txt');
});

//handling err events
writer.on('error', (err) => {
  console.error('Error writing to file:', err);
});
