sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createMainModel: function () {
			var sModelPath = jQuery.sap.getModulePath("de.tammenit.ui5.homepage.model", "/profile.json");
			// var model = new sap.ui.model.json.JSONModel(sModelPath);
			var model = new sap.ui.model.json.JSONModel();
			model.loadData(sModelPath);
			// model.loadData('./webapp/model/profile.json');
			return model;
		},

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};

});