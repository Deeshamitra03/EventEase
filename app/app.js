angular.module('eventManagementApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    console.log("Configuring routes...");
    $routeProvider
      .when('/', {
        templateUrl: '/app/components/home/homeView.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: '/app/components/auth/loginView.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: '/app/components/auth/registerView.html',
        controller: 'AuthController'
      })
      .when('/venues', {
        templateUrl: '/app/components/venues/venuesView.html',
        controller: 'VenuesController'
      })
      .when('/venues/:id', {
        templateUrl: '/app/components/venues/venueDetailView.html',
        controller: 'VenueDetailController'
      })
      .when('/book/:venueId', {
        templateUrl: '/app/components/booking/bookingView.html',
        controller: 'BookingController'
      })
      .when('/dashboard', {
        templateUrl: '/app/components/dashboard/dashboardView.html',
        controller: 'DashboardController'
      })
      .when('/booking-success', {
        templateUrl: '/app/components/booking/bookingSuccessView.html'
      })
      .when('/about', {
        templateUrl: '/app/components/about/aboutView.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: '/app/components/contact/contactView.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(['$rootScope', 'AuthService', function($rootScope, AuthService) {
    $rootScope.isLoggedIn = AuthService.isLoggedIn();
    $rootScope.currentUser = AuthService.getCurrentUser();
    
    $rootScope.$on('$routeChangeStart', function() {
      $rootScope.isLoggedIn = AuthService.isLoggedIn();
      $rootScope.currentUser = AuthService.getCurrentUser();
    });
    
    $rootScope.logout = function() {
      AuthService.logout();
      $location.path('/');
    };
  }]);