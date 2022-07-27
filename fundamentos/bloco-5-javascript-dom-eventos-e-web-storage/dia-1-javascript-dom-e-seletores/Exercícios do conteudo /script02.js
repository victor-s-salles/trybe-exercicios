let header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

let emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = 'rgb(255, 159, 132)';


let noEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergency.style.backgroundColor = 'yellow';

for (let index = 0 ; index < document.querySelectorAll('.emergency-tasks h3').length ; index += 1)
{let corEmergencia = document.querySelectorAll('.emergency-tasks h3')[index];
corEmergencia.style.backgroundColor = 'purple';
}
for (let index = 0 ; index < document.querySelectorAll('.no-emergency-tasks h3').length ; index += 1)
{let corEmergencia = document.querySelectorAll('.no-emergency-tasks h3')[index];
corEmergencia.style.backgroundColor = 'black';
}

let footerColor = document.getElementById('footer-container');
footerColor.style.backgroundColor = "green"


