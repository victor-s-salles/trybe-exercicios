function calcImc (peso, altura) {
   const IMC = peso/(altura*altura)

   return IMC
}

function main() {
    const IMC = calcImc(50, 1.6)

    console.log(IMC);
}

main()