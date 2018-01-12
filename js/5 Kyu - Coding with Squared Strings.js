/*
Description:

A squared string has n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop" is a squared string of size 4.

We will use squared strings to code and decode texts. To make things easier we suppose that our original text doesn't include the character '\n'.
Coding

Input:

    a text t of length l.
    Consider the smallest integer n such that n * n be greater or equal to l.
    Complete t with the char of ascii code 11 (we suppose that this char is not in our original text) until the length of t is n * n.
    From now on we can transform the new t in a squared string s of size n by inserting '\n' where needed.
    Apply a clockwise rotation of 90 degrees to s: that's it for the coding part.

Decoding

Input:

    a squared string s resulting from the coding
    Apply a counter-clockwise rotation of 90 degrees to s
    Do some cleaning to have the original text t

You can see clockwise rotation of 90 degrees: http://www.codewars.com/kata/56dbeec613c2f63be4000be6 You can see counter-clockwise rotation of 90 degrees: http://www.codewars.com/kata/56dbf59b0a10feb08c000227

Example:

t = "I.was.going.fishing.that.morning.at.ten.o'clock"

code(t) -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"

decode(code(t)) == "I.was.going.fishing.that.morning.at.ten.o'clock"

(Dots indicate spaces since they are quite invisible).
Note:

Don't use this coding to keep your secrets:-)


*/

function diag2Sym(strArr) {
    return strArr.reverse().map((s,i,arr) => {
      let st = '', l = arr.length, t = 0;
     
      while (t < l) {
        st+=arr[t][l-i-1];
        t++;
      }
      return st;
    });
}
function rot90Counter(strArr) {
    return diag2Sym(strArr).map(s=>s.split('').reverse().join(''));
}

function rot90Clock(strArr) {
   return diag1Sym(strArr).map(s=>s.split('').reverse().join(''));
}
function diag1Sym(strArr) {
    
    return strArr.map((s,i,arr) => {
      let st = '', l = 0;
     
      while (l < arr.length) {
        st+=arr[l][i];
        l++;
      }
      return st;
    });
}
function code(s) {
    if (!s)
      return "";
    let l = s.length, sr = Math.sqrt(l), n = (Math.floor(sr) * Math.floor(sr) == l) ? sr : Math.floor(sr) + 1, c = (n*n)-l;
    
    if (c) {
       s+=String.fromCharCode(11).repeat(c);
       l = s.length;
    }
    
    let strArr = [];
    for (let i=0; i<l; i++) {
      
      if (i%n == 0) {
        
          if (i != l-n)
             strArr.push(s.substr(i,n) + '\n');
          else 
            strArr.push(s.substr(i,n));
       
      }
      
    }
   
   return rot90Clock(strArr.join('').split('\n')).join('\n');
}

function decode(s) {
     if (!s)
      return "";
      
     return rot90Counter(s.split('\n')).join('').replace(new RegExp(String.fromCharCode(11), 'g'), ''); 
  
}