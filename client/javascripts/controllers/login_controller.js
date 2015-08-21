angular.module( 'WynoAdmin' ).controller( 'LoginController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'$meteor',
function( $scope, $stateParams, $http, $location, $rootScope, $meteor ) {
	$scope.wineries = $meteor.collection( function() {
        return Wineries.find()
    });
	$scope.submitLogin = function() {
		$location.path( '/winery/' + $scope.wineries[1]._id );
	}
} ] );