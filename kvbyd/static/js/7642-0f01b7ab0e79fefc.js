(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7642],{89539:function(t){var e,n,r,i,o,u,s,l,a,c,f,h,d,p,m,g,y,v,w,x,b,$;t.exports=(e="millisecond",n="second",r="minute",i="hour",o="week",u="month",s="quarter",l="year",a="date",c="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(m={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},g="$isDayjsObject",y=function(t){return t instanceof b||!(!t||!t[g])},v=function t(e,n,r){var i;if(!e)return p;if("string"==typeof e){var o=e.toLowerCase();m[o]&&(i=o),n&&(m[o]=n,i=o);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var s=e.name;m[s]=e,i=s}return!r&&i&&(p=i),i||!r&&p},w=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},(x={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+d(Math.floor(n/60),2,"0")+":"+d(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),o=n-i<0,s=e.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:u,y:l,w:o,d:"day",D:a,h:i,m:r,s:n,ms:e,Q:s})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=v,x.i=y,x.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},$=(b=function(){function t(t){this.$L=v(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var d=t.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return x},d.isValid=function(){return this.$d.toString()!==c},d.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return w(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<w(t)},d.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,e){var s=this,c=!!x.u(e)||e,f=x.p(t),h=function(t,e){var n=x.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return c?n:n.endOf("day")},d=function(t,e){return x.w(s.toDate()[t].apply(s.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},p=this.$W,m=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case l:return c?h(1,0):h(31,11);case u:return c?h(1,m):h(0,m+1);case o:var v=this.$locale().weekStart||0,w=(p<v?p+7:p)-v;return h(c?g-w:g+(6-w),m);case"day":case a:return d(y+"Hours",0);case i:return d(y+"Minutes",1);case r:return d(y+"Seconds",2);case n:return d(y+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(t,o){var s,c=x.p(t),f="set"+(this.$u?"UTC":""),h=((s={}).day=f+"Date",s[a]=f+"Date",s[u]=f+"Month",s[l]=f+"FullYear",s[i]=f+"Hours",s[r]=f+"Minutes",s[n]=f+"Seconds",s[e]=f+"Milliseconds",s)[c],d="day"===c?this.$D+(o-this.$W):o;if(c===u||c===l){var p=this.clone().set(a,1);p.$d[h](d),p.init(),this.$d=p.set(a,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](d);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[x.p(t)]()},d.add=function(t,e){var s,a=this;t=Number(t);var c=x.p(e),f=function(e){var n=w(a);return x.w(n.date(n.date()+Math.round(e*t)),a)};if(c===u)return this.set(u,this.$M+t);if(c===l)return this.set(l,this.$y+t);if("day"===c)return f(1);if(c===o)return f(7);var h=((s={})[r]=6e4,s[i]=36e5,s[n]=1e3,s)[c]||1,d=this.$d.getTime()+t*h;return x.w(d,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,u=this.$m,s=this.$M,l=n.weekdays,a=n.months,f=n.meridiem,d=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},p=function(t){return x.s(o%12||12,t,"0")},m=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(h,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,a,3);case"MMMM":return d(a,s);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(o);case"HH":return x.s(o,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(o,u,!0);case"A":return m(o,u,!1);case"m":return String(u);case"mm":return x.s(u,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},d.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},d.diff=function(t,e,a){var c,f=this,h=x.p(e),d=w(t),p=(d.utcOffset()-this.utcOffset())*6e4,m=this-d,g=function(){return x.m(f,d)};switch(h){case l:c=g()/12;break;case u:c=g();break;case s:c=g()/3;break;case o:c=(m-p)/6048e5;break;case"day":c=(m-p)/864e5;break;case i:c=m/36e5;break;case r:c=m/6e4;break;case n:c=m/1e3;break;default:c=m}return a?c:x.a(c)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return x.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},t}()).prototype,w.prototype=$,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",u],["$y",l],["$D",a]].forEach(function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=v,w.isDayjs=y,w.unix=function(t){return w(1e3*t)},w.en=m[p],w.Ls=m,w.p={},w)},47907:function(t,e,n){"use strict";var r=n(15313);n.o(r,"useParams")&&n.d(e,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(e,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(e,{useRouter:function(){return r.useRouter}})},16480:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=o(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=o(e,n));return e}(n)))}return t}function o(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0!==(n=(function(){return i}).apply(e,[]))&&(t.exports=n)}()},84069:function(t,e,n){"use strict";n.d(e,{Me:function(){return G},oo:function(){return tn},RR:function(){return te},cv:function(){return K},uY:function(){return tt}});let r=Math.min,i=Math.max,o=Math.round,u=Math.floor,s=t=>({x:t,y:t}),l={left:"right",right:"left",bottom:"top",top:"bottom"},a={start:"end",end:"start"};function c(t,e){return"function"==typeof t?t(e):t}function f(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function d(t){return"x"===t?"y":"x"}function p(t){return"y"===t?"height":"width"}function m(t){return["top","bottom"].includes(f(t))?"y":"x"}function g(t){return t.replace(/start|end/g,t=>a[t])}function y(t){return t.replace(/left|right|bottom|top/g,t=>l[t])}function v(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function w(t,e,n){let r,{reference:i,floating:o}=t,u=m(e),s=d(m(e)),l=p(s),a=f(e),c="y"===u,g=i.x+i.width/2-o.width/2,y=i.y+i.height/2-o.height/2,v=i[l]/2-o[l]/2;switch(a){case"top":r={x:g,y:i.y-o.height};break;case"bottom":r={x:g,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:y};break;case"left":r={x:i.x-o.width,y:y};break;default:r={x:i.x,y:i.y}}switch(h(e)){case"start":r[s]-=v*(n&&c?-1:1);break;case"end":r[s]+=v*(n&&c?-1:1)}return r}let x=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:u}=n,s=o.filter(Boolean),l=await (null==u.isRTL?void 0:u.isRTL(e)),a=await u.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:f}=w(a,r,l),h=r,d={},p=0;for(let n=0;n<s.length;n++){let{name:o,fn:m}=s[n],{x:g,y:y,data:v,reset:x}=await m({x:c,y:f,initialPlacement:r,placement:h,strategy:i,middlewareData:d,rects:a,platform:u,elements:{reference:t,floating:e}});c=null!=g?g:c,f=null!=y?y:f,d={...d,[o]:{...d[o],...v}},x&&p<=50&&(p++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(a=!0===x.rects?await u.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:c,y:f}=w(a,h,l)),n=-1)}return{x:c,y:f,placement:h,strategy:i,middlewareData:d}};async function b(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:u,elements:s,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:d=!1,padding:p=0}=c(e,t),m="number"!=typeof p?{top:0,right:0,bottom:0,left:0,...p}:{top:p,right:p,bottom:p,left:p},g=s[d?"floating"===h?"reference":"floating":h],y=v(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(s.floating)),boundary:a,rootBoundary:f,strategy:l})),w="floating"===h?{x:r,y:i,width:u.floating.width,height:u.floating.height}:u.reference,x=await (null==o.getOffsetParent?void 0:o.getOffsetParent(s.floating)),b=await (null==o.isElement?void 0:o.isElement(x))&&await (null==o.getScale?void 0:o.getScale(x))||{x:1,y:1},$=v(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:x,strategy:l}):w);return{top:(y.top-$.top+m.top)/b.y,bottom:($.bottom-y.bottom+m.bottom)/b.y,left:(y.left-$.left+m.left)/b.x,right:($.right-y.right+m.right)/b.x}}async function $(t,e){let{placement:n,platform:r,elements:i}=t,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),u=f(n),s=h(n),l="y"===m(n),a=["left","top"].includes(u)?-1:1,d=o&&l?-1:1,p=c(e,t),{mainAxis:g,crossAxis:y,alignmentAxis:v}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return s&&"number"==typeof v&&(y="end"===s?-1*v:v),l?{x:y*d,y:g*a}:{x:g*a,y:y*d}}function M(t){return T(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function D(t){var e;return null==(e=(T(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function T(t){return t instanceof Node||t instanceof S(t).Node}function R(t){return t instanceof Element||t instanceof S(t).Element}function L(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function O(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function k(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=H(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function E(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function A(t){let e=_(),n=R(t)?H(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function _(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function C(t){return["html","body","#document"].includes(M(t))}function H(t){return S(t).getComputedStyle(t)}function W(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function F(t){if("html"===M(t))return t;let e=t.assignedSlot||t.parentNode||O(t)&&t.host||D(t);return O(e)?e.host:e}function P(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);let i=function t(e){let n=F(e);return C(n)?e.ownerDocument?e.ownerDocument.body:e.body:L(n)&&k(n)?n:t(n)}(t),o=i===(null==(r=t.ownerDocument)?void 0:r.body),u=S(i);return o?e.concat(u,u.visualViewport||[],k(i)?i:[],u.frameElement&&n?P(u.frameElement):[]):e.concat(i,P(i,[],n))}function Y(t){let e=H(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=L(t),u=i?t.offsetWidth:n,s=i?t.offsetHeight:r,l=o(n)!==u||o(r)!==s;return l&&(n=u,r=s),{width:n,height:r,$:l}}function N(t){return R(t)?t:t.contextElement}function V(t){let e=N(t);if(!L(e))return s(1);let n=e.getBoundingClientRect(),{width:r,height:i,$:u}=Y(e),l=(u?o(n.width):n.width)/r,a=(u?o(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let I=s(0);function j(t){let e=S(t);return _()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:I}function z(t,e,n,r){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let o=t.getBoundingClientRect(),u=N(t),l=s(1);e&&(r?R(r)&&(l=V(r)):l=V(t));let a=(void 0===(i=n)&&(i=!1),r&&(!i||r===S(u))&&i)?j(u):s(0),c=(o.left+a.x)/l.x,f=(o.top+a.y)/l.y,h=o.width/l.x,d=o.height/l.y;if(u){let t=S(u),e=r&&R(r)?S(r):r,n=t,i=n.frameElement;for(;i&&r&&e!==n;){let t=V(i),e=i.getBoundingClientRect(),r=H(i),o=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,u=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;c*=t.x,f*=t.y,h*=t.x,d*=t.y,c+=o,f+=u,i=(n=S(i)).frameElement}}return v({width:h,height:d,x:c,y:f})}function B(t){return z(D(t)).left+W(t).scrollLeft}function U(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=S(t),r=D(t),i=n.visualViewport,o=r.clientWidth,u=r.clientHeight,s=0,l=0;if(i){o=i.width,u=i.height;let t=_();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,l=i.offsetTop)}return{width:o,height:u,x:s,y:l}}(t,n);else if("document"===e)r=function(t){let e=D(t),n=W(t),r=t.ownerDocument.body,o=i(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),u=i(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),s=-n.scrollLeft+B(t),l=-n.scrollTop;return"rtl"===H(r).direction&&(s+=i(e.clientWidth,r.clientWidth)-o),{width:o,height:u,x:s,y:l}}(D(t));else if(R(e))r=function(t,e){let n=z(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=L(t)?V(t):s(1),u=t.clientWidth*o.x;return{width:u,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n=j(t);r={...e,x:e.x-n.x,y:e.y-n.y}}return v(r)}function J(t){return"static"===H(t).position}function Z(t,e){return L(t)&&"fixed"!==H(t).position?e?e(t):t.offsetParent:null}function q(t,e){let n=S(t);if(E(t))return n;if(!L(t)){let e=F(t);for(;e&&!C(e);){if(R(e)&&!J(e))return e;e=F(e)}return n}let r=Z(t,e);for(;r&&["table","td","th"].includes(M(r))&&J(r);)r=Z(r,e);return r&&C(r)&&J(r)&&!A(r)?n:r||function(t){let e=F(t);for(;L(e)&&!C(e);){if(A(e))return e;if(E(e))break;e=F(e)}return null}(t)||n}let Q=async function(t){let e=this.getOffsetParent||q,n=this.getDimensions,r=await n(t.floating);return{reference:function(t,e,n){let r=L(e),i=D(e),o="fixed"===n,u=z(t,!0,o,e),l={scrollLeft:0,scrollTop:0},a=s(0);if(r||!r&&!o){if(("body"!==M(e)||k(i))&&(l=W(e)),r){let t=z(e,!0,o,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=B(i))}return{x:u.left+l.scrollLeft-a.x,y:u.top+l.scrollTop-a.y,width:u.width,height:u.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},X={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t,o="fixed"===i,u=D(r),l=!!e&&E(e.floating);if(r===u||l&&o)return n;let a={scrollLeft:0,scrollTop:0},c=s(1),f=s(0),h=L(r);if((h||!h&&!o)&&(("body"!==M(r)||k(u))&&(a=W(r)),L(r))){let t=z(r);c=V(r),f.x=t.x+r.clientLeft,f.y=t.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+f.x,y:n.y*c.y-a.scrollTop*c.y+f.y}},getDocumentElement:D,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:u}=t,s=[..."clippingAncestors"===n?E(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=P(t,[],!1).filter(t=>R(t)&&"body"!==M(t)),i=null,o="fixed"===H(t).position,u=o?F(t):t;for(;R(u)&&!C(u);){let e=H(u),n=A(u);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||k(u)&&!n&&function t(e,n){let r=F(e);return!(r===n||!R(r)||C(r))&&("fixed"===H(r).position||t(r,n))}(t,u))?r=r.filter(t=>t!==u):i=e,u=F(u)}return e.set(t,r),r}(e,this._c):[].concat(n),o],l=s[0],a=s.reduce((t,n)=>{let o=U(e,n,u);return t.top=i(o.top,t.top),t.right=r(o.right,t.right),t.bottom=r(o.bottom,t.bottom),t.left=i(o.left,t.left),t},U(e,l,u));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:q,getElementRects:Q,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=Y(t);return{width:e,height:n}},getScale:V,isElement:R,isRTL:function(t){return"rtl"===H(t).direction}};function G(t,e,n,o){let s;void 0===o&&(o={});let{ancestorScroll:l=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:h=!1}=o,d=N(t),p=l||a?[...d?P(d):[],...P(e)]:[];p.forEach(t=>{l&&t.addEventListener("scroll",n,{passive:!0}),a&&t.addEventListener("resize",n)});let m=d&&f?function(t,e){let n,o=null,s=D(t);function l(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return!function a(c,f){void 0===c&&(c=!1),void 0===f&&(f=1),l();let{left:h,top:d,width:p,height:m}=t.getBoundingClientRect();if(c||e(),!p||!m)return;let g=u(d),y=u(s.clientWidth-(h+p)),v={rootMargin:-g+"px "+-y+"px "+-u(s.clientHeight-(d+m))+"px "+-u(h)+"px",threshold:i(0,r(1,f))||1},w=!0;function x(t){let e=t[0].intersectionRatio;if(e!==f){if(!w)return a();e?a(!1,e):n=setTimeout(()=>{a(!1,1e-7)},1e3)}w=!1}try{o=new IntersectionObserver(x,{...v,root:s.ownerDocument})}catch(t){o=new IntersectionObserver(x,v)}o.observe(t)}(!0),l}(d,n):null,g=-1,y=null;c&&(y=new ResizeObserver(t=>{let[r]=t;r&&r.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=y)||t.observe(e)})),n()}),d&&!h&&y.observe(d),y.observe(e));let v=h?z(t):null;return h&&function e(){let r=z(t);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,s=requestAnimationFrame(e)}(),n(),()=>{var t;p.forEach(t=>{l&&t.removeEventListener("scroll",n),a&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=y)||t.disconnect(),y=null,h&&cancelAnimationFrame(s)}}let K=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,r;let{x:i,y:o,placement:u,middlewareData:s}=e,l=await $(e,t);return u===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:u}}}}},tt=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:o,placement:u}=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...h}=c(t,e),p={x:n,y:o},g=await b(e,h),y=m(f(u)),v=d(y),w=p[v],x=p[y];if(s){let t="y"===v?"top":"left",e="y"===v?"bottom":"right",n=w+g[t],o=w-g[e];w=i(n,r(w,o))}if(l){let t="y"===y?"top":"left",e="y"===y?"bottom":"right",n=x+g[t],o=x-g[e];x=i(n,r(x,o))}let $=a.fn({...e,[v]:w,[y]:x});return{...$,data:{x:$.x-n,y:$.y-o}}}}},te=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,r,i,o,u;let{placement:s,middlewareData:l,rects:a,initialPlacement:v,platform:w,elements:x}=e,{mainAxis:$=!0,crossAxis:M=!0,fallbackPlacements:S,fallbackStrategy:D="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:R=!0,...L}=c(t,e);if(null!=(n=l.arrow)&&n.alignmentOffset)return{};let O=f(s),k=m(v),E=f(v)===v,A=await (null==w.isRTL?void 0:w.isRTL(x.floating)),_=S||(E||!R?[y(v)]:function(t){let e=y(t);return[g(t),e,g(e)]}(v)),C="none"!==T;!S&&C&&_.push(...function(t,e,n,r){let i=h(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(f(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(g)))),o}(v,R,T,A));let H=[v,..._],W=await b(e,L),F=[],P=(null==(r=l.flip)?void 0:r.overflows)||[];if($&&F.push(W[O]),M){let t=function(t,e,n){void 0===n&&(n=!1);let r=h(t),i=d(m(t)),o=p(i),u="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(u=y(u)),[u,y(u)]}(s,a,A);F.push(W[t[0]],W[t[1]])}if(P=[...P,{placement:s,overflows:F}],!F.every(t=>t<=0)){let t=((null==(i=l.flip)?void 0:i.index)||0)+1,e=H[t];if(e)return{data:{index:t,overflows:P},reset:{placement:e}};let n=null==(o=P.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!n)switch(D){case"bestFit":{let t=null==(u=P.filter(t=>{if(C){let e=m(t.placement);return e===k||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:u[0];t&&(n=t);break}case"initialPlacement":n=v}if(s!==n)return{reset:{placement:n}}}return{}}}},tn=(t,e,n)=>{let r=new Map,i={platform:X,...n},o={...i.platform,_c:r};return x(t,e,{...i,platform:o})}}}]);