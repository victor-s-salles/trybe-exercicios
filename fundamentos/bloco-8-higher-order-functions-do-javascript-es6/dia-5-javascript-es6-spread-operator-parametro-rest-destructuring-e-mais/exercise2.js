const sum = (...args) => {
    return args.reduce((acc, number) => acc + number , 0);
};

console.log(sum(4,5,6));