//Here's a basic example of how you might use it:
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

//'utf8' is the encoding used to interpret the file's contents. It's typically used for text files.
//it works on non blocking mode

fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log(err, data)
})

console.log("Finished reading the file.")

//output:
//Finished reading the file.
//null This is a text file.