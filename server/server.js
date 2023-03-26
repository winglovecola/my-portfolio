const express = require('express');
const path = require('path');

const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  console.log(`Use Express at http://localhost:${PORT}`);
})