sap.ui.define(["sap/uxap/BlockBase"], function(BlockBase) {
  "use strict";

  var BlockPresentations = BlockBase.extend(
    "de.tammenit.ui5.homepage.view.SharedBlocks.presentations.BlockPresentations",
    {
      metadata: {
        views: {
          Collapsed: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.presentations.BlockPresentations",
            type: "XML"
          },
          Expanded: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.presentations.BlockPresentations",
            type: "XML"
          }
        }
      }
    }
  );

  return BlockPresentations;
});
