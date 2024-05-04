const data = require('../../../data');
const APIError = require("../../errors/apiError");

const auth = (req, res, next) => {
  try {
    const cookieName = 'token';
    const token = req.cookies[cookieName];

    if (!req.cookies || !token) {
      throw new APIError(401, 'Perlu autentikasi');
    }

    const admin = data.admins.find((admin) => admin.username === token);

    if (!admin) {
      throw new APIError(401, 'Perlu autentikasi');
    }

    req.user = admin;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;