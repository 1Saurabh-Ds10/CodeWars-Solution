/*
Description:
Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.
Example:

"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0


*/

longestPalindrome=function(s){
  var palStr = '', c = 1, l = s.length, t = [], m = 1;
  
  if (!s)
    return 0
  else if(l == 1)
    return 1;
  else {
        
    m = s.split('').map(function(a,i,arr) {
      var temp = 0, sub = s.substring(i+1, l), l1 = sub.length, str = '';
     
       if (sub.indexOf(a) != -1) {
      
        while (temp < l1 ) {
         
          if (sub[temp] == a) {
            
            str = s.substring(i, temp+i+2);
             
             if (str == str.split('').reverse().join(''))
                return str;
          }
                  
          temp++;
        }
      
        
      }
         
    }).reduce(function(a,b) {
      
      if (b) {
        
        if (b.length > a )
         return b.length;
        else
          return a;
          
      }
      else
        return a;
      
      
    }, 1);
   
return (m==l && l != 2) ? 0 : m;
  }
  
}