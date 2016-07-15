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











/* INCREMENT VALUE BY ONE */
Handlebars.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
});


/* PRETTY TIME USING MOMENT.JS */
Handlebars.registerHelper('time', function (value, options) {

	var rawTime = value.split('T')[1];

	var hours = parseInt(rawTime.split(':')[0]);
	var minutes = parseInt(rawTime.split(':')[1]);
	var seconds = parseInt(rawTime.split(':')[2]);

	var m = moment().hours(hours).minutes(minutes);
	m = m.format('h:mma');
  
	return m;
});

/* PRETTY DATETIME USING MOMENT.JS */
Handlebars.registerHelper('datetime', function (value, options) {

	var rawDate = value.split('T')[0];
	var year = parseInt(rawDate.split('-')[0]);
	var month = parseInt(rawDate.split('-')[1]) - 1;
	var day = parseInt(rawDate.split('-')[2]);

	var rawTime = value.split('T')[1];
	var hours = parseInt(rawTime.split(':')[0]);
	var minutes = parseInt(rawTime.split(':')[1]);
	var seconds = parseInt(rawTime.split(':')[2]);

	var m = moment().year(year).month(month).date(day).hours(hours).minutes(minutes);
	m = m.calendar(null, {
		sameDay: '[Today at] h:mma',
		nextDay: '[Tomorrow at] h:mma',
		nextWeek: '[Next] dddd [at] h:mma',
		lastDay: '[Yesterday at] h:mma',
		lastWeek: '[Last] dddd [at] h:mma',
		sameElse: '[on] dddd Do MMMM [at] h:mma'
	});
  
	return m;
});



/* PRETTY DATETIME USING MOMENT.JS */
Handlebars.registerHelper('escape_html', function (value, options) {

	return value;

});
