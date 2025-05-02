angular.module('eventManagementApp')
  .service('VenueService', ['$http', function($http) {
    const apiUrl = 'http://localhost:3001';
    
    this.getVenues = function() {
      return $http.get(`${apiUrl}/venues`);
    };
    
    this.getVenueById = function(id) {
      return $http.get(`${apiUrl}/venues/${id}`);
    };
  }]);