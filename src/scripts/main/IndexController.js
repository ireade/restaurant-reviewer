
/* ----------------------------

	2. IndexController
	
---------------------------- */

function IndexController() {

}


fetch('/data/restaurants.json')
.then(function(response) {
	return response.json();
})
.then(function(response) {

	var html = MyApp.templates.restaurantSnippet(response);
	document.getElementById('restaurants').innerHTML = html;
});

var Index = new IndexController();




var filterDialogEl = document.getElementById('filter-dialog');
var dialogOverlay = document.querySelector('.dialog-overlay');

new Dialog(filterDialogEl, dialogOverlay, '.open-filter-dialog', '.close-filter-dialog');