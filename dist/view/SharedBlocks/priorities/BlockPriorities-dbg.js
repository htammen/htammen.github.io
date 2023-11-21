sap.ui.define(
  ["sap/uxap/BlockBase"],
  function(BlockBase) {
    "use strict";

    var BlockPriorities = BlockBase.extend(
      "de.tammenit.ui5.homepage.view.SharedBlocks.priorities.BlockPriorities",
      {
        metadata: {
          views: {
            Collapsed: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.priorities.BlockPriorities",
              type: "XML"
            },
            Expanded: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.priorities.BlockPriorities",
              type: "XML"
            }
          }
        }
      }
    );
    return BlockPriorities;
  },
  true
);
