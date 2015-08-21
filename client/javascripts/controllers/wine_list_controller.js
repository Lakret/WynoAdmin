angular.module( 'WynoAdmin' ).controller( 'WineListController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'$meteor',
function( $scope, $stateParams, $http, $location, $rootScope, $meteor ) {
	$scope.wines = $meteor.collection( function() {
	    return Wines.find()
	});
} ] );