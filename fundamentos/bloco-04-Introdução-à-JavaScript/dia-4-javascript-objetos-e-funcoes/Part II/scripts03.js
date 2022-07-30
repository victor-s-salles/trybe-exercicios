function maisRepetido(numeros) {
    let num = {};
   
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;

    for( let index in numeros){
        let verificaNumero = numeros[index]

        for(let index2 in numeros){
            if (verificaNumero === numeros[index]){
                contNumero +1;
            }
        }
        if( contNumero > contRepetido){
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
     contNumero = 0;



    }


 return numeros[indexNumeroRepetido]


}   



console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));