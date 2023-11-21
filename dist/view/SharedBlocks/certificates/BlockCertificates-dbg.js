sap.ui.define(["sap/uxap/BlockBase"], function(BlockBase) {
  "use strict";

  var BlockCertificates = BlockBase.extend(
    "de.tammenit.ui5.homepage.view.SharedBlocks.certificates.BlockCertificates",
    {
      metadata: {
        views: {
          Collapsed: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.certificates.BlockCertificates",
            type: "XML"
          },
          Expanded: {
            viewName:
              "de.tammenit.ui5.homepage.view.SharedBlocks.certificates.BlockCertificates",
            type: "XML"
          }
        }
      }
    }
  );

  return BlockCertificates;
});
