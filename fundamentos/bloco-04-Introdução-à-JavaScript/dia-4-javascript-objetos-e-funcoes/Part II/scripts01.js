function verificaPalindrome (palavra) {


    for(index in palavra) {
        if(palavra[index] != palavra[(palavra.length - 1) - index]) {
          return false;
        }
      }
      return true;
}

console.log(verificaPalindrome('arara'))



// --------------------------------------------------------


function biggest(num){

     let indiceMaior = 0;

     for(let index in num){
    if(indiceMaior < num[index]){
        indiceMaior = index;
    }
       

     }
 return indiceMaior;
}

console.log(biggest([2, 3, 6, 7, 10, 1]));


// --------------------------------------------------------

function smallest(num){

    let indiceMenor = 0;

    for(let index in num){
   if(indiceMenor > num[index]){
       indiceMenor = index;
   }
      

    }
return indiceMenor;
}

console.log(smallest([2, 4, 6, 7, 10, 0, -3]));

