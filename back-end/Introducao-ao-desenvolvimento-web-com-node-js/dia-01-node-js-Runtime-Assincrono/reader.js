const fs = require("fs").promises;

async function readAll() {
   const fileContent = await fs.readFile("./simpsons.json", "utf-8");
   const simpsons = JSON.parse(fileContent);
   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
   simpsons.push({ id: '8', name: 'Nelson Muntz' });

   await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
     return strings;
}

readAll()