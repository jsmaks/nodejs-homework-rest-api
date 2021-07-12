const app = require('../app')
const dataBase = require('../db');

const { PORT = 3000 } = process.env;

(async dataBase => {
  try {
    await dataBase;
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Server not running. Error: ${error.message}`);
  }
})(dataBase);