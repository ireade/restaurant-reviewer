/* REVIEW AVERAG */

function getReviewAvergae(reviews) {

	if ( !reviews ) { return 0; }

	var totalStars = 0;
	var totalReviews = 0;

	for ( var i = 0; i < reviews.length; i++ ) {
		totalStars += parseInt(reviews[i].stars);
		totalReviews++;
	}

	var average = Math.round(totalStars / totalReviews);
	return average;
}

Handlebars.registerHelper('reviewAvergaeIcons', function(value, options) {
	var average = getReviewAvergae(value);
	var html = '';
	for (var i = 0; i < 5; i++) {
		if ( i < average ) {
			html += '<i class="fa fa-star"></i>';
		} else {
			html += '<i class="fa fa-star-o"></i>';
		}
	}
	return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('reviewAvergaeNumber', function(value, options) {
    return getReviewAvergae(value);
});

Handlebars.registerHelper('reviewStars', function(value, options) {
	var stars = value;
	var html = '';
	for (var i = 0; i < 5; i++) {
		if ( i < stars ) {
			html += '<i class="fa fa-star"></i>';
		} else {
			html += '<i class="fa fa-star-o"></i>';
		}
	}
	return new Handlebars.SafeString(html);
});









/* PRETTY TIME USING MOMENT.JS */
Handlebars.registerHelper('momentDate', function (value, options) {

	var rawDate = value;

	var year = rawDate.split('-')[0],
		month = rawDate.split('-')[1],
		day = rawDate.split('-')[2];

	var m = moment().year(year).month(month).date(day);
	m = m.calendar(null, {
		sameDay: '[Today]',
		nextDay: '[Tomorrow]',
		nextWeek: '[Next] dddd',
		lastDay: '[Yesterday]',
		lastWeek: '[Last] dddd',
		sameElse: 'dddd Do MMMM'
	});

	return m;

});


