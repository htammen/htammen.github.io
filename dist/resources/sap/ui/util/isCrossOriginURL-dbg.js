/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/*global URL */
sap.ui.define([], function() {
	"use strict";

	/**
	 * If the given URL is cross-origin, checks whether its origin is different from
	 * the origin of the current document.
	 *
	 * @param {sap.ui.core.URI} sHref The URL to check
	 * @returns {boolean} Whether the URL is a cross-origin URL
	 * @private
	 * @ui5-restricted
	 * @alias module:sap/ui/util/isCrossOriginURL
	 * @since 1.84
	 */
	function isCrossOriginURL(sHref) {
		var oURL = new URL(sHref, document.baseURI),
			sOrigin = window.location.origin || new URL(document.baseURI);

		return oURL.origin !== sOrigin;
	}

	return isCrossOriginURL;
});
