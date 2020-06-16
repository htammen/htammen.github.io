sap.ui.define(
  ["sap/uxap/BlockBase"],
  function (BlockBase) {
    "use strict";

    var BlockITSkills = BlockBase.extend(
      "de.tammenit.ui5.homepage.view.SharedBlocks.itskills.BlockITSkills",
      {
        metadata: {
          views: {
            Collapsed: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.itskills.BlockITSkills",
              type: "XML"
            },
            Expanded: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.itskills.BlockITSkills",
              type: "XML"
            }
          }
        }
      }
    );
    return BlockITSkills;
  },
  true
);
