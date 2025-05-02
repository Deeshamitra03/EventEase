angular.module('eventManagementApp')
  .controller('AboutController', ['$scope', function($scope) {
    $scope.team = [
      {
        name: 'Marriote Group Of Hotel',
        role: 'venue Partner',
        bio: 'The most trustworthy Partner, The best when it comes to exotic Venue and great hosts..',
        image: 'https://w7.pngwing.com/pngs/149/967/png-transparent-marriott-logo-marriott-international-hotel-logo-company-accommodation-hotel-text-business-resort-thumbnail.png'
      },
      {
        name: 'DecYour Co',
        role: 'Decoration Partner',
        bio: 'Beautifies the venues to make it look magical!',
        image: 'https://plus.unsplash.com/premium_photo-1700520223949-31b695c57079?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'CateringAmmas',
        role: 'Catering Partner',
        bio: 'When it comes to good food, we do not compromise. Always the best of our customers.',
        image: 'https://t4.ftcdn.net/jpg/03/73/76/85/240_F_373768576_WTMTqA1Ok3giIjre3aqRIs5MSR7zjpA5.jpg'
      }
    ];
    
    $scope.stats = [
      { value: '500+', label: 'Venues' },
      { value: '10,000+', label: 'Events Hosted' },
      { value: '98%', label: 'Customer Satisfaction' }
    ];
  }]);