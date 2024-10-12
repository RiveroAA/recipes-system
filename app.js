const express = require('express');
const dbconnect = require('./config/db');
const router = require('./routes/recipeRoutes');
const app = express();

app.use(router);

app.listen(5000, () => { console.log("The server is listening on port 5000.") });

dbconnect();