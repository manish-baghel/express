// DB configuration goes here
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'expressBasicLogin',
  username: 'root',
  password: 'password',
  dialect: 'mysql',
});


sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


// User Model which contains information what entries are there in the 
// database and which entries are required for a user
const User = sequelize.define('user',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

