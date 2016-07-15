fetch('/data/restaurants.json')
.then(function(response) {
	return response.json();
})
.then(function(response) {

	var thisRestaurant;

	var restaurantID = location.search.split('?r=')[1];

	for (var i = 0; i < response.restaurants.length; i++) {
		var restaurant = response.restaurants[i];
		if ( restaurantID === restaurant.id ) {
			thisRestaurant = restaurant;
			break;
		}
	}

	var html = MyApp.templates.restaurant(thisRestaurant);
	document.getElementById('restaurantPage').innerHTML = html;
});


