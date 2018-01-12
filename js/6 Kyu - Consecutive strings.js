/*
Description:

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


*/

function longestConsec(strarr, k) {
    let l = strarr.length, s='', m=0;
    if (k <=0 || l ==  0 || k > l)
      return "";
      
   return strarr.reduce((a,b,i,arr) => {
     let t = 0, tmp =0, ts=''; 
    
     while (t < k) {
       if (arr[i+t]) {
          tmp+=arr[i+t].length;
          ts += arr[i+t];
       }
          
       if (m < tmp) {
         m = tmp;
         a = ts;
       }
       t++;
     }
        
    return a; 
     
    },'');
     
}