/* 

You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the DECODER, and its companion kata deals with the ENCODER.

Specification
The input signal is represented as a comma-separated string of integers and tokens (sequence descriptors). Tokens must be expanded as follows.

number*count is expanded as number repeated count times
first-last is expanded as a sequence of consecutive numbers starting with first and ending with last. This is true for both ascending and descending order
first-last/interval is similarly expanded, as sequence starting with first, ending with last, where the numbers are separated by interval. Note that interval does NOT have a sign
Examples
"1,3-5,7-11,14,15,17-20" is expanded to [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
"0-4/2, 5, 7-9" is expanded to [0, 2, 4, 5, 7, 8, 9]
"0-4/2, 5, 7-5" is expanded to [0, 2, 4, 5, 7, 6, 5]
"0-4/2, 5, 7-5, 5*4" is expanded to [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]
Input
A string of comma-separated integers and tokens (sequence descriptors)

Output
An array of integers

*/

function uncompress(music) {
 
  const f = (start, end, operator, n) => {
   
    let arr = [], temp = start, count = 0;
    start = Math.abs(start);
    while(start <= end) {
      if (operator == '/') 
        (count%n ==0) ? arr.push((start)) : '';
      
      else if (operator == '*')
          arr.push(temp);
      
      else 
        arr.push(start);
      
      start++;
      count++;
    }
    return arr;
  }
  
 return music.split(',').map((a, i) => {
   let arr = [];
   if (a.includes('-') && !a.includes('*')) {
     
     let nums = a.split('-');
    
     let isRev, nums1 = +nums[0], nums2, n;
      
     if (a.includes('/')) {
        nums2 = +nums[1].split('/')[0];
        n = +nums[1].split('/')[1];
     }
        
     else {
        nums2 = +nums[1];
     }
        
     
     isRev = (nums1 > nums2);
     if (isRev) {
       [nums1, nums2] = [nums2, nums1];
     }
       
  
     if (a.includes('/')) {
      
       arr = f(nums1, nums2, '/', +n);
     } else {
       
      arr = f(nums1, nums2, '');
     }
     
     return (isRev) ? arr.reverse().join(',') : arr.join(',');
     
   }
   if (a.includes('*')) {
      let nums = a.split('*'); 
    
      if (a.includes('/')) {
       
     } else {
       return f(+nums[0], Math.abs(+nums[0]) + +nums[1] -1, '*').join(',');
     }
   }
   
   return a;
   
 }).join(',').split(',').map(a => +a);
 
 
}