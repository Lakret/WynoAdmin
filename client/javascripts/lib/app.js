if (Meteor.isClient) {
  // Instantiate angular app
  angular.module( 'WynoAdmin', ['angular-meteor', 'ui.router'] );

  angular.module( 'WynoAdmin' ).config( [ 
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider', 
  function($stateProvider, $urlRouterProvider, $locationProvider) {
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
      .state('wine_list', {
          url: '/winery/:winery_id/wine_list',
          templateUrl: app_root + 'wine_list.ng.html',
          controller: 'WineListController',
      })
      .state('winery_settings', {
          url: '/winery/:winery_id/winery_settings',
          templateUrl: app_root + 'winery_settings.ng.html',
          controller: 'WineListController',
      })
      .state('specials', {
          url: '/winery/:winery_id/specials',
          templateUrl: app_root + 'specials.ng.html',
          controller: 'SpecialsController',
      })

      $urlRouterProvider.otherwise('/');
  } ] );

  // Keep history throughout browsing the app 
  angular.module( 'WynoAdmin' ).run( ['$rootScope', '$location', function( $rootScope, $location ) {
    $rootScope.goHome = function() {
      $location.path( '/winery/0' );
    }
  }])
}