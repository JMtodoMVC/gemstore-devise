(function() {
  var app = angular.module('gemStoreApp');

    // app.controller("loginController", ['$scope', function($scope) {
    //   this.loginForm = {};
    //   this.session = function(loginForm){
    //     this.loginForm.createdOn = Date.now();
    //     $auth.submitLogin($scope.loginForm)
    //     this.loginForm = {}; //somehow kill form
    //   };
    // }]);

    app.controller('RegistrationController', ['$scope', function($scope, $auth) {
      $scope.registrationForm = document.querySelector("#registrationForm");
      $scope.submitRegistration = function() {
        console.log("submitting reg!");
        $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          //Happy Path
        })
        .catch(function(reap) {
          //Unhappy Path
        })
      };
    }]);

    app.controller('loginController', ['$scope', function($scope, $auth) {
      $scope.handleLoginBtnClick = function() {
        $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
          // happy response path
        })
        .catch(function(resp) {
          // sad   response path
        });
      };
    }]);

    app.controller('logoutController', ['$scope', function($scope, $auth) {
      $scope.handleLogoutBtnClick = function() {
        $auth.signOut();
      };
    }]);

})();
