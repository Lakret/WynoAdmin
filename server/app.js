if (Meteor.isServer) {
	Wines = new Mongo.Collection("wines");
	WineClubs = new Mongo.Collection("wine_clubs");
	Wineries = new Mongo.Collection("wineries");
	Specials = new Mongo.Collection("specials");
}