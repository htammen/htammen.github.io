sap.ui.define(["sap/uxap/BlockBase"], function(BlockBase) {
  "use strict";

  var BlockSocial = BlockBase.extend(
    "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockSocial",
    {
      metadata: {
        views: {
          Collapsed: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockSocial",
            type: "XML"
          },
          Expanded: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.personal.BlockSocial",
            type: "XML"
          }
        }
      }
    }
  );

  return BlockSocial;
});
