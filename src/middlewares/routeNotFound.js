const routeNotFound = (req, res) => {
  res
    .status(400)
    .json({
      success: false,
      message: 'Route does not exist',
    });
};

module.exports = routeNotFound;
