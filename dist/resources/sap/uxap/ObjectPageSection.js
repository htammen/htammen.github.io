/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ObjectPageSectionBase","sap/ui/Device","sap/m/Button","sap/ui/core/StashedControlSupport","./ObjectPageSubSection","./library","sap/m/library","./ObjectPageSectionRenderer"],function(t,e,i,o,n,s,u,a){"use strict";var r=u.ButtonType;var p=t.extend("sap.uxap.ObjectPageSection",{metadata:{library:"sap.uxap",properties:{showTitle:{type:"boolean",group:"Appearance",defaultValue:true},titleUppercase:{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"subSections",aggregations:{subSections:{type:"sap.uxap.ObjectPageSubSection",multiple:true,singularName:"subSection"},_showHideAllButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"},_showHideButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"}},associations:{selectedSubSection:{type:"sap.uxap.ObjectPageSubSection",multiple:false}},designtime:"sap/uxap/designtime/ObjectPageSection.designtime"}});p.MEDIA_RANGE=e.media.RANGESETS.SAP_STANDARD;p._getClosestSection=function(t){var e=typeof t==="string"&&sap.ui.getCore().byId(t)||t;return e instanceof n?e.getParent():e};p._getLibraryResourceBundle=function(){return sap.ui.getCore().getLibraryResourceBundle("sap.uxap")};p.prototype.getSectionText=function(t){return p._getLibraryResourceBundle().getText("SECTION_CONTROL_NAME")};p.prototype._expandSection=function(){t.prototype._expandSection.call(this)._updateShowHideAllButton(!this._thereAreHiddenSubSections())};p.prototype.init=function(){t.prototype.init.call(this);this._sContainerSelector=".sapUxAPObjectPageSectionContainer"};p.prototype.exit=function(){this._detachMediaContainerWidthChange(this._updateImportance,this)};p.prototype._getImportanceLevelToHide=function(t){var e=this._getObjectPageLayout(),i=t||this._getCurrentMediaContainerRange(),o=e&&e.getShowOnlyHighImportance();return this._determineTheLowestLevelOfImportanceToShow(i.name,o)};p.prototype._updateImportance=function(t){var e=this._getObjectPageLayout(),i=this._getImportanceLevelToHide(t),o=this.bOutput&&document.getElementById(this.getId()+"-header");this.getSubSections().forEach(function(t){t._applyImportanceRules(i)});this._applyImportanceRules(i);this._updateShowHideAllButton(false);o&&o.classList.toggle("sapUxAPObjectPageSectionHeaderHidden",!this._isTitleVisible());if(e&&this.getDomRef()){e._requestAdjustLayout()}};p.prototype._determineTheLowestLevelOfImportanceToShow=function(t,e){if(e||t==="Phone"){return s.Importance.High}if(t==="Tablet"){return s.Importance.Medium}return s.Importance.Low};p.prototype.connectToModels=function(){this.getSubSections().forEach(function(t){t.connectToModels()})};p.prototype._allowPropagationToLoadedViews=function(t){this.getSubSections().forEach(function(e){e._allowPropagationToLoadedViews(t)})};p.prototype.onBeforeRendering=function(){t.prototype.onBeforeRendering.call(this);this._detachMediaContainerWidthChange(this._updateImportance,this);this._updateImportance()};p.prototype.onAfterRendering=function(){this._attachMediaContainerWidthChange(this._updateImportance,this)};p.prototype._isTitleVisible=function(){return this.getShowTitle()&&this._getInternalTitleVisible()||this._getShouldDisplayExpandCollapseButton()||this._getShouldDisplayShowHideAllButton()};p.prototype._setSubSectionsFocusValues=function(){var t=this._getVisibleSubSections()||[],e=this.getSelectedSubSection(),i;if(t.length===0){return this}if(t.length===1){t[0]._setToFocusable(false);return this}t.forEach(function(t){if(e===t.getId()){t._setToFocusable(true);i=true}else{t._setToFocusable(false)}});if(!i){t[0]._setToFocusable(true)}return this};p.prototype._disableSubSectionsFocus=function(){var t=this.getSubSections()||[];t.forEach(function(t){t._setToFocusable(false)});return this};p.prototype._thereAreHiddenSubSections=function(){return this.getSubSections().some(function(t){return t._getIsHidden()})};p.prototype._updateShowHideSubSections=function(t){this.getSubSections().forEach(function(e){if(t&&e._shouldBeHidden()){e._updateShowHideState(true)}else if(!t){e._updateShowHideState(false)}})};p.prototype._getShouldDisplayShowHideAllButton=function(){return this.getSubSections().some(function(t){return t._shouldBeHidden()})};p.prototype._getShouldDisplayExpandCollapseButton=function(){return this._getIsHidden()};p.prototype._showHideContentAllContent=function(){var t=this._thereAreHiddenSubSections();if(this._getIsHidden()&&t){this._updateShowHideState(false)}this._updateShowHideSubSections(!t);this._updateShowHideAllButton(t)};p.prototype._updateShowHideState=function(e){if(this._getIsHidden()===e){return this}this._updateShowHideButton(e);this._getShowHideAllButton().setVisible(this._getShouldDisplayShowHideAllButton());return t.prototype._updateShowHideState.call(this,e)};p.prototype._updateShowHideAllButton=function(t){this._getShowHideAllButton().setVisible(this._getShouldDisplayShowHideAllButton()).setText(this._getShowHideAllButtonText(t))};p.prototype._getVisibleSubSections=function(){return this.getSubSections().filter(function(t){return t.getVisible()&&t._getInternalVisible()})};p.prototype._getShowHideAllButton=function(){if(!this.getAggregation("_showHideAllButton")){this.setAggregation("_showHideAllButton",new i({visible:this._getShouldDisplayShowHideAllButton(),text:this._getShowHideAllButtonText(!this._thereAreHiddenSubSections()),press:this._showHideContentAllContent.bind(this),type:r.Transparent}).addStyleClass("sapUxAPSectionShowHideButton"),true)}return this.getAggregation("_showHideAllButton")};p.prototype._getShowHideButtonText=function(t){return p._getLibraryResourceBundle().getText(t?"HIDE":"SHOW")};p.prototype._getShowHideAllButtonText=function(t){return p._getLibraryResourceBundle().getText(t?"HIDE_ALL":"SHOW_ALL")};p.prototype._updateShowHideButton=function(t){this._getShowHideButton().setVisible(this._shouldBeHidden()).setText(this._getShowHideButtonText(!t))};p.prototype._getShowHideButton=function(){if(!this.getAggregation("_showHideButton")){this.setAggregation("_showHideButton",new i({visible:this._shouldBeHidden(),text:this._getShowHideButtonText(!this._getIsHidden()),press:this._showHideContent.bind(this),type:r.Transparent}).addStyleClass("sapUxAPSectionShowHideButton"),true)}return this.getAggregation("_showHideButton")};o.mixInto(p);return p});