/*
Description:

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.




*/


function list(names){
  //your code here
  var l = names.length;
  return (l == 0) ? '' : names.map(function(obj, i) {
     return (i == l-1) ? obj.name : (i == l-2) ? obj.name + ' & ' : obj.name + ', ';
   
  }).join('');
}