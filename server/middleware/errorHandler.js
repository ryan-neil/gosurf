const errorHandler = (err, req, res) => {
  console.log(err.stack);
  res.status(500).send(err.message);
};

module.exports = errorHandler;
