var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;/*FB_PKG_DELIM*/

/**
 * License: https://www.facebook.com/legal/license/9cisb7Fe7ih/
 */
__d("hoist-non-react-statics-2.5.0",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){(function(b,c){typeof g==="object"&&typeof h!=="undefined"?h.exports=c():b.hoistNonReactStatics=c()})(this,function(){var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,d=Object.getOwnPropertyNames,e=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,h=g&&g(Object);return function i(j,k,l){if(typeof k!=="string"){if(h){var m=g(k);m&&m!==h&&i(j,m,l)}m=d(k);e&&(m=m.concat(e(k)));for(var n=0;n<m.length;++n){var o=m[n];if(!a[o]&&!b[o]&&(!l||!l[o])){var p=f(k,o);try{c(j,o,p)}catch(a){}}}return j}return j}})}var j=!1;function k(){j||(j=!0,i());return h.exports}function a(a){switch(a){case void 0:return k()}}e.exports=a}),null);
__d("hoist-non-react-statics",["hoist-non-react-statics-2.5.0"],(function(a,b,c,d,e,f){e.exports=b("hoist-non-react-statics-2.5.0")()}),null);
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-0.0.0",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("React"));d={};var h={exports:d};function i(){h.exports=g}var j=!1;function k(){j||(j=!0,i());return h.exports}function c(a){switch(a){case void 0:return k()}}e.exports=c}),null);
__d("react",["react-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-0.0.0")()}),null);
/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("styleq-0.1.3",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){Object.defineProperty(g,"__esModule",{value:!0});g.styleq=void 0;var a=new WeakMap(),b="$$css";function c(c){var d,e,f;c!=null&&(d=c.disableCache===!0,e=c.disableMix===!0,f=c.transform);return function(){var c=[],g="",h=null,i=d?null:a,j=new Array(arguments.length);for(var k=0;k<arguments.length;k++)j[k]=arguments[k];while(j.length>0){var l=j.pop();if(l==null||l===!1)continue;if(Array.isArray(l)){for(var m=0;m<l.length;m++)j.push(l[m]);continue}var n=f!=null?f(l):l;if(n.$$css){var o="";if(i!=null&&i.has(n)){var p=i.get(n);p!=null&&(o=p[0],c.push.apply(c,p[1]),i=p[2])}else{var q=[];for(var r in n){var s=n[r];if(r===b)continue;(typeof s==="string"||s===null)&&(c.includes(r)||(c.push(r),i!=null&&q.push(r),typeof s==="string"&&(o+=o?" "+s:s)))}if(i!=null){var t=new WeakMap();i.set(n,[o,q,t]);i=t}}o&&(g=g?o+" "+g:o)}else if(e)h==null&&(h={}),h=Object.assign({},n,h);else{var u=null;for(var v in n){var w=n[v];w!==void 0&&(c.includes(v)||(w!=null&&(h==null&&(h={}),u==null&&(u={}),u[v]=w),c.push(v),i=null))}u!=null&&(h=Object.assign(u,h))}}var x=[g,h];return x}}var d=c();g.styleq=d;d.factory=c}var j=!1;function k(){j||(j=!0,i());return h.exports}b={};var l={exports:b};function m(){l.exports=k()}var n=!1;function o(){n||(n=!0,m());return l.exports}function a(a){switch(a){case void 0:return o()}}e.exports=a}),null);
__d("styleq",["styleq-0.1.3"],(function(a,b,c,d,e,f){e.exports=b("styleq-0.1.3")()}),null);

}
/*
     FILE ARCHIVED ON 21:54:13 Jan 29, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:13:40 Feb 06, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.532
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 121.355
  LoadShardBlock: 300.372 (3)
  PetaboxLoader3.datanode: 251.154 (5)
  load_resource: 196.879 (2)
  PetaboxLoader3.resolve: 113.056 (2)
*/