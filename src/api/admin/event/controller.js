const eventService = require('../../../services/data/admin/event'); 

const getEvents = (req, res, next) => {
  try {
    const result = eventService.getEvents(req);

    res
      .status(200)
      .json({
        success: true,
        message: 'Success to get events',
        data: { events: result }
      });
  } catch (error) {
    next(error);
  }
};

const createEvent = (req, res, next) => {
  try {
    const result = eventService.createEvent(req);

    res
      .status(201)
      .json({
        success: true,
        message: 'Success to create event',
        data: { event: result }
      });
  } catch (error) {
    next(error);
  }
};

const getEventById = (req, res, next) => {
  try {
    const result = eventService.getEventById(req);

    res
      .status(200)
      .json({
        success: true,
        message: 'Success to get event by id',
        data: { event: result }
      });
  } catch (error) {
    next(error);
  }
};

const updateEventById = (req, res, next) => {
  try {
    const result = eventService.updateEventById(req);

    res
      .status(200)
      .json({
        success: true,
        message: 'Success to update event',
        data: { event: result }
      });
  } catch (error) {
    next(error);
  }
};

const deleteEventById = (req, res, next) => {
  try {
    const result = eventService.deleteEventById(req);

    res
      .status(200)
      .json({
        success: true,
        message: 'Success to delete event',
        data: { event: result }
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEvents,
  createEvent,
  getEventById,
  updateEventById,
  deleteEventById,
};