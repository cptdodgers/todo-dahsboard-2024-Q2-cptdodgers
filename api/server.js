const express = require('express');
const app = express();
const port = 3001;
const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});