function soma(numeros){

    let somador = 0;

    for(let index = 1 ; index <= numeros ; index+=1){

        somador+= index;
    }

    return somador;
}

let number = 5;

console.log(soma(number));