function bigName (name) {

  let big = name[0]

    for(index in name){

        if(big.length < name[index].length){
            big = name[index];
        }
    }

    return big;
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(bigName(names));