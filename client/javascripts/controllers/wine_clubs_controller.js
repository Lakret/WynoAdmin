angular.module( 'WynoAdmin' ).controller( 'WineClubsController', [
'$scope',
'$stateParams',
'$http',
'$location',
'$rootScope',
'$meteor',
'WineFactory',
function( $scope, $stateParams, $http, $location, $rootScope, $meteor, WineFactory ) {
	/**
	 * Initializes the scope
	 */
	$scope.initializeScope = function() {
		$scope.temp_wine_club = {};
		$scope.wine_clubs = $meteor.collection( function() {
	        return WineClubs.find( {}, { sort: { created_at: 1 } } );
	    });
		$scope.editing = false;
		$scope.adding = false;
	}

	$scope.addWineClub = function() {
		$scope.adding = true;
	}

	$scope.editWineClub = function() {
		$scope.editing = true;
	}

	$scope.closePopup = function() {
		$scope.adding = false;
		$scope.editing = false;
		$scope.temp_wine_club = {};
	}

	$scope.initializeScope() 
} ] );