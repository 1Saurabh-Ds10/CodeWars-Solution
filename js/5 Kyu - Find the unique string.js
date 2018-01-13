/*

There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

*/


function findUniq(arr) {
  
   let ds = {}, dsa ={};
  for (let i=0; i<arr.length; i++) {
     
    let str = arr[i];
   // str = str.replace(' ', '');
    if (str.length >0) {
      str = str.toLowerCase().split('').sort().join('').trim().split('').filter((i, p, s) => s.indexOf(i) == p).join('');
      if (/^(.)\1+$/.test(str)) 
         str = str[0];
      
      if (!(str in ds)) {
        ds[str] = 1;
         dsa[str] = arr[i];
      } else {
        ds[str]++;
      }
    
      if (Object.keys(ds).length > 1 && i > 1) {
        
        for (let o in ds) {
          if (ds[o] == 1) {
            return dsa[o];
          }
        }
      } 
    
     
      
    }
    
  }
  
  if (Object.keys(ds).length == 1) {
        
        for (let o in ds) {
          if (ds[o] == 1) {
            return dsa[o];
          }
        }
      } 
  
  
}