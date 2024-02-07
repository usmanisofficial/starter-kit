import{c as B}from"./_commonjsHelpers-4gQjN7DL.js";import{r as H}from"./jquery-6sbh2-mr.js";var O={exports:{}};/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */(function(E,Q){(function(d,l){E.exports=l(H())})(B,function(d){var l=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(o){return!o||/^\s*$/.test(o)},escapeRegExChars:function(o){return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(o){return typeof o=="string"},isNumber:function(o){return typeof o=="number"},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isPlainObject,isUndefined:function(o){return typeof o>"u"},isElement:function(o){return!!(o&&o.nodeType===1)},isJQuery:function(o){return o instanceof d},toStr:function(s){return l.isUndefined(s)||s===null?"":s+""},bind:d.proxy,each:function(o,s){d.each(o,a);function a(r,n){return s(n,r)}},map:d.map,filter:d.grep,every:function(o,s){var a=!0;return o?(d.each(o,function(r,n){if(!(a=s.call(null,n,r,o)))return!1}),!!a):a},some:function(o,s){var a=!1;return o?(d.each(o,function(r,n){if(a=s.call(null,n,r,o))return!1}),!!a):a},mixin:d.extend,identity:function(o){return o},clone:function(o){return d.extend(!0,{},o)},getIdGenerator:function(){var o=0;return function(){return o++}},templatify:function(s){return d.isFunction(s)?s:a;function a(){return String(s)}},defer:function(o){setTimeout(o,0)},debounce:function(o,s,a){var r,n;return function(){var t=this,i=arguments,e,u;return e=function(){r=null,a||(n=o.apply(t,i))},u=a&&!r,clearTimeout(r),r=setTimeout(e,s),u&&(n=o.apply(t,i)),n}},throttle:function(o,s){var a,r,n,t,i,e;return i=0,e=function(){i=new Date,n=null,t=o.apply(a,r)},function(){var u=new Date,c=s-(u-i);return a=this,r=arguments,c<=0?(clearTimeout(n),n=null,i=u,t=o.apply(a,r)):n||(n=setTimeout(e,c)),t}},stringify:function(o){return l.isString(o)?o:JSON.stringify(o)},noop:function(){}}}(),k="0.11.1",T=function(){return{nonword:s,whitespace:o,obj:{nonword:a(s),whitespace:a(o)}};function o(r){return r=l.toStr(r),r?r.split(/\s+/):[]}function s(r){return r=l.toStr(r),r?r.split(/\W+/):[]}function a(r){return function(t){return t=l.isArray(t)?t:[].slice.call(arguments,0),function(e){var u=[];return l.each(t,function(c){u=u.concat(r(l.toStr(e[c])))}),u}}}}(),b=function(){function o(r){this.maxSize=l.isNumber(r)?r:100,this.reset(),this.maxSize<=0&&(this.set=this.get=d.noop)}l.mixin(o.prototype,{set:function(n,t){var i=this.list.tail,e;this.size>=this.maxSize&&(this.list.remove(i),delete this.hash[i.key],this.size--),(e=this.hash[n])?(e.val=t,this.list.moveToFront(e)):(e=new a(n,t),this.list.add(e),this.hash[n]=e,this.size++)},get:function(n){var t=this.hash[n];if(t)return this.list.moveToFront(t),t.val},reset:function(){this.size=0,this.hash={},this.list=new s}});function s(){this.head=this.tail=null}l.mixin(s.prototype,{add:function(n){this.head&&(n.next=this.head,this.head.prev=n),this.head=n,this.tail=this.tail||n},remove:function(n){n.prev?n.prev.next=n.next:this.head=n.next,n.next?n.next.prev=n.prev:this.tail=n.prev},moveToFront:function(r){this.remove(r),this.add(r)}});function a(r,n){this.key=r,this.val=n,this.prev=this.next=null}return o}(),D=function(){var o;try{o=window.localStorage,o.setItem("~~~","!"),o.removeItem("~~~")}catch{o=null}function s(i,e){this.prefix=["__",i,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+l.escapeRegExChars(this.prefix)),this.ls=e||o,!this.ls&&this._noop()}return l.mixin(s.prototype,{_prefix:function(i){return this.prefix+i},_ttlKey:function(i){return this._prefix(i)+this.ttlKey},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=l.noop},_safeSet:function(i,e){try{this.ls.setItem(i,e)}catch(u){u.name==="QuotaExceededError"&&(this.clear(),this._noop())}},get:function(i){return this.isExpired(i)&&this.remove(i),n(this.ls.getItem(this._prefix(i)))},set:function(i,e,u){return l.isNumber(u)?this._safeSet(this._ttlKey(i),r(a()+u)):this.ls.removeItem(this._ttlKey(i)),this._safeSet(this._prefix(i),r(e))},remove:function(i){return this.ls.removeItem(this._ttlKey(i)),this.ls.removeItem(this._prefix(i)),this},clear:function(){var i,e=t(this.keyMatcher);for(i=e.length;i--;)this.remove(e[i]);return this},isExpired:function(i){var e=n(this.ls.getItem(this._ttlKey(i)));return!!(l.isNumber(e)&&a()>e)}}),s;function a(){return new Date().getTime()}function r(i){return JSON.stringify(l.isUndefined(i)?null:i)}function n(i){return d.parseJSON(i)}function t(i){var e,u,c=[],h=o.length;for(e=0;e<h;e++)(u=o.key(e)).match(i)&&c.push(u.replace(i,""));return c}}(),S=function(){var o=0,s={},a=6,r=new b(10);function n(t){t=t||{},this.cancelled=!1,this.lastReq=null,this._send=t.transport,this._get=t.limiter?t.limiter(this._get):this._get,this._cache=t.cache===!1?new b(0):r}return n.setMaxPendingRequests=function(i){a=i},n.resetCache=function(){r.reset()},l.mixin(n.prototype,{_fingerprint:function(i){return i=i||{},i.url+i.type+d.param(i.data||{})},_get:function(t,i){var e=this,u,c;if(u=this._fingerprint(t),this.cancelled||u!==this.lastReq)return;(c=s[u])?c.done(h).fail(f):o<a?(o++,s[u]=this._send(t).done(h).fail(f).always(m)):this.onDeckRequestArgs=[].slice.call(arguments,0);function h(g){i(null,g),e._cache.set(u,g)}function f(){i(!0)}function m(){o--,delete s[u],e.onDeckRequestArgs&&(e._get.apply(e,e.onDeckRequestArgs),e.onDeckRequestArgs=null)}},get:function(t,i){var e,u;i=i||d.noop,t=l.isString(t)?{url:t}:t||{},u=this._fingerprint(t),this.cancelled=!1,this.lastReq=u,(e=this._cache.get(u))?i(null,e):this._get(t,i)},cancel:function(){this.cancelled=!0}}),n}(),A=window.SearchIndex=function(){var o="c",s="i";function a(e){e=e||{},(!e.datumTokenizer||!e.queryTokenizer)&&d.error("datumTokenizer and queryTokenizer are both required"),this.identify=e.identify||l.stringify,this.datumTokenizer=e.datumTokenizer,this.queryTokenizer=e.queryTokenizer,this.reset()}return l.mixin(a.prototype,{bootstrap:function(u){this.datums=u.datums,this.trie=u.trie},add:function(e){var u=this;e=l.isArray(e)?e:[e],l.each(e,function(c){var h,f;u.datums[h=u.identify(c)]=c,f=r(u.datumTokenizer(c)),l.each(f,function(m){var g,v,y;for(g=u.trie,v=m.split("");y=v.shift();)g=g[o][y]||(g[o][y]=n()),g[s].push(h)})})},get:function(u){var c=this;return l.map(u,function(h){return c.datums[h]})},search:function(u){var c=this,h,f;return h=r(this.queryTokenizer(u)),l.each(h,function(m){var g,v,y,_;if(f&&f.length===0)return!1;for(g=c.trie,v=m.split("");g&&(y=v.shift());)g=g[o][y];if(g&&v.length===0)_=g[s].slice(0),f=f?i(f,_):_;else return f=[],!1}),f?l.map(t(f),function(m){return c.datums[m]}):[]},all:function(){var u=[];for(var c in this.datums)u.push(this.datums[c]);return u},reset:function(){this.datums={},this.trie=n()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),a;function r(e){return e=l.filter(e,function(u){return!!u}),e=l.map(e,function(u){return u.toLowerCase()}),e}function n(){var e={};return e[s]=[],e[o]={},e}function t(e){for(var u={},c=[],h=0,f=e.length;h<f;h++)u[e[h]]||(u[e[h]]=!0,c.push(e[h]));return c}function i(e,u){var c=0,h=0,f=[];e=e.sort(),u=u.sort();for(var m=e.length,g=u.length;c<m&&h<g;)e[c]<u[h]?c++:(e[c]>u[h]||(f.push(e[c]),c++),h++);return f}}(),w=function(){var o;o={data:"data",protocol:"protocol",thumbprint:"thumbprint"};function s(a){this.url=a.url,this.ttl=a.ttl,this.cache=a.cache,this.prepare=a.prepare,this.transform=a.transform,this.transport=a.transport,this.thumbprint=a.thumbprint,this.storage=new D(a.cacheKey)}return l.mixin(s.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},store:function(r){this.cache&&(this.storage.set(o.data,r,this.ttl),this.storage.set(o.protocol,location.protocol,this.ttl),this.storage.set(o.thumbprint,this.thumbprint,this.ttl))},fromCache:function(){var r={},n;return this.cache?(r.data=this.storage.get(o.data),r.protocol=this.storage.get(o.protocol),r.thumbprint=this.storage.get(o.thumbprint),n=r.thumbprint!==this.thumbprint||r.protocol!==location.protocol,r.data&&!n?r.data:null):null},fromNetwork:function(a){var r=this,n;if(!a)return;n=this.prepare(this._settings()),this.transport(n).fail(t).done(i);function t(){a(!0)}function i(e){a(null,r.transform(e))}},clear:function(){return this.storage.clear(),this}}),s}(),I=function(){function o(s){this.url=s.url,this.prepare=s.prepare,this.transform=s.transform,this.transport=new S({cache:s.cache,limiter:s.limiter,transport:s.transport})}return l.mixin(o.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},get:function(a,r){var n=this,t;if(!r)return;return a=a||"",t=this.prepare(a,this._settings()),this.transport.get(t,i);function i(e,u){r(e?[]:n.transform(u))}},cancelLastRequest:function(){this.transport.cancel()}}),o}(),R=function(){return function(i){var e,u;return e={initialize:!0,identify:l.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null},i=l.mixin(e,i||{}),!i.datumTokenizer&&d.error("datumTokenizer is required"),!i.queryTokenizer&&d.error("queryTokenizer is required"),u=i.sorter,i.sorter=u?function(c){return c.sort(u)}:l.identity,i.local=l.isFunction(i.local)?i.local():i.local,i.prefetch=o(i.prefetch),i.remote=s(i.remote),i};function o(t){var i;return t?(i={url:null,ttl:24*60*60*1e3,cache:!0,cacheKey:null,thumbprint:"",prepare:l.identity,transform:l.identity,transport:null},t=l.isString(t)?{url:t}:t,t=l.mixin(i,t),!t.url&&d.error("prefetch requires url to be set"),t.transform=t.filter||t.transform,t.cacheKey=t.cacheKey||t.url,t.thumbprint=k+t.thumbprint,t.transport=t.transport?n(t.transport):d.ajax,t):null}function s(t){var i;if(t)return i={url:null,cache:!0,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:l.identity,transport:null},t=l.isString(t)?{url:t}:t,t=l.mixin(i,t),!t.url&&d.error("remote requires url to be set"),t.transform=t.filter||t.transform,t.prepare=a(t),t.limiter=r(t),t.transport=t.transport?n(t.transport):d.ajax,delete t.replace,delete t.wildcard,delete t.rateLimitBy,delete t.rateLimitWait,t}function a(t){var i,e,u;if(i=t.prepare,e=t.replace,u=t.wildcard,i)return i;return e?i=c:t.wildcard?i=h:i=f,i;function c(m,g){return g.url=e(g.url,m),g}function h(m,g){return g.url=g.url.replace(u,encodeURIComponent(m)),g}function f(m,g){return g}}function r(t){var i,e,u;return i=t.limiter,e=t.rateLimitBy,u=t.rateLimitWait,i||(i=/^throttle$/i.test(e)?h(u):c(u)),i;function c(f){return function(g){return l.debounce(g,f)}}function h(f){return function(g){return l.throttle(g,f)}}}function n(t){return function(e){var u=d.Deferred();return t(e,c,h),u;function c(f){l.defer(function(){u.resolve(f)})}function h(f){l.defer(function(){u.reject(f)})}}}}(),p=function(){var o;o=window&&window.Bloodhound;function s(a){a=R(a),this.sorter=a.sorter,this.identify=a.identify,this.sufficient=a.sufficient,this.local=a.local,this.remote=a.remote?new I(a.remote):null,this.prefetch=a.prefetch?new w(a.prefetch):null,this.index=new A({identify:this.identify,datumTokenizer:a.datumTokenizer,queryTokenizer:a.queryTokenizer}),a.initialize!==!1&&this.initialize()}return s.noConflict=function(){return window&&(window.Bloodhound=o),s},s.tokenizers=T,l.mixin(s.prototype,{__ttAdapter:function(){var r=this;return this.remote?n:t;function n(i,e,u){return r.search(i,e,u)}function t(i,e){return r.search(i,e)}},_loadPrefetch:function(){var r=this,n,t;return n=d.Deferred(),this.prefetch?(t=this.prefetch.fromCache())?(this.index.bootstrap(t),n.resolve()):this.prefetch.fromNetwork(i):n.resolve(),n.promise();function i(e,u){if(e)return n.reject();r.add(u),r.prefetch.store(r.index.serialize()),n.resolve()}},_initialize:function(){var r=this;return this.clear(),(this.initPromise=this._loadPrefetch()).done(n),this.initPromise;function n(){r.add(r.local)}},initialize:function(r){return!this.initPromise||r?this._initialize():this.initPromise},add:function(r){return this.index.add(r),this},get:function(r){return r=l.isArray(r)?r:[].slice.call(arguments),this.index.get(r)},search:function(r,n,t){var i=this,e;return e=this.sorter(this.index.search(r)),n(this.remote?e.slice():e),this.remote&&e.length<this.sufficient?this.remote.get(r,u):this.remote&&this.remote.cancelLastRequest(),this;function u(c){var h=[];l.each(c,function(f){!l.some(e,function(m){return i.identify(f)===i.identify(m)})&&h.push(f)}),t&&t(h)}},all:function(){return this.index.all()},clear:function(){return this.index.reset(),this},clearPrefetchCache:function(){return this.prefetch&&this.prefetch.clear(),this},clearRemoteCache:function(){return S.resetCache(),this},ttAdapter:function(){return this.__ttAdapter()}}),s}();return p}),function(d,l){E.exports=l(H())}(B,function(d){var l=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(p){return!p||/^\s*$/.test(p)},escapeRegExChars:function(p){return p.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(p){return typeof p=="string"},isNumber:function(p){return typeof p=="number"},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isPlainObject,isUndefined:function(p){return typeof p>"u"},isElement:function(p){return!!(p&&p.nodeType===1)},isJQuery:function(p){return p instanceof d},toStr:function(o){return l.isUndefined(o)||o===null?"":o+""},bind:d.proxy,each:function(p,o){d.each(p,s);function s(a,r){return o(r,a)}},map:d.map,filter:d.grep,every:function(p,o){var s=!0;return p?(d.each(p,function(a,r){if(!(s=o.call(null,r,a,p)))return!1}),!!s):s},some:function(p,o){var s=!1;return p?(d.each(p,function(a,r){if(s=o.call(null,r,a,p))return!1}),!!s):s},mixin:d.extend,identity:function(p){return p},clone:function(p){return d.extend(!0,{},p)},getIdGenerator:function(){var p=0;return function(){return p++}},templatify:function(o){return d.isFunction(o)?o:s;function s(){return String(o)}},defer:function(p){setTimeout(p,0)},debounce:function(p,o,s){var a,r;return function(){var n=this,t=arguments,i,e;return i=function(){a=null,s||(r=p.apply(n,t))},e=s&&!a,clearTimeout(a),a=setTimeout(i,o),e&&(r=p.apply(n,t)),r}},throttle:function(p,o){var s,a,r,n,t,i;return t=0,i=function(){t=new Date,r=null,n=p.apply(s,a)},function(){var e=new Date,u=o-(e-t);return s=this,a=arguments,u<=0?(clearTimeout(r),r=null,t=e,n=p.apply(s,a)):r||(r=setTimeout(i,u)),n}},stringify:function(p){return l.isString(p)?p:JSON.stringify(p)},noop:function(){}}}(),k=function(){var p={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};return o;function o(n){var t,i;return i=l.mixin({},p,n),t={css:r(),classes:i,html:s(i),selectors:a(i)},{css:t.css,html:t.html,classes:t.classes,selectors:t.selectors,mixin:function(e){l.mixin(e,t)}}}function s(n){return{wrapper:'<span class="'+n.wrapper+'"></span>',menu:'<div class="'+n.menu+'"></div>'}}function a(n){var t={};return l.each(n,function(i,e){t[e]="."+i}),t}function r(){var n={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return l.isMsie()&&l.mixin(n.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),n}}(),T=function(){var p,o;p="typeahead:",o={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"};function s(a){(!a||!a.el)&&d.error("EventBus initialized without el"),this.$el=d(a.el)}return l.mixin(s.prototype,{_trigger:function(a,r){var n;return n=d.Event(p+a),(r=r||[]).unshift(n),this.$el.trigger.apply(this.$el,r),n},before:function(a){var r,n;return r=[].slice.call(arguments,1),n=this._trigger("before"+a,r),n.isDefaultPrevented()},trigger:function(a){var r;this._trigger(a,[].slice.call(arguments,1)),(r=o[a])&&this._trigger(r,[].slice.call(arguments,1))}}),s}(),b=function(){var p=/\s+/,o=e();return{onSync:r,onAsync:a,off:n,trigger:t};function s(c,h,f,m){var g;if(!f)return this;for(h=h.split(p),f=m?u(f,m):f,this._callbacks=this._callbacks||{};g=h.shift();)this._callbacks[g]=this._callbacks[g]||{sync:[],async:[]},this._callbacks[g][c].push(f);return this}function a(c,h,f){return s.call(this,"async",c,h,f)}function r(c,h,f){return s.call(this,"sync",c,h,f)}function n(c){var h;if(!this._callbacks)return this;for(c=c.split(p);h=c.shift();)delete this._callbacks[h];return this}function t(c){var h,f,m,g,v;if(!this._callbacks)return this;for(c=c.split(p),m=[].slice.call(arguments,1);(h=c.shift())&&(f=this._callbacks[h]);)g=i(f.sync,this,[h].concat(m)),v=i(f.async,this,[h].concat(m)),g()&&o(v);return this}function i(c,h,f){return m;function m(){for(var g,v=0,y=c.length;!g&&v<y;v+=1)g=c[v].apply(h,f)===!1;return!g}}function e(){var c;return window.setImmediate?c=function(f){setImmediate(function(){f()})}:c=function(f){setTimeout(function(){f()},0)},c}function u(c,h){return c.bind?c.bind(h):function(){c.apply(h,[].slice.call(arguments,0))}}}(),D=function(p){var o={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(r){var n;if(r=l.mixin({},o,r),!r.node||!r.pattern)return;r.pattern=l.isArray(r.pattern)?r.pattern:[r.pattern],n=s(r.pattern,r.caseSensitive,r.wordsOnly),i(r.node,t);function t(e){var u,c,h;return(u=n.exec(e.data))&&(h=p.createElement(r.tagName),r.className&&(h.className=r.className),c=e.splitText(u.index),c.splitText(u[0].length),h.appendChild(c.cloneNode(!0)),e.parentNode.replaceChild(h,c)),!!u}function i(e,u){for(var c,h=3,f=0;f<e.childNodes.length;f++)c=e.childNodes[f],c.nodeType===h?f+=u(c)?1:0:i(c,u)}};function s(a,r,n){for(var t=[],i,e=0,u=a.length;e<u;e++)t.push(l.escapeRegExChars(a[e]));return i=n?"\\b("+t.join("|")+")\\b":"("+t.join("|")+")",r?new RegExp(i):new RegExp(i,"i")}}(window.document),S=function(){var p;p={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};function o(n,t){n=n||{},n.input||d.error("input is missing"),t.mixin(this),this.$hint=d(n.hint),this.$input=d(n.input),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=s(this.$input),this._checkLanguageDirection(),this.$hint.length===0&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=l.noop)}return o.normalizeQuery=function(n){return l.toStr(n).replace(/^\s*/g,"").replace(/\s{2,}/g," ")},l.mixin(o.prototype,b,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")},_onKeydown:function(t){var i=p[t.which||t.keyCode];this._managePreventDefault(i,t),i&&this._shouldTrigger(i,t)&&this.trigger(i+"Keyed",t)},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()},_managePreventDefault:function(t,i){var e;switch(t){case"up":case"down":e=!r(i);break;default:e=!1}e&&i.preventDefault()},_shouldTrigger:function(t,i){var e;switch(t){case"tab":e=!r(i);break;default:e=!0}return e},_checkLanguageDirection:function(){var t=(this.$input.css("direction")||"ltr").toLowerCase();this.dir!==t&&(this.dir=t,this.$hint.attr("dir",t),this.trigger("langDirChanged",t))},_setQuery:function(t,i){var e,u;e=a(t,this.query),u=e?this.query.length!==t.length:!1,this.query=t,!i&&!e?this.trigger("queryChanged",this.query):!i&&u&&this.trigger("whitespaceChanged",this.query)},bind:function(){var n=this,t,i,e,u;return t=l.bind(this._onBlur,this),i=l.bind(this._onFocus,this),e=l.bind(this._onKeydown,this),u=l.bind(this._onInput,this),this.$input.on("blur.tt",t).on("focus.tt",i).on("keydown.tt",e),!l.isMsie()||l.isMsie()>9?this.$input.on("input.tt",u):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(c){p[c.which||c.keyCode]||l.defer(l.bind(n._onInput,n,c))}),this},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getLangDir:function(){return this.dir},getQuery:function(){return this.query||""},setQuery:function(t,i){this.setInputValue(t),this._setQuery(t,i)},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused},getInputValue:function(){return this.$input.val()},setInputValue:function(t){this.$input.val(t),this.clearHintIfInvalid(),this._checkLanguageDirection()},resetInputValue:function(){this.setInputValue(this.query)},getHint:function(){return this.$hint.val()},setHint:function(t){this.$hint.val(t)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var t,i,e,u;t=this.getInputValue(),i=this.getHint(),e=t!==i&&i.indexOf(t)===0,u=t!==""&&e&&!this.hasOverflow(),!u&&this.clearHint()},hasFocus:function(){return this.$input.is(":focus")},hasOverflow:function(){var t=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=t},isCursorAtEnd:function(){var n,t,i;return n=this.$input.val().length,t=this.$input[0].selectionStart,l.isNumber(t)?t===n:document.selection?(i=document.selection.createRange(),i.moveStart("character",-n),n===i.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=d("<div>")}}),o;function s(n){return d('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:n.css("font-family"),fontSize:n.css("font-size"),fontStyle:n.css("font-style"),fontVariant:n.css("font-variant"),fontWeight:n.css("font-weight"),wordSpacing:n.css("word-spacing"),letterSpacing:n.css("letter-spacing"),textIndent:n.css("text-indent"),textRendering:n.css("text-rendering"),textTransform:n.css("text-transform")}).insertAfter(n)}function a(n,t){return o.normalizeQuery(n)===o.normalizeQuery(t)}function r(n){return n.altKey||n.ctrlKey||n.metaKey||n.shiftKey}}(),A=function(){var p,o;p={val:"tt-selectable-display",obj:"tt-selectable-object"},o=l.getIdGenerator();function s(t,i){t=t||{},t.templates=t.templates||{},t.templates.notFound=t.templates.notFound||t.templates.empty,t.source||d.error("missing source"),t.node||d.error("missing node"),t.name&&!n(t.name)&&d.error("invalid dataset name: "+t.name),i.mixin(this),this.highlight=!!t.highlight,this.name=t.name||o(),this.limit=t.limit||5,this.displayFn=a(t.display||t.displayKey),this.templates=r(t.templates,this.displayFn),this.source=t.source.__ttAdapter?t.source.__ttAdapter():t.source,this.async=l.isUndefined(t.async)?this.source.length>2:!!t.async,this._resetLastSuggestion(),this.$el=d(t.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)}return s.extractData=function(i){var e=d(i);return e.data(p.obj)?{val:e.data(p.val)||"",obj:e.data(p.obj)||null}:null},l.mixin(s.prototype,b,{_overwrite:function(i,e){e=e||[],e.length?this._renderSuggestions(i,e):this.async&&this.templates.pending?this._renderPending(i):!this.async&&this.templates.notFound?this._renderNotFound(i):this._empty(),this.trigger("rendered",this.name,e,!1)},_append:function(i,e){e=e||[],e.length&&this.$lastSuggestion.length?this._appendSuggestions(i,e):e.length?this._renderSuggestions(i,e):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(i),this.trigger("rendered",this.name,e,!0)},_renderSuggestions:function(i,e){var u;u=this._getSuggestionsFragment(i,e),this.$lastSuggestion=u.children().last(),this.$el.html(u).prepend(this._getHeader(i,e)).append(this._getFooter(i,e))},_appendSuggestions:function(i,e){var u,c;u=this._getSuggestionsFragment(i,e),c=u.children().last(),this.$lastSuggestion.after(u),this.$lastSuggestion=c},_renderPending:function(i){var e=this.templates.pending;this._resetLastSuggestion(),e&&this.$el.html(e({query:i,dataset:this.name}))},_renderNotFound:function(i){var e=this.templates.notFound;this._resetLastSuggestion(),e&&this.$el.html(e({query:i,dataset:this.name}))},_empty:function(){this.$el.empty(),this._resetLastSuggestion()},_getSuggestionsFragment:function(i,e){var u=this,c;return c=document.createDocumentFragment(),l.each(e,function(f){var m,g;g=u._injectQuery(i,f),m=d(u.templates.suggestion(g)).data(p.obj,f).data(p.val,u.displayFn(f)).addClass(u.classes.suggestion+" "+u.classes.selectable),c.appendChild(m[0])}),this.highlight&&D({className:this.classes.highlight,node:c,pattern:i}),d(c)},_getFooter:function(i,e){return this.templates.footer?this.templates.footer({query:i,suggestions:e,dataset:this.name}):null},_getHeader:function(i,e){return this.templates.header?this.templates.header({query:i,suggestions:e,dataset:this.name}):null},_resetLastSuggestion:function(){this.$lastSuggestion=d()},_injectQuery:function(i,e){return l.isObject(e)?l.mixin({_query:i},e):e},update:function(i){var e=this,u=!1,c=!1,h=0;this.cancel(),this.cancel=function(){u=!0,e.cancel=d.noop,e.async&&e.trigger("asyncCanceled",i)},this.source(i,f,m),!c&&f([]);function f(g){c||(c=!0,g=(g||[]).slice(0,e.limit),h=g.length,e._overwrite(i,g),h<e.limit&&e.async&&e.trigger("asyncRequested",i))}function m(g){g=g||[],!u&&h<e.limit&&(e.cancel=d.noop,h+=g.length,e._append(i,g.slice(0,e.limit-h)),e.async&&e.trigger("asyncReceived",i))}},cancel:d.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=d("<div>")}}),s;function a(t){return t=t||l.stringify,l.isFunction(t)?t:i;function i(e){return e[t]}}function r(t,i){return{notFound:t.notFound&&l.templatify(t.notFound),pending:t.pending&&l.templatify(t.pending),header:t.header&&l.templatify(t.header),footer:t.footer&&l.templatify(t.footer),suggestion:t.suggestion||e};function e(u){return d("<div>").text(i(u))}}function n(t){return/^[_a-zA-Z0-9-]+$/.test(t)}}(),w=function(){function p(o,s){var a=this;o=o||{},o.node||d.error("node is required"),s.mixin(this),this.$node=d(o.node),this.query=null,this.datasets=l.map(o.datasets,r);function r(n){var t=a.$node.find(n.node).first();return n.node=t.length?t:d("<div>").appendTo(a.$node),new A(n,s)}}return l.mixin(p.prototype,b,{_onSelectableClick:function(s){this.trigger("selectableClicked",d(s.currentTarget))},_onRendered:function(s,a,r,n){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",a,r,n)},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")},_propagate:function(){this.trigger.apply(this,arguments)},_allDatasetsEmpty:function(){return l.every(this.datasets,s);function s(a){return a.isEmpty()}},_getSelectables:function(){return this.$node.find(this.selectors.selectable)},_removeCursor:function(){var s=this.getActiveSelectable();s&&s.removeClass(this.classes.cursor)},_ensureVisible:function(s){var a,r,n,t;a=s.position().top,r=a+s.outerHeight(!0),n=this.$node.scrollTop(),t=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),a<0?this.$node.scrollTop(n+a):t<r&&this.$node.scrollTop(n+(r-t))},bind:function(){var o=this,s;return s=l.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,s),l.each(this.datasets,function(a){a.onSync("asyncRequested",o._propagate,o).onSync("asyncCanceled",o._propagate,o).onSync("asyncReceived",o._propagate,o).onSync("rendered",o._onRendered,o).onSync("cleared",o._onCleared,o)}),this},isOpen:function(){return this.$node.hasClass(this.classes.open)},open:function(){this.$node.addClass(this.classes.open)},close:function(){this.$node.removeClass(this.classes.open),this._removeCursor()},setLanguageDirection:function(s){this.$node.attr("dir",s)},selectableRelativeToCursor:function(s){var a,r,n,t;return r=this.getActiveSelectable(),a=this._getSelectables(),n=r?a.index(r):-1,t=n+s,t=(t+1)%(a.length+1)-1,t=t<-1?a.length-1:t,t===-1?null:a.eq(t)},setCursor:function(s){this._removeCursor(),(s=s&&s.first())&&(s.addClass(this.classes.cursor),this._ensureVisible(s))},getSelectableData:function(s){return s&&s.length?A.extractData(s):null},getActiveSelectable:function(){var s=this._getSelectables().filter(this.selectors.cursor).first();return s.length?s:null},getTopSelectable:function(){var s=this._getSelectables().first();return s.length?s:null},update:function(s){var a=s!==this.query;return a&&(this.query=s,l.each(this.datasets,r)),a;function r(n){n.update(s)}},empty:function(){l.each(this.datasets,s),this.query=null,this.$node.addClass(this.classes.empty);function s(a){a.clear()}},destroy:function(){this.$node.off(".tt"),this.$node=d("<div>"),l.each(this.datasets,s);function s(a){a.destroy()}}}),p}(),I=function(){var p=w.prototype;function o(){w.apply(this,[].slice.call(arguments,0))}return l.mixin(o.prototype,w.prototype,{open:function(){return!this._allDatasetsEmpty()&&this._show(),p.open.apply(this,[].slice.call(arguments,0))},close:function(){return this._hide(),p.close.apply(this,[].slice.call(arguments,0))},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),p._onRendered.apply(this,[].slice.call(arguments,0))},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),p._onCleared.apply(this,[].slice.call(arguments,0))},setLanguageDirection:function(a){return this.$node.css(a==="ltr"?this.css.ltr:this.css.rtl),p.setLanguageDirection.apply(this,[].slice.call(arguments,0))},_hide:function(){this.$node.hide()},_show:function(){this.$node.css("display","block")}}),o}(),R=function(){function p(s,a){var r,n,t,i,e,u,c,h,f,m,g;s=s||{},s.input||d.error("missing input"),s.menu||d.error("missing menu"),s.eventBus||d.error("missing event bus"),a.mixin(this),this.eventBus=s.eventBus,this.minLength=l.isNumber(s.minLength)?s.minLength:1,this.input=s.input,this.menu=s.menu,this.enabled=!0,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),r=o(this,"activate","open","_onFocused"),n=o(this,"deactivate","_onBlurred"),t=o(this,"isActive","isOpen","_onEnterKeyed"),i=o(this,"isActive","isOpen","_onTabKeyed"),e=o(this,"isActive","_onEscKeyed"),u=o(this,"isActive","open","_onUpKeyed"),c=o(this,"isActive","open","_onDownKeyed"),h=o(this,"isActive","isOpen","_onLeftKeyed"),f=o(this,"isActive","isOpen","_onRightKeyed"),m=o(this,"_openIfActive","_onQueryChanged"),g=o(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",r,this).onSync("blurred",n,this).onSync("enterKeyed",t,this).onSync("tabKeyed",i,this).onSync("escKeyed",e,this).onSync("upKeyed",u,this).onSync("downKeyed",c,this).onSync("leftKeyed",h,this).onSync("rightKeyed",f,this).onSync("queryChanged",m,this).onSync("whitespaceChanged",g,this).onSync("langDirChanged",this._onLangDirChanged,this)}return l.mixin(p.prototype,{_hacks:function(){var a,r;a=this.input.$input||d("<div>"),r=this.menu.$node||d("<div>"),a.on("blur.tt",function(n){var t,i,e;t=document.activeElement,i=r.is(t),e=r.has(t).length>0,l.isMsie()&&(i||e)&&(n.preventDefault(),n.stopImmediatePropagation(),l.defer(function(){a.focus()}))}),r.on("mousedown.tt",function(n){n.preventDefault()})},_onSelectableClicked:function(a,r){this.select(r)},_onDatasetCleared:function(){this._updateHint()},_onDatasetRendered:function(a,r,n,t){this._updateHint(),this.eventBus.trigger("render",n,t,r)},_onAsyncRequested:function(a,r,n){this.eventBus.trigger("asyncrequest",n,r)},_onAsyncCanceled:function(a,r,n){this.eventBus.trigger("asynccancel",n,r)},_onAsyncReceived:function(a,r,n){this.eventBus.trigger("asyncreceive",n,r)},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())},_onEnterKeyed:function(a,r){var n;(n=this.menu.getActiveSelectable())&&this.select(n)&&r.preventDefault()},_onTabKeyed:function(a,r){var n;(n=this.menu.getActiveSelectable())?this.select(n)&&r.preventDefault():(n=this.menu.getTopSelectable())&&this.autocomplete(n)&&r.preventDefault()},_onEscKeyed:function(){this.close()},_onUpKeyed:function(){this.moveCursor(-1)},_onDownKeyed:function(){this.moveCursor(1)},_onLeftKeyed:function(){this.dir==="rtl"&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onRightKeyed:function(){this.dir==="ltr"&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onQueryChanged:function(a,r){this._minLengthMet(r)?this.menu.update(r):this.menu.empty()},_onWhitespaceChanged:function(){this._updateHint()},_onLangDirChanged:function(a,r){this.dir!==r&&(this.dir=r,this.menu.setLanguageDirection(r))},_openIfActive:function(){this.isActive()&&this.open()},_minLengthMet:function(a){return a=l.isString(a)?a:this.input.getQuery()||"",a.length>=this.minLength},_updateHint:function(){var a,r,n,t,i,e,u;a=this.menu.getTopSelectable(),r=this.menu.getSelectableData(a),n=this.input.getInputValue(),r&&!l.isBlankString(n)&&!this.input.hasOverflow()?(t=S.normalizeQuery(n),i=l.escapeRegExChars(t),e=new RegExp("^(?:"+i+")(.+$)","i"),u=e.exec(r.val),u&&this.input.setHint(n+u[1])):this.input.clearHint()},isEnabled:function(){return this.enabled},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},isActive:function(){return this.active},activate:function(){return this.isActive()?!0:!this.isEnabled()||this.eventBus.before("active")?!1:(this.active=!0,this.eventBus.trigger("active"),!0)},deactivate:function(){return this.isActive()?this.eventBus.before("idle")?!1:(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0):!0},isOpen:function(){return this.menu.isOpen()},open:function(){return!this.isOpen()&&!this.eventBus.before("open")&&(this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()},setVal:function(a){this.input.setQuery(l.toStr(a))},getVal:function(){return this.input.getQuery()},select:function(a){var r=this.menu.getSelectableData(a);return r&&!this.eventBus.before("select",r.obj)?(this.input.setQuery(r.val,!0),this.eventBus.trigger("select",r.obj),this.close(),!0):!1},autocomplete:function(a){var r,n,t;return r=this.input.getQuery(),n=this.menu.getSelectableData(a),t=n&&r!==n.val,t&&!this.eventBus.before("autocomplete",n.obj)?(this.input.setQuery(n.val),this.eventBus.trigger("autocomplete",n.obj),!0):!1},moveCursor:function(a){var r,n,t,i,e;return r=this.input.getQuery(),n=this.menu.selectableRelativeToCursor(a),t=this.menu.getSelectableData(n),i=t?t.obj:null,e=this._minLengthMet()&&this.menu.update(r),!e&&!this.eventBus.before("cursorchange",i)?(this.menu.setCursor(n),t?this.input.setInputValue(t.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",i),!0):!1},destroy:function(){this.input.destroy(),this.menu.destroy()}}),p;function o(s){var a=[].slice.call(arguments,1);return function(){var r=[].slice.call(arguments);l.each(a,function(n){return s[n].apply(s,r)})}}}();(function(){var p,o,s;p=d.fn.typeahead,o={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},s={initialize:function(c,h){var f;return h=l.isArray(h)?h:[].slice.call(arguments,1),c=c||{},f=k(c.classNames),this.each(m);function m(){var g,v,y,_,C,x,L,F,K,z,q;l.each(h,function(N){N.highlight=!!c.highlight}),g=d(this),v=d(f.html.wrapper),y=e(c.hint),_=e(c.menu),C=c.hint!==!1&&!y,x=c.menu!==!1&&!_,C&&(y=r(g,f)),x&&(_=d(f.html.menu).css(f.css.menu)),y&&y.val(""),g=n(g,f),(C||x)&&(v.css(f.css.wrapper),g.css(C?f.css.input:f.css.inputWithNoHint),g.wrap(v).parent().prepend(C?y:null).append(x?_:null)),q=x?I:w,L=new T({el:g}),F=new S({hint:y,input:g},f),K=new q({node:_,datasets:h},f),z=new R({input:F,menu:K,eventBus:L,minLength:c.minLength},f),g.data(o.www,f),g.data(o.typeahead,z)}},isEnabled:function(){var c;return a(this.first(),function(h){c=h.isEnabled()}),c},enable:function(){return a(this,function(c){c.enable()}),this},disable:function(){return a(this,function(c){c.disable()}),this},isActive:function(){var c;return a(this.first(),function(h){c=h.isActive()}),c},activate:function(){return a(this,function(c){c.activate()}),this},deactivate:function(){return a(this,function(c){c.deactivate()}),this},isOpen:function(){var c;return a(this.first(),function(h){c=h.isOpen()}),c},open:function(){return a(this,function(c){c.open()}),this},close:function(){return a(this,function(c){c.close()}),this},select:function(c){var h=!1,f=d(c);return a(this.first(),function(m){h=m.select(f)}),h},autocomplete:function(c){var h=!1,f=d(c);return a(this.first(),function(m){h=m.autocomplete(f)}),h},moveCursor:function(c){var h=!1;return a(this.first(),function(f){h=f.moveCursor(c)}),h},val:function(c){var h;return arguments.length?(a(this,function(f){f.setVal(c)}),this):(a(this.first(),function(f){h=f.getVal()}),h)},destroy:function(){return a(this,function(c,h){i(h),c.destroy()}),this}},d.fn.typeahead=function(u){return s[u]?s[u].apply(this,[].slice.call(arguments,1)):s.initialize.apply(this,arguments)},d.fn.typeahead.noConflict=function(){return d.fn.typeahead=p,this};function a(u,c){u.each(function(){var h=d(this),f;(f=h.data(o.typeahead))&&c(f,h)})}function r(u,c){return u.clone().addClass(c.classes.hint).removeData().css(c.css.hint).css(t(u)).prop("readonly",!0).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})}function n(u,c){u.data(o.attrs,{dir:u.attr("dir"),autocomplete:u.attr("autocomplete"),spellcheck:u.attr("spellcheck"),style:u.attr("style")}),u.addClass(c.classes.input).attr({autocomplete:"off",spellcheck:!1});try{!u.attr("dir")&&u.attr("dir","auto")}catch{}return u}function t(u){return{backgroundAttachment:u.css("background-attachment"),backgroundClip:u.css("background-clip"),backgroundColor:u.css("background-color"),backgroundImage:u.css("background-image"),backgroundOrigin:u.css("background-origin"),backgroundPosition:u.css("background-position"),backgroundRepeat:u.css("background-repeat"),backgroundSize:u.css("background-size")}}function i(u){var c,h;c=u.data(o.www),h=u.parent().filter(c.selectors.wrapper),l.each(u.data(o.attrs),function(f,m){l.isUndefined(f)?u.removeAttr(m):u.attr(m,f)}),u.removeData(o.typeahead).removeData(o.www).removeData(o.attr).removeClass(c.classes.input),h.length&&(u.detach().insertAfter(h),h.remove())}function e(u){var c,h;return c=l.isJQuery(u)||l.isElement(u),h=c?d(u).first():[],h.length?h:null}})()})})(O);
