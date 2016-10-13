sap.ui.define([
		"de/tammenit/ui5/homepage/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast"
	], function(BaseController, JSONModel, MessageToast) {
	"use strict";
	return BaseController.extend("de.tammenit.ui5.homepage.controller.Home", {
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf de.tammenit.ui5.homepage.view.Aboutme
		 */
		onInit: function() {
			var oViewModel = new JSONModel({
				busy : false,
				delay : 0
			});
			this.setModel(oViewModel, "viewModel");
			
			var pdfModel = new JSONModel();
			pdfModel.loadData('./webapp/model/pdfs.json');
			this.getView().setModel(pdfModel, "pdfs");

			var oRouter = this.getRouter();
			oRouter.getRoute("home").attachPatternMatched(function() {
				this.getModel("viewModel").setProperty("/busy", false);
			}, this);
			
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf de.tammenit.ui5.homepage.view.Aboutme
		 */
		onAfterRendering: function() {
		},
		
		/**
		 * Navigates to the aboutme route where the profile is displayed
		 */
		showAboutMe: function() {
			this.getModel("viewModel").setProperty("/busy", true);
			this.getRouter().navTo("aboutme");
		},
		
		/**
		 * Navigates to the projects route where the projects are displayed
		 */
		showProjects: function() {
			this.getModel("viewModel").setProperty("/busy", true);
			this.getRouter().navTo("projects");
		},
		
		/**
		 * Navigates to the pdf download route target to enable the user to download some PDF versions of my profile
		 */
		showPDFDownload: function() {
			this.getModel("viewModel").setProperty("/busy", true);
			this.getRouter().navTo("pdf");
		},
	
		comingNext: function() {
			MessageToast.show("Coming next");
		}		
	});
});