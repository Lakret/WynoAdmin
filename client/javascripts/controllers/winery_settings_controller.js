angular.module( 'WynoAdmin' ).controller( 'WinerySettingsController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'$meteor',
'WineryFactory',
function( $scope, $stateParams, $http, $location, $rootScope, $meteor, WineryFactory ) {
	$scope.winery = WineryFactory.getWineryById( $stateParams.winery_id )
} ] );