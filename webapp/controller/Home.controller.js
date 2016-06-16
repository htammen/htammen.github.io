sap.ui.define([
		"de/tammenit/ui5/homepage/controller/BaseController"
	], function(BaseController) {
	"use strict";
	return BaseController.extend("de.tammenit.ui5.homepage.controller.Home", {
		/**
		 *@memberOf de.tammenit.ui5.homepage.controller.Home
		 */
		showAboutMe: function() {
			this.getRouter().navTo("aboutme");
		},
		
			onLinkPressed : function () {
				sap.m.MessageToast.show("Hello world");
				this.getRouter().navTo("home");
			}
		
	});
});