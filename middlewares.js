const sup = (req, res, next) => {
  if (req.query.auth === 'true') {
    res.send(req.query.auth);
  } else {
    res.send('You are not Auth');
  }
};

const how = (req, res, next) => {
  console.log('i am how');
  next();
};

module.exports = { sup, how };
