const { Router } = require('express');

const participantEventRouter = require('./event/router');

const participantRouter = Router();

participantRouter.use('/event', participantEventRouter);

module.exports = participantRouter;
