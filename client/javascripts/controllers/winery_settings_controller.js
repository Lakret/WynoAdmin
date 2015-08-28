angular.module( 'WynoAdmin' ).controller( 'WinerySettingsController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'$meteor',
'WineryFactory',
function( $scope, $stateParams, $http, $location, $rootScope, $meteor, WineryFactory ) {
	$scope.initializeScope = function() {
		$scope.temp_winery = {};
		angular.extend( $scope.temp_winery, WineryFactory.getWineryById( $stateParams.winery_id ) )
	}
	
	$scope.createWinery = function() {
		$scope.temp_winery.created_at = Date.now();
		$scope.temp_winery.updated_at = undefined;
		$meteor.call( 'createWinery', $scope.temp_winery )
	}

	$scope.updateWinery = function() {
		$scope.temp_winery.updated_at = Date.now();
		$meteor.call( 'updateWinery', $scope.temp_winery );
	}

	$scope.initializeScope()
} ] );