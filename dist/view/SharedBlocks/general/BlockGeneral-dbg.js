sap.ui.define(["sap/uxap/BlockBase"], function(BlockBase) {
  "use strict";

  var BlockGeneral = BlockBase.extend(
    "de.tammenit.ui5.homepage.view.SharedBlocks.general.BlockGeneral",
    {
      metadata: {
        views: {
          Collapsed: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.general.BlockGeneral",
            type: "XML"
          },
          Expanded: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.general.BlockGeneral",
            type: "XML"
          }
        }
      }
    }
  );

  return BlockGeneral;
});
