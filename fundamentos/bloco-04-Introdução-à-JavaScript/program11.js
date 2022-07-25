const salarioBruto = 3000;

let aliquotINSS;
let aliquotIR;
let salarioLiquido;

// Calculando inss

if (salarioBruto <= 1556,94) {
    salarioLiquido = salarioBruto - (salarioBruto* 0.08)
}else if (salarioBruto <- 2594.92)  {
    salarioLiquido = salarioBruto - (salarioBruto* 0.09)
}else if (salarioBruto <- 5189.82)  {
    salarioLiquido = salarioBruto - (salarioBruto* 0.11)
}else {salarioLiquido = (salarioBruto - 570.88)}

//calculando IR
if (salarioLiquido <= 1903.98) {
    aliquotIR = 0;
  } else if (salarioLiquido <= 2826.65)
  {
    aliquotIR = (salarioLiquido * 0.075) - 142.80;
  } else if (salarioLiquido <= 3751.05) {
    aliquotIR = (salarioLiquido * 0.15) - 354.80;
  } else if (salarioLiquido <= 4664.68) {
    aliquotIR = (salarioLiquido * 0.225) - 636.13;
  } else {
    aliquotIR = (salarioLiquido * 0.275) - 869.36;
  };




console.log('Salário Liquido '+salarioLiquido );
    