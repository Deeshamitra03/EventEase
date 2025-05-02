angular.module('eventManagementApp')
  .service('BookingService', ['$http', function($http) {
    const apiUrl = 'http://localhost:3001';
    
    this.createBooking = function(booking) {
      return $http.post(`${apiUrl}/bookings`, booking);
    };
    
    this.getUserBookings = function(userId) {
      return $http.get(`${apiUrl}/bookings?userId=${userId}`);
    };
  }]);