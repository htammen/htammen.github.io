sap.ui.define(
  ["sap/uxap/BlockBase"],
  function(BlockBase) {
    "use strict";

    var BlockAdresses = BlockBase.extend(
      "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockAdresses",
      {
        metadata: {
          views: {
            Collapsed: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockAdresses",
              type: "XML"
            },
            Expanded: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockAdresses",
              type: "XML"
            }
          }
        }
      }
    );
    return BlockAdresses;
  },
  true
);
