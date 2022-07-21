let arrayOld = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let array = [];

for(let index = 0 ; index<( (arrayOld.length) - 1) ;  index +=1 ){
    array[index] = arrayOld[index] * arrayOld[(index+1)];
}

array[(arrayOld.length-1)] = arrayOld[arrayOld.length-1] *2;


console.log(array);