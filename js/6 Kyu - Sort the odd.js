/*

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]



*/

function sortArray(arr) {
  
  if (!arr || arr.length === 0)
    return [];
  
   for (let i = 0, l = arr.length; i < l; i++) {
    
    if (arr[i]%2 === 1) {
      let smallest = arr[i];
      let pos = i;
      let temp = 0;
      for (let j = i+1; j < l; j++) {
     
       if (arr[j]%2 === 1) {
         if (arr[j] < smallest) {
           pos = j;
           smallest = arr[j]; 
          }
         
       }
                
      }
      temp = arr[i];
      arr[i] = smallest;
      arr[pos] = temp;
     
    } 
    
  }
return arr;
    
  
}



//Clever solution (posted by other users)

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}