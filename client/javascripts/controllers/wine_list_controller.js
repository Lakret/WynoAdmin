angular.module( 'WynoAdmin' ).controller( 'WineListController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'$meteor',
'WineFactory',
function( $scope, $stateParams, $http, $location, $rootScope, $meteor, WineFactory ) {
	$scope.adding_wine = false;
	$scope.editing_wine = false;
	$scope.temp_wine = {};

	$scope.wines = $meteor.collection( function() {
	    return Wines.find()
	});

	$scope.showAddWinePopup = function() {
		$scope.adding_wine = true;
	}

	$scope.showEditWinePopup = function( id ) {
		$scope.editing_wine = true;
		angular.extend( $scope.temp_wine, WineFactory.getWineById( id ) );
	}

	$scope.hideAddOrEditWinePopup = function() {
		if( $scope.editing_wine )
			$scope.editing_wine = false;
		else if( $scope.adding_wine )
			$scope.adding_wine = false;
		$scope.temp_wine = {};
		return;
	}
} ] );