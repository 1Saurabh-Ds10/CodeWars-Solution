/*

For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.





*/

function parseMolecule(formula) {
  
  const op = {};
  
  const checkCaps = (val) => (/[A-Z]/.test(val));
  
  const checkNum = (val) => (/[0-9]/.test(val));
  
  const checkLower = (val) => (/[a-z]/.test(val));
  
  const checkOpnSpc = (val) => (val === '(' || val === '[' || val === '{');
  
  const checkClsSpc = (val) => (val === ')' || val === ']' || val === '}');
  
  const findMul = (brac, a, i, arr) => checkNum(arr[arr.indexOf(brac, i) + 1]) ? +arr[arr.indexOf(brac, i) + 1] : 1;
  
  const mulStack = (res) => {
     let num = 1;
       
    if(res.stack.length > 0) {
      res.stack.forEach((a, i, arr) => {
        num *= a.mul; 
      });
    }
    
    return num;
    
  }
  
  const addToCache = (cache, a, i, arr) => {
        if(checkCaps(a) && checkNum(arr[i+1]) && checkNum(arr[i+2])) {   // Caps with 2 digits number
         
          cache[a] = (cache[a]) ? cache[a] + +(arr[i+1] + arr[i+2]) : +(arr[i+1] + arr[i+2]);
         
     
        
           // Only caps element and next Caps
       } else  if (checkCaps(a) && checkNum(arr[i+1])) { // Only Caps element and next number
     cache[a] = (cache[a]) ? cache[a] + +arr[i+1] : +arr[i+1];
     
       } else  if (checkCaps(a) && checkLower(arr[i+1]) && checkNum(arr[i+2]) && checkNum(arr[i+3])) { // Only Caps element and next number
     let ele = a + arr[i+1]; 
      cache[ele] = (cache[ele]) ? cache[ele] + +(arr[i+1] + arr[i+2]) : +(arr[i+1] + arr[i+2]);
         
         
      // Only caps element and next Caps
    } else if (checkCaps(a) && (checkCaps(arr[i+1]) || checkOpnSpc(arr[i+1]) || checkClsSpc(arr[i+1]))  ) {
       cache[a] = (cache[a]) ? cache[a] + 1 : 1;
      
      
      // Caps & lower caps in between
    } else if (checkCaps(a) && ((i + 1) <= (arr.length - 1)) && checkLower(arr[i+1]) && ((i + 2) <= (arr.length - 1)) && checkNum(arr[i+2])) {
      let ele = a + arr[i+1]; 
      cache[ele] = (cache[ele]) ? cache[ele] + +arr[i+2] : +arr[i+2];
      
    }
       
    else if (checkCaps(a) && ((i + 1) <= (arr.length - 1)) && checkLower(arr[i+1]) && ((i + 2) <= (arr.length - 1)) && (checkCaps(arr[i+2]) || checkOpnSpc(arr[i+2]) || checkClsSpc(arr[i+2]))) {
      let ele = a + arr[i+1]; 
      cache[ele] = (cache[ele]) ? cache[ele] + 1 : 1;
      
    }
    else if (checkCaps(a) && i === (arr.length - 1)) { // only Caps element at end
       cache[a] = (cache[a]) ? cache[a] + 1 : 1;
      
    } else if (checkLower(a) && i === (arr.length - 1)) { // element made up of Caps & lower caps at the end
      let ele = arr[i-1] + a;
      cache[ele] = (cache[ele]) ? cache[ele] + 1 : 1;
    }
   
    
    
  };
  
  const mulAndAddToMain = (cache, num) => {
    
    for (let c in cache) {
      if (op[c]) {
        op[c] = op[c] + (cache[c] * num);
      } else {
        op[c] = (cache[c] * num);
      }
    }
    
    
  }
  
  
 
  
  formula.split('').reduce((res, a, i, arr) => {
    
      
    
   if (!checkOpnSpc(a) && !checkClsSpc(a) && (res.stack[res.stack.length -1] && res.stack[res.stack.length -1].brac === 'round')) {
       addToCache(res.round, a, i, arr);
     
   } else if (!checkOpnSpc(a) && !checkClsSpc(a) && (res.stack[res.stack.length -1] && res.stack[res.stack.length -1].brac === 'square')) {
       addToCache(res.square, a, i, arr);
     
   }else if (!checkOpnSpc(a) && !checkClsSpc(a)  && (res.stack[res.stack.length -1] && res.stack[res.stack.length -1].brac === 'curly')) {
   
     addToCache(res.curly, a, i, arr);
     
   }else {
      addToCache(op, a, i, arr);
     
   }  
    
   
    
    
    if (a === '(') {
      res.round = {};
     
    
      res.stack.push({
        brac: 'round',
        mul: findMul(')', a, i, arr)
      });
    }
     if (a === '[') {
      res.square = {};
      res.stack.push({
        brac: 'square',
        mul: findMul(']', a, i, arr)
      });
    }
    if (a === '{') {
      res.curly = {};
      res.stack.push({
        brac: 'curly',
        mul: findMul('}', a, i, arr)
      });
    }
    
    if (a === ')') {
    
      if (checkNum(arr[i+1])) {
            
        mulAndAddToMain(res.round, mulStack(res));
      } else {
        mulAndAddToMain(res.round, 1);
        
      }
      
      
      res.round = false;
      res.stack.pop();
    }
     if (a === ']') {
       
       if (checkNum(arr[i+1])) {
      
        
        mulAndAddToMain(res.square,  mulStack(res));
      } else {
        mulAndAddToMain(res.square, 1);
        
      }
      
       
      res.square = false;
      res.stack.pop();
     
    }
    if (a === '}') {
       
      if (checkNum(arr[i+1])) {
       
        
        mulAndAddToMain(res.curly,  mulStack(res));
      } else {
        mulAndAddToMain(res.curly, 1);
        
      }
      
      
      res.curly = false;
      res.stack.pop();
    }
    
    
    
    
     
    return res;

    
  }, {
    round: false,
    square: false,
    curly: false,
    stack: []
  });
  
  return op;
  
}