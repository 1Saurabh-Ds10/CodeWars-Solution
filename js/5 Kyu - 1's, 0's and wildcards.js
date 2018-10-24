/*

You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

Return an array containing all the possibilities you can reach substituing the ? for a value.

Examples
'101?' -> ['1010', '1011']

'1?1?' -> ['1010', '1110', '1011', '1111']


Notes:

Don't worry about sorting the output.
Your string will never be empty.


*/


const possibilities = (str, strArr = str.split('')) => {
  const op = [];
  
  let n = Math.pow(2, strArr.reduce((count, s) => ((s === '?' && ++count), count), 0)) - 1;
  let temp = n;
  
  const pad = (binStr, rep) => {
    
    const reqLen = Math.log(rep + 1)/Math.log(2);
 
    let binLen = binStr.length;
    if (binLen < reqLen) {
      return '0'.repeat(reqLen - binLen) + binStr;
    } else {
     return binStr;
    }
    
  }; 

  while (temp >= 0) {
    let bin = (temp).toString(2), count = 0;
    bin = pad(String(bin), n);
  
    let num = strArr.reduce((opStr, s) => {
      if (s === '?') {
        opStr = opStr + (bin[count] ? bin[count] : 0);
        count++;
      } else {
        opStr = opStr + s;
      }
      
     return opStr;
    }, '');
    
    op.push(num);
   
    temp--;
  }
  
  return op;
  
};

