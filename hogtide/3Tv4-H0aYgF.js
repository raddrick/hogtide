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

__d("PluginConfirm",["DOMEvent","DOMEventListener","PlatformVersioning","PluginMessage","PopupWindow","URI"],(function(a,b,c,d,e,f){var g;function h(a){Object.assign(this,{plugin:a,confirm_params:{},return_params:(g||(g=b("URI"))).getRequestURI().getQueryData()}),this.addReturnParams({ret:"sentry"}),delete this.return_params.hash}Object.assign(h.prototype,{addConfirmParams:function(a){Object.assign(this.confirm_params,a)},addReturnParams:function(a){Object.assign(this.return_params,a);return this},start:function(){var a=b("PlatformVersioning").versionAwareURI(new(g||(g=b("URI")))("/plugins/error/confirm/"+this.plugin)).addQueryData(this.confirm_params).addQueryData({secure:g.getRequestURI().isSecure(),plugin:this.plugin,return_params:JSON.stringify(this.return_params)});this.popup=b("PopupWindow").open(a.toString(),320,486);b("PluginMessage").listen();return this}});h.starter=function(a,b,c){a=new h(a);a.addConfirmParams(b||{});a.addReturnParams(c||{});return a.start.bind(a)};h.listen=function(a,c,d,e){b("DOMEventListener").add(a,"click",function(a){new(b("DOMEvent"))(a).kill(),h.starter(c,d,e)()})};e.exports=h}),null);
__d("PluginFollow",["Arbiter","CSS"],(function(a,b,c,d,e,f,g){"use strict";a=function(a,b){this.$1=a,this.$2=b,c("Arbiter").subscribe("embeddedFollowSuccess",function(c,e){d("CSS").addClass(a,"hidden_elem"),d("CSS").removeClass(b,"hidden_elem")}),c("Arbiter").subscribe("embeddedUnfollowSuccess",function(c,e){d("CSS").removeClass(a,"hidden_elem"),d("CSS").addClass(b,"hidden_elem")})};g["default"]=a}),98);
__d("VideoHomeFollowMutationLogger",["VideoHomeTypedLogger"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.event,d=a.target,e=a.id;a=a.playerOrigin;a=a===void 0?"video_home":a;new(c("VideoHomeTypedLogger"))().setEvent(b).setEventTarget(d).setEventTargetID(e).setPlayerOrigin(a).log()}function a(a,b){a.addEventListener("click",function(){h(b)})}g.logClick=h;g.init=a}),98);

}
/*
     FILE ARCHIVED ON 14:36:26 Jan 25, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:13:39 Feb 06, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.69
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 13.98
  LoadShardBlock: 208.223 (3)
  PetaboxLoader3.datanode: 218.941 (4)
  load_resource: 201.575
  PetaboxLoader3.resolve: 172.814
*/