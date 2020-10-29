const jwt = require('jsonwebtoken');

module.exports.generateToken = (id) => {
  return jwt.sign({ id }, "8", {
    expiresIn: '30d',
  });
};
