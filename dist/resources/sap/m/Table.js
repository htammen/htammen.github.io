/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/Device","./library","./ListBase","./ListItemBase","./CheckBox","./TableRenderer","sap/base/Log","sap/ui/core/ResizeHandler","sap/ui/core/util/PasteHelper","sap/ui/events/KeyCodes","sap/ui/thirdparty/jquery","sap/m/ListBaseRenderer","sap/ui/dom/jquery/Selectors"],function(t,e,i,s,o,n,r,a,l,h,u,p,d){"use strict";var c=i.ListKeyboardMode;var f=i.ListGrowingDirection;var g=i.BackgroundDesign;var C=i.PopinLayout;var y=i.ScreenSizes;var m=s.extend("sap.m.Table",{metadata:{library:"sap.m",properties:{backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:g.Translucent},fixedLayout:{type:"any",group:"Behavior",defaultValue:true},showOverlay:{type:"boolean",group:"Appearance",defaultValue:false},alternateRowColors:{type:"boolean",group:"Appearance",defaultValue:false},popinLayout:{type:"sap.m.PopinLayout",group:"Appearance",defaultValue:C.Block},contextualWidth:{type:"string",group:"Behavior",defaultValue:"Inherit"},autoPopinMode:{type:"boolean",group:"Behavior",defaultValue:false},hiddenInPopin:{type:"sap.ui.core.Priority[]",group:"Behavior"}},aggregations:{columns:{type:"sap.m.Column",multiple:true,singularName:"column",dnd:{draggable:true,droppable:true,layout:"Horizontal"}}},events:{beforeOpenContextMenu:{allowPreventDefault:true,parameters:{listItem:{type:"sap.m.ColumnListItem"},column:{type:"sap.m.Column"}}},paste:{allowPreventDefault:true,parameters:{data:{type:"string[][]"}}},popinChanged:{parameters:{hasPopin:{type:"boolean"},visibleInPopin:{type:"sap.m.Column[]"},hiddenInPopin:{type:"sap.m.Column[]"}}}},designtime:"sap/m/designtime/Table.designtime"}});m.prototype.sNavItemClass="sapMListTblRow";m.prototype.init=function(){this._iItemNeedsColumn=0;s.prototype.init.call(this)};m.prototype.setContextualWidth=function(t){var e=this.getContextualWidth();if(t==e){return this}if(typeof t==="number"){this._sContextualWidth=t+"px";this._sContextualWidth=this._sContextualWidth.toLowerCase()}else{var i=t.toLowerCase(),s=y[i];if(s){this._sContextualWidth=s+"px"}else{this._sContextualWidth=t}}var o=this._validateContextualWidth(this._sContextualWidth);this._iLastContextualWidth=e;if(o){this.setProperty("contextualWidth",t,true)}else{return this}if(this._iLastContextualWidth.toLowerCase()==="auto"){this._deregisterResizeHandler()}if(this._sContextualWidth.toLowerCase()==="auto"){this._registerResizeHandler();this._applyContextualWidth(this.$().width())}else{this._applyContextualWidth(this._sContextualWidth)}return this};m.prototype._validateContextualWidth=function(t){if(!t){return}if(typeof t!="string"){throw new Error('expected string for property "contextualWidth" of '+this)}if(t.toLowerCase()==="auto"||t.toLowerCase()==="inherit"){return true}if(!/^\d+(\.\d+)?(px)$/i.test(t)){throw new Error('invalid CSS size("px", "Auto", "auto", Inherit", "inherit" required) or sap.m.ScreenSize enumeration for property "contextualWidth" of '+this)}return true};m.prototype._applyContextualWidth=function(t){t=parseFloat(t)||0;if(Math.abs(this._oContextualSettings.contextualWidth-t)<=16){return}if(t&&this._oContextualSettings.contextualWidth!=t){this._applyContextualSettings({contextualWidth:t})}};m.prototype._onResize=function(t){this._applyContextualWidth(t.size.width)};m.prototype._registerResizeHandler=function(){if(!this._iResizeHandlerId){var t=this;window.requestAnimationFrame(function(){t._iResizeHandlerId=l.register(t,t._onResize.bind(t))})}};m.prototype._deregisterResizeHandler=function(){if(this._iResizeHandlerId){l.deregister(this._iResizeHandlerId);this._iResizeHandlerId=null}};m.prototype.onBeforeRendering=function(){s.prototype.onBeforeRendering.call(this);this._bHasDynamicWidthCol=this._hasDynamicWidthColumn();if(this.getAutoPopinMode()){this._configureAutoPopin()}this._applyContextualWidth(this._sContextualWidth);this._ensureColumnsMedia();this._notifyColumns("ItemsRemoved")};m.prototype._hasDynamicWidthColumn=function(t,e){if(this.getFixedLayout()!="Strict"){return true}return this.getColumns().some(function(i){if(i.getVisible()&&!i.isPopin()){var s=t&&t==i?e:i.getWidth();return!s||s=="auto"}})};m.prototype._ensureColumnsMedia=function(){this.getColumns().forEach(function(t){if(t._bShouldAddMedia){t._addMedia()}})};m.prototype.onAfterRendering=function(){s.prototype.onAfterRendering.call(this);this.updateSelectAllCheckbox();this._renderOverlay();if(this._bFirePopinChanged){this._firePopinChangedEvent();this._bFirePopinChanged=false}else{var e=this._getPopins();if(this._aPopins&&this.getVisibleItems().length){if(this._aPopins.length!=e.length||!e.every(function(t){return this._aPopins.indexOf(t)>-1},this)){this._aPopins=e;this._firePopinChangedEvent()}}else if(this._aPopins==null){this._aPopins=e}}if(this._bCheckLastColumnWidth&&t.isThemeApplied()){window.requestAnimationFrame(this._checkLastColumnWidth.bind(this))}};m.prototype._renderOverlay=function(){var t=this.$(),e=t.find(".sapMTableOverlay"),i=this.getShowOverlay();if(i&&e.length===0){e=p("<div>").addClass("sapUiOverlay sapMTableOverlay").css("z-index","1");t.append(e)}else if(!i){e.remove()}};m.prototype._checkLastColumnWidth=function(){var t=this.$();if(!t.length){return}if(t[0].clientWidth<this.getTableDomRef().clientWidth){t.find(".sapMListTblCell:visible").eq(0).addClass("sapMTableLastColumn").width("")}this._bCheckLastColumnWidth=false};m.prototype.setShowOverlay=function(t){this.setProperty("showOverlay",t,true);this._renderOverlay();return this};m.prototype.exit=function(){s.prototype.exit.call(this);if(this._selectAllCheckBox){this._selectAllCheckBox.destroy();this._selectAllCheckBox=null}};m.prototype.destroyItems=function(){this._notifyColumns("ItemsRemoved");return s.prototype.destroyItems.apply(this,arguments)};m.prototype.removeAllItems=function(){this._notifyColumns("ItemsRemoved");return s.prototype.removeAllItems.apply(this,arguments)};m.prototype.removeSelections=function(){s.prototype.removeSelections.apply(this,arguments);this.updateSelectAllCheckbox();return this};m.prototype.selectAll=function(){s.prototype.selectAll.apply(this,arguments);this.updateSelectAllCheckbox();return this};m.prototype.getColumns=function(t){var e=this.getAggregation("columns",[]);if(t){e.sort(function(t,e){return t.getOrder()-e.getOrder()})}return e};m.prototype.setFixedLayout=function(t){if(t==undefined||t=="true"){t=true}else if(t=="false"){t=false}if(typeof t=="boolean"||t=="Strict"){return this.setProperty("fixedLayout",t)}throw new Error('"'+t+'" is an invalid value, expected false, true or "Strict" for the property fixedLayout of '+this)};m.prototype.onBeforePageLoaded=function(){if(this.getAlternateRowColors()){this._sAlternateRowColorsClass=this._getAlternateRowColorsClass()}s.prototype.onBeforePageLoaded.apply(this,arguments)};m.prototype.onAfterPageLoaded=function(){this.updateSelectAllCheckbox();if(this.getAlternateRowColors()&&this._sAlternateRowColorsClass!=this._getAlternateRowColorsClass()){var t=this.$("tblBody").removeClass(this._sAlternateRowColorsClass);t.addClass(this._getAlternateRowColorsClass())}s.prototype.onAfterPageLoaded.apply(this,arguments)};m.prototype.shouldRenderItems=function(){return this.getColumns().some(function(t){return t.getVisible()})};m.prototype.shouldGrowingSuppressInvalidation=function(){if(this.getAutoPopinMode()){return false}return s.prototype.shouldGrowingSuppressInvalidation.call(this)};m.prototype.onItemTypeColumnChange=function(t,e){this._iItemNeedsColumn+=e?1:-1;if(this._iItemNeedsColumn==1&&e){this._setTypeColumnVisibility(true)}else if(this._iItemNeedsColumn==0){this._setTypeColumnVisibility(false)}};m.prototype.onItemSelectedChange=function(t,e){s.prototype.onItemSelectedChange.apply(this,arguments);setTimeout(function(){this.updateSelectAllCheckbox()}.bind(this),0)};m.prototype.getTableDomRef=function(){return this.getDomRef("listUl")};m.prototype.getItemsContainerDomRef=function(){return this.getDomRef("tblBody")};m.prototype.setNavigationItems=function(t){var e=this.$("tblHeader");var i=this.$("tblFooter");var s=this.$("tblBody").children(".sapMLIB");var o=e.add(s).add(i).get();t.setItemDomRefs(o);if(t.getFocusedIndex()==-1){if(this.getGrowing()&&this.getGrowingDirection()==f.Upwards){t.setFocusedIndex(o.length-1)}else{t.setFocusedIndex(e[0]?1:0)}}};m.prototype.checkGrowingFromScratch=function(){if(this.hasPopin()){return false}return this.getColumns().some(function(t){return t.getVisible()&&t.getMergeDuplicates()})};m.prototype.onColumnPress=function(t){this.bActiveHeaders&&this.fireEvent("columnPress",{column:t})};m.prototype.onColumnResize=function(t){if(!this.hasPopin()&&!this._mutex){var e=this.getColumns().some(function(t){return t.isPopin()});if(!e){t.setDisplay(this.getTableDomRef(),!t.isHidden());this._firePopinChangedEvent();return}}this._dirty=this._getMediaContainerWidth()||window.innerWidth;if(!this._mutex){var i=this._getMediaContainerWidth()||window.innerWidth;this._mutex=true;this._bFirePopinChanged=true;this.rerender();setTimeout(function(){if(this._dirty!=i){this._dirty=0;this._bFirePopinChanged=true;this.rerender()}this._mutex=false}.bind(this),200)}};m.prototype.setTableHeaderVisibility=function(t){if(!this.getDomRef()){return}if(!this.shouldRenderItems()){return this.invalidate()}var e=this.$("tblHeader"),i=!e.hasClass("sapMListTblHeaderNone"),s=e.find(".sapMListTblCell:visible"),o=s.eq(0);if(s.length==1){if(this.getFixedLayout()=="Strict"){this._checkLastColumnWidth()}else{o.width("")}}else{s.each(function(){this.style.width=this.getAttribute("data-sap-width")||""})}this._colCount=s.length+3+!!d.ModeOrder[this.getMode()];this.$("tblBody").find(".sapMGHLICell").attr("colspan",this.getColSpan());this.$("nodata-text").attr("colspan",this.getColCount());if(this.hasPopin()){this.$("tblBody").find(".sapMListTblSubRowCell").attr("colspan",this.getColSpan())}if(!t&&i){e[0].className="sapMListTblRow sapMLIBFocusable sapMListTblHeader";this._headerHidden=false}else if(t&&!i&&!s.length){e[0].className="sapMListTblHeaderNone";this._headerHidden=true}};m.prototype._setTypeColumnVisibility=function(t){p(this.getTableDomRef()).toggleClass("sapMListTblHasNav",t)};m.prototype._notifyColumns=function(t,e,i){this.getColumns().forEach(function(s){s["on"+t](e,i)})};m.prototype._getSelectAllCheckbox=function(){if(this.bPreventMassSelection){return}if(!this._selectAllCheckBox){this._selectAllCheckBox=new n({id:this.getId("sa"),activeHandling:false}).addStyleClass("sapMLIBSelectM").setParent(this,null,true).attachSelect(function(){if(this._selectAllCheckBox.getSelected()){this.selectAll(true)}else{this.removeSelections(false,true)}},this).setTabIndex(-1)}this._selectAllCheckBox.getEnabled=function(){return this._selectAllCheckBox.getProperty("enabled")}.bind(this);return this._selectAllCheckBox};m.prototype.updateSelectAllCheckbox=function(){if(this._selectAllCheckBox&&this.getMode()==="MultiSelect"){var t=this.getItems(),e=this.getSelectedItems().length,i=t.filter(function(t){return t.isSelectable()}).length;this._selectAllCheckBox.setSelected(t.length>0&&e==i)}};m.prototype.enhanceAccessibilityState=function(e,i){if(e==this._selectAllCheckBox){var s=t.getLibraryResourceBundle("sap.m");i.label=s.getText("TABLE_CHECKBOX_SELECT_ALL")}};m.prototype.getColSpan=function(){var t=this.shouldRenderDummyColumn()?3:2;return(this._colCount||1)-t};m.prototype.getColCount=function(){return this._colCount||0};m.prototype.shouldRenderDummyColumn=function(){return!this._bHasDynamicWidthCol&&this.shouldRenderItems()};m.prototype.hasPopin=function(){return!!this._hasPopin};m.prototype.isHeaderRowEvent=function(t){var e=this.$("tblHeader");return!!p(t.target).closest(e,this.getTableDomRef()).length};m.prototype.isFooterRowEvent=function(t){var e=this.$("tblFooter");return!!p(t.target).closest(e,this.getTableDomRef()).length};m.prototype.getAccessibilityType=function(){return t.getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_TABLE")};m.prototype._setHeaderAnnouncement=function(){var e=t.getLibraryResourceBundle("sap.m"),i=e.getText("ACC_CTR_TYPE_HEADER_ROW")+" ";if(this.isAllSelectableSelected()){i+=e.getText("LIST_ALL_SELECTED")}var s=this._getHiddenInPopin();this.getColumns(true).forEach(function(t,e){if(!t.getVisible()||s.indexOf(t)>-1){return}var n=t.getHeader();if(n&&n.getVisible()){i+=o.getAccessibilityText(n)+" . "}});this.updateInvisibleText(i)};m.prototype._setFooterAnnouncement=function(){var e=t.getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_FOOTER_ROW")+" ";this.getColumns(true).forEach(function(t,i){if(!t.getVisible()){return}var s=t.getFooter();if(s&&s.getVisible()){var n=t.getHeader();if(n&&n.getVisible()){e+=o.getAccessibilityText(n)+" "}e+=o.getAccessibilityText(s)+" "}});this.updateInvisibleText(e)};m.prototype.onsapspace=function(t){if(t.isMarked()){return}if(t.target.id==this.getId("tblHeader")){t.preventDefault();if(this._selectAllCheckBox){this._selectAllCheckBox.setSelected(!this._selectAllCheckBox.getSelected()).fireSelect();t.setMarked()}}};m.prototype.onsaptabnext=function(t){if(t.isMarked()||this.getKeyboardMode()==c.Edit){return}var e=p();if(t.target.id==this.getId("nodata")){e=this.$("nodata")}else if(this.isHeaderRowEvent(t)){e=this.$("tblHeader")}else if(this.isFooterRowEvent(t)){e=this.$("tblFooter")}var i=e.find(":sapTabbable").get(-1)||e[0];if(t.target===i){this.forwardTab(true);t.setMarked()}};m.prototype.onsaptabprevious=function(t){if(t.isMarked()||this.getKeyboardMode()==c.Edit){return}var e=t.target.id;if(e==this.getId("nodata")||e==this.getId("tblHeader")||e==this.getId("tblFooter")){this.forwardTab(false)}else if(e==this.getId("trigger")){this.focusPrevious();t.preventDefault()}};m.prototype.onfocusin=function(t){var e=t.target;if(e.id==this.getId("tblHeader")){if(!this.hasPopin()&&this.shouldRenderDummyColumn()){e.classList.add("sapMTableRowCustomFocus")}this._setHeaderAnnouncement();this._setFirstLastVisibleCells(e)}else if(e.id==this.getId("tblFooter")){this._setFooterAnnouncement();this._setFirstLastVisibleCells(e)}else if(e.id==this.getId("nodata")){this._setFirstLastVisibleCells(e)}s.prototype.onfocusin.call(this,t)};m.prototype.onThemeChanged=function(){s.prototype.onThemeChanged.call(this);if(this._bCheckLastColumnWidth){this._checkLastColumnWidth()}};m.prototype._getAlternateRowColorsClass=function(){if(this.isGrouped()){return"sapMListTblAlternateRowColorsGrouped"}if(this.hasPopin()){return"sapMListTblAlternateRowColorsPopin"}return"sapMListTblAlternateRowColors"};m.prototype.onpaste=function(t){if(t.isMarked()||/^(input|textarea)$/i.test(t.target.tagName)){return}var e=h.getPastedDataAs2DArray(t.originalEvent);if(!e||e.length===0||e[0].length===0){return}this.firePaste({data:e})};m.prototype.ondragenter=function(t){var e=t.dragSession;if(!e||!e.getDropControl()||!e.getDropControl().isA("sap.m.Column")){return}e.setIndicatorConfig({height:this.getTableDomRef().clientHeight})};m.prototype._configureAutoPopin=function(){if(this._mutex){return}var t=this.getColumns(true).filter(function(t){return t.getVisible()});if(!t.length){return}var e=this.getItems();var i={High:[],Medium:[],Low:[]};t.forEach(function(t){var e=t.getImportance();if(e==="None"){e="Medium"}i[e].push(t)});var s=Object.values(i);var o=s.find(String)[0];s.reduce(function(t,e){return m._updateAccumulatedWidth(e,o,t)},this._getInitialAccumulatedWidth(e))};m.prototype._getInitialAccumulatedWidth=function(t){var e=this.getInset()?4:0;var s=this.$(),o=3;if(s.closest(".sapUiSizeCompact").length){o=2}else{var n=false;s.find(".sapMTableTH[aria-hidden=true]:not(.sapMListTblHighlightCol):not(.sapMListTblDummyCell):not(.sapMListTblNavigatedCol)").get().forEach(function(t){var e=p(t).width();if(!n&&e>0){o=e/parseFloat(i.BaseFontSize);n=true}})}var r=d.ModeOrder[this.getMode()]?o:0;var a=t.some(function(t){var e=t.getType();return e==="Detail"||e==="DetailAndActive"||e==="Navigation"})?o:0;return e+r+a+.65};m._updateAccumulatedWidth=function(t,e,s){t.forEach(function(t){var o=t.getWidth();var n=o.replace(/[^a-z]/gi,"");var r=parseFloat(i.BaseFontSize)||16;if(n==="px"){s+=parseFloat((parseFloat(o).toFixed(2)/r).toFixed(2))}else if(n==="em"||n==="rem"){s+=parseFloat(o)}else{s+=t.getAutoPopinWidth()}t.setDemandPopin(t!==e);t.setMinScreenWidth(t!==e?s+"rem":"")});return s};m.prototype._getHiddenInPopin=function(){return this._getPopins().filter(function(t){return!t.isPopin()})};m.prototype._getVisiblePopin=function(){return this._getPopins().filter(function(t){return t.isPopin()})};m.prototype._getPopins=function(){var t=this.getColumns().filter(function(t){return t.getVisible()&&t.getDemandPopin()});return t.filter(function(t){return t._media&&!t._media.matches})};m.prototype._firePopinChangedEvent=function(){this.fireEvent("popinChanged",{hasPopin:this.hasPopin(),visibleInPopin:this._getVisiblePopin(),hiddenInPopin:this._getHiddenInPopin()})};m.prototype._fireUpdateFinished=function(t){s.prototype._fireUpdateFinished.apply(this,arguments);var e=this.getVisibleItems().length;if(!this._iVisibleItemsLength&&e>0){this._iVisibleItemsLength=e;this._firePopinChangedEvent()}else if(this._iVisibleItemsLength>0&&!e){this._iVisibleItemsLength=e;this._firePopinChangedEvent()}};m.prototype.onItemFocusIn=function(e,i){s.prototype.onItemFocusIn.apply(this,arguments);if(e!=i||!t.getConfiguration().getAccessibility()){return}this._setFirstLastVisibleCells(e.getDomRef())};m.prototype._setFirstLastVisibleCells=function(t){var e=p(t);if(!e.hasClass("sapMTableRowCustomFocus")){return}e.find(".sapMTblLastVisibleCell").removeClass("sapMTblLastVisibleCell");e.find(".sapMTblFirstVisibleCell").removeClass("sapMTblFirstVisibleCell");for(var i=t.firstChild;i&&!i.clientWidth;i=i.nextSibling){}for(var s=t.lastChild.previousSibling;s&&!s.clientWidth;s=s.previousSibling){}p(i).addClass("sapMTblFirstVisibleCell");p(s).addClass("sapMTblLastVisibleCell")};return m});