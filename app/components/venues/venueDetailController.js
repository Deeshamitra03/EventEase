angular.module('eventManagementApp')
  .controller('VenueDetailController', ['$scope', '$routeParams', 'VenueService', 'AuthService', '$location', 
    function($scope, $routeParams, VenueService, AuthService, $location) {
      
      // Initialize variables
      $scope.venue = {};
      $scope.isLoggedIn = AuthService.isLoggedIn;
      $scope.loading = true;
      $scope.error = null;

      // Get venue ID from route parameters
      const venueId = $routeParams.id;

      // Load venue details
      VenueService.getVenueById(venueId)
        .then(function(response) {
          $scope.venue = response.data;
          $scope.loading = false;
        })
        .catch(function(error) {
          $scope.error = 'Failed to load venue details';
          $scope.loading = false;
          console.error('Error loading venue:', error);
        });

      // Handle book now action
      $scope.bookNow = function() {
        if (!AuthService.isLoggedIn()) {
          $location.path('/login');
          return;
        }
        $location.path('/book/' + venueId);
      };

      // Format price for display
      $scope.formatPrice = function(price) {
        return '$' + price.toLocaleString() + ' per day';
      };
    }]);