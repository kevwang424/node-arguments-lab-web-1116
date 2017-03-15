// code solution here
var args = process.argv.splice(2)

var lengthOfPasswords = args[0]
var numOfPasswords = args[1]

function generatePassword(len) {
    var length = len
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
}

var count = 1
while (count <= numOfPasswords){
  generatePassword(lengthOfPasswords)
  count++
}
