'use strict';

// require('./prism');

/**
 * Global `fabricator` object
 * @namespace
 */
var fabricator = window.fabricator = {};


/**
 * Default options
 * @type {Object}
 */
fabricator.options = {
	menu: false,
	mq: '(min-width: 60em)'
};

// open menu by default if large screen
fabricator.options.menu = window.matchMedia(fabricator.options.mq).matches;

/**
 * Feature detection
 * @type {Object}
 */
fabricator.test = {};

// test for sessionStorage
fabricator.test.sessionStorage = (function () {
	var test = '_f';
	try {
		sessionStorage.setItem(test, test);
		sessionStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}());

// create storage object if it doesn't exist; store options
if (fabricator.test.sessionStorage) {
	sessionStorage.fabricator = sessionStorage.fabricator || JSON.stringify(fabricator.options);
}


/**
 * Cache DOM
 * @type {Object}
 */
fabricator.dom = {
	root: document.querySelector('html'),
	primaryMenu: document.querySelector('.menu'),
	menuItems: document.querySelectorAll('.menu li a'),
	menuToggle: document.querySelector('.menu-toggle')
};


/**
 * Get current option values from session storage
 * @return {Object}
 */
fabricator.getOptions = function () {
	return (fabricator.test.sessionStorage) ? JSON.parse(sessionStorage.fabricator) : fabricator.options;
};


/**
 * Add `active` class to active menu item
 */
fabricator.setActiveItem = function () {

	/**
	 * Match the window location with the menu item, set menu item as active
	 */
	var setActive = function () {

		// get current file and hash without first slash
		var current = (window.location.pathname + window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/ig, function (match, slash, file, hash) {
		    	hash = hash || '';
		    	file = file || '';
		    	return file + hash.split('.')[0];
			}) || 'overview.html',
			href;

		// find the current section in the items array
		for (var i = fabricator.dom.menuItems.length - 1; i >= 0; i--) {

			var item = fabricator.dom.menuItems[i];

			// get item href without first slash
			href = item.getAttribute('href').replace(/^\//g, '');

			if (href === current) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}

		}

	};

	window.addEventListener('hashchange', setActive);

	setActive();

	return this;

};


/**
 * Click handler to primary menu toggle
 * @return {Object} fabricator
 */
fabricator.menuToggle = function () {

	// shortcut menu DOM
	var toggle = fabricator.dom.menuToggle;

	var options = fabricator.getOptions();

	// toggle classes on certain elements
	var toggleClasses = function () {
		options.menu = !fabricator.dom.root.classList.contains('menu-active');
		fabricator.dom.root.classList.toggle('menu-active');

		if (fabricator.test.sessionStorage) {
			sessionStorage.setItem('fabricator', JSON.stringify(options));
		}
	};

	// toggle classes on ctrl + m press
	document.onkeydown = function (e) {
		e = e || event
		if (e.ctrlKey && e.keyCode == 'M'.charCodeAt(0)) {
			toggleClasses();
		}
	}

	// toggle classes on click
	toggle.addEventListener('click', function () {
		toggleClasses();
	});

	// close menu when clicking on item (for collapsed menu view)
	var closeMenu = function () {
		if (!window.matchMedia(fabricator.options.mq).matches) {
			toggleClasses();
		}
	};

	for (var i = 0; i < fabricator.dom.menuItems.length; i++) {
		fabricator.dom.menuItems[i].addEventListener('click', closeMenu);
	}

	return this;

};


/**
 * Open/Close menu based on session var.
 * Also attach a media query listener to close the menu when resizing to smaller screen.
 */
fabricator.setInitialMenuState = function () {

	// root element
	var root = document.querySelector('html');

	var mq = window.matchMedia(fabricator.options.mq);

	// if small screen
	var mediaChangeHandler = function (list) {
		if (!list.matches) {
			root.classList.remove('menu-active');
		} else {
			if (fabricator.getOptions().menu) {
				root.classList.add('menu-active');
			} else {
				root.classList.remove('menu-active');
			}
		}
	};

	mq.addListener(mediaChangeHandler);
	mediaChangeHandler(mq);

	return this;

};


/**
 * Initialization
 */
(function () {

	// invoke
	fabricator
		.setInitialMenuState()
		.menuToggle()
		.setActiveItem()
}());
