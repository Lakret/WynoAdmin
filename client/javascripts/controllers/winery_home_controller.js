angular.module( 'WynoAdmin' ).controller( 'WineryHomeController', [
'$scope',
'$stateParams',
'$location',
function( $scope, $stateParams, $location ) {
	$scope.$meteorSubscribe( 'wineries' );
	$scope.winery = Wineries.findOne( $stateParams.winery_id );

	$scope.goTo = function( location ) {
		$location.path( $location.path() + '/' + location );
	}
} ] );