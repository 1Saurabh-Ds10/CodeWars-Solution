/*

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

*/

function findMissingLetter(arr) {
  function getChars(code) {
    return [].concat.apply([], Array(26)).map((_, i) => String.fromCharCode(i+code));
  }

  let chars = (!/[a-z]/.exec(arr[0])) ? getChars(65) : getChars(97);
 
  for (let i = chars.indexOf(arr[0]), l = 26, c = 0; i<l; i++, c++) {
    if (arr[c] == chars[i])
      continue
    else 
      return chars[i];  
  }
  
}