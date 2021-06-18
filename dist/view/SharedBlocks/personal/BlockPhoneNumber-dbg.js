sap.ui.define(["sap/uxap/BlockBase"], function(BlockBase) {
  "use strict";

  var BlockPhoneNumber = BlockBase.extend(
    "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockPhoneNumber",
    {
      metadata: {
        views: {
          Collapsed: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockPhoneNumber",
            type: "XML"
          },
          Expanded: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockPhoneNumber",
            type: "XML"
          }
        }
      }
    }
  );

  return BlockPhoneNumber;
});
