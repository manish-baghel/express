module.exports = {
  home:home,
  login:login,
  signup:signup,
  profile:profile
}


function home(req,res){
	res.render('index');
}

function login(req,res){
  res.render('login');
}

function signup(req,res){
  res.render('signup');
}

function profile(req,res){
  res.render('profile');
}
