sap.ui.define(
  ["sap/uxap/BlockBase"],
  function(BlockBase) {
    "use strict";

    var BlockBranches = BlockBase.extend(
      "de.tammenit.ui5.homepage.view.SharedBlocks.branches.BlockBranches",
      {
        metadata: {
          views: {
            Collapsed: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.branches.BlockBranches",
              type: "XML"
            },
            Expanded: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.branches.BlockBranches",
              type: "XML"
            }
          }
        }
      }
    );
    return BlockBranches;
  },
  true
);
