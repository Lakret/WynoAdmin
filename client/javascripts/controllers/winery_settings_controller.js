angular.module( 'WynoAdmin' ).controller( 'WinerySettingsController', [
'$scope',
'$rootScope',
'$stateParams',
'$meteor',
function( $scope, $rootScope, $stateParams, $meteor ) {
	$scope.initializeScope = function() {
		$scope.temp_winery = {};
		$scope.$meteorSubscribe( 'wineries' ).then( function() {
		    $scope.temp_winery = Wineries.findOne( $stateParams.winery_id );
		});
	}

	$scope.createWinery = function() {
		$scope.temp_winery.created_at = Date.now();
		$scope.temp_winery.updated_at = undefined;
		$meteor.call( 'createWinery', $scope.temp_winery )
	}

	$scope.updateWinery = function() {
		$scope.temp_winery.updated_at = Date.now();
		$meteor.call( 'updateWinery', $scope.temp_winery );
		$rootScope.goHome();
	}

	$scope.initializeScope();
}]);