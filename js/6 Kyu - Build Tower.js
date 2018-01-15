/*

Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

*/

function towerBuilder(nFloors) {
 let tower = [], temp=nFloors - 1;
 if (nFloors == 0)
   return tower;
  for (let i=0; i<nFloors; i++) {
       
    tower.push(' '.repeat(temp) + '*'.repeat((i*2)+1) + ' '.repeat(temp));
    temp--;
  }
  return tower;
   
}