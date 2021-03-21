/*

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [8, 64]


*/

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    
  const commands = data.split(''), op:number[] = [];
  
  let val = 0;
  for (let i = 0, n = commands.length; i<n; i++) {
    
    switch (commands[i]) {
      case 'i' : {
        ++val;
        break;
      }
      
      case 's' : {
        val = Math.pow(val, 2)
        break;
      }
        
      case 'd' : {
        --val;
        break;
      }
        
      case 'o' : {
        op.push(val);
        
        break;
      }   
        
    }
    
  }
  
  return op;
}