angular.module( 'WynoAdmin' ).controller( 'WineryHomeController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'WineryFactory',
function( $scope, $stateParams, $http, $location, $rootScope, WineryFactory ) {
	$scope.goTo = function( location ) {
		$location.path( $location.path() + '/' + location );
	}
	$scope.winery = WineryFactory.getWineryById( $stateParams.winery_id )
} ] );