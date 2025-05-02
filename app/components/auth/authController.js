angular.module('eventManagementApp')
  .controller('AuthController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
    $scope.user = {};
    $scope.loginData = {};
    
    $scope.register = function() {
      AuthService.register($scope.user)
        .then(() => {
          $location.path('/dashboard');
        })
        .catch(error => {
          $scope.error = error.message || 'Registration failed';
        });
    };
    
    $scope.login = function() {
      AuthService.login($scope.loginData)
        .then(() => {
          $location.path('/dashboard');
        })
        .catch(error => {
          $scope.error = 'Invalid email or password';
        });
    };
  }]);