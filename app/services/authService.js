angular.module('eventManagementApp')
  .service('AuthService', ['$http', '$location', function($http, $location) {
    const apiUrl = 'http://localhost:3001';
    
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    
    this.register = function(user) {
      return $http.post(`${apiUrl}/users`, user)
        .then(response => {
          currentUser = response.data;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return response;
        });
    };
    
    this.login = function(credentials) {
      return $http.get(`${apiUrl}/users?email=${credentials.email}&password=${credentials.password}`)
        .then(response => {
          if (response.data.length > 0) {
            currentUser = response.data[0];
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            return response;
          } else {
            throw new Error('Invalid credentials');
          }
        });
    };
    
    this.logout = function() {
      localStorage.removeItem('currentUser');
      currentUser = null;
      $location.path('/');
    };
    
    this.isLoggedIn = function() {
      return currentUser !== null;
    };
    
    this.getCurrentUser = function() {
      return currentUser;
    };
  }]);
