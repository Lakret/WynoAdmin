angular.module( 'WynoAdmin' ).controller( 'TastingMenuController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
function( $scope, $stateParams, $http, $location, $rootScope ) {
	$scope.goTo = function( location ) {
		if( location === 'winery_home' )
			$location.path( '/winery/0' );
	}
} ] );