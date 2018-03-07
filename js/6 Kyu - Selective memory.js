/*
A mad sociopath scientist just came out with a brilliant invention! He extracted his own memories to forget all the people he hates! Now there's a lot of information in there, so he needs your talent as a developer to automatize that task for him.

You are given the memories as a string containing people's surname and name (comma separated). The scientist marked one occurrence of each of the people he hates by putting a '!' right before their name.

Your task is to destroy all the occurrences of the marked people. One more thing ! Hate is contagious, so you also need to erase any memory of the person that comes after any marked name!

Examples
Input:

"Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
Output:

"Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
=> We must remove every memories of Sarah Connor because she's marked, but as a side-effect we must also remove all the memories about Marilyn Monroe that comes right after her! Note that we can't destroy the memories of Manson Marilyn or Monroe Mary, so be careful!


*/

function select(memory){

  if (!memory || memory.length === 0)
    return '';
  
  let parsedObj = memory.split(',').reduce((a,b, i, arr) => {
    
    let name = b.trim();
    if (name.trim().includes('!')) {
      
       a.deleted.push(name.slice(1));
          
       let count = i, temp = 0;
       let tobeDeleted = (temp * 2) + 1;
       let consc = true;
       
       while (true) {
          if (arr[count+1] && arr[count+1].trim().includes('!')) {
            
             a.deleted.push(arr[count+1] && arr[count+1].trim().slice(1));
            
            if (consc)
                tobeDeleted = (temp++ * 2) + 1;
                           
            
          } else {
             consc = false;
             a.deleted.push(arr[count+1] && arr[count+1].trim());
              temp++;
          }
         
       
         count++;
         
         if (temp === tobeDeleted) {
           break;
         }        
         
        
         
       }
      
       
      
    } else {
      if (a.deleted.indexOf(name) < 0) {
        a.remaining.push(name);
      } 
      
    }
    
    
    return a;
    
  }, {
    remaining: [],
    deleted: []
  });

  return parsedObj.remaining.filter((a) => parsedObj.deleted.indexOf(a) === -1).join(', ');
  
  
}


// Clever solution of other users

function select(memory, names=memory.split(', ')){
  let erasables = new Set(names.filter((name,i) => name[0]=="!" || i&&names[i-1][0]=="!" ));
  return names.filter( name => !erasables.has(name) && !erasables.has("!"+name) ).join(', ')
}

