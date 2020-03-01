sap.ui.define(
  ["sap/uxap/BlockBase", "sap/ui/model/json/JSONModel"],
  function(BlockBase, JSONModel) {
    "use strict";

    var BlockLanguages = BlockBase.extend(
      "de.tammenit.ui5.homepage.view.SharedBlocks.languages.BlockLanguages",
      {
        metadata: {
          views: {
            Collapsed: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.languages.BlockLanguages",
              type: "XML"
            },
            Expanded: {
              viewName:
                "de.tammenit.ui5.homepage.view.SharedBlocks.languages.BlockLanguages",
              type: "XML"
            }
          }
        }
      }
    );
    return BlockLanguages;
  },
  true
);
