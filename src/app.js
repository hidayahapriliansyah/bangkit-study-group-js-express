const express = require('express');
const cookieParser = require('cookie-parser');

const rootRouter = require('./routers');
const routeNotFound = require("./middlewares/routeNotFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(cookieParser());

// app.use(rootRouter);

app.use('/api', rootRouter);

app.use(routeNotFound);
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});