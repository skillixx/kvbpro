(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7880],{35012:function(t,e,n){Promise.resolve().then(n.bind(n,2872)),Promise.resolve().then(n.bind(n,93249))},89539:function(t){var e,n,r,i,s,a,u,o,c,l,d,h,f,m,_,g,y,p,x,v,w,$;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",a="month",u="quarter",o="year",c="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(_={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},g="$isDayjsObject",y=function(t){return t instanceof w||!(!t||!t[g])},p=function t(e,n,r){var i;if(!e)return m;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;_[u]=e,i=u}return!r&&i&&(m=i),i||!r&&m},x=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},(v={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:o,w:s,d:"day",D:c,h:i,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=p,v.i=y,v.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},$=(w=function(){function t(t){this.$L=p(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return this.$d.toString()!==l},f.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return x(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<x(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var u=this,l=!!v.u(e)||e,d=v.p(t),h=function(t,e){var n=v.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf("day")},f=function(t,e){return v.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,_=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case o:return l?h(1,0):h(31,11);case a:return l?h(1,_):h(0,_+1);case s:var p=this.$locale().weekStart||0,x=(m<p?m+7:m)-p;return h(l?g-x:g+(6-x),_);case"day":case c:return f(y+"Hours",0);case i:return f(y+"Minutes",1);case r:return f(y+"Seconds",2);case n:return f(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,s){var u,l=v.p(t),d="set"+(this.$u?"UTC":""),h=((u={}).day=d+"Date",u[c]=d+"Date",u[a]=d+"Month",u[o]=d+"FullYear",u[i]=d+"Hours",u[r]=d+"Minutes",u[n]=d+"Seconds",u[e]=d+"Milliseconds",u)[l],f="day"===l?this.$D+(s-this.$W):s;if(l===a||l===o){var m=this.clone().set(c,1);m.$d[h](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,e){var u,c=this;t=Number(t);var l=v.p(e),d=function(e){var n=x(c);return v.w(n.date(n.date()+Math.round(e*t)),c)};if(l===a)return this.set(a,this.$M+t);if(l===o)return this.set(o,this.$y+t);if("day"===l)return d(1);if(l===s)return d(7);var h=((u={})[r]=6e4,u[i]=36e5,u[n]=1e3,u)[l]||1,f=this.$d.getTime()+t*h;return v.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=v.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,d=n.meridiem,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},m=function(t){return v.s(s%12||12,t,"0")},_=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(h,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return v.s(e.$y,4,"0");case"M":return u+1;case"MM":return v.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,c,3);case"MMMM":return f(c,u);case"D":return e.$D;case"DD":return v.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,o,2);case"ddd":return f(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return v.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return _(s,a,!0);case"A":return _(s,a,!1);case"m":return String(a);case"mm":return v.s(a,2,"0");case"s":return String(e.$s);case"ss":return v.s(e.$s,2,"0");case"SSS":return v.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,c){var l,d=this,h=v.p(e),f=x(t),m=(f.utcOffset()-this.utcOffset())*6e4,_=this-f,g=function(){return v.m(d,f)};switch(h){case o:l=g()/12;break;case a:l=g();break;case u:l=g()/3;break;case s:l=(_-m)/6048e5;break;case"day":l=(_-m)/864e5;break;case i:l=_/36e5;break;case r:l=_/6e4;break;case n:l=_/1e3;break;default:l=_}return c?l:v.a(l)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return _[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,x.prototype=$,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),x.extend=function(t,e){return t.$i||(t(e,w,x),t.$i=!0),x},x.locale=p,x.isDayjs=y,x.unix=function(t){return x(1e3*t)},x.en=_[m],x.Ls=_,x.p={},x)},47907:function(t,e,n){"use strict";var r=n(15313);n.o(r,"useParams")&&n.d(e,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(e,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(e,{useRouter:function(){return r.useRouter}})},23585:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(57437),i=n(802),s=n(81134),a=n.n(s);function u(t){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z.Title,{children:t.title}),t.infoText&&(0,r.jsx)("p",{className:a()["info-text"],dangerouslySetInnerHTML:{__html:t.infoText}})]})}},1031:function(t,e,n){"use strict";n.d(e,{dv:function(){return a},qN:function(){return u},sS:function(){return s}});var r=n(89539),i=n.n(r);function s(t,e){let n={},r=[];return t.forEach(t=>{let i=e(t);n[i]?n[i].list.push(t):(n[i]={groupName:i,list:[t],ex:t},r.push(n[i]))}),r}function a(t,e,n){let r=new Date(1e3*n),i=t.insights.calendar.date["week".concat(r.getDay())],s=String(r.getDate()),a=t.insights.calendar.date["month".concat(r.getMonth()+1)],u=String(r.getFullYear());return e(t.insights.calendar.date.formatDate,{week:i,dd:s,mm:a,yyyy:u})}function u(t){let e=0,n=0,r=new Date(new Date().setHours(0,0,0,0)).getTime(),s=new Date().getTime();switch(t){case"today":e=r/1e3,n=(r+86399e3)/1e3;break;case"tomorrow":e=(r+864e5)/1e3,n=(r+1728e5-1e3)/1e3;break;case"week":e=i()().startOf("week").add(1,"day").valueOf()/1e3,n=(i()().endOf("week").add(1,"day").valueOf()-1e3)/1e3;break;case"three":e=new Date(new Date(s-7776e6+864e5).setHours(0,0,0,0)).getTime()/1e3,n=(r+86399e3)/1e3}return{startTime:e.toFixed(),endTime:n.toFixed()}}},2872:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return D}});var r=n(57437),i=n(75517),s=n(23585),a=n(1031),u=n(59744),o=n(66694),c=n(16480),l=n.n(c),d=n(2265),h=n(66126),f=n.n(h);function m(t){let[e,n]=(0,d.useState)(t.status);return(0,r.jsx)("div",{className:l()({[f().switch]:!0,[f()["switch-open"]]:e,[f().loading]:t.loading}),onClick:()=>{t.loading||(n(!e),t.onChange(!e))},children:(0,r.jsx)("div",{className:f()["slide-block"]})})}var _=n(24604),g=n(3903),y=n(31250),p=n(47848),x=n.n(p),v=n(64795);function w(t){let{isRead:e,item:n}=t,i=1e3*n.publishTime,s=(0,y.Bm)(i),a=(0,y.p6)(i,"HH:mm"),u=n.cover,o=()=>{};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:l()({[x()["newsflash-item-line"]]:!0,[x()["normal-item"]]:!0,[x()["is-read"]]:e,[x().high]:n.important,[x()["high-read"]]:e&&n.important}),onClick:()=>o(),children:[(0,r.jsx)("time",{dateTime:s,className:x()["item-time"],children:a}),(0,r.jsxs)("div",{className:x()["item-ctxt"],children:[(0,r.jsx)("p",{className:x()["item-title"],children:n.title}),u&&(0,r.jsx)("div",{className:x()["item-img"],children:(0,r.jsx)(v.Z,{src:n.cover,alt:"newsflash-img",width:"90",height:"60"})})]})]})})}var $=n(24060),j=n.n($);function S(t){let{newsflashStore:e}=(0,g.useCounterStore)(t=>t),{importance:n,pageIndex:s,getNewsflashList:c,resetNewsflashList:h}=e(t=>t),{newsflashList:f}=e(e=>{let{initFinish:n}=e.getSyncState();return!n&&t.data&&e.initPropsData({newsflashList:t.data.items,windowId:t.data.windowId,pageIndex:e.pageIndex+1},!1),e.initFinish?e:e.getSyncState()}),[y,p]=(0,d.useState)(0===f.length),[x,v]=(0,d.useState)(!1),{i18n:$,t:S,currentLang:D}=(0,i.Q)(),[M,b]=(0,d.useState)(!1),k=async t=>{try{let{notMore:e}=await c({...t,lang:D});b(e),p(!1)}catch(t){1===s&&(p(!1),v(!0))}},[T,N]=(0,d.useState)((0,a.sS)(f,t=>(0,a.dv)($,S,t.publishTime)));(0,d.useEffect)(()=>{N((0,a.sS)(f,t=>(0,a.dv)($,S,t.publishTime)))},[f]),(0,d.useEffect)(()=>{0===f.length&&k()},[]);let O=(0,d.useRef)(D);(0,d.useEffect)(()=>{O.current!==D&&(h(),k()),O.current=D},[D]);let[F,H]=(0,d.useState)(!1),Z=async()=>{H(!0),await k(),H(!1)},C=f.length>0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:j()["importance-switch"],children:[(0,r.jsx)("div",{className:j()["importance-text"],children:$.insights.newsflash.list.importance}),(0,r.jsx)(m,{onChange:t=>{p(!0),h(),b(!1),k({important:t}).then(()=>{p(!1)})},status:n,loading:y})]}),(0,r.jsxs)("div",{className:j()["newsflash-list"],children:[(0,r.jsx)(o.Z,{loading:y,retry:k,failed:x,empty:0===T.length,children:T.map((t,e)=>(0,r.jsxs)("div",{className:j()["time-group"],children:[(0,r.jsx)("div",{className:l()({[j()["time-group-sticky"]]:!0,[j().normal]:!0}),children:t.groupName}),t.list.map((t,e)=>(0,r.jsx)("div",{children:(0,r.jsx)(w,{isRead:!1,item:t})},e))]},e))}),!M&&C&&(0,r.jsx)("div",{className:j()["load-more"],onClick:Z,children:F?(0,r.jsx)(u.Z,{}):(0,r.jsxs)(r.Fragment,{children:[$.insights.newsflash.list.showmore,(0,r.jsx)("span",{className:j()["more-icon"],dangerouslySetInnerHTML:{__html:(0,_.kX)({width:18,height:12,color:"currentColor"})}})]})})]})]})}function D(t){let{i18n:e}=(0,i.Q)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z,{title:e.insights.newsflash.title,infoText:e.insights.newsflash.msg}),(0,r.jsx)(S,{data:t.data})]})}},93249:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var r=n(57437),i=n(19126),s=n(75517);function a(){let{i18n:t}=(0,s.Q)();return(0,r.jsx)(i.Z,{head:u(t)})}let u=t=>({title:t.insights.newsList.tdk.title,meta:[{name:"description",content:t.insights.newsList.tdk.description},{name:"keyword",content:t.insights.newsList.tdk.keyword}]})},19126:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(57437),i=n(2265);function s(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:t.head.title}),t.head.meta&&t.head.meta.map((t,e)=>(0,i.createElement)("meta",{...t,key:e,content:t.content}))]})}},802:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(86540),i=n(5958),s=n(57437),a=n(16480),u=n.n(a),o=n(61038),c=n.n(o),l=n(64795),d=n(47907),h={Text:r.Z,Title:i.Z,SubTitle:function(t){let{text:e,mt:n,mb:r,size:i}=t,a=r?{marginBottom:r+"px"}:{};return i&&(a.fontSize=i+"px"),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:a,className:u()({[c().subTitle]:!0,[c()["mt".concat(n)]]:void 0!==n}),children:e||t.children})})},Tips:function(t){let{mt:e,mb:n}=t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:u()({[c().tips]:!0,[c()["mt".concat(e)]]:void 0!==e}),children:t.text||t.children})})},Top:function(t){let{label:e,phonebg:n,pcbg:r}=t.currentPage,i=(0,d.usePathname)(),a=["/about-us/announcement.html","/insights/market-analysis.html"].some(t=>i.indexOf(t)>-1)&&i.split("/").length>=3;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:u()({[c().topBox]:!0,[c().hide]:a}),children:[(0,s.jsx)(l.Z,{loading:"eager",width:"500",height:"200",src:n,className:c()["img-phone"],alt:"img"}),(0,s.jsx)(l.Z,{loading:"eager",width:"1920",height:"200",src:r,className:c().img,alt:"img"}),(0,s.jsx)("div",{className:u()({"default-layout":!0,[c().title]:!0}),children:e})]})})}}},86540:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(57437),i=n(16480),s=n.n(i),a=n(61038),u=n.n(a);function o(t){let{mt:e,mb:n}=t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:s()({[u().text]:!0,[u()["mt".concat(e)]]:void 0!==e}),children:t.text||t.children})})}},5958:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(57437),i=n(16480),s=n.n(i),a=n(61038),u=n.n(a);function o(t){let{mt:e,mb:n}=t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:s()({[u().title]:!0,[u()["mt".concat(e)]]:void 0!==e,[u()[t.color?t.color:""]]:void 0!==t.color}),children:t.text||t.children})})}},81134:function(t){t.exports={title:"style_title__0EtHW","info-text":"style_info-text__IFaTA"}},47848:function(t){t.exports={"newsflash-item-line":"style_newsflash-item-line__gj0R0","item-time":"style_item-time__TTKWx","item-ctxt":"style_item-ctxt__j4hNw","item-title":"style_item-title__nsloK","item-img":"style_item-img__OT3Za","item-share":"style_item-share__QM89g","end-btn":"style_end-btn__gOA95","is-read":"style_is-read__LC0fQ","normal-item":"style_normal-item__oknyQ",high:"style_high__MI1E4","high-read":"style_high-read__s1JWB"}},24060:function(t){t.exports={"newsflash-list":"style_newsflash-list__cyowb","time-group":"style_time-group__3yr_c","time-group-sticky":"style_time-group-sticky__Of20u",normal:"style_normal__LRw8t","load-more":"style_load-more__fgjzg","importance-switch":"style_importance-switch__LudWu","importance-text":"style_importance-text__HFi9R"}},61038:function(t){t.exports={title:"style_title__tVerr",white:"style_white__Yu5Tg",text:"style_text__bRNFe",subTitle:"style_subTitle__pkt_9",tips:"style_tips__4RbQc",topBox:"style_topBox___qfB6",img:"style_img__xOH91","img-phone":"style_img-phone__9hLTB",mt10:"style_mt10__vrW0h",mt15:"style_mt15__wevKd",mt20:"style_mt20__7AlPr",mt30:"style_mt30__j9j6s",mt40:"style_mt40__Sqsl7",mt50:"style_mt50__dlNpQ",mt80:"style_mt80__PjzRj",hide:"style_hide__l_jCs"}},66126:function(t){t.exports={switch:"style_switch__6XZbC","slide-block":"style_slide-block__4Fwtm","switch-open":"style_switch-open__d_G_5",loading:"style_loading__av_we"}},16480:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=s(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=s(e,n));return e}(n)))}return t}function s(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0!==(n=(function(){return i}).apply(e,[]))&&(t.exports=n)}()}},function(t){t.O(0,[1685,3903,5518,2971,8069,1744],function(){return t(t.s=35012)}),_N_E=t.O()}]);