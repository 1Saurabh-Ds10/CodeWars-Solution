/*
Description:

Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

*/

function dashatize(num) {
 let l = (!num) ? 0 : (''+Math.abs(num)).length;
 return (!num) ? ''+num : (''+Math.abs(num)).split('').map((n, i, arr) => {
    if (l == 1)
      return ''+Math.abs(num);
    
   if (n%2 == 1) {
       
       if (i != l-1 && i != 0)
         return `-${n}-`;
       else
         if (i == l-1)
           return `-${n}`;
         else if (i == 0)
           return `${n}-`;
         else
           return n;
        
   } else {
     return n;
   }
      
 }).join('').replace(/--/g, '-');
 
};