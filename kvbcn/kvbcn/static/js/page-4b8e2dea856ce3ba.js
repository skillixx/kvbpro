(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6679],{42374:function(e,t,n){Promise.resolve().then(n.bind(n,40189)),Promise.resolve().then(n.bind(n,53503))},47907:function(e,t,n){"use strict";var r=n(15313);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},66406:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(82139),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let r=n(86921),i=n(57437),l=r._(n(2265)),s=n(14542),o=n(17434),a=n(11030),c=n(36874),u=n(12956),d=n(46993),f=n(38599),h=n(45291),p=n(66406),m=n(45786),_=n(91414),g=new Set;function y(e,t,n,r,i,l){if("undefined"!=typeof window&&(l||(0,o.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(g.has(i))return;g.add(i)}Promise.resolve(l?e.prefetch(t,i):e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let x=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:g,children:x,prefetch:j=null,passHref:b,replace:w,shallow:N,scroll:S,locale:E,onClick:L,onMouseEnter:C,onTouchStart:T,legacyBehavior:P=!1,...A}=e;n=x,P&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let k=l.default.useContext(d.RouterContext),I=l.default.useContext(f.AppRouterContext),M=null!=k?k:I,O=!k,R=!1!==j,U=null===j?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:Z,as:H}=l.default.useMemo(()=>{if(!k){let e=v(a);return{href:e,as:g?v(g):e}}let[e,t]=(0,s.resolveHref)(k,a,!0);return{href:e,as:g?(0,s.resolveHref)(k,g):t||e}},[k,a,g]),D=l.default.useRef(Z),z=l.default.useRef(H);P&&(r=l.default.Children.only(n));let B=P?r&&"object"==typeof r&&r.ref:t,[F,G,V]=(0,h.useIntersection)({rootMargin:"200px"}),q=l.default.useCallback(e=>{(z.current!==H||D.current!==Z)&&(V(),z.current=H,D.current=Z),F(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[H,B,Z,V,F]);l.default.useEffect(()=>{M&&G&&R&&y(M,Z,H,{locale:E},{kind:U},O)},[H,Z,G,E,R,null==k?void 0:k.locale,M,O,U]);let W={ref:q,onClick(e){P||"function"!=typeof L||L(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,n,r,i,s,a,c,u){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,o.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:s,locale:c,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})};u?l.default.startTransition(f):f()}(e,M,Z,H,w,N,S,E,O)},onMouseEnter(e){P||"function"!=typeof C||C(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&(R||!O)&&y(M,Z,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},O)},onTouchStart(e){P||"function"!=typeof T||T(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&(R||!O)&&y(M,Z,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},O)}};if((0,c.isAbsoluteUrl)(H))W.href=H;else if(!P||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(H,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);W.href=t||(0,m.addBasePath)((0,u.addLocale)(H,e,null==k?void 0:k.defaultLocale))}return P?l.default.cloneElement(r,W):(0,i.jsx)("a",{...A,...W,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},45291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(2265),i=n(52185),l="function"==typeof IntersectionObserver,s=new Map,o=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!l,[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(c||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:i,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},o.push(n),s.set(n,t),t}(n);return l.set(e,t),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),s.delete(r);let e=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!u){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,n,t,u,f.current]),[h,u,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},40189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(57437),i=n(19126),l=n(75517);function s(){let{i18n:e}=(0,l.Q)();return(0,r.jsx)(i.Z,{head:o(e)})}let o=e=>({title:e.insights.newsList.tdk.title,meta:[{name:"description",content:e.insights.newsList.tdk.description},{name:"keyword",content:e.insights.newsList.tdk.keyword}]})},92754:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(57437),i=n(31250),l=n(75517),s=n(55836),o=n.n(s),a=function(e){let{infoProps:t}=e,{i18n:n}=(0,l.Q)(),s=1e3*t.time;return(0,r.jsxs)("div",{className:o()["feed-info"],children:[t.source&&(0,r.jsxs)("span",{className:o().source,children:[t.source," \xb7 "]}),(0,r.jsx)("time",{dateTime:(0,i.Bm)(s),children:t.publishTime}),(0,r.jsxs)("span",{className:o().views,children:[t.views," ",n.insights.news.views]})]})}},23585:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(57437),i=n(802),l=n(81134),s=n.n(l);function o(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z.Title,{children:e.title}),e.infoText&&(0,r.jsx)("p",{className:s()["info-text"],dangerouslySetInnerHTML:{__html:e.infoText}})]})}},53503:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r,i,l,s,o=n(57437),a=n(2265),c=n(68449),u=n(66694),d=n(23585),f=n(92754),h=n(35540),p=n.n(h);function m(e){return(0,o.jsx)("p",{className:p()["content-text"],children:e.children})}var _=n(64795),g=n(23719),y=n.n(g),v=n(19200);function x(e){let{STATIC_URL:t}=(0,v.z)();return(0,o.jsx)("div",{className:y()["file-item"],children:(0,o.jsx)(_.Z,{className:y()["file-img"],loading:"lazy",src:e.fileProps.url.replace(/__public_domain__/g,t.replace(/http(s):\/\//g,"")),width:e.width,height:e.height,alt:e.alt})})}var j=n(25250),b=n.n(j),w=n(80127),N=n.n(w),S=n(16480),E=n.n(S);function L(e){return(0,o.jsx)(b(),{href:e.route,className:E()({[N()["feed-item-base"]]:!0,[N()["is-read"]]:e.isRead}),children:e.children})}var C=n(1858),T=n.n(C);function P(e){return(0,o.jsx)("h3",{className:T()["title-text"],children:e.children})}(r=l||(l={}))[r.ALL=0]="ALL",r[r.HEADLINE=1]="HEADLINE",r[r.VIDEO=2]="VIDEO",r[r.LIVE=3]="LIVE",r[r.NEWSFLASH=4]="NEWSFLASH",r[r.SIGNAL=5]="SIGNAL",r[r.SOURCE=6]="SOURCE",r[r.RELATED_INSTRUMENT=7]="RELATED_INSTRUMENT",r[r.TAG=8]="TAG",r[r.SAVED=9]="SAVED",(i=s||(s={}))[i.photo=1]="photo",i[i.video=2]="video";var A=n(53029),k=n.n(A);function I(e){let{feedProps:t}=e,n={source:t.author||t.sourceWebsite||"",time:t.publishTime,views:t.showReadCount,publishTime:t.showPublishTime},r=function(e){let{files:t,cover:n}=e;if(t&&t.length){let e=t.find(e=>e.type===s.video)||t[0];return n?{...e,url:n}:e}return{articleId:0,type:s.photo,avr:0,width:0,height:0,size:0,url:n,thumbnailUrl:"",duration:0,mediaType:"",seq:0,originUrl:""}}(t);return(0,o.jsx)(L,{route:"/insights/market-analysis.html".concat(t.articleId),children:(0,o.jsxs)("div",{className:k()["normal-content"],children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(P,{children:t.title}),t.summary&&(0,o.jsx)(m,{children:t.summary}),(0,o.jsx)(f.Z,{infoProps:n})]}),t.cover&&(0,o.jsx)("div",{className:k()["file-item"],children:(0,o.jsx)(x,{fileProps:r,width:"225",height:"126",alt:"Cover photo"})})]})})}function M(e){return(0,o.jsx)(o.Fragment,{children:e.list.map(e=>(0,o.jsx)(I,{feedProps:e},e.articleId))})}var O=n(3903),R=n(96108),U=n(75517),Z=n(73909),H=n(90667),D=n.n(H),z=n(52855);function B(e){let{articleData:t}=e,{i18n:n}=(0,U.Q)(),{articleList:r}=(0,O.useCounterStore)(e=>e.articleListStore)(e=>{let{initFinish:n}=e.getSyncState();return!n&&t&&e.initPropsData({articleList:(0,R.N)(t)},!1),e.initFinish?e:e.getSyncState()}),{loading:i,error:l,pageIndex:s,defaultPageSize:f,runPage:h,setActivityLangForArea:p}=(0,Z.g)(),m=(0,a.useRef)(null),_=async()=>await p(await (0,z.b)());return(0,a.useEffect)(()=>{!r.items.length&&(t||_())},[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(d.Z,{title:n.menuList.insights.marketAnalysis}),(0,o.jsx)(u.Z,{loading:i,empty:0===r.items.length&&!i,failed:l,retry:_,children:(0,o.jsxs)("div",{className:D()["article-list"],ref:m,children:[(0,o.jsx)(M,{list:r.items}),r.totalCount>f&&(0,o.jsx)(c.Z,{total:r.totalCount,pageSize:10,currentChange:e=>{h(e)},currentPage:s})]})})]})}},19126:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(57437),i=n(2265);function l(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:e.head.title}),e.head.meta&&e.head.meta.map((e,t)=>(0,i.createElement)("meta",{...e,key:t,content:e.content}))]})}},802:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(86540),i=n(5958),l=n(57437),s=n(16480),o=n.n(s),a=n(61038),c=n.n(a),u=n(64795),d=n(47907),f={Text:r.Z,Title:i.Z,SubTitle:function(e){let{text:t,mt:n,mb:r,size:i}=e,s=r?{marginBottom:r+"px"}:{};return i&&(s.fontSize=i+"px"),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:s,className:o()({[c().subTitle]:!0,[c()["mt".concat(n)]]:void 0!==n}),children:t||e.children})})},Tips:function(e){let{mt:t,mb:n}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:o()({[c().tips]:!0,[c()["mt".concat(t)]]:void 0!==t}),children:e.text||e.children})})},Top:function(e){let{label:t,phonebg:n,pcbg:r}=e.currentPage,i=(0,d.usePathname)(),s=["/about-us/announcement.html","/insights/market-analysis.html"].some(e=>i.indexOf(e)>-1)&&i.split("/").length>=3;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:o()({[c().topBox]:!0,[c().hide]:s}),children:[(0,l.jsx)(u.Z,{loading:"eager",width:"500",height:"200",src:n,className:c()["img-phone"],alt:"img"}),(0,l.jsx)(u.Z,{loading:"eager",width:"1920",height:"200",src:r,className:c().img,alt:"img"}),(0,l.jsx)("div",{className:o()({"default-layout":!0,[c().title]:!0}),children:t})]})})}}},86540:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(57437),i=n(16480),l=n.n(i),s=n(61038),o=n.n(s);function a(e){let{mt:t,mb:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:l()({[o().text]:!0,[o()["mt".concat(t)]]:void 0!==t}),children:e.text||e.children})})}},5958:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(57437),i=n(16480),l=n.n(i),s=n(61038),o=n.n(s);function a(e){let{mt:t,mb:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:l()({[o().title]:!0,[o()["mt".concat(t)]]:void 0!==t,[o()[e.color?e.color:""]]:void 0!==e.color}),children:e.text||e.children})})}},68449:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(57437),i=n(2265),l=n(2958),s=n.n(l),o=n(16480),a=n.n(o);function c(e){let{total:t,pageSize:n,currentPage:l,currentChange:o}=e,c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return'<svg width="'.concat(e.width||24,'" height="').concat(e.height||24,'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7.54 12.273a.75.75 0 0 1-.075-.947l.075-.092 8-8.335a.75.75 0 0 1 1.154.953l-.071.086-7.502 7.815 7.501 7.809a.75.75 0 0 1 .053.978l-.074.082a.75.75 0 0 1-.978.053l-.082-.074-8-8.328z" fill="').concat(e.color||"currentColor",'"/>\n</svg>\n')}({width:20,height:20,color:"currentColor"}),u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return'<svg width="'.concat(e.width||24,'" height="').concat(e.height||24,'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M16.622 12.273a.75.75 0 0 0 .076-.947l-.075-.092-8-8.335a.75.75 0 0 0-1.153.953l.07.086 7.502 7.815-7.501 7.809a.75.75 0 0 0-.053.978l.074.082a.75.75 0 0 0 .978.053l.082-.074 8-8.328z" fill="').concat(e.color||"currentColor",'"/>\n</svg>\n')}({width:20,height:20,color:"currentColor"}),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return'<svg width="'.concat(e.width||24,'" height="').concat(e.height||24,'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="').concat(e.color||"currentColor",'" fill-rule="evenodd"/>\n</svg>\n')}({width:20,height:20,color:"currentColor"}),f=Math.ceil(t/n),[h,p]=(0,i.useState)(!1),[m,_]=(0,i.useState)(!1),g=(0,i.useRef)(l||1),[y,v]=(0,i.useState)([]),[x,j]=(0,i.useState)(!1),b=1===g.current,w=g.current===f,N=()=>{let e=g.current;return f<=8?Array.from(Array(f+1).keys()).slice(2,-1):e<5?Array.from(Array(6).keys()).slice(2):e>=5&&e<f-3?[e-2,e-1,e,e+1,e+2]:e>5&&e>=f-3?[f-5,f-4,f-3,f-2,f-1]:(console.log("pagination------"),[1,2,3])},S=()=>{let e=g.current;return f>8&&(e>5&&e>=f-3||e>=5&&e<f-3)},E=()=>{let e=g.current;return f>8&&(e>5&&e<f-3||e<=5)},L=e=>{g.current=e,o(g.current)},C=e=>"add"===e?(g.current=g.current+5,o(g.current)):g.current>5?(g.current=g.current-5,o(g.current)):void(g.current=1);return(0,i.useEffect)(()=>{g.current&&g.current>f&&(g.current=1)},[]),(0,i.useEffect)(()=>{(async()=>{v(await N()),p(await S()),_(await E()),j(g.current<f)})().catch(console.error)},[g.current]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("ul",{className:s()["page-select-box"],children:[(0,r.jsx)("li",{className:a()({[s()["page-item"]]:!0,[s()["previous-icon"]]:!0,[s().disabled]:b}),onClick:()=>{if(1===g.current)return!1;g.current=g.current-1,o(g.current)},dangerouslySetInnerHTML:{__html:c}}),(0,r.jsx)("li",{className:a()({[s()["page-item"]]:!0,[s().first]:!0,[s().active]:b}),onClick:()=>{L(1)},children:"1"}),(0,r.jsx)("li",{className:a()({[s()["page-item"]]:!0,[s().hidden]:!h}),onClick:()=>{C("cut")},dangerouslySetInnerHTML:{__html:d}}),y.map(e=>(0,r.jsx)("li",{className:a()({[s()["page-item"]]:!0,[s().last]:!0,[s().active]:g.current===e}),onClick:()=>{L(e)},children:e},e)),(0,r.jsx)("li",{className:a()({[s()["page-item"]]:!0,[s().hidden]:!m}),onClick:()=>{C("add")},dangerouslySetInnerHTML:{__html:d}}),f>1?(0,r.jsx)("li",{className:a()({[s()["page-item"]]:!0,[s().active]:w}),onClick:()=>{L(f)},children:f}):null,(0,r.jsx)("li",{className:a()({[s()["page-item"]]:!0,[s()["next-icon"]]:!0,[s().disabled]:w}),onClick:()=>{if(!x)return!1;g.current=g.current+1,o(g.current)},dangerouslySetInnerHTML:{__html:u}})]})})}},73909:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var r=n(40439),i=n(58707);if(t&&t.items)return t}var s=n(70039),o=n(3903),a=n(96108),c=n(3208),u=n(2265);let d=()=>{let{articleList:e,setArticleList:t,params:n,setParams:r,defaultPageSize:i}=(0,o.useCounterStore)(e=>e.articleListStore)(e=>e),[d,f]=(0,u.useState)(!1),[h,p]=(0,u.useState)(!1),m=async e=>{let t={[s.q.ZH]:c.v.LANGUAGE.ZH_CN,[s.q.TW]:c.v.LANGUAGE.ZH_TW,[s.q.ID]:c.v.LANGUAGE.ID_ID,[s.q.VN]:c.v.LANGUAGE.VI_VN}[e]||c.v.LANGUAGE.en_US;await g({lang:t})},_=Math.ceil(e.totalCount/n.pageSize),g=async e=>{r(e),await y(n)},y=async e=>{try{let n=await l(e);n&&n.items&&t((0,a.N)(n))}catch(e){f(!1),p(!0)}};return{loading:d,error:h,pageIndex:n.pageIndex,pageCount:_,defaultPageSize:i,articleList:e,runPage:e=>{e<=_&&g({pageIndex:e})},setActivityLangForArea:m}}},55836:function(e){e.exports={"feed-info":"style_feed-info__rS2Sm",source:"style_source__hI7sq",views:"style_views__2_uR6"}},81134:function(e){e.exports={title:"style_title__0EtHW","info-text":"style_info-text__IFaTA"}},35540:function(e){e.exports={"content-text":"style_content-text__UYnWw"}},23719:function(e){e.exports={"file-item":"style_file-item__ehsvH","file-img":"style_file-img__Hp_cD"}},80127:function(e){e.exports={"feed-item-base":"style_feed-item-base__WV7P5","is-read":"style_is-read__FA5p2","title-text":"style_title-text__sxoYR","feed-item-title":"style_feed-item-title__UzaHP"}},1858:function(e){e.exports={"title-text":"style_title-text__JSfa9"}},53029:function(e){e.exports={"normal-content":"style_normal-content__BfOr3","file-item":"style_file-item__LdELx"}},90667:function(e){e.exports={"category-list":"style_category-list__m5Ea_","article-list":"style_article-list__pE7iT"}},61038:function(e){e.exports={title:"style_title__tVerr",white:"style_white__Yu5Tg",text:"style_text__bRNFe",subTitle:"style_subTitle__pkt_9",tips:"style_tips__4RbQc",topBox:"style_topBox___qfB6",img:"style_img__xOH91","img-phone":"style_img-phone__9hLTB",mt10:"style_mt10__vrW0h",mt15:"style_mt15__wevKd",mt20:"style_mt20__7AlPr",mt30:"style_mt30__j9j6s",mt40:"style_mt40__Sqsl7",mt50:"style_mt50__dlNpQ",mt80:"style_mt80__PjzRj",hide:"style_hide__l_jCs"}},2958:function(e){e.exports={"pagination-box":"style_pagination-box__gOvQZ","page-select-box":"style_page-select-box__MkFf6","page-item":"style_page-item__0_iEz",disabled:"style_disabled__Aa3oz",active:"style_active__Y1m_M",hidden:"style_hidden__gsB7U"}},16480:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=l(t,n));return t}(n)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[1685,8682,3903,5518,2971,8069,1744],function(){return e(e.s=42374)}),_N_E=e.O()}]);