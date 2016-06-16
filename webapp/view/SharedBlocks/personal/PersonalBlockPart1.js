sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var PersonalBlockPart1 = BlockBase.extend("de.tammenit.ui5.homepage.view.SharedBlocks.personal.PersonalBlockPart1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "de.tammenit.ui5.homepage.view.SharedBlocks.personal.PersonalBlockPart1",
					type: "XML"
				},
				Expanded: {
					viewName: "de.tammenit.ui5.homepage.view.SharedBlocks.personal.PersonalBlockPart1",
					type: "XML"
				}
			}
		}
	});

	return PersonalBlockPart1;
});