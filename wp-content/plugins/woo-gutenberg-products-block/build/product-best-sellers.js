!function(e,t){for(var r in t)e[r]=t[r]}(this,function(e){function t(t){for(var n,s,a=t[0],i=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],c[s]&&p.push(c[s][0]),c[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},c={3:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;return o.push([717,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},14:function(e,t){!function(){e.exports=this.wp.apiFetch}()},15:function(e,t){!function(){e.exports=this.wp.compose}()},166:function(e,t,r){"use strict";t.a={columns:{type:"number",default:wc_product_block_data.default_columns},rows:{type:"number",default:wc_product_block_data.default_rows},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},attributes:{type:"array",default:[]}}},17:function(e,t,r){"use strict";var n=r(0),c=r(3),o=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#1E8CBE",d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))})},s=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#6C7781",d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))})},a=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(n.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}))})},i=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#1E8CBE",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},l=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#6C7781",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},u=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}))})};r.d(t,"a",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"e",function(){return l}),r.d(t,"f",function(){return u})},173:function(e,t,r){var n=r(174);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(27)(n,c);n.locals&&(e.exports=n.locals)},174:function(e,t,r){},177:function(e,t){!function(){e.exports=this.wp.data}()},179:function(e,t,r){var n=r(180);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(27)(n,c);n.locals&&(e.exports=n.locals)},180:function(e,t,r){},185:function(e,t,r){var n=r(186);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(27)(n,c);n.locals&&(e.exports=n.locals)},186:function(e,t,r){},199:function(e,t,r){var n={"./af":42,"./af.js":42,"./ar":43,"./ar-dz":44,"./ar-dz.js":44,"./ar-kw":45,"./ar-kw.js":45,"./ar-ly":46,"./ar-ly.js":46,"./ar-ma":47,"./ar-ma.js":47,"./ar-sa":48,"./ar-sa.js":48,"./ar-tn":49,"./ar-tn.js":49,"./ar.js":43,"./az":50,"./az.js":50,"./be":51,"./be.js":51,"./bg":52,"./bg.js":52,"./bm":53,"./bm.js":53,"./bn":54,"./bn.js":54,"./bo":55,"./bo.js":55,"./br":56,"./br.js":56,"./bs":57,"./bs.js":57,"./ca":58,"./ca.js":58,"./cs":59,"./cs.js":59,"./cv":60,"./cv.js":60,"./cy":61,"./cy.js":61,"./da":62,"./da.js":62,"./de":63,"./de-at":64,"./de-at.js":64,"./de-ch":65,"./de-ch.js":65,"./de.js":63,"./dv":66,"./dv.js":66,"./el":67,"./el.js":67,"./en-au":68,"./en-au.js":68,"./en-ca":69,"./en-ca.js":69,"./en-gb":70,"./en-gb.js":70,"./en-ie":71,"./en-ie.js":71,"./en-il":72,"./en-il.js":72,"./en-nz":73,"./en-nz.js":73,"./eo":74,"./eo.js":74,"./es":75,"./es-do":76,"./es-do.js":76,"./es-us":77,"./es-us.js":77,"./es.js":75,"./et":78,"./et.js":78,"./eu":79,"./eu.js":79,"./fa":80,"./fa.js":80,"./fi":81,"./fi.js":81,"./fo":82,"./fo.js":82,"./fr":83,"./fr-ca":84,"./fr-ca.js":84,"./fr-ch":85,"./fr-ch.js":85,"./fr.js":83,"./fy":86,"./fy.js":86,"./gd":87,"./gd.js":87,"./gl":88,"./gl.js":88,"./gom-latn":89,"./gom-latn.js":89,"./gu":90,"./gu.js":90,"./he":91,"./he.js":91,"./hi":92,"./hi.js":92,"./hr":93,"./hr.js":93,"./hu":94,"./hu.js":94,"./hy-am":95,"./hy-am.js":95,"./id":96,"./id.js":96,"./is":97,"./is.js":97,"./it":98,"./it.js":98,"./ja":99,"./ja.js":99,"./jv":100,"./jv.js":100,"./ka":101,"./ka.js":101,"./kk":102,"./kk.js":102,"./km":103,"./km.js":103,"./kn":104,"./kn.js":104,"./ko":105,"./ko.js":105,"./ky":106,"./ky.js":106,"./lb":107,"./lb.js":107,"./lo":108,"./lo.js":108,"./lt":109,"./lt.js":109,"./lv":110,"./lv.js":110,"./me":111,"./me.js":111,"./mi":112,"./mi.js":112,"./mk":113,"./mk.js":113,"./ml":114,"./ml.js":114,"./mn":115,"./mn.js":115,"./mr":116,"./mr.js":116,"./ms":117,"./ms-my":118,"./ms-my.js":118,"./ms.js":117,"./mt":119,"./mt.js":119,"./my":120,"./my.js":120,"./nb":121,"./nb.js":121,"./ne":122,"./ne.js":122,"./nl":123,"./nl-be":124,"./nl-be.js":124,"./nl.js":123,"./nn":125,"./nn.js":125,"./pa-in":126,"./pa-in.js":126,"./pl":127,"./pl.js":127,"./pt":128,"./pt-br":129,"./pt-br.js":129,"./pt.js":128,"./ro":130,"./ro.js":130,"./ru":131,"./ru.js":131,"./sd":132,"./sd.js":132,"./se":133,"./se.js":133,"./si":134,"./si.js":134,"./sk":135,"./sk.js":135,"./sl":136,"./sl.js":136,"./sq":137,"./sq.js":137,"./sr":138,"./sr-cyrl":139,"./sr-cyrl.js":139,"./sr.js":138,"./ss":140,"./ss.js":140,"./sv":141,"./sv.js":141,"./sw":142,"./sw.js":142,"./ta":143,"./ta.js":143,"./te":144,"./te.js":144,"./tet":145,"./tet.js":145,"./tg":146,"./tg.js":146,"./th":147,"./th.js":147,"./tl-ph":148,"./tl-ph.js":148,"./tlh":149,"./tlh.js":149,"./tr":150,"./tr.js":150,"./tzl":151,"./tzl.js":151,"./tzm":152,"./tzm-latn":153,"./tzm-latn.js":153,"./tzm.js":152,"./ug-cn":154,"./ug-cn.js":154,"./uk":155,"./uk.js":155,"./ur":156,"./ur.js":156,"./uz":157,"./uz-latn":158,"./uz-latn.js":158,"./uz.js":157,"./vi":159,"./vi.js":159,"./x-pseudo":160,"./x-pseudo.js":160,"./yo":161,"./yo.js":161,"./zh-cn":162,"./zh-cn.js":162,"./zh-hk":163,"./zh-hk.js":163,"./zh-tw":164,"./zh-tw.js":164};function c(e){var t=o(e);return r(t)}function o(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=199},2:function(e,t){!function(){e.exports=this.wp.i18n}()},202:function(e,t){},203:function(e,t){},205:function(e,t){},206:function(e,t){},23:function(e,t){!function(){e.exports=this.wp.url}()},24:function(e,t,r){"use strict";var n=r(26),c=r.n(n),o=r(168),s=r.n(o),a=r(0),i=r(4),l=r(3),u=r(1),d=r.n(u),p=r(17);function m(e,t){if(!t)return e;var r=new RegExp(Object(i.escapeRegExp)(t),"ig");return e.replace(r,"<strong>$&</strong>")}var b=function(e){var t=e.className,r=e.depth,n=void 0===r?0:r,o=e.item,u=e.isSelected,d=e.isSingle,b=e.onSelect,h=e.search,j=void 0===h?"":h,g=e.showCount,f=void 0!==g&&g,v=s()(e,["className","depth","item","isSelected","isSingle","onSelect","search","showCount"]),w=[t,"woocommerce-search-list__item"];w.push("depth-".concat(n)),d&&w.push("is-radio-button");var O,_=o.breadcrumbs&&o.breadcrumbs.length;return Object(a.createElement)(l.MenuItem,c()({role:d?"menuitemradio":"menuitemcheckbox",className:w.join(" "),onClick:b(o),isSelected:u},v),Object(a.createElement)("span",{className:"woocommerce-search-list__item-state"},function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?t?Object(a.createElement)(p.d,null):Object(a.createElement)(p.e,null):t?Object(a.createElement)(p.a,null):Object(a.createElement)(p.b,null)}(d,u)),Object(a.createElement)("span",{className:"woocommerce-search-list__item-label"},_?Object(a.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(O=o.breadcrumbs).length?Object(i.first)(O):2===O.length?Object(i.first)(O)+" › "+Object(i.last)(O):Object(i.first)(O)+" … "+Object(i.last)(O)):null,Object(a.createElement)("span",{className:"woocommerce-search-list__item-name",dangerouslySetInnerHTML:{__html:m(o.name,j)}})),!!f&&Object(a.createElement)("span",{className:"woocommerce-search-list__item-count"},o.count))};b.propTypes={className:d.a.string,depth:d.a.number,item:d.a.object,isSelected:d.a.bool,isSingle:d.a.bool,onSelect:d.a.func,search:d.a.string,showCount:d.a.bool},t.a=b},25:function(e,t){!function(){e.exports=this.wp.editor}()},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t){!function(){e.exports=this.wp.blocks}()},31:function(e,t,r){"use strict";var n=r(13),c=r.n(n),o=r(16),s=r.n(o),a=r(8),i=r.n(a),l=r(9),u=r.n(l),d=r(10),p=r.n(d),m=r(11),b=r.n(m),h=r(12),j=r.n(h),g=r(6),f=r.n(g),v=r(0),w=r(2),O=r(3),_=r(15),y=r(4),k=r(19),E=r.n(k),S=r(1),C=r.n(S),x=r(169);r(173);function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=Object(y.groupBy)(e,"parent"),n=Object(y.keyBy)(t,"id"),o=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!t.parent)return t.name?[t.name]:[];var r=e(n[t.parent]);return[].concat(s()(r),[t.name])},a=function e(t){return t.map(function(t){var s=r[t.id];return delete r[t.id],c()({},t,{breadcrumbs:o(n[t.parent]),children:s&&s.length?e(s):[]})})},i=a(r[0]||[]);return delete r[0],Object(y.forEach)(r,function(e){i.push.apply(i,s()(a(e||[])))}),i}var N=r(24),I={clear:Object(w.__)("Clear all selected items","woo-gutenberg-products-block"),list:Object(w.__)("Results","woo-gutenberg-products-block"),noItems:Object(w.__)("No items found.","woo-gutenberg-products-block"),noResults:Object(w.__)("No results for %s","woo-gutenberg-products-block"),search:Object(w.__)("Search for items","woo-gutenberg-products-block"),selected:function(e){return Object(w.sprintf)(Object(w._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e)},updated:Object(w.__)("Search results updated.","woo-gutenberg-products-block")},R=function(e){function t(){var e;return i()(this,t),(e=p()(this,b()(t).apply(this,arguments))).onSelect=e.onSelect.bind(f()(f()(e))),e.onRemove=e.onRemove.bind(f()(f()(e))),e.onClear=e.onClear.bind(f()(f()(e))),e.isSelected=e.isSelected.bind(f()(f()(e))),e.defaultRenderItem=e.defaultRenderItem.bind(f()(f()(e))),e.renderList=e.renderList.bind(f()(f()(e))),e}return j()(t,e),u()(t,[{key:"onRemove",value:function(e){var t=this.props,r=t.isSingle,n=t.onChange,c=t.selected;return function(){r&&n([]);var t=Object(y.findIndex)(c,{id:e});n([].concat(s()(c.slice(0,t)),s()(c.slice(t+1))))}}},{key:"onSelect",value:function(e){var t=this,r=this.props,n=r.isSingle,c=r.onChange,o=r.selected;return function(){t.isSelected(e)?t.onRemove(e.id)():c(n?[e]:[].concat(s()(o),[e]))}}},{key:"onClear",value:function(){this.props.onChange([])}},{key:"isSelected",value:function(e){return-1!==Object(y.findIndex)(this.props.selected,{id:e.id})}},{key:"getFilteredList",value:function(e,t){var r=this.props.isHierarchical;if(!t)return r?z(e):e;var n=c()({},I,this.props.messages),o=new RegExp(Object(y.escapeRegExp)(t),"i");this.props.debouncedSpeak(n.updated);var s=e.map(function(e){return!!o.test(e.name)&&e}).filter(Boolean);return r?z(s,e):s}},{key:"defaultRenderItem",value:function(e){return Object(v.createElement)(N.a,e)}},{key:"renderList",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.props,c=n.isSingle,o=n.search,s=this.props.renderItem||this.defaultRenderItem;return e?e.map(function(e){return Object(v.createElement)(v.Fragment,{key:e.id},s({item:e,isSelected:t.isSelected(e),onSelect:t.onSelect,isSingle:c,search:o,depth:r}),t.renderList(e.children,r+1))}):null}},{key:"renderListSection",value:function(){var e=this.props,t=e.isLoading,r=e.search,n=this.getFilteredList(this.props.list,r),o=c()({},I,this.props.messages);return t?Object(v.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(v.createElement)(O.Spinner,null)):n.length?Object(v.createElement)(O.MenuGroup,{label:o.list,className:"woocommerce-search-list__list"},this.renderList(n)):Object(v.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(v.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(v.createElement)(E.a,{icon:"notice-outline",role:"img","aria-hidden":"true",focusable:"false"})),Object(v.createElement)("span",{className:"woocommerce-search-list__not-found-text"},r?Object(w.sprintf)(o.noResults,r):o.noItems))}},{key:"renderSelectedSection",value:function(){var e=this,t=this.props,r=t.isLoading,n=t.isSingle,o=t.selected,s=c()({},I,this.props.messages);if(r||n||!o)return null;var a=o.length;return Object(v.createElement)("div",{className:"woocommerce-search-list__selected"},Object(v.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(v.createElement)("strong",null,s.selected(a)),a>0?Object(v.createElement)(O.Button,{isLink:!0,isDestructive:!0,onClick:this.onClear,"aria-label":s.clear},Object(w.__)("Clear all","woo-gutenberg-products-block")):null),o.map(function(t,r){return Object(v.createElement)(x.a,{key:r,label:t.name,id:t.id,remove:e.onRemove})}))}},{key:"render",value:function(){var e=this.props,t=e.className,r=void 0===t?"":t,n=e.search,o=e.setState,s=c()({},I,this.props.messages);return Object(v.createElement)("div",{className:"woocommerce-search-list ".concat(r)},this.renderSelectedSection(),Object(v.createElement)("div",{className:"woocommerce-search-list__search"},Object(v.createElement)(O.TextControl,{label:s.search,type:"search",value:n,onChange:function(e){return o({search:e})}})),this.renderListSection())}}]),t}(v.Component);R.propTypes={className:C.a.string,isHierarchical:C.a.bool,isLoading:C.a.bool,isSingle:C.a.bool,list:C.a.arrayOf(C.a.shape({id:C.a.number,name:C.a.string})),messages:C.a.shape({clear:C.a.string,list:C.a.string,noItems:C.a.string,noResults:C.a.string,search:C.a.string,selected:C.a.func,updated:C.a.string}),onChange:C.a.func.isRequired,renderItem:C.a.func,selected:C.a.array.isRequired,search:C.a.string,setState:C.a.func,debouncedSpeak:C.a.func,instanceId:C.a.number};t.a=Object(_.compose)([Object(_.withState)({search:""}),O.withSpokenMessages,_.withInstanceId])(R)},36:function(e,t,r){"use strict";function n(e,t){var r=e.categories,n=e.catOperator,c=e.columns,o=e.orderby,s=e.products,a={status:"publish",per_page:e.rows*c};switch(r&&r.length&&(a.category=r.join(","),n&&"all"===n&&(a.cat_operator="AND")),o&&("price_desc"===o?(a.orderby="price",a.order="desc"):"price_asc"===o?(a.orderby="price",a.order="asc"):"title"===o?(a.orderby="title",a.order="asc"):"menu_order"===o?(a.orderby="menu_order",a.order="asc"):a.orderby=o),t){case"woocommerce/product-best-sellers":a.orderby="popularity";break;case"woocommerce/product-top-rated":a.orderby="rating";break;case"woocommerce/product-on-sale":a.on_sale=1;break;case"woocommerce/product-new":a.orderby="date";break;case"woocommerce/handpicked-products":a.include=s,a.per_page=s.length}return a}r.d(t,"a",function(){return n})},37:function(e,t,r){"use strict";var n=r(0),c=r(2),o=r(1),s=r.n(o),a=(r(179),function(e){var t=e.product,r=null;return t.images.length&&(r=Object(n.createElement)("img",{src:t.images[0].src,alt:""})),Object(n.createElement)("div",{className:"wc-product-preview"},r,Object(n.createElement)("div",{className:"wc-product-preview__title"},t.name),Object(n.createElement)("div",{className:"wc-product-preview__price",dangerouslySetInnerHTML:{__html:t.price_html}}),Object(n.createElement)("span",{className:"wp-block-button"},Object(n.createElement)("span",{className:"wc-product-preview__add-to-cart wp-block-button__link"},Object(c.__)("Add to cart","woo-gutenberg-products-block"))))});a.propTypes={product:s.a.shape({id:s.a.number,images:s.a.array,name:s.a.string,price_html:s.a.string}).isRequired},t.a=a},38:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(167),c=r.n(n);function o(e,t){var r=e.attributes,n=r.categories,o=r.catOperator,s=r.columns,a=r.orderby,i=r.products,l=r.rows,u=new Map;switch(u.set("limit",l*s),u.set("columns",s),n&&n.length&&(u.set("category",n.join(",")),o&&"all"===o&&u.set("cat_operator","AND")),a&&("price_desc"===a?(u.set("orderby","price"),u.set("order","DESC")):"price_asc"===a?(u.set("orderby","price"),u.set("order","ASC")):"date"===a?(u.set("orderby","date"),u.set("order","DESC")):u.set("orderby",a)),t){case"woocommerce/product-best-sellers":u.set("best_selling","1");break;case"woocommerce/product-top-rated":u.set("orderby","rating");break;case"woocommerce/product-on-sale":u.set("on_sale","1");break;case"woocommerce/product-new":u.set("orderby","date"),u.set("order","DESC");break;case"woocommerce/handpicked-products":if(!i.length)return"";u.set("ids",i.join(",")),u.set("limit",i.length);break;case"woocommerce/product-category":if(!n||!n.length)return""}var d="[products",p=!0,m=!1,b=void 0;try{for(var h,j=u[Symbol.iterator]();!(p=(h=j.next()).done);p=!0){var g=c()(h.value,2);d+=" "+g[0]+'="'+g[1]+'"'}}catch(e){m=!0,b=e}finally{try{p||null==j.return||j.return()}finally{if(m)throw b}}return d+="]"}},4:function(e,t){!function(){e.exports=this.lodash}()},40:function(e,t,r){"use strict";var n=r(26),c=r.n(n),o=r(8),s=r.n(o),a=r(9),i=r.n(a),l=r(10),u=r.n(l),d=r(11),p=r.n(d),m=r(12),b=r.n(m),h=r(6),j=r.n(h),g=r(0),f=r(2),v=r(23),w=r(14),O=r.n(w),_=r(4),y=r(1),k=r.n(y),E=r(3),S=(r(185),r(31)),C=r(24),x=function(e){function t(){var e;return s()(this,t),(e=u()(this,p()(t).apply(this,arguments))).state={list:[],loading:!0},e.renderItem=e.renderItem.bind(j()(j()(e))),e}return b()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this;O()({path:Object(v.addQueryArgs)("/wc-pb/v3/products/categories",{per_page:-1})}).then(function(t){e.setState({list:t,loading:!1})}).catch(function(){e.setState({list:[],loading:!1})})}},{key:"renderItem",value:function(e){var t=e.item,r=e.search,n=e.depth,o=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===o&&0!==t.parent&&s.push("is-skip-level");var a=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name;return Object(g.createElement)(C.a,c()({className:s.join(" ")},e,{showCount:!0,"aria-label":Object(f.sprintf)(Object(f._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),a,t.count)}))}},{key:"render",value:function(){var e=this.state,t=e.list,r=e.loading,n=this.props,c=n.onChange,o=n.onOperatorChange,s=n.operator,a=void 0===s?"any":s,i=n.selected,l={clear:Object(f.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(f.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(f.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(f.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(f.sprintf)(Object(f._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(f.__)("Category search results updated.","woo-gutenberg-products-block")};return Object(g.createElement)(g.Fragment,null,Object(g.createElement)(S.a,{className:"woocommerce-product-categories",list:t,isLoading:r,selected:i.map(function(e){return Object(_.find)(t,{id:e})}).filter(Boolean),onChange:c,renderItem:this.renderItem,messages:l,isHierarchical:!0}),!!o&&Object(g.createElement)("div",{className:i.length<2?"screen-reader-text":""},Object(g.createElement)(E.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(f.__)("Display products matching","woo-gutenberg-products-block"),help:Object(f.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:a,onChange:o,options:[{label:Object(f.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(f.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))}}]),t}(g.Component);x.propTypes={onChange:k.a.func.isRequired,onOperatorChange:k.a.func,operator:k.a.oneOf(["all","any"]),selected:k.a.array.isRequired},t.a=x},717:function(e,t,r){"use strict";r.r(t);var n=r(13),c=r.n(n),o=r(0),s=r(2),a=r(19),i=r.n(a),l=r(30),u=r(8),d=r.n(u),p=r(9),m=r.n(p),b=r(10),h=r.n(b),j=r(11),g=r.n(j),f=r(12),v=r.n(f),w=r(6),O=r.n(w),_=r(23),y=r(14),k=r.n(y),E=r(25),S=r(4),C=r(3),x=r(1),z=r.n(x),N=r(36),I=r(40),R=r(37),L=function(e){function t(){var e;return d()(this,t),(e=h()(this,g()(t).apply(this,arguments))).state={products:[],loaded:!1},e.debouncedGetProducts=Object(S.debounce)(e.getProducts.bind(O()(O()(e))),200),e}return v()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"componentDidUpdate",value:function(e){var t=this;["categories","catOperator","columns","rows"].reduce(function(r,n){return r||e.attributes[n]!==t.props.attributes[n]},!1)&&this.debouncedGetProducts()}},{key:"getProducts",value:function(){var e=this;k()({path:Object(_.addQueryArgs)("/wc-pb/v3/products",Object(N.a)(this.props.attributes,this.props.name))}).then(function(t){e.setState({products:t,loaded:!0})}).catch(function(){e.setState({products:[],loaded:!0})})}},{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,c=t.catOperator,a=t.columns,i=t.rows;return Object(o.createElement)(E.InspectorControls,{key:"inspector"},Object(o.createElement)(C.PanelBody,{title:Object(s.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(C.RangeControl,{label:Object(s.__)("Columns","woo-gutenberg-products-block"),value:a,onChange:function(e){return r({columns:e})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns}),Object(o.createElement)(C.RangeControl,{label:Object(s.__)("Rows","woo-gutenberg-products-block"),value:i,onChange:function(e){return r({rows:e})},min:wc_product_block_data.min_rows,max:wc_product_block_data.max_rows})),Object(o.createElement)(C.PanelBody,{title:Object(s.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(I.a,{selected:n,onChange:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return e.id});r({categories:e})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props.attributes.columns,t=this.state,r=t.loaded,n=t.products,c=["wc-block-products-grid","wc-block-best-selling-products"];return e&&c.push("cols-".concat(e)),n&&!n.length&&(r?c.push("is-not-found"):c.push("is-loading")),Object(o.createElement)(o.Fragment,null,this.getInspectorControls(),Object(o.createElement)("div",{className:c.join(" ")},n.length?n.map(function(e){return Object(o.createElement)(R.a,{product:e,key:e.id})}):Object(o.createElement)(C.Placeholder,{icon:Object(o.createElement)(i.a,{icon:"stats-up-alt"}),label:Object(s.__)("Best Selling Products","woo-gutenberg-products-block")},r?Object(s.__)("No products found.","woo-gutenberg-products-block"):Object(o.createElement)(C.Spinner,null))))}}]),t}(o.Component);L.propTypes={attributes:z.a.object.isRequired,name:z.a.string.isRequired,setAttributes:z.a.func.isRequired};var M=L,P=r(38),B=r(166);Object(l.registerBlockType)("woocommerce/product-best-sellers",{title:Object(s.__)("Best Selling Products","woo-gutenberg-products-block"),icon:Object(o.createElement)(i.a,{icon:"stats-up-alt"}),category:"woocommerce",keywords:[Object(s.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(s.__)("Display a grid of your all-time best selling products.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},attributes:c()({},B.a),edit:function(e){return Object(o.createElement)(M,e)},save:function(e){var t=e.attributes.align;return Object(o.createElement)(o.RawHTML,{className:t?"align".concat(t):""},Object(P.a)(e,"woocommerce/product-best-sellers"))}})}}));