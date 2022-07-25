let notaTest = 85;
let result = ""

if (notaTest > 80) {
    result = "aprovado";
} else if (notaTest > 60) {
    result = "espera";
} else {
    result = "reprovado";
};


switch (result){
    case 'aprovado':
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case 'espera':
        console.log("Você está na nossa lista de espera");
        break;
    case 'repovado':
        console.log("Você foi reprovada(o)");
        break;
    
    default:

        console.log("Valor de nota incorreto!");
}