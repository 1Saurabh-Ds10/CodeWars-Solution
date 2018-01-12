/*

Description:

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand

*/



function zero(eq) {
  return (eq) ? eval('0'+ eq) : 0;
}
function one(eq) {
  return (eq) ? eval('1'+ eq) : 1;
}
function two(eq) {
   return (eq) ? eval('2'+ eq) : 2;
}
function three(eq) {
 return (eq) ? eval('3'+ eq) : 3;
}
function four(eq) {
  return (eq) ? eval('4'+ eq) : 4;
}
function five(eq) {
 return (eq) ? eval('5'+ eq) : 5;
}
function six(eq) {
 return (eq) ? eval('6'+ eq) : 6;
}
function seven(eq) {
 return (eq) ? eval('7'+ eq) : 7;
}
function eight(eq) {
 return (eq) ? eval('8'+ eq) : 8;
}
function nine(eq) {
 return (eq) ? eval('9'+ eq) : 9;
}

function plus(val) {
  return '+'+val;
}
function minus(val) {
  return '-'+val;
}
function times(val) {
  return '*'+val;
}
function dividedBy(val) {
return '/'+val;
}