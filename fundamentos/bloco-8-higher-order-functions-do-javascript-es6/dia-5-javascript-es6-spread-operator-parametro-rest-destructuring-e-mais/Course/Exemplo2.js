
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };


  const totalInfo = {...user, ...jobInfos}


//   console.log(totalInfo);

const infos = {name, age, nationality, profession, squad, squadInitials} = totalInfo;
// name = 'Victor';

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as ${profession}
and my squade is ${squadInitials}-${squad}`);