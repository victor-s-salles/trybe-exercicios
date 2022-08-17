function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  function encode(frase) {
    let vog = ['a', 'e', 'i', 'o', 'u'];
    let vog2 = ['1', '2', '3', '4', '5'];
    frase = frase.split('');
  
    for (let index = 0; index < frase.length; index += 1) {
      for (let index2 = 0; index2 < vog.length; index2 += 1) {
        if (frase[index] === vog[index2]) {
          frase[index] = vog2[index2];
        }
      }
    }
    frase = frase.join('');
  
    return frase;
  }

  function decode(frase) {
    let vog2 = ['a', 'e', 'i', 'o', 'u'];
    let vog = ['1', '2', '3', '4', '5'];
    frase = frase.split('');
  
    for (let index = 0; index < frase.length; index += 1) {
      for (let index2 = 0; index2 < vog.length; index2 += 1) {
        if (frase[index] === vog[index2]) {
          frase[index] = vog2[index2];
        }
      }
    }
    frase = frase.join('');
  
    return frase;
  }

  function techList(tecnologia, nomes) {
    let array = [];
    if (tecnologia.length != 0 && nomes != "") {
      for (let tech of tecnologia.sort()) {
        array.push({'tech': tech, 'name': nomes });
      }
      return array;
    } else {
      return 'Vazio!';}
    }

    function hydrate(frase) {
      let numbers = frase.replace(/[^0-9]/g, '');
      numbers = numbers.split('');
      let cont = 0;
      let bar = '';
      for (let index in numbers) {
        cont += parseInt(numbers[index]);
      }
    
      if (cont > 1) {
        bar = `${cont} copos de água`;
      } else bar = `${cont} copo de água`;
      console.log(cont);
    
      return bar;
    }


    // Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};


  
  module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee};
