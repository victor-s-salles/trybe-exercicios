require('dotenv').config();

const app = require('./app');
const { PORT = 3006 } = process.env;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

