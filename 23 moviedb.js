var movieDB = [{
	title: "The Shallows",
	rating: 3 + " stars",
	hasWatched: true
}, {
	title: "Legend of Tarzan",
	rating: 4.5 + " stars",
	hasWatched: true
}, {
	title: "Ghostbusters 2016",
	rating: 3.7 + " stars",
	hasWatched: false
}, {
	title: "Les Miserables",
	rating: 4.3 + " stars",
	hasWatched: true
}];

movieDB.forEach(function(i){
		if (i.hasWatched === true){
			console.log('You have watched "' + i.title + '" - ' + i.rating
		)
		} else {
			console.log("You have not watched" + ' "' + i.title + '" - ' + i.rating)		
		}
	
});

