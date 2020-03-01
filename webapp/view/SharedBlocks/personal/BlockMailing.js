sap.ui.define(
  ["sap/uxap/BlockBase"],
  function(BlockBase) {
    "use strict";

    var BlockMailing = BlockBase.extend(
      "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockMailing",
      {
        metadata: {
          views: {
            Collapsed: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockMailing",
              type: "XML"
            },
            Expanded: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockMailing",
              type: "XML"
            }
          }
        }
      }
    );

    return BlockMailing;
  },
  true
);
