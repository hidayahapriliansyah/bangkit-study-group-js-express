const data = require('../../../../../data');
const APIError = require("../../../../errors/apiError");

const getEvents = (req) => {
  const admin = req.user;

  const dataEvents = data.events.filter((event) => event.adminId === admin.id);

  return dataEvents;
};

const createEvent = (req) => {
  const admin = req.user;

  const { slug, name, detail } = req.body;

  if (!slug) {
    throw new APIError(400, 'Slug harus diisi');
  }
  if (!name) {
    throw new APIError(400, 'Name harus diisi');
  }
  if (!detail) {
    throw new APIError(400, 'Detail harus diisi');
  }

  const dataEvents = data.events.filter((event) => event.adminId === admin.id);

  const newEvent = {
    id: (new Date()).getTime(),
    adminId: admin.id,
    slug,
    name,
    detail,
  }
  dataEvents.push(newEvent);

  return newEvent;
};

const getEventById = (req) => {
  const admin = req.user;
  const { eventId } = req.params;

  const dataEvent = data.events
    .filter((event) => event.adminId === admin.id)
    .find((event) => event.id.toString() === eventId);

  if (!dataEvent) {
    throw new APIError(404, 'Event tidak ditemukan');
  }

  return dataEvent;
};

const updateEventById = (req) => {
  const admin = req.user;
  const { eventId } = req.params;

  const { slug, name, detail } = req.body;

  if (!slug) {
    throw new APIError(400, 'Slug harus diisi');
  }
  if (!name) {
    throw new APIError(400, 'Name harus diisi');
  }
  if (!detail) {
    throw new APIError(400, 'Detail harus diisi');
  }

  const dataEvents = data.events.filter((event) => event.adminId === admin.id)
  const dataEventIndex = dataEvents.findIndex((event) => event.id.toString() === eventId);

  if (dataEventIndex <= -1) {
    throw new APIError(404, 'Event tidak ditemukan');
  }

  const updatedDataEvent = {
    ...dataEvents[dataEventIndex],
    slug,
    name,
    detail,
  };

  dataEvents[dataEventIndex] = updatedDataEvent;
  return updatedDataEvent;
};

const deleteEventById = (req) => {
  const admin = req.user;
  const { eventId } = req.params;

  const dataEvents = data.events.filter((event) => event.adminId === admin.id)
  const dataEventIndex = dataEvents.findIndex((event) => event.id.toString() === eventId);

  if (dataEventIndex <= -1) {
    throw new APIError(404, 'Event tidak ditemukan');
  }

  const deletedDataEvent = dataEvents[dataEventIndex];
  
  dataEvents.splice(dataEventIndex, 1);

  return deletedDataEvent;
};

module.exports = { 
  getEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};