const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addTurn = (objeto, chave, parametro) => {
  objeto.chave = parametro;
};

addTurn(lesson2, "turno", "noite");
console.log(lesson2);

//---------------------------------- 1

const listKeys = (objeto) => {
  console.log(Object.keys(objeto));
};

listKeys(lesson1);

//----------------------------------- 2

const sizeObject = (objeto) => {
  console.log(Object.keys(objeto).length);
};
sizeObject(lesson1);

//----------------------------------- 3

const listValus = (objeto) => {
  console.log(Object.values(objeto));
};
listValus(lesson1);

//----------------------------------- 4

let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log("------------------");
console.log(allLessons);

// --------------------------------- 5

const contStudent = (allLessons) => {
  let total = 0;

  const array = Object.keys(allLessons);

  for (index in array) {
    total += allLessons[array[index]].numeroEstudantes;
  }
  return total;
};

// ----------------------------------- 6

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 2));

// ----------------------------------- 7

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2, "professor", "Carlos"));


// ------------------------------ 8


//-------------------------------- Bônus ------------------------------

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      if(obj[array[index]].materia === 'Matemática'){
      total += obj[array[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudentsMath(allLessons));


  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));