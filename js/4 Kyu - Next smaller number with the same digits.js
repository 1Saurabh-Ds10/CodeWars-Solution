/*

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

*/

function nextSmaller(n) {
  let str = String(n);
  let arr = str.split('');
  let op = -1;
  const l = arr.length;
  
  if ((+n === +str.split('').sort((a,b) => a-b).join('')) || (arr.every( val => val === arr[0])))
    return op;
  
  
  if (arr[l-1] < arr[l-2]) {
    [arr[l-1], arr[l-2]] = [arr[l-2], arr[l-1]];
    return +arr.join('');
  }
  
   let finalOP;
   for (let i = l -1; i >= 0; i--) {
    
    
     
      if (arr[i-1] > arr[i]) {
        let opArr = arr.slice(0, i-1);

        let tempArr = arr.slice(i, l);
        
        let dig = arr[i-1];
        
        
        tempArr.sort((a,b) => b-a);
      
        let minDig;
        for (let i=0, tl = tempArr.length; i<tl; i++) {
          if (tempArr[i] < dig) {
            minDig = tempArr[i];
            break;
          }
            
        }
       
        
        
        let minIndex = tempArr.indexOf(String(minDig));
       
        opArr.push(tempArr[minIndex]);
              
        tempArr.splice(minIndex, 1);
           
        tempArr.push(dig);
      
        tempArr.sort((a,b) => b-a);
             
        finalOP = +[...opArr, ...tempArr].join('');
       
       if ((+arr.join('') > finalOP))
         return (String(finalOP).length < l) ? op : finalOP;
      
       
        break;
        
      }
     
     
   }
  

  
  if (arr[0] === 0)
    return op;
  
  if (String(finalOP).length < l)
    return op;
  
    
  
  return op;
    
  
}