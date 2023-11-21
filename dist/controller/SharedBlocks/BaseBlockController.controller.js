sap.ui.define(["de/tammenit/ui5/homepage/controller/BaseController","sap/ui/core/format/DateFormat"],function(e,t){"use strict";return e.extend("de.tammenit.ui5.homepage.controller.SharedBlocks.BaseBlockController",{formatLabel:function(e){var t=sap.m.LabelDesign.Standard;var a=this.getModel("model");var r=a.getProperty(this.getView().getBindingContext().getPath()+"/Type");if(r!==undefined&&r==="emphasize"){if(e===1){t=sap.m.LabelDesign.Bold}}return t},formatBirthdayYearOfBirth:function(e){var a=Date.parse(e);var r=new Date(a);var n=t.getDateInstance({pattern:"y"});return n.format(r)},formatBirthdayAge:function(e){var t=Date.parse(e);var a=new Date(t);var r=new Date;var n=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate());var i=Date.UTC(r.getFullYear(),r.getMonth(),r.getDate());var o=1e3*60*60*24*365;return Math.floor((i-n)/o)},isLink:function(e){if(e){return true}else{return false}},isText:function(e){return!this.isLink(e)}})});
//# sourceMappingURL=BaseBlockController.controller.js.map