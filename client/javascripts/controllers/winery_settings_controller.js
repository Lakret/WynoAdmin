angular.module( 'WynoAdmin' ).controller( 'WinerySettingsController', [
'$scope',
'$rootScope',
'$stateParams',
'$meteor',
function( $scope, $rootScope, $stateParams, $meteor ) {
	$scope.temp_winery = {};
	$scope.images = $meteor.collectionFS(Images, false, Images);
	$scope.$meteorSubscribe( 'wineries' ).then( function() {
	    $scope.temp_winery = Wineries.findOne( $stateParams.winery_id );
	});

	$scope.createWinery = function() {
		$scope.temp_winery.created_at = Date.now();
		$scope.temp_winery.updated_at = undefined;
		$meteor.call( 'createWinery', $scope.temp_winery )
	}

	$scope.updateWinery = function() {
		debugger;
		$scope.temp_winery.updated_at = Date.now();
		$meteor.call( 'updateWinery', $scope.temp_winery );
		$rootScope.goHome();
	}

    $scope.uploadFile = function (files) {
      	if (files.length > 0) {
        	$scope.images.save( files[ 0 ] ).then( function( result ) {
        		$scope.temp_winery.logo_src = result[ 0 ]._id._id;
        	});
      	}
    };
}]);