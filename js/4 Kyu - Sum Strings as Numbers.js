/*
Description:

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


*/

function sumStrings(a,b) { 
  var a1 = a.split(''),
      a2 = b.split(''),
      sum = [],
      l = 0,
      l1 = a.length,
      l2 = b.length,
      ml = Math.max(l1, l2);
 
 function f(t, arr) {
   for (var s =0; s < t; s++) {
      arr.unshift(0);
    }
 }
 
 (l1 > l2) ? f((l1-l2), a2) : f((l2-l1), a1);

  for (var i=ml-1; i>= 0; i--) {
    var n1 = Number(a1[i]),
        n2 = Number(a2[i]);
    
       
     if ((n1 + n2 + l)> 9) {
          sum.unshift((n1 + n2 + l)%10);
          l = 1;
     } else {
          sum.unshift((n1 + n2 + l));
          l = 0;
     }
            
  }
  
 if (l == 1)
     sum.unshift(l);
   
 
 for (var x=0; x<sum.length; x++) {
   if (sum[x] == 0) 
     sum.shift();
   else 
     break;
   
 }
  return sum.join('');
 
}