const newEmployees = (employeeGenerator) => {
    const employees = {
      id1: employeeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employeeGenerator('Luiz Drumont'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employeeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const employeeGenerator = (fullName) => {
    const nameEmail = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${nameEmail}@trybe.com` };
  };

  console.log(newEmployees(employeeGenerator));