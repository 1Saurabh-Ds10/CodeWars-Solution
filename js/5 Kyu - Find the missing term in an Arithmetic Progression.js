/*

Description:

An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing (list) , list will always be atleast 3 numbers. The missing term will never be the first or last one.

Example :

findMissing([1,3,5,9,11]) == 7

PS: This is a sample question of the facebook engeneer challange on interviewstreet. I found it quite fun to solve on paper using math , derive the algo that way. Have fun!

*/

var findMissing = function (list) {  
  let n = list.length, d={}, r = 0, dif = 0, v=0;

  list.forEach((a,i,arr) => {
     let diff = 0;
     if (i!=n-1) {
        diff = arr[i+1] - arr[i];
      
        if (d[diff]) {
       
         d[diff].count +=1; 
         dif = diff; 
          
        } else {
         
          d[diff] = {count:1, index:i};
        }
        
     } 
     
  });
  
  if (n == 3) {
  let f = 0;
  if (list[0] < 0 && list[1] < 0 && list[2] <0) {
    list[0] = Math.abs(list[0]);
    list[1] = Math.abs(list[1]);
    list[2] = Math.abs(list[2]);
    f = 1;
  }
  
  let diff1 = list[1] - list[0],
      diff2 = list[2] - list[1];
  
  if (diff1 > 0 && diff2 > 0) {
     if (diff1 > diff2)
      v = list[0] + diff2;
    else 
      v = list[1] + diff1;
    
    v = (!f) ? v : v * -1;
  
 } else {
     if (diff1 > diff2)
      v = list[0] - diff1;
    else if (diff1 < diff2)
      v = list[1] - diff2;
    
  }
  
  
    
  } else {
    
      Object.keys(d).forEach((k) => {
  
      if (d[k].count == 1){
       
        v = list[d[k].index] + dif;
      }
   
  });
  }
   

  return v;
}