sap.ui.define(["de/tammenit/ui5/homepage/controller/SharedBlocks/BaseBlockController.controller"],function(e){"use strict";return e.extend("de.tammenit.ui5.homepage.controller.SharedBlocks.presentation.Presentation",{formatDate:function(e){var t=Date.parse(e);var r=new Date(t);var n=sap.ui.core.format.DateFormat.getDateInstance({pattern:"MM / yyyy"});return n.format(r)},formatLinkType:function(e){return this.getResourceBundle().getText("view.profile.presentations.link.type."+e)}})});