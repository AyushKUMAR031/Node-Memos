let str = '{"username":"ayush","password":"hello123"}'; // should contain (") enclosed inside (') single quotes

console.log("string: ");
console.log(str);
console.log("object: ");
console.log(JSON.parse(str));