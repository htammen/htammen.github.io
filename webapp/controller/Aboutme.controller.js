sap.ui.define(
  [
    "de/tammenit/ui5/homepage/controller/BaseController",
    "de/tammenit/ui5/homepage/model/models"
  ],
  function (BaseController, Models) {
    "use strict";

    return BaseController.extend(
      "de.tammenit.ui5.homepage.controller.Aboutme",
      {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf de.tammenit.ui5.homepage.view.Aboutme
         */
        onInit: function () {
          this.getView().bindElement({ path: "/", model: "profile" });
          const oRouter = this.getRouter();
          const oTarget = oRouter.getTarget("aboutme");
          oTarget.attachDisplay(this._handleDisplay.bind(this));
        },

        /**
         * This eventhandler retrieves data that was sent from the calling view. This data is
         * e.g. the target from which this view was caled, the email address and the current appId.
         * @param oEvent
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _handleDisplay: function (oEvent) {
          var title = this.getModel("i18n").getProperty(
            "view.profile.aboutme.header"
          );
          this.setModel(
            Models.createHeaderFragmentController(title),
            "headerModel"
          );
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
        onAfterRendering: function () { }
      }
    );
  }
);
