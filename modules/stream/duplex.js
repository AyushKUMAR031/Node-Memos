const fs = require('fs');
const { Duplex } = require('stream');

// Create a Duplex stream
const duplexStream = new Duplex({
  // Implementing the readable side of the stream
  read(size) {
    // This function is called when the consumer wants to read data from the stream
    // We can push data into the stream using this.push(data)
  },

  // Implementing the writable side of the stream
  write(chunk, encoding, callback) {
    // This function is called when data is written into the stream
    // Here, we simply log the data to the console
    console.log(chunk.toString());
    callback(); // Call the callback to signal that the data has been processed
  }
});

const fileReadStream = fs.createReadStream('input.txt');
fileReadStream.pipe(duplexStream);

duplexStream.on('data', (chunk) => {
  console.log('Duplex Stream Data:', chunk.toString());
});

fileReadStream.on('end', () => {
  console.log('End of File Reached');
});
