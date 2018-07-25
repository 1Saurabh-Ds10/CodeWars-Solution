
/*

Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same



*/

const countSmileys = (arr) => {
  const eyes = {
    ':' : 1,
    ';': 1 
  };
  
  const noses = {
    '-' : 1,
    '~' : 1
  };
  
  const mouth = {
    ')' : 1,
    'D' : 1
    
  };
  
  return arr.reduce((count, val, i) => {
    
    if (eyes[val[0]]) {
      if (noses[val[1]]) {
        if (mouth[val[2]] && val.length === 3) {
          count++;
        }
        
      } else {
        if (mouth[val[1]] && val.length === 2) {
          count++;
        }
        
      }
    }
    
    return count;
    
  }, 0);

}
