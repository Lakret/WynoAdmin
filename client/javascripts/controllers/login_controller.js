angular.module( 'WynoAdmin' ).controller( 'LoginController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
function( $scope, $stateParams, $http, $location, $rootScope ) {
	$scope.submitLogin = function() {
		$location.path( '/winery/0' );
	}
} ] );