const eventService = require('../../../services/data/participant/event'); 

const getEventBySlug = (req, res, next) => {
  try {
    const result = eventService.getEventBySlug(req);

    res
      .status(200)
      .json({
        success: true,
        message: 'Success to get event by slug',
        data: { event: result }
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { getEventBySlug };
