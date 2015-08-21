angular.module( 'WynoAdmin' ).factory( 'WineFactory', function() {
	/**
	 * Looks up a wine via an ID (string or mogno objectid) 
	 * and returns the respective wine's object 
	 * @param {string | Object} wine_id
	 */
	this.getWineById = function( wine_id ) {
		if( typeof wine_id != "object" )
			wine_id = new Meteor.Collection.ObjectID( wine_id );
		return Wines.findOne( wine_id );
	}

	return this;
});