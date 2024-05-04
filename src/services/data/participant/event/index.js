const data = require('../../../../../data');
const APIError = require("../../../../errors/apiError");

const getEventBySlug = (req) => {
  const { eventSlug } = req.params;

  const event = data.events.find((event) => event.slug === eventSlug);

  if (!event) {
    throw new APIError(404, 'Event tidak ditemukan');
  }

  return event;
};

module.exports = { getEventBySlug };