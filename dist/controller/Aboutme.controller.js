sap.ui.define(["de/tammenit/ui5/homepage/controller/BaseController","de/tammenit/ui5/homepage/model/models"],function(e,t){"use strict";return e.extend("de.tammenit.ui5.homepage.controller.Aboutme",{onInit:function(){this.getView().bindElement("/Profiles/0");const e=this.getRouter();const t=e.getTarget("aboutme");t.attachDisplay(this._handleDisplay.bind(this))},_handleDisplay:function(e){var n=this.getModel("i18n").getProperty("view.profile.aboutme.header");this.setModel(t.createHeaderFragmentController(n),"headerModel")},onAfterRendering:function(){}})});