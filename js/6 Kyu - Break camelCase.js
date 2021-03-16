
/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"

*/

function solution(str) {
    
  const isUpperCase = (c) => (/[A-Z]/.test(c));
  let res ='';
  for (let i =0, n= str.length; i < n; i++) {
    if (isUpperCase(str[i])) {
      res+=(' '+str[i]);
    } else {
      res+=str[i];
    }
    
  }
  return res;
    
}