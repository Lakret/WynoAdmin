Wines = new Mongo.Collection( "wines" );
WineClubs = new Mongo.Collection( "wine_clubs" );
Wineries = new Mongo.Collection( "wineries" );
Specials = new Mongo.Collection( "specials" );

angular.module( 'WynoAdmin', ['angular-meteor', 'ui.router'] );
