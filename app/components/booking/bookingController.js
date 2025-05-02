angular.module('eventManagementApp')
  .controller('BookingController', ['$scope', '$routeParams', '$location', 'BookingService', 'AuthService', 'VenueService', 
    function($scope, $routeParams, $location, BookingService, AuthService, VenueService) {
      const venueId = $routeParams.venueId;
      $scope.booking = {
        userId: AuthService.getCurrentUser().id,
        venueId: venueId,
        addOns: []
      };
      
      $scope.addOnOptions = [
        { id: 'catering', name: 'Catering' },
        { id: 'live_music', name: 'Live Music' },
        { id: 'dj', name: 'DJ' },
        { id: 'decoration', name: 'Decoration' }
      ];
      
      VenueService.getVenueById(venueId)
        .then(response => {
          $scope.venue = response.data;
        });
      
      $scope.toggleAddOn = function(addOnId) {
        const index = $scope.booking.addOns.indexOf(addOnId);
        if (index === -1) {
          $scope.booking.addOns.push(addOnId);
        } else {
          $scope.booking.addOns.splice(index, 1);
        }
      };
      
      $scope.submitBooking = function() {
        BookingService.createBooking($scope.booking)
          .then(() => {
            $location.path('/booking-success');
          })
          .catch(error => {
            $scope.error = 'Booking failed. Please try again.';
          });
      };
      
      $scope.resetForm = function() {
        $scope.booking = {
          userId: AuthService.getCurrentUser().id,
          venueId: venueId,
          addOns: []
        };
      };
  }]);