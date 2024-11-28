// Copy of https://cdn.jsdelivr.net/npm/@elbwalker/walker.js@latest/dist/index.mjs
function n(n,t={}){return Object.entries(t).forEach((([e,o])=>{let r=n[e];Array.isArray(r)&&Array.isArray(o)&&(t[e]=o.reduce(((n,t)=>n.includes(t)?n:[...n,t]),[...r]))})),{...n,...t}}function t(n){if("true"===n)return!0;if("false"===n)return!1;let t=Number(n);return n==t&&""!==n?t:String(n)}var e={t:{o:"action",i:"config",u:"consent",l:"context",Destination:"destination",m:"elb",p:"globals",k:"hook",h:"init",$:"link",S:"on",O:"data-elb",j:"run",I:"user",C:"walker"},Utils:{Storage:{D:"cookie",L:"local",N:"session"}}};function o(n=6){for(var t="";t.length<n;)t+=(36*Math.random()|0).toString(36);return t}function r(n,t){return typeof n==typeof t}function i(n){return n?n.trim().replace(/^'|'$/g,"").trim():""}function c(n,t){return function(...e){try{return n(...e)}catch(n){return t?t(n):void 0}}}function u(n,t,e){return function(...o){let r,i="post"+t,c=e["pre"+t],u=e[i];return r=c?c({fn:n},...o):n(...o),u&&(r=u({fn:n,result:r},...o)),r}}var s=function(){let n=window;(n.elbLayer=n.elbLayer||[]).push(arguments)};function a(n,t){return n.getAttribute(t)||""}function f(n){let t=getComputedStyle(n);if("none"===t.display||"visible"!==t.visibility||t.opacity&&Number(t.opacity)<.1)return!1;let e,o=window.innerHeight,r=n.getBoundingClientRect(),i=r.height,c=r.y,u=c+i,s={x:r.x+n.offsetWidth/2,y:r.y+n.offsetHeight/2};if(i<=o){if(n.offsetWidth+r.width===0||n.offsetHeight+r.height===0||s.x<0||s.x>(document.documentElement.clientWidth||window.innerWidth)||s.y<0||s.y>(document.documentElement.clientHeight||window.innerHeight))return!1;e=document.elementFromPoint(s.x,s.y)}else{let n=o/2;if(c<0&&u<n||u>o&&c>n)return!1;e=document.elementFromPoint(s.x,o/2)}if(e)do{if(e===n)return!0}while(e=e.parentElement);return!1}function l(n,t,e){return!1===t?n:(t||(t=m),t(n,e))}function d(n,t){return(e,o)=>{let r=()=>g(n);return n.consent&&o[n.consent]&&(r=()=>b(n)),l(r(),t,e)}}var w,m=n=>{if(n.storage){let t={};n.id&&(t.session=n.id),n.device&&(t.device=n.device),s("walker user",t)}return n.isStart&&s("session start",n),n};function b(n={}){let t=Date.now(),e=n.length||30,r=n.deviceKey||"elbDeviceId",i=n.deviceStorage||"local",u=n.deviceAge||30,s=n.sessionKey||"elbSessionId",a=n.sessionStorage||"local",f=n.sessionAge||30,l=!!n.isStart,d=c(((n,t,e)=>{let r=String(p(n,e));return r||(r=o(8),k(n,r,t,e)),r}))(r,u,i),w=c(((n,o)=>{let r=JSON.parse(String(p(n,o)));return r.isNew=!1,l||r.updated+60*e*1e3<t?(delete r.id,delete r.referrer,r.start=t,r.count++,r.runs=1,l=!0):(r.runs++,l=!1),r.isStart=l,r.updated=t,r}),(()=>{n.isStart=!0}))(s,a),m={isStart:l,storage:!0,id:"",start:t,updated:t,isNew:!0,count:1,runs:1};return n.isStart=n.isStart||l,m=Object.assign(m,g(n),w,{device:d},{isStart:n.isStart,storage:!0},n.data),k(s,JSON.stringify(m),f,a),m}function g(n={}){let t={isStart:!1,storage:!1},e=n.isStart||!1;if(!e){let[n]=performance.getEntriesByType("navigation");if("navigate"!==n.type)return t}let r=new URL(n.url||window.location.href),i=n.referrer||document.referrer,c=i&&new URL(i).hostname,u=function(n,t={}){let e={},o=Object.assign({utm_campaign:"campaign",utm_content:"content",dclid:"clickId",fbclid:"clickId",gclid:"clickId",utm_medium:"medium",msclkid:"clickId",utm_source:"source",utm_term:"term"},t);return Object.entries(o).forEach((([t,o])=>{let r=n.searchParams.get(t);r&&(e[o]=r)})),e}(r,n.parameters);if(Object.keys(u).length&&(u.marketing||(u.marketing=!0),e=!0),!e){let t=n.domains||[];t.push(r.hostname),e=!t.includes(c)}return e?Object.assign({isStart:e,storage:!1,start:Date.now(),id:o(12),referrer:c},u,n.data):t}function p(n,o=e.Utils.Storage.N){var r;function i(n){try{return JSON.parse(n||"")}catch(t){let e=1,o="";return n&&(e=0,o=n),{e:e,v:o}}}let c,u;switch(o){case e.Utils.Storage.D:c=decodeURIComponent((null==(r=document.cookie.split("; ").find((t=>t.startsWith(n+"="))))?void 0:r.split("=")[1])||"");break;case e.Utils.Storage.L:u=i(window.localStorage.getItem(n));break;case e.Utils.Storage.N:u=i(window.sessionStorage.getItem(n))}return u&&(c=u.v,0!=u.e&&u.e<Date.now()&&(function(n,t=e.Utils.Storage.N){switch(t){case e.Utils.Storage.D:k(n,"",0,t);break;case e.Utils.Storage.L:window.localStorage.removeItem(n);break;case e.Utils.Storage.N:window.sessionStorage.removeItem(n)}}(n,o),c="")),t(c||"")}function k(n,t,o=30,r=e.Utils.Storage.N,i){let c={e:Date.now()+6e4*o,v:String(t)},u=JSON.stringify(c);switch(r){case e.Utils.Storage.D:{let e=`${n}=${encodeURIComponent(t)}; max-age=${60*o}; path=/; SameSite=Lax; secure`;i&&(e+="; domain="+i),document.cookie=e;break}case e.Utils.Storage.L:window.localStorage.setItem(n,u);break;case e.Utils.Storage.N:window.sessionStorage.setItem(n,u)}return p(n,r)}function v(n,t,e=!0){return n+(t=null!=t?(e?"-":"")+t:"")}function h(n,e,o,r=!0){return C(a(e,v(n,o,r))||"").reduce(((n,o)=>{let[r,i]=D(o);if(!r)return n;if(i||(":"===r.charAt(r.length-1)&&(r=r.slice(0,-1)),i=""),"#"===i.charAt(0)){i=i.substring(1);try{let n=e[i];n||"selected"!==i||(n=e.options[e.selectedIndex].text),n&&(i=String(n))}catch(n){i=""}}return"[]"===r.slice(-2)?(r=r.slice(0,-2),Array.isArray(n[r])||(n[r]=[]),n[r].push(t(i))):n[r]=t(i),n}),{})}function $(n,t,o=e.t.O){const r=[],c=function(n,t,o){let r=t;for(;r;){const t=S(a(r,v(n,e.t.o,!1)));if(t[o]||"click"!==o)return t[o];r=x(n,r)}return[]}(o,n,t);return c?(c.forEach((e=>{const c=C(e.actionParams||"",",").reduce(((n,t)=>(n[i(t)]=!0,n)),{}),u=O(o,n,c);if(!u.length){const t="page",e=`[${v(o,t)}]`,[r,i]=I(n,e,o,t);u.push({type:t,data:r,nested:[],context:i})}u.forEach((n=>{r.push({entity:n.type,action:e.action,data:n.data,trigger:t,context:n.context,nested:n.nested})}))})),r):r}function y(t){const o=`[${v(t,e.t.p,!1)}]`;let r={};return document.querySelectorAll(o).forEach((o=>{r=n(r,h(t,o,e.t.p,!1))})),r}function S(n){const t={};return C(n).forEach((n=>{const[e,o]=D(n),[r,i]=L(e);if(!r)return;let[c,u]=L(o||"");c=c||r,t[r]||(t[r]=[]),t[r].push({trigger:r,triggerParams:i,action:c,actionParams:u})})),t}function O(n,t,e){const o=[];let r=t;for(e=0!==Object.keys(e||{}).length?e:void 0;r;){const i=j(n,r,t);!i||e&&!e[i.type]||o.push(i),r=x(n,r)}return o}function j(t,o,r){const i=a(o,v(t));if(!i)return null;const c=[o],u=`[${v(t,i)}],[${v(t,"")}]`,s=v(t,e.t.$,!1),[f,l]=I(r||o,u,t,i);o.querySelectorAll(`[${s}]`).forEach((n=>{const[t,e]=D(a(n,s));"parent"===e&&document.querySelectorAll(`[${s}="${t}:child"]`).forEach((t=>{t!==n&&c.push(t)}))}));const d=[];c.forEach((n=>{n.matches(u)&&d.push(n),n.querySelectorAll(u).forEach((n=>{d.push(n)}))}));let w={},m={};d.forEach((e=>{m=n(m,h(t,e,"")),w=n(w,h(t,e,i))})),w=n(f,n(m,w));const b=[];return c.forEach((n=>{n.querySelectorAll(`[${v(t)}]`).forEach((n=>{const e=j(t,n);e&&b.push(e)}))})),{type:i,data:w,context:l,nested:b}}function x(n,t){const o=v(n,e.t.$,!1);if(t.matches(`[${o}]`)){const[n,e]=D(a(t,o));if("child"===e)return document.querySelector(`[${o}="${n}:parent"]`)}return t.parentElement}function I(t,o,r,i){let c={};const u={};let s=t;const a=`[${v(r,e.t.l,!1)}]`;let f=0;for(;s;)s.matches(o)&&(c=n(h(r,s,""),c),c=n(h(r,s,i),c)),s.matches(a)&&(Object.entries(h(r,s,e.t.l,!1)).forEach((([n,t])=>{t&&!u[n]&&(u[n]=[t,f])})),++f),s=x(r,s);return[c,u]}function C(n,t=";"){if(!n)return[];const e=new RegExp(`(?:[^${t}']+|'[^']*')+`,"ig");return n.match(e)||[]}function D(n){const[t,e]=n.split(/:(.+)/,2);return[i(t),i(e)]}function L(n){const[t,e]=n.split("(",2);return[t,e?e.slice(0,-1):""]}var N,A=[],J=s,P={A:"click",J:"custom",P:"hover",R:"load",U:"pulse",W:"scroll",_:"submit",M:"visible",T:"wait"};function R(n,t){const e=()=>{n(t)};"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}function U(n){const{pageview:t,prefix:e}=n.config;if(t){const[t,o]=function(n){const t=window.location,e="page",[o,r]=I(document.body,`[${v(n,e)}]`,n,e);return o.domain=t.hostname,o.title=document.title,o.referrer=document.referrer,t.search&&(o.search=t.search),t.hash&&(o.hash=t.hash),[o,r]}(e);n.config.elbLayer.push("page view",t,P.R,o)}_(n)}function W(n){document.addEventListener("click",c((function(t){E.call(this,n,t)}))),document.addEventListener("submit",c((function(t){H.call(this,n,t)})))}function _(n,t=document){A=[],w=w||c(q,(()=>{}))(n,1e3);const o=v(n.config.prefix,e.t.o,!1);t===document?w&&w.disconnect():T(n,t,o),t.querySelectorAll(`[${o}]`).forEach((t=>T(n,t,o))),A.length&&function(n){const t=(n,t)=>n.filter((([n,e])=>{const o=window.scrollY+window.innerHeight,r=n.offsetTop;if(o<r)return!0;const i=n.clientHeight;return!(100*(1-(r+i-o)/(i||1))>=e)||(M(t,n,P.W),!1)}));N||(N=function(n,t=1e3){let e=null;return function(...o){if(null===e)return e=setTimeout((()=>{e=null}),t),n(...o)}}((function(){A=t.call(document,A,n)})),document.addEventListener("scroll",N))}(n)}function M(n,t,e){$(t,e,n.config.prefix).forEach((t=>{n.config.elbLayer.push(`${t.entity} ${t.action}`,t.data,e,t.context,t.nested)}))}function T(n,t,e){const o=a(t,e);o&&Object.values(S(o)).forEach((e=>e.forEach((e=>{switch(e.trigger){case P.P:!function(n,t){t.addEventListener("mouseenter",c((function(t){t.target instanceof Element&&M(n,t.target,P.P)})))}(n,t);break;case P.R:!function(n,t){M(n,t,P.R)}(n,t);break;case P.U:!function(n,t,e=""){setInterval((()=>{document.hidden||M(n,t,P.U)}),parseInt(e||"")||15e3)}(n,t,e.triggerParams);break;case P.W:!function(n,t=""){const e=parseInt(t||"")||50;if(e<0||e>100)return;A.push([n,e])}(t,e.triggerParams);break;case P.M:!function(n,t){t&&t.observe(n)}(t,w);break;case P.T:!function(n,t,e=""){setTimeout((()=>M(n,t,P.T)),parseInt(e||"")||15e3)}(n,t,e.triggerParams)}}))))}function E(n,t){M(n,t.target,P.A)}function H(n,t){M(n,t.target,P._)}function q(n,t=1e3){if(window.IntersectionObserver)return new window.IntersectionObserver((e=>{e.forEach((e=>{const o=e.target,r="elbTimerId";let i=Number(o.dataset[r]);if(e.intersectionRatio>0){if(o.offsetHeight>window.innerHeight&&f(o)||e.intersectionRatio>=.5)return i=i||window.setTimeout((function(){f(o)&&(M(n,o,P.M),delete o.dataset[r],w&&w.unobserve(o))}),t),void(o.dataset[r]=String(i))}i&&(clearTimeout(i),delete o.dataset[r])}))}),{rootMargin:"0px",threshold:[0,.1,.2,.3,.4,.5]})}function G(n,t,o,r){const i=o||n.config.on[t];if(i)switch(t){case e.t.u:!function(n,t,e){const o=e||n.config.consent;t.forEach((t=>{Object.keys(o).filter((n=>n in t)).forEach((e=>{c(t[e])(n,o)}))}))}(n,i,r);break;case e.t.j:!function(n,t){n.config.allowed&&t.forEach((t=>{c(t)(n)}))}(n,i)}}var V={},z={},B={},F={};function Walkerjs(t={}){const i="2.1.0",a=`${e.t.C} ${e.t.j}`,f=t.globals||{},w=h(t),m={push:u((function(t,o,c="",u={},s=[],a={}){if(!t||!r(t,""))return;const[f,l]=t.split(" ");if(!f||!l)return;if(f===e.t.C)return void function(t,o,i,c){switch(o){case e.t.i:S(i)&&(t.config=h(i,t.config));break;case e.t.u:S(i)&&function(t,e){const o=t.config;let r=!1;const i={};Object.entries(e).forEach((([n,t])=>{const e=!!t;i[n]=e,r=r||e})),o.consent=n(o.consent,i),G(t,"consent",void 0,i),r&&Object.values(o.destinations).forEach((n=>{const e=n.queue||[];n.queue=e.filter((e=>(e.consent=o.consent,e.globals=o.globals,e.user=o.user,!j(t,n,e,!1))))}))}(t,i);break;case e.t.Destination:S(i)&&k(t,i,c);break;case e.t.k:r(i,"")&&r(c,r)&&function(n,t,e){n.hooks[t]=e}(t.config,i,c);break;case e.t.h:(Array.isArray(i)?i:[i||document]).forEach((n=>{$(n)&&_(t,n)}));break;case e.t.S:!function(n,t,e){const o=n.config.on,r=o[t]||[],i=Array.isArray(e)?e:[e];i.forEach((n=>{r.push(n)})),o[t]=r,G(n,t,i)}(t,i,c);break;case e.t.j:R(x,t);break;case e.t.I:S(i)&&function(n,t){const e=n.config.user;t.id&&(e.id=t.id);t.device&&(e.device=t.device);t.session&&(e.session=t.session)}(t,i)}}(m,l,o,c);const d=m.config;if(!d.allowed)return;let w,b=!1;$(o)?(w=o,b=!0):$(u)&&(w=u);if(w){const n=O(d.prefix,w).find((n=>n.type==f));n&&(o=b?n.data:o,u=n.context)}o=o||{},"page"===f&&(o.id=o.id||window.location.pathname);++d.count;const g=Date.now(),p=Math.round((performance.now()-d.timing)/10)/100,v=`${g}-${d.group}-${d.count}`,y={type:"web",id:window.location.href,previous_id:document.referrer},I={event:t,data:o,context:u,custom:a,globals:d.globals,user:d.user,nested:s,consent:d.consent,id:v,trigger:c,entity:f,action:l,timestamp:g,timing:p,group:d.group,count:d.count,version:{client:i,tagging:d.tagging},source:y};d.queue.push(I),Object.values(d.destinations).forEach((n=>{j(m,n,I)}))}),"Push",w.hooks),config:w};var p;if((p=m).config.elbLayer.push=function(...n){var t;(t=n[0])&&{}.hasOwnProperty.call(t,"callee")&&(n=n[0]);const e=Array.prototype.push.apply(this,[n]);return p.push(...n),e},v(p,!0),t.elb&&(window[t.elb]=J),t.instance&&(window[t.instance]=m),G(m,"consent"),t.dataLayer){window.dataLayer=window.dataLayer||[];k(m,{config:{},push:n=>{window.dataLayer.push({...n,walker:!0})},type:"dataLayer"})}function k(n,t,e){if(!t.push)return;const r=e||t.config||{init:!1},i={init:t.init,push:t.push,config:r,type:t.type};!1!==r.queue&&n.config.queue.forEach((t=>{j(n,i,t)}));let c=r.id;if(!c)do{c=o(4)}while(n.config.destinations[c]);n.config.destinations[c]=i}function v(n,t){const o=`${e.t.C} `,i=[];let c=!0;n.config.elbLayer.map((n=>{const e=[...Array.from(n)];r(e[0],"")&&(c&&e[0]==a?c=!1:(t&&e[0].startsWith(o)||!t&&!e[0].startsWith(o))&&i.push(e))})),i.map((t=>{n.push(...t)}))}function h(t,o={}){const r={allowed:!1,client:i,consent:{},custom:{},count:0,dataLayer:!1,destinations:{},elbLayer:window.elbLayer||(window.elbLayer=[]),globals:n(f),group:"",hooks:{},on:{},pageview:!0,prefix:e.t.O,queue:[],run:!1,round:0,session:{storage:!1},timing:0,user:{},tagging:0},c="pageview"in t?!!t.pageview:o.pageview||r.pageview,u=n(f,n(o.globals||{},t.globals||{}));return t.default&&(t.run=!0,t.dataLayer=!0),{...r,...o,...t,pageview:c,globals:u}}function $(n){return n===document||n instanceof HTMLElement}function S(n){return r(n,{})&&!Array.isArray(n)&&null!==n}function j(n,t,e,o=!0){if(e=JSON.parse(JSON.stringify(e)),!function(n,t){let e=!0;const o=t.config.consent;if(o){e=!1;const t=n.config.consent;Object.keys(o).forEach((n=>{t[n]&&(e=!0)}))}return e}(n,t))return o&&(t.queue=t.queue||[],t.queue.push(e)),!1;let r;const i=t.config.mapping;if(i){const n=i[e.entity]||i["*"]||{};if(r=n[e.action]||n["*"],r){if(r.ignore)return!1;r.name&&(e.event=r.name)}if(!r)return!1}return!!c((()=>{if(t.init&&!t.config.init){const n=!1!==u(t.init,"DestinationInit",w.hooks)(t.config);if(t.config.init=n,!n)return!1}return u(t.push,"DestinationPush",w.hooks)(e,t.config,r,n.config),!0}))()}function x(t){t.config=n(t.config,{allowed:!0,count:0,globals:n(f,y(t.config.prefix)),group:o()}),t.config.queue=[],Object.values(t.config.destinations).forEach((n=>{n.queue=[]})),G(t,"run"),1==++t.config.round?v(t,!1):t.config.timing=performance.now(),t.config.session&&function(n={}){let{cb:t,consent:e,instance:o,storage:r}=n;if(!e)return l((r?b:g)(n),t,o);s("walker on","consent",{[e]:d(n,t)})}({...t.config.session,instance:t}),c(U)(t)}return t.run&&R(x,m),W(m),m}var K=Walkerjs;export{V as Walker,Walkerjs,z as WebClient,B as WebDestination,F as WebHooks,K as default,J as elb};//# sourceMappingURL=index.mjs.map