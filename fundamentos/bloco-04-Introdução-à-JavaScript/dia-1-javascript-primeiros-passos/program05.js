const a = 100;
const b = 30;
const c = 50;

let soma = (a+b+c)

let allAnglesNegative = a >0 && b > 0 && c > 0;


if (allAnglesNegative){
    if(soma == 180){
        console.log(true)
    }else {
        console.log(false)
    }
}