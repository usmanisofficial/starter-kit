var v={exports:{}},m={};/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/core
 * @version 2.4.0
 */var g={luhn:function(r){for(var e=r.length,t=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],i=0,n=0;e--;)n+=t[i][parseInt(r.charAt(e),10)],i=1-i;return n%10==0&&n>0},mod11And10:function(r){for(var e=r.length,t=5,i=0;i<e;i++)t=(2*(t||10)%11+parseInt(r.charAt(i),10))%10;return t===1},mod37And36:function(r,e){e===void 0&&(e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");for(var t=r.length,i=e.length,n=Math.floor(i/2),s=0;s<t;s++)n=(2*(n||i)%(i+1)+e.indexOf(r.charAt(s)))%i;return n===1},mod97And10:function(r){for(var e=function(s){return s.split("").map(function(a){var l=a.charCodeAt(0);return l>=65&&l<=90?l-55:a}).join("").split("").map(function(a){return parseInt(a,10)})}(r),t=0,i=e.length,n=0;n<i-1;++n)t=10*(t+e[n])%97;return(t+=e[i-1])%97==1},verhoeff:function(r){for(var e=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],t=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],i=r.reverse(),n=0,s=0;s<i.length;s++)n=e[n][t[s%8][i[s]]];return n===0}},y=function(){function r(e,t){this.fields={},this.elements={},this.ee={fns:{},clear:function(){this.fns={}},emit:function(i){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];(this.fns[i]||[]).map(function(a){return a.apply(a,n)})},off:function(i,n){if(this.fns[i]){var s=this.fns[i].indexOf(n);s>=0&&this.fns[i].splice(s,1)}},on:function(i,n){(this.fns[i]=this.fns[i]||[]).push(n)}},this.filter={filters:{},add:function(i,n){(this.filters[i]=this.filters[i]||[]).push(n)},clear:function(){this.filters={}},execute:function(i,n,s){if(!this.filters[i]||!this.filters[i].length)return n;for(var a=n,l=this.filters[i],d=l.length,o=0;o<d;o++)a=l[o].apply(a,s);return a},remove:function(i,n){this.filters[i]&&(this.filters[i]=this.filters[i].filter(function(s){return s!==n}))}},this.plugins={},this.results=new Map,this.validators={},this.form=e,this.fields=t}return r.prototype.on=function(e,t){return this.ee.on(e,t),this},r.prototype.off=function(e,t){return this.ee.off(e,t),this},r.prototype.emit=function(e){for(var t,i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];return(t=this.ee).emit.apply(t,function(s,a,l){if(l||arguments.length===2)for(var d,o=0,u=a.length;o<u;o++)!d&&o in a||(d||(d=Array.prototype.slice.call(a,0,o)),d[o]=a[o]);return s.concat(d||Array.prototype.slice.call(a))}([e],i,!1)),this},r.prototype.registerPlugin=function(e,t){if(this.plugins[e])throw new Error("The plguin ".concat(e," is registered"));return t.setCore(this),t.install(),this.plugins[e]=t,this},r.prototype.deregisterPlugin=function(e){var t=this.plugins[e];return t&&t.uninstall(),delete this.plugins[e],this},r.prototype.enablePlugin=function(e){var t=this.plugins[e];return t&&t.enable(),this},r.prototype.disablePlugin=function(e){var t=this.plugins[e];return t&&t.disable(),this},r.prototype.isPluginEnabled=function(e){var t=this.plugins[e];return!!t&&t.isPluginEnabled()},r.prototype.registerValidator=function(e,t){if(this.validators[e])throw new Error("The validator ".concat(e," is registered"));return this.validators[e]=t,this},r.prototype.registerFilter=function(e,t){return this.filter.add(e,t),this},r.prototype.deregisterFilter=function(e,t){return this.filter.remove(e,t),this},r.prototype.executeFilter=function(e,t,i){return this.filter.execute(e,t,i)},r.prototype.addField=function(e,t){var i=Object.assign({},{selector:"",validators:{}},t);return this.fields[e]=this.fields[e]?{selector:i.selector||this.fields[e].selector,validators:Object.assign({},this.fields[e].validators,i.validators)}:i,this.elements[e]=this.queryElements(e),this.emit("core.field.added",{elements:this.elements[e],field:e,options:this.fields[e]}),this},r.prototype.removeField=function(e){if(!this.fields[e])throw new Error("The field ".concat(e," validators are not defined. Please ensure the field is added first"));var t=this.elements[e],i=this.fields[e];return delete this.elements[e],delete this.fields[e],this.emit("core.field.removed",{elements:t,field:e,options:i}),this},r.prototype.validate=function(){var e=this;return this.emit("core.form.validating",{formValidation:this}),this.filter.execute("validate-pre",Promise.resolve(),[]).then(function(){return Promise.all(Object.keys(e.fields).map(function(t){return e.validateField(t)})).then(function(t){switch(!0){case t.indexOf("Invalid")!==-1:return e.emit("core.form.invalid",{formValidation:e}),Promise.resolve("Invalid");case t.indexOf("NotValidated")!==-1:return e.emit("core.form.notvalidated",{formValidation:e}),Promise.resolve("NotValidated");default:return e.emit("core.form.valid",{formValidation:e}),Promise.resolve("Valid")}})})},r.prototype.validateField=function(e){var t=this,i=this.results.get(e);if(i==="Valid"||i==="Invalid")return Promise.resolve(i);this.emit("core.field.validating",e);var n=this.elements[e];if(n.length===0)return this.emit("core.field.valid",e),Promise.resolve("Valid");var s=n[0].getAttribute("type");return s==="radio"||s==="checkbox"||n.length===1?this.validateElement(e,n[0]):Promise.all(n.map(function(a){return t.validateElement(e,a)})).then(function(a){switch(!0){case a.indexOf("Invalid")!==-1:return t.emit("core.field.invalid",e),t.results.set(e,"Invalid"),Promise.resolve("Invalid");case a.indexOf("NotValidated")!==-1:return t.emit("core.field.notvalidated",e),t.results.delete(e),Promise.resolve("NotValidated");default:return t.emit("core.field.valid",e),t.results.set(e,"Valid"),Promise.resolve("Valid")}})},r.prototype.validateElement=function(e,t){var i=this;this.results.delete(e);var n=this.elements[e];if(this.filter.execute("element-ignored",!1,[e,t,n]))return this.emit("core.element.ignored",{element:t,elements:n,field:e}),Promise.resolve("Ignored");var s=this.fields[e].validators;this.emit("core.element.validating",{element:t,elements:n,field:e});var a=Object.keys(s).map(function(l){return function(){return i.executeValidator(e,t,l,s[l])}});return this.waterfall(a).then(function(l){var d=l.indexOf("Invalid")===-1;i.emit("core.element.validated",{element:t,elements:n,field:e,valid:d});var o=t.getAttribute("type");return o!=="radio"&&o!=="checkbox"&&n.length!==1||i.emit(d?"core.field.valid":"core.field.invalid",e),Promise.resolve(d?"Valid":"Invalid")}).catch(function(l){return i.emit("core.element.notvalidated",{element:t,elements:n,field:e}),Promise.resolve(l)})},r.prototype.executeValidator=function(e,t,i,n){var s=this,a=this.elements[e],l=this.filter.execute("validator-name",i,[i,e]);if(n.message=this.filter.execute("validator-message",n.message,[this.locale,e,l]),!this.validators[l]||n.enabled===!1)return this.emit("core.validator.validated",{element:t,elements:a,field:e,result:this.normalizeResult(e,l,{valid:!0}),validator:l}),Promise.resolve("Valid");var d=this.validators[l],o=this.getElementValue(e,t,l);if(!this.filter.execute("field-should-validate",!0,[e,t,o,i]))return this.emit("core.validator.notvalidated",{element:t,elements:a,field:e,validator:i}),Promise.resolve("NotValidated");this.emit("core.validator.validating",{element:t,elements:a,field:e,validator:i});var u=d().validate({element:t,elements:a,field:e,l10n:this.localization,options:n,value:o});if(typeof u.then=="function")return u.then(function(c){var h=s.normalizeResult(e,i,c);return s.emit("core.validator.validated",{element:t,elements:a,field:e,result:h,validator:i}),h.valid?"Valid":"Invalid"});var f=this.normalizeResult(e,i,u);return this.emit("core.validator.validated",{element:t,elements:a,field:e,result:f,validator:i}),Promise.resolve(f.valid?"Valid":"Invalid")},r.prototype.getElementValue=function(e,t,i){var n=function(s,a,l,d){var o=(l.getAttribute("type")||"").toLowerCase(),u=l.tagName.toLowerCase();if(u==="textarea")return l.value;if(u==="select"){var f=l,c=f.selectedIndex;return c>=0?f.options.item(c).value:""}if(u==="input"){if(o==="radio"||o==="checkbox"){var h=d.filter(function(p){return p.checked}).length;return h===0?"":h+""}return l.value}return""}(this.form,0,t,this.elements[e]);return this.filter.execute("field-value",n,[n,e,t,i])},r.prototype.getElements=function(e){return this.elements[e]},r.prototype.getFields=function(){return this.fields},r.prototype.getFormElement=function(){return this.form},r.prototype.getLocale=function(){return this.locale},r.prototype.getPlugin=function(e){return this.plugins[e]},r.prototype.updateFieldStatus=function(e,t,i){var n=this,s=this.elements[e],a=s[0].getAttribute("type");if((a==="radio"||a==="checkbox"?[s[0]]:s).forEach(function(l){return n.updateElementStatus(e,l,t,i)}),i)t==="Invalid"&&(this.emit("core.field.invalid",e),this.results.set(e,"Invalid"));else switch(t){case"NotValidated":this.emit("core.field.notvalidated",e),this.results.delete(e);break;case"Validating":this.emit("core.field.validating",e),this.results.delete(e);break;case"Valid":this.emit("core.field.valid",e),this.results.set(e,"Valid");break;case"Invalid":this.emit("core.field.invalid",e),this.results.set(e,"Invalid")}return this},r.prototype.updateElementStatus=function(e,t,i,n){var s=this,a=this.elements[e],l=this.fields[e].validators,d=n?[n]:Object.keys(l);switch(i){case"NotValidated":d.forEach(function(o){return s.emit("core.validator.notvalidated",{element:t,elements:a,field:e,validator:o})}),this.emit("core.element.notvalidated",{element:t,elements:a,field:e});break;case"Validating":d.forEach(function(o){return s.emit("core.validator.validating",{element:t,elements:a,field:e,validator:o})}),this.emit("core.element.validating",{element:t,elements:a,field:e});break;case"Valid":d.forEach(function(o){return s.emit("core.validator.validated",{element:t,elements:a,field:e,result:{message:l[o].message,valid:!0},validator:o})}),this.emit("core.element.validated",{element:t,elements:a,field:e,valid:!0});break;case"Invalid":d.forEach(function(o){return s.emit("core.validator.validated",{element:t,elements:a,field:e,result:{message:l[o].message,valid:!1},validator:o})}),this.emit("core.element.validated",{element:t,elements:a,field:e,valid:!1})}return this},r.prototype.resetForm=function(e){var t=this;return Object.keys(this.fields).forEach(function(i){return t.resetField(i,e)}),this.emit("core.form.reset",{formValidation:this,reset:e}),this},r.prototype.resetField=function(e,t){if(t){var i=this.elements[e],n=i[0].getAttribute("type");i.forEach(function(s){n==="radio"||n==="checkbox"?(s.removeAttribute("selected"),s.removeAttribute("checked"),s.checked=!1):(s.setAttribute("value",""),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.value=""))})}return this.updateFieldStatus(e,"NotValidated"),this.emit("core.field.reset",{field:e,reset:t}),this},r.prototype.revalidateField=function(e){return this.fields[e]?(this.updateFieldStatus(e,"NotValidated"),this.validateField(e)):Promise.resolve("Ignored")},r.prototype.disableValidator=function(e,t){if(!this.fields[e])return this;var i=this.elements[e];return this.toggleValidator(!1,e,t),this.emit("core.validator.disabled",{elements:i,field:e,formValidation:this,validator:t}),this},r.prototype.enableValidator=function(e,t){if(!this.fields[e])return this;var i=this.elements[e];return this.toggleValidator(!0,e,t),this.emit("core.validator.enabled",{elements:i,field:e,formValidation:this,validator:t}),this},r.prototype.updateValidatorOption=function(e,t,i,n){return this.fields[e]&&this.fields[e].validators&&this.fields[e].validators[t]&&(this.fields[e].validators[t][i]=n),this},r.prototype.setFieldOptions=function(e,t){return this.fields[e]=t,this},r.prototype.destroy=function(){var e=this;return Object.keys(this.plugins).forEach(function(t){return e.plugins[t].uninstall()}),this.ee.clear(),this.filter.clear(),this.results.clear(),this.plugins={},this},r.prototype.setLocale=function(e,t){return this.locale=e,this.localization=t,this},r.prototype.waterfall=function(e){return e.reduce(function(t,i){return t.then(function(n){return i().then(function(s){return n.push(s),n})})},Promise.resolve([]))},r.prototype.queryElements=function(e){var t=this.fields[e].selector?this.fields[e].selector.charAt(0)==="#"?'[id="'.concat(this.fields[e].selector.substring(1),'"]'):this.fields[e].selector:'[name="'.concat(e.replace(/"/g,'\\"'),'"]');return[].slice.call(this.form.querySelectorAll(t))},r.prototype.normalizeResult=function(e,t,i){var n=this.fields[e].validators[t];return Object.assign({},i,{message:i.message||(n?n.message:"")||(this.localization&&this.localization[t]&&this.localization[t].default?this.localization[t].default:"")||"The field ".concat(e," is not valid")})},r.prototype.toggleValidator=function(e,t,i){var n=this,s=this.fields[t].validators;return i&&s&&s[i]?this.fields[t].validators[i].enabled=e:i||Object.keys(s).forEach(function(a){return n.fields[t].validators[a].enabled=e}),this.updateFieldStatus(t,"NotValidated",i)},r}(),b=function(){function r(e){this.opts=e,this.isEnabled=!0}return r.prototype.setCore=function(e){return this.core=e,this},r.prototype.enable=function(){return this.isEnabled=!0,this.onEnabled(),this},r.prototype.disable=function(){return this.isEnabled=!1,this.onDisabled(),this},r.prototype.isPluginEnabled=function(){return this.isEnabled},r.prototype.onEnabled=function(){},r.prototype.onDisabled=function(){},r.prototype.install=function(){},r.prototype.uninstall=function(){},r}(),E=function(r,e){var t=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector;return t?t.call(r,e):[].slice.call(r.parentElement.querySelectorAll(e)).indexOf(r)>=0},V={call:function(r,e){if(typeof r=="function")return r.apply(this,e);if(typeof r=="string"){var t=r;t.substring(t.length-2)==="()"&&(t=t.substring(0,t.length-2));for(var i=t.split("."),n=i.pop(),s=window,a=0,l=i;a<l.length;a++)s=s[l[a]];return s[n]===void 0?null:s[n].apply(this,e)}},classSet:function(r,e){var t=[],i=[];Object.keys(e).forEach(function(n){n&&(e[n]?t.push(n):i.push(n))}),i.forEach(function(n){return function(s,a){a.split(" ").forEach(function(l){s.classList?s.classList.remove(l):s.className=s.className.replace(l,"")})}(r,n)}),t.forEach(function(n){return function(s,a){a.split(" ").forEach(function(l){s.classList?s.classList.add(l):" ".concat(s.className," ").indexOf(" ".concat(l," "))&&(s.className+=" ".concat(l))})}(r,n)})},closest:function(r,e){for(var t=r;t&&!E(t,e);)t=t.parentElement;return t},fetch:function(r,e){return new Promise(function(t,i){var n,s=Object.assign({},{crossDomain:!1,headers:{},method:"GET",params:{}},e),a=Object.keys(s.params).map(function(c){return"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(s.params[c]))}).join("&"),l=r.indexOf("?")>-1,d=s.method==="GET"?"".concat(r).concat(l?"&":"?").concat(a):r;if(s.crossDomain){var o=document.createElement("script"),u="___FormValidationFetch_".concat(Array(12).fill("").map(function(c){return Math.random().toString(36).charAt(2)}).join(""),"___");window[u]=function(c){delete window[u],t(c)},o.src="".concat(d).concat(l?"&":"?","callback=").concat(u),o.async=!0,o.addEventListener("load",function(){o.parentNode.removeChild(o)}),o.addEventListener("error",function(){return i}),document.head.appendChild(o)}else{var f=new XMLHttpRequest;f.open(s.method,d),f.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.method==="POST"&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),Object.keys(s.headers).forEach(function(c){return f.setRequestHeader(c,s.headers[c])}),f.addEventListener("load",function(){t(JSON.parse(this.responseText))}),f.addEventListener("error",function(){return i}),f.send((n=s.params,Object.keys(n).map(function(c){return"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(n[c]))}).join("&")))}})},format:function(r,e){var t=Array.isArray(e)?e:[e],i=r;return t.forEach(function(n){i=i.replace("%s",n)}),i},hasClass:function(r,e){return r.classList?r.classList.contains(e):new RegExp("(^| )".concat(e,"( |$)"),"gi").test(r.className)},isValidDate:function(r,e,t,i){if(isNaN(r)||isNaN(e)||isNaN(t)||r<1e3||r>9999||e<=0||e>12||t<=0||t>[31,r%400==0||r%100!=0&&r%4==0?29:28,31,30,31,30,31,31,30,31,30,31][e-1])return!1;if(i===!0){var n=new Date,s=n.getFullYear(),a=n.getMonth(),l=n.getDate();return r<s||r===s&&e-1<a||r===s&&e-1===a&&t<l}return!0},removeUndefined:function(r){return r?Object.entries(r).reduce(function(e,t){var i=t[0],n=t[1];return n===void 0||(e[i]=n),e},{}):{}}};m.Plugin=b,m.algorithms=g,m.formValidation=function(r,e){var t=Object.assign({},{fields:{},locale:"en_US",plugins:{},init:function(n){}},e),i=new y(r,t.fields);return i.setLocale(t.locale,t.localization),Object.keys(t.plugins).forEach(function(n){return i.registerPlugin(n,t.plugins[n])}),t.init(i),Object.keys(t.fields).forEach(function(n){return i.addField(n,t.fields[n])}),i},m.utils=V;v.exports=m;var x=v.exports;export{x as l};
