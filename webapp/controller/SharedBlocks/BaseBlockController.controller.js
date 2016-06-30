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
			},
			
			/**
			 * formats the given birhtday (e.g. 1964-04-21) so that it returns only the year of birth
			 */
			formatBirthdayYearOfBirth: function(birthday) {
				var d = Date.parse(birthday);
				var date = new Date(d);
				var df = sap.ui.core.format.DateFormat.getDateInstance({pattern: 'y'});
				return df.format(date);
			},
			
			formatBirthdayAge: function(birthday) {
				var d = Date.parse(birthday);
				var date = new Date(d);
				var today = new Date();
				var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
				var utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
				var _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
				return Math.floor((utc2 - utc1) / _MS_PER_YEAR);
			},
			
		getCurrentLangValue: function(obj) {
			if(typeof obj === "object") {
				var config = sap.ui.getCore().getConfiguration();
				var sCurrentLanguage = config.getLanguage();
				var retValue = obj[sCurrentLanguage];
				if(retValue === undefined) {
					// maybe sCurrentLanguage is something like "de-DE" and profile defines only text for "de"
					sCurrentLanguage = config.getLocale().getLanguage(); // get the language "de" from locale
					retValue = obj[sCurrentLanguage];
					if(retValue === undefined) {
						// fallback to an english text
						retValue = obj.en;
						if(retValue === undefined) {
							// fallback to the first value 
							if(Object.keys(obj).length > 0) {
								sCurrentLanguage = Object.keys(obj)[0];
								retValue = obj[sCurrentLanguage];
							}
						}
					}
				}
				return retValue;
			} else {
				return obj;
			}
		}

		});
	}
);