Wines = new Mongo.Collection( "wines" );
WineClubs = new Mongo.Collection( "wine_clubs" );
Wineries = new Mongo.Collection( "wineries" );
Specials = new Mongo.Collection( "specials" );
Images = new FS.Collection("images", {
  stores: [
    new FS.Store.GridFS("original")
  ],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
});
