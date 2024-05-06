const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`system uptime is: ${os.uptime()} seconds`)

// info about current operating system
const currentOS = {
  name: os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
}

console.log(currentOS)

console.log(os.freemem()); // method for checking free memory available.
console.log(os.homedir()); // getting to know about the home directory.
console.log(os.hostname()); //to know the host of the computer.
console.log(os.platform()); //get to know th OS platform.
console.log(os.release()); //get to know which version of OS is there.
console.log(os.type()); //get to know the type of OS.
console.log(os.arch()); //get to know the architecture of the OS.