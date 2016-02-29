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
	mq: '(min-width: 60em)'
};

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
 * Initialization
 */
(function () {

	// invoke
	fabricator
		.setActiveItem()
}());
