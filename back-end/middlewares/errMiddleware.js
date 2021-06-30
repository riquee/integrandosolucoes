module.exports = (err, req, res, next) => {
  res.status(500).json({
    err: {
      code: 500,
      message: 'INTERNAL ERROR',
    },
  });
};
