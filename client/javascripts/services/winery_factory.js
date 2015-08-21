angular.module( 'WynoAdmin' ).factory( 'WineryFactory', function() {
	this.getWineryById = function( winery_id ) {
		var oid = new Meteor.Collection.ObjectID( winery_id );
		return Wineries.findOne( oid );
	}

	return this;
});