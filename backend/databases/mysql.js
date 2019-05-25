// DB configuration goes here
const Sequelize = require('sequelize');

// Create a sequelize instance by providing following:- 
// - database -> database in which we'll store our data
// - username -> username of the user
// - password -> password of the user accesing the db
// - dialect  -> in our case mysql
const sequelize = new Sequelize({
  database: 'expressBasicLogin',
  username: 'root',
  password: 'password',
  dialect: 'mysql',
});

// we can check that we have right configurations by trying to authenticate
// whole interface is promise based so we can use .then() and .catch()

//sequelize
//  .authenticate()
//  .then(() => console.log('Mysql Database Connection has been established successfully.'))
//  .catch(err => console.error('Unable to connect to the database:', err));


// User Model for defining which entries are required for a user
// as of now we only introduce name, email and password
// we define this by using sequelize.define('user',{options})
// The below code tells Sequelize to expect a table named 'users' in the database 
// with the given fields. The table name is automatically pluralized by default i.e user -> users
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


sequelize.sync()
  .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
  .catch(error => console.log('This error occured', error));


module.exports = {
  User: User
}
