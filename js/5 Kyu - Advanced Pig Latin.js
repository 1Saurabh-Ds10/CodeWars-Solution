/*
Description:

Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"

If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"

This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"

as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"

Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.


*/

function translate(sentence) {
  const v = 'aeiouAEIOU', a= sentence.split(' ');
  
  return a.map((s,i,arr) => {
    
      let c = 0, str='';
      s.split('').forEach((t,j,brr) => {
          
        if (!t.match(/^[0-9a-zA-Z]+$/)) {
          let l1 = str.indexOf(t);
          str = str.substr(0, l1)  + str.slice(l1+1, str.length) + str[l1];
        }
        else {
          
          if (!v.match(t) && !c) {
            str = s.substr(j+1) + s.substr(0, j+1);
            str = str.toLowerCase() + 'ay';
            
          } else if (v.match(t) && !c){
            
            c++;
           if (v.match(t) && j ==0)
             str = s+'way';
           
          }
        
           if (s[0].toUpperCase() === s[0]) 
              str = str[0].toUpperCase() + str.substr(1);
        }
              
        
      });
     
          
      return str;
     
  }).join(' ').trim();
  
    
};