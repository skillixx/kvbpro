(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8820],{33004:function(t,e,n){Promise.resolve().then(n.bind(n,9429))},47907:function(t,e,n){"use strict";var r=n(15313);n.o(r,"useParams")&&n.d(e,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(e,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(e,{useRouter:function(){return r.useRouter}})},9429:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var r=n(57437),a=n(75517),i=n(802),s=n(19126);function o(){let{i18n:t}=(0,a.Q)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{head:c(t)}),(0,r.jsx)(i.Z.Title,{text:t.trading.balance.title}),(0,r.jsx)(i.Z.SubTitle,{text:t.trading.balance.introduction.title,mt:30}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.introduction.body.paragraph1,mt:10}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.introduction.body.paragraph2,mt:30}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.introduction.body.paragraph3,mt:30}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.introduction.body.paragraph4,mt:30}),(0,r.jsx)(i.Z.SubTitle,{text:t.trading.balance.advantages.title,mt:40}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.advantages.body.paragraph1,mt:10}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.advantages.body.paragraph2,mt:30}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.advantages.body.paragraph3,mt:30}),(0,r.jsx)(i.Z.Text,{text:t.trading.balance.advantages.body.paragraph4,mt:30})]})}let c=t=>({title:t.trading.balance.tdk.title,meta:[{name:"description",content:t.trading.balance.tdk.description},{name:"keyword",content:t.trading.balance.tdk.keyword}]})},19126:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(57437),a=n(2265);function i(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:t.head.title}),t.head.meta&&t.head.meta.map((t,e)=>(0,a.createElement)("meta",{...t,key:e,content:t.content}))]})}},802:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(86540),a=n(5958),i=n(57437),s=n(16480),o=n.n(s),c=n(61038),l=n.n(c),u=n(64795),d=n(47907),m={Text:r.Z,Title:a.Z,SubTitle:function(t){let{text:e,mt:n,mb:r,size:a}=t,s=r?{marginBottom:r+"px"}:{};return a&&(s.fontSize=a+"px"),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:s,className:o()({[l().subTitle]:!0,[l()["mt".concat(n)]]:void 0!==n}),children:e||t.children})})},Tips:function(t){let{mt:e,mb:n}=t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:o()({[l().tips]:!0,[l()["mt".concat(e)]]:void 0!==e}),children:t.text||t.children})})},Top:function(t){let{label:e,phonebg:n,pcbg:r}=t.currentPage,a=(0,d.usePathname)(),s=["/about-us/announcement.html","/insights/market-analysis.html"].some(t=>a.indexOf(t)>-1)&&a.split("/").length>=3;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:o()({[l().topBox]:!0,[l().hide]:s}),children:[(0,i.jsx)(u.Z,{loading:"eager",width:"500",height:"200",src:n,className:l()["img-phone"],alt:"img"}),(0,i.jsx)(u.Z,{loading:"eager",width:"1920",height:"200",src:r,className:l().img,alt:"img"}),(0,i.jsx)("div",{className:o()({"default-layout":!0,[l().title]:!0}),children:e})]})})}}},86540:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(57437),a=n(16480),i=n.n(a),s=n(61038),o=n.n(s);function c(t){let{mt:e,mb:n}=t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:i()({[o().text]:!0,[o()["mt".concat(e)]]:void 0!==e}),children:t.text||t.children})})}},5958:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(57437),a=n(16480),i=n.n(a),s=n(61038),o=n.n(s);function c(t){let{mt:e,mb:n}=t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:n?{marginBottom:n+"px"}:{},className:i()({[o().title]:!0,[o()["mt".concat(e)]]:void 0!==e,[o()[t.color?t.color:""]]:void 0!==t.color}),children:t.text||t.children})})}},64795:function(t,e,n){"use strict";var r=n(57437),a=n(19200);n(2265),e.Z=t=>{let{alt:e,width:n,height:i,src:s,style:o,className:c,onClick:l}=t,{STATIC_URL:u}=(0,a.z)(),d="string"==typeof s?s.replace(/__public_domain__/g,u.replace(/http(s):\/\//g,"")):s;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("img",{src:d,alt:e,width:n,height:i,style:o,className:c,onClick:l})})}},75517:function(t,e,n){"use strict";n.d(e,{Q:function(){return a}});var r=n(3903);let a=()=>{let{i18nData:t,currentLang:e,switchLanguage:n}=(0,r.useCounterStore)(t=>t.i18nStore)(t=>t);return{switchLanguage:n,currentLang:e,i18nData:t,i18n:t[e],t:(t,e)=>(e&&Object.keys(e).forEach(n=>{t=t.replace("#{".concat(n,"}"),e[n])}),t)}}},19200:function(t,e,n){"use strict";n.d(e,{N:function(){return i},z:function(){return a}});var r=n(3903);function a(){let{domainStore:t}=(0,r.useCounterStore)(t=>t);return t(t=>t)}function i(){let{calendarStore:t}=(0,r.useCounterStore)(t=>t);return t(t=>t)}},61038:function(t){t.exports={title:"style_title__tVerr",white:"style_white__Yu5Tg",text:"style_text__bRNFe",subTitle:"style_subTitle__pkt_9",tips:"style_tips__4RbQc",topBox:"style_topBox___qfB6",img:"style_img__xOH91","img-phone":"style_img-phone__9hLTB",mt10:"style_mt10__vrW0h",mt15:"style_mt15__wevKd",mt20:"style_mt20__7AlPr",mt30:"style_mt30__j9j6s",mt40:"style_mt40__Sqsl7",mt50:"style_mt50__dlNpQ",mt80:"style_mt80__PjzRj",hide:"style_hide__l_jCs"}},16480:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=i(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=i(e,n));return e}(n)))}return t}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(a.default=a,t.exports=a):void 0!==(n=(function(){return a}).apply(e,[]))&&(t.exports=n)}()}},function(t){t.O(0,[1685,3903,2971,8069,1744],function(){return t(t.s=33004)}),_N_E=t.O()}]);