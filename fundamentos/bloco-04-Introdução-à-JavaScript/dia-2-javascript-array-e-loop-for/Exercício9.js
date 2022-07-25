let numbers = [];

for(let index = 0 ; index < 20; index += 1){
    numbers[index] = index+1;
}

for(index = 0; index < numbers.length ; index += 1)
{
    console.log((numbers[index]/2));
}