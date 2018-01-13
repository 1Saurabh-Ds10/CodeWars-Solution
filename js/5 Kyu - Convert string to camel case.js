/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

*/

function toCamelCase(str){
  
  return (str) ? str.split((str.indexOf('-') !== -1) ? '-' : '_').reduce((a,b, i) => a+= (i>0) ? (b[0].toUpperCase() + b.slice(1)) : b, '') : '';
  
  
}