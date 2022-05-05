const numbers = (n) => (n & 1) === 1;

const num = [1,2,3,4,5,6,7,8,9];

console.log( `Odd numbers are ${ num.filter( n => numbers(n))}` );
console.log( `Even numbers are ${ num.filter( n => !numbers(n))}`);

