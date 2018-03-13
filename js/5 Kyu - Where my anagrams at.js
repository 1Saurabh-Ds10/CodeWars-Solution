/*

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

*/

function isAnagram (s, t) {
  
  if (s === t)
      return true;
    
  if (!s || !t)
    return false;
  
  let n1 = s.length,
      n2 = t.length;
  
  if (n1 != n2)
    return false;
  
  const c1 = {}, c2 ={};
  
  for (let i=0; i<n1; i++) {
    let l1 = s[i], l2 = t[i];
    
    if (c1[l1]) {
      c1[l1] += 1;
    } else {
      c1[l1] =1;
    }
    
    
    if (c2[l2]) {
      c2[l2] += 1;
    } else {
      c2[l2] =1;
    }
    
  }
  
  for (let o in c1) {
    if (c1[o] !== c2[o]) {
      return false;
    }
  }
  
  return true;
  
};

function anagrams(word, words) {
  
  const res = [];
  
  for (let i=0, l = words.length; i < l; i++) {
    if (isAnagram(word, words[i])) {
       res.push(words[i]);
    }
  }
return res;
}



// Clever solution of some other users
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}