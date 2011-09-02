(function(){function f(a){var f=a.currentTarget||a.srcElement,g,h,i;if(a.type==="load"||b.test(f.readyState)){h=f.getAttribute("data-requiremodule"),d[h]=!0;for(g=0;i=c[g];g++)if(d[i.name])e(i.name,i.req,i.onLoad);else break;g>0&&c.splice(0,g),setTimeout(function(){f.parentNode.removeChild(f)},15)}}function e(a,b,c){b([a],function(a){c(function(){return a})})}var a=typeof document!=="undefined"&&typeof window!=="undefined"&&(document.createElement("script").async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),b=/^(complete|loaded)$/,c=[],d={};define('plugin/order',{version:"0.26.0",load:function(b,d,g,h){var i=d.nameToUrl(b,null);h.isBuild?e(b,d,g):(require.s.skipAsync[i]=!0,a?d([b],function(a){g(function(){return a})}):d.specified(b)?d([b],function(a){g(function(){return a})}):(c.push({name:b,req:d,onLoad:g}),require.attach(i,null,b,f,"script/cache")))}})})();
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e==="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(c||b==null||typeof b!=="object")d(a,b);else for(var e in b)b_(a+"["+e+"]",b[e],c,d)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(a.liveFired!==this&&r&&r.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d==="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a==="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(!g||!g[1]&&d)return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a);if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":a.toString().replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j==="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c==="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function b(b,c){c&&c instanceof e&&!(c instanceof a)&&(c=a(c));return e.fn.init.call(this,b,c,d)},a.fn.init.prototype=a.fn;var d=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return c||b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function t(){j.noCloneEvent=!1,a.detachEvent("onclick",t)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in {submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]==="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(f.acceptData(a)){var g=f.expando,h=typeof c==="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c==="object"||typeof c==="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a==="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a==="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!=="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a==="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(e.className){var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}else e.className=a}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b==="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h==="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!=="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!=="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(e&&!f.event.customEvent[h]||f.event.global[h]){c=typeof c==="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)})},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function K(a){var c=a.target,d,e;if(z.test(c.nodeName)&&!c.readOnly){d=f._data(c,"_change_data"),e=J(c),(a.type!=="focusout"||c.type!=="radio")&&f._data(c,"_change_data",e);if(d===b||e===d)return;if(d!=null||e)a.type="change",a.liveFired=b,f.event.trigger(a,arguments[1],c)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a==="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else f.push.apply(f,n);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!=="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a==="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!=="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d==="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a!=="string"||bc.test(a)||!f.support.leadingWhitespace&&Z.test(a)||bg[(_.exec(a)||["",""])[1].toLowerCase()])f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!=="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j==="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k==="number"&&(k+="");if(!k)continue;if(typeof k==="string")if(bb.test(k)){k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}else k=b.createTextNode(k);var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)==="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(!e||!f.nodeName(h[j],"script")||h[j].type&&h[j].type.toLowerCase()!=="text/javascript"){if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}else e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j])}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e==="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!=="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c==="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=r&&(r[1]!=bX[1]||r[2]!=bX[2]||(r[3]||(r[1]==="http:"?80:443))!=(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!=="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in {success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(p){v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}else w(-1,"No Transport");return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}j||!c.isLocal||c.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},c.async&&h.readyState!==4?(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a==="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a==="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration==="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!cx.test(a.nodeName)&&f.css(a,"position")==="static"))a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
define("lib/impl/jquery-1.6.1", function(){});
/*
 * Helper library to prevent the auto initialization of jquery.
 * Needed for unit tests.
 */
$(document).bind("mobileinit", function() {
    $.extend($.mobile, {
        gradeA: function() {
            return false;
        },
        pageLoading: function() {
        }
    });
});
define("lib/impl/jquery-mobile-noinit", function(){});
(function(a,b,c){function ep(a){this.directives(!0),this.descend(!0);return el[d(a[0].type)]||bj}function eo(a,b,c,d,e){return cr(["$updateView","$defer"],function(f,g,h){var i=this,j=b(i,h),k=c(i,h),l=h.attr("ng:change")||"",m;j&&(d.call(i,j,k,h),this.$eval(h.attr("ng:init")||""),h.bind(a,function(a){function b(){var a=k.get();if(!e||a!=m)j.set(a),m=j.get(),i.$tryEval(l,h),f()}a.type=="keydown"?g(b):b()}),i.$watch(j.get,function(a){m!==a&&k.set(m=a)}))})}function en(a,b,c){var d=a.get(),e=b.get(),f=c[0];f.checked=!1,f.name=this.$id+"@"+f.name,bn(d)&&a.set(d=null),d==null&&e!==null&&a.set(e),b.set(d)}function em(a){return function(b,c){var d=c.get();!d&&bo(a)&&(d=bH(a)),bn(b.get())&&bo(d)&&b.set(d)}}function ei(){return{get:bj,set:bj}}function eh(a,b){var c=b.attr("ng:format")||H,d=ed(c);return{get:function(){var c=[];be(b[0].options,function(b){b.selected&&c.push(d.parse(a,b.value))});return c},set:function(c){var e={};be(c,function(b){e[d.format(a,b)]=!0}),be(b[0].options,function(a){a.selected=e[a.value]})}}}function eg(a,b){var c=b[0];return{get:function(){return c.checked?c.value:null},set:function(a){c.checked=a==c.value}}}function ef(a,b){var c=b[0],d=c.value;return{get:function(){return!!c.checked},set:function(a){c.checked=bO(a)}}}function ee(a,b){function n(){var c=by(b.val());if(b[0].disabled||b[0].readOnly)bL(b,G,null),m.markValid(b);else{var e,f=bi(a,{$element:b});e=k&&!c?"Required":c?d(f,c):null,bL(b,G,e),j=e,e?m.markInvalid(b):m.markValid(b)}}var c=b.attr("ng:validate")||H,d=ec(c),e=b.attr("ng:required"),f=b.attr("ng:format")||H,g=ed(f),h,i,j,k,m=a.$service("$invalidWidgets")||{markValid:bj,markInvalid:bj};if(!d)throw"Validator named '"+c+"' not found.";h=g.format,i=g.parse,e?a.$watch(e,function(a){k=a,n()}):k=e==="",b.data(l,n);return{get:function(){j&&bL(b,G,null);try{var c=i(a,b.val());n();return c}catch(d){j=d,bL(b,G,d)}},set:function(c){var d=b.val(),e=h(a,c);d!=e&&b.val(e||""),n()}}}function ed(a){return cC(a).formatter()()}function ec(a){return cC(a).validator()()}function eb(a,b){var c=ea(a,b),d=b.attr("ng:format")||H,e=ed(d);if(c)return{get:function(){return e.format(a,c.get())},set:function(b){return c.set(e.parse(a,b))}}}function ea(a,b){var d=b.attr("name"),e;if(d){e=cC(d).assignable().assign;if(!e)throw new M("Expression '"+d+"' is not assignable.");return{get:function(){return a.$eval(d)},set:function(d){if(d!==c)return a.$tryEval(function(){e(a,d)},b)}}}}function dZ(a){return a.length>1||dY(a[0])!==null}function dY(a){var b=a.replace(/\n/gm," ").match(/^\{\{(.*)\}\}$/);return b?b[1]:null}function dX(a){var b=[],c=0,d;while((d=a.indexOf("{{",c))>-1)c<d&&b.push(a.substr(c,d-c)),c=d,d=a.indexOf("}}",d),d=d<0?a.length:d+2,b.push(a.substr(c,d-c)),c=d;c!=a.length&&b.push(a.substr(c,a.length-c));return b.length===0?[a]:b}function dW(a){return function(b,c){var d=c[0].className+" ";return function(c){this.$onEval(function(){if(a(this.$index)){var e=this.$eval(b);bt(e)&&(e=e.join(" ")),c[0].className=by(d+e)}},c)}}}function dU(a){var b=dT[a];if(!b){var d=[];be(dX(a),function(a){var b=dY(a);d.push(b?function(a){var c,d=this.$tryEval(b,function(a){c=b_(a)});bL(a,F,c);return c?c:d}:function(){return a})}),dT[a]=b=function(a,b){var e=[],f=this,g=this.hasOwnProperty(i)?f.$element:c;f.$element=a;for(var h=0;h<d.length;h++){var j=d[h].call(f,a);bz(j)?j="":bp(j)&&(j=b_(j,b)),e.push(j)}f.$element=g;return e.join("")}}return b}function dS(a){function d(){c=!1,b.$eval()}var b=this,c;return a.isMock?d:function(){c||(c=!0,a.defer(d,dS.delay))}}function dL(a){return bo(a)&&a!==null?""+a:a}function dK(a,b){return{format:a,parse:b||a}}function dG(a,b,c,d){return function(e){var f=e["get"+a]();if(c>0||f>-c)f+=c;f===0&&c==-12&&(f=12);return dF(f,b,d)}}function dF(a,b,c){var d="";a<0&&(d="-",a=-a),a=""+a;while(a.length<b)a="0"+a;c&&(a=a.substr(a.length-b));return d+a}function dE(a,b){T[a]=T[a]||{},be(b,function(b){bh(T[a],b)})}function du(a,b){if(b){b=!b.nodeName&&bo(b.length)&&!bv(b)?b:[b];for(var c=0;c<b.length;c++)a.push(b[c])}}function dt(a,b){dr(a,b)||(a.className=by(a.className+" "+b))}function ds(a,b){a.className=by((" "+a.className+" ").replace(/[\n\t]/g," ").replace(" "+b+" ",""))}function dr(a,b,c){var d=" "+b+" ";return(" "+a.className+" ").replace(/[\n\t]/g," ").indexOf(d)>-1}function dq(a,b,c){var d=a[de],e=dd[d||-1];if(bo(c))e||(a[de]=d=di(),e=dd[d]={}),e[b]=c;else return e?e[b]:null}function dp(a){var b=a[de],d=dd[b];d&&(be(d.bind||{},function(b,c){dh(a,c,b)}),delete dd[b],a[de]=c)}function dn(a){dp(a);for(var b=0,c=a.childNodes||[];b<c.length;b++)dn(c[b])}function dm(a){return a.cloneNode(!0)}function dl(a){if(a instanceof dl)return a;if(bq(a)){var c=b.createElement("div");c.innerHTML="<div>&nbsp;</div>"+a,c.removeChild(c.firstChild),du(this,c.childNodes),this.remove()}else du(this,a)}function dk(a){if(bq(a)&&a.charAt(0)!="<")throw new M("selectors not implemented");return new dl(a)}function dj(a){var b={},c=a[0].style,d,e,f;if(typeof c.length=="number")for(f=0;f<c.length;f++)e=c[f],b[e]=c[e];else for(e in c)d=c[e],1*e!=e&&e!="cssText"&&d&&typeof d=="string"&&d!="false"&&(b[e]=d);return b}function di(){return df++}function dc(a){var b=!1,c=bN(a,a.push);return{start:function(a,e,f){a=d(a),!b&&cV[a]&&(b=a),!b&&cW[a]==!0&&(c("<"),c(a),be(e,function(a,b){var e=d(b);cY[e]==!0&&(cX[e]!==!0||a.match(cP))&&(c(" "),c(b),c('="'),c(db(a)),c('"'))}),c(f?"/>":">"))},end:function(a){a=d(a),!b&&cW[a]==!0&&(c("</"),c(a),c(">")),a==b&&(b=!1)},chars:function(a){b||c(db(a))}}}function db(a){return a.replace(/&/g,"&amp;").replace(cQ,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(a){c_.innerHTML=a.replace(/</g,"&lt;");return c_.innerText||c_.textContent||""}function c$(a){var b={},c=a.split(","),d;for(d=0;d<c.length;d++)b[c[d]]=!0;return b}function cZ(a,b){function k(a,c){var e=0,f;c=d(c);if(c)for(e=g.length-1;e>=0;e--)if(g[e]==c)break;if(e>=0){for(f=g.length-1;f>=e;f--)b.end&&b.end(g[f]);g.length=e}}function j(a,c,e,f){c=d(c);if(cS[c])while(g.last()&&cT[g.last()])k("",g.last());cU[c]&&g.last()==c&&k("",c),f=cR[c]||!!f,f||g.push(c);var h={};e.replace(cK,function(a,b,c,d,e){var f=c||d||e||"";h[b]=da(f)}),b.start&&b.start(c,h,f)}var c,e,f,g=[],h=a;g.last=function(){return g[g.length-1]};while(a){e=!0;if(g.last()&&cV[g.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+g.last()+"[^>]*>","i"),function(a,c){c=c.replace(cN,"$1").replace(cO,"$1"),b.chars&&b.chars(da(c));return""}),k("",g.last());else{a.indexOf("<!--")===0?(c=a.indexOf("-->"),c>=0&&(b.comment&&b.comment(a.substring(4,c)),a=a.substring(c+3),e=!1)):cM.test(a)?(f=a.match(cJ),f&&(a=a.substring(f[0].length),f[0].replace(cJ,k),e=!1)):cL.test(a)&&(f=a.match(cI),f&&(a=a.substring(f[0].length),f[0].replace(cI,j),e=!1));if(e){c=a.indexOf("<");var i=c<0?a:a.substring(0,c);a=c<0?"":a.substring(c),b.chars&&b.chars(da(i))}}if(a==h)throw"Parse Error: "+a;h=a}k()}function cH(a,b,e,f,g){function n(a){try{a.apply(null,Q.call(arguments,1))}finally{l--;if(l===0)while(m.length)try{m.pop()()}catch(b){g.error(b)}}}var h=this,i=a.location,j=a.setTimeout;h.isMock=!1;var k=0,l=0,m=[];h.xhr=function(b,g,h,i,j){l++;if(d(b)=="json"){var m=("angular_"+Math.random()+"_"+k++).replace(/\d\./,""),o=O("<script>").attr({type:"text/javascript",src:g.replace("JSON_CALLBACK",m)});a[m]=function(b){a[m]=c,o.remove(),n(i,200,b)},e.append(o)}else{var p=new f;p.open(b,g,!0),be(bh(cG,j||{}),function(a,b){a&&p.setRequestHeader(b,a)}),p.onreadystatechange=function(){p.readyState==4&&n(i,p.status||200,p.responseText)},p.send(h||"")}},h.notifyWhenNoOutstandingRequests=function(a){l===0?a():m.push(a)};var o=[];h.poll=function(){be(o,function(a){a()})},h.addPollFn=function(a){o.push(a);return a},h.startPoller=function(a,b){(function c(){h.poll(),b(c,a)})()},h.setUrl=function(a){var b=i.href;b.match(/#/)||(b+="#"),a.match(/#/)||(a+="#"),i.href=a},h.getUrl=function(){return i.href},h.onHashChange=function(b){if("onhashchange"in a)O(a).bind("hashchange",b);else{var c=h.getUrl();h.addPollFn(function(){c!=h.getUrl()&&(b(),c=h.getUrl())})}return b};var p=b[0],q={},r="";h.cookies=function(a,b){var d,e,f,h,i,j;if(a)b===c?p.cookie=escape(a)+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT":bq(b)&&(p.cookie=escape(a)+"="+escape(b),d=a.length+b.length+1,d>4096&&g.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"),q.length>20&&g.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+q.length+" > 20 )"));else{if(p.cookie!==r){r=p.cookie,e=r.split("; "),q={};for(h=0;h<e.length;h++)f=e[h],j=f.indexOf("="),j>0&&(q[unescape(f.substring(0,j))]=unescape(f.substring(j+1)))}return q}},h.defer=function(a,b){l++,j(function(){n(a)},b||0)};var s=bj;h.hover=function(a){s=a},h.bind=function(){b.bind("mouseover",function(a){s(O(N?a.srcElement:a.target),!0);return!0}),b.bind("mouseleave mouseout click dblclick keypress keyup",function(a){s(O(a.target),!1);return!0})},h.addCss=function(a){var b=O(p.createElement("link"));b.attr("rel","stylesheet"),b.attr("type","text/css"),b.attr("href",a),e.append(b)},h.addJs=function(a,b){var c=O(p.createElement("script"));c.attr("type","text/javascript"),c.attr("src",a),b&&c.attr("id",b),e.append(c)}}function cE(a){this.xhr=a}function cD(a,b){this.template=a=a+"#",this.defaults=b||{};var c=this.urlParams={};be(a.split(/\W/),function(b){b&&a.match(new RegExp(":"+b+"\\W"))&&(c[b]=!0)})}function cC(a,b){function V(){var a=q().text;r(":");var b;o().text=="{"?(r("{"),b=x(),r("}")):b=D();return function(c){return{name:a,fn:b}}}function U(){var a=[];while(v())a.push(V()),q(";")||w();w();return function(b){for(var c=0;c<a.length;c++){var d=a[c](b);b.addListener(d.name,d.fn)}}}function T(){var a=[];if(o().text!="}")do{var b=q(),c=b.string||b.text;r(":");var d=D();a.push({key:c,value:d})}while(q(","));r("}");return function(b){var c={};for(var d=0;d<a.length;d++){var e=a[d],f=e.value(b);c[e.key]=f}return c}}function S(){var a=[];if(o().text!="]")do a.push(D());while(q(","));r("]");return function(b){var c=[];for(var d=0;d<a.length;d++)c.push(a[d](b));return c}}function R(a){var b=[];if(o().text!=")")do b.push(D());while(q(","));r(")");return function(c){var d=[];for(var e=0;e<b.length;e++)d.push(b[e](c));var f=a(c)||bj;return f.apply?f.apply(c,d):f(d[0],d[1],d[2],d[3],d[4])}}function Q(a){var b=D();r("]");return bh(function(d){var e=a(d),f=b(d);return e?e[f]:c},{assign:function(c,d){return a(c)[b(c)]=d}})}function P(a){var b=q().text,c=cm(b);return bh(function(b){return c(a(b))},{assign:function(c,d){return ch(a(c),b,d)}})}function O(){var a;if(q("(")){var b=k();r(")"),a=b}else if(q("["))a=S();else if(q("{"))a=T();else{var c=q();a=c.fn,a||n("not a primary expression",c)}var d;while(d=q("(","[","."))d.text==="("?a=h(a):d.text==="["?a=j(a):d.text==="."?a=i(a):n("IMPOSSIBLE");return a}function N(a){var b=q(),c=b.text.split("."),d=a,e;for(var f=0;f<c.length;f++)e=c[f],d&&(d=d[e]);typeof d!=t&&n("should be a function",b);return d}function L(){var a;return q("+")?O():(a=q("-"))?u(d,a.fn,L()):(a=q("!"))?s(a.fn,L()):O()}function K(){var a=L(),b;while(b=q("*","/","%"))a=u(a,b.fn,L());return a}function J(){var a=K(),b;while(b=q("+","-"))a=u(a,b.fn,K());return a}function I(){var a=J(),b;if(b=q("<",">","<=",">="))a=u(a,b.fn,I());return a}function H(){var a=I(),b;if(b=q("==","!="))a=u(a,b.fn,H());return a}function G(){var a=H(),b;if(b=q("&&"))a=u(a,b.fn,G());return a}function F(){var a=G(),b;while(!0)if(b=q("||"))a=u(a,b.fn,G());else return a}function E(){var b=F(),c,d;if(d=q("=")){b.assign||n("implies assignment but ["+a.substring(0,d.index)+"] can not be assigned to",d),c=F();return function(a){return b.assign(a,c(a))}}return b}function D(){return f()}function C(a){var b=l(a),c=[],d;while(!0)if(d=q(":"))c.push(D());else{var e=function(a,d){var e=[d];for(var f=0;f<c.length;f++)e.push(c[f](a));return b.apply(a,e)};return function(){return e}}}function B(){function d(a){return function(b,d){var e=[d];for(var f=0;f<c.length;f++)e.push(c[f](b));return a.apply(b,e)}}var a=q(),b=$[a.text],c=[];b||n("is not a valid formatter.",a);while(!0)if(a=q(":"))c.push(D());else return bl({format:d(b.format),parse:d(b.parse)})}function A(){return m(Y)}function z(){return m(Z)}function y(){var a=D(),b;while(!0)if(b=q("|"))a=u(a,b.fn,z());else return a}function x(){var a=[];while(!0){e.length>0&&!p("}",")",";","]")&&a.push(k());if(!q(";"))return function(b){var c;for(var d=0;d<a.length;d++){var e=a[d];e&&(c=e(b))}return c}}}function w(){e.length!==0&&n("is extra token not part of expression",e[0])}function v(){return e.length>0}function u(a,b,c){return function(d){return b(d,a(d),c(d))}}function s(a,b){return function(c){return a(c,b(c))}}function r(a){q(a)||n("is unexpected, expecting ["+a+"]",p())}function q(a,c,d,f){var g=p(a,c,d,f);if(g){b&&!g.json&&(index=g.index,n("is not valid json",g)),e.shift(),this.currentToken=g;return g}return!1}function p(a,b,c,d){if(e.length>0){var f=e[0],g=f.text;if(g==a||g==b||g==c||g==d||!a&&!b&&!c&&!d)return f}return!1}function o(){if(e.length===0)throw M("Unexpected end of expression: "+a);return e[0]}function n(b,c){throw M("Parse Error: Token '"+c.text+"' "+b+" at column "+(c.index+1)+" of expression ["+a+"] starting at ["+a.substring(c.index)+"].")}var d=bl(0),e=cB(a,b),f=E,g=F,h=R,i=P,j=Q,k=y,l=N,m=C;b&&(f=F,h=i=j=g=k=l=m=function(){n("is not valid json",{text:a,index:0})});return{assertAllConsumed:w,assignable:g,primary:O,statements:x,validator:A,formatter:B,filter:z,watch:U}}function cB(a,b){function x(b){var d=g;g++;var f="",h=b,i=!1;while(g<a.length){var j=a.charAt(g);h+=j;if(i){if(j=="u"){var k=a.substring(g+1,g+5);k.match(/[\da-f]{4}/i)||u("Invalid unicode escape [\\u"+k+"]"),g+=4,f+=String.fromCharCode(parseInt(k,16))}else{var l=cA[j];l?f+=l:f+=j}i=!1}else if(j=="\\")i=!0;else{if(j==b){g++,e.push({index:d,text:h,string:f,json:!0,fn:function(){return f.length==c?T.String.toDate(f):f}});return}f+=j}g++}u("Unterminated quote",d)}function w(){var b="",c=g,d;while(g<a.length){var f=a.charAt(g);if(f=="."||s(f)||q(f))b+=f;else break;g++}d=cz[b],e.push({index:c,text:b,json:d,fn:d||bh(cm(b),{assign:function(a,c){return ch(a,b,c)}})})}function v(){var b="",c=g;while(g<a.length){var f=d(a.charAt(g));if(f=="."||q(f))b+=f;else{var h=p();if(f=="e"&&t(h))b+=f;else if(t(f)&&h&&q(h)&&b.charAt(b.length-1)=="e")b+=f;else{if(!t(f)||h&&q(h)||b.charAt(b.length-1)!="e")break;u("Invalid exponent")}}g++}b=1*b,e.push({index:c,text:b,json:!0,fn:function(){return b}})}function u(b,c,d){d=d||g;throw M("Lexer Error: "+b+" at column"+(bo(c)?"s "+c+"-"+g+" ["+a.substring(c,d)+"]":" "+d)+" in expression ["+a+"].")}function t(a){return a=="-"||a=="+"||q(a)}function s(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function r(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a==""||a==" "}function q(a){return"0"<=a&&a<="9"}function p(){return g+1<a.length?a.charAt(g+1):!1}function o(a){return a.indexOf(j)!=-1}function n(a){return a.indexOf(i)!=-1}var c=b?bd:-1,e=[],f,g=0,h=[],i,j=":";while(g<a.length){i=a.charAt(g);if(n("\"'"))x(i);else if(q(i)||n(".")&&q(p()))v();else if(s(i))w(),o("{,")&&h[0]=="{"&&(f=e[e.length-1])&&(f.json=f.text.indexOf(".")==-1);else if(n("(){}[].,;:"))e.push({index:g,text:i,json:o(":[,")&&n("{[")||n("}]:,")}),n("{[")&&h.unshift(i),n("}]")&&h.shift(),g++;else{if(r(i)){g++;continue}var k=i+p(),l=cz[i],m=cz[k];m?(e.push({index:g,text:k,fn:m}),g+=2):l?(e.push({index:g,text:i,fn:l,json:o("[,:")&&n("+-")}),g+=1):u("Unexpected next character ",g,g+1)}j=i}return e}function cy(a){bZ(a);if(!a.$inject){var b=a.$inject=[],c=a.toString().replace(cx,""),d=c.match(cu);be(d[1].split(cv),function(a){a.replace(cw,function(a,c,d,e,f){bY(b,c,"after non-injectable arg"),e||f?b.push(d):b=null})})}return a.$inject}function ct(a,b,c,d){_(a,b,{$inject:c,$eager:d})}function cs(a){return cr(["$updateView"],a)}function cr(a,b){return bh(b,{$inject:a})}function cq(a,b,c){b=b||_,c=c||{},a=a||{};return function d(e,f,g){var h,i;if(bq(e)){if(!(e in c)){i=b[e];if(!i)throw"Unknown provider for '"+e+"'.";c[e]=d(i,a)}h=c[e]}else bt(e)?(h=[],be(e,function(a){h.push(d(a))})):bu(e)?(h=d(cy(e)),h=e.apply(f,bM(h,arguments,2))):bp(e)?be(b,function(a,b){a.$eager&&d(b);if(a.$creation)throw new M("Failed to register service '"+b+"': $creation property is unsupported. Use $eager:true or see release notes.")}):h=d(a);return h}}function cp(a,b,c){function d(){}a=d.prototype=a||{};var e=new d,f={sorted:[]},g,h;bh(e,{"this":e,$id:ci++,$parent:a,$bind:bN(e,bN,e),$get:bN(e,cg,e),$set:bN(e,ch,e),$eval:function(a){var b=typeof a,c,d,g,h,i,j;if(b==E)for(c=0,d=f.sorted.length;c<d;c++)for(i=f.sorted[c],h=i.length,g=0;g<h;g++)e.$tryEval(i[g].fn,i[g].handler);else{if(b===t)return a.call(e);if(b==="string")return cn(a).call(e)}},$tryEval:function(a,b){var c=typeof a;try{if(c==t)return a.call(e);if(c=="string")return cn(a).call(e)}catch(d){g&&g.error(d),bu(b)?b(d):b?co(b,d):bu(h)&&h(d)}},$watch:function(a,b,c,d){function h(a){var d=f.call(e),h=g;if(a||h!==d)g=d,e.$tryEval(function(){return b.call(e,d,h)},c)}var f=cn(a),g=f.call(e);b=cn(b),e.$onEval(J,h),bn(d)&&(d=!0),d&&h(!0)},$onEval:function(a,b,c){br(a)||(c=b,b=a,a=0);var d=f[a];d||(d=f[a]=[],d.priority=a,f.sorted.push(d),f.sorted.sort(function(a,b){return a.priority-b.priority})),d.push({fn:cn(b),handler:c})},$become:function(a){bu(a)&&(e.constructor=a,be(a.prototype,function(a,b){e[b]=bN(e,a)}),e.$service.apply(e,bM([a,e],arguments,1)),bu(a.prototype.init)&&e.init())},$new:function(a){var b=cp(e);b.$become.apply(e,bM([a],arguments,1)),e.$onEval(b.$eval);return b}}),a.$root||(e.$root=e,e.$parent=e,(e.$service=cq(e,b,c))()),g=e.$service("$log"),h=e.$service("$exceptionHandler");return e}function co(a,b){bL(a,F,bo(b)?bg(b):b)}function cn(a){if(typeof a===t)return a;var b=ck[a];if(!b){var c=cC(a),d=c.statements();c.assertAllConsumed(),b=ck[a]=bh(function(){return d(this)},{fnSelf:d})}return b}function cm(a){var b=cj[a];if(b)return b;var c="var l, fn, t;\n";be(a.split("."),function(a){a=cl[a]?'["'+a+'"]':"."+a,c+="if(!s) return s;\nl=s;\ns=s"+a+';\nif(typeof s=="function" && !(s instanceof RegExp)) s = function(){ return l'+a+".apply(l, arguments); };\n";if(a.charAt(1)=="$"){var b=a.substr(2);c+='if(!s) {\n  t = angular.Global.typeOf(l);\n  fn = (angular[t.charAt(0).toUpperCase() + t.substring(1)]||{})["'+b+'"];\n  if (fn) s = function(){ return fn.apply(l, [l].concat(Array.prototype.slice.call(arguments, 0, arguments.length))); };\n}\n'}}),c+="return s;",b=Function("s",c),b.toString=function(){return c};return cj[a]=b}function ch(a,b,c){var d=b.split(".");for(var e=0;d.length>1;e++){var f=d.shift(),g=a[f];g||(g={},a[f]=g),a=g}a[d.shift()]=c;return c}function cg(a,b,d){if(!b)return a;var e=b.split("."),f,g=a,h=e.length;for(var i=0;i<h;i++){f=e[i];if(!f.match(/^[\$\w][\$\w\d]*$/))throw"Expression '"+b+"' is not a valid expression for accesing variables.";a&&(g=a,a=a[f]);if(bn(a)&&f.charAt(0)=="$"){var j=T.Global.typeOf(g);j=T[j.charAt(0).toUpperCase()+j.substring(1)];var k=j?j[[f.substring(1)]]:c;if(k){a=bN(g,k,g);return a}}}if(!d&&bu(a))return bN(g,a);return a}function cf(a,b){var c,d=a[0].attributes||[],e,f,g,h,i={};for(c=0;c<d.length;c++)f=d[c],g=f.name,h=f.value,N&&g=="href"&&(h=decodeURIComponent(a[0].getAttribute(g,2))),i[g]=h;bf(i,b)}function ce(a,b){var c,d=a[0].childNodes||[],e;for(c=0;c<d.length;c++)bx(e=d[c])||b(O(e),c)}function cd(a,b,c,d){this.markup=a,this.attrMarkup=b,this.directives=c,this.widgets=d}function cc(a){this.paths=[],this.children=[],this.inits=[],this.priority=a,this.newScope=!1}function cb(d,e,f,g){if(bp(e)){if(e===a){d.push("WINDOW");return}if(e===b){d.push("DOCUMENT");return}if(bE(g,e)){d.push("RECURSION");return}g.push(e)}if(e===null)d.push(y);else if(e instanceof RegExp)d.push(T.String.quoteUnicode(e.toString()));else{if(bu(e))return;if(bw(e))d.push(""+e);else if(br(e))isNaN(e)?d.push(y):d.push(""+e);else{if(bq(e))return d.push(T.String.quoteUnicode(e));if(bp(e))if(bt(e)){d.push("[");var h=e.length,i=!1;for(var j=0;j<h;j++){var k=e[j];i&&d.push(","),k instanceof RegExp||!bu(k)&&!bn(k)?cb(d,k,f,g):d.push(y),i=!0}d.push("]")}else if(bs(e))d.push(T.String.quoteUnicode(T.Date.toString(e)));else{d.push("{"),f&&d.push(f);var l=!1,m=f?f+"  ":!1,n=[];for(var o in e){if(e[o]===c)continue;n.push(o)}n.sort();for(var p=0;p<n.length;p++){var q=n[p],r=e[q];typeof r!=t&&(l&&(d.push(","),f&&d.push(f)),d.push(T.String.quote(q)),d.push(":"),cb(d,r,m,g),l=!0)}d.push("}")}}}bp(e)&&g.pop()}function ca(b,c){function h(a){if(bq(a)&&a.length===bd)return dB.toDate(a);(bt(a)||bp(a))&&be(a,function(b,c){a[c]=h(b)});return a}if(!bq(b))return b;var d,e,f;try{if(c&&a.JSON&&a.JSON.parse){d=JSON.parse(b);return h(d)}e=cC(b,!0),f=e.primary(),e.assertAllConsumed();return f()}catch(g){S("fromJson error: ",b,g);throw g}}function b_(a,b){var c=[];cb(c,a,b?"\n  ":null,[]);return c.join("")}function bZ(a,b){bY(bu(a,b,"not a function"))}function bY(b,c,d){if(!b){var e=new M("Argument '"+(c||"?")+"' is "+(d||"required"));a.console&&a.console.log(e.stack);throw e}}function bX(){P=a.jQuery,P?(O=P,bh(P.fn,{scope:dv.scope})):O=dk,T.element=O}function bW(a,b){bX();var c=a.getElementsByTagName("script"),d;b=bh({ie_compat_id:"ng-ie-compat"},b);for(var e=0;e<c.length;e++)d=(c[e].src||"").match(bc),d&&(b.base_url=d[1],b.ie_compat=d[1]+"angular-ie-compat"+(d[2]||"")+".js",bh(b,bR(d[6])),cf(O(c[e]),function(a,c){/^ng:/.exec(c)&&(c=c.substring(3).replace(/-/g,"_"),a=a||!0,b[c]=a)}));return b}function bV(a,b){var c=a.autobind;if(c){var d=bq(c)?b.getElementById(c):b,e=bQ(d)(cp({$config:a})),f=e.$service("$browser");a.css?f.addCss(a.base_url+a.css):N<8&&f.addJs(a.base_url+a.ie_compat,a.ie_compat_id)}}function bU(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(b?null:/%20/g,"+")}function bT(a){return bU(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function bS(a){var b=[];be(a,function(a,c){b.push(escape(c)+(a===!0?"":"="+escape(a)))});return b.length?b.join("&"):""}function bR(a){var b={},c,d;be((a||"").split("&"),function(a){a&&(c=a.split("="),d=unescape(c[0]),b[d]=bo(c[1])?unescape(c[1]):!0)});return b}function bQ(a){return(new cd(U,V,W,X)).compile(a)}function bP(a,b){for(var c in a){var d=b[c],e=typeof d;e==E?b[c]=ca(b_(a[c])):e=="object"&&d.constructor!=b$&&c.substring(0,1)!="$"&&bP(a[c],d)}}function bO(a){if(a&&a.length!==0){var b=d(""+a);a=b!="f"&&b!="0"&&b!="false"&&b!="no"&&b!="n"&&b!="[]"}else a=!1;return a}function bN(a,b){var c=arguments.length>2?Q.call(arguments,2,arguments.length):[];return typeof b!=t||b instanceof RegExp?b:c.length?function(){return arguments.length?b.apply(a,c.concat(Q.call(arguments,0,arguments.length))):b.apply(a,c)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function bM(a,b,c){return a.concat(Q.call(b,c,b.length))}function bL(a,b,c){var d;while(!bK(a)){d=a.parent();if(d.length)a=a.parent();else return}a[0].$NG_ERROR!==c&&(a[0].$NG_ERROR=c,c?(a.addClass(b),a.attr(b,c.message||c)):(a.removeClass(b),a.removeAttr(b)))}function bK(a){var b=a&&a[0]&&a[0].nodeName;return b&&b.charAt(0)!="#"&&!bE(["TR","COL","COLGROUP","TBODY","THEAD","TFOOT"],b)}function bJ(a,b){bG(a)?N?a.innerText=b:a.textContent=b:a.innerHTML=b}function bI(a,b){if(a==b)return!0;if(a===null||b===null)return!1;var c=typeof a,d=typeof b,e,f,g;if(c==d&&c=="object"){if(!(a instanceof Array)){g={};for(f in a){if(f.charAt(0)!=="$"&&!bu(a[f])&&!bI(a[f],b[f]))return!1;g[f]=!0}for(f in b)if(!g[f]&&f.charAt(0)!=="$"&&!bu(b[f]))return!1;return!0}if((e=a.length)==b.length){for(f=0;f<e;f++)if(!bI(a[f],b[f]))return!1;return!0}}return!1}function bH(a,b){if(b)if(bt(a)){while(b.length)b.pop();for(var c=0;c<a.length;c++)b.push(bH(a[c]))}else{be(b,function(a,c){delete b[c]});for(var d in a)b[d]=bH(a[d])}else b=a,a&&(bt(a)?b=bH(a,[]):bs(a)?b=new Date(a.getTime()):bp(a)&&(b=bH(a,{})));return b}function bG(a){if(a)switch(a.nodeName){case"OPTION":case"PRE":case"TITLE":return!0}return!1}function bF(a,b){for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1}function bE(a,b){for(var c=0;c<a.length;c++)if(b===a[c])return!0;return!1}function bD(a,b){var c=0,d;if(bt(a)||bq(a))return a.length;if(bp(a))for(d in a)(!b||a.hasOwnProperty(d))&&c++;return c}function bC(a,b,c){var d=[];be(a,function(a,e,f){d.push(b.call(c,a,e,f))});return d}function bB(a){var b=a[0].getBoundingClientRect(),c=b.width||(b.right||0-b.left||0),d=b.height||(b.bottom||0-b.top||0);return c>0&&d>0}function bA(a,b){this.html=a,this.get=d(b)=="unsafe"?bl(a):function c(){var b=[];cZ(a,dc(b));return b.join("")}}function bz(a){return a&&(a.nodeName||a.bind&&a.find)}function by(a){return bq(a)?a.replace(/^\s*/,"").replace(/\s*$/,""):a}function bx(a){return bb(a)=="#text"}function bw(a){return typeof a==o}function bv(a){return a&&a.document&&a.location&&a.alert&&a.setInterval}function bu(a){return typeof a==t}function bt(a){return a instanceof Array}function bs(a){return a instanceof Date}function br(a){return typeof a==z}function bq(a){return typeof a==B}function bp(a){return a!=null&&typeof a==A}function bo(a){return typeof a!=E}function bn(a){return typeof a==E}function bm(a,b,c){var d;return a[b]||(d=a[b]=function(a,b,e){a=(c||bk)(a),bo(b)&&(d[a]=bh(b,e||{}));return d[a]})}function bl(a){return function(){return a}}function bk(a){return a}function bj(){}function bi(a,b){return bh(new(bh(function(){},{prototype:a})),b)}function bh(a){be(arguments,function(b){b!==a&&be(b,function(b,c){a[c]=b})});return a}function bg(a){a instanceof M&&(a.stack?a=a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function bf(a,b,c){var d=[];for(var e in a)d.push(e);d.sort();for(var f=0;f<d.length;f++)b.call(c,a[d[f]],d[f]);return d}function be(a,b,c){var d;if(a)if(bu(a))for(d in a)d!="prototype"&&d!=u&&d!=v&&a.hasOwnProperty(d)&&b.call(c,a[d],d);else if(a.forEach&&a.forEach!==be)a.forEach(b,c);else if(bp(a)&&br(a.length))for(d=0;d<a.length;d++)b.call(c,a[d],d);else for(d in a)b.call(c,a[d],d);return a}function h(a){return String.fromCharCode(a)}typeof b.getAttribute==E&&(b.getAttribute=function(){});var d=function(a){return bq(a)?a.toLowerCase():a},e=function(a){return bq(a)?a.toUpperCase():a},f=function(a){return bq(a)?a.replace(/[A-Z]/g,function(a){return h(a.charCodeAt(0)|32)}):a},g=function(a){return bq(a)?a.replace(/[a-z]/g,function(a){return h(a.charCodeAt(0)&~32)}):a};"i"!=="I".toLowerCase()&&(d=f,e=g);var i="$element",j="$update",k="$scope",l="$validate",m="angular",n="array",o="boolean",p="console",q="date",r="display",s="element",t="function",u="length",v="name",w="none",x="noop",y="null",z="number",A="object",B="string",C="value",D="selected",E="undefined",F="ng-exception",G="ng-validation-error",H="noop",I=-99999,J=-1e3,K=99999,L={FIRST:I,LAST:K,WATCH:J},M=a.Error,N=parseInt((/msie (\d+)/.exec(d(navigator.userAgent))||[])[1],10),O,P,Q=[].slice,R=[].push,S=a[p]?bN(a[p],a[p].error||bj):bj,T=a[m]||(a[m]={}),U=bm(T,"markup"),V=bm(T,"attrMarkup"),W=bm(T,"directive"),X=bm(T,"widget",d),Y=bm(T,"validator"),Z=bm(T,"filter"),$=bm(T,"formatter"),_=bm(T,"service"),ba=bm(T,"callbacks"),bb,bc=/^(|.*\/)angular(-.*?)?(\.min)?.js(\?[^#]*)?(#(.*))?$/,bd=24;N<9?bb=function(a){a=a.nodeName?a:a[0];return a.scopeName&&a.scopeName!="HTML"?e(a.scopeName+":"+a.nodeName):a.nodeName}:bb=function(a){return a.nodeName?a.nodeName:a[0].nodeName};var b$=[].constructor;T.toJson=b_,T.fromJson=ca,cc.prototype={attach:function(a,b){var c={};this.collectInits(a,c,b),bf(c,function(a){be(a,function(a){a()})})},collectInits:function(a,b,c){var d=b[this.priority],e=c;d||(b[this.priority]=d=[]),this.newScope&&(e=cp(c),c.$onEval(e.$eval),a.data(k,e)),be(this.inits,function(b){d.push(function(){e.$tryEval(function(){return e.$service(b,e,a)},a)})});var f,g=a[0].childNodes,h=this.children,i=this.paths,j=i.length;for(f=0;f<j;f++)h[f].collectInits(O(g[i[f]]),b,e)},addInit:function(a){a&&this.inits.push(a)},addChild:function(a,b){b&&(this.paths.push(a),this.children.push(b))},empty:function(){return this.inits.length===0&&this.paths.length===0}},cd.prototype={compile:function(a){a=O(a);var b=0,c,d=a.parent();if(d&&d[0]){d=d[0];for(var e=0;e<d.childNodes.length;e++)d.childNodes[e]==a[0]&&(b=e)}c=this.templatize(a,b,0)||new cc;return function(b,d){var e=d?dv.clone.call(a):a;b=b||cp(),e.data(k,b),b.$element=e,(d||bj)(e,b),c.attach(e,b),b.$eval();return b}},templatize:function(a,b,c){var f=this,g,h,i=f.directives,j=!0,k=!0,l=bb(a),m=l.indexOf(":")>0?d(l).replace(":","-"):"",n,o={compile:bN(f,f.compile),descend:function(a){bo(a)&&(j=a);return j},directives:function(a){bo(a)&&(k=a);return k},scope:function(a){bo(a)&&(n.newScope=n.newScope||a);return n.newScope}};try{c=a.attr("ng:eval-order")||c||0}catch(p){c=c||0}a.addClass(m),bq(c)&&(c=L[e(c)]||parseInt(c,10)),n=new cc(c),cf(a,function(b,c){if(!g)if(g=f.widgets("@"+c))a.addClass("ng-attr-widget"),g=bN(o,g,b,a)});if(!g)if(g=f.widgets(l))m&&a.addClass("ng-widget"),g=bN(o,g,a);if(g){j=!1,k=!1;var q=a.parent();n.addInit(g.call(o,a)),q&&q[0]&&(a=O(q[0].childNodes[b]))}if(j)for(var r=0,s=a[0].childNodes;r<s.length;r++)bx(s[r])&&be(f.markup,function(b){if(r<s.length){var c=O(s[r]);b.call(o,c.text(),c,a)}});k&&(cf(a,function(b,c){be(f.attrMarkup,function(d){d.call(o,b,c,a)})}),cf(a,function(b,c){h=i[c],h&&(a.addClass("ng-directive"),n.addInit(i[c].call(o,b,a)))})),j&&ce(a,function(a,b){n.addChild(b,f.templatize(a,b,c))});return n.empty()?null:n}};var ci=0,cj={},ck={},cl={};be("abstract,boolean,break,byte,case,catch,char,class,const,continue,debugger,default,delete,do,double,else,enum,export,extends,false,final,finally,float,for,function,goto,if,implements,import,ininstanceof,intinterface,long,native,new,null,package,private,protected,public,return,short,static,super,switch,synchronized,this,throw,throws,transient,true,try,typeof,var,volatile,void,undefined,while,with".split(/,/),function(a){cl[a]=!0});var cu=/^function\s*[^\(]*\(([^\)]*)\)/,cv=/,/,cw=/^\s*(((\$?).+?)(_?))\s*$/,cx=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,cz={"null":function(a){return null},"true":function(a){return!0},"false":function(a){return!1},$undefined:bj,"+":function(a,b,c){return(bo(b)?b:0)+(bo(c)?c:0)},"-":function(a,b,c){return(bo(b)?b:0)-(bo(c)?c:0)},"*":function(a,b,c){return b*c},"/":function(a,b,c){return b/c},"%":function(a,b,c){return b%c},"^":function(a,b,c){return b^c},"=":bj,"==":function(a,b,c){return b==c},"!=":function(a,b,c){return b!=c},"<":function(a,b,c){return b<c},">":function(a,b,c){return b>c},"<=":function(a,b,c){return b<=c},">=":function(a,b,c){return b>=c},"&&":function(a,b,c){return b&&c},"||":function(a,b,c){return b||c},"&":function(a,b,c){return b&c},"|":function(a,b,c){return c(a,b)},"!":function(a,b){return!b}},cA={n:"\n",f:"\f",r:"\r",t:"\t",v:"","'":"'",'"':'"'};cD.prototype={url:function(a){var b=this,c=this.template,d;a=a||{},be(this.urlParams,function(e,f){d=bT(a[f]||b.defaults[f]||""),c=c.replace(new RegExp(":"+f+"(\\W)"),d+"$1")}),c=c.replace(/\/?#$/,"");var e=[];bf(a,function(a,c){b.urlParams[c]||e.push(bU(c)+"="+bU(a))}),c=c.replace(/\/*$/,"");return c+(e.length?"?"+e.join("&"):"")}},cE.DEFAULT_ACTIONS={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},cE.prototype={route:function(a,b,d){function h(a){bH(a||{},this)}function g(a){var c={};be(b||{},function(b,d){c[d]=b.charAt&&b.charAt(0)=="@"?cg(a,b.substr(1)):b});return c}var e=this,f=new cD(a);d=bh({},cE.DEFAULT_ACTIONS,d),be(d,function(i,j){var k=i.method=="POST"||i.method=="PUT";h[j]=function(a,b,c){var d={},j,l=bj;switch(arguments.length){case 3:l=c;case 2:if(bu(b))l=b;else{d=a,j=b;break};case 1:bu(a)?l=a:k?j=a:d=a;break;case 0:break;default:throw"Expected between 0-3 arguments [params, data, callback], got "+arguments.length+" arguments."}var m=this instanceof h?this:i.isArray?[]:new h(j);e.xhr(i.method,f.url(bh({},i.params||{},g(j),d)),j,function(a,b,c){if(200<=a&&a<300)b&&(i.isArray?(m.length=0,be(b,function(a){m.push(new h(a))})):bH(b,m)),(l||bj)(m);else throw{status:a,response:b,message:a+": "+b}},i.verifyCache);return m},h.bind=function(c){return e.route(a,bh({},b,c),d)},h.prototype["$"+j]=function(a,b){var d=g(this),e=bj;switch(arguments.length){case 2:d=a,e=b;case 1:typeof a==t?e=a:d=a;case 0:break;default:throw"Expected between 1-2 arguments [params, callback], got "+arguments.length+" arguments."}var f=k?this:c;h[j].call(this,d,f,e)}});return h}};var cF=a.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(b){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(c){}throw new M("This browser does not support XMLHttpRequest.")},cG={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},cI=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,cJ=/^<\s*\/\s*([\w:-]+)[^>]*>/,cK=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,cL=/^</,cM=/^<\s*\//,cN=/<!--(.*?)-->/g,cO=/<!\[CDATA\[(.*?)]]>/g,cP=/^((ftp|https?):\/\/|mailto:|#)/,cQ=/([^\#-~| |!])/g,cR=c$("area,br,col,hr,img"),cS=c$("address,blockquote,center,dd,del,dir,div,dl,dt,hr,ins,li,map,menu,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul"),cT=c$("a,abbr,acronym,b,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var"),cU=c$("colgroup,dd,dt,li,p,td,tfoot,th,thead,tr"),cV=c$("script,style"),cW=bh({},cR,cS,cT,cU),cX=c$("background,href,longdesc,src,usemap"),cY=bh({},cX,c$("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),c_=b.createElement("pre"),dd={},de="ng-"+(new Date).getTime(),df=1,dg=a.document.addEventListener?function(a,b,c){a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent("on"+b,c)},dh=a.document.removeEventListener?function(a,b,c){a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent("on"+b,c)};N&&bh(dl.prototype,{text:function(a){var b=this[0];if(b.nodeType==3){bo(a)&&(b.nodeValue=a);return b.nodeValue}bo(a)&&(b.innerText=a);return b.innerText}});var dv=dl.prototype={ready:function(b){function d(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",d),dk(a).bind("load",d)},toString:function(){var a=[];be(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},length:0,push:R,sort:[].sort,splice:[].splice};be({data:dq,scope:function(a){var b;while(a&&!(b=O(a).data(k)))a=a.parentNode;return b},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:dr,css:function(a,b,c){if(bo(c))a.style[b]=c;else return a.style[b]},attr:function(a,b,c){if(bo(c))a.setAttribute(b,c);else if(a.getAttribute)return a.getAttribute(b,2)},text:bh(N<9?function(a,b){if(a.nodeType==3){if(bn(b))return a.nodeValue;a.nodeValue=b}else{if(bn(b))return a.innerText;a.innerText=b}}:function(a,b){if(bn(b))return a.textContent;a.textContent=b},{$dv:""}),val:function(a,b){if(bn(b))return a.value;a.value=b},html:function(a,b){if(bn(b))return a.innerHTML;for(var c=0,d=a.childNodes;c<d.length;c++)dn(d[c]);a.innerHTML=b}},function(a,b){dl.prototype[b]=function(b,d){var e,f;if((a.length==2?b:d)!==c){for(e=0;e<this.length;e++)a(this[e],b,d);return this}if(bp(b)){for(e=0;e<this.length;e++)for(f in b)a(this[e],f,b[f]);return this}if(this.length)return a(this[0],b,d);return a.$dv}}),be({removeData:dp,dealoc:dn,bind:function(a,b,c){var d=dq(a,"bind"),e;d||dq(a,"bind",d={}),be(b.split(" "),function(b){e=d[b],e||(d[b]=e=function(b){b.preventDefault||(b.preventDefault=function(){b.returnValue=!1}),b.stopPropagation||(b.stopPropagation=function(){b.cancelBubble=!0}),be(e.fns,function(c){c.call(a,b)})},e.fns=[],dg(a,b,e)),e.fns.push(c)})},replaceWith:function(a,b){var c,d=a.parentNode;dn(a),be(new dl(b),function(b){c?d.insertBefore(b,c.nextSibling):d.replaceChild(b,a),c=b})},children:function(a){var b=[];be(a.childNodes,function(a){a.nodeName!="#text"&&b.push(a)});return b},append:function(a,b){be(new dl(b),function(b){a.nodeType===1&&a.appendChild(b)})},remove:function(a){dn(a);var b=a.parentNode;b&&b.removeChild(a)},after:function(a,b){var c=a,d=a.parentNode;be(new dl(b),function(a){d.insertBefore(a,c.nextSibling),c=a})},addClass:dt,removeClass:ds,toggleClass:function(a,b,c){bn(c)&&(c=!dr(a,b)),(c?dt:ds)(a,b)},parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},next:function(a){return a.nextSibling},find:function(a,b){return a.getElementsByTagName(b)},clone:dm},function(a,b){dl.prototype[b]=function(b,d){var e;for(var f=0;f<this.length;f++)e==c?(e=a(this[f],b,d),e!==c&&(e=O(e))):du(e,a(this[f],b,d));return e==c?this:e}});var dw={typeOf:function(a){if(a===null)return y;var b=typeof a;if(b==A){if(a instanceof Array)return n;if(bs(a))return q;if(a.nodeType==1)return s}return b}},dx={copy:bH,size:bD,equals:bI},dy={extend:bh},dz={indexOf:bF,sum:function(a,b){var c=T.Function.compile(b),d=0;for(var e=0;e<a.length;e++){var f=1*c(a[e]);isNaN(f)||(d+=f)}return d},remove:function(a,b){var c=bF(a,b);c>=0&&a.splice(c,1);return b},filter:function(a,b){var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case"boolean":case"number":case"string":return(""+a).toLowerCase().indexOf(b)>-1;case"object":for(var c in a)if(c.charAt(0)!=="$"&&d(a[c],b))return!0;return!1;case"array":for(var e=0;e<a.length;e++)if(d(a[e],b))return!0;return!1;default:return!1}};switch(typeof b){case"boolean":case"number":case"string":b={$:b};case"object":for(var e in b)e=="$"?function(){var a=(""+b[e]).toLowerCase();a&&c.push(function(b){return d(b,a)})}():function(){var a=e,f=(""+b[e]).toLowerCase();f&&c.push(function(b){return d(cg(b,a),f)})}();break;case t:c.push(b);break;default:return a}var f=[];for(var g=0;g<a.length;g++){var h=a[g];c.check(h)&&f.push(h)}return f},add:function(a,b){a.push(bn(b)?{}:b);return a},count:function(a,b){if(!b)return a.length;var c=T.Function.compile(b),d=0;be(a,function(a){c(a)&&d++});return d},orderBy:function(a,b,c){function h(a,b){var c=typeof a,d=typeof b;if(c==d){c=="string"&&(a=a.toLowerCase()),c=="string"&&(b=b.toLowerCase());if(a===b)return 0;return a<b?-1:1}return c<d?-1:1}function g(a,b){return bO(b)?function(b,c){return a(c,b)}:a}function f(a,c){for(var d=0;d<b.length;d++){var e=b[d](a,c);if(e!==0)return e}return 0}b=bt(b)?b:[b],b=bC(b,function(a){var b=!1,c=a||bk;if(bq(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")b=a.charAt(0)=="-",a=a.substring(1);c=cn(a).fnSelf}return g(function(a,b){return h(c(a),c(b))},b)});var d=[];for(var e=0;e<a.length;e++)d.push(a[e]);return d.sort(g(f,c))},limitTo:function(a,b){b=parseInt(b,10);var c=[],d,e;b>0?(d=0,e=b):(d=a.length+b,e=a.length);for(;d<e;d++)c.push(a[d]);return c}},dA=/^(\d{4})-(\d\d)-(\d\d)(?:T(\d\d)(?:\:(\d\d)(?:\:(\d\d)(?:\.(\d{3}))?)?)?Z)?$/,dB={quote:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v")+'"'},quoteUnicode:function(a){var b=T.String.quote(a),c=[];for(var d=0;d<b.length;d++){var e=b.charCodeAt(d);if(e<128)c.push(b.charAt(d));else{var f="000"+e.toString(16);c.push("\\u"+f.substring(f.length-4))}}return c.join("")},toDate:function(a){var b;if(bq(a)&&(b=a.match(dA))){var c=new Date(0);c.setUTCFullYear(b[1],b[2]-1,b[3]),c.setUTCHours(b[4]||0,b[5]||0,b[6]||0,b[7]||0);return c}return a}},dC={toString:function(a){return a?a.toISOString?a.toISOString():dF(a.getUTCFullYear(),4)+"-"+dF(a.getUTCMonth()+1,2)+"-"+dF(a.getUTCDate(),2)+"T"+dF(a.getUTCHours(),2)+":"+dF(a.getUTCMinutes(),2)+":"+dF(a.getUTCSeconds(),2)+"."+dF(a.getUTCMilliseconds(),3)+"Z":a}},dD={compile:function(a){return bu(a)?a:a?cn(a).fnSelf:bk}};dE("Global",[dw]),dE("Collection",[dw,dx]),dE("Array",[dw,dx,dz]),dE("Object",[dw,dx,dy]),dE("String",[dw,dB]),dE("Date",[dw,dC]),T.Date.toString=dC.toString,dE("Function",[dw,dx,dD]),Z.currency=function(a){this.$element.toggleClass("ng-format-negative",a<0);return"$"+Z.number.apply(this,[a,2])},Z.number=function(a,b){if(isNaN(a)||!isFinite(a))return"";b=typeof b==E?2:b;var c=a<0;a=Math.abs(a);var d=Math.pow(10,b),e=""+Math.round(a*d),f=e.substring(0,e.length-b);f=f||"0";var g=e.substring(e.length-b);e=c?"-":"";for(var h=0;h<f.length;h++)(f.length-h)%3===0&&h!==0&&(e+=","),e+=f.charAt(h);if(b>0){for(var i=g.length;i<b;i++)g+="0";e+="."+g.substring(0,b)}return e};var dH={yyyy:dG("FullYear",4),yy:dG("FullYear",2,0,!0),MM:dG("Month",2,1),M:dG("Month",1,1),dd:dG("Date",2),d:dG("Date",1),HH:dG("Hours",2),H:dG("Hours",1),hh:dG("Hours",2,-12),h:dG("Hours",1,-12),mm:dG("Minutes",2),m:dG("Minutes",1),ss:dG("Seconds",2),s:dG("Seconds",1),a:function(a){return a.getHours()<12?"am":"pm"},Z:function(a){var b=a.getTimezoneOffset();return dF(b/60,2)+dF(Math.abs(b%60),2)}},dI=/([^yMdHhmsaZ]*)(y+|M+|d+|H+|h+|m+|s+|a|Z)(.*)/,dJ=/^\d+$/;Z.date=function(a,b){bq(a)&&(dJ.test(a)?a=parseInt(a,10):a=dB.toDate(a)),br(a)&&(a=new Date(a));if(!bs(a))return a;var c=a.toLocaleDateString(),d;if(b&&bq(b)){c="";var e=[],f;while(b)f=dI.exec(b),f?(e=bM(e,f,1),b=e.pop()):(e.push(b),b=null);be(e,function(b){d=dH[b],c+=d?d(a):b})}return c},Z.json=function(a){this.$element.addClass("ng-monospace");return b_(a,!0)},Z.lowercase=d,Z.uppercase=e,Z.html=function(a,b){return new bA(a,b)},Z.linky=function(a){if(!a)return a;var b=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/,c,d=a,e=[],f=dc(e),g,h;while(c=d.match(b))g=c[0],c[2]==c[3]&&(g="mailto:"+g),h=c.index,f.chars(d.substr(0,h)),f.start("a",{href:g}),f.chars(c[0].replace(/^mailto:/,"")),f.end("a"),d=d.substring(h+c[0].length);f.chars(d);return new bA(e.join(""))};var dM=/^\s*[-+]?\d*(\.\d*)?\s*$/;$.noop=dK(bk,bk),$.json=dK(b_,function(a){return ca(a||"null")}),$["boolean"]=dK(dL,bO),$.number=dK(dL,function(a){if(a==null||dM.exec(a))return a===null||a===""?null:1*a;throw"Not a number"}),$.list=dK(function(a){return a?a.join(", "):a},function(a){var b=[];be((a||"").split(","),function(a){a=by(a),a&&b.push(a)});return b}),$.trim=dK(function(a){return a?by(""+a):""}),$.index=dK(function(a,b){return""+bF(b||[],a)},function(a,b){return(b||[])[a]}),bh(Y,{noop:function(){return null},regexp:function(a,b,c){return a.match(b)?null:c||"Value does not match expected format "+b+"."},number:function(a,b,c){var d=1*a;if(d==a){if(typeof b!=E&&d<b)return"Value can not be less than "+b+".";if(typeof b!=E&&d>c)return"Value can not be greater than "+c+".";return null}return"Not a number"},integer:function(a,b,c){var d=Y.number(a,b,c);if(d)return d;if(!(""+a).match(/^\s*[\d+]*\s*$/)||a!=Math.round(a))return"Not a whole number";return null},date:function(a){var b=/^(\d\d?)\/(\d\d?)\/(\d\d\d\d)$/.exec(a),c=b?new Date(b[3],b[1]-1,b[2]):0;return c&&c.getFullYear()==b[3]&&c.getMonth()==b[1]-1&&c.getDate()==b[2]?null:"Value is not a date. (Expecting format: 12/31/2009)."},email:function(a){if(a.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/))return null;return"Email needs to be in username@host.com format."},phone:function(a){if(a.match(/^1\(\d\d\d\)\d\d\d-\d\d\d\d$/))return null;if(a.match(/^\+\d{2,3} (\(\d{1,5}\))?[\d ]+\d$/))return null;return"Phone number needs to be in 1(987)654-3210 format in North America or +999 (123) 45678 906 internationaly."},url:function(a){if(a.match(/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/))return null;return"URL needs to be in http://server[:port]/path format."},json:function(a){try{ca(a);return null}catch(b){return b.toString()}},asynchronous:function(a,b,c){if(a){var d=this,e=d.$element,f=e.data("$asyncValidator");f||e.data("$asyncValidator",f={inputs:{}}),f.current=a;var g=f.inputs[a],h=d.$service("$invalidWidgets");g?g.inFlight?h.markInvalid(d.$element):(c||bj)(g.response):(f.inputs[a]=g={inFlight:!0},h.markInvalid(d.$element),e.addClass("ng-input-indicator-wait"),b(a,function(b,c){g.response=c,g.error=b,g.inFlight=!1,f.current==a&&(e.removeClass("ng-input-indicator-wait"),h.markValid(e)),e.data(l)(),d.$service("$updateView")()}));return g.error}}}),ct("$cookieStore",function(a){return{get:function(b){return ca(a[b])},put:function(b,c){a[b]=b_(c)},remove:function(b){delete a[b]}}},["$cookies"]),ct("$cookies",function(a){function h(){var b,f,g,h;for(b in e)bn(d[b])&&a.cookies(b,c);for(b in d)f=d[b],bq(f)?f!==e[b]&&(a.cookies(b,f),h=!0):bo(e[b])?d[b]=e[b]:delete d[b];if(h){h=!1,g=a.cookies();for(b in d)d[b]!==g[b]&&(bn(g[b])?delete d[b]:d[b]=g[b],h=!0)}}var b=this,d={},e={},f,g=!1;a.addPollFn(function(){var c=a.cookies();f!=c&&(f=c,bH(c,e),bH(c,d),g&&b.$eval())})(),g=!0,this.$onEval(K,h);return d},["$browser"]),ct("$defer",function(a,b,c){return function(d,e){a.defer(function(){try{d()}catch(a){b(a)}finally{c()}},e)}},["$browser","$exceptionHandler","$updateView"]),ct("$document",function(a){return O(a.document)},["$window"]);var dN;ct("$exceptionHandler",dN=function(a){return function(b){a.error(b)}},["$log"]),ct("$hover",function(a,b){var c,d=this,e,f=300,g=10,h=O(b[0].body);a.hover(function(a,b){if(b&&(e=a.attr(F)||a.attr(G))){c||(c={callout:O('<div id="ng-callout"></div>'),arrow:O("<div></div>"),title:O('<div class="ng-title"></div>'),content:O('<div class="ng-content"></div>')},c.callout.append(c.arrow),c.callout.append(c.title),c.callout.append(c.content),h.append(c.callout));var d=h[0].getBoundingClientRect(),i=a[0].getBoundingClientRect(),j=d.right-i.right-g;c.title.text(a.hasClass("ng-exception")?"EXCEPTION:":"Validation error..."),c.content.text(e),j<f?(c.arrow.addClass("ng-arrow-right"),c.arrow.css({left:f+1+"px"}),c.callout.css({position:"fixed",left:i.left-g-f-4+"px",top:i.top-3+"px",width:f+"px"})):(c.arrow.addClass("ng-arrow-left"),c.callout.css({position:"fixed",left:i.right+g+"px",top:i.top-3+"px",width:f+"px"}))}else c&&(c.callout.remove(),c=null)})},["$browser","$document"],!0),ct("$invalidWidgets",function(){function c(b){if(b==a.document)return!1;var d=b.parentNode;return!d||c(d)}var b=[];b.markValid=function(a){var c=bF(b,a);c!=-1&&b.splice(c,1)},b.markInvalid=function(a){var c=bF(b,a);c===-1&&b.push(a)},b.visible=function(){var a=0;be(b,function(b){a=a+(bB(b)?1:0)});return a},this.$onEval(K,function(){for(var a=0;a<b.length;){var d=b[a];c(d[0])?(b.splice(a,1),d.dealoc&&d.dealoc()):a++}});return b});var dO=/^(file|ftp|http|https):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,dP=/^([^\?]*)?(\?([^\?]*))?$/,dQ={http:80,https:443,ftp:21};ct("$location",function(a){function l(a){var b={},c=dP.exec(a);c&&(b.hash=a,b.hashPath=unescape(c[1]||""),b.hashSearch=bR(c[3]));return b}function k(a){var b={},c=dO.exec(a);c&&(b.href=a.replace(/#$/,""),b.protocol=c[1],b.host=c[3]||"",b.port=c[5]||dQ[b.protocol]||null,b.path=c[6]||"",b.search=bR(c[8]),b.hash=c[10]||"",bh(b,l(b.hash)));return b}function j(a){var b=bS(a.hashSearch);return escape(a.hashPath).replace(/%21/gi,"!").replace(/%3A/gi,":").replace(/%24/gi,"$")+(b?"?"+b:"")}function i(a){var b=bS(a.search),c=a.port==dQ[a.protocol]?null:a.port;return a.protocol+"://"+a.host+(c?":"+c:"")+a.path+(b?"?"+b:"")+(a.hash?"#"+a.hash:"")}function h(){g(),a.getUrl()!=c.href&&(a.setUrl(c.href),bH(c,d))}function g(){if(!bI(c,d)){if(c.href!=d.href){e(c.href);return}if(c.hash!=d.hash){var a=l(c.hash);f(a.hashPath,a.hashSearch)}else c.hash=j(c),c.href=i(c);e(c.href)}}function f(a,b){var c={};bq(a)?(c.hashPath=a,c.hashSearch=b||{}):c.hashSearch=a,c.hash=j(c),e({hash:c})}function e(a){bq(a)?bh(c,k(a)):(bo(a.hash)&&bh(a,bq(a.hash)?l(a.hash):a.hash),bh(c,a),bo(a.hashPath||a.hashSearch)&&(c.hash=j(c)),c.href=i(c))}var b=this,c={update:e,updateHash:f},d={};a.onHashChange(function(){e(a.getUrl()),bH(c,d),b.$eval()})(),this.$onEval(I,g),this.$onEval(K,h);return c},["$browser"]);var dR;ct("$log",dR=function(a){function b(b){var c=a.console||{},d=c[b]||c.log||bj;return d.apply?function(){var a=[];be(arguments,function(b){a.push(bg(b))});return d.apply(c,a)}:d}return{log:b("log"),warn:b("warn"),info:b("info"),error:b("error")}},["$window"]),ct("$resource",function(a){var b=new cE(a);return bN(b,b.route)},["$xhr.cache"]),ct("$route",function(a,b){function j(){var g,i,j,k,l,m;h.current=null,be(c,function(b,c){if(!j)if(j=e(a.hashPath,c))i=b}),i=i||c[null];if(i){if(i.redirectTo){bq(i.redirectTo)?(m={hashPath:"",hashSearch:bh({},a.hashSearch,j)},be(i.redirectTo.split(":"),function(b,c){c==0?m.hashPath+=b:(k=b.match(/(\w+)(.*)/),l=k[1],m.hashPath+=j[l]||a.hashSearch[l],m.hashPath+=k[2]||"",delete m.hashSearch[l])})):m={hash:i.redirectTo(j,a.hash,a.hashPath,a.hashSearch)},a.update(m),b();return}g=cp(f),h.current=bh({},i,{scope:g,params:bh({},a.hashSearch,j)})}be(d,f.$tryEval),g&&g.$become(h.current.controller)}function i(a,b,c){var d="^"+b.replace(/[\.\\\(\)\^\$]/g,"$1")+"$",e=[],f={};be(b.split(/\W/),function(a){if(a){var b=new RegExp(":"+a+"([\\W])");d.match(b)&&(d=d.replace(b,"([^/]*)$1"),e.push(a))}});var g=a.match(new RegExp(d));g&&(be(e,function(a,b){f[a]=g[b+1]}),c&&this.$set(c,f));return g?f:null}var c={},d=[],e=i,f=this,g=0,h={routes:c,onChange:function(a){d.push(a);return a},parent:function(a){a&&(f=a)},when:function(a,b){if(bn(a))return c;var d=c[a];d||(d=c[a]={}),b&&bh(d,b),g++;return d},otherwise:function(a){h.when(null,a)},reload:function(){g++}};this.$watch(function(){return g+a.hash},j);return h},["$location","$updateView"]),dS.delay=25,ct("$updateView",dS,["$browser"]),ct("$window",bN(a,bk,a)),ct("$xhr.bulk",function(a,b,c){function f(b,c,d,e){bu(d)&&(e=d,d=null);var g;be(f.urls,function(a){if(bu(a.match)?a.match(c):a.match.exec(c))g=a}),g?(g.requests||(g.requests=[]),g.requests.push({method:b,url:c,data:d,callback:e})):a(b,c,d,e)}var d=[],e=this;f.urls={},f.flush=function(d){be(f.urls,function(f,g){var h=f.requests;h&&h.length&&(f.requests=[],f.callbacks=[],a("POST",g,{requests:h},function(a,e){be(e,function(a,d){try{a.status==200?(h[d].callback||bj)(a.status,a.response):b(h[d],a)}catch(e){c.error(e)}}),(d||bj)()}),e.$eval())})},this.$onEval(K,f.flush);return f},["$xhr","$xhr.error","$log"]),ct("$xhr.cache",function(a,b,c){function f(a,e,g,h,i,j){bu(g)&&(h=g,g=null);if(a=="GET"){var k,l;if(l=f.data[e]){j?h(200,bH(l.value)):b(function(){h(200,bH(l.value))});if(!i)return}(k=d[e])?k.callbacks.push(h):(d[e]={callbacks:[h]},f.delegate(a,e,g,function(a,b){a==200&&(f.data[e]={value:b});var g=d[e].callbacks;delete d[e],be(g,function(d){try{(d||bj)(a,bH(b))}catch(e){c.error(e)}})}))}else f.data={},f.delegate(a,e,g,h)}var d={},e=this;f.data={},f.delegate=a;return f},["$xhr.bulk","$defer","$log"]),ct("$xhr.error",function(a){return function(b,c){a.error("ERROR: XHR: "+b.url,b,c)}},["$log"]),ct("$xhr",function(a,b,c,d){return function(e,f,g,h){bu(g)&&(h=g,g=null),g&&bp(g)&&(g=b_(g)),a.xhr(e,f,g,function(a,i){try{bq(i)&&(i.match(/^\)\]\}',\n/)&&(i=i.substr(6)),/^\s*[\[\{]/.exec(i)&&/[\}\]]\s*$/.exec(i)&&(i=ca(i,!0))),200<=a&&a<300?h(a,i):b({method:e,url:f,data:g,callback:h},{status:a,body:i})}catch(j){c.error(j)}finally{d()}},{"X-XSRF-TOKEN":a.cookies()["XSRF-TOKEN"]})}},["$browser","$xhr.error","$log","$updateView"]),W("ng:init",function(a){return function(b){this.$tryEval(a,b)}}),W("ng:controller",function(b){this.scope(!0);return function(c){var d=cg(a,b,!0)||cg(this,b,!0);if(!d)throw"Can not find '"+b+"' controller.";if(!bu(d))throw"Reference '"+b+"' is not a class.";this.$become(d)}}),W("ng:eval",function(a){return function(b){this.$onEval(a,b)}}),W("ng:bind",function(a,b){b.addClass("ng-binding");return function(b){var d=bj,e=bj;this.$onEval(function(){var f,g,h,j,k,l=this.hasOwnProperty(i)?this.$element:c;this.$element=b,g=this.$tryEval(a,function(a){f=bg(a)}),this.$element=l;if(j=g instanceof bA)g=(h=g).html;if(d!==g||e!=f){k=bz(g),!j&&!k&&bp(g)&&(g=b_(g,!0));if(g!=d||f!=e)d=g,e=f,bL(b,F,f),f&&(g=f),j?b.html(h.get()):k?(b.html(""),b.append(g)):b.text(g==c?"":g)}},b)}});var dT={};W("ng:bind-template",function(a,b){b.addClass("ng-binding");var c=dU(a);return function(a){var b;this.$onEval(function(){var d=c.call(this,a,!0);d!=b&&(a.text(d),b=d)},a)}});var dV={disabled:"disabled",readonly:"readOnly",checked:"checked",selected:"selected"};W("ng:bind-attr",function(a){return function(b){var c={},e=b.data(j)||bj;this.$onEval(function(){var f=this.$eval(a),g=bj;for(var h in f){var i=dU(f[h]).call(this,b),j=dV[d(h)];c[h]!==i&&(c[h]=i,j?(bO(i)?(b.attr(j,j),b.attr("ng-"+j,i)):(b.removeAttr(j),b.removeAttr("ng-"+j)),(b.data(l)||bj)()):b.attr(h,i),g=e)}g()},b)}}),W("ng:click",function(a,b){return cs(function(b,c){var d=this;c.bind("click",function(e){d.$tryEval(a,c),b(),e.stopPropagation()})})}),W("ng:submit",function(a,b){return cs(function(b,c){var d=this;c.bind("submit",function(e){d.$tryEval(a,c),b(),e.preventDefault()})})}),W("ng:class",dW(function(){return!0})),W("ng:class-odd",dW(function(a){return a%2===0})),W("ng:class-even",dW(function(a){return a%2===1})),W("ng:show",function(a,b){return function(b){this.$onEval(function(){b.css(r,bO(this.$eval(a))?"":w)},b)}}),W("ng:hide",function(a,b){return function(b){this.$onEval(function(){b.css(r,bO(this.$eval(a))?w:"")},b)}}),W("ng:style",function(a,b){return function(b){var d=dj(b);this.$onEval(function(){var e=this.$eval(a)||{},f,g={};for(f in e)d[f]===c&&(d[f]=""),g[f]=e[f];for(f in d)g[f]=g[f]||d[f];b.css(g)},b)}}),U("{{}}",function(a,c,d){var e=dX(a),f=this;if(dZ(e))if(bG(d[0]))d.attr("ng:bind-template",a);else{var g=c,h;be(dX(a),function(a){var c=dY(a);c?(h=O("<span>"),h.attr("ng:bind",c)):h=O(b.createTextNode(a));if(N&&a.charAt(0)==" "){h=O("<span>&nbsp;</span>");var d=h.html();h.text(a.substr(1)),h.html(d+h.html())}g.after(h),g=h}),c.remove()}}),U("option",function(a,b,c){d(bb(c))=="option"&&(N>7?c[0].getAttribute("value")==null&&c.attr("value",a):cZ(c[0].outerHTML,{start:function(b,d){bn(d.value)&&c.attr("value",a)}}))});var d$="ng:bind-attr",d_={"ng:src":"src","ng:href":"href"};V("{{}}",function(a,b,c){if(!W(b)&&!W("@"+b)){N&&b=="src"&&(a=decodeURI(a));var d=dX(a),e;dZ(d)&&(c.removeAttr(b),e=ca(c.attr(d$)||"{}"),e[d_[b]||b]=a,c.attr(d$,b_(e)))}});var ej=eo("keydown change",ea,ee,em(),!0),ek=eo("click",ei,ei,bj),el={text:ej,textarea:ej,hidden:ej,password:ej,button:ek,submit:ek,reset:ek,image:ek,checkbox:eo("click",eb,ef,em(!1)),radio:eo("click",eb,eg,en),"select-one":eo("change",ea,ee,em(null)),"select-multiple":eo("change",ea,eh,em([]))};X("input",ep),X("textarea",ep),X("button",ep),X("select",function(a){this.descend(!0);return ep.call(this,a)}),X("option",function(){this.descend(!0),this.directives(!0);return function(a){var b=a.parent(),d=b[0].type=="select-multiple",e=b.scope(),f=ea(e,b);if(f){var g=eb(e,b),h=d?eh(e,b):ee(e,b),i=a.attr(C),k=a.attr("ng-"+D);a.data(j,d?function(){h.set(f.get())}:function(){var b=a.attr(C),d=a.attr("ng-"+D),e=f.get();if(k!=d||i!=b)k=d,i=b,(d||!e==null||e==c)&&g.set(b),b==e&&h.set(i)})}}}),X("ng:include",function(a){var b=this,c=a.attr("src"),d=a.attr("scope")||"",e=a[0].getAttribute("onload")||"";if(a[0]["ng:compiled"])this.descend(!0),this.directives(!0);else{a[0]["ng:compiled"]=!0;return bh(function(a,f){function k(){i++}var g=this,h,i=0,j=!1;this.$watch(c,k),this.$watch(d,k),g.$onEval(function(){if(h&&!j){j=!0;try{h.$eval()}finally{j=!1}}}),this.$watch(function(){return i},function(){var i=this.$eval(c),j=this.$eval(d);i?a("GET",i,null,function(a,c){f.html(c),h=j||cp(g),b.compile(f)(h),g.$eval(e)},!1,!0):(h=null,f.html(""))})},{$inject:["$xhr.cache"]})}});var eq=X("ng:switch",function(a){var b=this,c=a.attr("on"),d=a.attr("using")||"equals",e=d.split(":"),f=eq[e.shift()],g=a.attr("change")||"",h=[];if(!f)throw"Using expression '"+d+"' unknown.";if(!c)throw"Missing 'on' attribute.";ce(a,function(a){var c=a.attr("ng:switch-when"),d={change:g,element:a,template:b.compile(a)};bq(c)?(d.when=function(a,b){var d=[b,c];be(e,function(a){d.push(a)});return f.apply(a,d)},h.unshift(d)):bq(a.attr("ng:switch-default"))&&(d.when=bl(!0),h.push(d))}),be(h,function(a){a.element.remove()}),a.html("");return function(a){var b=this,d;this.$watch(c,function(c){var e=!1;a.html(""),d=cp(b),be(h,function(b){!e&&b.when(d,c)&&(e=!0,d.$tryEval(b.change,a),b.template(d,function(b){a.append(b)}))})}),b.$onEval(function(){d&&d.$eval()})}},{equals:function(a,b){return""+a==b}});X("a",function(){this.descend(!0),this.directives(!0);return function(a){a.attr("href")===""&&a.bind("click",function(a){a.preventDefault()})}}),X("@ng:repeat",function(a,c){c.removeAttr("ng:repeat"),c.replaceWith(O("<!-- ng:repeat: "+a+" --!>"));var d=this.compile(c);return function(e){var f=a.match(/^\s*(.+)\s+in\s+(.*)\s*$/),g,h,i,j;if(!f)throw M("Expected ng:repeat in form of 'item in collection' but got '"+a+"'.");g=f[1],h=f[2],f=g.match(/^([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\)$/);if(!f)throw M("'item' in 'item in collection' should be identifier or (key, value) but got '"+keyValue+"'.");i=f[3]||f[1],j=f[2];var k=[],l=this;this.$onEval(function(){var a=0,f=k.length,g=e,m=this.$tryEval(h,e),n=bD(m,!0),o=c[0].nodeName!="OPTION"?b.createDocumentFragment():null,p,q,r;for(r in m)m.hasOwnProperty(r)&&(a<f?(q=k[a],q[i]=m[r],j&&(q[j]=r),g=q.$element,q.$eval()):(q=cp(l),q[i]=m[r],j&&(q[j]=r),q.$index=a,q.$position=a==0?"first":a==n-1?"last":"middle",k.push(q),d(q,function(b){b.attr("ng:repeat-index",a),o?(o.appendChild(b[0]),p=!0):(g.after(b),g=b)})),a++);p&&g.after(O(o));while(k.length>a)k.pop().$element.remove()},e)}}),X("@ng:non-bindable",bj),X("ng:view",function(a){var b=this;if(a[0]["ng:compiled"])this.descend(!0),this.directives(!0);else{a[0]["ng:compiled"]=!0;return cr(["$xhr.cache","$route"],function(a,c,d){var e=this,f;c.onChange(function(){var e;c.current&&(e=c.current.template,f=c.current.scope),e?a("GET",e,function(a,c){d.html(c),b.compile(d)(f)}):d.html("")})(),e.$onEval(function(){f&&f.$eval()})})}});var er;_("$browser",function(b){if(!er){er=new cH(a,O(a.document),O(a.document.body),cF,b);var c=er.addPollFn;er.addPollFn=function(){er.addPollFn=c,er.startPoller(100,function(a,b){setTimeout(a,b)});return c.apply(er,arguments)},er.bind()}return er},{$inject:["$log"]}),bh(T,{element:O,compile:bQ,scope:cp,copy:bH,extend:bh,equals:bI,forEach:be,injector:cq,noop:bj,bind:bN,toJson:b_,fromJson:ca,identity:bk,isUndefined:bn,isDefined:bo,isString:bq,isFunction:bu,isObject:bp,isNumber:br,isArray:bt}),bX(),dk(b).ready(function(){bV(bW(b),b)})})(window,document),angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";.ng-format-negative{color:red;}.ng-exception{border:2px solid #FF0000;font-family:"Courier New",Courier,monospace;font-size:smaller;white-space:pre;}.ng-validation-error{border:2px solid #FF0000;}#ng-callout{margin:0;padding:0;border:0;outline:0;font-size:13px;font-weight:normal;font-family:Verdana,Arial,Helvetica,sans-serif;vertical-align:baseline;background:transparent;text-decoration:none;}#ng-callout .ng-arrow-left{background-image:url("data:image/gif;base64,R0lGODlhCwAXAKIAAMzMzO/v7/f39////////wAAAAAAAAAAACH5BAUUAAQALAAAAAALABcAAAMrSLoc/AG8FeUUIN+sGebWAnbKSJodqqlsOxJtqYooU9vvk+vcJIcTkg+QAAA7");background-repeat:no-repeat;background-position:left top;position:absolute;z-index:101;left:-12px;height:23px;width:10px;top:-3px;}#ng-callout .ng-arrow-right{background-image:url("data:image/gif;base64,R0lGODlhCwAXAKIAAMzMzO/v7/f39////////wAAAAAAAAAAACH5BAUUAAQALAAAAAALABcAAAMrCLTcoM29yN6k9socs91e5X3EyJloipYrO4ohTMqA0Fn2XVNswJe+H+SXAAA7");background-repeat:no-repeat;background-position:left top;position:absolute;z-index:101;height:23px;width:11px;top:-2px;}#ng-callout{position:absolute;z-index:100;border:2px solid #CCCCCC;background-color:#fff;}#ng-callout .ng-content{padding:10px 10px 10px 10px;color:#333333;}#ng-callout .ng-title{background-color:#CCCCCC;text-align:left;padding-left:8px;padding-bottom:5px;padding-top:2px;font-weight:bold;}.ng-input-indicator-wait{background-image:url("data:image/png;base64,R0lGODlhEAAQAPQAAP///wAAAPDw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFdyAgAgIJIeWoAkRCCMdBkKtIHIngyMKsErPBYbADpkSCwhDmQCBethRB6Vj4kFCkQPG4IlWDgrNRIwnO4UKBXDufzQvDMaoSDBgFb886MiQadgNABAokfCwzBA8LCg0Egl8jAggGAA1kBIA1BAYzlyILczULC2UhACH5BAkKAAAALAAAAAAQABAAAAV2ICACAmlAZTmOREEIyUEQjLKKxPHADhEvqxlgcGgkGI1DYSVAIAWMx+lwSKkICJ0QsHi9RgKBwnVTiRQQgwF4I4UFDQQEwi6/3YSGWRRmjhEETAJfIgMFCnAKM0KDV4EEEAQLiF18TAYNXDaSe3x6mjidN1s3IQAh+QQJCgAAACwAAAAAEAAQAAAFeCAgAgLZDGU5jgRECEUiCI+yioSDwDJyLKsXoHFQxBSHAoAAFBhqtMJg8DgQBgfrEsJAEAg4YhZIEiwgKtHiMBgtpg3wbUZXGO7kOb1MUKRFMysCChAoggJCIg0GC2aNe4gqQldfL4l/Ag1AXySJgn5LcoE3QXI3IQAh+QQJCgAAACwAAAAAEAAQAAAFdiAgAgLZNGU5joQhCEjxIssqEo8bC9BRjy9Ag7GILQ4QEoE0gBAEBcOpcBA0DoxSK/e8LRIHn+i1cK0IyKdg0VAoljYIg+GgnRrwVS/8IAkICyosBIQpBAMoKy9dImxPhS+GKkFrkX+TigtLlIyKXUF+NjagNiEAIfkECQoAAAAsAAAAABAAEAAABWwgIAICaRhlOY4EIgjH8R7LKhKHGwsMvb4AAy3WODBIBBKCsYA9TjuhDNDKEVSERezQEL0WrhXucRUQGuik7bFlngzqVW9LMl9XWvLdjFaJtDFqZ1cEZUB0dUgvL3dgP4WJZn4jkomWNpSTIyEAIfkECQoAAAAsAAAAABAAEAAABX4gIAICuSxlOY6CIgiD8RrEKgqGOwxwUrMlAoSwIzAGpJpgoSDAGifDY5kopBYDlEpAQBwevxfBtRIUGi8xwWkDNBCIwmC9Vq0aiQQDQuK+VgQPDXV9hCJjBwcFYU5pLwwHXQcMKSmNLQcIAExlbH8JBwttaX0ABAcNbWVbKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICSRBlOY7CIghN8zbEKsKoIjdFzZaEgUBHKChMJtRwcWpAWoWnifm6ESAMhO8lQK0EEAV3rFopIBCEcGwDKAqPh4HUrY4ICHH1dSoTFgcHUiZjBhAJB2AHDykpKAwHAwdzf19KkASIPl9cDgcnDkdtNwiMJCshACH5BAkKAAAALAAAAAAQABAAAAV3ICACAkkQZTmOAiosiyAoxCq+KPxCNVsSMRgBsiClWrLTSWFoIQZHl6pleBh6suxKMIhlvzbAwkBWfFWrBQTxNLq2RG2yhSUkDs2b63AYDAoJXAcFRwADeAkJDX0AQCsEfAQMDAIPBz0rCgcxky0JRWE1AmwpKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICKZzkqJ4nQZxLqZKv4NqNLKK2/Q4Ek4lFXChsg5ypJjs1II3gEDUSRInEGYAw6B6zM4JhrDAtEosVkLUtHA7RHaHAGJQEjsODcEg0FBAFVgkQJQ1pAwcDDw8KcFtSInwJAowCCA6RIwqZAgkPNgVpWndjdyohACH5BAkKAAAALAAAAAAQABAAAAV5ICACAimc5KieLEuUKvm2xAKLqDCfC2GaO9eL0LABWTiBYmA06W6kHgvCqEJiAIJiu3gcvgUsscHUERm+kaCxyxa+zRPk0SgJEgfIvbAdIAQLCAYlCj4DBw0IBQsMCjIqBAcPAooCBg9pKgsJLwUFOhCZKyQDA3YqIQAh+QQJCgAAACwAAAAAEAAQAAAFdSAgAgIpnOSonmxbqiThCrJKEHFbo8JxDDOZYFFb+A41E4H4OhkOipXwBElYITDAckFEOBgMQ3arkMkUBdxIUGZpEb7kaQBRlASPg0FQQHAbEEMGDSVEAA1QBhAED1E0NgwFAooCDWljaQIQCE5qMHcNhCkjIQAh+QQJCgAAACwAAAAAEAAQAAAFeSAgAgIpnOSoLgxxvqgKLEcCC65KEAByKK8cSpA4DAiHQ/DkKhGKh4ZCtCyZGo6F6iYYPAqFgYy02xkSaLEMV34tELyRYNEsCQyHlvWkGCzsPgMCEAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAAA==");background-position:right;background-repeat:no-repeat;}</style>');
define("lib/impl/angular-0.9.15", function(){});
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)a(e).triggerHandler("remove");c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e==="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c);if(!d)throw"cannot call methods on "+c+" prior to initialization; attempted to call method '"+e+"'";if(!a.isFunction(d[e]))throw"no such method '"+e+"' for "+c+" widget instance";var f=d[e].apply(d,g);if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){var b={};a.metadata&&(b=a.metadata.get(element)[this.widgetName]);return b},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c==="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e=this.options[b];c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),d=d||{};if(c.originalEvent)for(var f=a.event.props.length,g;f;)g=a.event.props[--f],c[g]=c.originalEvent[g];this.element.trigger(c,d);return!(a.isFunction(e)&&e.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery),function(a,b){a.widget("mobile.widget",{_getCreateOptions:function(){var c=this.element,d={};a.each(this.options,function(a){var e=c.jqmData(a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}));e!==b&&(d[a]=e)});return d}})}(jQuery),function(a,b){function f(){var b=c.width(),f="min-width-",g="max-width-",h=[],i=[],j="px",k;d.removeClass(f+e.join(j+" "+f)+j+" "+g+e.join(j+" "+g)+j),a.each(e,function(a,c){b>=c&&h.push(f+c+j),b<=c&&i.push(g+c+j)}),h.length&&(k=h.join(" ")),i.length&&(k+=" "+i.join(" ")),d.addClass(k)}var c=a(window),d=a("html"),e=[320,480,768,1024];a.mobile.media=function(){var b={},c=a("<div id='jquery-mediatest'>"),e=a("<body>").append(c);return function(a){if(!(a in b)){var f=document.createElement("style"),g="@media "+a+" { #jquery-mediatest { position:absolute; } }";f.type="text/css",f.styleSheet?f.styleSheet.cssText=g:f.appendChild(document.createTextNode(g)),d.prepend(e).prepend(f),b[a]=c.css("position")==="absolute",e.add(f).remove()}return b[a]}}(),a.mobile.addResolutionBreakpoints=function(b){a.type(b)==="array"?e=e.concat(b):e.push(b),e.sort(function(a,b){return a-b}),f()},a(document).bind("mobileinit.htmlclass",function(){var b=a.support.orientation;c.bind("orientationchange.htmlclass throttledResize.htmlclass",function(a){a.orientation&&d.removeClass("portrait landscape").addClass(a.orientation),f()})}),a(function(){c.trigger("orientationchange.htmlclass")})}(jQuery),function(a,b){function i(){var b=location.protocol+"//"+location.host+location.pathname+"ui-dir/",d=a("head base"),e=null,f="";d.length?f=d.attr("href"):d=e=a("<base>",{href:b}).appendTo("head");var g=a("<a href='testurl'></a>").prependTo(c),h=g[0].href;d[0].href=f?f:location.pathname,e&&e.remove();return h.indexOf(b)===0}function h(a){var c=a.charAt(0).toUpperCase()+a.substr(1),f=(a+" "+e.join(c+" ")+c).split(" ");for(var g in f)if(d[g]!==b)return!0}var c=a("<body>").prependTo("html"),d=c[0].style,e=["webkit","moz","o"],f="palmGetResource"in window,g=window.blackberry;a.mobile.browser={},a.mobile.browser.ie=function(){var a=3,b=document.createElement("div"),c=b.all||[];while(b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->",c[0]);return a>4?a:!a}(),a.mobile.browser.android=function(){return navigator.userAgent.match(/Android/i)}(),a.extend(a.support,{orientation:!1,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window,pushState:!!history.pushState,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!h("content"),boxShadow:!!h("boxShadow")&&!g,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in c[0])&&!f,dynamicBaseTag:i(),eventCapture:"addEventListener"in document}),c.remove(),a.support.boxShadow||a("html").addClass("ui-mobile-nosupport-boxshadow")}(jQuery),function(a,b,c,d){function N(b){var c=b.substr(1);return{setup:function(d,f){L(this)||a.data(this,e,{});var g=a.data(this,e);g[b]=!0,i[b]=(i[b]||0)+1,i[b]===1&&r.bind(c,G),a(this).bind(c,M),q&&(i.touchstart=(i.touchstart||0)+1,i.touchstart===1&&r.bind("touchstart",H).bind("touchend",K).bind("touchmove",J).bind("scroll",I))},teardown:function(d,f){--i[b],i[b]||r.unbind(c,G),q&&(--i.touchstart,i.touchstart||r.unbind("touchstart",H).unbind("touchmove",J).unbind("touchend",K).unbind("scroll",I));var g=a(this),h=a.data(this,e);h&&(h[b]=!1),g.unbind(c,M),L(this)||g.removeData(e)}}}function M(){}function L(b){var c=a.data(b,e),d;if(c)for(d in c)if(c[d])return!0;return!1}function K(a){if(!p){z();var b=w(a.target);E("vmouseup",a,b);if(!m)if(E("vclick",a,b)){var c=u(a).changedTouches[0];n.push({touchID:t,x:c.clientX,y:c.clientY}),o=!0}E("vmouseout",a,b),m=!1,C()}}function J(b){if(!p){var c=u(b).touches[0],d=m,e=a.vmouse.moveDistanceThreshold;m=m||(Math.abs(c.pageX-k)>e||Math.abs(c.pageY-l)>e);var f=w(b.target);m&&!d&&E("vmousecancel",b,f),E("vmousemove",b,f),C()}}function I(a){p||(m||E("vmousecancel",a,w(a.target)),m=!0,C())}function H(b){var c=u(b).touches;if(c&&c.length===1){var d=b.target,e=w(d);if(e.hasVirtualBinding){t=s++,a.data(d,f,t),D(),B(),m=!1;var g=u(b).touches[0];k=g.pageX,l=g.pageY,E("vmouseover",b,e),E("vmousedown",b,e)}}}function G(b){var c=a.data(b.target,f);if(!o&&(!t||t!==c)){var d=F[b.type];d||(d=b.type),E("v"+d,b)}}function E(b,c,d){var e=!1;if(d&&d[b]||!d&&x(c.target,b)){var f=v(c,b);a(c.target).trigger(f),e=f.isDefaultPrevented()}return e}function D(){j&&(clearTimeout(j),j=0)}function C(){D(),j=setTimeout(function(){j=0,A()},a.vmouse.resetTimerDuration)}function B(){y()}function A(){t=0,n.length=0,o=!1,z()}function z(){p=!0}function y(){p=!1}function x(b,c){while(b){var d=a.data(b,e);if(d&&(!c||d[c]))return b;b=b.parentNode}return null}function w(b){var c={};while(b){var d=a.data(b,e);for(var f in d)d[f]&&(c[f]=c.hasVirtualBinding=!0);b=b.parentNode}return c}function v(b,c){var e=b.type;b=a.Event(b),b.type=c;var f=b.originalEvent,g=a.event.props;if(f)for(var i=g.length,j;i;)j=g[--i],b[j]=f[j];if(e.search(/^touch/)!==-1){var k=u(f),e=k.touches,l=k.changedTouches,m=e&&e.length?e[0]:l&&l.length?l[0]:d;if(m)for(var i=0,n=h.length;i<n;i++){var j=h[i];b[j]=m[j]}}return b}function u(a){while(a&&typeof a.originalEvent!=="undefined")a=a.originalEvent;return a}var e="virtualMouseBindings",f="virtualTouchID",g="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),h="clientX clientY pageX pageY screenX screenY".split(" "),i={},j=0,k=0,l=0,m=!1,n=[],o=!1,p=!1,q=a.support.eventCapture,r=a(c),s=1,t=0;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};var F={mouseenter:"mouseover",mouseleave:"mouseout"};for(var O=0;O<g.length;O++)a.event.special[g[O]]=N(g[O]);q&&c.addEventListener("click",function(b){var c=n.length,d=b.target;if(c){var e=b.clientX,g=b.clientY,h=a.vmouse.clickDistanceThreshold,i=d;while(i){for(var j=0;j<c;j++){var k=n[j],l=0;if(i===d&&Math.abs(k.x-e)<h&&Math.abs(k.y-g)<h||a.data(i,f)===k.touchID){b.preventDefault(),b.stopPropagation();return}}i=i.parentNode}}},!0)}(jQuery,window,document),function(a,b){function h(b,c,d){var e=d.type;d.type=c,a.event.handle.call(b,d),d.type=e}a.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)},a.attrFn[c]=!0});var c=a.support.touch,d="touchmove scroll",e=c?"touchstart":"mousedown",f=c?"touchend":"mouseup",g=c?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function g(a,c){e=c,h(b,e?"scrollstart":"scrollstop",a)}var b=this,c=a(b),e,f;c.bind(d,function(b){a.event.special.scrollstart.enabled&&(e||g(b,!0),clearTimeout(f),f=setTimeout(function(){g(b,!1)},50))})}},a.event.special.tap={setup:function(){var b=this,c=a(b);c.bind("vmousedown",function(a){function j(a){i(),e==a.target&&h(b,"tap",a)}function i(){d=!1,clearTimeout(g),c.unbind("vclick",j).unbind("vmousecancel",i)}if(a.which&&a.which!==1)return!1;var d=!0,e=a.target,f=a.originalEvent,g;c.bind("vmousecancel",i).bind("vclick",j),g=setTimeout(function(){d&&h(b,"taphold",a)},750)})}},a.event.special.swipe={setup:function(){var c=this,d=a(c);d.bind(e,function(c){function j(a){if(h){var b=a.originalEvent.touches?a.originalEvent.touches[0]:a;i={time:(new Date).getTime(),coords:[b.pageX,b.pageY]},Math.abs(h.coords[0]-i.coords[0])>10&&a.preventDefault()}}var e=c.originalEvent.touches?c.originalEvent.touches[0]:c,h={time:(new Date).getTime(),coords:[e.pageX,e.pageY],origin:a(c.target)},i;d.bind(g,j).one(f,function(a){d.unbind(g,j),h&&i&&(i.time-h.time<1e3&&Math.abs(h.coords[0]-i.coords[0])>30&&Math.abs(h.coords[1]-i.coords[1])<75&&h.origin.trigger("swipe").trigger(h.coords[0]>i.coords[0]?"swipeleft":"swiperight")),h=i=b})})}},function(a){function f(){var a=d();a!==e&&(e=a,b.trigger("orientationchange"))}var b=a(window),c,d,e;a.event.special.orientationchange=c={setup:function(){if(a.support.orientation)return!1;e=d(),b.bind("throttledresize",f)},teardown:function(){if(a.support.orientation)return!1;b.unbind("throttledresize",f)},add:function(a){var b=a.handler;a.handler=function(a){a.orientation=d();return b.apply(this,arguments)}}},a.event.special.orientationchange.orientation=d=function(){var a=document.documentElement;return a&&a.clientWidth/a.clientHeight<1.1?"portrait":"landscape"}}(jQuery),function(){a.event.special.throttledresize={setup:function(){a(this).bind("resize",c)},teardown:function(){a(this).unbind("resize",c)}};var b=250,c=function(){f=(new Date).getTime(),g=f-d,g<b?(e&&clearTimeout(e),e=setTimeout(c,b-g)):(d=f,a(this).trigger("throttledresize"))},d=0,e,f,g}(),a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})}(jQuery),function(a,b,c){function j(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var d="hashchange",e=document,f,g=a.event.special,h=e.documentMode,i="on"+d in b&&(h===c||h>7);a.fn[d]=function(a){return a?this.bind(d,a):this.trigger(d)},a.fn[d].delay=50,g[d]=a.extend(g[d],{setup:function(){if(i)return!1;a(f.start)},teardown:function(){if(i)return!1;a(f.stop)}}),f=function(){function n(){var c=j(),e=m(h);c!==h?(l(h=c,e),a(b).trigger(d)):e!==h&&(location.href=location.href.replace(/#.*/,"")+e),g=setTimeout(n,a.fn[d].delay)}var f={},g,h=j(),k=function(a){return a},l=k,m=k;f.start=function(){g||n()},f.stop=function(){g&&clearTimeout(g),g=c},a.browser.msie&&!i&&function(){var b,c;f.start=function(){b||(c=a.fn[d].src,c=c&&c+j(),b=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){c||l(j()),n()}).attr("src",c||"javascript:0").insertAfter("body")[0].contentWindow,e.onpropertychange=function(){try{event.propertyName==="title"&&(b.document.title=e.title)}catch(a){}})},f.stop=k,m=function(){return j(b.location.href)},l=function(c,f){var g=b.document,h=a.fn[d].domain;c!==f&&(g.title=e.title,g.open(),h&&g.write('<script>document.domain="'+h+'"</script>'),g.close(),b.location.hash=c)}}();return f}()}(jQuery,this),function(a,b){a.widget("mobile.page",a.mobile.widget,{options:{backBtnText:"Back",addBackBtn:!1,backBtnTheme:null,degradeInputs:{color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:!0,tel:!1,time:!1,url:!1,week:!1},keepNative:null},_create:function(){var b=this.element,c=this.options;this.keepNative=":jqmData(role='none'), :jqmData(role='nojs')"+(c.keepNative?", "+c.keepNative:"");if(this._trigger("beforeCreate")!==!1){b.find(":jqmData(role='page'), :jqmData(role='content')").andSelf().each(function(){a(this).addClass("ui-"+a(this).jqmData("role"))}),b.find(":jqmData(role='nojs')").addClass("ui-nojs");var d=b.find(":jqmData(role)").andSelf().each(function(){var d=a(this),e=d.jqmData("role"),f=d.jqmData("theme");if(e==="header"||e==="footer"){d.addClass("ui-bar-"+(f||d.parent(":jqmData(role='page')").jqmData("theme")||"a")),d.attr("role",e==="header"?"banner":"contentinfo");var g=d.children("a"),h=g.hasClass("ui-btn-left"),i=g.hasClass("ui-btn-right");h||(h=g.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length),i||(i=g.eq(1).addClass("ui-btn-right").length);if(c.addBackBtn&&e==="header"&&a(".ui-page").length>1&&b.jqmData("url")!==a.mobile.path.stripHash(location.hash)&&!h&&d.jqmData("backbtn")!==!1){var j=a("<a href='#' class='ui-btn-left' data-"+a.mobile.ns+"rel='back' data-"+a.mobile.ns+"icon='arrow-l'>"+c.backBtnText+"</a>").prependTo(d);c.backBtnTheme&&j.attr("data-"+a.mobile.ns+"theme",c.backBtnTheme)}d.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({tabindex:"0",role:"heading","aria-level":"1"})}else e==="content"?(f&&d.addClass("ui-body-"+f),d.attr("role","main")):e==="page"&&d.addClass("ui-body-"+(f||"c"));switch(e){case"header":case"footer":case"page":case"content":d.addClass("ui-"+e);break;case"collapsible":case"fieldcontain":case"navbar":case"listview":case"dialog":d[e]()}});this._enhanceControls(),b.find(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a").not(".ui-btn").not(this.keepNative).buttonMarkup(),b.find(":jqmData(role='controlgroup')").controlgroup(),b.find("a:not(.ui-btn):not(.ui-link-inherit)").not(this.keepNative).addClass("ui-link"),b.fixHeaderFooter()}},_typeAttributeRegex:/\s+type=["']?\w+['"]?/,_enhanceControls:function(){var b=this.options,c=this;this.element.find("input").not(this.keepNative).each(function(){var d=this.getAttribute("type"),e=b.degradeInputs[d]||"text";b.degradeInputs[d]&&a(this).replaceWith(a("<div>").html(a(this).clone()).html().replace(c._typeAttributeRegex,' type="'+e+'" data-'+a.mobile.ns+'type="'+d+'" '))});var d=this.element.find("input, textarea, select, button"),e=d.not(this.keepNative),f=d.filter("input[type=text]");f.length&&typeof f[0].autocorrect!=="undefined"&&f.each(function(){this.setAttribute("autocorrect","off"),this.setAttribute("autocomplete","off")}),e.filter("[type='radio'], [type='checkbox']").checkboxradio(),e.filter("button, [type='button'], [type='submit'], [type='reset'], [type='image']").button(),e.filter("input, textarea").not("[type='radio'], [type='checkbox'], [type='button'], [type='submit'], [type='reset'], [type='image'], [type='hidden']").textinput(),e.filter("input, select").filter(":jqmData(role='slider'), :jqmData(type='range')").slider(),e.filter("select:not(:jqmData(role='slider'))").selectmenu()}})}(jQuery),function(a,b,c){a.extend(a.mobile,{ns:"",subPageUrlKey:"ui-page",nonHistorySelectors:"dialog",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",ajaxEnabled:!0,useFastClick:!0,hashListeningEnabled:!0,defaultPageTransition:"slide",minScrollBack:screen.height/2,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",gradeA:function(){return a.support.mediaquery||a.mobile.browser.ie&&a.mobile.browser.ie>=7},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(c){a.type(c)!=="number"&&(c=a.mobile.defaultHomeScroll),a.event.special.scrollstart.enabled=!1,setTimeout(function(){b.scrollTo(0,c),a(document).trigger("silentscroll",{x:0,y:c})},20),setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},normalizeRegex:/-([a-z])/g,nsNormalize:function(b){if(b)return a.camelCase(a.mobile.ns+b)}}),a.fn.jqmData=function(b,c){return this.data(b?a.mobile.nsNormalize(b):b,c)},a.jqmData=function(b,c,d){return a.data(b,a.mobile.nsNormalize(c),d)},a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))},a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))},a.jqmHasData=function(b,c){return a.hasData(b,a.mobile.nsNormalize(c))};var d=a.find;a.find=function(b,c,e,f){b=b.replace(/:jqmData\(([^)]*)\)/g,"[data-"+(a.mobile.ns||"")+"$1]");return d.call(this,b,c,e,f)},a.extend(a.find,d),a.find.matches=function(b,c){return a.find(b,null,null,c)},a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}}(jQuery,this),function(a,b){function z(b){var c=a(b).closest(".ui-page").jqmData("url"),d=o.hrefNoHash;if(!c||!f.isPath(c))c=d;return f.makeUrlAbsolute(c,d)}function y(a){while(a){if(a.nodeName.toLowerCase()=="a")break;a=a.parentNode}return a}function x(b,c){c&&b.attr("data-"+a.mobile.ns+"role",c),b.page()}function w(){a("."+a.mobile.activePageClass).css("min-height",v())}function v(){var b=jQuery.event.special.orientationchange.orientation(),c=b==="portrait",d=c?480:320,e=c?screen.availHeight:screen.availWidth,f=Math.max(d,a(window).height()),g=Math.min(e,f);return g}function u(b,d,e,f){var h=a.support.scrollTop?c.scrollTop():!0,i=b.data("lastScroll")||a.mobile.defaultHomeScroll,j=v();h&&window.scrollTo(0,a.mobile.defaultHomeScroll),i<a.mobile.minScrollBack&&(i=0),d&&(d.height(j+h).jqmData("lastScroll",h).jqmData("lastClicked",g),d.data("page")._trigger("beforehide",null,{nextPage:b})),b.height(j+i).data("page")._trigger("beforeshow",null,{prevPage:d||a("")}),a.mobile.hidePageLoadingMsg();var k=a.mobile.transitionHandlers[e||"none"]||a.mobile.defaultTransitionHandler,l=k(e,f,b,d);l.done(function(){b.height(""),i?(a.mobile.silentScroll(i),a(document).one("silentscroll",function(){r(b)})):r(b),d&&d.height("").data("page")._trigger("hide",null,{nextPage:b}),b.data("page")._trigger("show",null,{prevPage:d||a("")})});return l}function t(){k=!1,j.length>0&&a.mobile.changePage.apply(null,j.pop())}function s(b){!!g&&(!g.closest(".ui-page-active").length||b)&&g.removeClass(a.mobile.activeBtnClass),g=null}function r(a){var b=a.jqmData("lastClicked");if(b&&b.length)b.focus();else{var c=a.find(".ui-title:eq(0)");c.length?c.focus():a.find(i).eq(0).focus()}}var c=a(window),d=a("html"),e=a("head"),f={urlParseRE:/^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,parseUrl:function(a){if(typeof a==="object")return a;var b=a||"",c=f.urlParseRE.exec(a),d;c&&(d={href:c[0]||"",hrefNoHash:c[1]||"",hrefNoSearch:c[2]||"",domain:c[3]||"",protocol:c[4]||"",authority:c[5]||"",username:c[7]||"",password:c[8]||"",host:c[9]||"",hostname:c[10]||"",port:c[11]||"",pathname:c[12]||"",directory:c[13]||"",filename:c[14]||"",search:c[15]||"",hash:c[16]||""});return d||{}},makePathAbsolute:function(a,b){if(a&&a.charAt(0)==="/")return a;a=a||"",b=b?b.replace(/^\/|\/?[^\/]*$/g,""):"";var c=b?b.split("/"):[],d=a.split("/");for(var e=0;e<d.length;e++){var f=d[e];switch(f){case".":break;case"..":c.length&&c.pop();break;default:c.push(f)}}return"/"+c.join("/")},isSameDomain:function(a,b){return f.parseUrl(a).domain===f.parseUrl(b).domain},isRelativeUrl:function(a){return f.parseUrl(a).protocol===""},isAbsoluteUrl:function(a){return f.parseUrl(a).protocol!==""},makeUrlAbsolute:function(a,b){if(!f.isRelativeUrl(a))return a;var c=f.parseUrl(a),d=f.parseUrl(b),e=c.protocol||d.protocol,g=c.authority||d.authority,h=c.pathname!=="",i=f.makePathAbsolute(c.pathname||d.filename,d.pathname),j=c.search||!h&&d.search||"",k=c.hash;return e+"//"+g+i+j+k},addSearchParams:function(b,c){var d=f.parseUrl(b),e=typeof c==="object"?a.param(c):c,g=d.search||"?";return d.hrefNoSearch+g+(g.charAt(g.length-1)!=="?"?"&":"")+e+(d.hash||"")},convertUrlToDataUrl:function(a){var b=f.parseUrl(a);if(f.isEmbeddedPage(b))return b.hash.replace(/^#/,"");if(f.isSameDomain(b,o))return b.hrefNoHash.replace(o.domain,"");return a},get:function(a){a===b&&(a=location.hash);return f.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,"")},getFilePath:function(b){var c="&"+a.mobile.subPageUrlKey;return b&&b.split(c)[0].split(l)[0]},set:function(a){location.hash=a},isPath:function(a){return/\//.test(a)},clean:function(a){return a.replace(o.domain,"")},stripHash:function(a){return a.replace(/^#/,"")},cleanHash:function(a){return f.stripHash(a.replace(/\?.*$/,"").replace(l,""))},isExternal:function(a){var b=f.parseUrl(a);return b.protocol&&b.domain!==n.domain?!0:!1},hasProtocol:function(a){return/^(:?\w+:)/.test(a)},isEmbeddedPage:function(a){var b=f.parseUrl(a);if(b.protocol!=="")return b.hash&&(b.hrefNoHash===n.hrefNoHash||p&&b.hrefNoHash===o.hrefNoHash);return/^#/.test(b.href)}},g=null,h={stack:[],activeIndex:0,getActive:function(){return h.stack[h.activeIndex]},getPrev:function(){return h.stack[h.activeIndex-1]},getNext:function(){return h.stack[h.activeIndex+1]},addNew:function(a,b,c,d){h.getNext()&&h.clearForward(),h.stack.push({url:a,transition:b,title:c,page:d}),h.activeIndex=h.stack.length-1},clearForward:function(){h.stack=h.stack.slice(0,h.activeIndex+1)},directHashChange:function(c){var d,e,f;a.each(h.stack,function(a,b){c.currentUrl===b.url&&(d=a<h.activeIndex,e=!d,f=a)}),this.activeIndex=f!==b?f:this.activeIndex,d?c.isBack():e&&c.isForward()},ignoreNextHashChange:!1},i="[tabindex],a,button:visible,select:visible,input",j=[],k=!1,l="&ui-state=dialog",m=e.children("base"),n=f.parseUrl(location.href),o=m.length?f.parseUrl(f.makeUrlAbsolute(m.attr("href"),n.href)):n,p=n.hrefNoHash!==o.hrefNoHash,q=a.support.dynamicBaseTag?{element:m.length?m:a("<base>",{href:o.hrefNoHash}).prependTo(e),set:function(a){q.element.attr("href",f.makeUrlAbsolute(a,o))},reset:function(){q.element.attr("href",o.hrefNoHash)}}:b;a.fn.animationComplete=function(b){if(a.support.cssTransitions)return a(this).one("webkitAnimationEnd",b);setTimeout(b,0);return a(this)},a.fn.transitionComplete=function(b){if(a.support.cssTransitions)return a(this).one("webkitTransitionEnd",b);setTimeout(b,0);return a(this)},a.mobile.updateHash=f.set,a.mobile.path=f,a.mobile.base=q,a.mobile.urlstack=h.stack,a.mobile.urlHistory=h,a.mobile.noneTransitionHandler=function(b,c,d,e){e&&e.removeClass(a.mobile.activePageClass),d.addClass(a.mobile.activePageClass);return a.Deferred().resolve(b,c,d,e).promise()},a.mobile.defaultTransitionHandler=a.mobile.noneTransitionHandler,a.mobile.transitionHandlers={none:a.mobile.defaultTransitionHandler},a.mobile.allowCrossDomainPages=!1,a.mobile.getDocumentUrl=function(b){return b?a.extend({},n):n.href},a.mobile.getDocumentBase=function(b){return b?a.extend({},o):o.href},a.mobile.loadPage=function(d,e){var g=a.Deferred(),h=a.extend({},a.mobile.loadPage.defaults,e),i=null,j=null,k=f.makeUrlAbsolute(d,o.hrefNoHash);h.data&&h.type==="get"&&(k=f.addSearchParams(k,h.data),h.data=b);var l=f.getFilePath(k),m=f.convertUrlToDataUrl(k);h.pageContainer=h.pageContainer||a.mobile.pageContainer,i=h.pageContainer.children(":jqmData(url='"+m+"')"),q&&q.reset();if(i.length){if(!h.reloadPage){x(i,h.role),g.resolve(k,e,i);return g.promise()}j=i}h.showLoadMsg&&a.mobile.showPageLoadingMsg(),a.ajax({url:l,type:h.type,data:h.data,dataType:"html",success:function(b){var c=a("<div></div>"),n=b.match(/<title[^>]*>([^<]*)/)&&RegExp.$1,o=new RegExp(".*(<[^>]+\\bdata-"+a.mobile.ns+"role=[\"']?page[\"']?[^>]*>).*"),p=new RegExp("\\bdata-"+a.mobile.ns+"url=[\"']?([^\"'>]*)[\"']?");o.test(b)&&RegExp.$1&&p.test(RegExp.$1)&&RegExp.$1&&(d=l=f.getFilePath(RegExp.$1)),q&&q.set(l),c.get(0).innerHTML=b,i=c.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),n&&!i.jqmData("title")&&i.jqmData("title",n);if(!a.support.dynamicBaseTag){var r=f.get(l);i.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function(){var b=a(this).is("[href]")?"href":a(this).is("[src]")?"src":"action",c=a(this).attr(b);c=c.replace(location.protocol+"//"+location.host+location.pathname,""),/^(\w+:|#|\/)/.test(c)||a(this).attr(b,r+c)})}i.attr("data-"+a.mobile.ns+"url",f.convertUrlToDataUrl(l)).appendTo(h.pageContainer),x(i,h.role),k.indexOf("&"+a.mobile.subPageUrlKey)>-1&&(i=h.pageContainer.children(":jqmData(url='"+m+"')")),h.showLoadMsg&&a.mobile.hidePageLoadingMsg(),g.resolve(k,e,i,j)},error:function(){q&&q.set(f.get()),h.showLoadMsg&&(a.mobile.hidePageLoadingMsg(),a("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>"+a.mobile.pageLoadErrorMessage+"</h1></div>").css({display:"block",opacity:.96,top:c.scrollTop()+100}).appendTo(h.pageContainer).delay(800).fadeOut(400,function(){a(this).remove()})),g.reject(k,e)}});return g.promise()},a.mobile.loadPage.defaults={type:"get",data:b,reloadPage:!1,role:b,showLoadMsg:!0,pageContainer:b},a.mobile.changePage=function(c,e){if(typeof e!=="object"){var g=null;typeof c==="object"&&c.url&&c.type&&(g={type:c.type,data:c.data,forcePageLoad:!0},c=c.url);var i=arguments.length;if(i>1){var m=["transition","reverse","changeHash","fromHashChange"],n;for(n=1;n<i;n++){var o=arguments[n];typeof o!=="undefined"&&(g=g||{},g[m[n-1]]=o)}}if(g)return a.mobile.changePage(c,g)}if(k)j.unshift(arguments);else{k=!0;var p=a.extend({},a.mobile.changePage.defaults,e);p.pageContainer=p.pageContainer||a.mobile.pageContainer;if(typeof c=="string"){a.mobile.loadPage(c,p).done(function(b,c,d,e){k=!1,c.duplicateCachedPage=e,a.mobile.changePage(d,c)}).fail(function(a,b){k=!1,s(!0),t(),p.pageContainer.trigger("changepagefailed")});return}var q=p.pageContainer,r=a.mobile.activePage,v=c.jqmData("url"),w=f.getFilePath(v),y=h.getActive(),z=h.activeIndex===0,A=0,B=document.title,C=p.role==="dialog"||c.jqmData("role")==="dialog";q.trigger("beforechangepage");if(r&&r[0]===c[0]){k=!1,q.trigger("changepage");return}x(c,p.role),p.fromHashChange&&h.directHashChange({currentUrl:v,isBack:function(){A=-1},isForward:function(){A=1}}),a(document.activeElement||"").add("input:focus, textarea:focus, select:focus").blur(),C&&y&&(v=y.url+l),p.changeHash!==!1&&v&&(h.ignoreNextHashChange=!0,f.set(v));var D=c.jqmData("title")||c.children(":jqmData(role='header')").find(".ui-title").text();!!D&&B==document.title&&(B=D),A||h.addNew(v,p.transition,B,c),document.title=h.getActive().title,a.mobile.activePage=c,p.transition=p.transition||(A&&!z?y.transition:b)||(p.role==="dialog"?a.mobile.defaultDialogTransition:a.mobile.defaultPageTransition),p.reverse=p.reverse||A<0,u(c,r,p.transition,p.reverse).done(function(){s(),p.duplicateCachedPage&&p.duplicateCachedPage.remove(),d.removeClass("ui-mobile-rendering"),t(),q.trigger("changepage")})}},a.mobile.changePage.defaults={transition:b,reverse:!1,changeHash:!0,fromHashChange:!1,role:b,duplicateCachedPage:b,pageContainer:b},a("form").live("submit",function(b){var c=a(this);if(a.mobile.ajaxEnabled&&!c.is(":jqmData(ajax='false')")){var d=c.attr("method"),e=f.makeUrlAbsolute(c.attr("action"),z(c)),g=c.attr("target");if(f.isExternal(e)||g)return;a.mobile.changePage(e,{type:d.length&&d.toLowerCase()||"get",data:c.serialize(),transition:c.jqmData("transition"),direction:c.jqmData("direction"),reloadPage:!0}),b.preventDefault()}}),a(document).bind("vclick",function(b){var c=y(b.target);c&&(f.parseUrl(c.getAttribute("href")||"#").hash!=="#"&&(a(c).closest(".ui-btn").not(".ui-disabled").addClass(a.mobile.activeBtnClass),a("."+a.mobile.activePageClass+" .ui-btn").not(c).blur()))}),a(document).bind(a.mobile.useFastClick?"vclick click":"click",function(c){var d=y(c.target);if(d){var e=a(d),h=function(){window.setTimeout(function(){s(!0)},200)};if(e.is(":jqmData(rel='back')")){window.history.back();return!1}if(!a.mobile.ajaxEnabled){h();return}var i=z(e),j=f.makeUrlAbsolute(e.attr("href")||"#",i);if(j.search("#")!=-1){j=j.replace(/[^#]*#/,"");if(j)f.isPath(j)?j=f.makeUrlAbsolute(j,i):j=f.makeUrlAbsolute("#"+j,n.hrefNoHash);else{c.preventDefault();return}}var k=e.is("[rel='external']")||e.is(":jqmData(ajax='false')")||e.is("[target]"),l=a.mobile.allowCrossDomainPages&&n.protocol==="file:"&&j.search(/^https?:/)!=-1,m=k||f.isExternal(j)&&!l;g=e.closest(".ui-btn");if(m){h();return}var o=e.jqmData("transition"),p=e.jqmData("direction"),q=p&&p==="reverse"||e.jqmData("back"),r=e.attr("data-"+a.mobile.ns+"rel")||b;a.mobile.changePage(j,{transition:o,reverse:q,role:r}),c.preventDefault()}}),c.bind("hashchange",function(c,d){var e=f.stripHash(location.hash),g=a.mobile.urlHistory.stack.length===0?"none":b;if(!a.mobile.hashListeningEnabled||h.ignoreNextHashChange)h.ignoreNextHashChange=!1;else{if(h.stack.length>1&&e.indexOf(l)>-1){if(!a.mobile.activePage.is(".ui-dialog")){h.directHashChange({currentUrl:e,isBack:function(){window.history.back()},isForward:function(){window.history.forward()}});return}var i=function(){e=a.mobile.urlHistory.getActive().page};h.directHashChange({currentUrl:e,isBack:i,isForward:i})}e?(e=typeof e==="string"&&!f.isPath(e)?"#"+e:e,a.mobile.changePage(e,{transition:g,changeHash:!1,fromHashChange:!0})):a.mobile.changePage(a.mobile.firstPage,{transition:g,changeHash:!1,fromHashChange:!0})}}),a(document).bind("pageshow",w),a(window).bind("throttledresize",w)}(jQuery),function(a,b,c){function d(b,c,d,e){var f=new a.Deferred,g=c?" reverse":"",h="ui-mobile-viewport-transitioning viewport-"+b,i=function(){d.add(e).removeClass("out in reverse "+b),e&&e.removeClass(a.mobile.activePageClass),d.parent().removeClass(h),f.resolve(b,c,d,e)};d.animationComplete(i),d.parent().addClass(h),e&&e.addClass(b+" out"+g),d.addClass(a.mobile.activePageClass+" "+b+" in"+g);return f.promise()}a.mobile.css3TransitionHandler=d,a.mobile.defaultTransitionHandler===a.mobile.noneTransitionHandler&&(a.mobile.defaultTransitionHandler=d)}(jQuery,this),function(a,b,c){function d(c,d,e,f){var g=new a.Deferred,h=d?" reverse":"",i="ui-mobile-viewport-transitioning viewport-"+c,j=function(){e.add(f).removeClass("transition out2 in2 reverse start end "+c),f&&f.removeClass(a.mobile.activePageClass),e.parent().removeClass(i),g.resolve(c,d,e,f)};e.transitionComplete(j),e.parent().addClass(i),f&&f.addClass("transition2 "+c+" out2"+h+" start"),e.addClass(a.mobile.activePageClass+" transition2 "+c+" in2"+h+" start"),b.setTimeout(function(){f&&f.addClass("end"),e.addClass("end")},10);return g.promise()}a.mobile.css3Transition2Handler=d,a.mobile.browser.android&&a.mobile.defaultTransitionHandler===a.mobile.css3TransitionHandler&&(a.mobile.defaultTransitionHandler=d)}(jQuery,this),function(a,b){a.fn.fixHeaderFooter=function(b){if(!a.support.scrollTop)return this;return this.each(function(){var b=a(this);b.jqmData("fullscreen")&&b.addClass("ui-page-fullscreen"),b.find(".ui-header:jqmData(position='fixed')").addClass("ui-header-fixed ui-fixed-inline fade"),b.find(".ui-footer:jqmData(position='fixed')").addClass("ui-footer-fixed ui-fixed-inline fade")})},a.fixedToolbars=function(){function r(b){var c=a(window).scrollTop(),d=q(b[0]),e=b.css("top")=="auto"?0:parseFloat(b.css("top")),f=window.innerHeight,g=b.outerHeight(),h=b.parents(".ui-page:not(.ui-page-fullscreen)").length,i;if(b.is(".ui-header-fixed")){i=c-d+e,i<d&&(i=0);return b.css("top",h?i:c)}i=c+f-g-(d-e);return b.css("top",h?i:c+f-g)}function q(a){var b=0;if(a){var c=a.offsetParent,d=document.body;b=a.offsetTop;while(a&&a!=d)b+=a.scrollTop||0,a==c&&(b+=c.offsetTop,c=a.offsetParent),a=a.parentNode}return b}function p(b){!d&&c=="overlay"&&(f||a.fixedToolbars.hide(!0),a.fixedToolbars.startShowTimer())}if(a.support.scrollTop){var c="inline",d=!1,e=100,f,g="a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed",h=".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last",i,j=a.support.touch,k=j?"touchstart":"mousedown",l=j?"touchend":"mouseup",m=null,n=!1,o=!0;a(function(){a(document).bind("vmousedown",function(a){o&&(m=c)}).bind("vclick",function(b){if(o){if(a(b.target).closest(g).length)return;n||(a.fixedToolbars.toggle(m),m=null)}}).bind("silentscroll",p),(a(document).scrollTop()==0?a(window):a(document)).bind("scrollstart",function(b){n=!0,m==null&&(m=c);var e=m=="overlay";d=e||!!f,d&&(a.fixedToolbars.clearShowTimer(),e&&a.fixedToolbars.hide(!0))}).bind("scrollstop",function(b){a(b.target).closest(g).length||(n=!1,d&&(d=!1,a.fixedToolbars.startShowTimer()),m=null)}),a(window).bind("resize",p)}),a(".ui-page").live("pagebeforeshow",function(b,c){var d=a(b.target),e=d.find(":jqmData(role='footer')"),f=e.data("id"),g=c.prevPage,h=g&&g.find(":jqmData(role='footer')"),j=h.length&&h.jqmData("id")===f;f&&j&&(i=e,r(i.removeClass("fade in out").appendTo(a.mobile.pageContainer)))}),a(".ui-page").live("pageshow",function(b,c){var d=a(this);i&&i.length&&setTimeout(function(){r(i.appendTo(d).addClass("fade")),i=null},500),a.fixedToolbars.show(!0,this)}),a(".ui-collapsible-contain").live("collapse expand",p);return{show:function(b,d){a.fixedToolbars.clearShowTimer(),c="overlay";var e=d?a(d):a.mobile.activePage?a.mobile.activePage:a(".ui-page-active");return e.children(h).each(function(){var c=a(this),d=a(window).scrollTop(),e=q(c[0]),f=window.innerHeight,g=c.outerHeight(),h=c.is(".ui-header-fixed")&&d<=e+g||c.is(".ui-footer-fixed")&&e<=d+f;c.addClass("ui-fixed-overlay").removeClass("ui-fixed-inline"),!h&&!b&&c.animationComplete(function(){c.removeClass("in")}).addClass("in"),r(c)})},hide:function(b){c="inline";var d=a.mobile.activePage?a.mobile.activePage:a(".ui-page-active");return d.children(h).each(function(){var c=a(this),d=c.css("top");d=d=="auto"?0:parseFloat(d),c.addClass("ui-fixed-inline").removeClass("ui-fixed-overlay");if(d<0||c.is(".ui-header-fixed")&&d!=0)if(b)c.css("top",0);else if(c.css("top")!=="auto"&&parseFloat(c.css("top"))!==0){var e="out reverse";c.animationComplete(function(){c.removeClass(e),c.css("top",0)}).addClass(e)}})},startShowTimer:function(){a.fixedToolbars.clearShowTimer();var c=a.makeArray(arguments);f=setTimeout(function(){f=b,a.fixedToolbars.show.apply(null,c)},e)},clearShowTimer:function(){f&&clearTimeout(f),f=b},toggle:function(b){b&&(c=b);return c=="overlay"?a.fixedToolbars.hide():a.fixedToolbars.show()},setTouchToggleEnabled:function(a){o=a}}}}()}(jQuery),function(a,b){a.widget("mobile.checkboxradio",a.mobile.widget,{options:{theme:null},_create:function(){var c=this,d=this.element,e=d.closest("form,fieldset,:jqmData(role='page')").find("label").filter('[for="'+d[0].id+'"]'),f=d.attr("type"),g="ui-icon-"+f+"-on",h="ui-icon-"+f+"-off";if(f=="checkbox"||f=="radio")a.extend(this,{label:e,inputtype:f,checkedicon:g,uncheckedicon:h}),this.options.theme||(this.options.theme=this.element.jqmData("theme")),e.buttonMarkup({theme:this.options.theme,icon:this.element.parents(":jqmData(type='horizontal')").length?b:h,shadow:!1}),d.add(e).wrapAll("<div class='ui-"+f+"'></div>"),e.bind({vmouseover:function(){if(a(this).parent().is(".ui-disabled"))return!1},vclick:function(a){if(d.is(":disabled"))a.preventDefault();else{c._cacheVals(),d.prop("checked",f==="radio"&&!0||!d.prop("checked")),c._getInputSet().not(d).prop("checked",!1),c._updateAll();return!1}}}),d.bind({vmousedown:function(){this._cacheVals()},vclick:function(){a(this).is(":checked")?(a(this).prop("checked",!0),c._getInputSet().not(a(this)).prop("checked",!1)):a(this).prop("checked",!1),c._updateAll()},focus:function(){e.addClass("ui-focus")},blur:function(){e.removeClass("ui-focus")}}),this.refresh()},_cacheVals:function(){this._getInputSet().each(function(){a(this).jqmData("cacheVal",a(this).is(":checked"))})},_getInputSet:function(){if(this.inputtype=="checkbox")return this.element;return this.element.closest("form,fieldset,:jqmData(role='page')").find("input[name='"+this.element.attr("name")+"'][type='"+this.inputtype+"']")},_updateAll:function(){var b=this;this._getInputSet().each(function(){(a(this).is(":checked")||b.inputtype==="checkbox")&&a(this).trigger("change")}).checkboxradio("refresh")},refresh:function(){var b=this.element,c=this.label,d=c.find(".ui-icon");a(b[0]).prop("checked")?(c.addClass(a.mobile.activeBtnClass),d.addClass(this.checkedicon).removeClass(this.uncheckedicon)):(c.removeClass(a.mobile.activeBtnClass),d.removeClass(this.checkedicon).addClass(this.uncheckedicon)),b.is(":disabled")?this.disable():this.enable()},disable:function(){this.element.prop("disabled",!0).parent().addClass("ui-disabled")},enable:function(){this.element.prop("disabled",!1).parent().removeClass("ui-disabled")}})}(jQuery),function(a,b){a.widget("mobile.textinput",a.mobile.widget,{options:{theme:null},_create:function(){var b=this.element,c=this.options,d=c.theme,e;if(!d)var f=this.element.closest("[class*='ui-bar-'],[class*='ui-body-']"),g=f.length&&/ui-(bar|body)-([a-z])/.exec(f.attr("class")),d=g&&g[2]||"c";e=" ui-body-"+d,a('label[for="'+b.attr("id")+'"]').addClass("ui-input-text"),b.addClass("ui-input-text ui-body-"+c.theme);var h=b;if(b.is("[type='search'],:jqmData(type='search')")){h=b.wrap('<div class="ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield'+e+'"></div>').parent();var i=a('<a href="#" class="ui-input-clear" title="clear text">clear text</a>').tap(function(a){b.val("").focus(),b.trigger("change"),i.addClass("ui-input-clear-hidden"),a.preventDefault()}).appendTo(h).buttonMarkup({icon:"delete",iconpos:"notext",corners:!0,shadow:!0});function j(){b.val()==""?i.addClass("ui-input-clear-hidden"):i.removeClass("ui-input-clear-hidden")}j(),b.keyup(j),b.focus(j)}else b.addClass("ui-corner-all ui-shadow-inset"+e);b.focus(function(){h.addClass("ui-focus")}).blur(function(){h.removeClass("ui-focus")});if(b.is("textarea")){var k=15,l=100,m=function(){var a=b[0].scrollHeight,c=b[0].clientHeight;c<a&&b.css({height:a+k})},n;b.keyup(function(){clearTimeout(n),n=setTimeout(m,l)})}},disable:function(){(this.element.attr("disabled",!0).is("[type='search'],:jqmData(type='search')")?this.element.parent():this.element).addClass("ui-disabled")},enable:function(){(this.element.attr("disabled",!1).is("[type='search'],:jqmData(type='search')")?this.element.parent():this.element).removeClass("ui-disabled")}})}(jQuery),function(a,b){a.widget("mobile.selectmenu",a.mobile.widget,{options:{theme:null,disabled:!1,icon:"arrow-d",iconpos:"right",inline:null,corners:!0,shadow:!0,iconshadow:!0,menuPageTheme:"b",overlayTheme:"a",hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0},_create:function(){var b=this,c=this.options,d=this.element.wrap("<div class='ui-select'>"),e=d.attr("id"),f=a('label[for="'+e+'"]').addClass("ui-select"),g=d[0].selectedIndex==-1?0:d[0].selectedIndex,h=(b.options.nativeMenu?a("<div/>"):a("<a>",{href:"#",role:"button",id:k,"aria-haspopup":"true","aria-owns":l})).text(a(d[0].options.item(g)).text()).insertBefore(d).buttonMarkup({theme:c.theme,icon:c.icon,iconpos:c.iconpos,inline:c.inline,corners:c.corners,shadow:c.shadow,iconshadow:c.iconshadow}),i=b.isMultiple=d[0].multiple;c.nativeMenu&&window.opera&&window.opera.version&&d.addClass("ui-select-nativeonly");if(!c.nativeMenu)var j=d.find("option"),k=e+"-button",l=e+"-menu",m=d.closest(".ui-page"),n=/ui-btn-up-([a-z])/.exec(h.attr("class"))[1],o=a("<div data-"+a.mobile.ns+"role='dialog' data-"+a.mobile.ns+"theme='"+c.menuPageTheme+"'><div data-"+a.mobile.ns+"role='header'><div class='ui-title'>"+f.text()+"</div></div><div data-"+a.mobile.ns+"role='content'></div></div>").appendTo(a.mobile.pageContainer).page(),p=o.find(".ui-content"),q=o.find(".ui-header a"),r=a("<div>",{"class":"ui-selectmenu-screen ui-screen-hidden"}).appendTo(m),s=a("<div>",{"class":"ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all pop ui-body-"+c.overlayTheme}).insertAfter(r),t=a("<ul>",{"class":"ui-selectmenu-list",id:l,role:"listbox","aria-labelledby":k}).attr("data-"+a.mobile.ns+"theme",n).appendTo(s),u=a("<div>",{"class":"ui-header ui-bar-"+n}).prependTo(s),v=a("<h1>",{"class":"ui-title"}).appendTo(u),w=a("<a>",{text:c.closeText,href:"#","class":"ui-btn-left"}).attr("data-"+a.mobile.ns+"iconpos","notext").attr("data-"+a.mobile.ns+"icon","delete").appendTo(u).buttonMarkup(),x;i&&(b.buttonCount=a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(h)),c.disabled&&this.disable(),d.change(function(){b.refresh()}),a.extend(b,{select:d,optionElems:j,selectID:e,label:f,buttonId:k,menuId:l,thisPage:m,button:h,menuPage:o,menuPageContent:p,screen:r,listbox:s,list:t,menuType:x,header:u,headerClose:w,headerTitle:v,placeholder:""}),c.nativeMenu?d.appendTo(h).bind("vmousedown",function(b){h.addClass(a.mobile.activeBtnClass)}).bind("focus vmouseover",function(){h.trigger("vmouseover")}).bind("vmousemove",function(){h.removeClass(a.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){h.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)}):(b.refresh(),d.attr("tabindex","-1").focus(function(){a(this).blur(),h.focus()}),h.bind("vclick keydown",function(c){if(c.type=="vclick"||c.keyCode&&(c.keyCode===a.mobile.keyCode.ENTER||c.keyCode===a.mobile.keyCode.SPACE))b.open(),c.preventDefault()}),t.attr("role","listbox").delegate(".ui-li>a","focusin",function(){a(this).attr("tabindex","0")}).delegate(".ui-li>a","focusout",function(){a(this).attr("tabindex","-1")}).delegate("li:not(.ui-disabled, .ui-li-divider)","vclick",function(c){var e=d[0].selectedIndex,f=t.find("li:not(.ui-li-divider)").index(this),g=b.optionElems.eq(f)[0];g.selected=i?!g.selected:!0,i&&a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on",g.selected).toggleClass("ui-icon-checkbox-off",!g.selected),(i||e!==f)&&d.trigger("change"),i||b.close(),c.preventDefault()}).keydown(function(b){var c=a(b.target),d=c.closest("li");switch(b.keyCode){case 38:var e=d.prev();e.length&&(c.blur().attr("tabindex","-1"),e.find("a").first().focus());return!1;case 40:var f=d.next();f.length&&(c.blur().attr("tabindex","-1"),f.find("a").first().focus());return!1;case 13:case 32:c.trigger("vclick");return!1}}),r.bind("vclick",function(a){b.close()}),b.headerClose.click(function(){if(b.menuType=="overlay"){b.close();return!1}}))},_buildList:function(){var b=this,c=this.options,d=this.placeholder,e=[],f=[],g=b.isMultiple?"checkbox-off":"false";b.list.empty().filter(".ui-listview").listview("destroy"),b.select.find("option").each(function(h){var i=a(this),j=i.parent(),k=i.text(),l="<a href='#'>"+k+"</a>",m=[],n=[];if(j.is("optgroup")){var p=j.attr("label");a.inArray(p,e)===-1&&(f.push("<li data-"+a.mobile.ns+"role='list-divider'>"+p+"</li>"),e.push(p))}if(!this.getAttribute("value")||k.length==0||i.jqmData("placeholder"))c.hidePlaceholderMenuItems&&m.push("ui-selectmenu-placeholder"),d=b.placeholder=k;this.disabled&&(m.push("ui-disabled"),n.push("aria-disabled='true'")),f.push("<li data-"+a.mobile.ns+"icon='"+g+"' class='"+m.join(" ")+"' "+n.join(" ")+">"+l+"</li>")}),b.list.html(f.join(" ")),b.list.find("li").attr({role:"option",tabindex:"-1"}).first().attr("tabindex","0"),this.isMultiple||this.headerClose.hide(),this.isMultiple||d.length?this.headerTitle.text(this.placeholder):this.header.hide(),b.list.listview()},refresh:function(b){var c=this,d=this.element,e=this.isMultiple,f=this.optionElems=d.find("option"),g=f.filter(":selected"),h=g.map(function(){return f.index(this)}).get();!c.options.nativeMenu&&(b||d[0].options.length!=c.list.find("li").length)&&c._buildList(),c.button.find(".ui-btn-text").text(function(){if(!e)return g.text();return g.length?g.map(function(){return a(this).text()}).get().join(", "):c.placeholder}),e&&c.buttonCount[g.length>1?"show":"hide"]().text(g.length),c.options.nativeMenu||c.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected",!1).each(function(b){if(a.inArray(b,h)>-1){var c=a(this).addClass(a.mobile.activeBtnClass);c.find("a").attr("aria-selected",!0),e&&c.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on")}})},open:function(){function i(){b.list.find(".ui-btn-active").focus()}if(!this.options.disabled&&!this.options.nativeMenu){var b=this,c=b.list.parent().outerHeight(),d=b.list.parent().outerWidth(),e=a(window).scrollTop(),f=b.button.offset().top,g=window.innerHeight,h=window.innerWidth;b.button.addClass(a.mobile.activeBtnClass),setTimeout(function(){b.button.removeClass(a.mobile.activeBtnClass)},300);if(c>g-80||!a.support.scrollTop)e==0&&f>g&&b.thisPage.one("pagehide",function(){a(this).jqmData("lastScroll",f)}),b.menuPage.one("pageshow",function(){a(window).one("silentscroll",function(){i()})}),b.menuType="page",b.menuPageContent.append(b.list),a.mobile.changePage(b.menuPage,{transition:"pop"});else{b.menuType="overlay",b.screen.height(a(document).height()).removeClass("ui-screen-hidden");var j=f-e,k=e+g-f,l=c/2,m=parseFloat(b.list.parent().css("max-width")),n,o;j>c/2&&k>c/2?n=f+b.button.outerHeight()/2-l:n=j>k?e+g-c-30:e+30,d<m?o=(h-d)/2:(o=b.button.offset().left+b.button.outerWidth()/2-d/2,o<30?o=30:o+d>h&&(o=h-d-30)),b.listbox.append(b.list).removeClass("ui-selectmenu-hidden").css({top:n,left:o}).addClass("in"),i()}setTimeout(function(){b.isOpen=!0},400)}},close:function(){function b(){setTimeout(function(){a.button.focus()},40),a.listbox.removeAttr("style").append(a.list)}if(!this.options.disabled&&this.isOpen&&!this.options.nativeMenu){var a=this;a.menuType=="page"?(a.menuPage.one("pagehide",b),window.history.back()):(a.screen.addClass("ui-screen-hidden"),a.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in"),b()),this.isOpen=!1}},disable:function(){this.element.attr("disabled",!0),this.button.addClass("ui-disabled").attr("aria-disabled",!0);return this._setOption("disabled",!0)},enable:function(){this.element.attr("disabled",!1),this.button.removeClass("ui-disabled").attr("aria-disabled",!1);return this._setOption("disabled",!1)}})}(jQuery),function(a,b){function c(b){while(b){var c=a(b);if(c.hasClass("ui-btn")&&!c.hasClass("ui-disabled"))break;b=b.parentNode}return b}a.fn.buttonMarkup=function(b){return this.each(function(){var c=a(this),e=a.extend({},a.fn.buttonMarkup.defaults,c.jqmData(),b),f,g="ui-btn-inner",h;d&&d();if(!e.theme){var i=c.closest("[class*='ui-bar-'],[class*='ui-body-']");e.theme=i.length?/ui-(bar|body)-([a-z])/.exec(i.attr("class"))[2]:"c"}f="ui-btn ui-btn-up-"+e.theme,e.inline&&(f+=" ui-btn-inline"),e.icon&&(e.icon="ui-icon-"+e.icon,e.iconpos=e.iconpos||"left",h="ui-icon "+e.icon,e.shadow&&(h+=" ui-icon-shadow")),e.iconpos&&(f+=" ui-btn-icon-"+e.iconpos,e.iconpos=="notext"&&!c.attr("title")&&c.attr("title",c.text())),e.corners&&(f+=" ui-btn-corner-all",g+=" ui-btn-corner-all"),e.shadow&&(f+=" ui-shadow"),c.attr("data-"+a.mobile.ns+"theme",e.theme).addClass(f);var j=("<D class='"+g+"'><D class='ui-btn-text'></D>"+(e.icon?"<span class='"+h+"'></span>":"")+"</D>").replace(/D/g,e.wrapperEls);c.wrapInner(j)})},a.fn.buttonMarkup.defaults={corners:!0,shadow:!0,iconshadow:!0,wrapperEls:"span"};var d=function(){a(document).bind({vmousedown:function(b){var d=c(b.target);if(d){var e=a(d),f=e.attr("data-"+a.mobile.ns+"theme");e.removeClass("ui-btn-up-"+f).addClass("ui-btn-down-"+f)}},"vmousecancel vmouseup":function(b){var d=c(b.target);if(d){var e=a(d),f=e.attr("data-"+a.mobile.ns+"theme");e.removeClass("ui-btn-down-"+f).addClass("ui-btn-up-"+f)}},"vmouseover focus":function(b){var d=c(b.target);if(d){var e=a(d),f=e.attr("data-"+a.mobile.ns+"theme");e.removeClass("ui-btn-up-"+f).addClass("ui-btn-hover-"+f)}},"vmouseout blur":function(b){var d=c(b.target);if(d){var e=a(d),f=e.attr("data-"+a.mobile.ns+"theme");e.removeClass("ui-btn-hover-"+f).addClass("ui-btn-up-"+f)}}}),d=null}}(jQuery),function(a,b){a.widget("mobile.button",a.mobile.widget,{options:{theme:null,icon:null,iconpos:null,inline:null,corners:!0,shadow:!0,iconshadow:!0},_create:function(){var b=this.element,c=this.options;this.button=a("<div></div>").text(b.text()||b.val()).buttonMarkup({theme:c.theme,icon:c.icon,iconpos:c.iconpos,inline:c.inline,corners:c.corners,shadow:c.shadow,iconshadow:c.iconshadow}).insertBefore(b).append(b.addClass("ui-btn-hidden"));var d=b.attr("type");d!=="button"&&d!=="reset"&&b.bind("vclick",function(){var c=a("<input>",{type:"hidden",name:b.attr("name"),value:b.attr("value")}).insertBefore(b);a(document).submit(function(){c.remove()})}),this.refresh()},enable:function(){this.element.attr("disabled",!1),this.button.removeClass("ui-disabled").attr("aria-disabled",!1);return this._setOption("disabled",!1)},disable:function(){this.element.attr("disabled",!0),this.button.addClass("ui-disabled").attr("aria-disabled",!0);return this._setOption("disabled",!0)},refresh:function(){this.element.attr("disabled")?this.disable():this.enable()}})}(jQuery),function(a,b){a.widget("mobile.slider",a.mobile.widget,{options:{theme:null,trackTheme:null,disabled:!1},_create:function(){var b=this,c=this.element,d=c.parents("[class*=ui-bar-],[class*=ui-body-]").eq(0),d=d.length?d.attr("class").match(/ui-(bar|body)-([a-z])/)[2]:"c",e=this.options.theme?this.options.theme:d,f=this.options.trackTheme?this.options.trackTheme:d,g=c[0].nodeName.toLowerCase(),h=g=="select"?"ui-slider-switch":"",i=c.attr("id"),j=i+"-label",k=a('[for="'+i+'"]').attr("id",j),l=function(){return g=="input"?parseFloat(c.val()):c[0].selectedIndex},m=g=="input"?parseFloat(c.attr("min")):0,n=g=="input"?parseFloat(c.attr("max")):c.find("option").length-1,o=window.parseFloat(c.attr("step")||1),p=a('<div class="ui-slider '+h+" ui-btn-down-"+f+' ui-btn-corner-all" role="application"></div>'),q=a('<a href="#" class="ui-slider-handle"></a>').appendTo(p).buttonMarkup({corners:!0,theme:e,shadow:!0}).attr({role:"slider","aria-valuemin":m,"aria-valuemax":n,"aria-valuenow":l(),"aria-valuetext":l(),title:l(),"aria-labelledby":j});a.extend(this,{slider:p,handle:q,dragging:!1,beforeStart:null});if(g=="select"){p.wrapInner('<div class="ui-slider-inneroffset"></div>');var r=c.find("option");c.find("option").each(function(b){var c=b==0?"b":"a",d=b==0?"right":"left",e=b==0?" ui-btn-down-"+f:" ui-btn-active";a('<div class="ui-slider-labelbg ui-slider-labelbg-'+c+e+" ui-btn-corner-"+d+'"></div>').prependTo(p),a('<span class="ui-slider-label ui-slider-label-'+c+e+" ui-btn-corner-"+d+'" role="img">'+a(this).text()+"</span>").prependTo(q)})}k.addClass("ui-slider"),c.addClass(g=="input"?"ui-slider-input":"ui-slider-switch").change(function(){b.refresh(l(),!0)}).keyup(function(){b.refresh(l(),!0,!0)}).blur(function(){b.refresh(l(),!0)}),a(document).bind("vmousemove",function(a){if(b.dragging){b.refresh(a);return!1}}),p.bind("vmousedown",function(a){b.dragging=!0,g==="select"&&(b.beforeStart=c[0].selectedIndex),b.refresh(a);return!1}),p.add(document).bind("vmouseup",function(){if(b.dragging){b.dragging=!1;if(g==="select"){b.beforeStart===c[0].selectedIndex&&b.refresh(b.beforeStart===0?1:0);var a=l(),d=Math.round(a/(n-m)*100);q.addClass("ui-slider-handle-snapping").css("left",d+"%").animationComplete(function(){q.removeClass("ui-slider-handle-snapping")})}return!1}}),p.insertAfter(c),this.handle.bind("vmousedown",function(){a(this).focus()}).bind("vclick",!1),this.handle.bind("keydown",function(c){var d=l();if(!b.options.disabled){switch(c.keyCode){case a.mobile.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:c.preventDefault(),b._keySliding||(b._keySliding=!0,a(this).addClass("ui-state-active"))}switch(c.keyCode){case a.mobile.keyCode.HOME:b.refresh(m);break;case a.mobile.keyCode.END:b.refresh(n);break;case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:b.refresh(d+o);break;case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:b.refresh(d-o)}}}).keyup(function(c){b._keySliding&&(b._keySliding=!1,a(this).removeClass("ui-state-active"))}),this.refresh()},refresh:function(a,b,c){if(!this.options.disabled){var d=this.element,e,f=d[0].nodeName.toLowerCase(),g=f==="input"?parseFloat(d.attr("min")):0,h=f==="input"?parseFloat(d.attr("max")):d.find("option").length-1;if(typeof a==="object"){var i=a,j=8;if(!this.dragging||i.pageX<this.slider.offset().left-j||i.pageX>this.slider.offset().left+this.slider.width()+j)return;e=Math.round((i.pageX-this.slider.offset().left)/this.slider.width()*100)}else a==null&&(a=f==="input"?parseFloat(d.val()):d[0].selectedIndex),e=(parseFloat(a)-g)/(h-g)*100;if(isNaN(e))return;e<0&&(e=0),e>100&&(e=100);var k=Math.round(e/100*(h-g))+g;k<g&&(k=g),k>h&&(k=h),e<=60||f!=="select",this.handle.css("left",e+"%"),this.handle.attr({"aria-valuenow":f==="input"?k:d.find("option").eq(k).attr("value"),"aria-valuetext":f==="input"?k:d.find("option").eq(k).text(),title:k}),f==="select"&&(k===0?this.slider.addClass("ui-slider-switch-a").removeClass("ui-slider-switch-b"):this.slider.addClass("ui-slider-switch-b").removeClass("ui-slider-switch-a")),c||(f==="input"?d.val(k):d[0].selectedIndex=k,b||d.trigger("change"))}},enable:function(){this.element.attr("disabled",!1),this.slider.removeClass("ui-disabled").attr("aria-disabled",!1);return this._setOption("disabled",!1)},disable:function(){this.element.attr("disabled",!0),this.slider.addClass("ui-disabled").attr("aria-disabled",!0);return this._setOption("disabled",!0)}})}(jQuery),function(a,b){a.widget("mobile.collapsible",a.mobile.widget,{options:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsed:!1,heading:">:header,>legend",theme:null,iconTheme:"d"},_create:function(){var b=this.element,c=this.options,d=b.addClass("ui-collapsible-contain"),e=b.find(c.heading).eq(0),f=d.wrapInner('<div class="ui-collapsible-content"></div>').find(".ui-collapsible-content"),g=b.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set");e.is("legend")&&(e=a('<div role="heading">'+e.html()+"</div>").insertBefore(e),e.next().remove()),e.insertBefore(f).addClass("ui-collapsible-heading").append('<span class="ui-collapsible-heading-status"></span>').wrapInner('<a href="#" class="ui-collapsible-heading-toggle"></a>').find("a:eq(0)").buttonMarkup({shadow:!g.length,corners:!1,iconPos:"left",icon:"plus",theme:c.theme}).find(".ui-icon").removeAttr("class").buttonMarkup({shadow:!0,corners:!0,iconPos:"notext",icon:"plus",theme:c.iconTheme}),g.length?d.jqmData("collapsible-last")&&e.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom"):e.find("a:eq(0)").addClass("ui-corner-all").find(".ui-btn-inner").addClass("ui-corner-all"),d.bind("collapse",function(b){!b.isDefaultPrevented()&&a(b.target).closest(".ui-collapsible-contain").is(d)&&(b.preventDefault(),e.addClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(c.expandCueText).end().find(".ui-icon").removeClass("ui-icon-minus").addClass("ui-icon-plus"),f.addClass("ui-collapsible-content-collapsed").attr("aria-hidden",!0),d.jqmData("collapsible-last")&&e.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom"))}).bind("expand",function(a){a.isDefaultPrevented()||(a.preventDefault(),e.removeClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(c.collapseCueText),e.find(".ui-icon").removeClass("ui-icon-plus").addClass("ui-icon-minus"),f.removeClass("ui-collapsible-content-collapsed").attr("aria-hidden",!1),d.jqmData("collapsible-last")&&e.find("a:eq(0), .ui-btn-inner").removeClass("ui-corner-bottom"))}).trigger(c.collapsed?"collapse":"expand");if(g.length&&!g.jqmData("collapsiblebound")){g.jqmData("collapsiblebound",!0).bind("expand",function(b){a(b.target).closest(".ui-collapsible-contain").siblings(".ui-collapsible-contain").trigger("collapse")});var h=g.find(":jqmData(role='collapsible'):first");h.first().find("a:eq(0)").addClass("ui-corner-top").find(".ui-btn-inner").addClass("ui-corner-top"),h.last().jqmData("collapsible-last",!0)}e.bind("vclick",function(a){e.is(".ui-collapsible-heading-collapsed")?d.trigger("expand"):d.trigger("collapse"),a.preventDefault()})}})}(jQuery),function(a,b){a.fn.controlgroup=function(b){return this.each(function(){function g(a){a.removeClass("ui-btn-corner-all ui-shadow").eq(0).addClass(e[0]).end().filter(":last").addClass(e[1]).addClass("ui-controlgroup-last")}var c=a.extend({direction:a(this).jqmData("type")||"vertical",shadow:!1},b),d=a(this).find(">legend"),e=c.direction=="horizontal"?["ui-corner-left","ui-corner-right"]:["ui-corner-top","ui-corner-bottom"],f=a(this).find("input:eq(0)").attr("type");d.length&&(a(this).wrapInner('<div class="ui-controlgroup-controls"></div>'),a('<div role="heading" class="ui-controlgroup-label">'+d.html()+"</div>").insertBefore(a(this).children(0)),d.remove()),a(this).addClass("ui-corner-all ui-controlgroup ui-controlgroup-"+c.direction),g(a(this).find(".ui-btn")),g(a(this).find(".ui-btn-inner")),c.shadow&&a(this).addClass("ui-shadow")})}}(jQuery),function(a,b){a.fn.fieldcontain=function(a){return this.addClass("ui-field-contain ui-body ui-br")}}(jQuery),function(a,b){var c={};a.widget("mobile.listview",a.mobile.widget,{options:{theme:"c",countTheme:"c",headerTheme:"b",dividerTheme:"b",splitIcon:"arrow-r",splitTheme:"b",inset:!1},_create:function(){var a=this;a.element.addClass(function(b,c){return c+" ui-listview "+(a.options.inset?" ui-listview-inset ui-corner-all ui-shadow ":"")}),a.refresh()},_itemApply:function(b,c){c.find(".ui-li-count").addClass("ui-btn-up-"+(b.jqmData("counttheme")||this.options.countTheme)+" ui-btn-corner-all").end().find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(">img:eq(0), .ui-link-inherit>img:eq(0)").addClass("ui-li-thumb").each(function(){c.addClass(a(this).is(".ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb")}).end().find(".ui-li-aside").each(function(){var b=a(this);b.prependTo(b.parent())})},_removeCorners:function(a){a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb")).removeClass("ui-corner-top ui-corner-bottom ui-corner-br ui-corner-bl ui-corner-tr ui-corner-tl")},refresh:function(b){this._createSubPages();var c=this.options,d=this.element,e=this,f=d.jqmData("dividertheme")||c.dividerTheme,g=d.jqmData("splittheme"),h=d.jqmData("spliticon"),i=d.children("li"),j=a.support.cssPseudoElement||!a.nodeName(d[0],"ol")?0:1;j&&d.find(".ui-li-dec").remove();for(var k=0,l=i.length;k<l;k++){var m=i.eq(k),n="ui-li";if(b||!m.hasClass("ui-li")){var o=m.jqmData("theme")||c.theme,p=m.children("a");if(p.length){var q=m.jqmData("icon");m.buttonMarkup({wrapperEls:"div",shadow:!1,corners:!1,iconpos:"right",icon:p.length>1||q===!1?!1:q||"arrow-r",theme:o}),p.first().addClass("ui-link-inherit");if(p.length>1){n+=" ui-li-has-alt";var r=p.last(),s=g||r.jqmData("theme")||c.splitTheme;r.appendTo(m).attr("title",r.text()).addClass("ui-li-link-alt").empty().buttonMarkup({shadow:!1,corners:!1,theme:o,icon:!1,iconpos:!1}).find(".ui-btn-inner").append(a("<span />").buttonMarkup({shadow:!0,corners:!0,theme:s,iconpos:"notext",icon:h||r.jqmData("icon")||c.splitIcon}))}}else m.jqmData("role")==="list-divider"?(n+=" ui-li-divider ui-btn ui-bar-"+f,m.attr("role","heading"),j&&(j=1)):n+=" ui-li-static ui-body-"+o}c.inset&&(k===0&&(n+=" ui-corner-top",m.add(m.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-tr").end().find(".ui-li-thumb").addClass("ui-corner-tl"),m.next().next().length&&e._removeCorners(m.next())),k===i.length-1&&(n+=" ui-corner-bottom",m.add(m.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").addClass("ui-corner-bl"),m.prev().prev().length&&e._removeCorners(m.prev())));if(j&&n.indexOf("ui-li-divider")<0){var t=m.is(".ui-li-static:first")?m:m.find(".ui-link-inherit");t.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>"+j++ +". </span>")}m.add(m.children(".ui-btn-inner")).addClass(n),b||e._itemApply(d,m)}},_idStringEscape:function(a){return a.replace(/[^a-zA-Z0-9]/g,"-")},_createSubPages:function(){var b=this.element,d=b.closest(".ui-page"),e=d.jqmData("url"),f=e||d[0][a.expando],g=b.attr("id"),h=this.options,i="data-"+a.mobile.ns,j=this,k=d.find(":jqmData(role='footer')").jqmData("id");typeof c[f]==="undefined"&&(c[f]=-1),g=g||++c[f],a(b.find("li>ul, li>ol").toArray().reverse()).each(function(c){var d=a(this),f=d.attr("id")||g+"-"+c,j=d.parent(),l=a(d.prevAll().toArray().reverse()),l=l.length?l:a("<span>"+a.trim(j.contents()[0].nodeValue)+"</span>"),m=l.first().text(),n=(e||"")+"&"+a.mobile.subPageUrlKey+"="+f;theme=d.jqmData("theme")||h.theme,countTheme=d.jqmData("counttheme")||b.jqmData("counttheme")||h.countTheme,newPage=d.detach().wrap("<div "+i+"role='page' "+i+"url='"+n+"' "+i+"theme='"+theme+"' "+i+"count-theme='"+countTheme+"'><div "+i+"role='content'></div></div>").parent().before("<div "+i+"role='header' "+i+"theme='"+h.headerTheme+"'><div class='ui-title'>"+m+"</div></div>").after(k?a("<div "+i+"role='footer' "+i+"id='"+k+"'>"):"").parent().appendTo(a.mobile.pageContainer),newPage.page();var p=j.find("a:first");p.length||(p=a("<a />").html(l||m).prependTo(j.empty())),p.attr("href","#"+n)}).listview()}})}(jQuery),function(a,b){a.mobile.listview.prototype.options.filter=!1,a.mobile.listview.prototype.options.filterPlaceholder="Filter items...",a.mobile.listview.prototype.options.filterTheme="c",a(":jqmData(role='listview')").live("listviewcreate",function(){var b=a(this),c=b.data("listview");if(c.options.filter){var d=a("<form>",{"class":"ui-listview-filter ui-bar-"+c.options.filterTheme,role:"search"}),e=a("<input>",{placeholder:c.options.filterPlaceholder}).attr("data-"+a.mobile.ns+"type","search").jqmData("lastval","").bind("keyup change",function(){var c=this.value.toLowerCase(),d=null,e=a(this).jqmData("lastval")+"";a(this).jqmData("lastval",c),change=c.replace(new RegExp("^"+e),""),c.length<e.length||change.length!=c.length-e.length?d=b.children():d=b.children(":not(.ui-screen-hidden)");if(c){var f,g=!1,h="";for(var i=d.length-1;i>=0;i--)f=a(d[i]),h=f.jqmData("filtertext")||f.text(),f.is("li:jqmData(role=list-divider)")?(f.toggleClass("ui-filter-hidequeue",!g),g=!1):h.toLowerCase().indexOf(c)===-1?f.toggleClass("ui-filter-hidequeue",!0):g=!0;d.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden",!1),d.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden",!0).toggleClass("ui-filter-hidequeue",!1)}else d.toggleClass("ui-screen-hidden",!1)}).appendTo(d).textinput();a(this).jqmData("inset")&&d.addClass("ui-listview-filter-inset"),d.insertBefore(b)}})}(jQuery),function(a,b){a.widget("mobile.dialog",a.mobile.widget,{options:{closeBtnText:"Close"},_create:function(){var b=this.element;b.attr("role","dialog").addClass("ui-page ui-dialog ui-body-a").find(":jqmData(role=header)").addClass("ui-corner-top ui-overlay-shadow").prepend("<a href='#' data-"+a.mobile.ns+"icon='delete' data-"+a.mobile.ns+"rel='back' data-"+a.mobile.ns+"iconpos='notext'>"+this.options.closeBtnText+"</a>").end().find('.ui-content:not([class*="ui-body-"])').addClass("ui-body-c").end().find(".ui-content,:jqmData(role='footer')").last().addClass("ui-corner-bottom ui-overlay-shadow"),b.bind("vclick submit",function(b){var c=a(b.target).closest(b.type==="vclick"?"a":"form");if(c.length&&!c.jqmData("transition")){var d=a.mobile.urlHistory.getActive()||{};c.attr("data-"+a.mobile.ns+"transition",d.transition||a.mobile.defaultDialogTransition).attr("data-"+a.mobile.ns+"direction","reverse")}}).bind("pagehide",function(){a(this).find("."+a.mobile.activeBtnClass).removeClass(a.mobile.activeBtnClass)})},close:function(){window.history.back()}})}(jQuery),function(a,b){a.widget("mobile.navbar",a.mobile.widget,{options:{iconpos:"top",grid:null},_create:function(){var c=this.element,d=c.find("a"),e=d.filter(":jqmData(icon)").length?this.options.iconpos:b;c.addClass("ui-navbar").attr("role","navigation").find("ul").grid({grid:this.options.grid}),e||c.addClass("ui-navbar-noicons"),d.buttonMarkup({corners:!1,shadow:!1,iconpos:e}),c.delegate("a","vclick",function(b){d.not(".ui-state-persist").removeClass(a.mobile.activeBtnClass),a(this).addClass(a.mobile.activeBtnClass)})}})}(jQuery),function(a,b){a.fn.grid=function(b){return this.each(function(){var c=a.extend({grid:null},b),d=a(this).children(),e={solo:1,a:2,b:3,c:4,d:5},f=c.grid,g;if(!f)if(d.length>5)f="a";else for(var h in e)e[h]==d.length&&(f=h);g=e[f],a(this).addClass("ui-grid-"+f),d.filter(":nth-child("+g+"n+1)").addClass("ui-block-a"),g>1&&d.filter(":nth-child("+g+"n+2)").addClass("ui-block-b"),g>2&&d.filter(":nth-child(3n+3)").addClass("ui-block-c"),g>3&&d.filter(":nth-child(4n+4)").addClass("ui-block-d"),g>4&&d.filter(":nth-child(5n+5)").addClass("ui-block-e")})}}(jQuery),function(a,b,c){var d=a("html"),e=a("head"),f=a(b);a(b.document).trigger("mobileinit");if(a.mobile.gradeA()){if(b.blackberry&&!b.WebKitPoint||b.operamini&&Object.prototype.toString.call(b.operamini)==="[object OperaMini]")a.mobile.ajaxEnabled=!1;d.addClass("ui-mobile ui-mobile-rendering");var g=a.mobile.loadingMessage?a("<div class='ui-loader ui-body-a ui-corner-all'><span class='ui-icon ui-icon-loading spin'></span><h1>"+a.mobile.loadingMessage+"</h1></div>"):c;a.extend(a.mobile,{showPageLoadingMsg:function(){if(a.mobile.loadingMessage){var c=a("."+a.mobile.activeBtnClass).first();g.appendTo(a.mobile.pageContainer).css({top:a.support.scrollTop&&a(b).scrollTop()+a(b).height()/2||c.length&&c.offset().top||100})}d.addClass("ui-loading")},hidePageLoadingMsg:function(){d.removeClass("ui-loading")},pageLoading:function(b){b?a.mobile.hidePageLoadingMsg():a.mobile.showPageLoadingMsg()},initializePage:function(){var b=a(":jqmData(role='page')");b.add(":jqmData(role='dialog')").each(function(){var b=a(this);b.jqmData("url")||b.attr("data-"+a.mobile.ns+"url",b.attr("id"))}),a.mobile.firstPage=b.first(),a.mobile.pageContainer=b.first().parent().addClass("ui-mobile-viewport"),a.mobile.showPageLoadingMsg(),a.mobile.hashListeningEnabled&&a.mobile.path.stripHash(location.hash)?f.trigger("hashchange",[!0]):a.mobile.changePage(a.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0})}}),a(function(){a.mobile.defaultHomeScroll=0,a(a.mobile.initializePage),f.load(a.mobile.silentScroll)})}}(jQuery,this);
define("lib/impl/jquery.mobile-1.0b1-oc2", function(){});
(function(a,b){function d(){if(c)return c;c=a.scope(),window.GlobalController&&c.$become(GlobalController);return c}var c=null;b.mobile.globalScope=function(){if(arguments.length==0)return d();c=arguments[0]}})(angular,$),function(a,b){function c(a,b){var c=!1;return function(){if(c)return b.apply(this,arguments);try{c=!0;return a.apply(this,arguments)}finally{c=!1}}}b.mobile.inJqmPageCompile=!1;var d=b.fn.page;b.fn.page=c(function(){var c=this,e=this.data()&&this.data().page;if(e)f=d.apply(c,arguments);else{b.mobile.inJqmPageCompile=!0;var f=d.apply(c,arguments);b.mobile.inJqmPageCompile=!1;var g=a.scope(b.mobile.globalScope());a.compile(this)(g)}return f},d)}(angular,jQuery),function(a){function o(a){return function(a,b){var c=b(),d=this;f(a,function(a,b){a.listview();var c=a.data().listview.refresh;a.data().listview.refresh=function(){var b=this,d=arguments;return f(a,function(){return c.apply(b,d)})}});var e;d.$onEval(999999,function(){var b=a[0].childNodes.length;e!==b&&(e=b,a.listview("refresh"))});return c}}function n(a){var b=a.attr("name");return function(a,b){var c=b(),d=this;a.collapsible();return c}}function m(a){var b=a[0].jqmoptions;return function(a,c){var d=c(),e=this;a.button(b);return d}}function l(a){var b=a[0].jqmoptions;return function(a,c){var d=c(),e=this;a.button(b);return d}}function k(a){var b=a.attr("name"),c=a[0].type;a[0].type="text";return function(a,b){var d=b();a[0].type=c;var e=this;a.textinput();return d}}function j(a){var b=a.attr("name");return function(a,c){var d=a.bind;a.bind=function(a,b){a.indexOf("click")!=-1&&(a+=" change");return d.call(this,a,b)};var e=c(),g=this;f(a,function(a,b){a.checkboxradio()}),g.$watch(b,function(b){a.checkboxradio("refresh")});return e}}function i(a){var b=a[0].type;a[0].type="text",a[0]["data-type"]="range";var c=a.attr("name");return function(a,d){a[0].type=b;var e=d();a.wrap('<ngm:group class="ng-widget"></ngm:group>'),a.slider(),a.textinput();var f=this;f.$watch(c,function(b){a.slider("refresh")});return e}}function h(a){var b=a.attr("name");return function(a,c){var d=c();a.wrap('<ngm:group class="ng-widget"></ngm:group>'),a.slider();var e=this;e.$watch(b,function(b){a.slider("refresh")});return d}}function g(a){var b=a.attr("name");return function(a,c){var d=c(),e=this;f(a,function(a,b,c){a.selectmenu();var d=c.children();d.detach(),d.bind("pagebeforeshow",function(){d.appendTo($.mobile.pageContainer)}),d.bind("pagehide",function(){d.detach()});var e=b.children(".ui-selectmenu, .ui-selectmenu-screen");e.detach();var f=a.data().selectmenu,g=f.open,h=f.refresh;f.refresh=function(){var b=a.closest(".ui-page");if(b.length>0){var c=e.parent().length==0;c&&b.append(e);try{return h.apply(this,arguments)}finally{c&&e.detach()}}},f.open=function(){var b=a.closest(".ui-page");b.append(e),h.call(f,!0);return g.apply(this,arguments)};var i=f.close;f.close=function(){var a=i.apply(this,arguments);e.detach();return a}}),e.$watch(b,function(b){a.selectmenu("refresh",!0)});var g;e.$onEval(999999,function(){var b=a[0].childNodes.length;g!==b&&(g=b,a.trigger("change"))});return d}}function f(a,b){var c=a[0].parentNode,d=$('<div data-role="page" class="ui-page"></div>');d[0].parentNode.getAttribute=function(){return null};var e=$("<div></div>"),f=$.mobile.pageContainer;$.mobile.pageContainer=e;var g=c.childNodes;while(g.length>0)d[0].appendChild(g[0]);try{return b(a,d,e)}finally{$.mobile.pageContainer=f;var g=d[0].childNodes;while(g.length>0)c.appendChild(g[0])}}function d(b,c){var d=a.directive(b);a.directive(b,function(a){var b=d.apply(this,arguments),e=c(a),f=function(){var a=b.$inject&&b.$inject.length||0,c=arguments[a],d=this,f=b.apply(this,arguments);e.call(this,c);return f};f.$inject=b.$inject;return f})}function c(b,c){var d=a.widget(b);a.widget(b,function(){var a,b=c.apply(this,arguments),e=function(){var c=a&&a.$inject&&a.$inject.length||0,d=arguments[c],e=this,f=arguments,g=!1,h=d[0].parentNode,i;b&&(i=b.call(this,d,function(){g=!0;return a&&a.apply(e,f)}));if(!g)return a&&a.apply(e,f);if(d.length>0&&d[0].parentNode!=h){var j=d[0];while(j.parentNode!=h)j=j.parentNode;j!=d[0]&&(d.remove=function(){$(j).remove()})}return i};a=d&&d.apply(this,arguments),d||(this.descend(!0),this.directives(!0)),e.$inject=a&&a.$inject;return e})}function b(a){var b=$.fn[a];$.fn[a]=function(c){var d=this.data()&&this.data()[a];if(d||this.length==0)return b.apply(this,arguments);if($.mobile.inJqmPageCompile){for(var e=0;e<this.length;e++)this[e].jqmoptions=c;this.attr("jqmwidget",a);return this}return b.apply(this,arguments)};for(var c in b)$.fn[a][c]=b[c]}var e={};e.selectmenu=!0,e.slider=!0,e.checkboxradio=!0,e.textinput=!0,e.button=!0,d("ng:bind-attr",function(a){return function(b){var c=b.attr("jqmwidget");if(c&&e[c]){var d=/([^:{'"]+)/,f=d.exec(a)[1],g=this;if(f=="disabled"){var h;g.$onEval(function(){var a=b.attr(f);a!=h&&(h=a,a?b[c]("disable"):b[c]("enable"))})}}}}),c("select",function(a){var b=a.attr("jqmwidget");if(b=="selectmenu")return g.apply(this,arguments);if(b=="slider")return h.apply(this,arguments)}),b("selectmenu"),b("slider"),c("input",function(a){var b=a.attr("jqmwidget");if(b=="slider")return i.apply(this,arguments);if(b=="checkboxradio")return j.apply(this,arguments);if(b=="button")return l.apply(this,arguments);if(b=="textinput")return k.apply(this,arguments)}),b("checkboxradio"),b("textinput"),b("button"),c("button",function(a){var b=a.attr("jqmwidget");if(b=="button")return m.apply(this,arguments)}),c("div",function(a){var b=a.attr("jqmwidget");if(b=="collapsible")return n.apply(this,arguments)}),b("collapsible"),c("ul",function(a){var b=a.attr("jqmwidget");if(b=="listview")return o.apply(this,arguments)}),b("listview")}(angular),function(a,b){b("div").live("pagebeforehide",function(a,c){var d=b(a.target).scope();if(d){var e=c.nextPage,f=e&&e.scope();d.onPassivate&&d.onPassivate.call(d,f)}});var c=null;b.mobile.globalScope().$onEval(function(){c&&c.$eval()}),b("div").live("pagebeforeshow",function(a,d){var e=b(a.target).scope();if(e){var f=d.prevPage,g=f&&f.scope();e.onActivate&&e.onActivate.call(e,g),c=e,b.mobile.globalScope().$service("$updateView")()}})}(angular,$),function(a){function g(){f();if(b.length>0){var a=b[b.length-1],c=a.msg;e.text(c),$.mobile.showPageLoadingMsg()}else $.mobile.hidePageLoadingMsg()}function f(){if(!d||d.length==0)d=$(".ui-loader"),d.bind("vclick",c),e=d.find("h1")}function c(){var a=b[b.length-1];a.callback&&a.callback.apply(this,arguments)}var b=[],d,e;$.mobile.loadingMessageWithCancel||($.mobile.loadingMessageWithCancel="Loading. Click to cancel."),$("div").live("pageshow",function(a,b){g()}),a.service("waitdialog",function(a){function f(b,e,f){f||(f=$.mobile.loadingMessageWithCancel),c(f,function(){b.reject(e),a()}),b.always(function(){d()})}function e(a,b){c(),a.always(function(){d()})}function d(){b.pop(),g()}function c(){var a,c;typeof arguments[0]=="string"&&(a=arguments[0]),typeof arguments[0]=="function"&&(c=arguments[0]),typeof arguments[1]=="function"&&(c=arguments[1]),a||(a=$.mobile.loadingMessage),b.push({msg:a,callback:c}),g()}return{show:c,hide:d,waitFor:e,waitForWithCancel:f}},{$inject:["$updateView"]})}(angular),function(a,b){a.service("$activePage",function(){return function(){if(arguments.length==0){var a=$.mobile.activePage;return a?a.attr("id"):null}var c=arguments[0];c=="back"?b.history.back():$.mobile.changePage.apply($.mobile.changePage,arguments)}})}(angular,window),function(a){a.Object.iff=function(a,b,c,d){return b?c:d},a.widget("@ng:if",function(b,c){var d="ngif in $iff("+b+",[1],[])";c.removeAttr("ng:if");return a.widget("@ng:repeat").call(this,d,c)})}(angular),function(a){a.directive("ng:fadein",function(a,b){this.directives(!0),this.descend(!0),b.css({opacity:.1});return function(b){b.animate({opacity:1},parseInt(a))}})}(angular),function(a){var b=a.service("$browser");a.service("$browser",function(){var a=b.apply(this,arguments);a.onHashChange=function(a){$(window).bind("hashchange",a);return a},a.setUrl=function(){};return a},{$inject:["$log"]})}(angular),function(a){a.directive("ngm:click",function(b,c){return a.directive("ng:event")("vclick:"+b,c)})}(angular),function(a){a.directive("ng:event",function(a,b){var c={},d=/(.*?):(.*?)($|,)/g,e,f=!1;while(e=d.exec(a)){f=!0;var g=e[1],h=e[2];c[g]=h}if(!f)throw"Expression "+a+" needs to have the syntax <event>:<handler>,...";var i=function(a,b){var d=this;for(var e in c)(function(e){var f=c[e];b.bind(e,function(c){var e=d.$tryEval(f,b);a()})})(e)};i.$inject=["$updateView"];return i})}(angular),function(a){a.directive("ng:enterkey",function(a,b){var c=function(b,c){var d=this;c.bind("keypress",function(e){var f=e.keyCode||e.which;if(f==13){var g=d.$tryEval(a,c);b()}})};c.$inject=["$updateView"];return c})}(angular),function(a){function m(){this.loadedCount=0,this.refreshNeeded=!0}function l(){this.refreshIfNeeded();return this.loadedCount<this.availableCount}function k(){this.loadedCount=this.loadedCount+this.pageSize,this.refreshNeeded=!0}function j(b){a.Object.equals(this.orderBy,b)||(this.orderBy=b,this.refreshNeeded=!0)}function i(b){a.Object.equals(this.filter,b)||(this.filter=b,this.refreshNeeded=!0)}function h(){this.evalId!=b&&(this.refreshNeeded=!0,this.evalId=b),this.refreshNeeded&&(this.refresh(),this.refreshNeeded=!1);return this}function g(){var b=this.originalList;this.filter&&(b=a.Array.filter(b,this.filter)),this.orderBy&&(b=a.Array.orderBy(b,this.orderBy));var c=this.loadedCount;c<this.pageSize&&(c=this.pageSize),c>b.length&&(c=b.length),this.loadedCount=c,this.availableCount=b.length;var d=b.slice(0,c),e=[0,this.length].concat(d);this.splice.apply(this,e)}function f(a){a.pageSize?this.pageSize=a.pageSize:this.pageSize=$.mobile.defaultListPageSize,this.originalList=a,this.refreshNeeded=!0,this.reset()}function e(a){var b=[];for(var e in c)b[e]=c[e];b.init(a);var f=b.hasOwnProperty;b.hasOwnProperty=function(a){if(a in c||a in d)return!1;return f.apply(this,arguments)};return b}$.mobile.defaultListPageSize||($.mobile.defaultListPageSize=10);var b=0;$.mobile.globalScope().$onEval(-99999,function(){b++});var c={init:f,refresh:g,refreshIfNeeded:h,setFilter:i,setOrderBy:j,loadNextPage:k,hasMorePages:l,reset:m},d={pageSize:!0,originalList:!0,refreshNeeded:!0,filter:!0,orderBy:!0,loadedCount:!0,availableCount:!0,evalId:!0};a.Array.paged=function(a,b,c){var d=a.pagedList;d||(d=e(a),a.pagedList=d),d.setFilter(b),d.setOrderBy(c),d.refreshIfNeeded();return d}}(angular);
define("lib/impl/jquery-mobile-angular-adapter", function(){});
/**
 * Top level namespace for Jasmine, a lightweight JavaScript BDD/spec/testing framework.
 *
 * @namespace
 */
var jasmine = {};

/**
 * @private
 */
jasmine.unimplementedMethod_ = function() {
  throw new Error("unimplemented method");
};

/**
 * Use <code>jasmine.undefined</code> instead of <code>undefined</code>, since <code>undefined</code> is just
 * a plain old variable and may be redefined by somebody else.
 *
 * @private
 */
jasmine.undefined = jasmine.___undefined___;

/**
 * Default interval in milliseconds for event loop yields (e.g. to allow network activity or to refresh the screen with the HTML-based runner). Small values here may result in slow test running. Zero means no updates until all tests have completed.
 *
 */
jasmine.DEFAULT_UPDATE_INTERVAL = 250;

/**
 * Default timeout interval in milliseconds for waitsFor() blocks.
 */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

jasmine.getGlobal = function() {
  function getGlobal() {
    return this;
  }

  return getGlobal();
};

/**
 * Allows for bound functions to be compared.  Internal use only.
 *
 * @ignore
 * @private
 * @param base {Object} bound 'this' for the function
 * @param name {Function} function to find
 */
jasmine.bindOriginal_ = function(base, name) {
  var original = base[name];
  if (original.apply) {
    return function() {
      return original.apply(base, arguments);
    };
  } else {
    // IE support
    return jasmine.getGlobal()[name];
  }
};

jasmine.setTimeout = jasmine.bindOriginal_(jasmine.getGlobal(), 'setTimeout');
jasmine.clearTimeout = jasmine.bindOriginal_(jasmine.getGlobal(), 'clearTimeout');
jasmine.setInterval = jasmine.bindOriginal_(jasmine.getGlobal(), 'setInterval');
jasmine.clearInterval = jasmine.bindOriginal_(jasmine.getGlobal(), 'clearInterval');

jasmine.MessageResult = function(values) {
  this.type = 'log';
  this.values = values;
  this.trace = new Error(); // todo: test better
};

jasmine.MessageResult.prototype.toString = function() {
  var text = "";
  for(var i = 0; i < this.values.length; i++) {
    if (i > 0) text += " ";
    if (jasmine.isString_(this.values[i])) {
      text += this.values[i];
    } else {
      text += jasmine.pp(this.values[i]);
    }
  }
  return text;
};

jasmine.ExpectationResult = function(params) {
  this.type = 'expect';
  this.matcherName = params.matcherName;
  this.passed_ = params.passed;
  this.expected = params.expected;
  this.actual = params.actual;

  this.message = this.passed_ ? 'Passed.' : params.message;
  this.trace = this.passed_ ? '' : new Error(this.message);
};

jasmine.ExpectationResult.prototype.toString = function () {
  return this.message;
};

jasmine.ExpectationResult.prototype.passed = function () {
  return this.passed_;
};

/**
 * Getter for the Jasmine environment. Ensures one gets created
 */
jasmine.getEnv = function() {
  return jasmine.currentEnv_ = jasmine.currentEnv_ || new jasmine.Env();
};

/**
 * @ignore
 * @private
 * @param value
 * @returns {Boolean}
 */
jasmine.isArray_ = function(value) {
  return jasmine.isA_("Array", value);  
};

/**
 * @ignore
 * @private
 * @param value
 * @returns {Boolean}
 */
jasmine.isString_ = function(value) {
  return jasmine.isA_("String", value);
};

/**
 * @ignore
 * @private
 * @param value
 * @returns {Boolean}
 */
jasmine.isNumber_ = function(value) {
  return jasmine.isA_("Number", value);
};

/**
 * @ignore
 * @private
 * @param {String} typeName
 * @param value
 * @returns {Boolean}
 */
jasmine.isA_ = function(typeName, value) {
  return Object.prototype.toString.apply(value) === '[object ' + typeName + ']';
};

/**
 * Pretty printer for expecations.  Takes any object and turns it into a human-readable string.
 *
 * @param value {Object} an object to be outputted
 * @returns {String}
 */
jasmine.pp = function(value) {
  var stringPrettyPrinter = new jasmine.StringPrettyPrinter();
  stringPrettyPrinter.format(value);
  return stringPrettyPrinter.string;
};

/**
 * Returns true if the object is a DOM Node.
 *
 * @param {Object} obj object to check
 * @returns {Boolean}
 */
jasmine.isDomNode = function(obj) {
  return obj['nodeType'] > 0;
};

/**
 * Returns a matchable 'generic' object of the class type.  For use in expecations of type when values don't matter.
 *
 * @example
 * // don't care about which function is passed in, as long as it's a function
 * expect(mySpy).toHaveBeenCalledWith(jasmine.any(Function));
 *
 * @param {Class} clazz
 * @returns matchable object of the type clazz
 */
jasmine.any = function(clazz) {
  return new jasmine.Matchers.Any(clazz);
};

/**
 * Jasmine Spies are test doubles that can act as stubs, spies, fakes or when used in an expecation, mocks.
 *
 * Spies should be created in test setup, before expectations.  They can then be checked, using the standard Jasmine
 * expectation syntax. Spies can be checked if they were called or not and what the calling params were.
 *
 * A Spy has the following fields: wasCalled, callCount, mostRecentCall, and argsForCall (see docs).
 *
 * Spies are torn down at the end of every spec.
 *
 * Note: Do <b>not</b> call new jasmine.Spy() directly - a spy must be created using spyOn, jasmine.createSpy or jasmine.createSpyObj.
 *
 * @example
 * // a stub
 * var myStub = jasmine.createSpy('myStub');  // can be used anywhere
 *
 * // spy example
 * var foo = {
 *   not: function(bool) { return !bool; }
 * }
 *
 * // actual foo.not will not be called, execution stops
 * spyOn(foo, 'not');

 // foo.not spied upon, execution will continue to implementation
 * spyOn(foo, 'not').andCallThrough();
 *
 * // fake example
 * var foo = {
 *   not: function(bool) { return !bool; }
 * }
 *
 * // foo.not(val) will return val
 * spyOn(foo, 'not').andCallFake(function(value) {return value;});
 *
 * // mock example
 * foo.not(7 == 7);
 * expect(foo.not).toHaveBeenCalled();
 * expect(foo.not).toHaveBeenCalledWith(true);
 *
 * @constructor
 * @see spyOn, jasmine.createSpy, jasmine.createSpyObj
 * @param {String} name
 */
jasmine.Spy = function(name) {
  /**
   * The name of the spy, if provided.
   */
  this.identity = name || 'unknown';
  /**
   *  Is this Object a spy?
   */
  this.isSpy = true;
  /**
   * The actual function this spy stubs.
   */
  this.plan = function() {
  };
  /**
   * Tracking of the most recent call to the spy.
   * @example
   * var mySpy = jasmine.createSpy('foo');
   * mySpy(1, 2);
   * mySpy.mostRecentCall.args = [1, 2];
   */
  this.mostRecentCall = {};

  /**
   * Holds arguments for each call to the spy, indexed by call count
   * @example
   * var mySpy = jasmine.createSpy('foo');
   * mySpy(1, 2);
   * mySpy(7, 8);
   * mySpy.mostRecentCall.args = [7, 8];
   * mySpy.argsForCall[0] = [1, 2];
   * mySpy.argsForCall[1] = [7, 8];
   */
  this.argsForCall = [];
  this.calls = [];
};

/**
 * Tells a spy to call through to the actual implemenatation.
 *
 * @example
 * var foo = {
 *   bar: function() { // do some stuff }
 * }
 *
 * // defining a spy on an existing property: foo.bar
 * spyOn(foo, 'bar').andCallThrough();
 */
jasmine.Spy.prototype.andCallThrough = function() {
  this.plan = this.originalValue;
  return this;
};

/**
 * For setting the return value of a spy.
 *
 * @example
 * // defining a spy from scratch: foo() returns 'baz'
 * var foo = jasmine.createSpy('spy on foo').andReturn('baz');
 *
 * // defining a spy on an existing property: foo.bar() returns 'baz'
 * spyOn(foo, 'bar').andReturn('baz');
 *
 * @param {Object} value
 */
jasmine.Spy.prototype.andReturn = function(value) {
  this.plan = function() {
    return value;
  };
  return this;
};

/**
 * For throwing an exception when a spy is called.
 *
 * @example
 * // defining a spy from scratch: foo() throws an exception w/ message 'ouch'
 * var foo = jasmine.createSpy('spy on foo').andThrow('baz');
 *
 * // defining a spy on an existing property: foo.bar() throws an exception w/ message 'ouch'
 * spyOn(foo, 'bar').andThrow('baz');
 *
 * @param {String} exceptionMsg
 */
jasmine.Spy.prototype.andThrow = function(exceptionMsg) {
  this.plan = function() {
    throw exceptionMsg;
  };
  return this;
};

/**
 * Calls an alternate implementation when a spy is called.
 *
 * @example
 * var baz = function() {
 *   // do some stuff, return something
 * }
 * // defining a spy from scratch: foo() calls the function baz
 * var foo = jasmine.createSpy('spy on foo').andCall(baz);
 *
 * // defining a spy on an existing property: foo.bar() calls an anonymnous function
 * spyOn(foo, 'bar').andCall(function() { return 'baz';} );
 *
 * @param {Function} fakeFunc
 */
jasmine.Spy.prototype.andCallFake = function(fakeFunc) {
  this.plan = fakeFunc;
  return this;
};

/**
 * Resets all of a spy's the tracking variables so that it can be used again.
 *
 * @example
 * spyOn(foo, 'bar');
 *
 * foo.bar();
 *
 * expect(foo.bar.callCount).toEqual(1);
 *
 * foo.bar.reset();
 *
 * expect(foo.bar.callCount).toEqual(0);
 */
jasmine.Spy.prototype.reset = function() {
  this.wasCalled = false;
  this.callCount = 0;
  this.argsForCall = [];
  this.calls = [];
  this.mostRecentCall = {};
};

jasmine.createSpy = function(name) {

  var spyObj = function() {
    spyObj.wasCalled = true;
    spyObj.callCount++;
    var args = jasmine.util.argsToArray(arguments);
    spyObj.mostRecentCall.object = this;
    spyObj.mostRecentCall.args = args;
    spyObj.argsForCall.push(args);
    spyObj.calls.push({object: this, args: args});
    return spyObj.plan.apply(this, arguments);
  };

  var spy = new jasmine.Spy(name);

  for (var prop in spy) {
    spyObj[prop] = spy[prop];
  }

  spyObj.reset();

  return spyObj;
};

/**
 * Determines whether an object is a spy.
 *
 * @param {jasmine.Spy|Object} putativeSpy
 * @returns {Boolean}
 */
jasmine.isSpy = function(putativeSpy) {
  return putativeSpy && putativeSpy.isSpy;
};

/**
 * Creates a more complicated spy: an Object that has every property a function that is a spy.  Used for stubbing something
 * large in one call.
 *
 * @param {String} baseName name of spy class
 * @param {Array} methodNames array of names of methods to make spies
 */
jasmine.createSpyObj = function(baseName, methodNames) {
  if (!jasmine.isArray_(methodNames) || methodNames.length == 0) {
    throw new Error('createSpyObj requires a non-empty array of method names to create spies for');
  }
  var obj = {};
  for (var i = 0; i < methodNames.length; i++) {
    obj[methodNames[i]] = jasmine.createSpy(baseName + '.' + methodNames[i]);
  }
  return obj;
};

/**
 * All parameters are pretty-printed and concatenated together, then written to the current spec's output.
 *
 * Be careful not to leave calls to <code>jasmine.log</code> in production code.
 */
jasmine.log = function() {
  var spec = jasmine.getEnv().currentSpec;
  spec.log.apply(spec, arguments);
};

/**
 * Function that installs a spy on an existing object's method name.  Used within a Spec to create a spy.
 *
 * @example
 * // spy example
 * var foo = {
 *   not: function(bool) { return !bool; }
 * }
 * spyOn(foo, 'not'); // actual foo.not will not be called, execution stops
 *
 * @see jasmine.createSpy
 * @param obj
 * @param methodName
 * @returns a Jasmine spy that can be chained with all spy methods
 */
var spyOn = function(obj, methodName) {
  return jasmine.getEnv().currentSpec.spyOn(obj, methodName);
};

/**
 * Creates a Jasmine spec that will be added to the current suite.
 *
 * // TODO: pending tests
 *
 * @example
 * it('should be true', function() {
 *   expect(true).toEqual(true);
 * });
 *
 * @param {String} desc description of this specification
 * @param {Function} func defines the preconditions and expectations of the spec
 */
var it = function(desc, func) {
  return jasmine.getEnv().it(desc, func);
};

/**
 * Creates a <em>disabled</em> Jasmine spec.
 *
 * A convenience method that allows existing specs to be disabled temporarily during development.
 *
 * @param {String} desc description of this specification
 * @param {Function} func defines the preconditions and expectations of the spec
 */
var xit = function(desc, func) {
  return jasmine.getEnv().xit(desc, func);
};

/**
 * Starts a chain for a Jasmine expectation.
 *
 * It is passed an Object that is the actual value and should chain to one of the many
 * jasmine.Matchers functions.
 *
 * @param {Object} actual Actual value to test against and expected value
 */
var expect = function(actual) {
  return jasmine.getEnv().currentSpec.expect(actual);
};

/**
 * Defines part of a jasmine spec.  Used in cominbination with waits or waitsFor in asynchrnous specs.
 *
 * @param {Function} func Function that defines part of a jasmine spec.
 */
var runs = function(func) {
  jasmine.getEnv().currentSpec.runs(func);
};

/**
 * Waits a fixed time period before moving to the next block.
 *
 * @deprecated Use waitsFor() instead
 * @param {Number} timeout milliseconds to wait
 */
var waits = function(timeout) {
  jasmine.getEnv().currentSpec.waits(timeout);
};

/**
 * Waits for the latchFunction to return true before proceeding to the next block.
 *
 * @param {Function} latchFunction
 * @param {String} optional_timeoutMessage
 * @param {Number} optional_timeout
 */
var waitsFor = function(latchFunction, optional_timeoutMessage, optional_timeout) {
  jasmine.getEnv().currentSpec.waitsFor.apply(jasmine.getEnv().currentSpec, arguments);
};

/**
 * A function that is called before each spec in a suite.
 *
 * Used for spec setup, including validating assumptions.
 *
 * @param {Function} beforeEachFunction
 */
var beforeEach = function(beforeEachFunction) {
  jasmine.getEnv().beforeEach(beforeEachFunction);
};

/**
 * A function that is called after each spec in a suite.
 *
 * Used for restoring any state that is hijacked during spec execution.
 *
 * @param {Function} afterEachFunction
 */
var afterEach = function(afterEachFunction) {
  jasmine.getEnv().afterEach(afterEachFunction);
};

/**
 * Defines a suite of specifications.
 *
 * Stores the description and all defined specs in the Jasmine environment as one suite of specs. Variables declared
 * are accessible by calls to beforeEach, it, and afterEach. Describe blocks can be nested, allowing for specialization
 * of setup in some tests.
 *
 * @example
 * // TODO: a simple suite
 *
 * // TODO: a simple suite with a nested describe block
 *
 * @param {String} description A string, usually the class under test.
 * @param {Function} specDefinitions function that defines several specs.
 */
var describe = function(description, specDefinitions) {
  return jasmine.getEnv().describe(description, specDefinitions);
};

/**
 * Disables a suite of specifications.  Used to disable some suites in a file, or files, temporarily during development.
 *
 * @param {String} description A string, usually the class under test.
 * @param {Function} specDefinitions function that defines several specs.
 */
var xdescribe = function(description, specDefinitions) {
  return jasmine.getEnv().xdescribe(description, specDefinitions);
};


// Provide the XMLHttpRequest class for IE 5.x-6.x:
jasmine.XmlHttpRequest = (typeof XMLHttpRequest == "undefined") ? function() {
  try {
    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
  } catch(e) {
  }
  try {
    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
  } catch(e) {
  }
  try {
    return new ActiveXObject("Msxml2.XMLHTTP");
  } catch(e) {
  }
  try {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } catch(e) {
  }
  throw new Error("This browser does not support XMLHttpRequest.");
} : XMLHttpRequest;
/**
 * @namespace
 */
jasmine.util = {};

/**
 * Declare that a child class inherit it's prototype from the parent class.
 *
 * @private
 * @param {Function} childClass
 * @param {Function} parentClass
 */
jasmine.util.inherit = function(childClass, parentClass) {
  /**
   * @private
   */
  var subclass = function() {
  };
  subclass.prototype = parentClass.prototype;
  childClass.prototype = new subclass;
};

jasmine.util.formatException = function(e) {
  var lineNumber;
  if (e.line) {
    lineNumber = e.line;
  }
  else if (e.lineNumber) {
    lineNumber = e.lineNumber;
  }

  var file;

  if (e.sourceURL) {
    file = e.sourceURL;
  }
  else if (e.fileName) {
    file = e.fileName;
  }

  var message = (e.name && e.message) ? (e.name + ': ' + e.message) : e.toString();

  if (file && lineNumber) {
    message += ' in ' + file + ' (line ' + lineNumber + ')';
  }

  return message;
};

jasmine.util.htmlEscape = function(str) {
  if (!str) return str;
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

jasmine.util.argsToArray = function(args) {
  var arrayOfArgs = [];
  for (var i = 0; i < args.length; i++) arrayOfArgs.push(args[i]);
  return arrayOfArgs;
};

jasmine.util.extend = function(destination, source) {
  for (var property in source) destination[property] = source[property];
  return destination;
};

/**
 * Environment for Jasmine
 *
 * @constructor
 */
jasmine.Env = function() {
  this.currentSpec = null;
  this.currentSuite = null;
  this.currentRunner_ = new jasmine.Runner(this);

  this.reporter = new jasmine.MultiReporter();

  this.updateInterval = jasmine.DEFAULT_UPDATE_INTERVAL;
  this.defaultTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  this.lastUpdate = 0;
  this.specFilter = function() {
    return true;
  };

  this.nextSpecId_ = 0;
  this.nextSuiteId_ = 0;
  this.equalityTesters_ = [];

  // wrap matchers
  this.matchersClass = function() {
    jasmine.Matchers.apply(this, arguments);
  };
  jasmine.util.inherit(this.matchersClass, jasmine.Matchers);

  jasmine.Matchers.wrapInto_(jasmine.Matchers.prototype, this.matchersClass);
};


jasmine.Env.prototype.setTimeout = jasmine.setTimeout;
jasmine.Env.prototype.clearTimeout = jasmine.clearTimeout;
jasmine.Env.prototype.setInterval = jasmine.setInterval;
jasmine.Env.prototype.clearInterval = jasmine.clearInterval;

/**
 * @returns an object containing jasmine version build info, if set.
 */
jasmine.Env.prototype.version = function () {
  if (jasmine.version_) {
    return jasmine.version_;
  } else {
    throw new Error('Version not set');
  }
};

/**
 * @returns string containing jasmine version build info, if set.
 */
jasmine.Env.prototype.versionString = function() {
  if (jasmine.version_) {
    var version = this.version();
    return version.major + "." + version.minor + "." + version.build + " revision " + version.revision;
  } else {
    return "version unknown";
  }
};

/**
 * @returns a sequential integer starting at 0
 */
jasmine.Env.prototype.nextSpecId = function () {
  return this.nextSpecId_++;
};

/**
 * @returns a sequential integer starting at 0
 */
jasmine.Env.prototype.nextSuiteId = function () {
  return this.nextSuiteId_++;
};

/**
 * Register a reporter to receive status updates from Jasmine.
 * @param {jasmine.Reporter} reporter An object which will receive status updates.
 */
jasmine.Env.prototype.addReporter = function(reporter) {
  this.reporter.addReporter(reporter);
};

jasmine.Env.prototype.execute = function() {
  this.currentRunner_.execute();
};

jasmine.Env.prototype.describe = function(description, specDefinitions) {
  var suite = new jasmine.Suite(this, description, specDefinitions, this.currentSuite);

  var parentSuite = this.currentSuite;
  if (parentSuite) {
    parentSuite.add(suite);
  } else {
    this.currentRunner_.add(suite);
  }

  this.currentSuite = suite;

  var declarationError = null;
  try {
    specDefinitions.call(suite);
  } catch(e) {
    declarationError = e;
  }

  this.currentSuite = parentSuite;

  if (declarationError) {
    this.it("encountered a declaration exception", function() {
      throw declarationError;
    });
  }

  return suite;
};

jasmine.Env.prototype.beforeEach = function(beforeEachFunction) {
  if (this.currentSuite) {
    this.currentSuite.beforeEach(beforeEachFunction);
  } else {
    this.currentRunner_.beforeEach(beforeEachFunction);
  }
};

jasmine.Env.prototype.currentRunner = function () {
  return this.currentRunner_;
};

jasmine.Env.prototype.afterEach = function(afterEachFunction) {
  if (this.currentSuite) {
    this.currentSuite.afterEach(afterEachFunction);
  } else {
    this.currentRunner_.afterEach(afterEachFunction);
  }

};

jasmine.Env.prototype.xdescribe = function(desc, specDefinitions) {
  return {
    execute: function() {
    }
  };
};

jasmine.Env.prototype.it = function(description, func) {
  var spec = new jasmine.Spec(this, this.currentSuite, description);
  this.currentSuite.add(spec);
  this.currentSpec = spec;

  if (func) {
    spec.runs(func);
  }

  return spec;
};

jasmine.Env.prototype.xit = function(desc, func) {
  return {
    id: this.nextSpecId(),
    runs: function() {
    }
  };
};

jasmine.Env.prototype.compareObjects_ = function(a, b, mismatchKeys, mismatchValues) {
  if (a.__Jasmine_been_here_before__ === b && b.__Jasmine_been_here_before__ === a) {
    return true;
  }

  a.__Jasmine_been_here_before__ = b;
  b.__Jasmine_been_here_before__ = a;

  var hasKey = function(obj, keyName) {
    return obj != null && obj[keyName] !== jasmine.undefined;
  };

  for (var property in b) {
    if (!hasKey(a, property) && hasKey(b, property)) {
      mismatchKeys.push("expected has key '" + property + "', but missing from actual.");
    }
  }
  for (property in a) {
    if (!hasKey(b, property) && hasKey(a, property)) {
      mismatchKeys.push("expected missing key '" + property + "', but present in actual.");
    }
  }
  for (property in b) {
    if (property == '__Jasmine_been_here_before__') continue;
    if (!this.equals_(a[property], b[property], mismatchKeys, mismatchValues)) {
      mismatchValues.push("'" + property + "' was '" + (b[property] ? jasmine.util.htmlEscape(b[property].toString()) : b[property]) + "' in expected, but was '" + (a[property] ? jasmine.util.htmlEscape(a[property].toString()) : a[property]) + "' in actual.");
    }
  }

  if (jasmine.isArray_(a) && jasmine.isArray_(b) && a.length != b.length) {
    mismatchValues.push("arrays were not the same length");
  }

  delete a.__Jasmine_been_here_before__;
  delete b.__Jasmine_been_here_before__;
  return (mismatchKeys.length == 0 && mismatchValues.length == 0);
};

jasmine.Env.prototype.equals_ = function(a, b, mismatchKeys, mismatchValues) {
  mismatchKeys = mismatchKeys || [];
  mismatchValues = mismatchValues || [];

  for (var i = 0; i < this.equalityTesters_.length; i++) {
    var equalityTester = this.equalityTesters_[i];
    var result = equalityTester(a, b, this, mismatchKeys, mismatchValues);
    if (result !== jasmine.undefined) return result;
  }

  if (a === b) return true;

  if (a === jasmine.undefined || a === null || b === jasmine.undefined || b === null) {
    return (a == jasmine.undefined && b == jasmine.undefined);
  }

  if (jasmine.isDomNode(a) && jasmine.isDomNode(b)) {
    return a === b;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() == b.getTime();
  }

  if (a instanceof jasmine.Matchers.Any) {
    return a.matches(b);
  }

  if (b instanceof jasmine.Matchers.Any) {
    return b.matches(a);
  }

  if (jasmine.isString_(a) && jasmine.isString_(b)) {
    return (a == b);
  }

  if (jasmine.isNumber_(a) && jasmine.isNumber_(b)) {
    return (a == b);
  }

  if (typeof a === "object" && typeof b === "object") {
    return this.compareObjects_(a, b, mismatchKeys, mismatchValues);
  }

  //Straight check
  return (a === b);
};

jasmine.Env.prototype.contains_ = function(haystack, needle) {
  if (jasmine.isArray_(haystack)) {
    for (var i = 0; i < haystack.length; i++) {
      if (this.equals_(haystack[i], needle)) return true;
    }
    return false;
  }
  return haystack.indexOf(needle) >= 0;
};

jasmine.Env.prototype.addEqualityTester = function(equalityTester) {
  this.equalityTesters_.push(equalityTester);
};
/** No-op base class for Jasmine reporters.
 *
 * @constructor
 */
jasmine.Reporter = function() {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportRunnerStarting = function(runner) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportRunnerResults = function(runner) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportSuiteResults = function(suite) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportSpecStarting = function(spec) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportSpecResults = function(spec) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.log = function(str) {
};

/**
 * Blocks are functions with executable code that make up a spec.
 *
 * @constructor
 * @param {jasmine.Env} env
 * @param {Function} func
 * @param {jasmine.Spec} spec
 */
jasmine.Block = function(env, func, spec) {
  this.env = env;
  this.func = func;
  this.spec = spec;
};

jasmine.Block.prototype.execute = function(onComplete) {  
  try {
    this.func.apply(this.spec);
  } catch (e) {
    this.spec.fail(e);
  }
  onComplete();
};
/** JavaScript API reporter.
 *
 * @constructor
 */
jasmine.JsApiReporter = function() {
  this.started = false;
  this.finished = false;
  this.suites_ = [];
  this.results_ = {};
};

jasmine.JsApiReporter.prototype.reportRunnerStarting = function(runner) {
  this.started = true;
  var suites = runner.topLevelSuites();
  for (var i = 0; i < suites.length; i++) {
    var suite = suites[i];
    this.suites_.push(this.summarize_(suite));
  }
};

jasmine.JsApiReporter.prototype.suites = function() {
  return this.suites_;
};

jasmine.JsApiReporter.prototype.summarize_ = function(suiteOrSpec) {
  var isSuite = suiteOrSpec instanceof jasmine.Suite;
  var summary = {
    id: suiteOrSpec.id,
    name: suiteOrSpec.description,
    type: isSuite ? 'suite' : 'spec',
    children: []
  };
  
  if (isSuite) {
    var children = suiteOrSpec.children();
    for (var i = 0; i < children.length; i++) {
      summary.children.push(this.summarize_(children[i]));
    }
  }
  return summary;
};

jasmine.JsApiReporter.prototype.results = function() {
  return this.results_;
};

jasmine.JsApiReporter.prototype.resultsForSpec = function(specId) {
  return this.results_[specId];
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.reportRunnerResults = function(runner) {
  this.finished = true;
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.reportSuiteResults = function(suite) {
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.reportSpecResults = function(spec) {
  this.results_[spec.id] = {
    messages: spec.results().getItems(),
    result: spec.results().failedCount > 0 ? "failed" : "passed"
  };
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.log = function(str) {
};

jasmine.JsApiReporter.prototype.resultsForSpecs = function(specIds){
  var results = {};
  for (var i = 0; i < specIds.length; i++) {
    var specId = specIds[i];
    results[specId] = this.summarizeResult_(this.results_[specId]);
  }
  return results;
};

jasmine.JsApiReporter.prototype.summarizeResult_ = function(result){
  var summaryMessages = [];
  var messagesLength = result.messages.length;
  for (var messageIndex = 0; messageIndex < messagesLength; messageIndex++) {
    var resultMessage = result.messages[messageIndex];
    summaryMessages.push({
      text: resultMessage.type == 'log' ? resultMessage.toString() : jasmine.undefined,
      passed: resultMessage.passed ? resultMessage.passed() : true,
      type: resultMessage.type,
      message: resultMessage.message,
      trace: {
        stack: resultMessage.passed && !resultMessage.passed() ? resultMessage.trace.stack : jasmine.undefined
      }
    });
  }

  return {
    result : result.result,
    messages : summaryMessages
  };
};

/**
 * @constructor
 * @param {jasmine.Env} env
 * @param actual
 * @param {jasmine.Spec} spec
 */
jasmine.Matchers = function(env, actual, spec, opt_isNot) {
  this.env = env;
  this.actual = actual;
  this.spec = spec;
  this.isNot = opt_isNot || false;
  this.reportWasCalled_ = false;
};

// todo: @deprecated as of Jasmine 0.11, remove soon [xw]
jasmine.Matchers.pp = function(str) {
  throw new Error("jasmine.Matchers.pp() is no longer supported, please use jasmine.pp() instead!");
};

// todo: @deprecated Deprecated as of Jasmine 0.10. Rewrite your custom matchers to return true or false. [xw]
jasmine.Matchers.prototype.report = function(result, failing_message, details) {
  throw new Error("As of jasmine 0.11, custom matchers must be implemented differently -- please see jasmine docs");
};

jasmine.Matchers.wrapInto_ = function(prototype, matchersClass) {
  for (var methodName in prototype) {
    if (methodName == 'report') continue;
    var orig = prototype[methodName];
    matchersClass.prototype[methodName] = jasmine.Matchers.matcherFn_(methodName, orig);
  }
};

jasmine.Matchers.matcherFn_ = function(matcherName, matcherFunction) {
  return function() {
    var matcherArgs = jasmine.util.argsToArray(arguments);
    var result = matcherFunction.apply(this, arguments);

    if (this.isNot) {
      result = !result;
    }

    if (this.reportWasCalled_) return result;

    var message;
    if (!result) {
      if (this.message) {
        message = this.message.apply(this, arguments);
        if (jasmine.isArray_(message)) {
          message = message[this.isNot ? 1 : 0];
        }
      } else {
        var englishyPredicate = matcherName.replace(/[A-Z]/g, function(s) { return ' ' + s.toLowerCase(); });
        message = "Expected " + jasmine.pp(this.actual) + (this.isNot ? " not " : " ") + englishyPredicate;
        if (matcherArgs.length > 0) {
          for (var i = 0; i < matcherArgs.length; i++) {
            if (i > 0) message += ",";
            message += " " + jasmine.pp(matcherArgs[i]);
          }
        }
        message += ".";
      }
    }
    var expectationResult = new jasmine.ExpectationResult({
      matcherName: matcherName,
      passed: result,
      expected: matcherArgs.length > 1 ? matcherArgs : matcherArgs[0],
      actual: this.actual,
      message: message
    });
    this.spec.addMatcherResult(expectationResult);
    return jasmine.undefined;
  };
};




/**
 * toBe: compares the actual to the expected using ===
 * @param expected
 */
jasmine.Matchers.prototype.toBe = function(expected) {
  return this.actual === expected;
};

/**
 * toNotBe: compares the actual to the expected using !==
 * @param expected
 * @deprecated as of 1.0. Use not.toBe() instead.
 */
jasmine.Matchers.prototype.toNotBe = function(expected) {
  return this.actual !== expected;
};

/**
 * toEqual: compares the actual to the expected using common sense equality. Handles Objects, Arrays, etc.
 *
 * @param expected
 */
jasmine.Matchers.prototype.toEqual = function(expected) {
  return this.env.equals_(this.actual, expected);
};

/**
 * toNotEqual: compares the actual to the expected using the ! of jasmine.Matchers.toEqual
 * @param expected
 * @deprecated as of 1.0. Use not.toNotEqual() instead.
 */
jasmine.Matchers.prototype.toNotEqual = function(expected) {
  return !this.env.equals_(this.actual, expected);
};

/**
 * Matcher that compares the actual to the expected using a regular expression.  Constructs a RegExp, so takes
 * a pattern or a String.
 *
 * @param expected
 */
jasmine.Matchers.prototype.toMatch = function(expected) {
  return new RegExp(expected).test(this.actual);
};

/**
 * Matcher that compares the actual to the expected using the boolean inverse of jasmine.Matchers.toMatch
 * @param expected
 * @deprecated as of 1.0. Use not.toMatch() instead.
 */
jasmine.Matchers.prototype.toNotMatch = function(expected) {
  return !(new RegExp(expected).test(this.actual));
};

/**
 * Matcher that compares the actual to jasmine.undefined.
 */
jasmine.Matchers.prototype.toBeDefined = function() {
  return (this.actual !== jasmine.undefined);
};

/**
 * Matcher that compares the actual to jasmine.undefined.
 */
jasmine.Matchers.prototype.toBeUndefined = function() {
  return (this.actual === jasmine.undefined);
};

/**
 * Matcher that compares the actual to null.
 */
jasmine.Matchers.prototype.toBeNull = function() {
  return (this.actual === null);
};

/**
 * Matcher that boolean not-nots the actual.
 */
jasmine.Matchers.prototype.toBeTruthy = function() {
  return !!this.actual;
};


/**
 * Matcher that boolean nots the actual.
 */
jasmine.Matchers.prototype.toBeFalsy = function() {
  return !this.actual;
};


/**
 * Matcher that checks to see if the actual, a Jasmine spy, was called.
 */
jasmine.Matchers.prototype.toHaveBeenCalled = function() {
  if (arguments.length > 0) {
    throw new Error('toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith');
  }

  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }

  this.message = function() {
    return [
      "Expected spy " + this.actual.identity + " to have been called.",
      "Expected spy " + this.actual.identity + " not to have been called."
    ];
  };

  return this.actual.wasCalled;
};

/** @deprecated Use expect(xxx).toHaveBeenCalled() instead */
jasmine.Matchers.prototype.wasCalled = jasmine.Matchers.prototype.toHaveBeenCalled;

/**
 * Matcher that checks to see if the actual, a Jasmine spy, was not called.
 *
 * @deprecated Use expect(xxx).not.toHaveBeenCalled() instead
 */
jasmine.Matchers.prototype.wasNotCalled = function() {
  if (arguments.length > 0) {
    throw new Error('wasNotCalled does not take arguments');
  }

  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }

  this.message = function() {
    return [
      "Expected spy " + this.actual.identity + " to not have been called.",
      "Expected spy " + this.actual.identity + " to have been called."
    ];
  };

  return !this.actual.wasCalled;
};

/**
 * Matcher that checks to see if the actual, a Jasmine spy, was called with a set of parameters.
 *
 * @example
 *
 */
jasmine.Matchers.prototype.toHaveBeenCalledWith = function() {
  var expectedArgs = jasmine.util.argsToArray(arguments);
  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }
  this.message = function() {
    if (this.actual.callCount == 0) {
      // todo: what should the failure message for .not.toHaveBeenCalledWith() be? is this right? test better. [xw]
      return [
        "Expected spy to have been called with " + jasmine.pp(expectedArgs) + " but it was never called.",
        "Expected spy not to have been called with " + jasmine.pp(expectedArgs) + " but it was."
      ];
    } else {
      return [
        "Expected spy to have been called with " + jasmine.pp(expectedArgs) + " but was called with " + jasmine.pp(this.actual.argsForCall),
        "Expected spy not to have been called with " + jasmine.pp(expectedArgs) + " but was called with " + jasmine.pp(this.actual.argsForCall)
      ];
    }
  };

  return this.env.contains_(this.actual.argsForCall, expectedArgs);
};

/** @deprecated Use expect(xxx).toHaveBeenCalledWith() instead */
jasmine.Matchers.prototype.wasCalledWith = jasmine.Matchers.prototype.toHaveBeenCalledWith;

/** @deprecated Use expect(xxx).not.toHaveBeenCalledWith() instead */
jasmine.Matchers.prototype.wasNotCalledWith = function() {
  var expectedArgs = jasmine.util.argsToArray(arguments);
  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }

  this.message = function() {
    return [
      "Expected spy not to have been called with " + jasmine.pp(expectedArgs) + " but it was",
      "Expected spy to have been called with " + jasmine.pp(expectedArgs) + " but it was"
    ]
  };

  return !this.env.contains_(this.actual.argsForCall, expectedArgs);
};

/**
 * Matcher that checks that the expected item is an element in the actual Array.
 *
 * @param {Object} expected
 */
jasmine.Matchers.prototype.toContain = function(expected) {
  return this.env.contains_(this.actual, expected);
};

/**
 * Matcher that checks that the expected item is NOT an element in the actual Array.
 *
 * @param {Object} expected
 * @deprecated as of 1.0. Use not.toNotContain() instead.
 */
jasmine.Matchers.prototype.toNotContain = function(expected) {
  return !this.env.contains_(this.actual, expected);
};

jasmine.Matchers.prototype.toBeLessThan = function(expected) {
  return this.actual < expected;
};

jasmine.Matchers.prototype.toBeGreaterThan = function(expected) {
  return this.actual > expected;
};

/**
 * Matcher that checks that the expected exception was thrown by the actual.
 *
 * @param {String} expected
 */
jasmine.Matchers.prototype.toThrow = function(expected) {
  var result = false;
  var exception;
  if (typeof this.actual != 'function') {
    throw new Error('Actual is not a function');
  }
  try {
    this.actual();
  } catch (e) {
    exception = e;
  }
  if (exception) {
    result = (expected === jasmine.undefined || this.env.equals_(exception.message || exception, expected.message || expected));
  }

  var not = this.isNot ? "not " : "";

  this.message = function() {
    if (exception && (expected === jasmine.undefined || !this.env.equals_(exception.message || exception, expected.message || expected))) {
      return ["Expected function " + not + "to throw", expected ? expected.message || expected : " an exception", ", but it threw", exception.message || exception].join(' ');
    } else {
      return "Expected function to throw an exception.";
    }
  };

  return result;
};

jasmine.Matchers.Any = function(expectedClass) {
  this.expectedClass = expectedClass;
};

jasmine.Matchers.Any.prototype.matches = function(other) {
  if (this.expectedClass == String) {
    return typeof other == 'string' || other instanceof String;
  }

  if (this.expectedClass == Number) {
    return typeof other == 'number' || other instanceof Number;
  }

  if (this.expectedClass == Function) {
    return typeof other == 'function' || other instanceof Function;
  }

  if (this.expectedClass == Object) {
    return typeof other == 'object';
  }

  return other instanceof this.expectedClass;
};

jasmine.Matchers.Any.prototype.toString = function() {
  return '<jasmine.any(' + this.expectedClass + ')>';
};

/**
 * @constructor
 */
jasmine.MultiReporter = function() {
  this.subReporters_ = [];
};
jasmine.util.inherit(jasmine.MultiReporter, jasmine.Reporter);

jasmine.MultiReporter.prototype.addReporter = function(reporter) {
  this.subReporters_.push(reporter);
};

(function() {
  var functionNames = [
    "reportRunnerStarting",
    "reportRunnerResults",
    "reportSuiteResults",
    "reportSpecStarting",
    "reportSpecResults",
    "log"
  ];
  for (var i = 0; i < functionNames.length; i++) {
    var functionName = functionNames[i];
    jasmine.MultiReporter.prototype[functionName] = (function(functionName) {
      return function() {
        for (var j = 0; j < this.subReporters_.length; j++) {
          var subReporter = this.subReporters_[j];
          if (subReporter[functionName]) {
            subReporter[functionName].apply(subReporter, arguments);
          }
        }
      };
    })(functionName);
  }
})();
/**
 * Holds results for a set of Jasmine spec. Allows for the results array to hold another jasmine.NestedResults
 *
 * @constructor
 */
jasmine.NestedResults = function() {
  /**
   * The total count of results
   */
  this.totalCount = 0;
  /**
   * Number of passed results
   */
  this.passedCount = 0;
  /**
   * Number of failed results
   */
  this.failedCount = 0;
  /**
   * Was this suite/spec skipped?
   */
  this.skipped = false;
  /**
   * @ignore
   */
  this.items_ = [];
};

/**
 * Roll up the result counts.
 *
 * @param result
 */
jasmine.NestedResults.prototype.rollupCounts = function(result) {
  this.totalCount += result.totalCount;
  this.passedCount += result.passedCount;
  this.failedCount += result.failedCount;
};

/**
 * Adds a log message.
 * @param values Array of message parts which will be concatenated later.
 */
jasmine.NestedResults.prototype.log = function(values) {
  this.items_.push(new jasmine.MessageResult(values));
};

/**
 * Getter for the results: message & results.
 */
jasmine.NestedResults.prototype.getItems = function() {
  return this.items_;
};

/**
 * Adds a result, tracking counts (total, passed, & failed)
 * @param {jasmine.ExpectationResult|jasmine.NestedResults} result
 */
jasmine.NestedResults.prototype.addResult = function(result) {
  if (result.type != 'log') {
    if (result.items_) {
      this.rollupCounts(result);
    } else {
      this.totalCount++;
      if (result.passed()) {
        this.passedCount++;
      } else {
        this.failedCount++;
      }
    }
  }
  this.items_.push(result);
};

/**
 * @returns {Boolean} True if <b>everything</b> below passed
 */
jasmine.NestedResults.prototype.passed = function() {
  return this.passedCount === this.totalCount;
};
/**
 * Base class for pretty printing for expectation results.
 */
jasmine.PrettyPrinter = function() {
  this.ppNestLevel_ = 0;
};

/**
 * Formats a value in a nice, human-readable string.
 *
 * @param value
 */
jasmine.PrettyPrinter.prototype.format = function(value) {
  if (this.ppNestLevel_ > 40) {
    throw new Error('jasmine.PrettyPrinter: format() nested too deeply!');
  }

  this.ppNestLevel_++;
  try {
    if (value === jasmine.undefined) {
      this.emitScalar('undefined');
    } else if (value === null) {
      this.emitScalar('null');
    } else if (value === jasmine.getGlobal()) {
      this.emitScalar('<global>');
    } else if (value instanceof jasmine.Matchers.Any) {
      this.emitScalar(value.toString());
    } else if (typeof value === 'string') {
      this.emitString(value);
    } else if (jasmine.isSpy(value)) {
      this.emitScalar("spy on " + value.identity);
    } else if (value instanceof RegExp) {
      this.emitScalar(value.toString());
    } else if (typeof value === 'function') {
      this.emitScalar('Function');
    } else if (typeof value.nodeType === 'number') {
      this.emitScalar('HTMLNode');
    } else if (value instanceof Date) {
      this.emitScalar('Date(' + value + ')');
    } else if (value.__Jasmine_been_here_before__) {
      this.emitScalar('<circular reference: ' + (jasmine.isArray_(value) ? 'Array' : 'Object') + '>');
    } else if (jasmine.isArray_(value) || typeof value == 'object') {
      value.__Jasmine_been_here_before__ = true;
      if (jasmine.isArray_(value)) {
        this.emitArray(value);
      } else {
        this.emitObject(value);
      }
      delete value.__Jasmine_been_here_before__;
    } else {
      this.emitScalar(value.toString());
    }
  } finally {
    this.ppNestLevel_--;
  }
};

jasmine.PrettyPrinter.prototype.iterateObject = function(obj, fn) {
  for (var property in obj) {
    if (property == '__Jasmine_been_here_before__') continue;
    fn(property, obj.__lookupGetter__ ? (obj.__lookupGetter__(property) != null) : false);
  }
};

jasmine.PrettyPrinter.prototype.emitArray = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitObject = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitScalar = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitString = jasmine.unimplementedMethod_;

jasmine.StringPrettyPrinter = function() {
  jasmine.PrettyPrinter.call(this);

  this.string = '';
};
jasmine.util.inherit(jasmine.StringPrettyPrinter, jasmine.PrettyPrinter);

jasmine.StringPrettyPrinter.prototype.emitScalar = function(value) {
  this.append(value);
};

jasmine.StringPrettyPrinter.prototype.emitString = function(value) {
  this.append("'" + value + "'");
};

jasmine.StringPrettyPrinter.prototype.emitArray = function(array) {
  this.append('[ ');
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      this.append(', ');
    }
    this.format(array[i]);
  }
  this.append(' ]');
};

jasmine.StringPrettyPrinter.prototype.emitObject = function(obj) {
  var self = this;
  this.append('{ ');
  var first = true;

  this.iterateObject(obj, function(property, isGetter) {
    if (first) {
      first = false;
    } else {
      self.append(', ');
    }

    self.append(property);
    self.append(' : ');
    if (isGetter) {
      self.append('<getter>');
    } else {
      self.format(obj[property]);
    }
  });

  this.append(' }');
};

jasmine.StringPrettyPrinter.prototype.append = function(value) {
  this.string += value;
};
jasmine.Queue = function(env) {
  this.env = env;
  this.blocks = [];
  this.running = false;
  this.index = 0;
  this.offset = 0;
  this.abort = false;
};

jasmine.Queue.prototype.addBefore = function(block) {
  this.blocks.unshift(block);
};

jasmine.Queue.prototype.add = function(block) {
  this.blocks.push(block);
};

jasmine.Queue.prototype.insertNext = function(block) {
  this.blocks.splice((this.index + this.offset + 1), 0, block);
  this.offset++;
};

jasmine.Queue.prototype.start = function(onComplete) {
  this.running = true;
  this.onComplete = onComplete;
  this.next_();
};

jasmine.Queue.prototype.isRunning = function() {
  return this.running;
};

jasmine.Queue.LOOP_DONT_RECURSE = true;

jasmine.Queue.prototype.next_ = function() {
  var self = this;
  var goAgain = true;

  while (goAgain) {
    goAgain = false;
    
    if (self.index < self.blocks.length && !this.abort) {
      var calledSynchronously = true;
      var completedSynchronously = false;

      var onComplete = function () {
        if (jasmine.Queue.LOOP_DONT_RECURSE && calledSynchronously) {
          completedSynchronously = true;
          return;
        }

        if (self.blocks[self.index].abort) {
          self.abort = true;
        }

        self.offset = 0;
        self.index++;

        var now = new Date().getTime();
        if (self.env.updateInterval && now - self.env.lastUpdate > self.env.updateInterval) {
          self.env.lastUpdate = now;
          self.env.setTimeout(function() {
            self.next_();
          }, 0);
        } else {
          if (jasmine.Queue.LOOP_DONT_RECURSE && completedSynchronously) {
            goAgain = true;
          } else {
            self.next_();
          }
        }
      };
      self.blocks[self.index].execute(onComplete);

      calledSynchronously = false;
      if (completedSynchronously) {
        onComplete();
      }
      
    } else {
      self.running = false;
      if (self.onComplete) {
        self.onComplete();
      }
    }
  }
};

jasmine.Queue.prototype.results = function() {
  var results = new jasmine.NestedResults();
  for (var i = 0; i < this.blocks.length; i++) {
    if (this.blocks[i].results) {
      results.addResult(this.blocks[i].results());
    }
  }
  return results;
};


/**
 * Runner
 *
 * @constructor
 * @param {jasmine.Env} env
 */
jasmine.Runner = function(env) {
  var self = this;
  self.env = env;
  self.queue = new jasmine.Queue(env);
  self.before_ = [];
  self.after_ = [];
  self.suites_ = [];
};

jasmine.Runner.prototype.execute = function() {
  var self = this;
  if (self.env.reporter.reportRunnerStarting) {
    self.env.reporter.reportRunnerStarting(this);
  }
  self.queue.start(function () {
    self.finishCallback();
  });
};

jasmine.Runner.prototype.beforeEach = function(beforeEachFunction) {
  beforeEachFunction.typeName = 'beforeEach';
  this.before_.splice(0,0,beforeEachFunction);
};

jasmine.Runner.prototype.afterEach = function(afterEachFunction) {
  afterEachFunction.typeName = 'afterEach';
  this.after_.splice(0,0,afterEachFunction);
};


jasmine.Runner.prototype.finishCallback = function() {
  this.env.reporter.reportRunnerResults(this);
};

jasmine.Runner.prototype.addSuite = function(suite) {
  this.suites_.push(suite);
};

jasmine.Runner.prototype.add = function(block) {
  if (block instanceof jasmine.Suite) {
    this.addSuite(block);
  }
  this.queue.add(block);
};

jasmine.Runner.prototype.specs = function () {
  var suites = this.suites();
  var specs = [];
  for (var i = 0; i < suites.length; i++) {
    specs = specs.concat(suites[i].specs());
  }
  return specs;
};

jasmine.Runner.prototype.suites = function() {
  return this.suites_;
};

jasmine.Runner.prototype.topLevelSuites = function() {
  var topLevelSuites = [];
  for (var i = 0; i < this.suites_.length; i++) {
    if (!this.suites_[i].parentSuite) {
      topLevelSuites.push(this.suites_[i]);
    }
  }
  return topLevelSuites;
};

jasmine.Runner.prototype.results = function() {
  return this.queue.results();
};
/**
 * Internal representation of a Jasmine specification, or test.
 *
 * @constructor
 * @param {jasmine.Env} env
 * @param {jasmine.Suite} suite
 * @param {String} description
 */
jasmine.Spec = function(env, suite, description) {
  if (!env) {
    throw new Error('jasmine.Env() required');
  }
  if (!suite) {
    throw new Error('jasmine.Suite() required');
  }
  var spec = this;
  spec.id = env.nextSpecId ? env.nextSpecId() : null;
  spec.env = env;
  spec.suite = suite;
  spec.description = description;
  spec.queue = new jasmine.Queue(env);

  spec.afterCallbacks = [];
  spec.spies_ = [];

  spec.results_ = new jasmine.NestedResults();
  spec.results_.description = description;
  spec.matchersClass = null;
};

jasmine.Spec.prototype.getFullName = function() {
  return this.suite.getFullName() + ' ' + this.description + '.';
};


jasmine.Spec.prototype.results = function() {
  return this.results_;
};

/**
 * All parameters are pretty-printed and concatenated together, then written to the spec's output.
 *
 * Be careful not to leave calls to <code>jasmine.log</code> in production code.
 */
jasmine.Spec.prototype.log = function() {
  return this.results_.log(arguments);
};

jasmine.Spec.prototype.runs = function (func) {
  var block = new jasmine.Block(this.env, func, this);
  this.addToQueue(block);
  return this;
};

jasmine.Spec.prototype.addToQueue = function (block) {
  if (this.queue.isRunning()) {
    this.queue.insertNext(block);
  } else {
    this.queue.add(block);
  }
};

/**
 * @param {jasmine.ExpectationResult} result
 */
jasmine.Spec.prototype.addMatcherResult = function(result) {
  this.results_.addResult(result);
};

jasmine.Spec.prototype.expect = function(actual) {
  var positive = new (this.getMatchersClass_())(this.env, actual, this);
  positive.not = new (this.getMatchersClass_())(this.env, actual, this, true);
  return positive;
};

/**
 * Waits a fixed time period before moving to the next block.
 *
 * @deprecated Use waitsFor() instead
 * @param {Number} timeout milliseconds to wait
 */
jasmine.Spec.prototype.waits = function(timeout) {
  var waitsFunc = new jasmine.WaitsBlock(this.env, timeout, this);
  this.addToQueue(waitsFunc);
  return this;
};

/**
 * Waits for the latchFunction to return true before proceeding to the next block.
 *
 * @param {Function} latchFunction
 * @param {String} optional_timeoutMessage
 * @param {Number} optional_timeout
 */
jasmine.Spec.prototype.waitsFor = function(latchFunction, optional_timeoutMessage, optional_timeout) {
  var latchFunction_ = null;
  var optional_timeoutMessage_ = null;
  var optional_timeout_ = null;

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    switch (typeof arg) {
      case 'function':
        latchFunction_ = arg;
        break;
      case 'string':
        optional_timeoutMessage_ = arg;
        break;
      case 'number':
        optional_timeout_ = arg;
        break;
    }
  }

  var waitsForFunc = new jasmine.WaitsForBlock(this.env, optional_timeout_, latchFunction_, optional_timeoutMessage_, this);
  this.addToQueue(waitsForFunc);
  return this;
};

jasmine.Spec.prototype.fail = function (e) {
  var expectationResult = new jasmine.ExpectationResult({
    passed: false,
    message: e ? jasmine.util.formatException(e) : 'Exception'
  });
  this.results_.addResult(expectationResult);
};

jasmine.Spec.prototype.getMatchersClass_ = function() {
  return this.matchersClass || this.env.matchersClass;
};

jasmine.Spec.prototype.addMatchers = function(matchersPrototype) {
  var parent = this.getMatchersClass_();
  var newMatchersClass = function() {
    parent.apply(this, arguments);
  };
  jasmine.util.inherit(newMatchersClass, parent);
  jasmine.Matchers.wrapInto_(matchersPrototype, newMatchersClass);
  this.matchersClass = newMatchersClass;
};

jasmine.Spec.prototype.finishCallback = function() {
  this.env.reporter.reportSpecResults(this);
};

jasmine.Spec.prototype.finish = function(onComplete) {
  this.removeAllSpies();
  this.finishCallback();
  if (onComplete) {
    onComplete();
  }
};

jasmine.Spec.prototype.after = function(doAfter) {
  if (this.queue.isRunning()) {
    this.queue.add(new jasmine.Block(this.env, doAfter, this));
  } else {
    this.afterCallbacks.unshift(doAfter);
  }
};

jasmine.Spec.prototype.execute = function(onComplete) {
  var spec = this;
  if (!spec.env.specFilter(spec)) {
    spec.results_.skipped = true;
    spec.finish(onComplete);
    return;
  }

  this.env.reporter.reportSpecStarting(this);

  spec.env.currentSpec = spec;

  spec.addBeforesAndAftersToQueue();

  spec.queue.start(function () {
    spec.finish(onComplete);
  });
};

jasmine.Spec.prototype.addBeforesAndAftersToQueue = function() {
  var runner = this.env.currentRunner();
  var i;

  for (var suite = this.suite; suite; suite = suite.parentSuite) {
    for (i = 0; i < suite.before_.length; i++) {
      this.queue.addBefore(new jasmine.Block(this.env, suite.before_[i], this));
    }
  }
  for (i = 0; i < runner.before_.length; i++) {
    this.queue.addBefore(new jasmine.Block(this.env, runner.before_[i], this));
  }
  for (i = 0; i < this.afterCallbacks.length; i++) {
    this.queue.add(new jasmine.Block(this.env, this.afterCallbacks[i], this));
  }
  for (suite = this.suite; suite; suite = suite.parentSuite) {
    for (i = 0; i < suite.after_.length; i++) {
      this.queue.add(new jasmine.Block(this.env, suite.after_[i], this));
    }
  }
  for (i = 0; i < runner.after_.length; i++) {
    this.queue.add(new jasmine.Block(this.env, runner.after_[i], this));
  }
};

jasmine.Spec.prototype.explodes = function() {
  throw 'explodes function should not have been called';
};

jasmine.Spec.prototype.spyOn = function(obj, methodName, ignoreMethodDoesntExist) {
  if (obj == jasmine.undefined) {
    throw "spyOn could not find an object to spy upon for " + methodName + "()";
  }

  if (!ignoreMethodDoesntExist && obj[methodName] === jasmine.undefined) {
    throw methodName + '() method does not exist';
  }

  if (!ignoreMethodDoesntExist && obj[methodName] && obj[methodName].isSpy) {
    throw new Error(methodName + ' has already been spied upon');
  }

  var spyObj = jasmine.createSpy(methodName);

  this.spies_.push(spyObj);
  spyObj.baseObj = obj;
  spyObj.methodName = methodName;
  spyObj.originalValue = obj[methodName];

  obj[methodName] = spyObj;

  return spyObj;
};

jasmine.Spec.prototype.removeAllSpies = function() {
  for (var i = 0; i < this.spies_.length; i++) {
    var spy = this.spies_[i];
    spy.baseObj[spy.methodName] = spy.originalValue;
  }
  this.spies_ = [];
};

/**
 * Internal representation of a Jasmine suite.
 *
 * @constructor
 * @param {jasmine.Env} env
 * @param {String} description
 * @param {Function} specDefinitions
 * @param {jasmine.Suite} parentSuite
 */
jasmine.Suite = function(env, description, specDefinitions, parentSuite) {
  var self = this;
  self.id = env.nextSuiteId ? env.nextSuiteId() : null;
  self.description = description;
  self.queue = new jasmine.Queue(env);
  self.parentSuite = parentSuite;
  self.env = env;
  self.before_ = [];
  self.after_ = [];
  self.children_ = [];
  self.suites_ = [];
  self.specs_ = [];
};

jasmine.Suite.prototype.getFullName = function() {
  var fullName = this.description;
  for (var parentSuite = this.parentSuite; parentSuite; parentSuite = parentSuite.parentSuite) {
    fullName = parentSuite.description + ' ' + fullName;
  }
  return fullName;
};

jasmine.Suite.prototype.finish = function(onComplete) {
  this.env.reporter.reportSuiteResults(this);
  this.finished = true;
  if (typeof(onComplete) == 'function') {
    onComplete();
  }
};

jasmine.Suite.prototype.beforeEach = function(beforeEachFunction) {
  beforeEachFunction.typeName = 'beforeEach';
  this.before_.unshift(beforeEachFunction);
};

jasmine.Suite.prototype.afterEach = function(afterEachFunction) {
  afterEachFunction.typeName = 'afterEach';
  this.after_.unshift(afterEachFunction);
};

jasmine.Suite.prototype.results = function() {
  return this.queue.results();
};

jasmine.Suite.prototype.add = function(suiteOrSpec) {
  this.children_.push(suiteOrSpec);
  if (suiteOrSpec instanceof jasmine.Suite) {
    this.suites_.push(suiteOrSpec);
    this.env.currentRunner().addSuite(suiteOrSpec);
  } else {
    this.specs_.push(suiteOrSpec);
  }
  this.queue.add(suiteOrSpec);
};

jasmine.Suite.prototype.specs = function() {
  return this.specs_;
};

jasmine.Suite.prototype.suites = function() {
  return this.suites_;
};

jasmine.Suite.prototype.children = function() {
  return this.children_;
};

jasmine.Suite.prototype.execute = function(onComplete) {
  var self = this;
  this.queue.start(function () {
    self.finish(onComplete);
  });
};
jasmine.WaitsBlock = function(env, timeout, spec) {
  this.timeout = timeout;
  jasmine.Block.call(this, env, null, spec);
};

jasmine.util.inherit(jasmine.WaitsBlock, jasmine.Block);

jasmine.WaitsBlock.prototype.execute = function (onComplete) {
  this.env.reporter.log('>> Jasmine waiting for ' + this.timeout + ' ms...');
  this.env.setTimeout(function () {
    onComplete();
  }, this.timeout);
};
/**
 * A block which waits for some condition to become true, with timeout.
 *
 * @constructor
 * @extends jasmine.Block
 * @param {jasmine.Env} env The Jasmine environment.
 * @param {Number} timeout The maximum time in milliseconds to wait for the condition to become true.
 * @param {Function} latchFunction A function which returns true when the desired condition has been met.
 * @param {String} message The message to display if the desired condition hasn't been met within the given time period.
 * @param {jasmine.Spec} spec The Jasmine spec.
 */
jasmine.WaitsForBlock = function(env, timeout, latchFunction, message, spec) {
  this.timeout = timeout || env.defaultTimeoutInterval;
  this.latchFunction = latchFunction;
  this.message = message;
  this.totalTimeSpentWaitingForLatch = 0;
  jasmine.Block.call(this, env, null, spec);
};
jasmine.util.inherit(jasmine.WaitsForBlock, jasmine.Block);

jasmine.WaitsForBlock.TIMEOUT_INCREMENT = 10;

jasmine.WaitsForBlock.prototype.execute = function(onComplete) {
  this.env.reporter.log('>> Jasmine waiting for ' + (this.message || 'something to happen'));
  var latchFunctionResult;
  try {
    latchFunctionResult = this.latchFunction.apply(this.spec);
  } catch (e) {
    this.spec.fail(e);
    onComplete();
    return;
  }

  if (latchFunctionResult) {
    onComplete();
  } else if (this.totalTimeSpentWaitingForLatch >= this.timeout) {
    var message = 'timed out after ' + this.timeout + ' msec waiting for ' + (this.message || 'something to happen');
    this.spec.fail({
      name: 'timeout',
      message: message
    });

    this.abort = true;
    onComplete();
  } else {
    this.totalTimeSpentWaitingForLatch += jasmine.WaitsForBlock.TIMEOUT_INCREMENT;
    var self = this;
    this.env.setTimeout(function() {
      self.execute(onComplete);
    }, jasmine.WaitsForBlock.TIMEOUT_INCREMENT);
  }
};
// Mock setTimeout, clearTimeout
// Contributed by Pivotal Computer Systems, www.pivotalsf.com

jasmine.FakeTimer = function() {
  this.reset();

  var self = this;
  self.setTimeout = function(funcToCall, millis) {
    self.timeoutsMade++;
    self.scheduleFunction(self.timeoutsMade, funcToCall, millis, false);
    return self.timeoutsMade;
  };

  self.setInterval = function(funcToCall, millis) {
    self.timeoutsMade++;
    self.scheduleFunction(self.timeoutsMade, funcToCall, millis, true);
    return self.timeoutsMade;
  };

  self.clearTimeout = function(timeoutKey) {
    self.scheduledFunctions[timeoutKey] = jasmine.undefined;
  };

  self.clearInterval = function(timeoutKey) {
    self.scheduledFunctions[timeoutKey] = jasmine.undefined;
  };

};

jasmine.FakeTimer.prototype.reset = function() {
  this.timeoutsMade = 0;
  this.scheduledFunctions = {};
  this.nowMillis = 0;
};

jasmine.FakeTimer.prototype.tick = function(millis) {
  var oldMillis = this.nowMillis;
  var newMillis = oldMillis + millis;
  this.runFunctionsWithinRange(oldMillis, newMillis);
  this.nowMillis = newMillis;
};

jasmine.FakeTimer.prototype.runFunctionsWithinRange = function(oldMillis, nowMillis) {
  var scheduledFunc;
  var funcsToRun = [];
  for (var timeoutKey in this.scheduledFunctions) {
    scheduledFunc = this.scheduledFunctions[timeoutKey];
    if (scheduledFunc != jasmine.undefined &&
        scheduledFunc.runAtMillis >= oldMillis &&
        scheduledFunc.runAtMillis <= nowMillis) {
      funcsToRun.push(scheduledFunc);
      this.scheduledFunctions[timeoutKey] = jasmine.undefined;
    }
  }

  if (funcsToRun.length > 0) {
    funcsToRun.sort(function(a, b) {
      return a.runAtMillis - b.runAtMillis;
    });
    for (var i = 0; i < funcsToRun.length; ++i) {
      try {
        var funcToRun = funcsToRun[i];
        this.nowMillis = funcToRun.runAtMillis;
        funcToRun.funcToCall();
        if (funcToRun.recurring) {
          this.scheduleFunction(funcToRun.timeoutKey,
              funcToRun.funcToCall,
              funcToRun.millis,
              true);
        }
      } catch(e) {
      }
    }
    this.runFunctionsWithinRange(oldMillis, nowMillis);
  }
};

jasmine.FakeTimer.prototype.scheduleFunction = function(timeoutKey, funcToCall, millis, recurring) {
  this.scheduledFunctions[timeoutKey] = {
    runAtMillis: this.nowMillis + millis,
    funcToCall: funcToCall,
    recurring: recurring,
    timeoutKey: timeoutKey,
    millis: millis
  };
};

/**
 * @namespace
 */
jasmine.Clock = {
  defaultFakeTimer: new jasmine.FakeTimer(),

  reset: function() {
    jasmine.Clock.assertInstalled();
    jasmine.Clock.defaultFakeTimer.reset();
  },

  tick: function(millis) {
    jasmine.Clock.assertInstalled();
    jasmine.Clock.defaultFakeTimer.tick(millis);
  },

  runFunctionsWithinRange: function(oldMillis, nowMillis) {
    jasmine.Clock.defaultFakeTimer.runFunctionsWithinRange(oldMillis, nowMillis);
  },

  scheduleFunction: function(timeoutKey, funcToCall, millis, recurring) {
    jasmine.Clock.defaultFakeTimer.scheduleFunction(timeoutKey, funcToCall, millis, recurring);
  },

  useMock: function() {
    if (!jasmine.Clock.isInstalled()) {
      var spec = jasmine.getEnv().currentSpec;
      spec.after(jasmine.Clock.uninstallMock);

      jasmine.Clock.installMock();
    }
  },

  installMock: function() {
    jasmine.Clock.installed = jasmine.Clock.defaultFakeTimer;
  },

  uninstallMock: function() {
    jasmine.Clock.assertInstalled();
    jasmine.Clock.installed = jasmine.Clock.real;
  },

  real: {
    setTimeout: jasmine.getGlobal().setTimeout,
    clearTimeout: jasmine.getGlobal().clearTimeout,
    setInterval: jasmine.getGlobal().setInterval,
    clearInterval: jasmine.getGlobal().clearInterval
  },

  assertInstalled: function() {
    if (!jasmine.Clock.isInstalled()) {
      throw new Error("Mock clock is not installed, use jasmine.Clock.useMock()");
    }
  },

  isInstalled: function() {
    return jasmine.Clock.installed == jasmine.Clock.defaultFakeTimer;
  },

  installed: null
};
jasmine.Clock.installed = jasmine.Clock.real;

//else for IE support
jasmine.getGlobal().setTimeout = function(funcToCall, millis) {
  if (jasmine.Clock.installed.setTimeout.apply) {
    return jasmine.Clock.installed.setTimeout.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.setTimeout(funcToCall, millis);
  }
};

jasmine.getGlobal().setInterval = function(funcToCall, millis) {
  if (jasmine.Clock.installed.setInterval.apply) {
    return jasmine.Clock.installed.setInterval.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.setInterval(funcToCall, millis);
  }
};

jasmine.getGlobal().clearTimeout = function(timeoutKey) {
  if (jasmine.Clock.installed.clearTimeout.apply) {
    return jasmine.Clock.installed.clearTimeout.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.clearTimeout(timeoutKey);
  }
};

jasmine.getGlobal().clearInterval = function(timeoutKey) {
  if (jasmine.Clock.installed.clearTimeout.apply) {
    return jasmine.Clock.installed.clearInterval.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.clearInterval(timeoutKey);
  }
};


jasmine.version_= {
  "major": 1,
  "minor": 0,
  "build": 2,
  "revision": 1298837858
};
define("lib/impl/jasmine", function(){});
jasmine.TrivialReporter = function(doc) {
  this.document = doc || document;
  this.suiteDivs = {};
  this.logRunningSpecs = false;
};

jasmine.TrivialReporter.prototype.createDom = function(type, attrs, childrenVarArgs) {
  var el = document.createElement(type);

  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      if (child) { el.appendChild(child); }
    }
  }

  for (var attr in attrs) {
    if (attr == "className") {
      el[attr] = attrs[attr];
    } else {
      el.setAttribute(attr, attrs[attr]);
    }
  }

  return el;
};

jasmine.TrivialReporter.prototype.reportRunnerStarting = function(runner) {
  var showPassed, showSkipped;

  this.outerDiv = this.createDom('div', { className: 'jasmine_reporter' },
      this.createDom('div', { className: 'banner' },
        this.createDom('div', { className: 'logo' },
            this.createDom('a', { href: 'http://pivotal.github.com/jasmine/', target: "_blank" }, "Jasmine"),
            this.createDom('span', { className: 'version' }, runner.env.versionString())),
        this.createDom('div', { className: 'options' },
            "Show ",
            showPassed = this.createDom('input', { id: "__jasmine_TrivialReporter_showPassed__", type: 'checkbox' }),
            this.createDom('label', { "for": "__jasmine_TrivialReporter_showPassed__" }, " passed "),
            showSkipped = this.createDom('input', { id: "__jasmine_TrivialReporter_showSkipped__", type: 'checkbox' }),
            this.createDom('label', { "for": "__jasmine_TrivialReporter_showSkipped__" }, " skipped")
            )
          ),

      this.runnerDiv = this.createDom('div', { className: 'runner running' },
          this.createDom('a', { className: 'run_spec', href: '?' }, "run all"),
          this.runnerMessageSpan = this.createDom('span', {}, "Running..."),
          this.finishedAtSpan = this.createDom('span', { className: 'finished-at' }, ""))
      );

  this.document.body.appendChild(this.outerDiv);

  var suites = runner.suites();
  for (var i = 0; i < suites.length; i++) {
    var suite = suites[i];
    var suiteDiv = this.createDom('div', { className: 'suite' },
        this.createDom('a', { className: 'run_spec', href: '?spec=' + encodeURIComponent(suite.getFullName()) }, "run"),
        this.createDom('a', { className: 'description', href: '?spec=' + encodeURIComponent(suite.getFullName()) }, suite.description));
    this.suiteDivs[suite.id] = suiteDiv;
    var parentDiv = this.outerDiv;
    if (suite.parentSuite) {
      parentDiv = this.suiteDivs[suite.parentSuite.id];
    }
    parentDiv.appendChild(suiteDiv);
  }

  this.startedAt = new Date();

  var self = this;
  showPassed.onclick = function(evt) {
    if (showPassed.checked) {
      self.outerDiv.className += ' show-passed';
    } else {
      self.outerDiv.className = self.outerDiv.className.replace(/ show-passed/, '');
    }
  };

  showSkipped.onclick = function(evt) {
    if (showSkipped.checked) {
      self.outerDiv.className += ' show-skipped';
    } else {
      self.outerDiv.className = self.outerDiv.className.replace(/ show-skipped/, '');
    }
  };
};

jasmine.TrivialReporter.prototype.reportRunnerResults = function(runner) {
  var results = runner.results();
  var className = (results.failedCount > 0) ? "runner failed" : "runner passed";
  this.runnerDiv.setAttribute("class", className);
  //do it twice for IE
  this.runnerDiv.setAttribute("className", className);
  var specs = runner.specs();
  var specCount = 0;
  for (var i = 0; i < specs.length; i++) {
    if (this.specFilter(specs[i])) {
      specCount++;
    }
  }
  var message = "" + specCount + " spec" + (specCount == 1 ? "" : "s" ) + ", " + results.failedCount + " failure" + ((results.failedCount == 1) ? "" : "s");
  message += " in " + ((new Date().getTime() - this.startedAt.getTime()) / 1000) + "s";
  this.runnerMessageSpan.replaceChild(this.createDom('a', { className: 'description', href: '?'}, message), this.runnerMessageSpan.firstChild);

  this.finishedAtSpan.appendChild(document.createTextNode("Finished at " + new Date().toString()));
};

jasmine.TrivialReporter.prototype.reportSuiteResults = function(suite) {
  var results = suite.results();
  var status = results.passed() ? 'passed' : 'failed';
  if (results.totalCount == 0) { // todo: change this to check results.skipped
    status = 'skipped';
  }
  this.suiteDivs[suite.id].className += " " + status;
};

jasmine.TrivialReporter.prototype.reportSpecStarting = function(spec) {
  if (this.logRunningSpecs) {
    this.log('>> Jasmine Running ' + spec.suite.description + ' ' + spec.description + '...');
  }
};

jasmine.TrivialReporter.prototype.reportSpecResults = function(spec) {
  var results = spec.results();
  var status = results.passed() ? 'passed' : 'failed';
  if (results.skipped) {
    status = 'skipped';
  }
  var specDiv = this.createDom('div', { className: 'spec '  + status },
      this.createDom('a', { className: 'run_spec', href: '?spec=' + encodeURIComponent(spec.getFullName()) }, "run"),
      this.createDom('a', {
        className: 'description',
        href: '?spec=' + encodeURIComponent(spec.getFullName()),
        title: spec.getFullName()
      }, spec.description));


  var resultItems = results.getItems();
  var messagesDiv = this.createDom('div', { className: 'messages' });
  for (var i = 0; i < resultItems.length; i++) {
    var result = resultItems[i];

    if (result.type == 'log') {
      messagesDiv.appendChild(this.createDom('div', {className: 'resultMessage log'}, result.toString()));
    } else if (result.type == 'expect' && result.passed && !result.passed()) {
      messagesDiv.appendChild(this.createDom('div', {className: 'resultMessage fail'}, result.message));

      if (result.trace.stack) {
        messagesDiv.appendChild(this.createDom('div', {className: 'stackTrace'}, result.trace.stack));
      }
    }
  }

  if (messagesDiv.childNodes.length > 0) {
    specDiv.appendChild(messagesDiv);
  }

  this.suiteDivs[spec.suite.id].appendChild(specDiv);
};

jasmine.TrivialReporter.prototype.log = function() {
  var console = jasmine.getGlobal().console;
  if (console && console.log) {
    if (console.log.apply) {
      console.log.apply(console, arguments);
    } else {
      console.log(arguments); // ie fix: console.log.apply doesn't exist on ie
    }
  }
};

jasmine.TrivialReporter.prototype.getLocation = function() {
  return this.document.location;
};

jasmine.TrivialReporter.prototype.specFilter = function(spec) {
  var paramMap = {};
  var params = this.getLocation().search.substring(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p = params[i].split('=');
    paramMap[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
  }

  if (!paramMap["spec"]) return true;
  return spec.getFullName().indexOf(paramMap["spec"]) == 0;
};
define("lib/impl/jasmine-html", function(){});
define('lib/externals',[
    'plugin/order!lib/impl/jquery-1.6.1',
    'plugin/order!lib/impl/jquery-mobile-noinit',
    'plugin/order!lib/impl/angular-0.9.15',
    'plugin/order!lib/impl/jquery.mobile-1.0b1-oc2',
    'plugin/order!lib/impl/jquery-mobile-angular-adapter',
    'plugin/order!lib/impl/jasmine',
    'plugin/order!lib/impl/jasmine-html'
]);
define("lib/unit-html-externals", function(){});
define('lib/jasmine-html',['lib/externals'], function() {
    $(function() {
        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
        jasmine.getEnv().execute();
    });
});
define('lib/jasmine',['lib/externals'], function() {
    return jasmine;
});
define('lib/jquery',["lib/externals"],function(){return $});
define('lib/jqm-angular',["lib/externals"],function(){function a(){return $.mobile.globalScope().$service("$updateView")()}return{globalScope:$.mobile.globalScope,updateView:a}});
define('app/ocxhr',["lib/jqm-angular","lib/jquery"],function(a,b){function c(c,d){var e=b.ajax(c,d);e.always(a.updateView);return e}return{xhr:c}});
define('unit/ocxhrSpec',['lib/jasmine', 'lib/jquery', 'lib/jqm-angular', 'app/ocxhr'], function(jasmine, $, jqmng, ocxhr) {
    describe('ocxhr', function() {
        var ajaxSpy, updateViewSpy;
        beforeEach(function() {
            ajaxSpy = spyOn($, 'ajax');
            updateViewSpy = spyOn(jqmng, 'updateView');
        });
        it('should call jquery.ajax', function() {
            var jqueryRes = $.Deferred();
            ajaxSpy.andReturn(jqueryRes);
            var testOptions = {};
            var res = ocxhr.xhr('testurl', testOptions);
            expect(ajaxSpy).toHaveBeenCalledWith('testurl', testOptions);
            expect(res).toBe(jqueryRes);
        });

        it('should call updateView', function() {
            var jqueryRes = $.Deferred();
            ajaxSpy.andReturn(jqueryRes);
            ocxhr.xhr('testurl');
            expect(updateViewSpy).not.toHaveBeenCalled();
            jqueryRes.resolve();
            expect(updateViewSpy).toHaveBeenCalled();
        });
    });
});
define('app/phoneService',["app/ocxhr"],function(a){function c(b){return a.xhr("phones/"+b+".json",{dataType:"json"})}function b(){return a.xhr("phones/phones.json",{dataType:"json"})}return{phones:b,phone:c}});
define('unit/phoneServiceSpec',['lib/jasmine', 'lib/jquery', 'app/ocxhr', 'app/phoneService'], function(jasmine, $, ocxhr, service) {
    describe('phoneService', function() {
        var mockXhr;
        beforeEach(function() {
            mockXhr = spyOn(ocxhr, 'xhr');
        });

        it('should call and return phones/phones.json as promise', function() {
            var phones = [
                {test: true}
            ];
            var phonesPromise = $.Deferred();
            phonesPromise.resolve(phones);

            mockXhr.andReturn(phonesPromise);
            var serviceResult;
            service.phones().done(function(res) {
                serviceResult = res;
            });
            expect(serviceResult).toEqual(phones);

        });

        it('should call and return phones/[id].json as promise', function() {
            var phone = [
                {test: true}
            ];
            var phonePromise = $.Deferred();
            phonePromise.resolve(phone);

            mockXhr.andReturn(phonePromise);
            var serviceResult;
            service.phone().done(function(res) {
                serviceResult = res;
            });
            expect(serviceResult).toEqual(phone);

        });
    });
});
define('phonesTestData',[], function() {
    var onePhone = [
        {
            "id": "dell-streak-7",
            "name": "Dell Streak 7"
        }
    ];

    var twoPhones = [
        {
            "age": 0,
            "id": "motorola-xoom-with-wi-fi",
            "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
            "name": "Motorola XOOM\u2122 with Wi-Fi",
            "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
        },
        {
            "age": 1,
            "id": "motorola-xoom",
            "imageUrl": "img/phones/motorola-xoom.0.jpg",
            "name": "MOTOROLA XOOM\u2122",
            "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
        }
    ];

    var manyPhones = [
        {
            "age": 0,
            "id": "motorola-xoom-with-wi-fi",
            "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
            "name": "Motorola XOOM\u2122 with Wi-Fi",
            "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
        },
        {
            "age": 1,
            "id": "motorola-xoom",
            "imageUrl": "img/phones/motorola-xoom.0.jpg",
            "name": "MOTOROLA XOOM\u2122",
            "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
        },
        {
            "age": 2,
            "carrier": "AT&amp;T",
            "id": "motorola-atrix-4g",
            "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
            "name": "MOTOROLA ATRIX\u2122 4G",
            "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
        },
        {
            "age": 3,
            "id": "dell-streak-7",
            "imageUrl": "img/phones/dell-streak-7.0.jpg",
            "name": "Dell Streak 7",
            "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
        },
        {
            "age": 4,
            "carrier": "Cellular South",
            "id": "samsung-gem",
            "imageUrl": "img/phones/samsung-gem.0.jpg",
            "name": "Samsung Gem\u2122",
            "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
        },
        {
            "age": 5,
            "carrier": "Dell",
            "id": "dell-venue",
            "imageUrl": "img/phones/dell-venue.0.jpg",
            "name": "Dell Venue",
            "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
        },
        {
            "age": 6,
            "carrier": "Best Buy",
            "id": "nexus-s",
            "imageUrl": "img/phones/nexus-s.0.jpg",
            "name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
        },
        {
            "age": 7,
            "carrier": "Cellular South",
            "id": "lg-axis",
            "imageUrl": "img/phones/lg-axis.0.jpg",
            "name": "LG Axis",
            "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
        },
        {
            "age": 8,
            "id": "samsung-galaxy-tab",
            "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
            "name": "Samsung Galaxy Tab\u2122",
            "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
        },
        {
            "age": 9,
            "carrier": "Cellular South",
            "id": "samsung-showcase-a-galaxy-s-phone",
            "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
            "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone",
            "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
        },
        {
            "age": 10,
            "carrier": "Verizon",
            "id": "droid-2-global-by-motorola",
            "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg",
            "name": "DROID\u2122 2 Global by Motorola",
            "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
        },
        {
            "age": 11,
            "carrier": "Verizon",
            "id": "droid-pro-by-motorola",
            "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
            "name": "DROID\u2122 Pro by Motorola",
            "snippet": "The next generation of DOES."
        },
        {
            "age": 12,
            "carrier": "AT&amp;T",
            "id": "motorola-bravo-with-motoblur",
            "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg",
            "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122",
            "snippet": "An experience to cheer about."
        }
    ];

    var onePhoneDetail = {
        "additionalFeatures": "Front Facing 1.3MP Camera",
        "android": {
            "os": "Android 2.2",
            "ui": "Dell Stage"
        },
        "availability": [
            "T-Mobile"
        ],
        "battery": {
            "standbyTime": "",
            "talkTime": "",
            "type": "Lithium Ion (Li-Ion) (2780 mAH)"
        },
        "camera": {
            "features": [
                "Flash",
                "Video"
            ],
            "primary": "5.0 megapixels"
        },
        "connectivity": {
            "bluetooth": "Bluetooth 2.1",
            "cell": "T-mobile HSPA+ @ 2100/1900/AWS/850 MHz",
            "gps": true,
            "infrared": false,
            "wifi": "802.11 b/g"
        },
        "description": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around. Android\u2122 2.2-based tablet with over-the-air upgrade capability for future OS releases.  A vibrant 7-inch, multitouch display with full Adobe\u00ae Flash 10.1 pre-installed.  Includes a 1.3 MP front-facing camera for face-to-face chats on popular services such as Qik or Skype.  16 GB of internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in touch with the world around you.  Connect on your terms. Save with 2-year contract or flexibility with prepaid pay-as-you-go plans",
        "display": {
            "screenResolution": "WVGA (800 x 480)",
            "screenSize": "7.0 inches",
            "touchScreen": true
        },
        "hardware": {
            "accelerometer": true,
            "audioJack": "3.5mm",
            "cpu": "nVidia Tegra T20",
            "fmRadio": false,
            "physicalKeyboard": false,
            "usb": "USB 2.0"
        },
        "id": "dell-streak-7",
        "images": [
            "img/phones/dell-streak-7.0.jpg",
            "img/phones/dell-streak-7.1.jpg",
            "img/phones/dell-streak-7.2.jpg",
            "img/phones/dell-streak-7.3.jpg",
            "img/phones/dell-streak-7.4.jpg"
        ],
        "name": "Dell Streak 7",
        "sizeAndWeight": {
            "dimensions": [
                "199.9 mm (w)",
                "119.8 mm (h)",
                "12.4 mm (d)"
            ],
            "weight": "450.0 grams"
        },
        "storage": {
            "flash": "16000MB",
            "ram": "512MB"
        }
    };

    return {
        onePhone: onePhone,
        twoPhones: twoPhones,
        manyPhones: manyPhones,
        onePhoneDetail: onePhoneDetail
    }
});
define('app/PhoneListCtrl',["app/phoneService"],function(a){function b(){var b=this;this.sortDescend=!1,this.search=null,this.phones=[],a.phones().done(function(a){b.phones=a})}b.prototype.pagedPhones=function(){var a=this.sortDescend?"-":"+";a+="name";var b=null;this.search&&(b={name:this.search});return angular.Array.paged(this.phones,b,a)};return{PhoneListCtrl:b}});
define('unit/PhoneListCtrlSpec',[
    'phonesTestData',
    'lib/jasmine',
    'lib/jquery',
    'app/phoneService',
    'app/PhoneListCtrl'], function(testData, jasmine, $, phoneService, PhoneListCtrl) {
    describe('PhoneListCtrl', function() {
        var phonesSpy, phoneSpy;
        beforeEach(function() {
            phonesSpy = spyOn(phoneService, 'phones');
            phoneSpy = spyOn(phoneService, 'phone');
        });


        function createCtrl(phones) {
            var phonePromise = $.Deferred();
            phonePromise.resolve(phones);
            phonesSpy.andReturn(phonePromise);
            return new PhoneListCtrl.PhoneListCtrl();
        }

        it('should contain a phones property with the expected list of phones', function() {
            var ctrl = createCtrl(testData.twoPhones);
            expect(ctrl.phones).toEqual(testData.twoPhones);
        });

        it('should return a paged list for pagedPhones', function() {
            var ctrl = createCtrl(testData.manyPhones);
            expect(ctrl.pagedPhones().length).toEqual(10);

        });

        it('should return a filtered list for pagedPhones', function() {
            var ctrl = createCtrl(testData.twoPhones);
            ctrl.search = 'Wi';
            expect(ctrl.pagedPhones().length).toEqual(1);
        });

        it('should return a sorted list for pagedPhones', function() {
            var ctrl = createCtrl(testData.twoPhones);
            ctrl.sortDescend = true;
            expect(ctrl.pagedPhones()[0].name).toEqual("Motorola XOOM\u2122 with Wi-Fi");
            ctrl.sortDescend = false;
            expect(ctrl.pagedPhones()[0].name).toEqual("MOTOROLA XOOM\u2122");
        });
    });
});
define('app/PhoneDetailCtrl',["app/phoneService"],function(a){function b(){}b.prototype={onActivate:function(b){var c=this;a.phone(b.selectedPhone.id).done(function(a){c.data=a})}};return{PhoneDetailCtrl:b}});
define('unit/PhoneDetailCtrlSpec',[
    'phonesTestData',
    'lib/jasmine',
    'lib/jquery',
    'app/phoneService',
    'app/PhoneDetailCtrl'], function(testData, jasmine, $, phoneService, PhoneDetailCtrl) {

    describe('PhoneDetailCtrl', function() {
        var phonesSpy, phoneSpy;
        beforeEach(function() {
            phonesSpy = spyOn(phoneService, 'phones');
            phoneSpy = spyOn(phoneService, 'phone');
        });

        function createCtrl(phones, phone) {
            var phonesPromise = $.Deferred();
            phonesPromise.resolve(phones);
            phonesSpy.andReturn(phonesPromise);
            var phonePromise = $.Deferred();
            phonePromise.resolve(phone);
            phoneSpy.andReturn(phonePromise);
            return new PhoneDetailCtrl.PhoneDetailCtrl();
        }

        it('should load the details of the selected phone from the calling scope ', function() {
            var ctrl = createCtrl([], testData.onePhoneDetail);
            var oldScope = {selectedPhone: {id: 'motorola-xoom-with-wi-fi'}};
            ctrl.onActivate(oldScope);
            expect(ctrl.data).toEqual(testData.onePhoneDetail);
        })
    });
});
require([
    "lib/unit-html-externals",
    "lib/jasmine-html",
    "unit/ocxhrSpec",
    "unit/phoneServiceSpec",
    "unit/PhoneListCtrlSpec",
    "unit/PhoneDetailCtrlSpec"
]);


define("main-unit-html", function(){});
