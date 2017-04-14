function reverseString(str) {
  var reversed = "";
  for (var i = 0; i < str.length; i++) {
    reversed += str[str.length - i];
  }
  return reversed;
}
module.exports.reverseString = reverseString;
