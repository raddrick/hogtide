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

google.maps.__gjsload__('stats', function(_){var OY=function(){this.b=new _.Kk},PY=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.Qn;c+=a.rn});return c?b/c:0},QY=function(a,b,c){var d=[];_.Ej(a,function(a,c){d.push(c+b+a)});return d.join(c)},RY=function(a){var b={};_.Ej(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return QY(b,":",",")},SY=function(){var a;_.zf[35]?a=_.Q(_.sf(_.T),11):a=_.er;var b=window.document;this.l=_.si;this.f=a+"/maps/gen_204";this.j=b},TY=function(a,b,
c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},UY=function(a,b,c,d){var e=_.P(_.T,0,1);this.m=a;this.B=b;this.l=e;this.f=c;this.j=d;this.b=new _.Kk;this.A=_.Ua()},WY=function(a,b,c,d,e){var f=_.P(_.T,23,500);var g=_.P(_.T,22,2);this.D=a;this.G=b;this.H=f;this.l=g;this.B=c;this.m=d;this.A=e;this.f=new _.Kk;this.b=0;this.j=_.Ua();VY(this)},VY=function(a){window.setTimeout(function(){XY(a);
VY(a)},Math.min(a.H*Math.pow(a.l,a.b),2147483647))},XY=function(a){var b=TY(a.G,a.B,a.m,a.A);b.t=a.b+"-"+(_.Ua()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.Ll()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},YY=function(a,b,c,d,e){this.A=a;this.B=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},ZY=function(a,b,c){var d=_.gi;this.j=a;_.M.bind(this.j,"set_at",this,this.l);_.M.bind(this.j,"insert_at",this,this.l);this.A=b;this.B=d;this.m=c;this.f=0;this.b={};this.l()},$Y=
function(){this.j=_.Q(_.T,6);this.B=_.Q(_.T,16);this.b=new SY;_.fi&&new ZY(_.fi,(0,_.y)(this.b.b,this.b),!!this.j);var a=_.Q(new _.lf(_.T.data[3]),1);this.D=a.split(".")[1]||a;this.G={};this.A={};this.m={};this.H={};this.Z=_.P(_.T,0,1);_.ni&&(this.l=new WY(this.b,this.D,this.Z,this.j,this.B))};OY.prototype.f=function(a,b,c){this.b.set(_.Oc(a),{Qn:b,rn:c})};
SY.prototype.b=function(a,b){b=b||{};var c=_.Rj().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=RY(b);a=QY(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.v.__gm_captureCSI)&&b(a)};
UY.prototype.D=function(a,b){b=_.q(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.y)(function(){var a=TY(this.B,this.l,this.f,this.j);a.t=_.Ua()-this.A;var b=this.b;_.Lk(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.f[g]}_.av(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};WY.prototype.register=function(a,b){this.f.set(a,b)};YY.prototype.D=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.xv(this,this.G,500))};
YY.prototype.G=function(){for(var a=TY(this.B,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+_.ql();this.b.length=0;this.A.b({ev:"api_mapft"},a)};ZY.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Um;a=a.timestamp-this.B;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.A({ev:"api_services"},c)}}};$Y.prototype.ma=function(a){a=_.Oc(a);this.G[a]||(this.G[a]=new YY(this.b,this.D,this.Z,this.j,this.B));return this.G[a]};$Y.prototype.lb=function(a){a=_.Oc(a);this.A[a]||(this.A[a]=new UY(this.b,this.D,this.j,this.B));return this.A[a]};$Y.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.zw,this.l.register(a,function(){return b.pb()}));var b=this.m[a];return b}};
$Y.prototype.da=function(a){if(this.l){this.H[a]||(this.H[a]=new OY,this.l.register(a,function(){return PY(b)}));var b=this.H[a];return b}};var aZ=new $Y;_.ce("stats",aZ);});


}
/*
     FILE ARCHIVED ON 08:27:25 Aug 06, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:13:58 Feb 06, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.698
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 52.767
  LoadShardBlock: 244.294 (3)
  PetaboxLoader3.datanode: 272.671 (5)
  load_resource: 338.068 (2)
  PetaboxLoader3.resolve: 240.326 (2)
*/