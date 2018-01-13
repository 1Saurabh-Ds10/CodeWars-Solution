/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findUniq(arr) {
  
   let ds = {};
  for (let i=0; i<arr.length; i++) {
    if (!(arr[i] in ds)) {
      ds[arr[i]] = 1;
    } else {
      ds[arr[i]]++;
    }
   
    if (Object.keys(ds).length > 1 && i > 1) {
      for (let o in ds) {
        if (ds[o] == 1) {
          return +o;
        }
      }
    }
  
  }
 
  
  
}