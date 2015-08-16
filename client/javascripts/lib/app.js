if (Meteor.isClient) {
  // Instantiate angular app
  angular.module( 'WynoAdmin', ['angular-meteor', 'ui.router'] );

  angular.module( 'WynoAdmin' ).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var app_root = 'client/views/';
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: app_root + 'login.ng.html',
        controller: 'LoginController',
      })
      .state('winery_home', {
          url: '/winery/:winery_id',
          templateUrl: app_root + 'winery_home.ng.html',
          controller: 'WineryHomeController',
      })
      .state('tasting_menu', {
          url: '/winery/:winery_id/tasting_menu',
          templateUrl: app_root + 'tasting_menu.ng.html',
          controller: 'TastingMenuController',
      })

      $urlRouterProvider.otherwise('/');
  });
}