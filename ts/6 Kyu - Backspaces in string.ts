/*

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""


*/


export const cleanString = (s: string): string | undefined => (s) ?  (s.split('').reduce((p, s) =>  (s === '#') ?  (p) ? p = p.slice(0, -1):p : p+=s  ,'')) : '';