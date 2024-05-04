const { Router } = require('express');

const adminEventRouter = require('./event/router');

const adminRouter = Router();

adminRouter.use('/event', adminEventRouter);

module.exports = adminRouter;
