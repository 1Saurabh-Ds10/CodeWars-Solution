/*
Description:

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


*/

function findOdd(A) {
 let l = A.length, n=0;
 A.map((a,i,arr) => {
  let count = 0;
 
  for (let i =0; i<l; i++) {
    if (arr[i] == a) 
      count++;
  }
 if (count%2 == 1) 
    n = a;
   
 });
  return n;
}