angular.module( 'WynoAdmin' ).controller( 'SpecialsController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'$meteor',
'WineFactory',
function( $scope, $stateParams, $http, $location, $rootScope, $meteor, WineFactory ) {
	$scope.specials = $meteor.collection( function() {
        return Specials.find()
    });

    $scope.wine_factory = WineFactory;
} ] );