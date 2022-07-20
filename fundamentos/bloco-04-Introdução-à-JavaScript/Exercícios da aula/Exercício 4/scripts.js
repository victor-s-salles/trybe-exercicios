const correntHour = 10;
let message = "";

if (correntHour>= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (correntHour >= 18 && correntHour < 22) {
    message = "Rango da noite, vamos jantar :D" ;
} else if (correntHour >= 14 && correntHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (correntHour > 11 && correntHour < 14) {
    message = "Hora do almoço!!!";
} else if (correntHour >=4 && correntHour <= 11) {
    message = "Hmmm, cheiro de café recém passado";
} else { message= "Hora de estar dormindo!"};

console.log(message);