const dbConn = require('../databases/mysql.js');
const User = dbConn.User;
const jwt = require('jsonwebtoken');
const jwtOptions = {
  secret: 'myUniqueSecretString'
}

module.exports = {
  login: login,
  signup: signup
}


function login(req,res){
  const {email,password} = req.body;
  if(email && password){
    User.findOne({
      where : {
        email: email
      }
    }).then((user) => {
      if(!user)
        return res.render('login',{msg:`User Not Found with email: ${email}`});
      if(user.password == password){
        let payload = {id: user.id};
        let token = jwt.sign(payload, jwtOptions.secret);

        return res.render('profile',{msg:'User succesfully logged in',user:user.name, token:token});
      }else {
        return res.render('login',{msg:'Invalid Passowrd'});
      }
    })
  }
}


 function signup(req,res){
  const { name,email,password } = req.body;
  if(!(name && email && password))
    return res.render('signup',{msg:'Please enter all the required details'});
  else{
    User.create({
      name,
      email,
      password
    }).then((user) => {
      if(user){
        let payload = {id: user.id};
        let token = jwt.sign(payload, jwtOptions.secret);
        console.log(user);
        return res.render('profile',{msg:'User succesfully created',user:user.name});
      }
    }).catch((err) => {
      return res.render('profile',{msg:'Error in creating user'});
    });
  }
}
