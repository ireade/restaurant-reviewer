/* ----------------------------

	2. Dialog Prototype
	
---------------------------- */

function Dialog(dialogEl, overlayEl, openDialogSel, closeDialogSel) {

	this.dialogEl = dialogEl;
	this.overlayEl = overlayEl;
	this.focusedElBeforeOpen;

	var focusableEls = this.dialogEl.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
	this.focusableEls = Array.prototype.slice.call(focusableEls);

	this.firstFocusableEl = this.focusableEls[0];
	this.lastFocusableEl = this.focusableEls[ this.focusableEls.length - 1 ];

	this.elsToHide = document.querySelectorAll('.site-main, .site-header, .site-footer');
	this.elsToHide = Array.prototype.slice.call(this.elsToHide);


	this.addEventListeners(openDialogSel, closeDialogSel);

	this.close();

}

Dialog.prototype.open = function() {

	var Dialog = this;

	this.dialogEl.removeAttribute('aria-hidden');
	this.overlayEl.removeAttribute('aria-hidden');

	for (var i = 0; i < this.elsToHide.length; i++) {
		this.elsToHide[i].setAttribute('aria-hidden', true);
	}


	this.focusedElBeforeOpen = document.activeElement;

	this.dialogEl.addEventListener('keydown', function(e) {
		Dialog.handleKeyDown(e);
	});

	this.overlayEl.addEventListener('click', function() {
		Dialog.close();
	});

	this.firstFocusableEl.focus();

};

Dialog.prototype.close = function() {

	for (var i = 0; i < this.elsToHide.length; i++) {
		this.elsToHide[i].removeAttribute('aria-hidden');
	}


	this.dialogEl.setAttribute('aria-hidden', true);
	this.overlayEl.setAttribute('aria-hidden', true);

	if ( this.focusedElBeforeOpen ) {
		this.focusedElBeforeOpen.focus();
	}
	
};


Dialog.prototype.handleKeyDown = function(e) {

	var Dialog = this;

	var KEY_TAB = 9;
	var KEY_ESC = 27;

	function handleBackwardTab() {
		if ( document.activeElement === Dialog.firstFocusableEl ) {
			e.preventDefault();
			Dialog.lastFocusableEl.focus();
		}
	}

	function handleForwardTab() {
		if ( document.activeElement === Dialog.lastFocusableEl ) {
			e.preventDefault();
			Dialog.firstFocusableEl.focus();
		}
	}

	switch(e.keyCode) {
	case KEY_TAB:
		if ( Dialog.focusableEls.length === 1 ) {
			e.preventDefault();
			return;
		} else {
			if ( e.shiftKey ) {
				handleBackwardTab();
			} else {
				handleForwardTab();
			}
		}
		break;
	case KEY_ESC:
		Dialog.close();
		break;
	default:
		break;
	}


};

Dialog.prototype.addEventListeners = function(openDialogSel, closeDialogSel) {

	var Dialog = this;

	if ( openDialogSel ) {
		var openDialogEls = document.querySelectorAll(openDialogSel);
		for ( var i = 0; i < openDialogEls.length; i++ ) {
			openDialogEls[i].addEventListener('click', function() { 
				Dialog.open();
			});
		}

	}
	
	if ( closeDialogSel ) {
		var closeDialogEls = document.querySelectorAll(closeDialogSel);
		for ( var i = 0; i < closeDialogEls.length; i++ ) {
			closeDialogEls[i].addEventListener('click', function() {
				Dialog.close();
			});
		}
	}

};



/* ----------------------------

	Moment
	
---------------------------- */

var momentDate = function (rawDate) {

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

};










