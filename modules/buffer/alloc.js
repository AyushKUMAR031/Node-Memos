const fs = require('fs');

//Setting Buffer size
const buffer = Buffer.alloc(10);

//reading data from file
fs.readFile('demo.txt', (err, data) => {
  if (err){
    console.error('Error reading file:', err);
    return;
  }

  data.copy(buffer); //storing data in buffer

  //data in buffer
  console.log('Data read from file and stored in buffer:');
  console.log(buffer.toString());
});
