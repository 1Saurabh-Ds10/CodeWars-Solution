/*
Description:
Task

Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

a b/c

where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c.

If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).
Examples

    Input: 42/9, expected result: 4 2/3.
    Input: 6/3, expedted result: 2.
    Input: 4/6, expected result: 2/3.
    Input: 0/18891, expected result: 0.
    Input: -10/7, expected result: -1 3/7.
    Inputs 0/0 or 3/0 must raise a zero division error.

Note

Make sure not to modify the input of your function in-place, it is a bad practice.


*/

function mixedFraction(s){
 let [a,b] = s.split('/').map(Number);
  
  function f(a,b) {
    let c = 1, s='';
    a = Math.abs(a);
    b = Math.abs(b);
    while (c <= a) {
      
      if (a%c ==0 && b%c==0) {
        s = (a/c) + '/' + (b/c);
      }
      
      c++;
    }
    return s;
      
  }
  
  if (a===0 && b!== 0)
    return ''+0;
  
  if (a!==0 && b==0)
    throw new Error('ZeroDivisionError');
    
  if (a===0 && b===0)
    throw new Error('ZeroDivisionError');
  
  if (!((a/b)%1)) 
    return ''+a/b;
  
  if (Math.abs(a)<Math.abs(b)) {
    if ((a<0 || b<0) && !(a < 0 && b < 0))
       return '-'+f(a,b);
    else 
       return f(a,b);
  } 
    
  
  let x = '';
  if (a < 0 || b <0) {
    if (a <0 && b < 0) {
      x = '';
    } else {
      x = '-';
    }
    x +=  Math.floor(Math.abs(a)/Math.abs(b)) + ' '; 
  } else {
    x =  Math.floor(a/b) + ' '; 
  }
 
  return x + f(Math.abs(a%b), b);
  
}