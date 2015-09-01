angular.module( 'WynoAdmin' ).controller( 'LoginController', [
'$scope',
'$location',
'$meteor',
function( $scope, $location, $meteor ) {
	$scope.$meteorSubscribe( 'wineries' );

	$scope.wineries = $meteor.collection( function() {
        return Wineries.find()
    });

	$scope.submitLogin = function() {
		$location.path( '/winery/' + $scope.wineries[1]._id );
	}
} ] );