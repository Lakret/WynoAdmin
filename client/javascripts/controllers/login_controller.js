angular.module( 'WynoAdmin' ).controller( 'LoginController', [
'$scope',
'$rootScope',
'$state',
'$location',
'$meteor',
function( $scope, $rootScope, $state, $location, $meteor ) {
	$scope.login = { email: "", password: "" };
	$scope.login_error = false;
	$scope.creating_account = false;
	$scope.forgetting_password = false;
	$scope.new_admin = {};
	$scope.$meteorSubscribe( 'wineries' ).then( function() {
		$scope.wineries = $meteor.collection( function() {
	        return Wineries.find()
	    });
	});

	/**
	 * Attempts to log a user in. If that fails, show an 
	 * error. On success, take them to their winery's home
	 */
	$scope.submitLogin = function() {
		$meteor.loginWithPassword( $scope.login.email , $scope.login.password ).then( function() {
			$scope.login_error = false;
		   	$location.path( '/winery/' + $rootScope.currentUser.profile.winery_id );
		}, function( err ){
		    $scope.login_error = true;
		});
	}

	/**
	 * Opens the create account popup
	 */
	$scope.openCreateAccountPopup = function() {
		$scope.creating_account = true;
	}

	/**
	 * Closes the create account popup
	 */
	$scope.closeCreateAccountPopup = function() {
		$scope.creating_account = false;
		$scope.new_admin = {};
	}

	/**
	 * Creates an account when user presses submit in the
	 * create account popup
	 */
	$scope.createAdminAccount = function() {
		$meteor.createUser({
		    email: $scope.new_admin.email,
		    password: $scope.new_admin.password,
		    profile: { 
		    	first_name: $scope.new_admin.first_name,
		    	last_name: $scope.new_admin.last_name,
		    	admin: true,
		    	winery_id: $scope.new_admin.winery
		    }
		}).then(function(){
		   	$location.path( '/winery/' + $rootScope.currentUser.profile.winery_id );
		}, function(err){
			console.log('Login error - ', err);
		});

		$scope.closeCreateAccountPopup();
	}

	/**
	 * When user hits login state, check if they are already
	 * logged in. If they are take them to their winery's home
	 */
	$scope.checkIfLoggedIn = function() {
		$meteor.requireUser().then( function() { 
			$state.go( 'winery_home', { winery_id: $rootScope.currentUser.profile.winery_id } )
		}, function( err ) { 
			return; 
		} );
	}

	$scope.checkIfLoggedIn();
} ] );