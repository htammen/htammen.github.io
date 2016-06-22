sap.ui.define([
		"de/tammenit/ui5/homepage/controller/BaseController"
	], function (Controller) {
		"use strict";

		return Controller.extend("de.tammenit.ui5.homepage.controller.SharedBlocks.BaseBlockController", {
			formatLabel: function(rating) {
				var retValue = sap.m.LabelDesign.Standard;
				var model = this.getModel("model");
				var type = model.getProperty(this.getView().getBindingContext().getPath() + "/Type");
				if(type !== undefined && type === 'emphasize') {
					if(rating === 1) {
						retValue = sap.m.LabelDesign.Bold;
					}
				}
				return retValue;
			}

		});

	}
);