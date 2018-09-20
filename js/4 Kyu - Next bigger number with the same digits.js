/*

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1


*/

function nextBigger(n) {
  let str = String(n);
  let arr = str.split('');
  let op = -1;
  const l = arr.length;
  
  if ((+n === +str.split('').sort((a,b) => b-a).join('')) || (arr.every( val => val === arr[0])))
    return op;
  
  
  if (arr[l-1] > arr[l-2]) {
    [arr[l-1], arr[l-2]] = [arr[l-2], arr[l-1]];
    return +arr.join('');
  }
  
   let finalOP;
   for (let i = l -1; i >= 0; i--) {
    
    
     
      if (arr[i-1] < arr[i]) {
        let opArr = arr.slice(0, i-1);
  
        let tempArr = arr.slice(i, l);
        
        let dig = arr[i-1];
        
        
        tempArr.sort((a,b) => a-b);
     
        let minDig;
        for (let i=0, tl = tempArr.length; i<tl; i++) {
          if (tempArr[i] > dig) {
            minDig = tempArr[i];
            break;
          }
            
        }
       
        
        
        let minIndex = tempArr.indexOf(String(minDig));
       
        opArr.push(tempArr[minIndex]);
        
              
        tempArr.splice(minIndex, 1);
           
        tempArr.push(dig);
      
        tempArr.sort((a,b) => a-b);
             
        finalOP = +[...opArr, ...tempArr].join('');
       
       if ((+arr.join('') < finalOP))
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