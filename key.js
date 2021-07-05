var keythereum = require("keythereum");

var datadir = "D:\\workspace\\precompiles\\bsc_private_node\\node1";
var address= "691d626fd7b80442aedc376f456cbcf52e8cbc6e";
const password = "admin123";
var keyObject = keythereum.importFromFile(address, datadir);
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString('hex'));
