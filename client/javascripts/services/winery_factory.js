angular.module( 'WynoAdmin' ).factory( 'WineryFactory', function() {
	this.getWineryById = function( winery_id ) {
		if( typeof winery_id != "object" )
			winery_id = new Meteor.Collection.ObjectID( winery_id );
		return Wineries.findOne( winery_id );
	}

	return this;
});