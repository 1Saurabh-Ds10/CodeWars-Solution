/*

Write

function deepSort(arr, asc)
that, given an array of any depth, sorts it in the order given by asc.
When asc === true then sort ascending, otherwise descending.

For example:

deepSort([1, [2, 4], 3, 8]) === [8,[4,2],3,1]
// When a number is compared to an array or an array to another array,
// you need to get the sum of the array. In this case [2,4] === 6. 6 is the second highest
// value in the entire array and thus [2,4] is second when sorting descending. The array [2,4]
// is also sorted based on asc argument, hence [4,2]

deepSort([1, 2, 3, 4, [-5,-4]], true)) === [[-5,-4],1,2,3,4]
deepSort([1, [2, 3, [4, 5, [9, 11], 1, 8], 6], [20, 7, 8]], false) === [[[[11, 9], 8, 5, 4, 1], 6, 3, 2], [20, 8, 7], 1]
deepSort([2, [1, 1], [1, 1], 2], true) === [2, [1, 1], [1, 1], 2] // already sorted, this is equivalent to [2, 2, 2, 2]

*/

function deepSort(arr, asc) {
  

  
  const flatArr = (elems) => elems.reduce((a,b) => a.concat(Array.isArray(b) ? flatArr(b) : b), []);
  
  const sumArr = (arrE) => flatArr(arrE).reduce((sum, ele) => sum + ele, 0);
 
  function sortArr(arrs) {
    
    return arrs.sort((a, b) => {
      let tempA = a, tempB = b;
      if (Array.isArray(a)) {
         sortArr(a);
        tempA = sumArr(a);
      }
      
      if (Array.isArray(b)) {
         sortArr(b);
        tempB = sumArr(b);
      }
      
     return (!asc) ? (tempB - tempA) : (tempA - tempB);
     
      
    });
    
  }
  
  return sortArr(arr);
  
  
}