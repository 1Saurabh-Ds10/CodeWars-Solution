/*

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']



*/

const solution = (str, c = 0, t = '', n = str.length, isOdd = (x) => x%2 === 1) => 

 str.split('').reduce((op, s, i) => {
    t+=s;
    (isOdd(i)) ? op.push(t) && (t ='') : ''; 
    
    (isOdd(n) && i === n -1) ? op.push(s+'_') : '';
   
     return op;
  },[]);