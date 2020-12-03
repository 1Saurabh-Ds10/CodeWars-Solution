/*

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


*/


export function multiplicationTable (size: number): number[][] {
    const table: number[][] = Array(size);
    let c1 = 0, t = size;
    while(t) {
       table[t - 1] = Array(size).fill(0).map((_n,i) => (i+1) * t);

        c1++;
        t--;
    }

    return table;
  
}