/* ----------------------------

	IndexController
	
---------------------------- */

function IndexController() {
	this._init();
}


IndexController.prototype._filter = function(restaurants, filterLocation, filterCuisine, filterRating) {
	return new Promise(function(resolve, reject) {


		var response = [];

		for (var i = 0; i < restaurants.length; i++) {

			var restaurant = restaurants[i];
			var rating = getReviewAvergae(restaurant.reviews);

			var isCorrectLocation = true;
			var isCorrectCuisine = true;
			var isCorrectRating = true;

			if ( filterLocation ) {
				if ( filterLocation !== 'all' & filterLocation !== restaurant.location.area ) {
					isCorrectLocation = false;
				}
			}
			if ( filterCuisine ) {
				if ( filterCuisine !== 'all' & filterCuisine !== restaurant.cuisine ) {
					isCorrectCuisine = false;
				}
			}
			if ( filterRating ) {
				if ( filterRating !== 'all' & filterRating !== rating ) {
					isCorrectRating = false;
				}
			}

			if ( isCorrectLocation && isCorrectCuisine && isCorrectRating ) {
				response.push(restaurant);
			}

		} // end for

		resolve({restaurants: response});
	});
};




IndexController.prototype.filterRestaurants = function(filterLocation, filterCuisine, filterRating) {

	var restaurantsEl = document.getElementById('restaurants');
	restaurantsEl.setAttribute('aria-busy', 'true');

	fetch('./data/restaurants.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		return Index._filter(response.restaurants, filterLocation, filterCuisine, filterRating);
	})
	.then(function(response) {

		restaurantsEl.removeAttribute('aria-busy');

		if ( response.restaurants.length == 0 ) {
			restaurantsEl.innerHTML = "Sorry, we couldn't find any restaurants matching that criteria";
			return;
		}

		restaurantsEl.innerHTML = MyApp.templates.restaurantSnippet(response);
	});
};


IndexController.prototype._init = function() {

	var IndexController = this;
	var restaurantsEl = document.getElementById('restaurants');

	restaurantsEl.setAttribute('aria-busy', 'true');

	fetch('./data/restaurants.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		if ( response.restaurants.length == 0 ) {
			restaurantsEl.innerHTML = "Sorry, we couldn't find any restaurants matching that criteria";
			return;
		}
		restaurantsEl.innerHTML = MyApp.templates.restaurantSnippet(response);
	});

};

var Index = new IndexController();




var filterDialogEl = document.getElementById('filter-dialog');
var dialogOverlay = document.querySelector('.dialog-overlay');

new Dialog(filterDialogEl, dialogOverlay, '.open-filter-dialog', '.close-filter-dialog');




var filterForm = document.getElementById('filter-form');

filterForm.addEventListener('submit', function(e) {

	e.preventDefault();

	var filterLocation = this['filter_location'].value, 
		filterCuisine = this['filter_cuisine'].value, 
		filterRating = this['filter_rating'].value;

	Index.filterRestaurants(filterLocation, filterCuisine, filterRating);

});



