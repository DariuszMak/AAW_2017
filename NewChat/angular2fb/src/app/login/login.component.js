var ref = new Firebase("https://webowe-a8010.firebaseio.com");
angularFireAuth.initialize(ref, {
  scope: $scope, name: "user",
  callback: function(err, user) {
    if (!err) {
      console.log("User :", user);
    } else {
      console.log("Error :", err);
    }
  }
});
$scope.login = function() {
  console.log("logging in");
  var username = $scope.form.email;
  var password = $scope.form.password;
  angularFireAuth.login('password', {
    email: username,
    password: password,
    rememberMe: false
  });
};

/*$scope.loginTwitter = function() {
  console.log('loggin in via Twitter');
  angularFireAuth.login('twitter');
};

$scope.loginFacebook = function() {
  console.log('loggin in via Facebook');
  angularFireAuth.login('facebook');
};

$scope.loginGithub = function() {
  console.log('loggin in via Github');
  angularFireAuth.login('github');
};*/

$scope.logout = function() {
  angularFireAuth.logout();
};
