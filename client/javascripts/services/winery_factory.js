angular.module( 'WynoAdmin' ).factory( 'WineryFactory', function() {
	this.getWineryById = function( winery_id ) {
		return Wineries.findOne( winery_id );
	}

	return this;
});