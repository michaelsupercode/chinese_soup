(()=>{var e,t,n,i,o={6931:(e,t,n)=>{"use strict";(function(e){Promise.all(["open"in document.createElement("details")?Promise.resolve():n.e(6415).then(n.t.bind(n,1840,23)),"entries"in Object&&"values"in Object?Promise.resolve():Promise.all([n.e(831),n.e(4622)]).then(n.t.bind(n,6815,23)),void(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)),"closest"in Element.prototype&&"append"in Element.prototype&&"matches"in Element.prototype?Promise.resolve():n.e(5989).then(n.t.bind(n,2966,23)),"fetch"in window?Promise.resolve():n.e(6553).then(n.bind(n,6956)),"URL"in window&&"URLSearchParams"in window?Promise.resolve():Promise.all([n.e(831),n.e(1642)]).then(n.t.bind(n,7923,23)),"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&"isIntersecting"in window.IntersectionObserverEntry.prototype?Promise.resolve():n.e(6502).then(n.t.bind(n,1315,23))]).then(e,e)})((function(){n(1125)}))},7962:e=>{e.exports=function(e,t,n){var i;return function(){var o=this,a=arguments;i?clearTimeout(i):n&&e.apply(o,a),i=setTimeout((function(){i=null,n||e.apply(o,a)}),t)}}},9558:(e,t,n)=>{e.exports=function(){var e=document.querySelectorAll(".js-registration-form");e.length&&n.e(5550).then((function(){var t=[n(5550)];(function(t){e.forEach((function(e){new t.default(e)}))}).apply(null,t)})).catch(n.oe)}},4093:(e,t,n)=>{var i=n(7418);function o(){"replaceState"in history?history.replaceState(null,document.title,location.pathname+location.search):location.hash=null}var a={init:function(){switch(location.hash.substr(1)){case"success-registration-with-newsletter":n.e(2088).then((function(){var e=[n(2088)];(function(e){e.default()}).apply(null,e)})).catch(n.oe);case"success-registration":window.Zeit.user&&"paid"===window.Zeit.user.paywall?i.default("Leider haben Sie kein gültiges Abonnement für diesen Artikel. Bitte wählen Sie unten das gewünschte Abo.","error"):i.default("Herzlich willkommen! Sie sind jetzt angemeldet."),o();break;case"success-confirm-account":i.default("Herzlich willkommen! Ihr Konto ist nun aktiviert."),o();break;case"success-confirm-change":i.default("Ihre Einstellungen wurden gespeichert. Viel Spaß!"),o();break;case"success-confirm-saved":i.default("Ihre Änderungen wurden gespeichert."),o()}}};e.exports=a},177:(e,t,n)=>{n.p=window.Zeit.assetHost+"/js/"},989:e=>{e.exports=function(e,t,n){n=n||{};var i,o,a,r=null,c=0,s=Date.now||function(){return(new Date).getTime()},l=function(){c=!1===n.leading?0:s(),r=null,a=e.apply(i,o),r||(i=o=null)};return function(){var d=s();c||!1!==n.leading||(c=d);var u=t-(d-c);return i=this,o=arguments,u<=0||u>t?(r&&(clearTimeout(r),r=null),c=d,a=e.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(l,u)),a}}},6633:(e,t,n)=>{var i=window.Zeit||{},o={readyWhenYouAre:function(e){return e},clearQueue:function(){if("object"==typeof this.queue&&this.queue.length){var e=this.queue;n.e(8740).then((function(){var t=[n(8740)];(function(t){t(e)}).apply(null,t)})).catch(n.oe),this.queue=[]}},log:function(){location.hash.indexOf("debug")>-1&&console.debug.apply(console,arguments)},getColorScheme:function(){try{return"dark"===getComputedStyle(document.documentElement).getPropertyValue("--z-color-scheme").trim()?"dark":"light"}catch(e){return"light"}},nullOrUndefined:e=>null==e};Object.assign(i,o),i.callMeLater.forEach((function(e){e[0].apply(null,e[1])})),i.debounce=n(7962),i.throttle=n(989),e.exports=i},1125:(e,t,n)=>{"use strict";var i=n(6954),o=n(6633);const a=class{constructor(){this.configUrl=o.jsconfHost+"/config_adreload.json",this.config=!1,this.timer={},this.clickCounter=[],this.logStyles=["color: black","background: #ffcc00","padding: 2px"].join(";"),this.init()}log(...e){o.log("%c%s",this.logStyles,"adreload.js:",...e)}isValidOrigin(e,t){return"string"==typeof e&&(e=[e]),e.indexOf(t.origin)>-1}clickCount(e){if(e.interval<2)return this.log("direct click"),!0;if(this.clickCounter[e.name]){if(++this.clickCounter[e.name]%e.interval==0)return this.log("max clicks"),!0;this.log("add up clicks")}else this.log("first click"),this.clickCounter[e.name]=1;return!1}checkClickCount(e){if(void 0!==e.time&&e.time>0){const t=Date.now();return!(this.timer[e.name]>t)&&(this.timer[e.name]=t+e.time,this.clickCount(e))}return this.clickCount(e)}interaction(e){let t;try{t=this.config[e.detail]}catch(n){return void this.log(n)}window.location.pathname.indexOf(t.slug)<0||t.pagetypes.indexOf(o.view.type)<0||this.checkClickCount(t)&&this.refreshAds()}refreshAds(){this.log("postMessage sent"),window.postMessage("iq_refresh_ads"),this.log("tracking event emitted"),(0,i.send)(["....adreload","webtrekkadreload"],{},"adreload")}message(e){let t;if(this.log("postmessage","📬",e.data),"string"==typeof e.data&&0===e.data.indexOf("{")){try{t=JSON.parse(e.data)}catch(n){return void this.log(n)}"string"==typeof t.name&&void 0!==this.config[t.name]&&this.isValidOrigin(this.config[t.name].origin,e)&&this.interaction({detail:t.name})}}handleEvent(e){switch(e.type){case"interaction.adreload.z":this.interaction(e);break;case"message":this.message(e);break;case"click":this.refreshAds()}}init(){this.log("initialize module"),!1!==o.view.get("advertising_enabled")&&!0!==o.user.adFree&&(this.log("load config",this.configUrl),fetch(this.configUrl).then((e=>e.json())).then((e=>{this.config=e,this.log("config loaded",this.config),window.addEventListener("interaction.adreload.z",this),window.addEventListener("message",this),document.querySelectorAll(".js-refresh-ads").forEach((e=>{e.addEventListener("click",this)}))})).catch((e=>{this.log(e)})))}};const r=function(){document.querySelectorAll(".js-pm-link").length>=1&&window.addEventListener("click",(function(e){if(e.target.classList.contains("js-pm-link")){e.preventDefault(),o.log("CMP link clicked.");let t=o.settings.get("sourcepoint_privacy_manager_id");t=o.user?.adFree?o.settings.get("sourcepoint_pur_privacy_manager_id"):o.settings.get("sourcepoint_privacy_manager_id"),t&&window._sp_&&"function"==typeof window._sp_.loadPrivacyManagerModal&&window._sp_.loadPrivacyManagerModal(t)}}))};const c=function(){if(!window.Zeit.isMobileApp)return;document.querySelectorAll(".js-FollowPush").forEach((e=>{const t=e.dataset.followpushTaggroup,n=e.dataset.followpushTag;t&&n&&(e.innerHTML=`<a href="zeitapp://subscribe/${t}/${n}" class="button button--gray">Folgen</a>`)}))};var s=n(4573);const l=function(){const e=document.querySelectorAll(".js-accordion");e.length&&Promise.all([n.e(912),n.e(3375)]).then(n.bind(n,3375)).then((function(t){e.forEach((function(e){new t.default(e)}))}));const t=document.querySelectorAll(".js-showable");t.length&&n.e(912).then(n.bind(n,912)).then((e=>{t.forEach((t=>new e.default(t)))}))};const d=document.querySelector(".navigation-backdrop");let u,h;const f=class{constructor(e){if(!e)return;this.button=e,this.content=document.querySelector(`#${this.button.getAttribute("aria-controls")}`),this.main=document.querySelector(".main"),this.header=document.querySelector(".header"),this.content.setAttribute("aria-hidden",!0),this.button.setAttribute("aria-expanded",!1),this.activeElement=void 0,this.setNavMenuHeight(),this.setCustomProperties(),this.button.addEventListener("click",this,!1),this.content.addEventListener("blur",this,!0),this.button.addEventListener("keydown",this,!1);const t=this.content.querySelector(".navigation-search__input");t&&t.addEventListener("click",this.trackSearchClick),window.addEventListener("keydown",this,!1),window.addEventListener("resize",o.debounce(this.handleEvent.bind(this),100),!1)}handleEvent(e){const t=e.currentTarget;switch(e.type){case"click":e.preventDefault(),this.activeElement=document.activeElement,this.toggleMenu();break;case"blur":if("true"===this.content.getAttribute("aria-hidden"))return;if(e.target.classList.contains("navigation-search__input"))break;requestAnimationFrame((()=>{t.contains(document.activeElement)||this.closeMenu()}));break;case"mousedown":e.target.closest(".navigation__button, .navigation__content")||this.closeMenu();break;case"keydown":if(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)return;switch(e.which){case 13:case 32:if(e.target.classList.contains("navigation-search__input"))break;if(!e.target.closest(".navigation__button, .navigation__content"))break;e.preventDefault(),e.target.click();break;case 27:if(!e.target.closest(".navigation__button, .navigation__content"))break;if("true"===this.content.getAttribute("aria-hidden"))break;this.closeMenu()}break;case"resize":this.setNavMenuHeight()}}setCustomProperties(){let e=0,t=0;const n=this.header.querySelector(".navigation"),i=this.header.querySelector(".navigation__liveblogs-topics, .navigation__advertorial-marker");n&&(e=n.getBoundingClientRect().height),i&&(t=i.getBoundingClientRect().height),this.header.style.setProperty("--nav-height",`${e}px`),this.header.style.setProperty("--nav-topic-height",`${t}px`)}openMenu(){this.setNavMenuHeight(),u&&u!==this.content&&(u.setAttribute("aria-hidden","true"),h.setAttribute("aria-expanded","false")),u=this.content,h=this.button,this.content.setAttribute("aria-hidden",!1),this.button.setAttribute("aria-expanded",!0),this.header.dataset.open="true",window.addEventListener("mousedown",this),document.documentElement.classList.add("no-scroll"),this.main.classList.add("prevent-click"),this.content.scrollTop=0,d.hidden=!1}closeMenu(){"true"!==this.content.getAttribute("aria-hidden")&&"false"!==this.button.getAttribute("aria-expanded")&&(this.content.setAttribute("aria-hidden",!0),this.button.setAttribute("aria-expanded",!1),this.header.dataset.open="false",window.removeEventListener("mousedown",this),document.documentElement.classList.remove("no-scroll"),this.main.classList.remove("prevent-click"),this.content.scrollTop=0,d.hidden=!0,this.button.dataset.ctAction="close",o.dispatchEvent("track",this.button),this.button.dataset.ctAction="open",this.activeElement&&this.activeElement.focus())}toggleMenu(){"true"===this.content.getAttribute("aria-hidden")?this.openMenu():this.closeMenu()}setNavMenuHeight(){requestAnimationFrame((()=>{const e=window.innerHeight,t=this.button.getBoundingClientRect().top,n=`calc(${e-this.button.getBoundingClientRect().height-t}px - var(--z-ds-space-14) - var(--z-ds-space-16))`;this.content.style.setProperty("--content-menu-max-height",n),CSS.supports("height: 100dvh")?this.content.style.setProperty("--window-height","100dvh"):this.content.style.setProperty("--window-height",e+"px")}))}trackSearchClick(){(0,i.sendInfo)(["searchbar_open","","navigation_main","#navigation"])}};const g=function(){window.addEventListener("load",(function(){const e=function(e){const t=location.search.substr(1).split("&");for(let n=0;n<t.length;n++){let i=t[n].split("=");if(i[0]===e)return decodeURIComponent(i[1])}}("wt_cc3");e&&o.cookieCreate("icode",e,7)}))},p={sendTracking:{},handleSpecificPlugin:{},dispatch:{}};p.sendTracking.sendDataToWebrekk=function(e){(0,i.send)(e)},p.sendTracking.sendVideoEventToWebtrekk=function(e,t){var n,i,o,a,r=t?"#"+t:".video-player",c="",s="",l="",d=window.location.host+window.location.pathname;(n=document.querySelector(r).closest("article, figure[data-video-provider]"))&&(c=(a=n.dataset).videoSize,s=a.videoSeries,l=a.videoProvider,d=a.videoPageUrl||window.location.host+window.location.pathname,i=a.videoProductId||"undefined"),o=["video",c,s,l+"|"+i,e,d],p.sendTracking.sendDataToWebrekk(o)},p.handleSpecificPlugin.trackVideojsEvent=function(e,t){switch(e){case"playerStarted":p.sendTracking.sendVideoEventToWebtrekk("play",t);break;case"contentStarted":p.sendTracking.sendVideoEventToWebtrekk("start",t);break;case"contentCompleted":p.sendTracking.sendVideoEventToWebtrekk("complete",t);break;case"adStarted":p.sendTracking.sendVideoEventToWebtrekk("adstart",t)}},p.handleSpecificPlugin.trackMeineZeitClickEvent=function(e){var t=e.slug.replace(/^\./,"").split("|"),n=[t[0],t[1]];p.sendTracking.sendDataToWebrekk(n)},p.dispatch.dispatchTrackingMessages=function(e){"videojs"===e.sender&&p.handleSpecificPlugin.trackVideojsEvent(e.event,e.id),"meinezeit"===e.sender&&p.handleSpecificPlugin.trackMeineZeitClickEvent(e),"quiz"===e.sender&&p.sendTracking.sendDataToWebrekk(e.data)},p.dispatch.dispatchAllMessages=function(e){var t;if(void 0!==e&&"string"==typeof e.data&&0===e.data.indexOf("{")){try{t=JSON.parse(e.data)}catch(n){return}"string"==typeof t.name&&"string"==typeof t.sender&&"zonTriggeredEventTracking"===t.name&&p.dispatch.dispatchTrackingMessages(t)}};const b=function(){window.addEventListener("message",p.dispatch.dispatchAllMessages)};var m=n(4431);function v(e,t){e.forEach((e=>{if(e.isIntersecting){const n=e.target.dataset.vtParameter,o=e.target.dataset.vtLinkId||"#"+e.target.tagName.toLowerCase(),a=n.split(".");a.push(o),(0,i.sendInfo)(a),t.unobserve(e.target)}}))}function y(e,t){e.forEach((e=>{if(!e.isIntersecting)return;const n=e.target,i=Array.from(n.querySelectorAll("a")),o=Math.ceil(.5*i.length);if(e.intersectionRatio>=.5){const a=k(i.slice(0,o));_(n,a),t.unobserve(e.target)}}))}function w(e,t){e.forEach((e=>{if(!e.isIntersecting)return;const n=e.target,i=Array.from(n.querySelectorAll("a")),o=Math.ceil(.5*i.length);if(e.intersectionRatio>=1){const a=k(i.slice(o,i.length));_(n,a),t.unobserve(e.target)}}))}const k=e=>e.map((e=>(0,m.x)(e.dataset.ctLabel||e.textContent.trim()))),_=(e,t)=>{(0,i.sendInfo)([`${e.dataset.vtSection}_impression`,e.closest("[data-ct-container-type]").dataset.ctContainerType,JSON.stringify(t),"","","#navigation"])};const S=function(e){if(!o.toggles.get("visibility_tracking"))return void o.log(`visibilityTracking.mjs: tracking canceled, visibility_tracking toggle = "${o.toggles.get("visibility_tracking")}"`);const t=o.settings.get("visibility_tracking_limited_to_pages");if(!t||t.split(",").some((e=>window.location.pathname.startsWith(e))))if(e){const t=e.querySelectorAll("nav"),n=new IntersectionObserver(y,{threshold:[.5]}),i=new IntersectionObserver(w,{threshold:[1]});t.forEach((e=>{(e.querySelectorAll("li").length>=2||e.querySelector("li.js-replace-nav-teasers"))&&n.observe(e),i.observe(e)}))}else{const e=document.querySelectorAll("[data-vt-parameter]");if(!e.length)return;const t=new IntersectionObserver(v,{threshold:.5});e.forEach((e=>{t.observe(e)}))}else o.log(`visibilityTracking.mjs: tracking canceled, current path "${window.location.pathname}" not matched by values in "visibility_tracking_limited_to_pages" setting`)};const E=function(){const e=document.querySelector(".js-photocluster");e&&"relative"===getComputedStyle(e).getPropertyValue("position")&&n.e(9470).then(n.t.bind(n,9470,19)).then((({default:e})=>{new e(".js-photocluster",{itemSelector:".photocluster__media",columnWidth:".photocluster__media--small",percentPosition:!0})}))};var j=n(6633),q=n(4093),A=n(9558),P=document.getElementById("js-article"),T=document.body.dataset.pageType,O=document.querySelectorAll("div[data-backgroundvideo]");if(document.querySelector(".navigation__button--main")&&new f(document.querySelector(".navigation__button--main")),document.querySelector(".navigation__button--account")&&new f(document.querySelector(".navigation__button--account")),n.e(6156).then(n.bind(n,6156)).then((function(e){e.default()})),document.querySelector(".header--sticky")&&n.e(5088).then(n.bind(n,5088)).then((function(e){new e.default})),S(document.querySelector(".navigation__content--main")),S(document.querySelector(".navigation__content--account")),(0,s.Ay)(),q.init(),r(),(0,i.default)(),b(),A(),new a,S(),l(),j.view.advertising_enabled&&j.toggles.get("adblocker_user_analytics")&&Promise.all([n.e(4808),n.e(6481)]).then(n.bind(n,6481)).then((function(e){e.default()})),j.toggles.get("block_embeds")){var L=document.querySelectorAll(".js-embed-consent");L.length&&Promise.all([n.e(3158),n.e(4397),n.e(7831)]).then((function(){var e=[n(7831)];(function(e){e.default(L)}).apply(null,e)})).catch(n.oe)}if(document.querySelector(".embed[data-embed]")&&n.e(7131).then((function(){var e=[n(7131)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),"centerpage"===T&&n.e(5824).then((function(){var e=[n(5824)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),P){Promise.all([n.e(8957),n.e(4224)]).then((function(){var e=[n(8957)];(function(){E()}).apply(null,e)})).catch(n.oe),function(){const e=document.querySelectorAll(".js-audio-player");e.length&&Promise.all([n.e(4808),n.e(4620)]).then(n.bind(n,4620)).then((t=>{e.forEach((function(e){new t.default(e)}))}))}();var C=document.querySelectorAll(".js-details");C.length&&n.e(583).then((function(){var e=[n(583)];(function(e){e.default(C)}).apply(null,e)})).catch(n.oe);var M=document.querySelectorAll(".js-sharing-menu");M.length&&Promise.all([n.e(4484),n.e(3741)]).then(n.bind(n,4484)).then((function(e){M.forEach((function(t){new e.default(t)}))}));var x=document.querySelector(".article-player[data-article-player]");x&&Promise.all([n.e(4808),n.e(4620),n.e(8008)]).then((function(){var e=[n(8008)];(function(e){new e.default(x)}).apply(null,e)})).catch(n.oe),document.querySelector("figure[data-animate]")&&n.e(8684).then((function(){var e=[n(8684)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),document.querySelector(".ingredient-dice")&&n.e(6197).then((function(){var e=[n(6197)];(function(e){e.default()}).apply(null,e)})).catch(n.oe)}j.toggles.get("bookmark_list")&&Promise.all([n.e(3008),n.e(4808),n.e(127),n.e(9692)]).then(n.bind(n,9692)).then((function(e){e.default()})),document.querySelector(".js-copy, .js-copy-inline")&&Promise.all([n.e(3008),n.e(6247),n.e(1051)]).then((function(){var e=[n(3432)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),c(),g(),j.clearQueue(),O&&n.e(3978).then((function(){var e=[n(3978)];(function(e){O.forEach((function(t){e.init(t)}))}).apply(null,e)})).catch(n.oe),document.querySelectorAll(".js-link-commentcount")&&n.e(4973).then((function(){var e=[n(4973)];(function(e){e.default()}).apply(null,e)})).catch(n.oe);var I=document.querySelector(".js-image-copyright-dialog");I&&I.addEventListener("click",(function(e){e.preventDefault(),Promise.all([n.e(3158),n.e(4397),n.e(6111)]).then((function(){var e=[n(6111)];(function(e){e.default()}).apply(null,e)})).catch(n.oe)}),!1),document.querySelector("iframe[data-src]")&&n.e(6274).then((function(){var e=[n(6274)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),document.querySelector(".recipe-search")&&Promise.all([n.e(7416),n.e(8749)]).then((function(){var e=[n(8749),n(7416)];(function(e,t){e.default(),t.default(!0)}).apply(null,e)})).catch(n.oe);var U=document.querySelectorAll(".js-newsletter-signup");U.length&&n.e(3938).then((function(){var e=[n(3938)];(function(e){U.forEach((function(t){new e.default(t)}))}).apply(null,e)})).catch(n.oe),"popover"in HTMLElement.prototype&&document.querySelector(".volume-navbar")&&n.e(4421).then((function(){var e=[n(4421)];(e=>e.default()).apply(null,e)})).catch(n.oe)},7418:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});let i;const o=function(e,t="success",n){const o=document.querySelector(".notification--sticky"),a=document.createElement(n?"a":"div");function r(){var e;(e=a)&&(clearTimeout(i),e.dataset.go="out",e.addEventListener("animationend",(e=>e.target.hidden=!0)))}a.classList.add("notification",`notification--${t}`,"notification--sticky"),a.dataset.go="in",a.innerHTML=e,n?a.href=n:(a.tabindex=0,a.addEventListener("click",r)),o?o.parentNode.replaceChild(a,o):document.querySelector(".page__content").insertAdjacentElement("beforebegin",a),i=setTimeout(r,3500)}},4431:(e,t,n)=>{"use strict";function i(e){var t={"ä":"ae","ö":"oe","ü":"ue","á":"a","à":"a","é":"e","è":"e","ß":"ss"};return e.toString().toLowerCase().replace(/\W/g,(function(e){return t[e]||"_"})).replace(/_+/g,"_").replace(/^_|_$/g,"")}n.d(t,{x:()=>i})},4401:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});const i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const a=new Uint8Array(16);function r(){if(!o){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");o=crypto.getRandomValues.bind(crypto)}return o(a)}const c=[];for(let d=0;d<256;++d)c.push((d+256).toString(16).slice(1));function s(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}const l=function(e,t,n){if(i.randomUUID&&!t&&!e)return i.randomUUID();const o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return s(o)}}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,exports:{}};return o[e].call(n.exports,n,n.exports,r),n.exports}r.m=o,e=[],r.O=(t,n,i,o)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],o=e[d][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,i){if(1&i&&(e=this(e)),8&i)return e;if("object"==typeof e&&e){if(4&i&&e.__esModule)return e;if(16&i&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&i&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,r.d(o,a),o},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>(({1642:"URL",4622:"Object",5989:"Element",6415:"details",6502:"IntersectionObserver",6553:"fetch"}[e]||e)+"."+{127:"539f5365243fa608d328",583:"a15ad739f036c4963f89",776:"0fd7b597bcd8a2e4b6fa",831:"bd0f25f030ddc32c7088",841:"083d120e5554419bbb22",912:"79d2ed349a249924a2ef",1051:"c2524f965d94fbebb215",1642:"16dc36d449ca45918253",2088:"032576b8224e40b9d6e8",2643:"e118ca5d69a15796593d",3008:"26b0c741887bf8b5921b",3158:"d1bbcad2c35f5b175e76",3375:"a21e39088181f361c238",3432:"dfa4d563702284ddc8db",3741:"6c088cdcf0312c407202",3938:"1cf55851ad0f88bbc60e",3978:"26108a89eed3cb4131c0",4224:"0adac0239cf000af06ed",4397:"12010b5c05b318a17ed0",4421:"2b70ccad26608bc871b8",4484:"46d218c5b48780787f2b",4620:"a720df34144836c183ff",4622:"e0cc6a6e81c80bc7af60",4808:"7bf2489d717c40711208",4973:"899c3b591b92f4fa5b21",5088:"c651a843b56266be1a78",5550:"ec2f3ec644e3a32bf833",5824:"fb5bcdcb911bc81ff4e3",5989:"4fefebe9a5e8a40503a8",6111:"ef3885cf883a1dd8b912",6122:"30f013d8414daebfa814",6156:"c1876eee38352191b0dd",6197:"32ea5dc42fe7c7ab2321",6247:"7a3cae1f74517bfd457d",6274:"da5c54c3e52183404566",6415:"3ff954c555a5a77c753b",6481:"dd5b4eb6c81c7b746bbf",6502:"7956c1498d0a525fe180",6553:"d23edb4c45691ec9978b",7131:"d00a250975e3457a362a",7416:"1ded7d7b334ef04c139e",7831:"1dcec96a7aaf97c57dec",8008:"5e9f567d53304f744b58",8684:"5f02dcce30ecb892fba3",8740:"606cf31f6b1c933dd30f",8749:"616652997f6313951faf",8957:"93ff102298a8b3712128",9290:"f320ad3c91ac9b496734",9470:"df1491beb9923d3e5759",9692:"fab69c1f2e371feb1355",9931:"31b2d1509c9d21ffc7e4"}[e]+".js"),r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},r.l=(e,t,n,o)=>{if(i[e])i[e].push(t);else{var a,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==e){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=e),i[e]=[t];var u=(t,n)=>{a.onerror=a.onload=null,clearTimeout(h);var o=i[e];if(delete i[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",(()=>{r.b=document.baseURI||self.location.href;var e={28:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,o)=>i=e[t]=[n,o]));n.push(i[2]=o);var a=r.p+r.u(t),c=new Error;r.l(a,(n=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,i[1](c)}}),"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,a=n[0],c=n[1],s=n[2],l=0;if(a.some((t=>0!==e[t]))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(s)var d=s(r)}for(t&&t(n);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,r.O(void 0,[2142,129],(()=>r(177)));var c=r.O(void 0,[2142,129],(()=>r(6931)));c=r.O(c)})();