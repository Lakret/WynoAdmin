if (Meteor.isServer) {
	Wines = new Mongo.Collection("wines");
	WineClubs = new Mongo.Collection("wine_clubs");
	Wineries = new Mongo.Collection("wineries");
	Specials = new Mongo.Collection("specials");
}

Meteor.methods({
    /**
     * Wines CRUD
     */
    createWine: function( wine ) {
        // Make sure the user is logged in before inserting a task
        // if (! Meteor.userId()) {
        //   throw new Meteor.Error('not-authorized');
        // }
        Wines.insert( {  
            name: wine.name,
            winery_id: wine.winery_id,
            created_at: wine.created_at,
            updated_at: wine.updated_at,
            photo: wine.photo,
            vintage: wine.vintage,
            cases_produced: wine.cases_produced,
            price:{  
                per_glass: wine.price.per_glass,
                per_bottle: wine.price.per_bottle,
                per_case: wine.price.per_case
            },
            location: wine.location,
            description: wine.description,
            variety: wine.variety,
            type: wine.type,
            in_tasting: wine.in_tasting,
            modules: {  
                goes_well_with: wine.modules.goes_well_with,
                richness: wine.modules.richness
            }
        } );
    },
    updateWine: function( wine ) {
        Wines.update( wine._id, wine );
    },
    deleteWine: function ( wine_id ) {
        Wines.remove( wine_id );
    },


    /**
     * Specials CRUD
     */
    createSpecial: function( special ) {
        Specials.insert( {
            title: special.title,
            winery_id: special.winery_id,
            created_at: special.created_at,
            updated_at: special.updated_at,
            wine_id: special.wine_id
        } )
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
        Wineries.insert( {
            name: winery.name,
            created_at: winery.created_at,
            updated_at: winery.updated_at,
            address: {
                street: winery.address.street,
                city: winery.address.city,
                state: winery.address.state,
                zip: winery.address.zip
            },
            logo_src: winery.logo_src
        })
    },
    updateWinery: function( winery ) {
        Wineries.update( winery._id, winery );
    }
});