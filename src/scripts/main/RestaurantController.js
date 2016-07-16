function RestaurantController() {

	this._init();
}



var reviewDialog;


RestaurantController.prototype.addReview = function(author, date, rating, text) {

	function getReviewStars(stars) {
		var html = '';
		for (var i = 0; i < 5; i++) {
			if ( i < stars ) {
				html += '<i class="fa fa-star"></i>';
			} else {
				html += '<i class="fa fa-star-o"></i>';
			}
		}
		return html;
	};

	var reviewsList = document.querySelector('.ul-reviews');

	var reviewStars = getReviewStars(rating);

	var newReview = '<article class="review review--new" aria-live="polite">\
		                <p class="review__author" rel="author">'+author+'</p>\
		                <time class="review__date">'+momentDate(date)+'</time>\
		                <p class="review__stars">\
		                    <span class="sr-only">'+rating+' out of 5 Stars</span>\
		                    '+reviewStars+'\
		                </p>\
		                <p class="review__text">'+text+'</p>\
		            </article>';



	reviewsList.insertAdjacentHTML('afterbegin', newReview);

};


RestaurantController.prototype._init = function() {

	var restaurantPageEl = document.getElementById('restaurantPage');

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
		restaurantPageEl.innerHTML = html;

		reviewDialog = new Dialog(reviewDialogEl, dialogOverlay, '.open-review-dialog', null);
	});

};



var RestaurantController = new RestaurantController;





var reviewDialogEl = document.getElementById('review-dialog');
var dialogOverlay = document.querySelector('.dialog-overlay');



var reviewForm = document.getElementById('review-form');

reviewForm.addEventListener('submit', function(e) {

	e.preventDefault();

	var author = this['review_author'].value,
		date = this['review_date'].value,
		rating = this['review_rating'].value,
		text = this['review_text'].value;


	if ( !author | !date | !rating | !text ) {
		return;
	}

	RestaurantController.addReview(author, date, rating, text);
	reviewDialog.close();

});







