function verificaFimPalavra(palavra, fimPalavra){

    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;

    for(let index = 0 ; index < inversoFimPalavra.length; index += 1){

        if(inversoFimPalavra[index] != inversoPalavra[index]){
            result =  false;
            break;
        }else result = true;
    }


    return result;




}


console.log(verificaFimPalavra('trybe', 'be'));