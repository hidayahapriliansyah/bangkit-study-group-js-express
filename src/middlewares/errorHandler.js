const errorHandler = (err, req, res, next) => {
  const errorResult = {
    status: err?.status ?? 500,
    message: err?.message ?? 'Oops ada yang salah',
  }

  res
    .status(errorResult.status)
    .json({
      success: false,
      message: errorResult.message,
    });
  return;
};

module.exports = errorHandler;
