angular.module('eventManagementApp')
  .controller('DashboardController', ['$scope', 'BookingService', 'AuthService', 'VenueService', 
    function($scope, BookingService, AuthService, VenueService) {
      const userId = AuthService.getCurrentUser().id;
      
      $scope.bookings = [];
      $scope.loading = true;
      
      BookingService.getUserBookings(userId)
        .then(response => {
          $scope.bookings = response.data;
          $scope.loading = false;
          
          // Get venue details for each booking
          $scope.bookings.forEach(booking => {
            VenueService.getVenueById(booking.venueId)
              .then(venueResponse => {
                booking.venue = venueResponse.data;
              });
          });
        });
  }]);