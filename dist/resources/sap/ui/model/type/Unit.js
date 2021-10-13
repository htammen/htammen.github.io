/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/format/NumberFormat","sap/ui/model/CompositeType","sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/ui/core/LocaleData","sap/base/strings/hash","sap/ui/thirdparty/jquery","sap/base/util/isEmptyObject"],function(t,e,a,i,n,s,r,o,u){"use strict";var m=e.extend("sap.ui.model.type.Unit",{constructor:function(t,a,i){e.apply(this,arguments);this.sName="Unit";this.bShowMeasure=!t||!("showMeasure"in t)||t.showMeasure;this.bShowNumber=!t||!("showNumber"in t)||t.showNumber;this.bUseRawValues=true;this.aDynamicFormatOptionNames=i}});m.prototype._getInstance=function(e,a){var i=this.createFormatOptions(e);if(a&&!this.oFormatOptions.customUnits&&!i.customUnits){var n=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();var u=s.getInstance(n);var c=u.getUnitFromMapping(a)||a;var p=u.getUnitFormat(c);if(p){var h=o.extend({},p);h.decimals=i.decimals!=undefined?i.decimals:h.decimals;h.precision=i.precision!=undefined?i.precision:h.precision;i.customUnits={};i.customUnits[a]=h}}var l=i;if(this.oFormatOptions){l=o.extend({},this.oFormatOptions,i)}if(this.getMetadata().getClass()!==m){var f=this.getMetadata();f._mTypeInstanceCache=f._mTypeInstanceCache||{};var g=r(JSON.stringify(l)||"");var y=f._mTypeInstanceCache[g];if(!y){y=t.getUnitInstance(l);f._mTypeInstanceCache[g]=y}return y}else{return t.getUnitInstance(l)}};m.prototype._clearInstances=function(){if(this.getMetadata().getClass()!==m){var t=this.getMetadata();if(t._mTypeInstanceCache){t._mTypeInstanceCache={}}}};m.prototype.createFormatOptions=function(t){var e={};if(this.aDynamicFormatOptionNames&&t.length>=this.aDynamicFormatOptionNames.length){this.aDynamicFormatOptionNames.forEach(function(a,i){if(a){e[a]=t[i]}})}return e};m.prototype.extractArguments=function(t){return Array.isArray(t)&&t.length>2?t.slice(2):[]};m.prototype.formatValue=function(t,e){var i=t;if(t==undefined||t==null){return null}if(this.oInputFormat){i=this.oInputFormat.parse(t)}if(!Array.isArray(i)){throw new a("Cannot format Unit: "+t+" has the wrong format")}if((i[0]==undefined||i[0]==null)&&this.bShowNumber){return null}switch(this.getPrimitiveType(e)){case"string":this.aDynamicValues=this.extractArguments(i);this.oOutputFormat=this._getInstance(this.aDynamicValues,i[1]);return this.oOutputFormat.format(i);case"int":case"float":case"any":default:throw new a("Don't know how to format Unit to "+e)}};m.prototype.parseValue=function(t,e){var a;switch(this.getPrimitiveType(e)){case"string":this.oOutputFormat=this._getInstance(this.aDynamicValues);a=this.oOutputFormat.parse(t);if(!Array.isArray(a)||this.bShowNumber&&isNaN(a[0])){throw new i(this.getInvalidUnitText())}break;case"int":case"float":default:throw new i("Don't know how to parse Unit from "+e)}if(this.oInputFormat){a=this.oInputFormat.format(a)}return a};m.prototype.validateValue=function(e){if(this.oConstraints){var a=sap.ui.getCore().getLibraryResourceBundle(),i=[],s=[],r=e,u;if(this.oInputFormat){r=this.oInputFormat.parse(e)}u=r[0];o.each(this.oConstraints,function(e,n){switch(e){case"minimum":if(u<n){i.push("minimum");s.push(a.getText("Unit.Minimum",[n]))}break;case"maximum":if(u>n){i.push("maximum");s.push(a.getText("Unit.Maximum",[n]))}break;case"decimals":var r=t._shiftDecimalPoint(u,n);if(Math.floor(r)!==r){i.push("decimals");s.push(a.getText("Unit.Decimals",[n]))}break}});if(i.length>0){throw new n(s.join(" "),i)}}};m.prototype.setFormatOptions=function(t){this.oFormatOptions=Object.assign(t.style!=="short"&&t.style!=="long"?{preserveDecimals:true}:{},t);this._clearInstances();this._createInputFormat()};m.prototype._handleLocalizationChange=function(){this._clearInstances();this._createInputFormat()};m.prototype._createInputFormat=function(){var e=this.oFormatOptions.source;if(e){if(u(e)){e={groupingEnabled:false,groupingSeparator:",",decimalSeparator:"."}}this.oInputFormat=t.getUnitInstance(e)}};m.prototype.getInvalidUnitText=function(){return sap.ui.getCore().getLibraryResourceBundle().getText("Unit.Invalid")};m.prototype.getPartsIgnoringMessages=function(){if(!this.bShowMeasure){return[1]}else if(!this.bShowNumber){return[0]}return[]};return m});