angular.module('eventManagementApp')
  .controller('HomeController', ['$scope', 'VenueService', 'AuthService', function($scope, VenueService, AuthService) {
    $scope.venues = [];

    $scope.goTo = function(path) {
      console.log("Attempting to go to:", path); // Debug
      $location.path(path);
    };
    
    VenueService.getVenues()
      .then(response => {
        $scope.venues = response.data.slice(0, 3); // Show only 3 venues on home page
      });
    
    $scope.isLoggedIn = AuthService.isLoggedIn;
  }]);