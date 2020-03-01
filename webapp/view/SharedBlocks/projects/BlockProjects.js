sap.ui.define(
  ["sap/uxap/BlockBase"],
  function(BlockBase) {
    "use strict";

    var BlockProjects = BlockBase.extend(
      "de.tammenit.ui5.homepage.view.SharedBlocks.projects.BlockProjects",
      {
        metadata: {
          views: {
            Collapsed: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.projects.BlockProjects",
              type: "XML"
            },
            Expanded: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.projects.BlockProjects",
              type: "XML"
            }
          }
        }
      }
    );
    return BlockProjects;
  },
  true
);
