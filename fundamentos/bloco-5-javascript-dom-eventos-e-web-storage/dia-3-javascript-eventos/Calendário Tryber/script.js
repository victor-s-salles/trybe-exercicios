function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
 
     createDaysOfTheWeek()

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    if (day === 24 || day === 31) {
       
        dayItem.className = 'day holiday'; 
        getDaysList.appendChild(dayItem); 
      } else if (day === 4 || day === 11 || day === 18) {
        // Caso o dia for 4, 11 ou 18
        dayItem.className = 'day friday'; 
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        // Caso o dia for 25
        dayItem.className = 'day holiday friday'; 
        getDaysList.appendChild(dayItem);
      } else {
       
        dayItem.className = 'day';
        getDaysList.appendChild(dayItem);
      }
  }
}
 
createDaysOfTheMonth();


function createHolidays(nomeDoBotao, idname){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = idname;

    newButton.innerHTML = nomeDoBotao;
    newButton.id = newButtonID;


    buttonContainer.appendChild(newButton);

}
createHolidays('Feriados', 'btn-holiday');


function corHolidays (){
    let getHolidauButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    getHolidauButton.addEventListener('click', function() {
        for(let index = 0 ; index < getHolidays.length; index += 1)

        if (getHolidays[index].style.backgroundColor === setNewColor){
            getHolidays[index].style.backgroundColor = backgroundColor;

        } else {
            getHolidays[index].style.backgroundColor = setNewColor;

        }

    })
}

corHolidays();

// --------------- Resolvido os requisitos até o 4 ----------------------- ///


function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
          //caso o texto não tenha sido substituído, ao clicar no botão ele será substituido pelo novo texto;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
          //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
        }
      }
    });
  }



  function createFridays(nomeDoBotao){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = nomeDoBotao;
    newButton.id = newButtonID;


    buttonContainer.appendChild(newButton);

}

createFridays('Sexta Feira');
  
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);


 // 6 ----------------------------


function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; 
  });
}

dayMouseOver ();

function dayMouseOut(){
  let days = document.querySelector('#days')
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  })

}

dayMouseOut()

// 7 -------------------------------------

function addTasks (task) {
  let taskConainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;

  taskConainer.appendChild(taskName);

}

addTasks('Projeto Calendário');


// 8 -------------------------------------

function newTaskDiv(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
}
newTaskDiv('green');


// 9 -------------------------------------

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  
  myTasks.addEventListener('click', function() {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
setTaskClass();


 // 10 -----------------------

 function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function(){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; 
      event.target.style.color = color; 
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
    
  });
 }
 setDayColor();

 // Bônus -------------------------

 function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();