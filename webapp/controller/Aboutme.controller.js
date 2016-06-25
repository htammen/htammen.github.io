sap.ui.define([
	"de/tammenit/ui5/homepage/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("de.tammenit.ui5.homepage.controller.Aboutme", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf de.tammenit.ui5.homepage.view.Aboutme
		 */
		onInit: function() {
			this.getView().bindElement("/Profiles/0");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf de.tammenit.ui5.homepage.view.Aboutme
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf de.tammenit.ui5.homepage.view.Aboutme
		 */
		onAfterRendering: function() {
			//sap.ui.core.BusyIndicator.hide();
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf de.tammenit.ui5.homepage.view.Aboutme
		 */
		//	onExit: function() {
		//
		//	}
		
		downloadProfile: function() {
			// open the PDF in a new window
			//pdfMake.createPdf(this.createPDFDefinition()).open();
			window.open("http://tammen-it-solutions.de/wp-content/uploads/2015/06/profil_ht.pdf");
		},
		
		
		createPDFDefinition: function() {
			var ctx = this.getView().getBindingContext();
			var i18n = this.getModel("i18n");
			var profile = this.getModel().getProperty(ctx.getPath());
			var docDefinition = {
				pageSize: 'A4',
				// [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
				pageMargins: [ 40, 60, 40, 60 ],
				header: {
					table: {
						// headers are automatically repeated if the table spans over multiple pages
						// you can declare how many rows should be treated as headers
						headerRows: 1,
						widths: [ '*', 'auto', 100, '*' ],
						
						body: [
						  [ 'First', 'Second', 'Third', 'The last one' ],
						  [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
						  [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
						]
					}	
				},
				footer: {
					
				},
				content: [
					i18n.getProperty("appTitle") + ": " + profile.Name,
					profile.Availability,
					profile.Birthday,
					profile.Nationality
				]
			};
			
			return docDefinition;
		}


	});

});