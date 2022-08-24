const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const soma = numbers.reduce((acc, number) => (number % 2 === 0) ? acc + number : acc );

console.log(soma);