sap.ui.define(["sap/uxap/BlockBase"], function(BlockBase) {
  "use strict";

  var BlockTrainings = BlockBase.extend(
    "de.tammenit.ui5.homepage.view.SharedBlocks.trainings.BlockTrainings",
    {
      metadata: {
        views: {
          Collapsed: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.trainings.BlockTrainings",
            type: "XML"
          },
          Expanded: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.trainings.BlockTrainings",
            type: "XML"
          }
        }
      }
    }
  );

  return BlockTrainings;
});
