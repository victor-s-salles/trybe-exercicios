const readline = require('readline-sync')


function calcImc () {

    const weight = readline.questionInt('Qual é seu peso? (kg) ')
    const height = readline.questionFloat("Qual é sua altura? (cm) ")
   const IMC = weight/(height*height)

   return IMC
}

function main() {
    const IMC = calcImc()

    console.log(IMC);
}

main()