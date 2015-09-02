Wines = new Mongo.Collection( "wines" );
WineClubs = new Mongo.Collection( "wine_clubs" );
Wineries = new Mongo.Collection( "wineries" );
Specials = new Mongo.Collection( "specials" );

Meteor.publish( 'wines', function () {
    return Wines.find();
});
Meteor.publish( 'wine_clubs', function () {
    return WineClubs.find();
});
Meteor.publish( 'wineries', function () {
    return Wineries.find();
});
Meteor.publish( 'specials', function () {
    return Specials.find();
});


Meteor.methods({
    /**
     * Wines CRUD
     */
    createWine: function( wine ) {
        // Make sure the user is logged in before inserting a task
        // if (! Meteor.userId()) {
        //   throw new Meteor.Error('not-authorized');
        // }
        Wines.insert( wine );
    },
    updateWine: function( wine ) {
        Wines.update( wine._id, wine );
    },
    deleteWine: function ( wine_id ) {
        Wines.remove( wine_id );
        Specials.remove( { wine_id: wine_id } );
    },


    /**
     * Specials CRUD
     */
    createSpecial: function( special ) {
        Specials.insert( special );
    },
    updateSpecial: function( special ) {
        Specials.update( special._id, special );
    },
    deleteSpecial: function( special_id ) {
        Specials.remove( special_id );
    },


    /**
     * Wineries CRUD
     */
    createWinery: function( winery ) {
        Wineries.insert( winery );
    },
    updateWinery: function( winery ) {
        Wineries.update( winery._id, winery );
    },

    /**
     * Wine Clubs CRUD
     */
    createWineClub: function( wine_club ) {
        WineClubs.insert( wine_club );
    },
    updateWineClub: function( wine_club ) {
        WineClubs.update( wine_club._id, wine_club );
    },
    deleteWineClub: function( wine_club_id ) {
        WineClubs.remove( wine_club_id );
    }
});