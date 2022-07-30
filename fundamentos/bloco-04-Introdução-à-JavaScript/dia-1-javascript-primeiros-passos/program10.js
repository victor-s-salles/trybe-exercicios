const custo = 20;
const venda = 50;

custoTotal = custo + (custo*0.20);
lucro = venda - custoTotal;
lucroEmMil = lucro * 1000;

if (custo < 0 || venda < 0){
    console.log('Erro nos valors inseridos')
} else {
    console.log('Lucro em mil produtos: R$ '+ (lucro*1000)) ;
}
