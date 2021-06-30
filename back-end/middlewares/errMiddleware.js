module.exports = (err, req, res, next) => {

  if (err.isJoi) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: err.details[0].message,
      },
    });
  }

  res.status(500).json({
    err: {
      code: 500,
      message: 'INTERNAL ERROR',
    },
  });
};
