angular.module( 'WynoAdmin' ).controller( 'WineryHomeController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
function( $scope, $stateParams, $http, $location, $rootScope ) {
	$scope.goTo = function( location ) {
		$location.path( '/winery/0/' + location );
	}
} ] );