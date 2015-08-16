angular.module( 'WynoAdmin' ).controller( 'WineryHomeController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
function( $scope, $stateParams, $http, $location, $rootScope ) {
	$scope.goTo = function( location ) {
		if( location === 'winery_home' )
			return;
		$location.path( '/winery/0/' + location );
	}
} ] );