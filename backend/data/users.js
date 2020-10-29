const bcrypt = require('bcryptjs');

module.exports.users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('', 10),
    isAdmin: true,
  },
  {
    name: 'wahidtaamallah',
    email: 'wahidtaamallah20@gmail.com',
    password: bcrypt.hashSync('', 10),
  },
  {
    name: 'Test',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('', 10),
  },
];
