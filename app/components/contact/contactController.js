angular.module('eventManagementApp')
  .controller('ContactController', ['$scope', function($scope) {
    $scope.contact = {};
    $scope.submitted = false;
    
    $scope.submitForm = function() {
      if ($scope.contactForm.$valid) {
        // In a real app, you would send this to your backend
        console.log('Form submitted:', $scope.contact);
        $scope.submitted = true;
        $scope.contact = {};
        $scope.contactForm.$setPristine();
      }
    };
  }]);