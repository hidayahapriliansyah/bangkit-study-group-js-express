const { Router } = require('express');

const adminAuth = require('../../../middlewares/admin/auth');
const adminEventController = require('./controller');

const adminEventRouter = Router();

adminEventRouter.use(adminAuth);

adminEventRouter.get('/', adminEventController.getEvents);
adminEventRouter.post('/', adminEventController.createEvent);
adminEventRouter.get('/:eventId', adminEventController.getEventById);
adminEventRouter.put('/:eventId', adminEventController.updateEventById);
adminEventRouter.delete('/:eventId', adminEventController.deleteEventById);

module.exports = adminEventRouter;
