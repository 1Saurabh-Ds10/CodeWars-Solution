
/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

export const isPangram = (str: string): boolean => {

    str = str.toLowerCase().replace(/[^a-z]/g,'');
    const alphabetsObj: {[key: string]: number;} = {};
    let count = 0;
  
    for (let i = 0, n = str.length; i < n; i++) {
      const s = str[i];
    
      if (!alphabetsObj[s]) {
        alphabetsObj[s] = 1;
        count++;
      }
  }
  
  return count === 26;

}

