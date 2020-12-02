/*

John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in 
the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.



*/


export const meeting = (s: string, X = (m:string) => m.split(':'), Z = (r:string, t:string) => r.localeCompare(t)): string => s.toUpperCase().split(';').sort((a,b, c= X(a), d =X(b)) => (c[1] === d[1]) ? Z(c[0], d[0]) : Z(c[1], d[1])).map((x, _m, _n, y = X(x)) => `(${y[1]}, ${y[0]})`).join('');


// Other solution


export const meeting = (s: string): string => s.toUpperCase().split(';').sort((a,b, c= a.split(':'), d =b.split(':')) => (c[1] === d[1]) ? c[0].localeCompare(d[0]) : c[1].localeCompare(d[1])).map((x, _m, _n, y = x.split(':')) => `(${y[1]}, ${y[0]})`).join('')