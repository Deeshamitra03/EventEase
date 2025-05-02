angular.module('eventManagementApp')
  .controller('VenuesController', ['$scope', 'VenueService', function($scope, VenueService) {
    $scope.venues = [];
    
    VenueService.getVenues()
      .then(response => {
        $scope.venues = response.data;
      });
  }])
  .controller('VenueDetailController', ['$scope', '$routeParams', 'VenueService', function($scope, $routeParams, VenueService) {
    const venueId = $routeParams.id;
    
    VenueService.getVenueById(venueId)
      .then(response => {
        $scope.venue = response.data;
      });
  }]);