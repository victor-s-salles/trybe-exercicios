const acorda = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

// const doingThings = (func) => {
//     const result = func();
//     return result;
//   };

const doingThings = (func) => func();

console.log(doingThings(cafe));