sap.ui.define(
  [
    "de/tammenit/ui5/homepage/controller/SharedBlocks/BaseBlockController.controller"
  ],
  function(BaseController) {
    "use strict";

    return BaseController.extend(
      "de.tammenit.ui5.homepage.controller.SharedBlocks.presentation.Presentation",
      {
        formatDate: function(dateStr) {
          var d = Date.parse(dateStr);
          var date = new Date(d);
          var df = sap.ui.core.format.DateFormat.getDateInstance({
            pattern: "MM / yyyy"
          });
          return df.format(date);
        },

        formatLinkType: function(type) {
          return this.getResourceBundle().getText(
            "view.profile.presentations.link.type." + type
          );
        }
      }
    );
  }
);
