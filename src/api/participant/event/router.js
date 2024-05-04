const { Router } = require('express');

const partiEventContoller = require('./controller');

const participantEventRouter = Router();

participantEventRouter.get('/:eventSlug', partiEventContoller.getEventBySlug);

module.exports = participantEventRouter;
