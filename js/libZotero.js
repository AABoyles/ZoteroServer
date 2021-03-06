/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/*
 * jQuery BBQ: Back Button & Query Library - v1.3pre - 8/26/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,r){var h,n=Array.prototype.slice,t=decodeURIComponent,a=$.param,j,c,m,y,b=$.bbq=$.bbq||{},s,x,k,e=$.event.special,d="hashchange",B="querystring",F="fragment",z="elemUrlAttr",l="href",w="src",p=/^.*\?|#.*$/g,u,H,g,i,C,E={};function G(I){return typeof I==="string"}function D(J){var I=n.call(arguments,1);return function(){return J.apply(this,I.concat(n.call(arguments)))}}function o(I){return I.replace(H,"$2")}function q(I){return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(K,P,I,L,J){var R,O,N,Q,M;if(L!==h){N=I.match(K?H:/^([^#?]*)\??([^#]*)(#?.*)/);M=N[3]||"";if(J===2&&G(L)){O=L.replace(K?u:p,"")}else{Q=m(N[2]);L=G(L)?m[K?F:B](L):L;O=J===2?L:J===1?$.extend({},L,Q):$.extend({},Q,L);O=j(O);if(K){O=O.replace(g,t)}}R=N[1]+(K?C:O||!N[1]?"?":"")+O+M}else{R=P(I!==h?I:location.href)}return R}a[B]=D(f,0,q);a[F]=c=D(f,1,o);a.sorted=j=function(J,K){var I=[],L={};$.each(a(J,K).split("&"),function(P,M){var O=M.replace(/(?:%5B|=).*$/,""),N=L[O];if(!N){N=L[O]=[];I.push(O)}N.push(M)});return $.map(I.sort(),function(M){return L[M]}).join("&")};c.noEscape=function(J){J=J||"";var I=$.map(J.split(""),encodeURIComponent);g=new RegExp(I.join("|"),"g")};c.noEscape(",/");c.ajaxCrawlable=function(I){if(I!==h){if(I){u=/^.*(?:#!|#)/;H=/^([^#]*)(?:#!|#)?(.*)$/;C="#!"}else{u=/^.*#/;H=/^([^#]*)#?(.*)$/;C="#"}i=!!I}return i};c.ajaxCrawlable(0);$.deparam=m=function(L,I){var K={},J={"true":!0,"false":!1,"null":null};$.each(L.replace(/\+/g," ").split("&"),function(O,T){var N=T.split("="),S=t(N[0]),M,R=K,P=0,U=S.split("]["),Q=U.length-1;if(/\[/.test(U[0])&&/\]$/.test(U[Q])){U[Q]=U[Q].replace(/\]$/,"");U=U.shift().split("[").concat(U);Q=U.length-1}else{Q=0}if(N.length===2){M=t(N[1]);if(I){M=M&&!isNaN(M)?+M:M==="undefined"?h:J[M]!==h?J[M]:M}if(Q){for(;P<=Q;P++){S=U[P]===""?R.length:U[P];R=R[S]=P<Q?R[S]||(U[P+1]&&isNaN(U[P+1])?{}:[]):M}}else{if($.isArray(K[S])){K[S].push(M)}else{if(K[S]!==h){K[S]=[K[S],M]}else{K[S]=M}}}}else{if(S){K[S]=I?h:""}}});return K};function A(K,I,J){if(I===h||typeof I==="boolean"){J=I;I=a[K?F:B]()}else{I=G(I)?I.replace(K?u:p,""):I}return m(I,J)}m[B]=D(A,0);m[F]=y=D(A,1);$[z]||($[z]=function(I){return $.extend(E,I)})({a:l,base:l,iframe:w,img:w,input:w,form:"action",link:l,script:w});k=$[z];function v(L,J,K,I){if(!G(K)&&typeof K!=="object"){I=K;K=J;J=h}return this.each(function(){var O=$(this),M=J||k()[(this.nodeName||"").toLowerCase()]||"",N=M&&O.attr(M)||"";O.attr(M,a[L](N,K,I))})}$.fn[B]=D(v,B);$.fn[F]=D(v,F);b.pushState=s=function(L,I){if(G(L)&&/^#/.test(L)&&I===h){I=2}var K=L!==h,J=c(location.href,K?L:{},K?I:2);location.href=J};b.getState=x=function(I,J){return I===h||typeof I==="boolean"?y(I):y(J)[I]};b.removeState=function(I){var J={};if(I!==h){J=x();$.each($.isArray(I)?I:arguments,function(L,K){delete J[K]})}s(J,2)};e[d]=$.extend(e[d],{add:function(I){var K;function J(M){var L=M[F]=c();M.getState=function(N,O){return N===h||typeof N==="boolean"?m(L,N):m(L,O)[N]};K.apply(this,arguments)}if($.isFunction(I)){K=I;return J}else{K=I.handler;I.handler=J}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */
(function(a){var b=a({});a.subscribe=function(){b.on.apply(b,arguments)},a.unsubscribe=function(){b.off.apply(b,arguments)},a.publish=function(){b.trigger.apply(b,arguments)}})(jQuery)

/* Spark MD5 */
(function(a){if(typeof exports==="object"){module.exports=a()}else{if(typeof define==="function"&&define.amd){define(a)}else{var c;try{c=window}catch(b){c=self}c.SparkMD5=a()}}}(function(c){var e=function(s,r){return(s+r)&4294967295},n=function(z,v,u,r,y,w){v=e(e(v,z),e(r,w));return e((v<<y)|(v>>>(32-y)),u)},a=function(v,u,A,z,r,y,w){return n((u&A)|((~u)&z),v,u,r,y,w)},k=function(v,u,A,z,r,y,w){return n((u&z)|(A&(~z)),v,u,r,y,w)},f=function(v,u,A,z,r,y,w){return n(u^A^z,v,u,r,y,w)},p=function(v,u,A,z,r,y,w){return n(A^(u|(~z)),v,u,r,y,w)},d=function(s,u){var t=s[0],r=s[1],w=s[2],v=s[3];t=a(t,r,w,v,u[0],7,-680876936);v=a(v,t,r,w,u[1],12,-389564586);w=a(w,v,t,r,u[2],17,606105819);r=a(r,w,v,t,u[3],22,-1044525330);t=a(t,r,w,v,u[4],7,-176418897);v=a(v,t,r,w,u[5],12,1200080426);w=a(w,v,t,r,u[6],17,-1473231341);r=a(r,w,v,t,u[7],22,-45705983);t=a(t,r,w,v,u[8],7,1770035416);v=a(v,t,r,w,u[9],12,-1958414417);w=a(w,v,t,r,u[10],17,-42063);r=a(r,w,v,t,u[11],22,-1990404162);t=a(t,r,w,v,u[12],7,1804603682);v=a(v,t,r,w,u[13],12,-40341101);w=a(w,v,t,r,u[14],17,-1502002290);r=a(r,w,v,t,u[15],22,1236535329);t=k(t,r,w,v,u[1],5,-165796510);v=k(v,t,r,w,u[6],9,-1069501632);w=k(w,v,t,r,u[11],14,643717713);r=k(r,w,v,t,u[0],20,-373897302);t=k(t,r,w,v,u[5],5,-701558691);v=k(v,t,r,w,u[10],9,38016083);w=k(w,v,t,r,u[15],14,-660478335);r=k(r,w,v,t,u[4],20,-405537848);t=k(t,r,w,v,u[9],5,568446438);v=k(v,t,r,w,u[14],9,-1019803690);w=k(w,v,t,r,u[3],14,-187363961);r=k(r,w,v,t,u[8],20,1163531501);t=k(t,r,w,v,u[13],5,-1444681467);v=k(v,t,r,w,u[2],9,-51403784);w=k(w,v,t,r,u[7],14,1735328473);r=k(r,w,v,t,u[12],20,-1926607734);t=f(t,r,w,v,u[5],4,-378558);v=f(v,t,r,w,u[8],11,-2022574463);w=f(w,v,t,r,u[11],16,1839030562);r=f(r,w,v,t,u[14],23,-35309556);t=f(t,r,w,v,u[1],4,-1530992060);v=f(v,t,r,w,u[4],11,1272893353);w=f(w,v,t,r,u[7],16,-155497632);r=f(r,w,v,t,u[10],23,-1094730640);t=f(t,r,w,v,u[13],4,681279174);v=f(v,t,r,w,u[0],11,-358537222);w=f(w,v,t,r,u[3],16,-722521979);r=f(r,w,v,t,u[6],23,76029189);t=f(t,r,w,v,u[9],4,-640364487);v=f(v,t,r,w,u[12],11,-421815835);w=f(w,v,t,r,u[15],16,530742520);r=f(r,w,v,t,u[2],23,-995338651);t=p(t,r,w,v,u[0],6,-198630844);v=p(v,t,r,w,u[7],10,1126891415);w=p(w,v,t,r,u[14],15,-1416354905);r=p(r,w,v,t,u[5],21,-57434055);t=p(t,r,w,v,u[12],6,1700485571);v=p(v,t,r,w,u[3],10,-1894986606);w=p(w,v,t,r,u[10],15,-1051523);r=p(r,w,v,t,u[1],21,-2054922799);t=p(t,r,w,v,u[8],6,1873313359);v=p(v,t,r,w,u[15],10,-30611744);w=p(w,v,t,r,u[6],15,-1560198380);r=p(r,w,v,t,u[13],21,1309151649);t=p(t,r,w,v,u[4],6,-145523070);v=p(v,t,r,w,u[11],10,-1120210379);w=p(w,v,t,r,u[2],15,718787259);r=p(r,w,v,t,u[9],21,-343485551);s[0]=e(t,s[0]);s[1]=e(r,s[1]);s[2]=e(w,s[2]);s[3]=e(v,s[3])},q=function(t){var u=[],r;for(r=0;r<64;r+=4){u[r>>2]=t.charCodeAt(r)+(t.charCodeAt(r+1)<<8)+(t.charCodeAt(r+2)<<16)+(t.charCodeAt(r+3)<<24)}return u},m=function(r){var t=[],s;for(s=0;s<64;s+=4){t[s>>2]=r[s]+(r[s+1]<<8)+(r[s+2]<<16)+(r[s+3]<<24)}return t},l=function(A){var u=A.length,r=[1732584193,-271733879,-1732584194,271733878],w,t,z,x,y,v;for(w=64;w<=u;w+=64){d(r,q(A.substring(w-64,w)))}A=A.substring(w-64);t=A.length;z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(w=0;w<t;w+=1){z[w>>2]|=A.charCodeAt(w)<<((w%4)<<3)}z[w>>2]|=128<<((w%4)<<3);if(w>55){d(r,z);for(w=0;w<16;w+=1){z[w]=0}}x=u*8;x=x.toString(16).match(/(.*?)(.{0,8})$/);y=parseInt(x[2],16);v=parseInt(x[1],16)||0;z[14]=y;z[15]=v;d(r,z);return r},o=function(z){var t=z.length,r=[1732584193,-271733879,-1732584194,271733878],v,s,y,w,x,u;for(v=64;v<=t;v+=64){d(r,m(z.subarray(v-64,v)))}z=(v-64)<t?z.subarray(v-64):new Uint8Array(0);s=z.length;y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(v=0;v<s;v+=1){y[v>>2]|=z[v]<<((v%4)<<3)}y[v>>2]|=128<<((v%4)<<3);if(v>55){d(r,y);for(v=0;v<16;v+=1){y[v]=0}}w=t*8;w=w.toString(16).match(/(.*?)(.{0,8})$/);x=parseInt(w[2],16);u=parseInt(w[1],16)||0;y[14]=x;y[15]=u;d(r,y);return r},j=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],h=function(u){var t="",r;for(r=0;r<4;r+=1){t+=j[(u>>(r*8+4))&15]+j[(u>>(r*8))&15]}return t},b=function(r){var s;for(s=0;s<r.length;s+=1){r[s]=h(r[s])}return r.join("")},i=function(r){return b(l(r))},g=function(){this.reset()};if(i("hello")!=="5d41402abc4b2a76b9719d911017c592"){e=function(r,u){var t=(r&65535)+(u&65535),s=(r>>16)+(u>>16)+(t>>16);return(s<<16)|(t&65535)}}g.prototype.append=function(r){if(/[\u0080-\uFFFF]/.test(r)){r=unescape(encodeURIComponent(r))}this.appendBinary(r);return this};g.prototype.appendBinary=function(t){this._buff+=t;this._length+=t.length;var s=this._buff.length,r;for(r=64;r<=s;r+=64){d(this._state,q(this._buff.substring(r-64,r)))}this._buff=this._buff.substr(r-64);return this};g.prototype.end=function(t){var w=this._buff,v=w.length,u,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(u=0;u<v;u+=1){s[u>>2]|=w.charCodeAt(u)<<((u%4)<<3)}this._finish(s,v);r=!!t?this._state:b(this._state);this.reset();return r};g.prototype._finish=function(s,w){var u=w,t,v,r;s[u>>2]|=128<<((u%4)<<3);if(u>55){d(this._state,s);for(u=0;u<16;u+=1){s[u]=0}}t=this._length*8;t=t.toString(16).match(/(.*?)(.{0,8})$/);v=parseInt(t[2],16);r=parseInt(t[1],16)||0;s[14]=v;s[15]=r;d(this._state,s)};g.prototype.reset=function(){this._buff="";this._length=0;this._state=[1732584193,-271733879,-1732584194,271733878];return this};g.prototype.destroy=function(){delete this._state;delete this._buff;delete this._length};g.hash=function(t,r){if(/[\u0080-\uFFFF]/.test(t)){t=unescape(encodeURIComponent(t))}var s=l(t);return !!r?s:b(s)};g.hashBinary=function(s,r){var t=l(s);return !!r?t:b(t)};g.ArrayBuffer=function(){this.reset()};g.ArrayBuffer.prototype.append=function(r){var u=this._concatArrayBuffer(this._buff,r),t=u.length,s;this._length+=r.byteLength;for(s=64;s<=t;s+=64){d(this._state,m(u.subarray(s-64,s)))}this._buff=(s-64)<t?u.subarray(s-64):new Uint8Array(0);return this};g.ArrayBuffer.prototype.end=function(t){var w=this._buff,v=w.length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u,r;for(u=0;u<v;u+=1){s[u>>2]|=w[u]<<((u%4)<<3)}this._finish(s,v);r=!!t?this._state:b(this._state);this.reset();return r};g.ArrayBuffer.prototype._finish=g.prototype._finish;g.ArrayBuffer.prototype.reset=function(){this._buff=new Uint8Array(0);this._length=0;this._state=[1732584193,-271733879,-1732584194,271733878];return this};g.ArrayBuffer.prototype.destroy=g.prototype.destroy;g.ArrayBuffer.prototype._concatArrayBuffer=function(u,s){var t=u.length,r=new Uint8Array(t+s.byteLength);r.set(u);r.set(new Uint8Array(s),t);return r};g.ArrayBuffer.hash=function(r,s){var t=o(new Uint8Array(r));return !!s?t:b(t)};return g}));

var J = jQuery.noConflict();

var Zotero = {
  ajax: {},
  callbacks: {},
  ui: {
    callbacks: {}
  },
  url: {},
  utils: {},
  offline: {},
  temp: {},
  localizations: {},
  config: {
    librarySettings: {},
    baseApiUrl: "https://www.zotero.org/api",
    baseWebsiteUrl: "https://www.zotero.org",
    baseFeedUrl: "https://api.zotero.org",
    proxy: false,
    apiKey: "",
    ajax: 1,
    locale: "en-US",
    cacheStoreType: "localStorage",
    mobile: 0,
    sortOrdering: {
      dateAdded: "desc",
      dateModified: "desc",
      date: "desc",
      year: "desc",
      accessDate: "desc",
      title: "asc",
      creator: "asc"
    },
    defaultSortColumn: "title",
    defaultSortOrder: "asc",
    largeFields: {
      title: 1,
      abstractNote: 1,
      extra: 1
    },
    richTextFields: {
      note: 1
    },
    maxFieldSummaryLength: {
      title: 60
    },
    exportFormats: ["bibtex", "bookmarks", "mods", "refer", "rdf_bibliontology", "rdf_dc", "rdf_zotero", "ris", "wikipedia"],
    defaultApiArgs: {
      order: "title",
      sort: "asc",
      limit: 50,
      start: 0,
      content: "json",
      format: "atom"
    }
  },
  debug: function(e, t) {
    if ( typeof console == "undefined") {
      return
    }
    if ( typeof t !== "number") {
      t = 1
    }
    if (Zotero.prefs.debug_log && t <= Zotero.prefs.debug_level) {
      console.log(e)
    }
  },
  warn: function(e) {
    if ( typeof console == "undefined" || typeof console.warn == "undefined") {
      this.debug(e)
    } else {
      console.warn(e)
    }
  },
  error: function(e) {
    if ( typeof console == "undefined" || typeof console.error == "undefined") {
      this.debug(e)
    } else {
      console.error(e)
    }
  },
  feeds: {},
  cacheFeeds: {},
  prefs: {
    debug_level: 1,
    debug_log: false,
    debug_mock: false
  },
  state: {},
  libraries: {},
  validator: {
    patterns: {
      itemKey: /^.+$/,
      collectionKey: /^([A-Z0-9]{8,})|trash$/,
      libraryID: /^[0-9]+$/,
      libraryType: /^(user|group|)$/,
      target: /^(items?|collections?|tags|children)$/,
      targetModifier: /^(top|file|file\/view)$/,
      sort: /^(asc|desc)$/,
      start: /^[0-9]*$/,
      limit: /^[0-9]*$/,
      order: /^\S*$/,
      content: /^(json|html|csljson|bib|none)$/,
      q: /^.*$/,
      fq: /^\S*$/,
      itemType: /^\S*$/,
      locale: /^\S*$/,
      tag: /^.*$/,
      tagType: /^(0|1)$/,
      key: /^\S*/,
      format: /^(atom|bib|keys|bibtex|bookmarks|mods|refer|rdf_bibliontology|rdf_dc|rdf_zotero|ris|wikipedia)$/,
      style: /^\S*$/,
      linkwrap: /^(0|1)*$/
    },
    validate: function(e, t) {
      Z.debug("Zotero.validate");
      if (e === "") {
        return null
      } else if (e === null) {
        return true
      }
      Z.debug(e + " " + t);
      var n = this.patterns;
      if (n.hasOwnProperty(t)) {
        return n[t].test(e)
      } else {
        return null
      }
    }
  },
  _logEnabled: 0,
  enableLogging: function() {
    Zotero._logEnabled++;
    if (Zotero._logEnabled > 0) {
      Zotero.prefs.debug_log = true
    }
  },
  disableLogging: function() {
    Zotero._logEnabled--;
    if (Zotero._logEnabled <= 0) {
      Zotero._logEnabled = 0;
      Zotero.prefs.debug_log = false
    }
  },
  init: function() {
    var e;
    if (Zotero.config.cacheStoreType == "localStorage" && typeof localStorage != "undefined") {
      e = localStorage
    } else if (Zotero.config.cacheStoreType == "sessionStorage" && typeof sessionStorage != "undefined") {
      e = sessionStorage
    } else {
      e = {}
    }
    Zotero.cache = new Zotero.Cache(e);
    var t = "en-US";
    if (Zotero.config.locale) {
      t = Zotero.config.locale
    }
    t = "en-US";
    J.ajaxSettings.traditional = true
  }
};
Zotero.Cache = function(e) {
  this.store = e;
  var t = this.store["_registry"];
  if ( typeof t == "null" || typeof t == "undefined") {
    t = {};
    this.store["_registry"] = JSON.stringify(t)
  }
};
Zotero.Cache.prototype.objectCacheString = function(e) {
  var t = [];
  J.each(e, function(e, n) {
    if (!n) {
      return
    } else if ( n instanceof Array) {
      J.each(n, function(n, r) {
        t.push(e + "/" + encodeURIComponent(r))
      })
    } else {
      t.push(e + "/" + encodeURIComponent(n))
    }
  });
  t.sort();
  Z.debug(t, 4);
  var n = t.join("/");
  return n
};
Zotero.Cache.prototype.save = function(e, t, n) {
  if (!J.isArray(n)) {
    n = []
  }
  var r = JSON.parse(this.store["_registry"]);
  if (!r) {
    r = {}
  }
  var i = this.objectCacheString(e);
  this.store[i] = JSON.stringify(t);
  var s = {
    id: i,
    saved: Date.now(),
    cachetags: n
  };
  r[i] = s;
  this.store["_registry"] = JSON.stringify(r)
};
Zotero.Cache.prototype.load = function(e) {
  Z.debug("Zotero.Cache.load", 3);
  var t = this.objectCacheString(e);
  Z.debug(t, 4);
  try {
    var n = this.store[t];
    if (!n) {
      Z.debug("No value found in cache store - " + t, 3);
      return null
    } else {
      return JSON.parse(n)
    }
  } catch(r) {
    Z.debug("Error parsing retrieved cache data", 1);
    Z.debug(t, 2);
    Z.debug(this.store[t], 2);
    return null
  }
};
Zotero.Cache.prototype.expireCacheTag = function(e) {
  Z.debug("Zotero.Cache.expireCacheTag", 3);
  var t = JSON.parse(this.store["_registry"]);
  var n = this.store;
  J.each(t, function(r, i) {
    if (J.inArray(e, i.cachetags) != -1) {
      Z.debug("tag " + e + " found for item " + i["id"] + " : expiring", 4);
      delete n[i["id"]];
      delete t[i["id"]]
    }
  })
};
Zotero.Cache.prototype.clear = function() {
  if ( typeof this.store.clear == "function") {
    this.store.clear()
  } else {
    this.store = {}
  }
};
Zotero.apiRequest = function(e, t, n, r) {
  Z.debug("Zotero.apiRequest", 3);
  if ( typeof t == "undefined") {
    t = "GET"
  }
  if ( typeof r == "undefined") {
    r = {}
  }
  var i = {
    type: t,
    headers: r,
    cache: false,
    error: Zotero.ajax.errorCallback
  };
  if ( typeof n != "undefined") {
    i["data"] = n
  }
  var s = J.ajax(Zotero.ajax.proxyWrapper(e, t), i);
  return s
};
Zotero.error = function(e) {
  Z.debug("====================Zotero Error", 1);
  Z.debug(e, 1)
};
Zotero.saveLibrary = function(e) {
  var t = {};
  t.libraryType = e.libraryType;
  t.libraryID = e.libraryID;
  t.libraryUrlIdentifier = e.libraryUrlIdentifier;
  t.itemKeys = e.itemKeys;
  t.collections = e.collections.dump();
  t.items = e.items.dump();
  t.tags = e.tags.dump();
  Zotero.cache.save({
    libraryString: e.libraryString
  }, t)
};
Zotero.loadLibrary = function(e) {
  Z.debug("Zotero.loadLibrary");
  Z.debug(e);
  var t = Zotero.cache.load(e);
  if (t === null) {
    Z.debug("no library found in cache");
    return false
  }
  var n = new Zotero.Library(t.libraryType, t.libraryID, t.libraryUrlIdentifier);
  n.itemKeys = t.itemKeys;
  n.collections.loadDump(t.collections);
  n.items.loadDump(t.items);
  n.tags.loadDump(t.tags);
  return n
};
var Z = Zotero;
Zotero.ajax.error = function(e, t, n, r) {
  Z.debug("Exception: " + r)
};
Zotero.ajax.errorCallback = function(e, t, n) {
  Z.debug("ajax error callback");
  Z.debug("textStatus: " + t);
  Z.debug("errorThrown: ");
  Z.debug(n);
  Z.debug(e)
};
Zotero.ajax.activeRequests = [];
Zotero.ajax.apiRequestUrl = function(e) {
  J.each(e, function(t, n) {
    if ( typeof n == "string") {
      n = n.split("#", 1);
      e[t] = n[0]
    }
    if (Zotero.validator.validate(n, t) === false) {
      Zotero.warn("API argument failed validation: " + t + " cannot be " + n);
      Zotero.warn(e);
      delete e[t]
    }
  });
  if (!e.target)
    throw "No target defined for api request";
  if (!(e.libraryType == "user" || e.libraryType == "group" || e.libraryType === ""))
    throw "Unexpected libraryType for api request " + JSON.stringify(e);
  if (e.libraryType && !e.libraryID)
    throw "No libraryID defined for api request";
  var t = Zotero.config.baseApiUrl;
  var n;
  if (e.libraryType !== "") {
    n = t + "/" + e.libraryType + "s/" + e.libraryID;
    if (e.collectionKey) {
      if (e.collectionKey == "trash") {
        n += "/items/trash";
        return n
      } else {
        n += "/collections/" + e.collectionKey
      }
    }
  } else {
    n = t
  }
  switch(e.target) {
    case"items":
      n += "/items";
      break;
    case"item":
      if (e.itemKey) {
        n += "/items/" + e.itemKey
      } else {
        n += "/items"
      }
      break;
    case"collections":
      n += "/collections";
      break;
    case"collection":
      break;
    case"tags":
      n += "/tags";
      break;
    case"children":
      n += "/items/" + e.itemKey + "/children";
      break;
    default:
      return false
  }
  switch(e.targetModifier) {
    case"top":
      n += "/top";
      break;
    case"file":
      n += "/file";
      break;
    case"viewsnapshot":
      n += "/file/view";
      break
  }
  return n
};
Zotero.ajax.apiQueryString = function(e, t) {
  Z.debug("Zotero.ajax.apiQueryString");
  Z.debug(e);
  if (t === null || typeof t === "undefined") {
    t = true
  }
  J.each(e, function(t, n) {
    if ( typeof n == "string") {
      n = n.split("#", 1);
      e[t] = n[0]
    }
  });
  if (e.hasOwnProperty("order") && e["order"] == "creatorSummary") {
    e["order"] = "creator"
  }
  if (e.hasOwnProperty("order") && e["order"] == "year") {
    e["order"] = "date"
  }
  if (t && Zotero.config.apiKey) {
    e["key"] = Zotero.config.apiKey
  }
  if (e.hasOwnProperty("sort") && e["sort"] == "undefined") {
    e["sort"] = "asc"
  }
  Z.debug(e);
  var n = "?";
  var r = [];
  var i = ["start", "limit", "order", "sort", "content", "format", "q", "fq", "itemType", "itemKey", "locale", "tag", "tagType", "key", "style", "linkMode", "linkwrap"];
  var s = {};
  J.each(i, function(t, n) {
    if (e.hasOwnProperty(n) && e[n] !== "") {
      s[n] = e[n]
    }
  });
  if (e.hasOwnProperty("target") && e["target"] !== "items") {
    if (s.hasOwnProperty("itemKey") && s["itemKey"].indexOf(",") == -1) {
      delete s["itemKey"]
    }
  }
  J.each(s, function(e, t) {
    if ( t instanceof Array) {
      J.each(t, function(t, n) {
        if (e == "tag" && n[0] == "-") {
          n = "\\" + n
        }
        r.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
      })
    } else {
      if (e == "tag" && t[0] == "-") {
        t = "\\" + t
      }
      r.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
    }
  });
  n += r.join("&");
  return n
};
Zotero.ajax.proxyWrapper = function(e, t) {
  if (Zotero.config.proxy) {
    if (!t) {
      t = "GET"
    }
    return "/proxyrequest?requestMethod=" + t + "&requestUrl=" + encodeURIComponent(e)
  } else {
    return e
  }
};
Zotero.ajax.parseQueryString = function(e) {
};
Zotero.ajax.webUrl = function(e) {
};
Zotero.Feed = function(e) {
  Z.debug("Zotero.Feed", 3);
  if ( typeof e == "undefined") {
    this.title = "";
    this.id = "";
    this.totalResults = 0;
    this.apiVersion = "";
    this.links = {};
    this.lastPageStart = null;
    this.lastPage = null;
    this.currentPage = null;
    this.updated = null
  } else {
    this.parseXmlFeed(e)
  }
};
Zotero.Feed.prototype.parseXmlFeed = function(e) {
  var t = J(e).find("feed");
  this.title = t.children("title").first().text();
  this.id = t.children("id").first().text();
  this.totalResults = t.find("zapi\\:totalResults").first().text();
  this.apiVersion = t.find("zapi\\:apiVersion").first().text();
  if (this.totalResults === "") {
    this.totalResults = t.find("totalResults").first().text();
    this.apiVersion = t.find("apiVersion").first().text()
  }
  var n = {};
  var r = "";
  t.children("link").each(function() {
    var e = J(this).attr("rel");
    n[e] = {
      rel: J(this).attr("rel"),
      type: J(this).attr("type"),
      href: J(this).attr("href")
    };
    if (J(this).attr("rel") == "last") {
      r = J(this).attr("href")
    }
  });
  var i = n["self"].href;
  this.lastPageStart = J.deparam.querystring(r).start || 0;
  var s = J.deparam.querystring(r).limit || 50;
  var o = J.deparam.querystring(i).start || 0;
  this.lastPage = parseInt(this.lastPageStart, 10) / s + 1;
  this.currentPage = parseInt(o, 10) / s + 1;
  this.links = n;
  this.updated = new Date;
  this.updated.setTime(Date.parse(t.children("updated").first().text()));
  this.entries = t.find("entry");
  return this
};
Zotero.Library = function(e, t, n, r) {
  Z.debug("Zotero.Library constructor", 3);
  Z.debug(n, 4);
  this.instance = "Zotero.Library";
  this._apiKey = r || false;
  this.libraryBaseWebsiteUrl = Zotero.config.baseWebsiteUrl + "/";
  if (this.libraryType == "group") {
    this.libraryBaseWebsiteUrl += "groups/"
  }
  this.libraryBaseWebsiteUrl += n + "/items";
  this.items = new Zotero.Items;
  this.items.owningLibrary = this;
  this.itemKeys = [];
  this.collections = new Zotero.Collections;
  this.collections.libraryUrlIdentifier = this.libraryUrlIdentifier;
  this.collections.owningLibrary = this;
  this.tags = new Zotero.Tags;
  if (!e) {
    return
  }
  this.type = e;
  this.libraryType = e;
  this.libraryID = t;
  this.libraryString = Zotero.utils.libraryString(this.type, this.libraryID);
  this.libraryUrlIdentifier = n;
  this.usernames = {};
  this.cachedTags = this.getCachedTags();
  this.dirty = false;
  try {
    this.filestorage = new Zotero.Filestorage
  } catch(i) {
    Z.debug(i);
    Z.debug("Error creating filestorage");
    this.filestorage = false
  }
};
Zotero.Library.prototype.sortableColumns = ["title", "creator", "itemType", "date", "year", "publisher", "publicationTitle", "journalAbbreviation", "language", "accessDate", "libraryCatalog", "callNumber", "rights", "dateAdded", "dateModified", "addedBy"];
Zotero.Library.prototype.displayableColumns = ["title", "creator", "itemType", "date", "year", "publisher", "publicationTitle", "journalAbbreviation", "language", "accessDate", "libraryCatalog", "callNumber", "rights", "dateAdded", "dateModified", "numChildren", "addedBy"];
Zotero.Library.prototype.groupOnlyColumns = ["addedBy"];
Zotero.Library.prototype.sortByTitleCompare = function(e, t) {
  if (e.title.toLowerCase() == t.title.toLowerCase()) {
    return 0
  }
  if (e.title.toLowerCase() < t.title.toLowerCase()) {
    return -1
  }
  return 1
};
Zotero.Library.prototype.sortLower = function(e, t) {
  if (e.toLowerCase() == t.toLowerCase()) {
    return 0
  }
  if (e.toLowerCase() < t.toLowerCase()) {
    return -1
  }
  return 1
};
Zotero.Library.prototype.websiteUrl = function(e) {
  Z.debug("Zotero.library.websiteUrl", 3);
  Z.debug(e, 4);
  var t = [];
  J.each(e, function(e, n) {
    if (n === "")
      return;
    t.push(e + "/" + n)
  });
  t.sort();
  Z.debug(t, 4);
  var n = t.join("/");
  return this.libraryBaseWebsiteUrl + "/" + n
};
Zotero.Library.prototype.loadCollections = function(e) {
  Z.debug("Zotero.Library.loadCollections", 3);
  var t = this;
  t.collections.loading = true;
  var n = new J.Deferred;
  if (!e) {
    e = {}
  }
  var r = J.extend(true, {
    target: "collections",
    libraryType: this.type,
    libraryID: this.libraryID,
    content: "json",
    limit: "100"
  }, e);
  var i = Zotero.ajax.apiRequestUrl(r) + Zotero.ajax.apiQueryString(r);
  var s = J.proxy(function(t, i, s) {
    Z.debug("loadCollections proxied callback", 3);
    var o = this;
    var u = new Zotero.Feed(t);
    u.requestConfig = r;
    var a = o.collections;
    var f = a.addCollectionsFromFeed(u);
    for (var l = 0; l < f.length; l++) {
      f[l].associateWithLibrary(o)
    }
    Z.debug("done parsing collections feed.", 3);
    if (u.links.hasOwnProperty("next")) {
      Z.debug("has next link.", 3);
      var c = u.links.next;
      var h = J.deparam(J.param.querystring(c.href));
      var p = J.extend({}, e);
      p.start = h.start;
      p.limit = h.limit;
      var d = this.loadCollections(p);
      d.done(J.proxy(function(e) {
        n.resolve(e)
      }, this))
    } else {
      Z.debug("no next in collections link", 3);
      a.collectionsArray.sort(a.sortByTitleCompare);
      J.each(a.collectionsArray, function(e, t) {
        if (t.instance === "Zotero.Collection") {
          if (t.nestCollection(a)) {
            Z.debug(t.key + ":" + t.title + " nested in parent.", 4)
          }
        }
      });
      a.assignDepths(0, a.collectionsArray);
      Z.debug("resolving loadCollections deferred", 3);
      a.dirty = false;
      a.loaded = true;
      n.resolve(a)
    }
  }, this);
  if (this.collections.loaded && !this.collections.dirty) {
    Z.debug("already have correct collections loaded", 3);
    n.resolve();
    return n
  }
  if (this.collections.loaded && this.collections.dirty) {
    this.collections.collectionsArray = [];
    this.collections.loaded = false
  }
  var o = this.fetchCollections(r);
  o.done(s);
  o.fail(function() {
    n.reject.apply(null, arguments)
  }).fail(Zotero.error);
  Zotero.ajax.activeRequests.push(o);
  n.done(function(e) {
    J.publish("loadCollectionsDone", [e])
  });
  return n
};
Zotero.Library.prototype.fetchNext = function(e, t) {
  Z.debug("Zotero.Library.fetchNext", 3);
  if (e.links.hasOwnProperty("next")) {
    Z.debug("has next link.", 3);
    var n = e.links.next;
    var r = J.deparam(J.param.querystring(n.href));
    var i = J.extend({}, t);
    i.start = r.start;
    i.limit = r.limit;
    var s = Zotero.ajax.apiRequestUrl(i) + Zotero.ajax.apiQueryString(i);
    var o = Zotero.apiRequest(s, "GET");
    return o
  } else {
    return false
  }
};
Zotero.Library.prototype.fetchCollections = function(e) {
  Z.debug("Zotero.Library.fetchCollections", 3);
  var t = this;
  if (!e) {
    e = {}
  }
  var n = J.extend(true, {
    target: "collections",
    libraryType: this.type,
    libraryID: this.libraryID,
    content: "json",
    limit: "100"
  }, e);
  var r = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  var i = Zotero.apiRequest(r, "GET");
  return i
};
Zotero.Library.prototype.fetchItemKeys = function(e) {
  Z.debug("Zotero.Library.fetchItemKeys", 3);
  var t = this;
  if ( typeof e == "undefined") {
    e = {}
  }
  var n = J.extend(true, {
    target: "items",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    format: "keys"
  }, e);
  var r = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  var i = J.ajax(Zotero.ajax.proxyWrapper(r, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  return i
};
Zotero.Library.prototype.loadItemKeys = function(e) {
  Z.debug("Zotero.Library.loadItemKeys", 3);
  var t = this;
  var n = this.fetchItemKeys(e);
  var r = J.proxy(function(e, t, n) {
    Z.debug("loadItemKeys proxied callback", 3);
    var r = this;
    var i = e;
    var s = i.split(/[\s]+/);
    r.itemKeys = s
  }, this);
  n.done(r);
  n.fail(function() {
    deferred.reject.apply(null, arguments)
  });
  Zotero.ajax.activeRequests.push(n);
  return n
};
Zotero.Library.prototype.loadItems = function(e) {
  Z.debug("Zotero.Library.loadItems", 3);
  Z.debug(e);
  var t = this;
  if (!e) {
    e = {}
  }
  var n = new J.Deferred;
  var r = {
    target: "items",
    targetModifier: "top",
    itemPage: 1,
    limit: 25,
    content: "json",
    order: Zotero.config.defaultSortColumn,
    sort: Zotero.config.defaultSortOrder
  };
  var i = J.extend({}, r, e);
  i.start = parseInt(i.limit, 10) * (parseInt(i.itemPage, 10) - 1);
  var s = J.extend({
    target: "items",
    libraryType: t.type,
    libraryID: t.libraryID
  }, i);
  var o = Zotero.ajax.apiRequestUrl(s) + Zotero.ajax.apiQueryString(s);
  Z.debug("loadItems requestUrl:");
  Z.debug(o);
  var u = J.proxy(function(e, r, s) {
    Z.debug("loadItems proxied callback", 3);
    var u = J(e);
    var a = new Zotero.Feed(e);
    a.requestConfig = i;
    var f = t.items;
    var l = f.addItemsFromFeed(a);
    for (var c = 0; c < l.length; c++) {
      l[c].associateWithLibrary(t)
    }
    t.items.displayItemsArray = l;
    t.items.displayItemsUrl = o;
    t.items.displayItemsFeed = a;
    t.dirty = false;
    n.resolve({
      itemsArray: l,
      feed: a,
      library: t
    })
  }, this);
  Z.debug("displayItemsUrl:" + this.items.displayItemsUrl, 4);
  Z.debug("requestUrl:" + o, 4);
  if (this.items.displayItemsUrl == o && !this.dirty) {
    n.resolve({
      itemsArray: this.items.displayItemsArray,
      feed: this.items.displayItemsFeed,
      library: t
    });
    return n
  } else {
    var a = J.ajax(Zotero.ajax.proxyWrapper(o, "GET"), {
      type: "GET",
      headers: {},
      cache: false,
      error: Zotero.ajax.errorCallback
    });
    a.done(u);
    a.fail(function() {
      n.reject.apply(null, arguments)
    }).fail(Zotero.error);
    Zotero.ajax.activeRequests.push(a)
  }
  n.done(function(e, t, n) {
    Z.debug("loadItemsDone about to publish");
    J.publish("loadItemsDone", [e, t, n])
  });
  return n
};
Zotero.Library.prototype.loadItemsSimple = function(e) {
  Z.debug("Zotero.Library.loadItems", 3);
  Z.debug(e);
  var t = this;
  if (!e) {
    e = {}
  }
  var n = new J.Deferred;
  var r = {
    target: "items",
    targetModifier: "top",
    itemPage: 1,
    limit: 25,
    content: "json",
    order: Zotero.config.defaultSortColumn,
    sort: Zotero.config.defaultSortOrder
  };
  var i = J.extend({}, r, e);
  i.start = parseInt(i.limit, 10) * (parseInt(i.itemPage, 10) - 1);
  var s = J.extend({
    target: "items",
    libraryType: this.type,
    libraryID: this.libraryID
  }, i);
  var o = Zotero.ajax.apiRequestUrl(s) + Zotero.ajax.apiQueryString(s);
  Z.debug("loadItems requestUrl:");
  Z.debug(o);
  var u = J.proxy(function(e, t, r) {
    Z.debug("loadItems proxied callback", 3);
    var s = this;
    var u = J(e);
    var a = new Zotero.Feed(e);
    a.requestConfig = i;
    var f = s.items;
    var l = f.addItemsFromFeed(a);
    for (var c = 0; c < l.length; c++) {
      l[c].associateWithLibrary(s)
    }
    s.items.displayItemsArray = l;
    s.items.displayItemsUrl = o;
    s.items.displayItemsFeed = a;
    s.dirty = false;
    n.resolve({
      itemsArray: l,
      feed: a,
      library: s
    })
  }, this);
  var a = J.ajax(Zotero.ajax.proxyWrapper(o, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  a.done(u);
  a.fail(function() {
    n.reject.apply(null, arguments)
  }).fail(Zotero.error);
  Zotero.ajax.activeRequests.push(a);
  n.done(function(e, t, n) {
    Z.debug("loadItemsDone about to publish");
    J.publish("loadItemsDone", [e, t, n])
  });
  return n
};
Zotero.Library.prototype.loadItem = function(e) {
  Z.debug("Zotero.Library.loadItem", 3);
  if (!t) {
    var t = {
      content: "json"
    }
  }
  var n = new J.Deferred;
  var r = {
    target: "item",
    libraryType: this.type,
    libraryID: this.libraryID,
    itemKey: e,
    content: "json"
  };
  var i = Zotero.ajax.apiRequestUrl(r) + Zotero.ajax.apiQueryString(r);
  var s = this;
  var o = J.proxy(function(e, t, r) {
    var i = J(e);
    var o = J(e).find("entry").eq(0);
    var u = new Zotero.Item;
    u.libraryType = this.type;
    u.libraryID = this.libraryID;
    u.parseXmlItem(o);
    u.owningLibrary = s;
    this.items.itemObjects[u.itemKey] = u;
    n.resolve(u)
  }, this);
  var u = J.ajax(Zotero.ajax.proxyWrapper(i, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  u.done(o);
  u.fail(function() {
    n.reject.apply(null, arguments)
  }).fail(Zotero.error);
  Zotero.ajax.activeRequests.push(u);
  n.done(function(e) {
    J.publish("loadItemDone", [e])
  });
  return n
};
Zotero.Library.prototype.loadFullBib = function(e, t) {
  var n = e.join(",");
  var r = new J.Deferred;
  var i = {
    target: "items",
    libraryType: this.type,
    libraryID: this.libraryID,
    itemKey: n,
    format: "bib",
    linkwrap: "1"
  };
  if (e.length == 1) {
    i.target = "item"
  }
  if (t) {
    i["style"] = t
  }
  var s = Zotero.ajax.apiRequestUrl(i) + Zotero.ajax.apiQueryString(i);
  var o = this;
  var u = J.proxy(function(e, t, n) {
    var i = e;
    r.resolve(e)
  }, this);
  var a = J.ajax(Zotero.ajax.proxyWrapper(s, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  a.done(u);
  a.fail(function() {
    r.reject.apply(null, arguments)
  }).fail(Zotero.error);
  Zotero.ajax.activeRequests.push(a);
  r.done(function(e) {
    J.publish("loadItemBibDone", [e])
  });
  return r
};
Zotero.Library.prototype.loadItemBib = function(e, t) {
  Z.debug("Zotero.Library.loadItem", 3);
  var n = new J.Deferred;
  var r = {
    target: "item",
    libraryType: this.type,
    libraryID: this.libraryID,
    itemKey: e,
    content: "bib"
  };
  if (t) {
    r["style"] = t
  }
  var i = Zotero.ajax.apiRequestUrl(r) + Zotero.ajax.apiQueryString(r);
  var s = this;
  var o = J.proxy(function(e, t, r) {
    var i = J(e);
    var s = J(e).find("entry").eq(0);
    var o = new Zotero.Item;
    o.parseXmlItem(s);
    var u = o.bibContent;
    n.resolve(u)
  }, this);
  var u = J.ajax(Zotero.ajax.proxyWrapper(i, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  u.done(o);
  u.fail(function() {
    n.reject.apply(null, arguments)
  }).fail(Zotero.error);
  Zotero.ajax.activeRequests.push(u);
  n.done(function(e) {
    J.publish("loadItemBibDone", [e])
  });
  return n
};
Zotero.Library.prototype.fetchTags = function(e) {
  Z.debug("Zotero.Library.fetchTags", 3);
  var t = this;
  var n = {
    target: "tags",
    order: "title",
    sort: "asc",
    limit: 100,
    content: "json"
  };
  var r = J.extend({}, n, e);
  var i = J.extend({
    target: "tags",
    libraryType: this.type,
    libraryID: this.libraryID
  }, r);
  var s = Zotero.ajax.apiRequestUrl(i) + Zotero.ajax.apiQueryString(i);
  var o = J.ajax(Zotero.ajax.proxyWrapper(s, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  return o
};
Zotero.Library.prototype.loadTags = function(e) {
  Z.debug("Zotero.Library.loadTags", 3);
  Z.debug("passed in config:", 4);
  Z.debug(e, 4);
  var t = this;
  var n = new J.Deferred;
  if ( typeof e == "undefined") {
    e = {}
  }
  if (e.showAllTags && e.collectionKey) {
    delete e.collectionKey
  }
  var r = J.proxy(function(r, i, s) {
    Z.debug("loadTags proxied callback", 3);
    var o = new Zotero.Feed(r);
    o.requestConfig = e;
    var u = t.tags;
    var a = u.addTagsFromFeed(o);
    if (o.links.hasOwnProperty("next")) {
      t.tags.hasNextLink = true;
      t.tags.nextLink = o.links["next"]
    } else {
      t.tags.hasNextLink = false;
      t.tags.nextLink = null
    }
    Z.debug("resolving loadTags deferred", 3);
    n.resolve(t.tags)
  }, this);
  t.tags.displayTagsArray = [];
  var i = this.fetchTags(e);
  i.done(r);
  i.fail(function() {
    n.reject.apply(null, arguments)
  });
  Zotero.ajax.activeRequests.push(i);
  return n
};
Zotero.Library.prototype.getCachedTags = function() {
  var e = {
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    target: "alltags"
  };
  var t = Zotero.cache.load(e);
  return t
};
Zotero.Library.prototype.loadAllTags = function(e, t) {
  Z.debug("Zotero.Library.loadAllTags", 3);
  if ( typeof t == "undefined") {
    t = true
  }
  if (!e) {
    e = {}
  }
  var n = new J.Deferred;
  var r = {
    target: "tags",
    content: "json",
    order: "title",
    sort: "asc",
    limit: 100
  };
  var i = J.extend({}, r, e);
  var s = J.extend({
    target: "tags",
    libraryType: this.type,
    libraryID: this.libraryID
  }, i);
  var o = Zotero.ajax.apiRequestUrl(s) + Zotero.ajax.apiQueryString(s);
  var u = this;
  var a = u.tags;
  var f = J.extend({
    target: "tags",
    libraryType: this.type,
    libraryID: this.libraryID
  }, r, a.loadedConfig);
  var l = a.loadedRequestUrl;
  Z.debug("requestUrl: " + o, 4);
  Z.debug("loadedConfigRequestUrl: " + l, 4);
  if (a.loaded && l == o && t) {
    Z.debug("tags already loaded - publishing and resolving deferred", 3);
    n.resolve(a);
    return n
  } else {
    Z.debug("tags not loaded", 3);
    a.clear();
    Z.debug("in loadAllTags: tags:", 3);
    Z.debug(a, 4)
  }
  var c = J.proxy(function(t) {
    Z.debug("loadAllTags continueLoadingCallback", 3);
    var r = Zotero.Tags.prototype.plainTagsList(t.tagsArray);
    r.sort(Zotero.Library.prototype.sortLower);
    t.plainList = r;
    Z.debug("done parsing one tags feed - checking for more.", 3);
    J.publish("tags_page_loaded", [t]);
    if (t.hasNextLink) {
      Z.debug("still has next link.", 3);
      t.tagsArray.sort(u.sortByTitleCompare);
      r = Zotero.Tags.prototype.plainTagsList(t.tagsArray);
      r.sort(Zotero.Library.prototype.sortLower);
      t.plainList = r;
      var i = t.nextLink;
      var s = J.deparam(J.param.querystring(i.href));
      var a = J.extend({}, e);
      a.start = s.start;
      a.limit = s.limit;
      var f = u.loadTags(a);
      Zotero.ajax.activeRequests.push(f);
      f.done(c)
    } else {
      Z.debug("no next in tags link", 3);
      t.tagsArray.sort(u.sortByTitleCompare);
      r = Zotero.Tags.prototype.plainTagsList(t.tagsArray);
      r.sort(Zotero.Library.prototype.sortLower);
      t.plainList = r;
      Z.debug("resolving loadTags deferred", 3);
      u.tagsLoaded = true;
      u.tags.loaded = true;
      t.loadedConfig = e;
      t.loadedRequestUrl = o;
      n.resolve(t)
    }
  }, this);
  var h = {
    libraryType: u.libraryType,
    libraryID: u.libraryID,
    target: "alltags"
  };
  var p = Zotero.cache.load(h);
  if (p !== null && t) {
    u.tags.tagObjects = p;
    J.each(p, function(e, t) {
      u.tags.tagsArray.push(t)
    });
    a.tagsArray.sort(u.sortByTitleCompare);
    var d = Zotero.Tags.prototype.plainTagsList(a.tagsArray);
    d.sort(Zotero.Library.prototype.sortLower);
    a.plainList = d;
    Z.debug("resolving loadTags deferred", 3);
    u.tagsLoaded = true;
    u.tags.loaded = true;
    a.loadedConfig = e;
    a.loadedRequestUrl = o;
    n.resolve(a)
  } else {
    var v = u.loadTags(s);
    Zotero.ajax.activeRequests.push(v);
    v.done(c)
  }
  n.done(J.proxy(function() {
    var e = this;
    var t = {
      libraryType: e.libraryType,
      libraryID: e.libraryID,
      target: "alltags"
    };
    Zotero.cache.save(t, a.tagObjects)
  }, this));
  return n
};
Zotero.Library.prototype.parseFeedObject = function(e) {
  Z.debug("Zotero.Library.parseFeedObject", 3);
  var t;
  if ( typeof e == "string") {
    t = JSON.parse(e)
  } else if ( typeof e == "object") {
    t = e
  } else {
    return false
  }
  var n = new Date;
  n.setTime(Date.parse(t.updated));
  t.updated = n;
  return t
};
Zotero.Library.prototype.addCollection = function(e, t) {
  var n = {
    target: "collections",
    libraryType: this.type,
    libraryID: this.libraryID
  };
  var r = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  var i = JSON.stringify({
    name: e,
    parent: t
  });
  var s = J.ajax(Zotero.ajax.proxyWrapper(r, "POST"), {
    data: i,
    type: "POST",
    processData: false,
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  s.done(J.proxy(function() {
    this.collections.dirty = true
  }, this));
  s.fail(Zotero.error);
  Zotero.ajax.activeRequests.push(s);
  return s
};
Zotero.Library.prototype.trashItem = function(e) {
  Z.debug("Zotero.Library.trashItem", 3);
  if (!e)
    return false;
  var t = this.items.getItem(e);
  t.apiObj.deleted = 1;
  return t.writeItem()
};
Zotero.Library.prototype.untrashItem = function(e) {
  Z.debug("Zotero.Library.untrashItem", 3);
  if (!e)
    return false;
  var t = this.items.getItem(e);
  t.apiObj.deleted = 0;
  return t.writeItem()
};
Zotero.Library.prototype.deleteItem = function(e) {
  Z.debug("Zotero.Library.trashItem", 3);
  if (!e)
    return false;
  var t = {
    target: "item",
    libraryType: this.type,
    libraryID: this.libraryID,
    itemKey: e
  };
  var n = Zotero.ajax.apiRequestUrl(t) + Zotero.ajax.apiQueryString(t);
  var r = this.items.getItem(e);
  var i = r.etag;
  var s = J.ajax(Zotero.ajax.proxyWrapper(n, "DELETE"), {
    type: "DELETE",
    processData: false,
    headers: {
      "If-Match": i
    },
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  Zotero.ajax.activeRequests.push(s);
  return s
};
Zotero.Library.prototype.addNote = function(e, t) {
  Z.debug("Zotero.Library.prototype.addNote", 3);
  var n = {
    target: "children",
    libraryType: this.type,
    libraryID: this.libraryID,
    itemKey: e
  };
  var r = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  var i = this.items.getItem(e);
  var s = J.ajax(Zotero.ajax.proxyWrapper(r, "POST"), {
    type: "POST",
    processData: false,
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  Zotero.ajax.activeRequests.push(s);
  return s
};
Zotero.Library.prototype.fetchGlobalItems = function(e) {
  Z.debug("Zotero.Library.fetchGlobalItems", 3);
  Z.debug(e);
  var t = this;
  if (!e) {
    e = {}
  }
  var n = new J.Deferred;
  var r = {
    target: "items",
    itemPage: 1,
    limit: 25,
    content: "json"
  };
  var i = J.extend({}, r, e);
  i.start = parseInt(i.limit, 10) * (parseInt(i.itemPage, 10) - 1);
  var s = J.extend({
    target: "items",
    libraryType: ""
  }, i);
  var o = Zotero.ajax.apiRequestUrl(s) + Zotero.ajax.apiQueryString(s);
  Z.debug("fetchGlobalItems requestUrl:");
  Z.debug(o);
  var u = J.proxy(function(e, t, r) {
    Z.debug("loadItems proxied callback", 3);
    Zotero.temp.globalItemsResponse = e;
    n.resolve(e)
  }, this);
  var a = J.ajax(Zotero.ajax.proxyWrapper(o, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    dataType: "json",
    error: Zotero.ajax.errorCallback
  });
  a.done(u);
  a.fail(function() {
    n.reject.apply(null, arguments)
  }).fail(Zotero.error);
  Zotero.ajax.activeRequests.push(a);
  n.done(function(e) {
    Z.debug("fetchGlobalItemsDone about to publish");
    J.publish("fetchGlobalItemsDone", e)
  });
  return n
};
Zotero.Library.prototype.fetchGlobalItem = function(e) {
  Z.debug("Zotero.Library.fetchGlobalItem", 3);
  Z.debug(e);
  var t = this;
  var n = new J.Deferred;
  var r = {
    target: "item"
  };
  var i = J.extend({}, r);
  var s = J.extend({
    target: "item",
    libraryType: "",
    itemKey: e
  }, i);
  var o = Zotero.ajax.apiRequestUrl(s) + Zotero.ajax.apiQueryString(s);
  Z.debug("fetchGlobalItem requestUrl:");
  Z.debug(o);
  var u = J.proxy(function(e, t, r) {
    Z.debug("loadItems proxied callback", 3);
    Zotero.temp.fetchGlobalItemResponse = e;
    n.resolve(e)
  }, this);
  var a = J.ajax(Zotero.ajax.proxyWrapper(o, "GET"), {
    type: "GET",
    headers: {},
    cache: false,
    dataType: "json",
    error: Zotero.ajax.errorCallback
  });
  a.done(u);
  a.fail(function() {
    n.reject.apply(null, arguments)
  }).fail(Zotero.error);
  Zotero.ajax.activeRequests.push(a);
  n.done(function(e) {
    Z.debug("fetchGlobalItemDone about to publish");
    J.publish("fetchGlobalItemDone", e)
  });
  return n
};
Zotero.Library.prototype.fetchUserNames = function(e) {
  Z.debug("Zotero.Library.fetchUserNames", 3);
  var t = this;
  var n = Zotero.config.baseWebsiteUrl + "/api/useraliases?userID=" + e.join(",");
  var r = J.getJSON(n, J.proxy(function(e, n, r) {
    Z.debug("fetchNames returned");
    Z.debug(JSON.stringify(e));
    Z.debug("userNames:");
    Z.debug(this.usernames);
    J.each(e, function(e, n) {
      Z.debug("userID: " + e + " alias:");
      Z.debug(n);
      t.usernames[e] = n
    })
  }, this));
  return r
};
Zotero.Library.prototype.fetchItemKeysModified = function() {
  return this.fetchItemKeys({
    order: "dateModified"
  })
};
Zotero.Library.prototype.loadCachedItems = function() {
  Z.debug("Zotero.Library.loadCachedItems", 3);
  var e = this;
  var t = {
    libraryType: e.libraryType,
    libraryID: e.libraryID,
    target: "allitems"
  };
  var n = Zotero.cache.load(t);
  var r;
  if (n !== null) {
    Z.debug("Apparently have allItemObjects - loadingDump");
    e.items.loadDump(n);
    return n.itemsArray.length
  } else {
    return false
  }
};
Zotero.Library.prototype.saveCachedItems = function() {
  var e = this;
  var t = {
    libraryType: e.libraryType,
    libraryID: e.libraryID,
    target: "allitems"
  };
  Zotero.cache.save(t, e.items.dump());
  return
};
Zotero.Library.prototype.loadItemsFromKeysParallel = function(e) {
  Zotero.debug("Zotero.Library.loadItemsFromKeysParallel", 3);
  var t = this;
  var n = [];
  while (e.length > 0) {
    n.push(e.splice(0, 50))
  }
  var r = new J.Deferred;
  var i = [];
  J.each(n, function(e, n) {
    var r = n.join(",");
    i.push(t.loadItemsSimple({
      targetModifier: null,
      itemKey: r,
      limit: 50
    }))
  });
  Z.debug("loadItems XHRs to be resolved:");
  Z.debug(i);
  J.when.apply(null, i).then(J.proxy(function() {
    Z.debug("All parallel item requests returned - resolving deferred and publishing loadItemsFromKeysParallelDone", 3);
    r.resolve(true);
    J.publish("loadItemsFromKeysParallelDone")
  }, this));
  return r
};
Zotero.Library.prototype.loadCachedCollections = function() {
  Z.debug("Zotero.Library.loadCachedCollections", 3);
  var e = this;
  var t = {
    libraryType: e.libraryType,
    libraryID: e.libraryID,
    target: "allcollections"
  };
  var n = Zotero.cache.load(t);
  if (n !== null) {
    Z.debug("Apparently have allcollectionObjects - loadingDump");
    e.collections.loadDump(n);
    return true
  } else {
    return false
  }
};
Zotero.Library.prototype.loadCollectionMembership = function(e) {
  Z.debug("Zotero.Library.loadCollectionMembership", 3);
  var t = this;
  var n = new J.Deferred;
  var r = [];
  for (var i = 0; i < e.length; i++) {
    if (e[i].itemKeys === false) {
      r.push(e[i])
    }
  }
  var s = function() {
    var e = r.shift();
    if ( typeof e == "undefined") {
      n.resolve();
      return
    } else {
      var t = e.getMemberItemKeys();
      t.done(J.proxy(function() {
        s()
      }, this))
    }
  };
  s();
  return n
};
Zotero.Library.prototype.loadItemTemplates = function() {
};
Zotero.Library.prototype.loadCreatorTypes = function() {
};
Zotero.Library.prototype.findOutdatedItems = function(e) {
};
Zotero.Library.prototype.findMissingItems = function(e) {
  var t = this;
  var n = [];
  J.each(e, function(e, r) {
    if (!( r in t.items.itemObjects) && r !== "") {
      n.push(r)
    }
  });
  return n
};
Zotero.Library.prototype.loadModifiedItems = function(e) {
  Z.debug("Zotero.Library.loadModifiedItems", 3);
  var t = this;
  var n = t.findMissingItems(e);
  var r = [];
  var i = {};
  var s;
  var o = true;
  var u = new J.Deferred;
  Z.debug("removing missingKeys from list of items we need to check");
  J.each(e, function(e, o) {
    if (J.inArray(o, n) == -1) {
      r.push(o);
      s = t.items.getItem(o);
      i[o] = s.etag
    } else {
    }
  });
  Z.debug("needCheckingKeys has " + r.length + " keys");
  Z.debug(i);
  var a = r.shift();
  needCheckingSlices = [];
  while (r.length > 0) {
    needCheckingSlices.push(r.splice(0, 50))
  }
  var f = function() {
    Zotero.debug("checkNextSlice", 3);
    var e = needCheckingSlices.shift();
    var n = e.join(",");
    var r = t.loadItems({
      targetModifier: null,
      itemKey: n,
      limit: 50
    });
    r.done(J.proxy(function(e) {
      J.each(e.itemsArray, function(e, t) {
        var n = t.itemKey;
        if (i[n] == t.etag) {
          Z.debug("Found local item that was up to date - stop checking", 3);
          o = false;
          u.resolve(true);
          return false
        }
      });
      if (o) {
        f()
      }
    }, this))
  };
  Z.debug("First itemKey to check - " + a, 3);
  var l = t.loadItem(a);
  l.done(J.proxy(function(e) {
    Z.debug("Got first item back");
    if (e.etag == i[e.itemKey]) {
      Z.debug("local and remote etags match on first item", 3);
      J.publish("localItemsUpToDate");
      u.resolve(true)
    } else {
      Z.debug("local and remote etags do not match on first item - pulling down slices", 3);
      if (needCheckingSlices.length > 0) {
        f()
      } else {
        Z.debug("Something wrong. Should need to check for items, but no slices to check")
      }
    }
  }, this));
  return u
};
Zotero.Library.prototype.loadModifiedCollections = function(e) {
  Z.debug("Zotero.Library.loadModifiedCollections", 3);
  var t = this
};
Zotero.Library.prototype.loadModifiedTags = function(e) {
  Z.debug("Zotero.Library.loadModifiedTags", 3);
  var t = this
};
Zotero.Library.prototype.buildItemDisplayView = function(e) {
  Z.debug("Zotero.Library.buildItemDisplayView", 3);
  Z.debug(e);
  var t = this;
  var n;
  if (e.collectionKey) {
    var r = t.collections.getCollection(e.collectionKey);
    if (r === false) {
      Z.error("specified collectionKey - " + e.collectionKey + " - not found in current library.");
      return false
    }
    if (r.itemKeys === false) {
      var i = r.getMemberItemKeys();
      i.done(J.proxy(t.buildItemDisplayView, this));
      return false
    } else {
      n = r.itemKeys
    }
  } else {
    n = t.itemKeys
  }
  t.items.displayItemsArray = [];
  var s;
  J.each(n, function(e, n) {
    s = t.items.getItem(n);
    if (s && !s.parentKey) {
      t.items.displayItemsArray.push(s)
    }
  });
  Z.debug("Starting with " + t.items.displayItemsArray.length + " items displayed");
  var o = e.tag || [];
  if ( typeof o == "string")
    o = [o];
  var u = J.grep(t.items.displayItemsArray, J.proxy(function(e, t) {
    var n = e.apiObj.tags;
    var r = false;
    for (var i = 0; i < o.length; i++) {
      r = false;
      for (var s = 0; s < n.length; s++) {
        if (n[s].tag == o[i]) {
          r = true
        }
      }
      if (r === false)
        return false
    }
    return true
  }, this));
  t.items.displayItemsArray = u;
  Z.debug("Filtered by tags");
  Z.debug("Down to " + t.items.displayItemsArray.length + " items displayed");
  Z.debug("Sorting by title");
  var a = e["order"] || "title";
  var f = e["sort"] || "asc";
  t.items.displayItemsArray.sort(J.proxy(function(e, t) {
    var n = e.get(a);
    var r = t.get(a);
    if ( typeof n == "string") {
      return n.localeCompare(r)
    } else {
      return n - r
    }
  }, this));
  if (f == "desc") {
    t.items.displayItemsArray.reverse()
  }
  Z.debug("publishing displayedItemsUpdated");
  J.publish("displayedItemsUpdated")
};
Zotero.Library.prototype.saveFileOffline = function(e) {
  try {
    Z.debug("Zotero.Library.saveFileOffline", 3);
    var t = this;
    var n = new J.Deferred;
    if (t.filestorage === false) {
      return false
    }
    var r;
    var i;
    if (e.links && e.links["enclosure"]) {
      r = e.links.enclosure.href;
      i = e.links.enclosure.type
    } else {
      return false
    }
    var s = r + Zotero.ajax.apiQueryString({});
    Z.debug("reqUrl:" + s, 3);
    var o = new XMLHttpRequest;
    o.open("GET", Zotero.ajax.proxyWrapper(s, "GET"), true);
    o.responseType = "blob";
    o.onload = function(r) {
      try {
        if (this.status == 200) {
          Z.debug("Success downloading");
          var s = this.response;
          t.filestorage.filer.write("/" + e.itemKey, {
            data: s,
            type: i
          }, J.proxy(function(r, i) {
            try {
              Z.debug("Success writing file");
              Z.debug("Saved file for item " + e.itemKey + " for offline use");
              Z.debug("Saving file object somewhere in Zotero namespace:");
              t.filestorage.filer.open(r, J.proxy(function(e) {
                try {
                  Z.debug("reading back filesystem stored file into object url");
                  n.resolve(true)
                } catch(t) {
                  Z.debug("Caught in filer.open");
                  Z.debug(t)
                }
              }, this))
            } catch(s) {
              Z.debug("Caught in filer.write")
            }
          }, this))
        }
      } catch(r) {
        Z.debug("Caught inside binary xhr onload")
      }
    };
    o.send();
    return n
  } catch(u) {
    Z.debug("Caught in Z.Library.saveFileOffline")
  }
};
Zotero.Library.prototype.saveFileSetOffline = function(e) {
  Z.debug("Zotero.Library.saveFileSetOffline", 3);
  var t = this;
  var n = [];
  var r = new J.Deferred;
  var i;
  var s = [];
  var o = {};
  J.each(e, function(e, r) {
    if (o.hasOwnProperty(r)) {
      return
    } else {
      o[r] = 1
    }
    i = t.items.getItem(r);
    if (i && i.links && i.links["enclosure"]) {
      n.push(t.saveFileOffline(i))
    }
    if (i.numChildren) {
      J.each(i.childItemKeys, function(e, t) {
        s.push(t)
      })
    }
  });
  J.each(s, function(e, r) {
    if (o.hasOwnProperty(r)) {
      return
    } else {
      o[r] = 1
    }
    i = t.items.getItem(r);
    if (i && i.links && i.links["enclosure"]) {
      n.push(t.saveFileOffline(i))
    }
  });
  J.when.apply(null, n).then(J.proxy(function() {
    var e = t.filestorage.listOfflineFiles();
    e.done(J.proxy(function(e) {
      r.resolve()
    }, this))
  }));
  return r
};
Zotero.Library.prototype.saveCollectionFilesOffline = function(e) {
  Zotero.debug("Zotero.Library.saveCollectionFilesOffline " + e, 3);
  var t = this;
  var n = t.collections.getCollection(e);
  var r = n.itemKeys;
  var i = Zotero.Library.prototype.saveFileSetOffline(r);
  return i
};
Zotero.Entry = function() {
  this.instance = "Zotero.Entry"
};
Zotero.Entry.prototype.dumpEntry = function() {
  var e = {};
  var t = ["title", "author", "id", "published", "dateAdded", "updated", "dateModified", "links"];
  for (var n = 0; n < t.length; n++) {
    e[t[n]] = this[t[n]]
  }
  return e
};
Zotero.Entry.prototype.loadDumpEntry = function(e) {
  var t = ["title", "author", "id", "published", "dateAdded", "updated", "dateModified", "links"];
  for (var n = 0; n < t.length; n++) {
    this[t[n]] = e[t[n]]
  }
  return this
};
Zotero.Entry.prototype.dump = Zotero.Entry.prototype.dumpEntry;
Zotero.Entry.prototype.parseXmlEntry = function(e) {
  Z.debug("Zotero.Entry.parseXmlEntry", 4);
  this.title = e.children("title").text();
  this.author = {};
  this.author["name"] = e.children("author").children("name").text();
  this.author["uri"] = e.children("author").children("uri").text();
  this.id = e.children("id").first().text();
  this.published = e.children("published").text();
  this.dateAdded = this.published;
  this.updated = e.children("updated").text();
  this.dateModified = this.updated;
  var t = {};
  e.children("link").each(function() {
    var e = J(this).attr("rel");
    t[e] = {
      rel: J(this).attr("rel"),
      type: J(this).attr("type"),
      href: J(this).attr("href"),
      length: J(this).attr("length")
    }
  });
  this.links = t
};
Zotero.Entry.prototype.associateWithLibrary = function(e) {
  this.libraryUrlIdentifier = e.libraryUrlIdentifier;
  this.libraryType = e.libraryType;
  this.libraryID = e.libraryID;
  this.owningLibrary = e;
  return this
};
Zotero.Collections = function(e) {
  var t = this;
  this.instance = "Zotero.Collections";
  this.collectionsArray = [];
  this.dirty = false;
  this.loaded = false;
  if ( typeof e == "undefined") {
    return
  } else {
    this.addCollectionsFromFeed(e)
  }
};
Zotero.Collections.prototype.dump = function() {
  var e = {};
  e.instance = "Zotero.Collections";
  e.collectionsArray = [];
  for (var t = 0; t < this.collectionsArray.length; t++) {
    e.collectionsArray.push(this.collectionsArray[t].dump())
  }
  e.dirty = this.dirty;
  e.loaded = this.loaded;
  return e
};
Zotero.Collections.prototype.loadDump = function(e) {
  var t = this;
  this.dirty = e.dirty;
  this.loaded = e.loaded;
  for (var n = 0; n < e.collectionsArray.length; n++) {
    var r = new Zotero.Collection;
    r.loadDump(e.collectionsArray[n]);
    this.addCollection(r)
  }
  this.collectionsArray.sort(this.sortByTitleCompare);
  J.each(this.collectionsArray, function(e, n) {
    if (n.instance === "Zotero.Collection") {
      if (n.nestCollection(t)) {
        Z.debug(n.key + ":" + n.title + " nested in parent.", 4)
      }
    }
  });
  this.assignDepths(0, this.collectionsArray);
  return this
};
Zotero.Collections.prototype.addCollection = function(e) {
  this.collectionsArray.push(e);
  this[e.key] = e;
  if (this.owningLibrary) {
    e.associateWithLibrary(this.owningLibrary)
  }
  return this
};
Zotero.Collections.prototype.addCollectionsFromFeed = function(e) {
  var t = this;
  var n = [];
  e.entries.each(function(e, r) {
    var i = new Zotero.Collection(J(r));
    t.addCollection(i);
    n.push(i)
  });
  return n
};
Zotero.Collections.prototype.sortByTitleCompare = function(e, t) {
  if (e.title.toLowerCase() == t.title.toLowerCase()) {
    return 0
  }
  if (e.title.toLowerCase() < t.title.toLowerCase()) {
    return -1
  }
  return 1
};
Zotero.Collections.prototype.assignDepths = function(e, t) {
  Z.debug("Zotero.Collections.assignDepths", 3);
  var n = function(e, t) {
    J.each(t, function(t, r) {
      r.nestingDepth = e;
      if (r.hasChildren) {
        n(e + 1, r.entries)
      }
    })
  };
  J.each(this.collectionsArray, function(e, t) {
    if (t.topLevel) {
      t.nestingDepth = 1;
      if (t.hasChildren) {
        n(2, t.entries)
      }
    }
  })
};
Zotero.Collections.prototype.nestedOrderingArray = function() {
  Z.debug("Zotero.Collections.nestedOrderingArray", 3);
  var e = [];
  var t = function(e, n) {
    J.each(n, function(n, r) {
      e.push(r);
      if (r.hasChildren) {
        t(e, r.entries)
      }
    })
  };
  J.each(this.collectionsArray, function(n, r) {
    if (r.topLevel) {
      e.push(r);
      if (r.hasChildren) {
        t(e, r.entries)
      }
    }
  });
  Z.debug("Done with nestedOrderingArray", 3);
  return e
};
Zotero.Collections.prototype.loadDataObjects = function(e) {
  Z.debug("Zotero.Collections.loadDataObjects", 3);
  var t = this.owningLibrary;
  var n = this;
  J.each(e, function(e, r) {
    var i = r["collectionKey"];
    var s = new Zotero.Collection;
    s.loadObject(r);
    s.libraryUrlIdentifier = n.libraryUrlIdentifier;
    s.libraryType = t.type;
    s.libraryID = t.libraryID;
    s.owningLibrary = t;
    t.collections[s.collectionKey] = s;
    t.collections.collectionsArray.push(s)
  });
  n.collectionsArray.sort(n.sortByTitleCompare);
  J.each(n.collectionsArray, function(e, t) {
    if (t.instance === "Zotero.Collection") {
      if (t.nestCollection(n)) {
        Z.debug(t.key + ":" + t.title + " nested in parent.", 4)
      }
    }
  });
  n.assignDepths(0, n.collectionsArray);
  return n
};
Zotero.Collections.prototype.getCollection = function(e) {
  if (this.hasOwnProperty(e)) {
    return this[e]
  } else {
    return false
  }
};
Zotero.Items = function(e) {
  this.displayItemsArray = [];
  this.displayItemsUrl = "";
  this.itemObjects = {};
  this.unsyncedItemObjects = {};
  if ( typeof e != "undefined") {
    this.addItemsFromFeed(e)
  }
};
Zotero.Items.prototype.dump = function() {
  var e = {};
  e.instance = "Zotero.Items.dump";
  e.itemsArray = [];
  J.each(this.itemObjects, function(t, n) {
    e.itemsArray.push(n.dump())
  });
  return e
};
Zotero.Items.prototype.loadDump = function(e) {
  Z.debug("-------------------------------Zotero.Items.loadDump", 3);
  var t = this;
  var n = [];
  for (var r = 0; r < e.itemsArray.length; r++) {
    var i = new Zotero.Item;
    i.loadDump(e.itemsArray[r]);
    this.addItem(i);
    n.push(i.itemKey)
  }
  if (this.owningLibrary) {
    this.owningLibrary.itemKeys = n
  }
  Z.debug("Adding childItemKeys to items loaded from dump");
  var s;
  J.each(t.itemObjects, function(e, n) {
    if (n.parentKey) {
      s = t.getItem(n.parentKey);
      if (s !== false) {
        s.childItemKeys.push(n.itemKey)
      }
    }
  });
  return this
};
Zotero.Items.prototype.getItem = function(e) {
  if (this.itemObjects.hasOwnProperty(e)) {
    return this.itemObjects[e]
  }
  return false
};
Zotero.Items.prototype.getItems = function(e) {
  var t = this;
  var n = [];
  for (var r = 0; r < e.length; r++) {
    n.push(t.getItem(e[r]))
  }
  return n
};
Zotero.Items.prototype.loadDataObjects = function(e) {
  var t = [];
  var n = this;
  J.each(e, function(e, r) {
    var i = r["itemKey"];
    var s = new Zotero.Item;
    s.loadObject(r);
    n.itemObjects[i] = s;
    t.push(s)
  });
  return t
};
Zotero.Items.prototype.addItem = function(e) {
  this.itemObjects[e.itemKey] = e;
  if (this.owningLibrary) {
    e.associateWithLibrary(this.owningLibrary)
  }
  return this
};
Zotero.Items.prototype.addItemsFromFeed = function(e) {
  var t = this;
  var n = [];
  e.entries.each(function(e, r) {
    var i = new Zotero.Item(J(r));
    t.addItem(i);
    n.push(i)
  });
  return n
};
Zotero.Items.prototype.keysNotInItems = function(e) {
  var t = [];
  J.each(e, function(e, n) {
    if (!this.itemObjects.hasOwnProperty(n)) {
      t.push(n)
    }
  });
  return t
};
Zotero.Tags = function(e) {
  this.displayTagsArray = [];
  this.displayTagsUrl = "";
  this.tagObjects = {};
  this.tagsArray = [];
  if ( typeof e != "undefined") {
    this.addTagsFromFeed(e)
  }
};
Zotero.Tags.prototype.dump = function() {
  var e = {};
  e.tagsArray = [];
  for (var t = 0; t < this.tagsArray.length; t++) {
    e.tagsArray.push(this.tagsArray[t].dump())
  }
  e.displayTagsUrl = this.displayTagsUrl;
  return e
};
Zotero.Tags.prototype.loadDump = function(e) {
  this.displayTagsUrl = e.displayTagsUrl;
  for (var t = 0; t < e.tagsArray.length; t++) {
    var n = new Zotero.Tag;
    n.loadDump(e.tagsArray[t]);
    this.addTag(n)
  }
  this.updateSecondaryData();
  return this
};
Zotero.Tags.prototype.addTag = function(e) {
  this.tagObjects[e.title] = e;
  this.tagsArray.push(e);
  if (this.owningLibrary) {
    e.associateWithLibrary(this.owningLibrary)
  }
};
Zotero.Tags.prototype.plainTagsList = function(e) {
  Z.debug("Zotero.Tags.plainTagsList", 3);
  var t = [];
  J.each(e, function(e, n) {
    t.push(n.title)
  });
  return t
};
Zotero.Tags.prototype.clear = function() {
  Z.debug("Zotero.Tags.clear", 3);
  this.displayTagsArray = [];
  this.displayTagsUrl = "";
  this.tagObjects = {};
  this.tagsArray = []
};
Zotero.Tags.prototype.updateSecondaryData = function() {
  Z.debug("Zotero.Tags.updateSecondaryData", 3);
  var e = this;
  e.tagsArray = [];
  J.each(e.tagObjects, function(t, n) {
    e.tagsArray.push(n)
  });
  e.tagsArray.sort(Zotero.Library.prototype.sortByTitleCompare);
  var t = e.plainTagsList(e.tagsArray);
  t.sort(Zotero.Library.prototype.sortLower);
  e.plainList = t
};
Zotero.Tags.prototype.addTagsFromFeed = function(e) {
  Z.debug("Zotero.Tags.addTagsFromFeed", 3);
  var t = this;
  var n = [];
  e.entries.each(function(e, r) {
    var i = new Zotero.Tag(J(r));
    t.addTag(i);
    n.push(i)
  });
  return n
};
Zotero.Collection = function(e) {
  this.instance = "Zotero.Collection";
  this.libraryUrlIdentifier = "";
  this.itemKeys = false;
  if ( typeof e != "undefined") {
    this.parseXmlCollection(e)
  }
};
Zotero.Collection.prototype = new Zotero.Entry;
Zotero.Collection.prototype.instance = "Zotero.Collection";
Zotero.Collection.prototype.dump = function() {
  var e = this.dumpEntry();
  var t = ["collectionKey", "key", "numItems", "numCollections", "name", "parent", "topLevel", "websiteCollectionLink", "hasChildren", "etag", "itemKeys"];
  for (var n = 0; n < t.length; n++) {
    e[t[n]] = this[t[n]]
  }
  return e
};
Zotero.Collection.prototype.loadDump = function(e) {
  this.loadDumpEntry(e);
  var t = ["collectionKey", "key", "numItems", "numCollections", "name", "parent", "topLevel", "websiteCollectionLink", "hasChildren", "etag", "itemKeys"];
  for (var n = 0; n < t.length; n++) {
    this[t[n]] = e[t[n]]
  }
  return this
};
Zotero.Collection.prototype.loadObject = function(e) {
  this.collectionKey = e.collectionKey;
  this.dateAdded = e.dateAdded;
  this.dateModified = e.dateUpdated;
  this.key = this.collectionKey;
  this["links"] = e["links"];
  this["title"] = e["title"];
  this["name"] = e["title"];
  this.parentCollectionKey = e.parentCollectionKey;
  this.parent = e.parentCollectionKey;
  this.childKeys = e.childKeys;
  this.topLevel = true
};
Zotero.Collection.prototype.parseXmlCollection = function(e) {
  this.parseXmlEntry(e);
  this.collectionKey = e.find("zapi\\:key, key").text();
  this.numItems = parseInt(e.find("zapi\\:numItems, numItems").text(), 10);
  this.numCollections = parseInt(e.find("zapi\\:numCollections, numCollections").text(), 10);
  this.key = this.collectionKey;
  this["name"] = e.find("title").text();
  this.dateAdded = this.published;
  this.dateModified = this.updated;
  var t = [];
  e.find("link").each(function(e, n) {
    var r = J(n);
    t.push({
      rel: r.attr("rel"),
      type: r.attr("type"),
      href: r.attr("href")
    })
  });
  this.parent = null;
  this.topLevel = true;
  var n = this;
  this.websiteCollectionLink = Zotero.config.baseWebsiteUrl + "/" + this.libraryUrlIdentifier + "/items/collection/" + this.collectionKey;
  this.hasChildren = this.numCollections ? true : false;
  var r = e.find("content");
  var i = JSON.parse(e.find("content").first().text());
  this["name"] = i["name"];
  this["parent"] = i["parent"];
  if (this["parent"]) {
    this.topLevel = false
  }
  this.etag = r.attr("zapi:etag")
};
Zotero.Collection.prototype.parseJsonXmlCollection = function(e) {
  this.parseXmlCollection(e);
  var t = JSON.parse(e.find("content").text());
  this["name"] = t["name"];
  this.parent = t.parent;
  if (this.parent) {
    this.topLevel = false
  }
  this.etag = e.find("content").attr("zapi:etag")
};
Zotero.Collection.prototype.nestCollection = function(e) {
  Z.debug("Zotero.Collection.nestCollection", 4);
  if (this.parent !== null) {
    var t = this.parent;
    if ( typeof e[t] !== "undefined") {
      Z.debug("Pushing " + this.key + "(" + this.title + ") onto entries of parent " + t + "(" + e[t].title + ")", 4);
      var n = e[t];
      if ( typeof n.entries === "undefined") {
        n.entries = [this]
      } else {
        n.entries.push(this)
      }
      n.hasChildren = true;
      this.topLevel = false;
      return true
    }
  }
  return false
};
Zotero.Collection.prototype.addItems = function(e) {
  Z.debug("Zotero.Collection.addItems", 3);
  Z.debug(e, 3);
  var t = {
    target: "items",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    collectionKey: this.collectionKey,
    content: "json"
  };
  var n = Zotero.ajax.apiRequestUrl(t) + Zotero.ajax.apiQueryString(t);
  var r = e.join(" ");
  var i = J.ajax(Zotero.ajax.proxyWrapper(n, "POST"), {
    data: r,
    type: "POST",
    processData: false,
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  Zotero.ajax.activeRequests.push(i);
  return i
};
Zotero.Collection.prototype.getMemberItemKeys = function() {
  Z.debug("Zotero.Collection.getMemberItemKeys", 3);
  Z.debug("Current Collection: " + this.collectionKey, 3);
  Z.debug(this.itemKeys, 3);
  var e = {
    target: "items",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    collectionKey: this.collectionKey,
    format: "keys"
  };
  var t = Zotero.ajax.apiRequestUrl(e) + Zotero.ajax.apiQueryString(e);
  var n = new J.Deferred;
  var r = J.ajax(Zotero.ajax.proxyWrapper(t, "GET"), {
    type: "GET",
    processData: false,
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  r.done(J.proxy(function(e, t, r) {
    Z.debug("getMemberItemKeys proxied callback", 3);
    var i = this;
    var s = e;
    var o = J.trim(s).split(/[\s]+/);
    i.itemKeys = o;
    n.resolve(o)
  }, this));
  Zotero.ajax.activeRequests.push(r);
  return n
};
Zotero.Collection.prototype.removeItem = function(e) {
  var t = {
    target: "item",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    collectionKey: this.collectionKey,
    itemKey: e
  };
  var n = Zotero.ajax.apiRequestUrl(t) + Zotero.ajax.apiQueryString(t);
  var r = J.ajax(Zotero.ajax.proxyWrapper(n, "DELETE"), {
    type: "DELETE",
    processData: false,
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  Zotero.ajax.activeRequests.push(r);
  return r
};
Zotero.Collection.prototype.update = function(e, t) {
  if (!t)
    t = false;
  var n = {
    target: "collection",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    collectionKey: this.key
  };
  var r = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  var i = JSON.stringify({
    name: e,
    parent: t
  });
  var s = J.ajax(Zotero.ajax.proxyWrapper(r, "PUT"), {
    data: i,
    type: "PUT",
    processData: false,
    headers: {
      "If-Match": this.etag
    },
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  Zotero.ajax.activeRequests.push(s);
  return s
};
Zotero.Collection.prototype.remove = function() {
  Z.debug("Zotero.Collection.delete", 3);
  var e = {
    target: "collection",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    collectionKey: this.key
  };
  var t = Zotero.ajax.apiRequestUrl(e) + Zotero.ajax.apiQueryString(e);
  var n = J.ajax(Zotero.ajax.proxyWrapper(t, "DELETE"), {
    type: "DELETE",
    processData: false,
    headers: {
      "If-Match": this.etag
    },
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  Zotero.ajax.activeRequests.push(n);
  return n
};
Zotero.Item = function(e) {
  this.instance = "Zotero.Item";
  this.apiObj = {};
  this.dataFields = {};
  this.childItemKeys = [];
  if ( typeof e != "undefined") {
    this.parseXmlItem(e)
  }
};
Zotero.Item.prototype = new Zotero.Entry;
Zotero.Item.prototype.dump = function() {
  var e = this.dumpEntry();
  var t = ["itemKey", "itemType", "creatorSummary", "year", "numChildren", "numTags", "parentKey", "etag", "contentRows", "apiObj", "mimeType", "translatedMimeType", "linkMode", "attachmentDownloadLink"];
  for (var n = 0; n < t.length; n++) {
    e[t[n]] = this[t[n]]
  }
  return e
};
Zotero.Item.prototype.loadDump = function(e) {
  this.loadDumpEntry(e);
  var t = ["itemKey", "itemType", "creatorSummary", "year", "numChildren", "numTags", "parentKey", "etag", "contentRows", "apiObj", "mimeType", "translatedMimeType", "linkMode", "attachmentDownloadLink"];
  for (var n = 0; n < t.length; n++) {
    this[t[n]] = e[t[n]]
  }
  return this
};
Zotero.Item.prototype.loadObject = function(e) {
  Z.debug("Zotero.Item.loadObject", 3);
  if ( typeof e === "string") {
    e = JSON.parse(e)
  }
  this.title = e.title;
  this.itemKey = e.itemKey;
  this.itemType = e.itemType;
  this.creatorSummary = e.creatorSummary;
  this.numChildren = e.numChildren;
  this.numTags = e.numTags;
  this.creators = e.creators;
  this.createdByUserID = e.createdByUserID;
  this.lastModifiedByUserID = e.lastModifiedByUserID;
  this.note = e.note;
  this.linkMode = e.linkMode;
  this.mimeType = e.mimeType;
  this.links = e.links;
  this.apiObj = e.apiObject;
  this.dateAdded = e.dateAdded;
  this.published = this.dateAdded;
  this.dateModified = e.dateModified;
  this.updated = this.dateModified
};
Zotero.Item.prototype.parseXmlItem = function(e) {
  this.parseXmlEntry(e);
  this.itemKey = e.find("zapi\\:key, key").text();
  this.itemType = e.find("zapi\\:itemType, itemType").text();
  this.creatorSummary = e.find("zapi\\:creatorSummary, creatorSummary").text();
  this.year = e.find("zapi\\:year, year").text();
  this.numChildren = parseInt(e.find("zapi\\:numChildren, numChildren").text(), 10);
  this.numTags = parseInt(e.find("zapi\\:numTags, numChildren").text(), 10);
  if (isNaN(this.numChildren)) {
    this.numChildren = 0
  }
  this.parentKey = false;
  if (this.links["up"]) {
    var t = this.links["up"]["href"];
    var n = new RegExp("items/([A-Z0-9]{8})");
    this.parentKey = n.exec(t)[1]
  }
  var r = e.children("content");
  var i = e.find("zapi\\:subcontent, subcontent");
  if (i.size() > 0) {
    for (var s = 0; s < i.size(); s++) {
      var o = J(i.get(s));
      this.parseContentBlock(o)
    }
  } else {
    this.parseContentBlock(r)
  }
};
Zotero.Item.prototype.parseContentBlock = function(e) {
  if (e.attr("type") == "application/json" || e.attr("type") == "json" || e.attr("zapi:type") == "json") {
    this.itemContentType = "json";
    this.parseJsonItemContent(e)
  } else if (e.attr("zapi:type") == "bib") {
    this.itemContentType = "bib";
    this.bibContent = e.text();
    this.parsedBibContent = true
  } else if (e.attr("type") == "xhtml") {
    this.itemContentType = "xhtml";
    this.parseXmlItemContent(e)
  } else {
    this.itemContentType = "other"
  }
};
Zotero.Item.prototype.parseXmlItemContent = function(e) {
  var t = [];
  var n = {};
  e.find("div > table").children("tr").each(function() {
    t.push({
      field: J(this).attr("class"),
      fieldMapped: J(this).children("th").text(),
      fieldValue: J(this).children("td").text()
    })
  });
  this.contentRows = t;
  J.each(t, function(e, t) {
    n[t.field] = t.fieldValue
  });
  this.dataFields = n
};
Zotero.Item.prototype.parseJsonItemContent = function(e) {
  this.etag = e.attr("zapi:etag");
  var t = JSON.parse(e.text());
  var n = [];
  var r = this;
  J.each(t, function(e, t) {
    if (e == "tags") {
      r.tags = t
    } else if (e == "creators") {
      r.creators = t
    } else if (e == "attachments") {
      r.attachments = t
    } else {
      n.push({
        field: e,
        fieldMapped: r.fieldMap[e],
        fieldValue: t
      });
      r.dataFields[e] = t
    }
  });
  this.contentRows = n;
  this.apiObj = t;
  if (this.dataFields["itemType"] == "attachment") {
    this.mimeType = this.dataFields["contentType"];
    this.translatedMimeType = Zotero.utils.translateMimeType(this.mimeType)
  }
  if (this.dataFields.hasOwnProperty("linkMode")) {
    this.linkMode = this.dataFields["linkMode"]
  }
  this.attachmentDownloadLink = Zotero.url.attachmentDownloadLink(this)
};
Zotero.Item.prototype.initEmpty = function(e, t) {
  this.etag = "";
  var n = this;
  var r = new J.Deferred;
  var i = this.getItemTemplate(e, t);
  var s = J.proxy(function(e) {
    this.itemType = e.itemType;
    this.itemKey = "";
    var t = e;
    var i = [];
    J.each(t, function(e, t) {
      if (e == "tags") {
        n.tags = t
      } else if (e == "creators") {
        n.creators = t
      } else {
        i.push({
          field: e,
          fieldMapped: n.fieldMap[e],
          fieldValue: t
        })
      }
    });
    this.contentRows = i;
    this.apiObj = t;
    r.resolve(n)
  }, this);
  i.done(s);
  return r
};
Zotero.Item.prototype.writeItem = function() {
  Z.debug("Zotero.Item.writeItem", 3);
  var e = "item";
  var t = this;
  var n = true;
  var r = false;
  var i, s, o, u;
  if (this.itemKey) {
    n = false
  }
  if (n && this.parentItemKey) {
    r = true;
    e = "children"
  }
  var a = {
    target: e,
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    itemKey: this.itemKey,
    content: "json"
  };
  if (r) {
    a.itemKey = this.parentItemKey
  }
  var f = Zotero.ajax.apiRequestUrl(a) + Zotero.ajax.apiQueryString(a);
  if (!n) {
    i = {
      target: "children",
      libraryType: this.libraryType,
      libraryID: this.libraryID,
      itemKey: this.itemKey,
      content: "json"
    };
    s = Zotero.ajax.apiRequestUrl(i) + Zotero.ajax.apiQueryString(i)
  }
  if (!this.apiObj.hasOwnProperty("creators")) {
    this.apiObj.creators = []
  }
  if (!this.apiObj.hasOwnProperty("attachments")) {
    this.apiObj.attachments = []
  }
  var l = this.apiObj.creators.filter(function(e) {
    if (e.name || e.firstName || e.lastName) {
      return true
    }
    return false
  });
  this.apiObj.creators = l;
  var c = J.proxy(function(e, t, n) {
    Z.debug("writeItem successCallback", 3);
    var r = J(e).find("entry");
    this.parseXmlItem(r)
  }, this);
  var h = J.proxy(function(e, n, r) {
    Z.debug("writeItem childSuccessCallback", 3);
    if (t.numChildren) {
      t.numChildren++
    } else {
      t.numChildren = 1;
      J.publish("hasFirstChild", [t.itemKey])
    }
  }, this);
  var p = J.extend({}, this.apiObj);
  delete p["mimeType"];
  delete p["charset"];
  delete p["filename"];
  delete p["md5"];
  delete p["mtime"];
  delete p["zip"];
  p["attachments"] = [];
  var d = [];
  if (!n) {
    Z.debug("have itemKey, making PUT writeItem request", 3);
    var v = this.apiObj.notes;
    delete this.apiObj.notes;
    delete p.notes;
    delete p.attachments;
    o = JSON.stringify(p);
    u = J.ajax(Zotero.ajax.proxyWrapper(f, "PUT"), {
      data: o,
      type: "PUT",
      processData: false,
      headers: {
        "If-Match": this.etag,
        "Content-Type": "application/json"
      },
      success: c,
      cache: false,
      error: Zotero.ajax.errorCallback
    });
    d.push(u);
    if (J.isArray(v) && v.length) {
      Z.debug("have child notes for existing item - making separate requests to create children", 3);
      var m = {
        items: v
      };
      Z.debug("new child notes on existing item", 3);
      Z.debug(m, 4);
      o = JSON.stringify(m);
      u = J.ajax(Zotero.ajax.proxyWrapper(s, "POST"), {
        data: o,
        type: "POST",
        processData: false,
        headers: {
          "Content-Type": "application/json"
        },
        success: h,
        cache: false,
        error: Zotero.ajax.errorCallback
      });
      d.push(u)
    }
  } else {
    Z.debug("have no itemKey, making POST writeItem request", 3);
    o = JSON.stringify({
      items: [p]
    });
    u = J.ajax(Zotero.ajax.proxyWrapper(f, "POST"), {
      data: o,
      type: "POST",
      processData: false,
      headers: {
        "Content-Type": "application/json"
      },
      success: c,
      cache: false,
      error: Zotero.ajax.errorCallback
    });
    d.push(u)
  }
  J.each(d, function() {
    Zotero.ajax.activeRequests.push(this)
  });
  return J.when.apply(J, d)
};
Zotero.Item.prototype.getChildren = function(e) {
  Z.debug("Zotero.Item.getChildren", 3);
  var t = J.Deferred();
  if (!this.numChildren || this.parentKey !== false) {
    t.resolve([]);
    return t
  }
  var n = {
    target: "children",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    itemKey: this.itemKey,
    content: "json"
  };
  var r = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  var i = J.proxy(function(n, r, i) {
    Z.debug("getChildren proxied callback", 4);
    var s = new Zotero.Feed(n);
    var o = e.items;
    var u = o.addItemsFromFeed(s);
    for (var a = u.length - 1; a >= 0; a--) {
      u[a].associateWithLibrary(e)
    }
    t.resolve(u)
  }, this);
  var s = J.ajax(Zotero.ajax.proxyWrapper(r, "GET"), {
    type: "GET",
    processData: false,
    headers: {},
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  s.done(i);
  s.fail(function() {
    t.reject.apply(null, arguments)
  });
  Zotero.ajax.activeRequests.push(s);
  return t
};
Zotero.Item.prototype.addToCollection = function(e) {
};
Zotero.Item.prototype.getItemTypes = function(e) {
  Z.debug("Zotero.Item.prototype.getItemTypes", 3);
  if (!e) {
    e = "en-US"
  }
  e = "en-US";
  var t = Zotero.cache.load({
    locale: e,
    target: "itemTypes"
  });
  if (t) {
    Z.debug("have itemTypes in localStorage", 3);
    Zotero.Item.prototype.itemTypes = t;
    return
  }
  var n = Zotero.ajax.apiQueryString({
    locale: e
  });
  var r = Zotero.config.baseApiUrl + "/itemTypes" + n;
  J.getJSON(Zotero.ajax.proxyWrapper(r, "GET"), {}, function(t, n, r) {
    Z.debug("got itemTypes response", 3);
    Z.debug(t, 4);
    Zotero.Item.prototype.itemTypes = t;
    Zotero.cache.save({
      locale: e,
      target: "itemTypes"
    }, Zotero.Item.prototype.itemTypes)
  })
};
Zotero.Item.prototype.getItemFields = function(e) {
  Z.debug("Zotero.Item.prototype.getItemFields", 3);
  if (!e) {
    e = "en-US"
  }
  e = "en-US";
  var t = Zotero.cache.load({
    locale: e,
    target: "itemFields"
  });
  if (t) {
    Z.debug("have itemFields in localStorage", 3);
    Zotero.Item.prototype.itemFields = t;
    J.each(Zotero.Item.prototype.itemFields, function(e, t) {
      Zotero.localizations.fieldMap[t.field] = t.localized
    });
    return
  }
  var n = Zotero.ajax.apiQueryString({
    locale: e
  });
  var r = Zotero.config.baseApiUrl + "/itemFields" + n;
  J.getJSON(Zotero.ajax.proxyWrapper(r), {}, function(t, n, r) {
    Z.debug("got itemTypes response", 4);
    Zotero.Item.prototype.itemFields = t;
    Zotero.cache.save({
      locale: e,
      target: "itemFields"
    }, t);
    J.each(Zotero.Item.prototype.itemFields, function(e, t) {
      Zotero.localizations.fieldMap[t.field] = t.localized
    })
  })
};
Zotero.Item.prototype.getItemTemplate = function(e, t) {
  Z.debug("Zotero.Item.prototype.getItemTemplate", 3);
  var n = new J.Deferred;
  if ( typeof e == "undefined")
    e = "document";
  if (e == "attachment" && typeof t == "undefined") {
    throw "attachment template requested with no linkMode"
  }
  if ( typeof t == "undefined") {
    t = ""
  }
  var r = Zotero.ajax.apiQueryString({
    itemType: e,
    linkMode: t
  });
  var i = Zotero.config.baseApiUrl + "/items/new" + r;
  var s = {
    itemType: e,
    target: "itemTemplate"
  };
  var o = Zotero.cache.load(s);
  if (o) {
    Z.debug("have itemTemplate in localStorage", 3);
    var u = o;
    n.resolve(u);
    return n
  }
  var a = J.proxy(function(e, t, r) {
    Z.debug("got itemTemplate response", 3);
    Z.debug(e, 4);
    Zotero.cache.save(s, e);
    n.resolve(e)
  }, this);
  J.getJSON(Zotero.ajax.proxyWrapper(i), {}, a);
  return n
};
Zotero.Item.prototype.getUploadAuthorization = function(e, t) {
  Z.debug("Zotero.Item.getUploadAuthorization", 3);
  var n = {
    target: "item",
    targetModifier: "file",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    itemKey: this.itemKey
  };
  var r = J.extend({}, n);
  var i = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  var s = {};
  if (t) {
    s["If-Match"] = t
  } else {
    s["If-None-Match"] = "*"
  }
  var o = J.ajax(Zotero.ajax.proxyWrapper(i, "POST"), {
    type: "POST",
    processData: true,
    data: e,
    headers: s,
    cache: false,
    error: Zotero.ajax.errorCallback
  });
  Z.debug("returning jqxhr from getUploadAuthorization", 4);
  return o
};
Zotero.Item.prototype.registerUpload = function(e, t) {
  Z.debug("Zotero.Item.registerUpload", 3);
  var n = {
    target: "item",
    targetModifier: "file",
    libraryType: this.libraryType,
    libraryID: this.libraryID,
    itemKey: this.itemKey
  };
  var r = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString(n);
  if (!t) {
    headers = {
      "If-None-Match": "*"
    }
  } else {
    headers = {
      "If-Match": t
    }
  }
  var i = J.ajax(Zotero.ajax.proxyWrapper(r, "POST"), {
    type: "POST",
    processData: true,
    data: {
      upload: e
    },
    headers: headers,
    cache: false
  });
  return i
};
Zotero.Item.prototype.fullUpload = function(e) {
};
Zotero.Item.prototype.creatorTypes = {};
Zotero.Item.prototype.getCreatorTypes = function(e) {
  Z.debug("Zotero.Item.prototype.getCreatorTypes: " + e, 3);
  if (!e) {
    e = "document"
  }
  var t = new J.Deferred;
  var n = Zotero.cache.load({
    target: "creatorTypes"
  });
  if (n) {
    Z.debug("have creatorTypes in localStorage", 3);
    Zotero.Item.prototype.creatorTypes = n
  }
  if (Zotero.Item.prototype.creatorTypes[e]) {
    Z.debug("creatorTypes of requested itemType available in localStorage", 3);
    Z.debug(Zotero.Item.prototype.creatorTypes, 4);
    t.resolve(Zotero.Item.prototype.creatorTypes[e])
  } else {
    Z.debug("sending request for creatorTypes", 3);
    var r = Zotero.ajax.apiQueryString({
      itemType: e
    });
    var i = Zotero.config.baseApiUrl + "/itemTypeCreatorTypes" + r;
    var s = J.proxy(function(n, r, i) {
      Z.debug("got creatorTypes response", 4);
      Zotero.Item.prototype.creatorTypes[e] = n;
      Zotero.cache.save({
        target: "creatorTypes"
      }, Zotero.Item.prototype.creatorTypes);
      t.resolve(Zotero.Item.prototype.creatorTypes[e])
    }, this);
    J.getJSON(Zotero.ajax.proxyWrapper(i), {}, s)
  }
  return t
};
Zotero.Item.prototype.getCreatorFields = function(e) {
  Z.debug("Zotero.Item.prototype.getCreatorFields", 3);
  var t = Zotero.cache.load({
    target: "creatorFields"
  });
  if (t) {
    Z.debug("have creatorFields in localStorage", 3);
    Zotero.Item.prototype.creatorFields = t;
    return
  }
  var n = Zotero.config.baseApiUrl + "/creatorFields";
  J.getJSON(Zotero.ajax.proxyWrapper(n), {}, function(e, t, n) {
    Z.debug("got itemTypes response", 4);
    Zotero.Item.prototype.creatorFields = e;
    Zotero.cache.save({
      target: "creatorFields"
    }, e)
  })
};
Zotero.Item.prototype.addItemTypes = function(e, t) {
};
Zotero.Item.prototype.addItemFields = function(e, t) {
};
Zotero.Item.prototype.addCreatorTypes = function(e, t) {
};
Zotero.Item.prototype.addCreatorFields = function(e, t) {
};
Zotero.Item.prototype.addItemTemplates = function(e) {
};
Zotero.Item.prototype.fieldMap = {
  itemType: "Type",
  title: "Title",
  dateAdded: "Date Added",
  dateModified: "Date Modified",
  source: "Source",
  notes: "Notes",
  tags: "Tags",
  attachments: "Attachments",
  related: "Related",
  url: "URL",
  rights: "Rights",
  series: "Series",
  volume: "Volume",
  issue: "Issue",
  edition: "Edition",
  place: "Place",
  publisher: "Publisher",
  pages: "Pages",
  ISBN: "ISBN",
  publicationTitle: "Publication",
  ISSN: "ISSN",
  date: "Date",
  year: "Year",
  section: "Section",
  callNumber: "Call Number",
  archive: "Archive",
  archiveLocation: "Loc. in Archive",
  libraryCatalog: "Library Catalog",
  distributor: "Distributor",
  extra: "Extra",
  journalAbbreviation: "Journal Abbr",
  DOI: "DOI",
  accessDate: "Accessed",
  seriesTitle: "Series Title",
  seriesText: "Series Text",
  seriesNumber: "Series Number",
  institution: "Institution",
  reportType: "Report Type",
  code: "Code",
  session: "Session",
  legislativeBody: "Legislative Body",
  history: "History",
  reporter: "Reporter",
  court: "Court",
  numberOfVolumes: "# of Volumes",
  committee: "Committee",
  assignee: "Assignee",
  patentNumber: "Patent Number",
  priorityNumbers: "Priority Numbers",
  issueDate: "Issue Date",
  references: "References",
  legalStatus: "Legal Status",
  codeNumber: "Code Number",
  artworkMedium: "Medium",
  number: "Number",
  artworkSize: "Artwork Size",
  repository: "Repository",
  videoRecordingType: "Recording Type",
  interviewMedium: "Medium",
  letterType: "Type",
  manuscriptType: "Type",
  mapType: "Type",
  scale: "Scale",
  thesisType: "Type",
  websiteType: "Website Type",
  audioRecordingType: "Recording Type",
  label: "Label",
  presentationType: "Type",
  meetingName: "Meeting Name",
  studio: "Studio",
  runningTime: "Running Time",
  network: "Network",
  postType: "Post Type",
  audioFileType: "File Type",
  version: "Version",
  system: "System",
  company: "Company",
  conferenceName: "Conference Name",
  encyclopediaTitle: "Encyclopedia Title",
  dictionaryTitle: "Dictionary Title",
  language: "Language",
  programmingLanguage: "Language",
  university: "University",
  abstractNote: "Abstract",
  websiteTitle: "Website Title",
  reportNumber: "Report Number",
  billNumber: "Bill Number",
  codeVolume: "Code Volume",
  codePages: "Code Pages",
  dateDecided: "Date Decided",
  reporterVolume: "Reporter Volume",
  firstPage: "First Page",
  documentNumber: "Document Number",
  dateEnacted: "Date Enacted",
  publicLawNumber: "Public Law Number",
  country: "Country",
  applicationNumber: "Application Number",
  forumTitle: "Forum/Listserv Title",
  episodeNumber: "Episode Number",
  blogTitle: "Blog Title",
  caseName: "Case Name",
  nameOfAct: "Name of Act",
  subject: "Subject",
  proceedingsTitle: "Proceedings Title",
  bookTitle: "Book Title",
  shortTitle: "Short Title",
  docketNumber: "Docket Number",
  numPages: "# of Pages",
  note: "Note",
  numChildren: "# of Children",
  addedBy: "Added By",
  creator: "Creator"
};
Zotero.localizations.fieldMap = Zotero.Item.prototype.fieldMap;
Zotero.Item.prototype.typeMap = {
  note: "Note",
  attachment: "Attachment",
  book: "Book",
  bookSection: "Book Section",
  journalArticle: "Journal Article",
  magazineArticle: "Magazine Article",
  newspaperArticle: "Newspaper Article",
  thesis: "Thesis",
  letter: "Letter",
  manuscript: "Manuscript",
  interview: "Interview",
  film: "Film",
  artwork: "Artwork",
  webpage: "Web Page",
  report: "Report",
  bill: "Bill",
  "case": "Case",
  hearing: "Hearing",
  patent: "Patent",
  statute: "Statute",
  email: "E-mail",
  map: "Map",
  blogPost: "Blog Post",
  instantMessage: "Instant Message",
  forumPost: "Forum Post",
  audioRecording: "Audio Recording",
  presentation: "Presentation",
  videoRecording: "Video Recording",
  tvBroadcast: "TV Broadcast",
  radioBroadcast: "Radio Broadcast",
  podcast: "Podcast",
  computerProgram: "Computer Program",
  conferencePaper: "Conference Paper",
  document: "Document",
  encyclopediaArticle: "Encyclopedia Article",
  dictionaryEntry: "Dictionary Entry"
};
Zotero.localizations.typeMap = Zotero.Item.prototype.typeMap;
Zotero.Item.prototype.creatorMap = {
  author: "Author",
  contributor: "Contributor",
  editor: "Editor",
  translator: "Translator",
  seriesEditor: "Series Editor",
  interviewee: "Interview With",
  interviewer: "Interviewer",
  director: "Director",
  scriptwriter: "Scriptwriter",
  producer: "Producer",
  castMember: "Cast Member",
  sponsor: "Sponsor",
  counsel: "Counsel",
  inventor: "Inventor",
  attorneyAgent: "Attorney/Agent",
  recipient: "Recipient",
  performer: "Performer",
  composer: "Composer",
  wordsBy: "Words By",
  cartographer: "Cartographer",
  programmer: "Programmer",
  reviewedAuthor: "Reviewed Author",
  artist: "Artist",
  commenter: "Commenter",
  presenter: "Presenter",
  guest: "Guest",
  podcaster: "Podcaster"
};
Zotero.localizations.creatorMap = Zotero.Item.prototype.creatorMap;
Zotero.Item.prototype.itemTypeImageSrc = {
  note: "note",
  attachment: "attachment-pdf",
  attachmentPdf: "attachment-pdf",
  attachmentWeblink: "attachment-web-link",
  attachmentSnapshot: "attachment-snapshot",
  attachmentFile: "attachment-file",
  attachmentLink: "attachment-link",
  book: "book",
  bookSection: "book_open",
  journalArticle: "page_white_text",
  magazineArticle: "layout",
  newspaperArticle: "newspaper",
  thesis: "report",
  letter: "email_open",
  manuscript: "script",
  interview: "comments",
  film: "film",
  artwork: "picture",
  webpage: "page",
  report: "report",
  bill: "page_white",
  "case": "page_white",
  hearing: "page_white",
  patent: "page_white",
  statute: "page_white",
  email: "email",
  map: "map",
  blogPost: "layout",
  instantMessage: "page_white",
  forumPost: "page",
  audioRecording: "ipod",
  presentation: "page_white",
  videoRecording: "film",
  tvBroadcast: "television",
  radioBroadcast: "transmit",
  podcast: "ipod_cast",
  computerProgram: "page_white_code",
  conferencePaper: "treeitem-conferencePaper",
  document: "page_white",
  encyclopediaArticle: "page_white",
  dictionaryEntry: "page_white"
};
Zotero.Item.prototype.itemTypeImageClass = function() {
  var e = this;
  if (e.itemType == "attachment") {
    switch(e.linkMode) {
      case"imported_file":
        if (e.translatedMimeType == "pdf") {
          return this.itemTypeImageSrc["attachmentPdf"]
        }
        return this.itemTypeImageSrc["attachmentFile"];
      case"imported_url":
        if (e.translatedMimeType == "pdf") {
          return this.itemTypeImageSrc["attachmentPdf"]
        }
        return this.itemTypeImageSrc["attachmentSnapshot"];
      case"linked_file":
        return this.itemTypeImageSrc["attachmentLink"];
      case"linked_url":
        return this.itemTypeImageSrc["attachmentWeblink"];
      default:
        return this.itemTypeImageSrc["attachment"]
    }
  } else {
    return e.itemType
  }
};
Zotero.Item.prototype.get = function(e) {
  if (e == "title") {
    return this.title
  } else if (e == "creatorSummary") {
    return this.creatorSummary
  } else if ( e in this.apiObj) {
    return this.apiObj[e]
  }
};
Zotero.Tag = function(e) {
  this.instance = "Zotero.Tag";
  if ( typeof e != "undefined") {
    this.parseXmlTag(e)
  }
};
Zotero.Tag.prototype = new Zotero.Entry;
Zotero.Tag.prototype.dump = function() {
  var e = this.dumpEntry();
  var t = ["numItems", "urlencodedtag"];
  for (var n = 0; n < t.length; n++) {
    e[t[n]] = this[t[n]]
  }
  return e
};
Zotero.Tag.prototype.loadDump = function(e) {
  this.loadDumpEntry(e);
  var t = ["numItems", "urlencodedtag"];
  for (var n = 0; n < t.length; n++) {
    this[t[n]] = e[t[n]]
  }
  return this
};
Zotero.Tag.prototype.loadObject = function(e) {
  this.title = e.title;
  this.author = e.author;
  this.tagID = e.tagID;
  this.published = e.published;
  this.updated = e.updated;
  this.links = e.links;
  this.numItems = e.numItems;
  this.items = e.items;
  this.tagType = e.tagType;
  this.modified = e.modified;
  this.added = e.added;
  this.key = e.key;
  this.tag = e.tag
};
Zotero.Tag.prototype.parseXmlTag = function(e) {
  this.parseXmlEntry(e);
  this.numItems = e.find("zapi\\:numItems, numItems").text();
  this.urlencodedtag = encodeURIComponent(this.title)
};
Zotero.Tag.prototype.getLinkParams = function() {
  var e = Zotero.ajax.getUrlVar("tag");
  if (!J.isArray(e)) {
    e = [e]
  }
  var t = Zotero.ajax.getUrlVars();
  var n = false;
  var r = J.inArray(this.title, e);
  if (r != -1) {
    n = true
  }
  if (t.hasOwnProperty("tag")) {
    if (J.isArray(t.tag)) {
      if (!n)
        t.tag.push(this.title);
      else {
        t.tag.splice(r, 1)
      }
    } else {
      if (!n)
        t.tag = [t.tag, this.title];
      else
        t.tag = []
    }
  } else {
    t.tag = this.title
  }
  this.linktagsparams = t;
  return t
};
Zotero.Group = function() {
  this.instance = "Zotero.Group"
};
Zotero.Group.prototype = new Zotero.Entry;
Zotero.Group.prototype.loadObject = function(e) {
  this.title = e.title;
  this.author = e.author;
  this.tagID = e.tagID;
  this.published = e.published;
  this.updated = e.updated;
  this.links = e.links;
  this.numItems = e.numItems;
  this.items = e.items;
  this.tagType = e.tagType;
  this.modified = e.modified;
  this.added = e.added;
  this.key = e.key
};
Zotero.Group.prototype.parseXmlGroup = function(e) {
  this.parseXmlEntry(e);
  this.numItems = e.find("zapi\\:numItems, numItems").text();
  var t = e.find("zxfer\\:group, group");
  if (t.length !== 0) {
    this.groupID = t.attr("id");
    this.ownerID = t.attr("owner");
    this.groupType = t.attr("type");
    this.groupName = t.attr("name");
    this.libraryEnabled = t.attr("libraryEnabled");
    this.libraryEditing = t.attr("libraryEditing");
    this.libraryReading = t.attr("libraryReading");
    this.fileEditing = t.attr("fileEditing");
    this.description = t.find("zxfer\\:description, description").text();
    this.memberIDs = t.find("zxfer\\:members, members").text().split(" ");
    this.adminIDs = t.find("zxfer\\:admins, admins").text().split(" ");
    this.itemIDs = t.find("zxfer\\:items, items").text().split(" ")
  }
};
Zotero.User = function() {
  this.instance = "Zotero.User"
};
Zotero.User.prototype = new Zotero.Entry;
Zotero.User.prototype.loadObject = function(e) {
  this.title = e.title;
  this.author = e.author;
  this.tagID = e.tagID;
  this.published = e.published;
  this.updated = e.updated;
  this.links = e.links;
  this.numItems = e.numItems;
  this.items = e.items;
  this.tagType = e.tagType;
  this.modified = e.modified;
  this.added = e.added;
  this.key = e.key
};
Zotero.User.prototype.parseXmlUser = function(e) {
  this.parseXmlEntry(e);
  var t = e.find("content>tag");
  if (t.length !== 0) {
    this.tagKey = t.attr("key");
    this.libraryID = t.attr("libraryID");
    this.tagName = t.attr("name");
    this.dateAdded = t.attr("dateAdded");
    this.dateModified = t.attr("dateModified")
  }
};
Zotero.utils = {
  slugify: function(e) {
    var t = J.trim(e);
    t = t.toLowerCase();
    t = t.replace(/[^a-z0-9 ._-]/g, "");
    t = t.replace(" ", "_", "g");
    return t
  },
  prependAutocomplete: function(e, t) {
    Z.debug("Zotero.utils.prependAutocomplete", 3);
    Z.debug("prepend match: " + e);
    var n;
    if (!t) {
      Z.debug("source is not defined")
    }
    if (e === "") {
      n = t.slice(0);
      return n
    }
    var r = e.length;
    var i = e.toLowerCase();
    n = J.map(t, function(e) {
      if (e.substr(0, r).toLowerCase() == i) {
        return e
      } else {
        return null
      }
    });
    return n
  },
  matchAnyAutocomplete: function(e, t) {
    Z.debug("Zotero.utils.matchAnyAutocomplete", 3);
    Z.debug("matchAny match: " + e);
    var n;
    if (!t) {
      Z.debug("source is not defined")
    }
    if (e === "") {
      n = t.slice(0);
      return n
    }
    var r = e.length;
    var i = e.toLowerCase();
    n = J.map(t, function(e) {
      if (e.toLowerCase().indexOf(i) != -1) {
        return e
      } else {
        return null
      }
    });
    return n
  },
  setUserPref: function(e, t) {
    Z.debug("Zotero.utils.updateUserPrefs", 3);
    var n = {
      varname: e,
      varvalue: t
    };
    var r = J.get("/user/setuserpref", n);
    r.done(J.proxy(function() {
      Z.debug("userpref set:" + e + " : " + t, 3)
    }), this);
    return r
  },
  libraryString: function(e, t) {
    var n = "";
    if (e == "user")
      n = "u";
    else if (e == "group")
      n = "g";
    n += t;
    return n
  },
  stale: function(e, t) {
    var n = Date.now();
    var r = n.getTime() - e.getTime();
    if (r / 6e4 > t) {
      return true
    }
    return false
  },
  entityify: function(e) {
  	var t={"<":"<",">":">","&":"&",'"':""};
  	return e.replace(/[<>&"]/g,function(e){
  		return t[e]
  	})
  },
  parseApiDate: function(e, t) {
    var n = /([0-9]+)-([0-9]+)-([0-9]+)T([0-9]+):([0-9]+):([0-9]+)Z/;
    var r = n.exec(e);
    if (r === null) {
      Z.debug("error parsing api date: " + e, 1);
      return null
    } else {
      t = new Date(Date.UTC(r[1], r[2] - 1, r[3], r[4], r[5], r[6]));
      return t
    }
    return t
  },
  compareObs: function(e, t, n) {
    var r = n;
    var i = false;
    var s = [];
    if (n === undefined) {
      r = e;
      i = true
    }
    J.each(r, function(n, r) {
      var o = r;
      if (i)
        o = n;
      if ( typeof e[n] == "object") {
        if (Zotero.utils.compareObs(e[o], t[o]).length) {
          s.push(o)
        }
      } else {
        if (e[o] != t[o]) {
          s.push(o)
        }
      }
    });
    return s
  },
  translateMimeType: function(e) {
    switch(e) {
      case"text/html":
        return "html";
      case"application/pdf":
      case"application/x-pdf":
      case"application/acrobat":
      case"applications/vnd.pdf":
      case"text/pdf":
      case"text/x-pdf":
        return "pdf";
      case"image/jpg":
      case"image/jpeg":
        return "jpg";
      case"image/gif":
        return "gif";
      case"application/msword":
      case"application/doc":
      case"application/vnd.msword":
      case"application/vnd.ms-word":
      case"application/winword":
      case"application/word":
      case"application/x-msw6":
      case"application/x-msword":
        return "doc";
      case"application/vnd.oasis.opendocument.text":
      case"application/x-vnd.oasis.opendocument.text":
        return "odt";
      case"video/flv":
      case"video/x-flv":
        return "flv";
      case"image/tif":
      case"image/tiff":
      case"image/tif":
      case"image/x-tif":
      case"image/tiff":
      case"image/x-tiff":
      case"application/tif":
      case"application/x-tif":
      case"application/tiff":
      case"application/x-tiff":
        return "tiff";
      case"application/zip":
      case"application/x-zip":
      case"application/x-zip-compressed":
      case"application/x-compress":
      case"application/x-compressed":
      case"multipart/x-zip":
        return "zip";
      case"video/quicktime":
      case"video/x-quicktime":
        return "mov";
      case"video/avi":
      case"video/msvideo":
      case"video/x-msvideo":
        return "avi";
      case"audio/wav":
      case"audio/x-wav":
      case"audio/wave":
        return "wav";
      case"audio/aiff":
      case"audio/x-aiff":
      case"sound/aiff":
        return "aiff";
      case"text/plain":
        return "plain text";
      case"application/rtf":
        return "rtf";
      default:
        return e
    }
  }
};
Zotero.url.itemHref = function(e) {
  var t = "";
  var n = e.owningLibrary;
  t += n.libraryBaseWebsiteUrl + "/itemKey/" + e.itemKey;
  return t
};
Zotero.url.attachmentDownloadLink = function(e) {
  var t = "";
  if (e.links["enclosure"]) {
    var n = e.links["enclosure"]["href"].substr(-4, 4);
    if (n == "view") {
      t += '<a href="' + Zotero.config.baseWebsiteUrl + Zotero.config.nonparsedBaseUrl + "/" + e.itemKey + "/file/view" + '">' + "View Snapshot</a>"
    } else {
      var r = Zotero.utils.translateMimeType(e.links["enclosure"].type);
      var i = e.links["enclosure"];
      var s = parseInt(i["length"], 10);
      var o = "" + s + " B";
      if (s > 1073741824) {
        o = "" + (s / 1073741824).toFixed(1) + " GB"
      } else if (s > 1048576) {
        o = "" + (s / 1048576).toFixed(1) + " MB"
      } else if (s > 1024) {
        o = "" + (s / 1024).toFixed(1) + " KB"
      }
      Z.debug(r);
      t += '<a href="' + Zotero.config.baseWebsiteUrl + Zotero.config.nonparsedBaseUrl + "/" + e.itemKey + "/file" + '">';
      if (r == "undefined" || r === "" || typeof r == "undefined") {
        t += o + "</a>"
      } else {
        t += r + ", " + o + "</a>"
      }
      return t
    }
  }
  return t
};
Zotero.url.attachmentDownloadUrl = function(e) {
  var t = "";
  if (e.links["enclosure"]) {
    t = Zotero.config.baseWebsiteUrl + Zotero.config.nonparsedBaseUrl + "/" + e.itemKey + "/file";
    var n = e.links["enclosure"]["href"].substr(-4, 4);
    if (n == "view") {
      t += "/view"
    }
  } else if (e.linkMode == 2 || e.linkMode == 3) {
    if (e.apiObj["url"]) {
      t = e.apiObj["url"]
    }
  }
  return t
};
Zotero.url.attachmentFileDetails = function(e) {
  if (!e.links["enclosure"])
    return "";
  var t = Zotero.utils.translateMimeType(e.links["enclosure"].type);
  var n = e.links["enclosure"];
  var r = "";
  if (n["length"]) {
    var i = parseInt(n["length"], 10);
    r = "" + i + " B";
    if (i > 1073741824) {
      r = "" + (i / 1073741824).toFixed(1) + " GB"
    } else if (i > 1048576) {
      r = "" + (i / 1048576).toFixed(1) + " MB"
    } else if (i > 1024) {
      r = "" + (i / 1024).toFixed(1) + " KB"
    }
    return "(" + t + ", " + r + ")"
  } else {
    return "(" + t + ")"
  }
};
Zotero.url.exportUrls = function(e) {
  Z.debug("Zotero.url.exportUrls");
  var t = {};
  var n = {};
  J.each(Zotero.config.exportFormats, function(r, i) {
    n = J.extend(e, {
      format: i
    });
    t[i] = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString({
      format: i,
      limit: "25"
    })
  });
  Z.debug(t);
  return t
};
Zotero.url.snapshotViewLink = function(e) {
  return Zotero.ajax.apiRequestUrl({
    target: "item",
    targetModifier: "viewsnapshot",
    libraryType: e.owningLibrary.libraryType,
    libraryID: e.owningLibrary.libraryID,
    itemKey: e.itemKey
  })
};
Zotero.file = {};
Zotero.file.getFileInfo = function(e, t) {
  if ( typeof FileReader != "function") {
    throw "FileReader not supported"
  }
  var n = {};
  var r = new FileReader;
  r.onload = function(i) {
    Z.debug("Zotero.file.getFileInfo onloadFunc");
    var s = i.target.result;
    Zotero.debug(s);
    var o = new SparkMD5;
    o.appendBinary(s);
    n.md5 = o.end();
    Z.debug("md5:" + n.md5, 4);
    n.filename = e.name;
    n.filesize = e.size;
    n.mtime = Date.now();
    n.contentType = e.type;
    n.reader = r;
    t(n)
  };
  r.readAsBinaryString(e)
};
Zotero.file.uploadFile = function(e, t) {
  Z.debug("Zotero.file.uploadFile", 3);
  Z.debug(e, 4);
  var n = new FormData;
  J.each(e.params, function(e, t) {
    n.append(e, t)
  });
  n.append("file", t);
  var r = new XMLHttpRequest;
  r.open("POST", e.url, true);
  r.send(n);
  return r
};
Zotero.Filestorage = function() {
  Z.debug("Zotero.Filestorage", 3);
  var e = this;
  this.filer = new Filer;
  this.fileEntries = {};
  Z.debug("Filer created", 3);
  this.filer.init({
    persistent: true,
    size: 1024 * 1024 * 128
  }, J.proxy(function(t) {
    Z.debug("Filesystem created");
    e.fs = t;
    e.listOfflineFiles()
  }, this));
  Z.debug("returning Zotero.Filestorage")
};
Zotero.Filestorage.prototype.getSavedFile = function(e) {
  Zotero.debug("Zotero.Filestorage.getSavedFile", 3);
  var t = this;
  var n = t.filer;
  var r = new J.Deferred;
  n.open(t.fileEntries[e], J.proxy(function(e) {
    Z.debut("filer.open callback");
    r.resolve(e)
  }, this), this.handleError);
  return r
};
Zotero.Filestorage.prototype.getSavedFileObjectUrl = function(e) {
  Z.debug("Zotero.Filestorage.getSavedFileObjectUrl", 3);
  var t = this;
  var n = this.filer;
  var r = new J.Deferred;
  n.open(t.fileEntries[e], J.proxy(function(e) {
    Z.debug("filer.open callback");
    r.resolve(Util.fileToObjectURL(e))
  }, this), this.handleError);
  return r
};
Zotero.Filestorage.prototype.listOfflineFiles = function() {
  Z.debug("Zotero.Filestorage.listOfflineFiles");
  var e = this;
  var t = e.filer;
  var n = new J.Deferred;
  t.ls("/", J.proxy(function(t) {
    Z.debug(t);
    Zotero.offlineFilesEntries = t;
    var r = [];
    J.each(t, function(t, n) {
      e.fileEntries[n.name] = n;
      r.push(n.name)
    });
    n.resolve(r)
  }, this));
  return n
};
Zotero.Filestorage.prototype.handleError = function(e) {
  Zotero.debug("----------------Filestorage Error encountered", 2);
  Zotero.debug(e, 2)
};
var J = jQuery.noConflict();
jQuery(document).ready(function() {
  Z.debug("*&^*&^*&^*&^*&^*&^*&^*&^*&^ DOM READY *&^*&^*&^*&^*&^*&^*&^*&^*&^", 3);
  Zotero.init()
});
Zotero.prefs = {
  debug_level: 3,
  debug_log: false,
  debug_mock: false,
  javascript_enabled: false,
  library_listShowFields: ["title", "creator", "dateModified"]
};
Zotero.init = function() {
  Z.debug("Zotero init", 3);
  Zotero.pages.base.init();
  if (undefined !== window.zoterojsClass) {
    try {
      Zotero.pages[zoterojsClass].init()
    } catch(e) {
      Z.debug("Error running page specific init for " + zoterojsClass, 1)
    }
  }
  Zotero.nav.parseUrlVars();
  if ( typeof zoteroData == "undefined") {
    zoteroData = {}
  }
  Zotero.loadConfig(zoteroData);
  Zotero.config.startPageTitle = document.title;
  var t;
  if ( typeof sessionStorage == "undefined") {
    t = {}
  } else {
    t = sessionStorage
  }
  Zotero.cache = new Zotero.Cache(t);
  var n = "en-US";
  if (zoteroData.locale) {
    n = zoteroData.locale
  }
  var r = J("body").hasClass("library");
  if (r) {
    Zotero.config.librarySettings.libraryUserSlug = zoteroData.libraryUserSlug;
    Zotero.config.librarySettings.libraryUserID = zoteroData.libraryUserID;
    Zotero.config.librarySettings.allowEdit = zoteroData.allowEdit;
    if (zoteroData.library_listShowFields) {
      Zotero.prefs.library_listShowFields = zoteroData.library_listShowFields.split(",")
    }
    if (zoteroData.library_showAllTags) {
      Zotero.prefs.library_showAllTags = zoteroData.library_showAllTags
    }
    if (zoteroData.library_defaultSort) {
      var i = zoteroData.library_defaultSort.split(",");
      if (i[0]) {
        Zotero.config.userDefaultApiArgs["order"] = i[0]
      }
      if (i[1]) {
        Zotero.config.userDefaultApiArgs["sort"] = i[1]
      }
      Zotero.config.defaultSortColumn = Zotero.config.userDefaultApiArgs["sort"];
      if (Zotero.config.defaultSortColumn == "undefined")
        Zotero.config.defaultSortColumn = "title"
    }
    if (Zotero.config.pageClass == "user_library" || Zotero.config.pageClass == "group_library" || Zotero.config.pageClass == "my_library") {
      Zotero.Item.prototype.getItemTypes(n);
      Zotero.Item.prototype.getItemFields(n);
      Zotero.Item.prototype.getCreatorFields(n);
      Zotero.Item.prototype.getCreatorTypes()
    }
  }
  Zotero.ui.init.all();
  J.ajaxSettings.traditional = true;
  if (Zotero.nav.getUrlVar("proxy") == "false") {
    Zotero.config.proxy = false
  }
  if (Zotero.prefs.server_javascript_enabled === false) {
    Zotero.prefs.javascript_enabled = true;
    document.cookie = "zoterojsenabled=1; expires=; path=/"
  }
  History.Adapter.bind(window, "statechange", function() {
    if (Zotero.nav._ignoreStateChange > 0) {
      Zotero.nav._ignoreStateChange--;
      Zotero.nav.urlAlwaysCallback();
      Z.debug("Statechange ignored " + Zotero.nav._ignoreStateChange, 3)
    } else {
      Zotero.nav.urlChangeCallback()
    }
  });
  Zotero.nav.urlChangeCallback()
};
Zotero.loadConfig = function(e) {
  Zotero.config.userDefaultApiArgs = J.extend({}, Zotero.config.defaultApiArgs);
  Zotero.config.userDefaultApiArgs["limit"] = 25;
  if (e.mobile) {
    Zotero.config.mobile = true;
    Zotero.state.mobilePageFirstLoad = true
  }
  if ( typeof zoterojsClass !== "undefined") {
    Zotero.config.pageClass = zoterojsClass
  } else {
    Zotero.config.pageClass = "default"
  }
  if (e.itemsPathString) {
    Zotero.config.librarySettings.itemsPathString = e.itemsPathString;
    Zotero.config.nonparsedBaseUrl = e.itemsPathString
  } else if (e.nonparsedBaseUrl) {
    Zotero.config.nonparsedBaseUrl = e.nonparsedBaseUrl
  } else {
    Zotero.config.librarySettings.itemsPathString = Zotero.config.baseWebsiteUrl;
    Zotero.config.nonparsedBaseUrl = Zotero.config.baseWebsiteUrl
  }
  if (e.locale) {
    Zotero.config.locale = e.locale
  }
  if ( typeof Globalize !== "undefined") {
    Globalize.culture(Zotero.config.locale)
  }
  if (e.apiKey) {
    Zotero.config.apiKey = e.apiKey
  }
  if (e.loggedInUserID) {
    Zotero.config.loggedInUserID = e.loggedInUserID;
    Zotero.config.loggedIn = true
  } else {
    Zotero.config.loggedIn = false
  }
};
Zotero.nav = {};
Zotero.nav._ignoreStateChange = 0;
Zotero.nav.urlvars = {
  q: {},
  f: {},
  pathVars: {},
  startUrl: ""
};
Zotero.nav.replacePush = false;
Zotero.nav.startUrl = "";
Zotero.nav.currentHref = "";
Zotero.nav.pushTag = function(e) {
  Z.debug("Zotero.nav.pushTag", 3);
  if (Zotero.nav.urlvars.pathVars["tag"]) {
    if (Zotero.nav.urlvars.pathVars["tag"] instanceof Array) {
      Zotero.nav.urlvars.pathVars["tag"].push(e)
    } else {
      var t = Zotero.nav.urlvars.pathVars["tag"];
      Zotero.nav.urlvars.pathVars["tag"] = [t, e]
    }
  } else {
    Zotero.nav.urlvars.pathVars["tag"] = [e]
  }
  return
};
Zotero.nav.popTag = function(e) {
  Z.debug("Zotero.nav.popTag", 3);
  if (!Zotero.nav.urlvars.pathVars["tag"]) {
    return
  } else if (Zotero.nav.urlvars.pathVars["tag"] instanceof Array) {
    var t = Zotero.nav.urlvars.pathVars["tag"].filter(function(t, n, r) {
      return t != e
    });
    Zotero.nav.urlvars.pathVars["tag"] = t;
    return
  } else if (Zotero.nav.urlvars.pathVars["tag"] == e) {
    Zotero.nav.urlvars.pathVars["tag"] = [];
    return
  }
};
Zotero.nav.toggleTag = function(e) {
  Z.debug("Zotero.nav.toggleTag", 3);
  if (!Zotero.nav.urlvars.pathVars["tag"]) {
    Z.debug("Zotero.nav.urlvars.pathVars['tag'] evaluates false");
    Z.debug(Zotero.nav.urlvars.pathVars);
    Zotero.nav.urlvars.pathVars["tag"] = [e];
    return
  } else if (J.isArray(Zotero.nav.urlvars.pathVars["tag"])) {
    Z.debug("pathVars tag is array");
    if (J.inArray(e, Zotero.nav.urlvars.pathVars["tag"]) != -1) {
      Z.debug("tag already present, removing", 3);
      var t = Zotero.nav.urlvars.pathVars["tag"].filter(function(t, n, r) {
        return t != e
      });
      Zotero.nav.urlvars.pathVars["tag"] = t;
      return
    } else {
      Z.debug("pushing tag", 3);
      Zotero.nav.urlvars.pathVars["tag"].push(e);
      return
    }
  } else if (Zotero.nav.urlvars.pathVars["tag"] == e) {
    Zotero.nav.urlvars.pathVars["tag"] = [];
    return
  } else if ( typeof Zotero.nav.urlvars.pathVars["tag"] == "string") {
    var n = Zotero.nav.urlvars.pathVars["tag"];
    Zotero.nav.urlvars.pathVars["tag"] = [n, e];
    return
  }
  Z.debug("reached end of toggleTag with no satisfaction")
};
Zotero.nav.unsetUrlVar = function(e) {
  Z.debug("Zotero.nav.unsetUrlVar", 3);
  var t = Zotero.nav.urlvars.pathVars;
  if (t[e]) {
    delete t[e]
  }
};
Zotero.nav.clearUrlVars = function(e) {
  Z.debug("Zotero.nav.clearUrlVars", 3);
  Z.debug(e);
  if (!e) {
    e = []
  }
  var t = Zotero.nav.urlvars.pathVars;
  J.each(t, function(n, r) {
    if (J.inArray(n, e) == -1) {
      Z.debug(n + " not in except array - deleting from pathVars");
      delete t[n]
    }
  })
};
Zotero.nav.parseUrlVars = function() {
  Z.debug("Zotero.nav.parseUrlVars", 3);
  Zotero.nav.urlvars = {
    q: J.deparam(J.param.querystring()),
    f: Zotero.nav.parseFragmentVars(),
    pathVars: Zotero.nav.parsePathVars()
  }
};
Zotero.nav.parsePathVars = function(e) {
  Z.debug("Zotero.nav.parsePathVars");
  if (!e) {
    var t = History.getState();
    e = t.cleanUrl
  }
  var n = Zotero.config.nonparsedBaseUrl;
  var r = [];
  var i = new RegExp(".*" + n + "/?");
  var s = e.replace(i, "");
  Z.debug(s);
  r = s.split("/");
  Z.debug(r);
  var o = {};
  for (var u = 0; u < r.length - 1; u = u + 2) {
    var a = o[r[u]];
    Z.debug("pathVar: " + a);
    if (a) {
      Z.debug("pathVar already has value");
      if ( a instanceof Array) {
        a.push(decodeURIComponent(r[u + 1]))
      } else {
        var f = [a];
        f.push(decodeURIComponent(r[u + 1]));
        a = f
      }
    } else {
      Z.debug("pathVar does not have value");
      a = decodeURIComponent(r[u + 1])
    }
    o[r[u]] = a
  }
  if (o["itemkey"]) {
    var l = o["itemkey"];
    o["itemKey"] = l;
    delete o["itemkey"]
  }
  Z.debug(o);
  return o
};
Zotero.nav.parseFragmentVars = function() {
  var e = {};
  var t = J.param.fragment();
  var n = t.split("/");
  for (var r = 0; r < n.length - 1; r = r + 2) {
    e[n[r]] = n[r + 1]
  }
  return e
};
Zotero.nav.buildUrl = function(e, t) {
  if ( typeof t === "undefined") {
    t = false
  }
  var n = Zotero.config.nonparsedBaseUrl + "/";
  var r = [];
  J.each(e, function(e, t) {
    if (!t) {
      return
    } else if ( t instanceof Array) {
      J.each(t, function(t, n) {
        r.push(e + "/" + encodeURIComponent(n))
      })
    } else {
      r.push(e + "/" + encodeURIComponent(t))
    }
  });
  r.sort();
  var i = r.join("/");
  var s = n + i;
  return s
};
Zotero.nav.mutateUrl = function(e, t) {
  if (!e) {
    e = {}
  }
  if (!t) {
    t = []
  }
  var n = J.extend({}, Zotero.nav.urlvars.pathVars);
  J.each(e, function(e, t) {
    n[e] = t
  });
  J.each(t, function(e, t) {
    delete n[t]
  });
  var r = Zotero.nav.buildUrl(n, false);
  return r
};
Zotero.nav.pushState = function(e, t) {
  Z.debug("Zotero.nav.pushState", 3);
  var n = window.History;
  Zotero.ui.saveFormData();
  var r = n.getState();
  r = r["data"];
  var i = {};
  if (t) {
    i = t
  }
  urlvars = Zotero.nav.urlvars.pathVars;
  var s = Zotero.nav.buildUrl(urlvars, false);
  if (Zotero.nav.replacePush === true) {
    Zotero.nav.replacePush = false;
    Zotero.nav.ignoreStateChange();
    n.replaceState(i, Zotero.config.startPageTitle, s)
  } else {
    n.pushState(i, Zotero.config.startPageTitle, s)
  }
  if (e) {
    Zotero.nav.urlChangeCallback({
      type: "popstate",
      originalEvent: {
        state: urlvars
      }
    })
  }
  document.title = Zotero.config.startPageTitle;
  Zotero.debug("leaving pushstate", 3)
};
Zotero.nav.replaceState = function(e, t) {
  Z.debug("Zotero.nav.replaceState", 3);
  Zotero.ui.saveFormData();
  if ( typeof e == "undefined") {
    e = false
  }
  var n = null;
  if (t) {
    n = t
  }
  urlvars = Zotero.nav.urlvars.pathVars;
  var r = Zotero.nav.buildUrl(urlvars, false);
  Zotero.state.ignoreStatechange = true;
  Zotero.nav.ignoreStateChange();
  History.replaceState(n, null, r)
};
Zotero.nav.updateStateTitle = function(e) {
  Zotero.debug("Zotero.nav.updateStateTitle", 3);
  document.title = e
};
Zotero.nav.updateStatePageID = function(e) {
  Z.debug("Zotero.nav.updateStatePageID " + e, 3);
  var t = History.getState();
  var n = t.data;
  if (e === null || e === undefined) {
    e = ""
  }
  n["_zpageID"] = e;
  History.replaceState(n, t.title, t.url);
  Zotero.state.ignoreStatechange = false
};
Zotero.nav.getUrlVar = function(e) {
  if (Zotero.nav.urlvars.pathVars.hasOwnProperty(e) && Zotero.nav.urlvars.pathVars[e] !== "") {
    return Zotero.nav.urlvars.pathVars[e]
  } else if (Zotero.nav.urlvars.f.hasOwnProperty(e)) {
    return Zotero.nav.urlvars.f[e]
  } else if (Zotero.nav.urlvars.q.hasOwnProperty(e)) {
    return Zotero.nav.urlvars.q[e]
  }
  return undefined
};
Zotero.nav.setUrlVar = function(e, t) {
  Zotero.nav.urlvars.pathVars[e] = t
};
Zotero.nav.getUrlVars = function() {
  var e = J.deparam(J.param.querystring());
  return J.extend(true, {}, Zotero.nav.urlvars.pathVars, e, J.deparam(J.param.fragment()))
};
Zotero.nav.setFragmentVar = function(e, t) {
  Zotero.nav.urlvars.f[e] = t
};
Zotero.nav.setQueryVar = function(e, t) {
  if (t === "") {
    delete Zotero.nav.urlvars.q[e]
  } else {
    Zotero.nav.urlvars.q[e] = t
  }
};
Zotero.nav.addQueryVar = function(e, t) {
  if (Zotero.nav.urlvars.q.hasOwnProperty(e)) {
    if (J.isArray(Zotero.nav.urlvars.q[e])) {
      Zotero.nav.urlvars.q[e].push(t)
    } else {
      var n = [Zotero.nav.urlvars.q[e], t];
      Zotero.nav.urlvars.q[e] = n
    }
  } else {
    Zotero.nav.urlvars.q[e] = t
  }
  return Zotero.nav.urlvars.q[e]
};
Zotero.nav.updateFragment = function(e) {
  Z.debug("updateFragment", 3);
  J.bbq.pushState(e, 0)
};
Zotero.nav.urlChangeCallback = function(e, t) {
  Z.debug("////////////////////urlChangeCallback//////////////////", 3);
  Z.debug("new href, updating href and processing urlchange", 3);
  Zotero.nav.currentHref = History.getState().cleanUrl;
  var n = History.getState().data;
  if (Zotero.config.mobile) {
  }
  Zotero.nav.parseUrlVars();
  J(".ajaxload").each(function(e, t) {
    try {
      Z.debug("ajaxload element found", 3);
      Z.debug(J(t).attr("data-function"), 3);
      var n = J(t).data("prefunction");
      if (n) {
        Zotero.callbacks[n](t)
      }
      if (J(t).data("loading")) {
        J(t).data("queuedWaiting", true)
      } else {
        Zotero.nav.callbackAssignedFunction(t)
      }
    } catch(r) {
      Z.debug("Couldn't call ajaxload specified function", 1);
      Z.debug(r, 1)
    }
  });
  Z.debug("<<<<<<<<<<<<<<<<<<<<<<<<urlChangeCallback Done>>>>>>>>>>>>>>>>>>>>>", 3)
};
Zotero.nav.urlAlwaysCallback = function(e) {
  Z.debug("_____________urlAlwaysCallback________________", 3);
  Zotero.nav.parseUrlVars();
  J(".ajaxload.always").each(function(e, t) {
    try {
      Z.debug("ajaxload element found", 3);
      Z.debug(J(t).attr("data-function"), 3);
      var n = J(t).data("prefunction");
      if (n) {
        Zotero.callbacks[n](t)
      }
      if (J(t).data("loading")) {
        J(t).data("queuedWaiting", true)
      } else {
        Zotero.nav.callbackAssignedFunction(t)
      }
    } catch(r) {
      Z.debug("Couldn't call ajaxload specified function", 1);
      Z.debug(r, 1)
    }
  })
};
Zotero.nav.callbackAssignedFunction = function(e) {
  var t = J(e).data("function");
  if (t) {
    Zotero.callbacks[t](e)
  }
};
Zotero.nav.flagLoading = function(e) {
  J(e).data("loading", true)
};
Zotero.nav.doneLoading = function(e) {
  Z.debug("Zotero.nav.doneLoading", 3);
  J(e).data("loading", false);
  if (J(e).data("queuedWaiting")) {
    J(e).data("queuedWaiting", false);
    Zotero.nav.callbackAssignedFunction(e)
  }
};
Zotero.nav._ignoreTimer = null;
Zotero.nav.ignoreStateChange = function() {
  Z.debug("Zotero.nav.ignoreStateChange", 3);
  if (Zotero.nav._ignoreTimer) {
    window.clearTimeout(Zotero.nav._ignoreTimer)
  }
  Zotero.nav._ignoreStateChange++;
  Z.debug(Zotero.nav._ignoreStateChange, 4);
  Zotero.nav._ignoreTimer = window.setTimeout(function() {
    Z.debug("clear ignoreState semaphore", 3);
    Zotero.nav._ignoreStateChange = 0
  }, 500);
  return
};
Zotero.nav.proxyWrapper = function(e, t) {
  if (Zotero.config.proxy) {
    if (!t) {
      t = "GET"
    }
    return "/proxyrequest?requestMethod=" + t + "&requestUrl=" + encodeURIComponent(e)
  } else {
    return e
  }
};
J("#js-message").ajaxError(Zotero.nav.error);
Zotero.pages = {
  baseURL: baseURL,
  staticPath: staticPath,
  baseDomain: baseDomain,
  staticLoadUrl: window.location.pathname,
  base: {
    init: function() {
      if ( typeof Zotero != "undefined" && !Zotero.config.librarySettings.mobile || typeof Zotero == "undefined") {
        this.tagline();
        this.setupSearch();
        this.setupNav();
        J("#sitenav .toggle").click(this.navMenu)
      }
      J(".support-menu-expand-section").hide();
      J(".support-menu-section h2").live("click", function() {
        J(this).siblings(".support-menu-expand-section").slideToggle()
      })
    },
    tagline: function() {
      var e = ["See it. Save it. Sort it. Search it. Cite it.", "Leveraging the long tail of scholarship.", "A personal research assistant. Inside your browser.", "Goodbye 3x5 cards, hello Zotero.", "Citation management is only the beginning.", "The next-generation research tool.", "Research, not re-search", "The web now has a wrangler."];
      var t = Math.floor(Math.random() * e.length);
      J("#tagline").text(e[t])
    },
    setupSearch: function() {
      var e = "support";
      var t = "";
      if (undefined !== window.zoterojsSearchContext) {
        e = zoterojsSearchContext
      }
      switch(e) {
        case"people":
          t = "Search for people";
          break;
        case"group":
          t = "Search for groups";
          break;
        case"documentation":
          t = "Search documentation";
          break;
        case"library":
          t = "Search Library";
          break;
        case"grouplibrary":
          t = "Search Library";
          break;
        case"support":
          t = "Search support";
          break;
        case"forums":
          t = "Search forums";
          break;
        default:
          t = "Search support";
          break
      }
      J("#header-search-query").val("");
      J("#header-search-query").attr("placeholder", t);
      if (e != "library" && e != "grouplibrary" && e != "forums") {
        J("#simple-search").live("submit", function(n) {
          n.preventDefault();
          var r = Zotero.pages.baseDomain + "/search/#type/" + e;
          var i = J("#header-search-query").val();
          if (i !== "" && i != t) {
            r = r + "/q/" + encodeURIComponent(i)
          }
          location.href = r;
          return false
        })
      } else if (e != "forums") {
        J("#simple-search").live("submit", function(e) {
          e.preventDefault();
          Zotero.nav.clearUrlVars(["collectionKey", "tag", "q"]);
          var t = J("#header-search-query").val();
          if (t !== "" || Zotero.nav.getUrlVar("q")) {
            Zotero.nav.urlvars.pathVars["q"] = t;
            Zotero.nav.pushState()
          }
          return false
        })
      }
    },
    setupNav: function() {
      var e = "";
      if (undefined !== window.zoterojsSearchContext) {
        e = zoterojsSearchContext;
        if (e == "support") {
          e = ""
        }
      }
      if (location.pathname == "/" && location.href.search("forums.") < 0) {
        e = "home"
      }
      J("#" + e + "-tab").addClass("selected-nav")
    }
  },
  extension_style: {
    init: function() {
      var e = Zotero.pages.baseURL + "/extension/autocomplete/";
      J("#styleSearch").autocomplete({
        url: e,
        matchContains: true,
        mustMatch: true,
        cacheLength: 1,
        extraParams: {
          type: "style"
        },
        formatItem: function(e, t, n, r) {
          return e[0]
        }
      });
      J("#styleSearch").autocomplete("result", function(e, t, n) {
        location.href = Zotero.pages.baseURL + "/extension/style/" + t[1]
      })
    }
  },
  settings_cv: {
    init: function() {
      J(".cv-section-actions").buttonset();
      J(".cv-move-up").button("option", "icons", {
        primary: "ui-icon-circle-arrow-n"
      }).button("option", "text", false);
      J(".cv-move-down").button("option", "icons", {
        primary: "ui-icon-circle-arrow-s"
      }).button("option", "text", false);
      J(".cv-delete").button("option", "icons", {
        primary: "sprite-trash"
      }).button("option", "text", false);
      J("#cv-sections .cv-delete").live("click", function(e) {
        if (confirm("Are you sure you want to delete this section")) {
          J(this).closest("li").remove();
          return false
        }
      });
      J("#cv-sections .cv-insert-section").live("click", function(e) {
        sectionCount = J("#cv-sections li").length;
        newSection = J("#cv-section-template li").clone(true);
        newTextareaID = "cv_" + (sectionCount + 1) + "_text";
        newSection.children("textarea").attr("id", newTextareaID).addClass("tinymce").addClass("nolinks");
        J(this).closest("li").after(newSection);
        J(".cv-section-actions").buttonset();
        J(".cv-move-up").button("option", "icons", {
          primary: "ui-icon-circle-arrow-n"
        }).button("option", "text", false);
        J(".cv-move-down").button("option", "icons", {
          primary: "ui-icon-circle-arrow-s"
        }).button("option", "text", false);
        J(".cv-delete").button("option", "icons", {
          primary: "sprite-trash"
        }).button("option", "text", false);
        tinyMCE.execCommand("mceAddControl", true, newTextareaID);
        return false
      });
      J("#cv-sections .cv-insert-collection").live("click", function(e) {
        sectionCount = J("#cv-sections li").length;
        newSection = J("#cv-collection-template li").clone(true);
        newcollectionKey = "cv_" + (sectionCount + 1) + "_collection";
        newHeadingID = "cv_" + (sectionCount + 1) + "_heading";
        newSection.children("select").attr("id", newcollectionKey);
        newSection.children("select").attr("name", newcollectionKey);
        newSection.children(".cv-heading").attr("name", newHeadingID);
        J(this).closest("li").after(newSection);
        J(".cv-section-actions").buttonset();
        J(".cv-move-up").button("option", "icons", {
          primary: "ui-icon-circle-arrow-n"
        }).button("option", "text", false);
        J(".cv-move-down").button("option", "icons", {
          primary: "ui-icon-circle-arrow-s"
        }).button("option", "text", false);
        J(".cv-delete").button("option", "icons", {
          primary: "sprite-trash"
        }).button("option", "text", false);
        return false
      });
      J("#cv-sections .cv-move-down").live("click", function(e) {
        if (J(this).closest("li").find("textarea").length > 0) {
          textareaId = J(this).closest("li").find("textarea")[0].id;
          Z.debug("textareaId:" + textareaId);
          var t = tinymce.get(textareaId);
          t.save();
          tinymce.execCommand("mceRemoveControl", true, textareaId);
          J(this).closest("li").next().after(J(this).closest("li"));
          tinymce.execCommand("mceAddControl", true, textareaId)
        } else {
          J(this).closest("li").next().after(J(this).closest("li"))
        }
        return false
      });
      J("#cv-sections .cv-move-up").live("click", function(e) {
        if (J(this).closest("li").find("textarea").length > 0) {
          textareaId = J(this).closest("li").find("textarea")[0].id;
          Z.debug("textareaId:" + textareaId);
          var t = tinymce.get(textareaId);
          t.save();
          tinymce.execCommand("mceRemoveControl", true, textareaId);
          J(this).closest("li").prev().before(J(this).closest("li"));
          tinymce.execCommand("mceAddControl", true, textareaId)
        } else {
          J(this).closest("li").prev().before(J(this).closest("li"))
        }
        return false
      });
      J("#cv-submit").click(function(e) {
        J("#cv-sections li").each(function(e) {
          var t;
          if (J(this).attr("class") == "cv-freetext") {
            t = J(this).children(".cv-heading").attr("name", "cv_" + (e + 1) + "_heading");
            if (t.val() == "Enter a section name") {
              t.val("")
            }
            J(this).children(".cv-text").attr("name", "cv_" + (e + 1) + "_text")
          } else if (J(this).attr("class") == "cv-collection") {
            t = J(this).children(".cv-heading").attr("name", "cv_" + (e + 1) + "_heading");
            if (t.val() == "Enter a section name") {
              t.val("")
            }
            J(this).children("select.cv-collection").attr("name", "cv_" + (e + 1) + "_collection")
          }
        })
      });
      Zotero.ui.init.tinyMce("nolinks");
      J("li input").inputLabel("Enter a section name", {
        color: "#d5d5d5"
      })
    }
  },
  settings_account: {
    init: function() {
      J("input#username").after("<label id='slugpreview'>Profile URL: " + Zotero.pages.baseDomain + "/" + Zotero.utils.slugify(J("input#username").val()) + "</label>");
      J("input#username").bind("keyup change", Zotero.pages.user_register.nameChange);
      parent.checkUserSlugTimeout
    },
    nameChange: function() {
      J("#slugpreview").css("color", "black");
      parent.slug = Zotero.utils.slugify(J("input#username").val());
      J("#slugpreview").text("Profile URL: " + Zotero.pages.baseDomain + "/" + parent.slug);
      clearTimeout(parent.checkUserSlugTimeout);
      parent.checkUserSlugTimeout = setTimeout("Zotero.pages.user_register.checkSlug()", 500)
    },
    checkSlug: function() {
      J.getJSON(baseURL + "/user/checkslug", {
        slug: slug
      }, function(e) {
        if (e.valid) {
          J("#slugpreview").css("color", "green")
        } else {
          J("#slugpreview").css("color", "red")
        }
      })
    }
  },
  settings_profile: {
    init: function() {
      Zotero.ui.init.tinyMce("nolinks")
    }
  },
  settings_privacy: {
    init: function() {
      if (!J("input#privacy_publishLibrary").attr("checked")) {
        J("input#privacy_publishNotes").attr("disabled", "disabled")
      }
      J("input#privacy_publishLibrary").bind("change", function() {
        if (!J("input#privacy_publishLibrary").attr("checked")) {
          J("input#privacy_publishNotes").removeAttr("checked").attr("disabled", "disabled")
        } else {
          J("input#privacy_publishNotes").removeAttr("disabled")
        }
      })
    }
  },
  settings_apikeys: {
    init: function() {
    }
  },
  settings_newkey: {
    init: function() {
      if (!J("input#library_access").prop("checked")) {
        J("input#notes_access").prop("disabled", "disabled")
      }
      J("input#library_access").bind("change", function() {
        if (!J("input#library_access").prop("checked")) {
          J("input#notes_access").prop("checked", false).prop("disabled", true);
          J("input#write_access").prop("checked", false).prop("disabled", true)
        } else {
          J("input#notes_access").prop("disabled", false);
          J("input#write_access").prop("disabled", false)
        }
      });
      J("input#name").focus();
      if (zoteroData.oauthRequest) {
        J("button#edit").closest("li").nextAll().hide();
        J("button#edit").click(function(e) {
          e.preventDefault();
          J(this).closest("li").nextAll().show()
        })
      }
      if (!J("#individual_groups").prop("checked")) {
        J("#individual_groups").closest("li").nextAll().hide()
      }
      J("#individual_groups").bind("change", function() {
        if (J("#individual_groups").prop("checked")) {
          J("#individual_groups").closest("li").nextAll().show()
        } else {
          J("#individual_groups").closest("li").nextAll().hide()
        }
      })
    }
  },
  settings_editkey: {
    init: function() {
      if (!J("#individual_groups").prop("checked")) {
        J("#individual_groups").closest("li").nextAll().hide()
      }
      J("#individual_groups").bind("change", function() {
        if (J("#individual_groups").prop("checked")) {
          J("#individual_groups").closest("li").nextAll().show()
        } else {
          J("#individual_groups").closest("li").nextAll().hide()
        }
      })
    }
  },
  settings_storage: {
    init: function() {
      selectedLevel = J("input[name=storageLevel]:checked").val();
      Zotero.pages.settings_storage.showSelectedResults(selectedLevel);
      J("input[name=storageLevel]").change(function() {
        Zotero.pages.settings_storage.showSelectedResults(J("input[name=storageLevel]:checked").val())
      });
      J("#purge-button").click(function() {
        if (confirm("You are about to remove all uploaded files associated with your personal library.")) {
          J("#confirm_delete").val("confirmed");
          return true
        } else {
          return false
        }
      })
    },
    showSelectedResults: function(e) {
      if (e == 2) {
        J("#order-result-div").html(zoteroData.orderResult2)
      } else if (e == 3) {
        J("#order-result-div").html(zoteroData.orderResult3)
      } else if (e == 4) {
        J("#order-result-div").html(zoteroData.orderResult4)
      } else if (e == 5) {
        J("#order-result-div").html(zoteroData.orderResult5)
      }
    }
  },
  settings_commons: {
    init: function() {
    }
  },
  settings_deleteaccount: {
    init: function() {
      J("button#deleteaccount").click(function() {
        if (!confirm("Are you sure you want to permanently delete you account? You will not be able to recover the account or the user name.")) {
          return false
        }
      })
    }
  },
  group_new: {
    init: function() {
      var e;
      J("input#name").keyup(function(t) {
        clearTimeout(e);
        e = setTimeout("Zotero.pages.group_new.nameChange()", 300)
      });
      J("input[name=group_type]").change(Zotero.pages.group_new.nameChange);
      J("input#name").after("<label id='slugpreview'>Group URL: " + Zotero.pages.baseDomain + "/" + "groups/" + Zotero.utils.slugify(J("input#name").val()) + "</label>")
    },
    nameChange: function() {
      J("#slugpreview").css("color", "black");
      var e = J("input[name=group_type]:checked").val();
      if (e == "Private") {
        J("#slugpreview").text("Group URL: " + Zotero.pages.baseDomain + "/" + "groups/<number>")
      } else {
        J("#slugpreview").text("Group URL: " + Zotero.pages.baseDomain + "/" + "groups/" + Zotero.utils.slugify(J("input#name").val()))
      }
      if (e != "Private") {
        var t = J("input#name").val();
        J.getJSON(baseURL + "/group/checkname/", {
          input: t
        }, function(e) {
          J("#namePreview span").text(e.slug);
          if (e.valid) {
            J("#slugpreview").css({
              color: "green"
            })
          } else {
            J("#slugpreview").css({
              color: "red"
            })
          }
          J("#namePreview img").remove()
        })
      }
    }
  },
  group_settings: {
    init: function() {
      Zotero.ui.init.tinyMce("nolinks");
      J("#deleteForm").submit(function() {
        if (confirm("This will permanently delete this group, including any items in the group library")) {
          J("#confirm_delete").val("confirmed");
          return true
        } else {
          return false
        }
      });
      J("#type-PublicOpen").click(function() {
        if (confirm("Changing a group to Public Open will remove all files from Zotero Storage")) {
          return true
        } else {
          return false
        }
      })
    }
  },
  group_library_settings: {
    init: function() {
      if (J("#type-PublicOpen").prop("checked")) {
        J("#fileEditing-admins").prop("disabled", "1");
        J("#fileEditing-members").prop("disabled", "1")
      }
      if (J("#type-Private").prop("checked")) {
        J("#libraryReading-all").prop("disabled", "1")
      }
      J("#type-PublicOpen").click(function() {
        if (confirm("Changing a group to Public Open will remove all files from Zotero Storage")) {
          J("input[name='fileEditing']").val(["none"]);
          J("#fileEditing-admins").prop("disabled", "1");
          J("#fileEditing-members").prop("disabled", "1");
          J("#libraryReading-all").prop("disabled", "");
          return true
        } else {
          return false
        }
      });
      J("#type-Private").click(function() {
        J("input[name='libraryReading']").val(["members"]);
        J("#libraryReading-all").prop("disabled", "1");
        J("#fileEditing-admins").prop("disabled", "");
        J("#fileEditing-members").prop("disabled", "")
      });
      J("#type-PublicClosed").click(function() {
        J("#fileEditing-admins").prop("disabled", "");
        J("#fileEditing-members").prop("disabled", "");
        J("#libraryReading-all").prop("disabled", "")
      })
    }
  },
  group_view: {
    init: function() {
      if (zoteroData.member == false) {
        J("#membership-button").click(Zotero.pages.group_view.joinGroup)
      } else {
        J("#membership-button").click(Zotero.pages.group_view.leaveGroup)
      }
      J("#group-message-form").hide();
      J("#new-message-link").click(function() {
        J("#group-message-form").toggle();
        return false
      });
      J(".delete-group-message-link").click(function() {
        if (confirm("Really delete message?")) {
          return true
        } else {
          return false
        }
      });
      Zotero.ui.init.tinyMce("nolinks")
    },
    joinGroup: function() {
      J("#membership-button").after("<img id='spinner' src='/static/images/theme/ajax-spinner.gif'/>");
      J("img#spinner").show();
      J.post("/groups/" + zoteroData.groupID + "/join", {
        ajax: true
      }, function(e) {
        if (e.pending === true) {
          J("#membership-button").replaceWith("Membership Pending");
          J("img#spinner").remove()
        } else if (e.success === true) {
          J("#membership-button").val("Leave Group").unbind().remove().click(Zotero.pages.group_view.leaveGroup).wrap(document.createElement("li")).appendTo("ul.group-information");
          if (zoteroData.group.type == "Private") {
            window.location = "/groups"
          }
          J("img#spinner").remove()
        } else {
          J("img#spinner").remove()
        }
      }, "json")
    },
    leaveGroup: function() {
      if (confirm("Leave group?")) {
        J("#membership-button").after("<img id='spinner' src='/static/images/theme/ajax-spinner.gif'/>");
        J("img#spinner").show();
        J.post("/groups/" + zoteroData.groupID + "/leave", {
          ajax: true
        }, function(e) {
          if (e.success === true) {
            J("#membership-button").val("Join Group").unbind().click(Zotero.pages.group_view.joinGroup);
            J("img#spinner").remove();
            J('a[title="' + zoteroData.user.username + '"]').remove();
            window.location = "/groups"
          } else {
            J("img#spinner").remove()
          }
        }, "json")
      }
    }
  },
  group_index: {
    init: function() {
      J("#screencast-link").click(function() {
        J("#content").prepend("<div id='dimmer'><div id='intro-screencast-lightbox-div'><a href='/static/videos/group_intro.flv' id='intro-screencast-lightbox'></a><a id='close-lightbox-link'>close</a></div></div>");
        Zotero.pages.index_index.player = flowplayer("intro-screencast-lightbox", Zotero.pages.staticPath + "/library/flowplayer/flowplayer-3.1.1.swf", {
          clip: {
            autoPlay: true
          }
        });
        J("#close-lightbox-link").click(function() {
          Zotero.pages.index_index.player.close();
          J("#dimmer").remove();
          J("#intro-screencast-lightbox-div").remove()
        });
        return false
      });
      try {
        if (J("#screencast-link").length > 0) {
          flowplayer("screencast-link", Zotero.pages.staticPath + "/library/flowplayer/flowplayer-3.1.1.swf")
        }
      } catch(e) {
      }
    }
  },
  user_register: {
    init: function() {
      J("input#username").after("<label id='slugpreview'>Profile URL: " + Zotero.pages.baseDomain + "/" + Zotero.utils.slugify(J("input#username").val()) + "</label>");
      J("input#username").bind("keyup change", Zotero.pages.user_register.nameChange);
      parent.checkUserSlugTimeout
    },
    nameChange: function() {
      J("#slugpreview").css("color", "black");
      parent.slug = Zotero.utils.slugify(J("input#username").val());
      J("#slugpreview").text("Profile URL: " + Zotero.pages.baseDomain + "/" + parent.slug);
      clearTimeout(parent.checkUserSlugTimeout);
      parent.checkUserSlugTimeout = setTimeout("Zotero.pages.user_register.checkSlug()", 500)
    },
    checkSlug: function() {
      J.getJSON(baseURL + "/user/checkslug", {
        slug: slug
      }, function(e) {
        if (e.valid) {
          J("#slugpreview").css("color", "green")
        } else {
          J("#slugpreview").css("color", "red")
        }
      })
    }
  },
  user_home: {
    init: function() {
      J(".home-widget-edit-link").button({
        text: false,
        icons: {
          primary: "sprite-cog"
        }
      });
      J(".home-widget-edit").buttonset();
      J(".widget-move-up").button("option", "icons", {
        primary: "ui-icon-circle-arrow-n"
      }).button("option", "text", false);
      J(".widget-move-down").button("option", "icons", {
        primary: "ui-icon-circle-arrow-s"
      }).button("option", "text", false);
      J(".widget-remove").button("option", "icons", {
        primary: "sprite-trash"
      }).button("option", "text", false);
      Zotero.pages.user_home.zoteroTips = new Array("<p>To see all the collections an item is in, hold down the â€œOptionâ€ key on Macs or the â€œControlâ€ key on Windows. This will highlight all collections that contain the selected record.</p>", "<p>Press â€+â€ (plus) on the keyboard within the collections list or items list to expand all nodes and â€-â€ (minus) to collapse them.</p>", "<p>To see how many items you have, click an item in the middle column and Select All (Command-A on OS X or Control-A on Windows). A count of selected items will appear in the right column.</p>", "<p>Can't adjust the size of the Zotero pane downwards? The tag selector probably is in the way (it has a minimum height). Close it by dragging the top of the tag selector box to the bottom of your window.</p>", "<p>Right-clicking on any metadata text field which might logically use title case allows you to toggle between title and lower cases.</p>", "<p>Holding the Shift button while dragging and dropping an item into a text document will insert a citation, rather than the usual full reference.</p>", "<p>Zotero supports the standard Firefox shortcut keys for tab/window opening: Ctrl/Cmd-click for a new tab behind, Ctrl/Cmd-Shift-click for a new tab in front, and Shift-click for a new window.</p>", "<p>Zotero has a bunch of great keyboard shortcuts. For example, you can open and close the Zotero pane with Ctrl-Alt-Z in Windows, or Cmd-Shift-Z on a Mac.</p>", "<p>You can drag and drop PDFs from your desktop to your library and right click on them to have Zotero look up its metadata in Google Scholar.</p>", "<p>Let Zotero search inside your PDFs. Just configure your search preferences.</p>", "<p>Keep track of recent additions using a saved search. Click Advanced search, select 'Dated Added' > 'is in the last' > X 'days/months' fill in the desired period and save the search. This gives you a dynamic view of new items.</p>", "<p>Tag multiple items at once. Select them, make sure the tag selector is visible in the left pane, and drag them onto the tag you want to use. The tag will be applied to all items.</p>", "<p>Display a timeline to visualize your bibliography. Select a group of references, a tag, or a collection and click 'Create timeline' from the actions menu.</p>", "<p>Click the URL or DOI field name from any item's data column to visit the item online.</p>", "<p>Drag any file from your desktop into your Zotero library to attach it to an item.</p>", "<p>Adding a series of related references to your library? Start with one item for which you fill in the fields that are the same for all items (e.g. editors, book title, year, publisher, place) and duplicate it (Right-click > Duplicate item). Then fill in the particularities.</p>", "<p>Add edited volumes or book chapters as book sections.</p>", "<p>Zotero's Word and Open Office plugins make it easy to integrate your Zotero library into your writing process.</p>");
      var e = Math.floor(Math.random() * Zotero.pages.user_home.zoteroTips.length);
      J("#zotero-tip-text").append(Zotero.pages.user_home.zoteroTips[e]);
      J("#next-tip").click(function() {
        e++;
        if (Zotero.pages.user_home.zoteroTips.length <= e) {
          e = 0
        }
        J("#zotero-tip-text").html(Zotero.pages.user_home.zoteroTips[e]);
        return false
      });
      J(".feed-page").hide();
      J(".feed-div").each(function() {
        J(this).children(".feed-page:first").show()
      });
      J(".feed-page-prev").click(function() {
        J(this).closest(".feed-page").hide().prev(".feed-page").show();
        return false
      });
      J(".feed-page-next").click(function() {
        J(this).closest(".feed-page").hide().next(".feed-page").show();
        return false
      });
      J(".zoteroLibraryWidget").each(function() {
        J(this).find("tr").slice(4).hide()
      });
      J(".home-widget-library-toggle-more-link").live("click", function(e) {
        e.preventDefault();
        J(this).closest(".zoteroLibraryWidget").find("tr").slice(4).show();
        J(this).replaceWith("<a href='#' class='home-widget-library-toggle-less-link clickable'>Less</a>")
      });
      J(".home-widget-library-toggle-less-link").live("click", function(e) {
        e.preventDefault();
        J(this).closest(".zoteroLibraryWidget").find("tr").slice(4).hide();
        J(this).replaceWith("<a href='#' class='home-widget-library-toggle-more-link clickable'>More</a>")
      });
      J(".home-widget-edit").hide();
      J(".home-widget-edit").hide();
      J(".home-widget-edit-link").click(function() {
        J(this).closest(".home-widget").find(".home-widget-edit").slideToggle();
        return false
      });
      J("#customize-homepage-forms").hide();
      J("#customize-homepage-link").click(function() {
        J("#customize-homepage-forms").slideToggle();
        return false
      });
      J(".widget-toggle").click(function() {
        J(this).parent().siblings(".home-widget-content").slideToggle();
        return false
      });
      J(".widget-remove").click(function() {
        var e = J(this).closest(".home-widget").attr("id").substr(1);
        J.post("user/updatewidgets", {
          widgetaction: "delete",
          widgetid: e,
          ajax: "1"
        }, function(e) {
        });
        J(this).closest(".home-widget").remove();
        return false
      });
      J(".widget-move-up").click(function() {
        var e = J(this).closest(".home-widget").attr("id").substr(1);
        var t = J(this).closest(".home-widget");
        var n = t.prev(".home-widget");
        if (n && n.attr("id") != "w") {
          J.post("user/updatewidgets", {
            widgetaction: "move",
            direction: "up",
            widgetid: e,
            ajax: "1"
          });
          t.insertBefore(n)
        }
      });
      J(".widget-move-down").click(function() {
        var e = J(this).closest(".home-widget").attr("id").substr(1);
        var t = J(this).closest(".home-widget");
        var n = t.next(".home-widget");
        if (n) {
          J.post("user/updatewidgets", {
            widgetaction: "move",
            direction: "down",
            widgetid: e,
            ajax: "1"
          });
          t.insertAfter(n)
        }
      });
      J("#reset-widgets").click(function() {
        if (confirm("When you reset your homepage it goes back to its original settings and any changes you've made will be lost")) {
          J.post("user/updatewidgets", {
            widgetaction: "reset",
            ajax: "1"
          }, function() {
            window.location.href = window.location.href
          })
        }
      });
      J(".zoteroFeedWidget").each(function(e, t) {
        Zotero.pages.user_home.load_widget_content(this, function() {
        });
        J(this).children(".widget-title-text").html()
      });
      J(".zoteroInvolvementWidget").each(function(e, t) {
        Zotero.pages.user_home.load_widget_content(this, function() {
        });
        J(this).children(".widget-title-text").html()
      });
      var t = J(".screencast-widget-link");
      Zotero.pages.user_home.screencastCounter = 0;
      Zotero.pages.user_home.stopcycle = false;
      t.hide().eq(Zotero.pages.user_home.screencastCounter).show();
      setTimeout(Zotero.pages.user_home.cycleScreencasts, 5e3);
      J("#screencast-next-link").click(function() {
        Zotero.pages.user_home.stopcycle = true;
        Zotero.pages.user_home.screencastCounter = (Zotero.pages.user_home.screencastCounter + 1) % t.size();
        Z.debug(Zotero.pages.user_home.screencastCounter);
        t.hide().eq(Zotero.pages.user_home.screencastCounter).show()
      });
      J("#screencast-prev-link").click(function() {
        Zotero.pages.user_home.stopcycle = true;
        Zotero.pages.user_home.screencastCounter--;
        if (Zotero.pages.user_home.screencastCounter < 0)
          Zotero.pages.user_home.screencastCounter = t.size() - 1;
        Z.debug(Zotero.pages.user_home.screencastCounter);
        t.hide().eq(Zotero.pages.user_home.screencastCounter).show()
      })
    },
    load_widget_content: function(e, t) {
      J(e).children(".home-widget-content :not(:empty)").html("<img id='spinner' src='/static/images/theme/ajax-spinner.gif'/>");
      var n = J(e).attr("id").substr(1);
      var r = "/user/widgetcontent";
      J.get(r, {
        widgetid: n
      }, function(n) {
        J(e).children(".home-widget-content").html(n);
        J(".zoteroLibraryWidget").each(t)
      })
    },
    cycleScreencasts: function() {
      if (Zotero.pages.user_home.stopcycle === false) {
        setTimeout(Zotero.pages.user_home.cycleScreencasts, 5e3)
      } else {
        return false
      }
      var e = J(".screencast-widget-link");
      Zotero.pages.user_home.screencastCounter++;
      Zotero.pages.user_home.screencastCounter = Zotero.pages.user_home.screencastCounter % e.size();
      e.hide().eq(Zotero.pages.user_home.screencastCounter).show()
    }
  },
  user_profile: {
    init: function() {
      J("#invite-button").click(function() {
        var e = J("#invite_group").val();
        J.post("/groups/inviteuser", {
          ajax: true,
          groupID: e,
          userID: zoteroData.profileUserID
        }, function(e) {
          if (e == "true") {
            J("#invited-user-list").append("<li>" + J("#invite_group > option:selected").html() + "</li>");
            J("#invite_group > option:selected").remove();
            if (J("#invite_group > option").length === 0) {
              J("#invite_group").remove();
              J("#invite-button").remove()
            }
          }
        }, "text")
      });
      J("#follow-button").click(Zotero.pages.user_profile.follow);
      J("#tag-cloud").tagcloud({
        type: "list",
        height: 200,
        sizemin: 8,
        sizemax: 18,
        colormin: "#99000",
        colormax: "#99000"
      })
    },
    follow: function() {
      var e = J("#follow-status-text");
      var t = e.html();
      e.html("<img src='/static/images/theme/ajax-spinner.1231947775.gif'/>");
      J.post("/user/follow/" + zoteroData.profileUserID, {
        ajax: true
      }, function(n) {
        if (n.status == "following") {
          J("#follow-button").val("Unfollow");
          e.html(t.replace("not following", "following"))
        } else if (n.status == "not following") {
          J("#follow-button").val("Follow");
          e.html(t.replace("following", "not following"))
        }
      }, "json")
    }
  },
  group_tag: {
    init: function() {
      J("#tag-type-select").change(function() {
        J(this).parent().submit()
      })
    }
  },
  user_item_detail: {
    init: function() {
    }
  },
  user_item_form_init: function() {
  },
  user_item_new: {
    init: function() {
    }
  },
  user_item_edit: {
    init: function() {
    }
  },
  user_library: {
    init: function() {
    }
  },
  my_library: {
    init: function() {
    }
  },
  group_item_detail: {
    init: function() {
    }
  },
  group_library: {
    init: function() {
    }
  },
  message_inbox: {
    init: function() {
      var e = J("#selector");
      J("#selector").change(function() {
        Z.debug("selector checkbox changed");
        if (J("#selector").prop("checked")) {
          J("input[type=checkbox]").prop("checked", true)
        } else {
          J("input[type=checkbox]").prop("checked", false)
        }
      });
      J("input[type=checkbox][id!=selector]").change(function() {
        Z.debug("non-selector checkbox changed");
        if (J("input[id!=selector]:checked").length > 0) {
          J("#selector").prop("checked", false)
        } else {
          J("#selector").prop("checked", true)
        }
      });
      J.each(zoteroData.messages, function(e, t) {
        if (t.read == 1) {
          J("#message-row-" + t.messageID).addClass("read-message")
        }
      });
      J("#read-button").click(function() {
        Zotero.pages.message_inbox.readStatus(true)
      });
      J("#unread-button").click(function() {
        Zotero.pages.message_inbox.readStatus(false)
      });
      J("#delete-button").click(function() {
        Zotero.pages.message_inbox.deleteMessage()
      })
    },
    readStatus: function(e) {
      var t = "";
      var n = J([]);
      J("#message-spinner").show();
      if (J("input[type=checkbox][id^=check-]:checked").length === 0) {
        return true
      }
      J("input[type=checkbox][id^=check-]:checked").each(function() {
        t += this.id.substr(6) + ",";
        if (!n)
          n = J("#message-row-" + this.id.substr(6));
        else
          n = n.add("#message-row-" + this.id.substr(6))
      });
      if (e === true) {
        J.post("/message/read", {
          ajax: true,
          messageIDs: t
        }, function(e) {
          if (e.success === true) {
            J("input[type=checkbox]").attr("checked", false);
            checked = false;
            n.addClass("read-message");
            J("#message-spinner").hide()
          } else {
            J("#message-spinner").hide();
            return false
          }
        }, "json")
      } else {
        J.post("/message/unread", {
          ajax: true,
          messageIDs: t
        }, function(e) {
          if (e.success === true) {
            J("input[type=checkbox]").attr("checked", false);
            checked = false;
            n.removeClass("read-message");
            J("#message-spinner").hide()
          } else {
            J("#message-spinner").hide();
            return false
          }
        }, "json")
      }
    },
    deleteMessage: function() {
      var e = "";
      var t = J([]);
      J("#message-spinner").show();
      J("input[type=checkbox][id^=check-]:checked").each(function() {
        e += this.id.substr(6) + ",";
        if (!t)
          t = J("#message-row-" + this.id.substr(6));
        else
          t = t.add("#message-row-" + this.id.substr(6))
      });
      J.post("/message/delete", {
        ajax: true,
        messageIDs: e
      }, function(e) {
        if (e.success === true) {
          J("input[type=checkbox]").attr("checked", false);
          checked = false;
          t.hide();
          J("#message-spinner").hide()
        } else {
          J("#js-message").html("Error deleting messages");
          J("#message-spinner").hide();
          return false
        }
      }, "json")
    }
  },
  message_view: {
    init: function() {
      if (zoteroData.read === 0) {
        var e = J('#login-links > a[href="/message/inbox"]');
        e.html(e.html().replace(zoteroData.unreadCount, zoteroData.unreadCount - 1))
      }
      J("#delete-button").click(function() {
        if (confirm("Delete Message?")) {
          J.post("/message/delete", {
            ajax: true,
            messageIDs: zoteroData.messageID
          }, function(e) {
            if (e.success === true) {
              window.location = "/message/inbox"
            }
          }, "json")
        }
      })
    }
  },
  message_compose: {
    init: function() {
      J("#contact-list").click(function() {
        J("#messageRecipient").val(J("#contact-list").val().join(", "))
      });
      Zotero.ui.init.tinyMce("nolinks")
    }
  },
  group_compose: {
    init: function() {
      Zotero.ui.init.tinyMce("nolinks")
    }
  },
  index_index: {
    init: function() {
      var e = J("div#features-lists > div");
      e.hide().filter(":first").show();
      J("ul#features-tabs a").click(function() {
        Zotero.pages.index_index.tabClick = true;
        e.hide();
        e.filter(this.hash).show();
        J("ul#features-tabs a").removeClass("selected");
        J(this).addClass("selected");
        return false
      }).filter(":first").click();
      Zotero.pages.index_index.tabCounter = 0;
      Zotero.pages.index_index.tabClick = false;
      J("#intro-screencast-small").click(function() {
        J("#content").prepend("<div id='dimmer'><div id='intro-screencast-lightbox-div'><a href='/static/videos/zotero_1_5_cast.flv' id='intro-screencast-lightbox'></a><a id='close-lightbox-link'>close</a></div></div>");
        Zotero.pages.index_index.player = flowplayer("intro-screencast-lightbox", Zotero.pages.staticPath + "/library/flowplayer/flowplayer-3.1.1.swf", {
          clip: {
            autoPlay: true
          }
        });
        J("#close-lightbox-link").click(function() {
          Zotero.pages.index_index.player.close();
          J("#dimmer").remove();
          J("#intro-screencast-lightbox-div").remove()
        });
        return false
      })
    },
    cycleTab: function() {
      if (Zotero.pages.index_index.tabClick === false) {
        setTimeout(Zotero.pages.index_index.cycleTab, 5e3)
      } else {
        return false
      }
      Zotero.pages.index_index.tabCounter++;
      Zotero.pages.index_index.tabCounter = Zotero.pages.index_index.tabCounter % 5;
      var e = J("div#features-lists > div");
      e.hide();
      e.eq(Zotero.pages.index_index.tabCounter).show();
      J("ul#features-tabs a").removeClass("selected").eq(Zotero.pages.index_index.tabCounter).addClass("selected")
    }
  },
  search_index: {
    init: function() {
      Z.debug("search_index init");
      J("#search-nav li a").click(function(e) {
        e.preventDefault();
        Z.debug("search nav link clicked");
        var t = Zotero.pages.search_index.parseSearchUrl();
        var n = J(this).attr("id").split("-")[1];
        Z.debug(n);
        Zotero.nav.urlvars.pathVars["type"] = n;
        Zotero.nav.pushState()
      });
      J(".submit-button").click(function(e) {
        e.preventDefault();
        Z.debug("search submit button clicked");
        var t = this.id.split("-")[0];
        var n = J("#" + t + "Query").val();
        if (!n || n === "") {
          return false
        }
        if (t == "support") {
          t = J("input[name=supportRefinement]:checked").val()
        }
        Zotero.nav.urlvars.pathVars["q"] = n;
        Zotero.nav.urlvars.pathVars["type"] = t;
        Zotero.nav.pushState();
        return false
      })
    },
    parseSearchUrl: function(e) {
      Z.debug("parseSearchUrl", 3);
      var t = {
        type: "",
        query: "",
        page: ""
      };
      t.type = Zotero.nav.getUrlVar("type") || "support";
      t.query = Zotero.nav.getUrlVar("q") || "";
      t.page = Zotero.nav.getUrlVar("page") || 1;
      return t
    },
    pageload: function(e) {
      Zotero.pages.search_index.clearResults();
      e = location.hash;
      if (e) {
        params = Zotero.pages.search_index.parseHash(e)
      } else {
        return
      }
      switch(params.type) {
        case"support":
        case"forums":
        case"documentation":
          J("#tabs").tabs("select", "#support");
          J("input[name=supportRefinement]").val([params.type]);
          break;
        default:
          J("#tabs").tabs("select", "#" + params.type)
      }
      if (params.type == "people" && J("#peopleLibraryOnly:checked").length) {
        params.pubLibOnly = 1
      }
      if (params.type == "forums" && J("#forumsRecent:checked").length) {
        params.recent = true
      } else {
        params.recent = false
      }
      J("#" + params.type + "Query").focus();
      J("#search-form .textinput").val(params.query);
      Zotero.pages.search_index.runSearch(params)
    },
    runSearch: function(e) {
      Z.debug("Zotero.pages.search_index.runSearch", 3);
      Z.debug(e);
      if (!e.type)
        e.type = "support";
      if (e.type == "support" || e.type == "forums" || e.type == "documentation") {
        Z.debug("google search");
        Zotero.pages.search_index.fetchGoogleResults(e)
      } else if (e.query !== "") {
        Z.debug("non-google search", 3);
        Zotero.ui.showSpinner(J("#search-spinner"));
        J("#search-spinner").show();
        J.post(baseURL + "/searchresults", e, function(e) {
          J("#search-spinner").hide();
          if (e.error) {
            J("#search-results").html("There was an error searching for groups. Please try again in a few minutes")
          } else {
            J("#search-results").html(e.results);
            J("#search-result-count").html("Found " + e.resultCount + " results");
            J("#search-pagination").html(e.paginationControl)
          }
        }, "json")
      }
      Z.debug("done with runSearch")
    },
    fetchGoogleResults: function(e) {
      Z.debug("Zotero.pages.search_index.fetchGoogleResults", 3);
      Zotero.pages.search_index.clearResults();
      Zotero.ui.showSpinner(J("#search-spinner"));
      J("#search-spinner").show();
      searcher = new google.search.WebSearch;
      var t = null;
      switch(e.type) {
        case"documentation":
          t = "Documentation";
          break;
        case"forums":
          t = e.recent ? "ForumsRecent" : "Forums";
          break
      }
      searcher.setSiteRestriction("008900748681634663180:wtahjnnbugc", t);
      searcher.setRestriction(google.search.Search.RESTRICT_SAFESEARCH, google.search.Search.SAFESEARCH_OFF);
      searcher.setResultSetSize(google.search.Search.LARGE_RESULTSET);
      searcher.setNoHtmlGeneration();
      paramsArray = [e.type, e.query, e.page];
      searcher.setSearchCompleteCallback(Zotero.pages, Zotero.pages.search_index.displayGoogleResults, paramsArray);
      searcher.clearResults();
      searcher.execute(e.query)
    },
    displayGoogleResults: function(e, t, n) {
      Z.debug("Zotero.pages.search_index.displayGoogleResults", 3);
      J("#search-spinner").hide();
      if (searcher.results && searcher.results.length > 0) {
        Z.debug("have results in searcher, displaying results");
        for (var r in searcher.results) {
          var i = searcher.results[r];
          J("#search-results").append("                                                                                         <li class='support-result'>                                                                                              <div class='support-result-title'>                                                                                       <a href='" + i.url + "'>" + i.title + "</a>                                                                                  </div>                                                                                                                 <div class='support-result-content'>" + i.content + "</div>                                                                <div class='support-result-url'>" + i.url.replace("http://", "") + "</div>                                               </li>").show()
        }
        J("#search-result-count").html("Found " + searcher.cursor.estimatedResultCount + " results");
        for (var r in searcher.cursor.pages) {
          var s = searcher.cursor.pages[r];
          if (r == searcher.cursor.currentPageIndex) {
            J("#search-pagination").append(s.label + " | ")
          } else {
            J("#search-pagination").append("<a href='javascript:Zotero.pages.search_index.gotopage(" + r + ")'>" + s.label + "</a> | ")
          }
        }
      } else {
        Z.debug("no results in searcher")
      }
    },
    clearResults: function() {
      J("#search-results").empty();
      J("#search-result-count").empty();
      J("#search-pagination").empty();
      window.scrollBy(0, -500)
    },
    gotopage: function(e) {
      Zotero.pages.search_index.clearResults();
      searcher.gotoPage(e)
    }
  },
  search_items: {
    init: function() {
      try {
        var e = new Zotero.Library
      } catch(t) {
        Z.debug("Error initializing library")
      }
      J("#item-submit").bind("click submit", J.proxy(function(t) {
        Z.debug("item search submitted", 3);
        t.preventDefault();
        t.stopImmediatePropagation();
        var n = J("#itemQuery").val();
        var r = e.fetchGlobalItems({
          q: n
        });
        r.done(function(e) {
          Z.debug("globalItemSearch callback", 3);
          Z.debug(e);
          J("#search-result-count").empty().append(e.totalResults);
          var t = J("#search-results");
          t.empty();
          J.each(e.objects, function(e, n) {
            J("#globalitemdetailsTemplate").tmpl({
              globalItem: n
            }).appendTo(t)
          })
        });
        return false
      }, this))
    }
  },
  index_start: {
    init: function() {
      Zotero.pages.index_start.sizeIframe();
      J(window).resize(Zotero.pages.index_start.sizeIframe);
      J(".start-select").click(function() {
        J("iframe").attr("src", J(this).attr("href"));
        return false
      });
      J(".start-show-overlay").click(function() {
        J("#start-overlay").show();
        return false
      });
      J(".start-hide-overlay").click(function() {
        J("#start-overlay").hide();
        return false
      })
    },
    sizeIframe: function() {
      J("iframe").css("height", J(window).height() - 144)
    }
  },
  index_startstandalone: {
    init: function() {
      var e = BrowserDetect.browser;
      switch(e) {
        case"Chrome":
          J("#chrome-connector-download-button").closest("li").detach().prependTo("#recommended-download > ul");
          break;
        case"Safari":
          J("#safari-connector-download-button").closest("li").detach().prependTo("#recommended-download > ul");
          break;
        case"Firefox":
          J("#firefox-connector-message").closest("li").detach().prependTo("#recommended-download > ul");
          break;
        default:
          J("#connector-download-button").closest("li").detach().prependTo("#recommended-download > ul");
          J("#other-connectors-p").hide()
      }
      J("#recommended-download > ul").prepend("<li><p>Zotero Connectors allow you to save to Zotero directly from your web browser.</p></li>")
    }
  },
  index_download: {
    init: function() {
      var e = BrowserDetect.browser;
      var t = BrowserDetect.OS;
      var n = navigator.userAgent.indexOf("x86_64") != -1 ? "x86_64" : "x86";
      if (t == "Windows") {
        J("#standalone-windows-download-button").closest("li").clone().prependTo("#recommended-client-download > ul")
      } else if (t == "Mac") {
        J("#standalone-mac-download-button").closest("li").clone().prependTo("#recommended-client-download > ul")
      } else if (t == "Linux") {
        if (n == "x86_64") {
          J("#standalone-linux64-download-button").closest("li").clone().prependTo("#recommended-client-download > ul")
        } else {
          J("#standalone-linux32-download-button").closest("li").clone().prependTo("#recommended-client-download > ul")
        }
      } else {
      }
      J("#recommended-connector-download").show();
      switch(e) {
        case"Chrome":
          J("#chrome-connector-download-button").addClass("recommended-download").closest("li").detach().prependTo("#recommended-connector-download > ul");
          break;
        case"Safari":
          J("#safari-connector-download-button").addClass("recommended-download").closest("li").detach().prependTo("#recommended-connector-download > ul");
          break;
        case"Firefox":
          J("#firefox-connector-download-button").addClass("recommended-download").closest("li").detach().prependTo("#recommended-connector-download > ul");
          break;
        default:
          J("#connector-download-button").closest("li").clone().prependTo("#recommended-connector-download > ul");
          J("#other-connectors-p").hide()
      }
      J("#recommended-download > ul").prepend("<li><p>Zotero Connectors allow you to save to Zotero directly from your web browser.</p></li>")
    }
  },
  index_bookmarklet: {
    init: function() {
      J(".bookmarklet-instructions").hide();
      var e = J("#bookmarklet-tabs li.selected").data("section");
      J("#" + e + "-bookmarklet-div").show();
      J("#bookmarklet-tabs li").on("click", function(e) {
        Z.debug("bookmarklet tab clicked");
        J("#bookmarklet-tabs li.selected").removeClass("selected");
        J(this).addClass("selected");
        var t = J(this).data("section");
        Z.debug(t);
        J(".bookmarklet-instructions").hide();
        J("#" + t + "-bookmarklet-div").show()
      })
    }
  },
  admin_dashboard: {
    init: function() {
      var e = "Filter log messages by keyword or log ID";
      J("#admin-query").inputLabel(e, {
        color: "#999"
      });
      J("#admin-query-form").submit(function() {
        if (J("#admin-query").val() == e) {
          J("#admin-query").val("")
        }
      });
      J(".admin-message-title").click(function() {
        J(this).siblings(".admin-message-body").slideToggle(150)
      });
      J("button").click(function() {
        if (!confirm("Are you sure?")) {
          return false
        }
      });
      J("#admin-toggle-link").click(function() {
        J(".admin-message-body").slideToggle(true);
        return false
      })
    }
  },
  admin_userstorage: {
    init: function() {
      J(".userstorage-section").hide();
      if (zoteroData.admin_userstorage_display == "user-storage-info-div") {
        J("#user-storage-info-div").show()
      } else if (zoteroData.admin_userstorage_display == "checkout-history-div") {
        J("#checkout-history-div").show()
      }
      J("#user-storage-button").click(function() {
        J(".userstorage-section").hide();
        J("#user-storage-info-div").show()
      });
      J("#checkout-history-button").click(function() {
        J(".userstorage-section").hide();
        J("#checkout-history-div").show()
      })
    }
  },
  utils: {}
};
Zotero.callbacks = {};
Zotero.callbacks.chooseItemPane = function(e) {
  Z.debug("Zotero.callbacks.chooseItemPane", 3);
  var t = "list";
  var n = J("#library-items-div");
  var r = J("#item-details-div");
  var i = Zotero.nav.getUrlVar("itemKey");
  Z.debug("showPane itemKey : " + i, 3);
  if (i) {
    t = "detail"
  } else if (Zotero.nav.getUrlVar("action") == "newItem") {
    t = "detail"
  }
  if (t == "detail") {
    Z.debug("item pane displaying detail", 3);
    n.hide();
    r.show()
  } else if (t == "list") {
    Z.debug("item pane displaying list", 3);
    r.hide();
    n.show()
  }
  if (Zotero.config.mobile) {
    if (t == "detail") {
      J("#items-pane-edit-panel-div").hide();
      J("#filter-guide-div").hide()
    } else if (t == "list") {
      J("#items-pane-edit-panel-div").show();
      J("#filter-guide-div").show()
    }
  }
};
Zotero.callbacks.loadLibraryWidget = function(e) {
  Z.debug("Zotero.callbacks.loadLibraryWidget", 3);
  var t = J(e);
  var n = Zotero.ui.getAssociatedLibrary(e);
  var r = ["itemPage", "tag", "collectionKey", "order", "sort", "q"];
  var i = {
    target: "items",
    targetModifier: "top",
    itemPage: 1,
    limit: 25,
    content: "json"
  };
  var s = J.extend({}, i);
  s.start = parseInt(s.limit, 10) * (parseInt(s.itemPage, 10) - 1);
  if (!s.sort) {
    s.sort = Zotero.config.sortOrdering[s.order]
  }
  if (s.tag || s.q) {
    delete s.targetModifier
  }
  Zotero.ui.showSpinner(e, "horizontal");
  var o = n.loadItems(s);
  o.done(J.proxy(function(t) {
    J(e).empty();
    Zotero.ui.displayItemsWidget(e, s, t);
    J("<a href='#' class='home-widget-library-toggle-more-link clickable'>More</a>").appendTo(J(e));
    J(e).find("tr").slice(4).hide()
  }, this));
  o.fail(J.proxy(function(e, n, r) {
    var i = Zotero.ui.ajaxErrorMessage(e);
    t.html("<p>" + i + "</p>")
  }))
};
Zotero.callbacks.rejectIfPending = function(e) {
  var t = J(e).data("pendingDeferred");
  if (t && t.hasOwnProperty("reject")) {
    t.reject();
    J(e).removeData("pendingDeferred")
  }
};
Zotero.callbacks.loadItems = function(e) {
  Z.debug("Zotero.callbacks.loadItems", 3);
  Zotero.callbacks.rejectIfPending(e);
  var t = J(e);
  var n = Zotero.ui.getAssociatedLibrary(e);
  var r = ["itemPage", "tag", "collectionKey", "order", "sort", "q"];
  var i = {};
  J.each(r, function(e, t) {
    var n = Zotero.nav.getUrlVar(t);
    if (n) {
      i[t] = n
    }
  });
  var s = {
    target: "items",
    targetModifier: "top",
    itemPage: 1,
    limit: 25,
    content: "json"
  };
  var o = J.extend({}, Zotero.config.userDefaultApiArgs, s, i);
  o["collectionKey"] = i["collectionKey"];
  o.start = parseInt(o.limit, 10) * (parseInt(o.itemPage, 10) - 1);
  if (o.order == "addedBy" && n.libraryType == "user") {
    o.order = "title"
  }
  if (!o.sort) {
    o.sort = Zotero.config.sortOrdering[o.order]
  }
  if (o.tag || o.q) {
    delete o.targetModifier
  }
  Zotero.ui.showSpinner(e, "horizontal");
  var u = n.loadItems(o);
  u.done(J.proxy(function(t) {
    J(e).empty();
    Zotero.ui.displayItemsFull(e, o, t)
  }, this));
  u.fail(J.proxy(function(e, n, r) {
    var i = Zotero.ui.ajaxErrorMessage(e);
    t.html("<p>" + i + "</p>")
  }));
  t.data("pendingDeferred", u)
};
Zotero.callbacks.loadItem = function(e) {
  Z.debug("Zotero.callbacks.loadItem", 3);
  Zotero.callbacks.rejectIfPending(e);
  var t = J(e);
  var n = Zotero.ui.getAssociatedLibrary(e);
  var r;
  Zotero.ui.showSpinner(e);
  if (Zotero.nav.getUrlVar("action") == "newItem") {
    var i = Zotero.nav.getUrlVar("itemType");
    if (!i) {
      t.empty();
      J("#itemtypeselectTemplate").tmpl({
        itemTypes: Zotero.localizations.typeMap
      }).appendTo(t);
      return
    } else {
      var s = new Zotero.Item;
      s.libraryType = n.libraryType;
      s.libraryID = n.libraryID;
      r = s.initEmpty(i);
      t.data("pendingDeferred", r);
      r.done(Zotero.ui.loadNewItemTemplate);
      r.fail(function(e, t, n) {
        Zotero.ui.jsNotificationMessage("Error loading item template", "error")
      });
      return
    }
  }
  var o = Zotero.nav.getUrlVar("itemKey");
  if (!o) {
    return false
  }
  var u = n.items.getItem(o);
  if (u) {
    Z.debug("have item locally, loading details into ui", 3);
    if (Zotero.nav.getUrlVar("mode") == "edit") {
      Zotero.ui.editItemForm(t, u)
    } else {
      Zotero.ui.loadItemDetail(u, t);
      Zotero.ui.showChildren(e, o)
    }
  } else {
    Z.debug("must fetch item from server", 3);
    r = n.loadItem(o);
    t.data("pendingDeferred", r);
    var a = {
      target: "item",
      libraryType: n.type,
      libraryID: n.libraryID,
      itemKey: o,
      content: "json"
    };
    r.done(J.proxy(function(n) {
      Z.debug("Library.loadItem done", 3);
      t.empty();
      if (Zotero.nav.getUrlVar("mode") == "edit") {
        Zotero.ui.editItemForm(t, n)
      } else {
        Zotero.ui.loadItemDetail(n, t);
        Zotero.ui.showChildren(e, o)
      }
      t.data("currentconfig", a)
    }, this))
  }
};
Zotero.callbacks.controlPanel = function(e) {
  Z.debug("Zotero.callbacks.controlPanel", 3);
  Zotero.ui.showControlPanel(e);
  Zotero.ui.updateDisabledControlButtons()
};
Zotero.callbacks.loadTags = function(e, t) {
  Z.debug("Zotero.callbacks.loadTags", 3);
  Zotero.nav.flagLoading(e);
  var n = J(e);
  if ( typeof t == "undefined") {
    t = true
  }
  var r = Zotero.ui.getAssociatedLibrary(e);
  var i = {};
  var s = Zotero.nav.getUrlVar("collectionKey") || n.attr("data-collectionKey");
  var o = n.find("#show-all-tags").filter(":checked").length;
  var u = Zotero.nav.getUrlVar("tag");
  if (!J.isArray(u)) {
    if (u) {
      u = [u]
    } else {
      u = []
    }
  }
  var a;
  if (o) {
    a = J.extend({}, i)
  } else {
    a = J.extend({}, i, {
      collectionKey: s
    })
  }
  Zotero.ui.showSpinner(J(e).find("div.loading"));
  J.subscribe("tags_page_loaded", J.proxy(function(t) {
    Z.debug("tags_page_loaded published", 3);
    J.unsubscribe("tags_page_loaded");
    if (!n.data("showmore")) {
      J(e).find("div.loading").empty()
    }
    var i = r.tags.plainTagsList(r.tags.tagsArray);
    var s = Zotero.utils.prependAutocomplete("", i);
    Zotero.ui.displayTagsFiltered(e, r.tags, s, u)
  }, this));
  var f = r.loadAllTags(a, t);
  f.done(J.proxy(function(t) {
    Z.debug("finished loadAllTags", 3);
    J(e).find("div.loading").empty();
    Z.debug(t, 5);
    r.tags.loaded = true;
    r.tags.loadedConfig = a;
    J(e).children(".loading").empty();
    var n = r.tags.plainTagsList(r.tags.tagsArray);
    Zotero.ui.displayTagsFiltered(e, r.tags, n, u);
    Zotero.nav.doneLoading(e)
  }, this));
  f.fail(J.proxy(function(e, t, r) {
    var i = Zotero.ui.ajaxErrorMessage(e);
    n.html("<p>" + i + "</p>")
  }));
  return
};
Zotero.callbacks.showSpinnerSection = function(e) {
  Z.debug("Zotero.callbacks.showSpinnerSection", 3);
  Zotero.ui.showSpinner(J(e).children(".loading"))
};
Zotero.callbacks.appendPreloader = function(e) {
  Z.debug("Zotero.callbacks.appendPreloader", 3);
  Zotero.ui.appendSpinner(e)
};
Zotero.callbacks.loadCollections = function(e) {
  Z.debug("Zotero.callbacks.loadCollections", 3);
  Zotero.nav.flagLoading(e);
  var t = J(e);
  var n = Zotero.ui.getAssociatedLibrary(e);
  var r = Zotero.nav.getUrlVar("mode") || "view";
  Zotero.ui.updateCollectionButtons();
  if (!t.data("mode"))
    t.data("mode", "view");
  if ((t.data("loaded") || n.collections.loading) && !n.collections.dirty) {
    Z.debug("collections already loaded and clean", 3);
    if (!n.collections.loaded && t.data("loaded")) {
      try {
        var i = JSON.parse(decodeURIComponent(t.attr("data-collections")));
        n.collections.loadDataObjects(i)
      } catch(s) {
        Z.ui.jsNotificationMessage("error parsing library data", "error");
        Z.debug("error parsing library data - collections");
        throw s
      }
    }
    Zotero.ui.highlightCurrentCollection();
    Zotero.ui.nestHideCollectionTree(e);
    Zotero.nav.doneLoading(e);
    return
  }
  var o = t.find("#collection-list-container");
  Zotero.ui.showSpinner(o);
  var u = n.loadCollections();
  u.done(J.proxy(function() {
    Zotero.nav.doneLoading(e);
    o.empty();
    Zotero.ui.displayCollections(o, n.collections);
    Zotero.ui.nestHideCollectionTree(o);
    Zotero.ui.highlightCurrentCollection();
    t.data("loaded", true);
    t.data("mode", r);
    Zotero.nav.doneLoading(e)
  }, this));
  u.fail(J.proxy(function(e, n, r) {
    var i = Zotero.ui.ajaxErrorMessage(e);
    t.html("<p>" + i + "</p>")
  }));
  return
};
Zotero.callbacks.loadFeedLink = function(e) {
  Z.debug("Zotero.callbacks.loadFeedLink", 3);
  var t = J(e);
  var n = Zotero.ui.getAssociatedLibrary(e);
  var r = t.data("loadconfig");
  n.libraryLabel = decodeURIComponent(r.libraryLabel);
  var i = ["itemPage", "tag", "collectionKey", "order", "sort", "q"];
  var s = {};
  J.each(i, function(e, t) {
    var n = Zotero.nav.getUrlVar(t);
    if (n) {
      s[t] = n
    }
  });
  var o = {
    target: "items",
    targetModifier: "top",
    itemPage: 1,
    limit: 25
  };
  var u = J.extend({}, o, t.data("loadconfig"), s);
  u["collectionKey"] = s["collectionKey"];
  u.start = parseInt(u.limit, 10) * (parseInt(u.itemPage, 10) - 1);
  if (!u.sort) {
    u.sort = Zotero.config.sortOrdering[u.order]
  }
  if (u.tag || u.q) {
    delete u.targetModifier
  }
  var a = J.extend({
    target: "items",
    libraryType: n.libraryType,
    libraryID: n.libraryID
  }, u);
  var f = Zotero.ajax.apiRequestUrl(a) + Zotero.ajax.apiQueryString(a, false);
  var l = f.replace(Zotero.config.baseApiUrl, Zotero.config.baseFeedUrl);
  var c = Zotero.url.requestReadApiKeyUrl(n.libraryType, n.libraryID, l);
  t.data("urlconfig", a);
  if (n.libraryType == "user" && zoteroData.libraryPublish === 0 || n.libraryType == "group" && zoteroData.groupType == "Private") {
    J(".feed-link").attr("href", c)
  } else {
    J(".feed-link").attr("href", l)
  }
  J("#library link[rel='alternate']").attr("href", l);
  var h = Zotero.url.exportUrls(a);
  J("#export-list").empty().append(J("#exportformatsTemplate").tmpl({
    exportUrls: h
  }));
  J("#export-list").data("urlconfig", a);
  J("#export-list").hide()
};
Zotero.callbacks.loadUserGroups = function(e) {
  Z.debug("Zotero.callbacks.loadUserGroups", 3);
  var t = J(e);
  var n = {};
  n.userslug = t.attr("data-userslug");
  n.target = t.attr("data-target");
  n.content = t.attr("data-content");
  n.raw = "1";
  Zotero.ajax.loadUserGroups(e, n)
};
Zotero.callbacks.userGroupsLoaded = function(e) {
  Z.debug("Zotero.callbacks.userGroupsLoaded", 3);
  var t = J(e);
  var n = Zotero.groups;
  n.groupsArray.sort(n.sortByTitleCompare);
  var r = Zotero.ui.userGroupsDisplay(n);
  t.html(r)
};
Zotero.callbacks.runsearch = function(e) {
  Z.debug("Zotero.callbacks.runsearch", 3);
  var t = Zotero.pages.search_index.parseSearchUrl();
  if (!t.type) {
    t.type = "support"
  }
  var n = t.type;
  if (n != "people" && n != "group") {
    n = "support"
  }
  Z.debug("search type: " + t.type, 4);
  J(".search-section").not("[id=" + n + "]").hide();
  J(".search-section[id=" + n + "]").show().find("input[name=q]").val(t.query);
  J("#search-nav li").removeClass("selected");
  J("#search-nav li." + t.type).addClass("selected");
  zoterojsSearchContext = t.type;
  if (t.query) {
    Zotero.pages.search_index.runSearch(t)
  }
};
Zotero.callbacks.loadFilterGuide = function(e) {
  Z.debug("Zotero.callbacks.loadFilterGuide", 3);
  var t = Zotero.nav.getUrlVar("tag");
  if ( typeof t == "string") {
    t = [t]
  }
  var n = Zotero.nav.getUrlVar("collectionKey");
  var r = Zotero.nav.getUrlVar("q");
  var i = {
    tag: t,
    collectionKey: n,
    q: r
  };
  Zotero.ui.filterGuide(e, i)
};
Zotero.callbacks.actionPanel = function(e) {
  Z.debug("Zotero.callbacks.actionPanel", 3);
  var t = Zotero.nav.getUrlVar("mode");
  var n = J(e).attr("id");
  if (n == "collections-pane-edit-panel-div") {
    if (t == "edit") {
      Zotero.ui.collectionsActionPane(J("#collections-pane-edit-panel-div"), true)
    } else {
      Zotero.ui.collectionsActionPane(J("#collections-pane-edit-panel-div"), false)
    }
  } else if (n == "items-pane-edit-panel-div") {
    if (t == "edit") {
      Zotero.ui.itemsActionPane(J("#items-pane-edit-panel-div"))
    } else {
      Zotero.ui.itemsSearchActionPane(J("#items-pane-edit-panel-div"))
    }
    Zotero.ui.updateDisabledControlButtons()
  }
};
Zotero.callbacks.selectMobilePage = function(e) {
  Z.debug("Zotero.callbacks.selectMobilePage", 3);
  if (Zotero.state.mobilePageFirstLoad) {
    Z.debug("first mobile pageload - ignoring page history's page", 3);
    Zotero.state.mobilePageFirstLoad = false;
    var t = J.mobile.activePage.attr("id") || "";
    Zotero.nav.updateStatePageID(t);
    return
  } else if (Zotero.state.mobileBackButtonClicked) {
    Zotero.state.mobileBackButtonClicked = false;
    var n = J("[data-role='page']").first().attr("id");
    Zotero.nav.ignoreStateChange();
    Zotero.ui.mobile.changePage("#" + n, {
      changeHash: false
    })
  } else {
    Z.debug("Not first mobile pageload - going ahead with mobile page selection", 3)
  }
  var r = History.getState();
  var i = r.data;
  var s = Zotero.nav.getUrlVar("msubpage") || i._zpageID;
  if (s) {
    if (J.mobile.activePage.attr("id") != s) {
      Z.debug("Zotero.callbacks.selectMobilePage switching to " + s, 4);
      Zotero.nav.ignoreStateChange();
      Zotero.ui.mobile.changePage("#" + s, {
        changeHash: false
      })
    }
  } else {
  }
  Zotero.ui.createOnActivePage();
  return
};
Zotero.ui.dialog = function(e, t) {
  Z.debug("Zotero.ui.dialog", 3);
  J(e).dialog(t);
  Z.debug("exiting Zotero.ui.dialog", 3)
};
Zotero.ui.closeDialog = function(e) {
  J(e).dialog("close")
};
Zotero.ui.updateDisabledControlButtons = function() {
  Z.debug("Zotero.ui.updateDisabledControlButtons", 3);
  J(".move-to-trash-link").prop("title", "Move to Trash");
  J("#create-item-link").button("option", "disabled", false);
  if (J(".itemlist-editmode-checkbox:checked").length === 0 && !Zotero.nav.getUrlVar("itemKey")) {
    J(".add-to-collection-link").button("option", "disabled", true).removeClass("ui-state-hover");
    J(".remove-from-collection-link").button("option", "disabled", true).removeClass("ui-state-hover");
    J(".move-to-trash-link").button("option", "disabled", true).removeClass("ui-state-hover");
    J(".remove-from-trash-link").button("option", "disabled", true).removeClass("ui-state-hover");
    J("#cite-link").button("option", "disabled", true);
    J("#export-link").button("option", "disabled", true)
  } else {
    J(".add-to-collection-link").button("option", "disabled", false).removeClass("ui-state-hover");
    J(".remove-from-collection-link").button("option", "disabled", false).removeClass("ui-state-hover");
    J(".move-to-trash-link").button("option", "disabled", false).removeClass("ui-state-hover");
    if (Zotero.nav.getUrlVar("collectionKey") == "trash") {
      J(".remove-from-trash-link").button("option", "disabled", false).removeClass("ui-state-hover")
    }
    J("#cite-link").button("option", "disabled", false);
    J("#export-link").button("option", "disabled", false)
  }
  if (!Zotero.nav.getUrlVar("collectionKey")) {
    J(".remove-from-collection-link").button("option", "disabled", true).removeClass("ui-state-hover")
  } else if (Zotero.nav.getUrlVar("collectionKey") == "trash") {
    J("#create-item-link").button("option", "disabled", true).removeClass("ui-state-hover");
    J(".add-to-collection-link").button("option", "disabled", true).removeClass("ui-state-hover");
    J(".remove-from-collection-link").button("option", "disabled", true).removeClass("ui-state-hover");
    J(".move-to-trash-link").prop("title", "Permanently Delete")
  }
  Zotero.ui.init.editButton()
};
Zotero.ui.jsNotificationMessage = function(e, t, n) {
  Z.debug("notificationMessage: " + t + " : " + e, 3);
  if (Zotero.config.suppressErrorNotifications)
    return;
  if (!n) {
    n = 5
  }
  J("#js-message-list").append("<li class='jsNotificationMessage-" + t + "' >" + e + "</li>").children("li").delay(parseInt(n, 10) * 1e3).slideUp().delay(300).queue(function() {
    J(this).remove()
  })
};
Zotero.ui.ajaxErrorMessage = function(e) {
  Z.debug("Zotero.ui.ajaxErrorMessage", 3);
  if ( typeof e == "undefined") {
    Z.debug("ajaxErrorMessage called with undefined argument");
    return ""
  }
  Z.debug(e, 3);
  switch(e.status) {
    case 403:
      if (Zotero.config.loggedIn) {
        return "You do not have permission to view this library."
      } else {
        Zotero.config.suppressErrorNotifications = true;
        window.location = "/user/login";
        return ""
      }
      break;
    case 404:
      Zotero.ui.jsNotificationMessage("A requested resource could not be found.", "error");
      break;
    case 400:
      Zotero.ui.jsNotificationMessage("Bad Request", "error");
      break;
    case 405:
      Zotero.ui.jsNotificationMessage("Method not allowed", "error");
      break;
    case 412:
      Zotero.ui.jsNotificationMessage("Precondition failed", "error");
      break;
    case 500:
      Zotero.ui.jsNotificationMessage("Something went wrong but we're not sure what.", "error");
      break;
    case 501:
      Zotero.ui.jsNotificationMessage("We can't do that yet.", "error");
      break;
    case 503:
      Zotero.ui.jsNotificationMessage("We've gone away for a little while. Please try again in a few minutes.", "error");
      break;
    default:
      Z.debug("jqxhr status did not match any expected case");
      Z.debug(e.status)
  }
  return ""
};
Zotero.ui.scrollToTop = function() {
  window.scrollBy(0, -5e3)
};
Zotero.ui.getSelectedItemKeys = function(e) {
  Z.debug("Zotero.ui.getSelectedItemKeys", 3);
  var t = [];
  var n = Zotero.nav.getUrlVar("itemKey");
  if (n) {
    t.push(n)
  } else {
    if (J(e).length) {
      J(e).find("input.itemKey-checkbox:checked").each(function(e, n) {
        t.push(J(n).data("itemkey"))
      })
    } else {
      J("input.itemKey-checkbox:checked").each(function(e, n) {
        t.push(J(n).data("itemkey"))
      })
    }
  }
  return t
};
Zotero.ui.getAllFormItemKeys = function(e) {
  Z.debug("Zotero.ui.getSelectedItemKeys", 3);
  var t = [];
  var n = Zotero.nav.getUrlVar("itemKey");
  if (n) {
    t.push(n)
  } else {
    J(e).find("input.itemKey-checkbox").each(function(e, n) {
      t.push(J(n).data("itemkey"))
    })
  }
  return t
};
Zotero.ui.saveItemCallback = function(e) {
  Z.debug("saveitemlink clicked", 3);
  e.preventDefault();
  Zotero.ui.scrollToTop();
  var t = Zotero.ui.getAssociatedLibrary(J(this).closest(".ajaxload"));
  var n = J(this).attr("data-itemKey");
  var r;
  if (n) {
    r = t.items.getItem(n);
    Z.debug("itemKey " + n + " : ", 3)
  } else {
    r = J("#item-details-div").data("newitem");
    Z.debug("newItem : itemTemplate selected from form", 3);
    Z.debug(r, 3)
  }
  Zotero.ui.updateItemFromForm(r, J(this).closest("form"));
  t.dirty = true;
  Zotero.ui.showSpinner(J(this).closest(".ajaxload"));
  return false
};
Zotero.ui.addToCollection = function(e, t) {
  Z.debug("add-to-collection clicked", 3);
  var n = Zotero.ui.getSelectedItemKeys(J("#edit-mode-items-form"));
  if (!e) {
    Zotero.ui.jsNotificationMessage("No collection selected", "error");
    return false
  }
  if (n.length === 0) {
    Zotero.ui.jsNotificationMessage("No items selected", "notice");
    return false
  }
  Z.debug(n, 4);
  Z.debug(e, 4);
  Z.debug(t.collections[e], 4);
  var r = t.collections[e].addItems(n);
  t.dirty = true;
  J.when(r).then(function() {
    Zotero.nav.pushState(true)
  });
  return false
};
Zotero.ui.showControlPanel = function(e) {
  Z.debug("Zotero.ui.showControlPanel", 3);
  var t = J(e);
  var n = Zotero.nav.getUrlVar("mode") || "view";
  if (Zotero.config.librarySettings.allowEdit === 0) {
    J(".permission-edit").hide();
    J("#control-panel").hide()
  }
};
Zotero.ui.showChildren = function(e, t) {
  Z.debug("Zotero.ui.showChildren", 3);
  var n = Zotero.ui.getAssociatedLibrary(J(e).closest("div.ajaxload"));
  var r = n.items.getItem(t);
  var i = J(e).find(".item-attachments-div");
  Zotero.ui.showSpinner(i);
  var s = r.getChildren(n);
  s.done(function(e) {
    J.tmpl("childitemsTemplate", {
      childItems: e
    }).appendTo(J(".item-attachments-div").empty())
  });
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.addCreator = function(e) {
  Z.debug("Zotero.ui.addCreator", 3);
  var t = J(e).data("itemkey");
  var n = J(e).closest("form").find("select.itemType").val();
  var r = J("input[id^='creator_']:last").attr("id");
  var i = 0;
  if (r) {
    i = parseInt(r.substr(8), 10)
  }
  var s = i + 1;
  var o = J("input[id^='creator_']:last").closest("tr");
  J.tmpl("authorelementsdoubleTemplate", {
    index: s,
    creator: {
      firstName: "",
      lastName: ""
    },
    creatorTypes: Zotero.Item.prototype.creatorTypes[n]
  }).insertAfter(o);
  Zotero.ui.init.creatorFieldButtons();
  Zotero.ui.createOnActivePage(o)
};
Zotero.ui.removeCreator = function(e) {
  Z.debug("Zotero.ui.removeCreator", 3);
  J(e).closest("tr").remove();
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.addNote = function(e) {
  Z.debug("Zotero.ui.addNote", 3);
  var t = 0;
  var n = J("textarea[name^='note_']:last").attr("name");
  if (n) {
    t = parseInt(n.substr(5), 10)
  }
  var r = t + 1;
  var i = "note_" + r;
  var s;
  if (Zotero.config.mobile) {
    s = J("td.notes").append('<textarea cols="40" rows="24" name="' + i + '" id="' + i + '" class="tinymce default"></textarea>')
  } else {
    s = J("td.notes button.add-note-button").before('<textarea cols="40" rows="24" name="' + i + '" id="' + i + '" class="tinymce default"></textarea>')
  }
  Z.debug("new note ID:" + i, 4);
  Zotero.ui.init.tinyMce("default", true, i);
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.updateItemFromForm = function(e, t) {
  Z.debug("Zotero.ui.updateItemFromForm", 3);
  var n = J(t);
  n.closest(".ajaxload").data("ignoreformstorage", true);
  var r = Zotero.ui.getAssociatedLibrary(n.closest(".ajaxload"));
  var i = "";
  if (e.itemKey)
    i = e.itemKey;
  J.each(e.contentRows, function(t, r) {
    var s, o, u;
    if (r.field == "note") {
      s = "textarea[data-itemKey='" + i + "'].tinymce";
      Z.debug(s, 4);
      u = J(s).attr("id");
      Z.debug(u, 4);
      o = tinyMCE.get(u).getContent()
    } else {
      s = "[data-itemKey='" + i + "'][name='" + r.field + "']";
      o = n.find(s).val()
    }
    if ( typeof o !== "undefined") {
      r.fieldValue = o;
      e.apiObj[r.field] = o
    }
  });
  var s = [];
  n.find("tr.creator").each(function(e, t) {
    var n, r, i, o;
    var u = parseInt(J(t).attr("id").substr(8), 10);
    var a = J(t).find("select[id$='creatorType']").val();
    if (J(t).hasClass("singleCreator")) {
      n = J(t).find("input[id$='_name']");
      if (!n.val()) {
        return true
      }
      r = {
        creatorType: a,
        name: n.val()
      }
    } else if (J(t).hasClass("doubleCreator")) {
      i = J(t).find("input[id$='_firstName']").val();
      o = J(t).find("input[id$='_lastName']").val();
      if (i === "" && o === "") {
        return true
      }
      r = {
        creatorType: a,
        firstName: i,
        lastName: o
      }
    }
    s.push(r)
  });
  var o = [];
  n.find("input[id^='tag_']").each(function(e, t) {
    if (J(t).val() !== "") {
      o.push({
        tag: J(t).val()
      })
    }
  });
  var u = [];
  n.find("textarea[name^='note_']").each(function(e, t) {
    var n = J(t).attr("id");
    var r = tinyMCE.get(n).getContent();
    Z.debug(r, 3);
    u.push({
      itemType: "note",
      note: r
    })
  });
  e.apiObj.notes = u;
  e.apiObj.creators = s;
  e.apiObj.tags = o;
  Z.debug("pre writeItem debug", 4);
  Z.debug(e, 4);
  Zotero.ui.showSpinner(J(t).closest(".ajaxload"));
  var a = e.writeItem();
  a.done(J.proxy(function(t) {
    Z.debug("item write finished", 3);
    delete Zotero.nav.urlvars.pathVars["action"];
    if (i === "") {
      var n = Zotero.nav.getUrlVar("collectionKey");
      if (n) {
        var s = r.collections[n];
        s.addItems([e.itemKey]);
        r.dirty = true
      }
      Zotero.nav.urlvars.pathVars["itemKey"] = e.itemKey
    }
    Zotero.nav.clearUrlVars(["itemKey", "collectionKey"]);
    Zotero.nav.pushState(true)
  }, this));
  Z.debug("adding new tags to library tags", 3);
  var f = r.tags;
  J.each(o, function(e, t) {
    var n = t.tag;
    if (!f.tagObjects.hasOwnProperty(n)) {
      var r = new Zotero.Tag;
      r.title = n;
      r.numItems = 1;
      r.urlencodedtag = encodeURIComponent(r.title);
      f.tagObjects[n] = r;
      f.updateSecondaryData()
    }
  })
};
Zotero.ui.loadNewItemTemplate = function(e) {
  Z.debug("Zotero.ui.loadNewItemTemplate", 3);
  Z.debug(e, 3);
  var t = Zotero.Item.prototype.getCreatorTypes(e.itemType);
  t.done(function(t) {
    var n = J("#item-details-div").empty();
    if (e.itemType == "note") {
      var r = Zotero.nav.getUrlVar("parentKey");
      if (r) {
        e.parentKey = r
      }
      J.tmpl("editnoteformTemplate", {
        item: e,
        itemKey: e.itemKey
      }).appendTo(n);
      Zotero.ui.init.tinyMce("default")
    } else {
      J.tmpl("itemformTemplate", {
        item: e.apiObj,
        libraryUserID: zoteroData.libraryUserID,
        itemKey: e.itemKey,
        creatorTypes: t
      }).appendTo(n);
      if (e.apiObj.tags.length === 0) {
        Zotero.ui.addTag(false)
      }
      Zotero.ui.init.creatorFieldButtons();
      Zotero.ui.init.tagButtons();
      Zotero.ui.init.editButton()
    }
    n.data("newitem", e);
    Zotero.ui.loadFormData(n);
    Zotero.ui.createOnActivePage(n)
  })
};
Zotero.ui.saveFormData = function() {
  Z.debug("saveFormData", 3);
  J(".ajaxload").each(function() {
    var e = J(this).find("input");
    J(this).data("tempformstorage", e)
  })
};
Zotero.ui.loadFormData = function(e) {
  Z.debug("loadFormData", 3);
  var t = J(e).data("tempformstorage");
  if (J(e).data("ignoreformstorage")) {
    Z.debug("ignoring stored form data", 3);
    J(e).removeData("tempFormStorage");
    J(e).removeData("ignoreFormStorage");
    return
  }
  Z.debug("formData: ", 4);
  Z.debug(t, 4);
  if (t) {
    t.each(function(e) {
      var t = "#" + J(this).attr("id");
      Z.debug("idstring:" + t, 4);
      if (J(t).length) {
        Z.debug("setting value of " + t, 4);
        J(t).val(J(this).val())
      }
    })
  }
};
Zotero.ui.addTag = function(e) {
  Z.debug("Zotero.ui.addTag", 3);
  if ( typeof e == "undefined") {
    e = true
  }
  var t = 0;
  var n = J("input[id^='tag_']:last").attr("id");
  if (n) {
    t = parseInt(n.substr(4), 10)
  }
  var r = t + 1;
  var i = J("td.tags");
  J.tmpl("itemtagTemplate", {
    index: r
  }).appendTo(i);
  J("input.taginput").autocomplete({
    source: function(e, t) {
      var n = Zotero.ui.getAssociatedLibrary(J(this.element.context).closest(".ajaxload"));
      var r = Zotero.utils.prependAutocomplete(e.term, n.tags.plainList);
      t(r)
    },
    select: function(e, t) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var n = t.item.value;
      Zotero.ui.addTag()
    }
  });
  if (e) {
    J("input.taginput").last().focus()
  }
  Zotero.ui.init.tagButtons();
  Zotero.ui.createOnActivePage(i)
};
Zotero.ui.removeTag = function(e) {
  Z.debug("Zotero.ui.removeTag", 3);
  J(e).closest(".edit-tag-div").remove();
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.itemTypeClass = function(e) {
  var t = e.itemType;
  if (e.itemType == "attachment") {
    if (e.mimeType == "application/pdf") {
      t += "-pdf"
    } else {
      switch(e.linkMode) {
        case 0:
          t += "-file";
          break;
        case 1:
          t += "-file";
          break;
        case 2:
          t += "-snapshot";
          break;
        case 3:
          t += "-web-link";
          break
      }
    }
  }
  return "img-" + t
};
Zotero.ui.bindCollectionLinks = function() {
  Z.debug("Zotero.ui.bindCollectionLinks", 3);
  J("#collection-list-div").on("click", "div.folder-toggle", function(e) {
    e.preventDefault();
    J(this).siblings(".collection-select-link").click();
    return false
  });
  J("#collection-list-div").on("click", ".collection-select-link", function(e) {
    Z.debug("collection-select-link clicked", 4);
    e.preventDefault();
    var t, n;
    var r = J(this).attr("data-collectionkey");
    if (J(this).hasClass("current-collection")) {
      var i = J(".current-collection").data("expanded");
      if (i === true) {
        Zotero.ui.nestHideCollectionTree(J("#collection-list-container"), false)
      } else {
        Zotero.ui.nestHideCollectionTree(J("#collection-list-container"), true)
      }
      Zotero.nav.clearUrlVars(["collectionKey", "mode"]);
      if (Zotero.config.mobile && Zotero.nav.getUrlVar("mode") != "edit") {
        t = Zotero.ui.getAssociatedLibrary(J(this));
        if (!t.hasChildren) {
          Z.debug("Changing page to items list because collection has no children", 4)
        }
      } else {
        Zotero.nav.pushState()
      }
      return false
    }
    Z.debug("click " + r, 4);
    Zotero.nav.clearUrlVars(["mode"]);
    Zotero.nav.urlvars.pathVars["collectionKey"] = r;
    Z.debug("change mobile page if we didn't just expand a collection", 4);
    Z.debug(J(this), 4);
    if (Zotero.config.mobile) {
      Z.debug("is mobile", 4);
      n = Zotero.ui.getAssociatedLibrary(J(this).closest(".ajaxload"));
      t = n.collections.getCollection(r);
      if (!t.hasChildren && Zotero.nav.getUrlVar("mode") != "edit") {
        Z.debug("Changing page to items list because collection has no children", 4);
        Zotero.ui.mobile.changePage("#library-items-page", {
          changeHash: false
        })
      } else {
        Zotero.nav.pushState()
      }
    } else {
      Zotero.nav.pushState()
    }
    return false
  });
  J("#collection-list-div").on("click", "a.my-library", function(e) {
    e.preventDefault();
    Zotero.nav.clearUrlVars(["mode"]);
    if (Zotero.config.mobile) {
      Zotero.ui.mobile.changePage("#library-items-page", {
        changeHash: false
      })
    }
    Zotero.nav.pushState();
    return false
  })
};
Zotero.ui.bindItemLinks = function() {
  Z.debug("Zotero.ui.bindItemLinks", 3);
  J("div#items-pane").on("click", "a.item-select-link", function(e) {
    e.preventDefault();
    Z.debug("item-select-link clicked", 3);
    var t = J(this).attr("data-itemKey");
    Z.debug("click " + t, 4);
    Zotero.nav.urlvars.pathVars.itemKey = t;
    Zotero.nav.pushState()
  });
  J("div#items-pane").on("click", "td[data-itemkey]:not(.edit-checkbox-td)", function(e) {
    e.preventDefault();
    Z.debug("item-select-td clicked", 3);
    var t = J(this).attr("data-itemKey");
    Z.debug("click " + t, 4);
    Zotero.nav.urlvars.pathVars.itemKey = t;
    Zotero.nav.pushState()
  })
};
Zotero.ui.bindTagLinks = function() {
  Z.debug("Zotero.ui.bindTagLinks", 3);
  J("#tags-list-div, #items-pane").on("click", "a.tag-link", function(e) {
    e.preventDefault();
    J("#tag-filter-input").val("");
    Z.debug("tag-link clicked", 4);
    var t = J(this).attr("data-tagtitle");
    Zotero.nav.toggleTag(t);
    Z.debug("click " + t, 4);
    Zotero.nav.clearUrlVars(["tag", "collectionKey"]);
    Zotero.nav.pushState()
  })
};
Zotero.ui.displayCollections = function(e, t) {
  Z.debug("Zotero.ui.displayCollections", 3);
  Z.debug("library Identifier " + t.libraryUrlIdentifier, 4);
  var n = J(e);
  var r = Zotero.nav.getUrlVar("collectionKey") || "";
  var i = t.owningLibrary.libraryType == "user" ? true : false;
  J.tmpl("collectionlistTemplate", {
    collections: t.collectionsArray,
    libUrlIdentifier: t.libraryUrlIdentifier,
    currentCollectionKey: r,
    trash: i
  }).appendTo(n);
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.nestHideCollectionTree = function(e, t) {
  if ( typeof t == "undefined") {
    t = true
  }
  var n = J(e);
  n.find("#collection-list ul").hide().siblings(".folder-toggle").children(".sprite-placeholder").removeClass("sprite-placeholder").addClass("ui-icon-triangle-1-e");
  n.find(".current-collection").parents("ul").show();
  n.find("#collection-list li.current-collection").children("ul").show();
  n.find(".ui-icon-triangle-1-s").removeClass("ui-icon-triangle-1-s").addClass("ui-icon-triangle-1-e");
  n.find("li.current-collection").parentsUntil("#collection-list").children("div.folder-toggle").find(".ui-icon-triangle-1-e").removeClass("ui-icon-triangle-1-e").addClass("ui-icon-triangle-1-s");
  if (t === false) {
    n.find("#collection-list li.current-collection").children("ul").hide();
    n.find("#collection-list li.current-collection").find(".ui-icon-triangle-1-s").removeClass("ui-icon-triangle-1-s").addClass("ui-icon-triangle-1-e");
    n.find(".current-collection").data("expanded", false)
  } else {
    n.find("li.current-collection").children("div.folder-toggle").find(".ui-icon-triangle-1-e").removeClass("ui-icon-triangle-1-e").addClass("ui-icon-triangle-1-s");
    n.find(".current-collection").data("expanded", true)
  }
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.highlightCurrentCollection = function() {
  Z.debug("Zotero.ui.highlightCurrentCollection", 3);
  var e = Zotero.nav.getUrlVar("collectionKey");
  J("a.current-collection").closest("li").removeClass("current-collection");
  J("a.current-collection").removeClass("current-collection");
  if (e) {
    J("a[data-collectionKey='" + e + "']").addClass("current-collection");
    J("a[data-collectionKey='" + e + "']").closest("li").addClass("current-collection")
  } else {
    J("a.my-library").addClass("current-collection");
    J("a.my-library").closest("li").addClass("current-collection")
  }
};
Zotero.ui.updateCollectionButtons = function() {
  var e = J(".edit-collections-buttons-list");
  e.buttonset().show();
  J("#edit-collections-buttons-div").buttonset();
  J(".create-collection-link").button("option", "icons", {
    primary: "sprite-toolbar-collection-add"
  }).button("option", "text", false);
  J(".update-collection-link").button("option", "icons", {
    primary: "sprite-toolbar-collection-edit"
  }).button("option", "text", false);
  J(".delete-collection-link").button("option", "icons", {
    primary: "sprite-folder_delete"
  }).button("option", "text", false);
  if (Zotero.nav.getUrlVar("collectionKey")) {
    J(".update-collection-link").button("enable");
    J(".delete-collection-link").button("enable")
  } else {
    J(".update-collection-link").button().button("disable");
    J(".delete-collection-link").button().button("disable")
  }
};
Zotero.ui.displayItemsWidget = function(e, t, n) {
  Z.debug("Zotero.ui.displayItemsWidget", 3);
  Z.debug(t, 4);
  var r = parseInt(Zotero.nav.getUrlVar("itemPage"), 10) || 1;
  var i = n.feed;
  var s = parseInt(t.start, 10) || 0;
  var o = parseInt(t.limit, 10) || 25;
  var u = t.order || Zotero.config.userDefaultApiArgs.order;
  var a = t.sort || Zotero.config.sortOrdering[u] || "asc";
  var f = false;
  var l = J(e);
  var c = i.title.split("/");
  var h = Zotero.prefs.library_listShowFields;
  var p = {
    titleParts: c,
    displayFields: h,
    items: n.itemsArray,
    editmode: f,
    order: u,
    sort: a,
    library: n.library
  };
  Zotero.ui.insertItemsTable(e, p)
};
Zotero.ui.displayItemsFull = function(e, t, n) {
  Z.debug("Zotero.ui.displayItemsFull", 3);
  Z.debug(t, 4);
  var r = J(e);
  var i = n.feed;
  var s = J.extend({}, Zotero.config.defaultApiArgs, Zotero.config.userDefaultApiArgs, t);
  var o = i.title.split("/");
  var u = Zotero.prefs.library_listShowFields;
  if (n.library.libraryType != "group") {
    u = J.grep(u, function(e, t) {
      return J.inArray(e, Zotero.Library.prototype.groupOnlyColumns) == -1
    })
  }
  var a = Zotero.config.librarySettings.allowEdit ? true : false;
  var f = {
    titleParts: o,
    displayFields: u,
    items: n.itemsArray,
    editmode: a,
    order: s["order"],
    sort: s["sort"],
    library: n.library
  };
  Z.debug(r, 4);
  Zotero.ui.insertItemsTable(r, f);
  if (Zotero.config.mobile) {
    Zotero.ui.createOnActivePage(e);
    return
  }
  var l = Zotero.ui.createPagination(n.feed, "itemPage", s);
  var c = {
    feed: i,
    pagination: l
  };
  var h = l.page;
  Zotero.ui.insertItemsPagination(e, c);
  Z.debug(r, 4);
  var p = J(e);
  J("#start-item-link").click(function(e) {
    e.preventDefault();
    Zotero.nav.urlvars.pathVars["itemPage"] = "";
    Zotero.nav.pushState()
  });
  J("#prev-item-link").click(function(e) {
    e.preventDefault();
    var t = h - 1;
    Zotero.nav.urlvars.pathVars["itemPage"] = t;
    Zotero.nav.pushState()
  });
  J("#next-item-link").click(function(e) {
    e.preventDefault();
    var t = h + 1;
    Zotero.nav.urlvars.pathVars["itemPage"] = t;
    Zotero.nav.pushState()
  });
  J("#last-item-link").click(function(e) {
    e.preventDefault();
    Z.debug("last-item-link clickbind", 4);
    var t = "";
    J.each(i.links, function(e, n) {
      if (n.rel === "last") {
        t = n.href;
        return false
      }
    });
    Z.debug(t, 4);
    var n = J.deparam.querystring(t).start;
    Z.debug("laststart:" + n, 4);
    var r = parseInt(n, 10) / limit + 1;
    Zotero.nav.urlvars.pathVars["itemPage"] = r;
    Zotero.nav.pushState()
  });
  Zotero.ui.updateDisabledControlButtons();
  Zotero.ui.libraryBreadcrumbs();
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.createPagination = function(e, t, n) {
  var r = parseInt(Zotero.nav.getUrlVar(t), 10) || 1;
  var i = parseInt(n.start, 10) || 0;
  var s = parseInt(n.limit, 10) || 25;
  var o = parseInt(e.totalResults, 10);
  var u = i + s;
  var a = r - 1;
  var f = r + 1;
  var l = e.lastPage;
  var c = {
    page: r
  };
  c.showFirstLink = i > 0;
  c.showPrevLink = i > 0;
  c.showNextLink = o > u;
  c.showLastLink = o > u;
  var h = {};
  c.firstLink = Zotero.nav.mutateUrl(h, [t]);
  h[t] = r - 1;
  c.prevLink = Zotero.nav.mutateUrl(h, []);
  h[t] = r + 1;
  c.nextLink = Zotero.nav.mutateUrl(h, []);
  h[t] = e.lastPage;
  c.lastLink = Zotero.nav.mutateUrl(h, []);
  c.start = i;
  c.lastDisplayed = Math.min(u, o);
  c.total = o;
  Z.debug("last displayed:" + u + " totalResults:" + e.totalResults, 4);
  return c
};
Zotero.ui.insertItemsTable = function(e, t) {
  Z.debug("Zotero.ui.insertItemsTable", 3);
  Z.debug(t, 4);
  var n = J.tmpl("itemstableTemplate", t).appendTo(J(e));
  if (Zotero.config.mobile && J(e).closest(".ui-page").length) {
    if (!J(e).find("#field-list").hasClass("ui-listview")) {
      J(e).find("#field-list").listview()
    } else {
      J(e).find("#field-list").trigger("refresh")
    }
  }
};
Zotero.ui.insertItemsPagination = function(e, t) {
  J.tmpl("itempaginationTemplate", t).appendTo(J(e));
  Zotero.ui.init.paginationButtons(t.pagination)
};
Zotero.ui.editItemForm = function(e, t) {
  Z.debug("Zotero.ui.editItemForm", 3);
  Z.debug(t, 4);
  var n = J(e);
  if (t.itemType == "note") {
    Z.debug("editItemForm - note", 3);
    n.empty();
    J.tmpl("editnoteformTemplate", {
      item: t,
      itemKey: t.itemKey
    }).appendTo(n);
    Zotero.ui.init.tinyMce("default");
    Zotero.ui.init.editButton()
  } else if (t.itemType == "attachment") {
    Z.debug("item is attachment", 4);
    n.empty();
    var r = Zotero.nav.getUrlVar("mode");
    J.tmpl("attachmentformTemplate", {
      item: t.apiObj,
      itemKey: t.itemKey,
      creatorTypes: [],
      mode: r
    }).appendTo(n);
    if (t.apiObj.tags.length === 0) {
      Zotero.ui.addTag(false)
    }
    if (Zotero.config.mobile) {
      Zotero.ui.init.editButton();
      J(e).trigger("create")
    } else {
      Zotero.ui.init.creatorFieldButtons();
      Zotero.ui.init.tagButtons();
      Zotero.ui.init.editButton()
    }
    Zotero.ui.init.tinyMce()
  } else {
    var i = t.getCreatorTypes(t.apiObj.itemType);
    i.done(J.proxy(function() {
      Z.debug("getCreatorTypes callback", 3);
      n.empty();
      var r = Zotero.nav.getUrlVar("mode");
      if (t.creators.length === 0) {
        t.creators.push({
          creatorType: t.creatorTypes[t.itemType][0],
          first: "",
          last: ""
        });
        t.apiObj.creators = t.creators
      }
      J.tmpl("itemformTemplate", {
        item: t.apiObj,
        itemKey: t.itemKey,
        creatorTypes: Zotero.Item.prototype.creatorTypes[t.apiObj.itemType],
        mode: r
      }).appendTo(n);
      if (t.apiObj.tags.length === 0) {
        Zotero.ui.addTag(false)
      }
      if (Zotero.config.mobile) {
        Zotero.ui.init.editButton();
        J(e).trigger("create")
      } else {
        Zotero.ui.init.creatorFieldButtons();
        Zotero.ui.init.tagButtons();
        Zotero.ui.init.editButton()
      }
    }, this))
  }
  J("input.taginput").autocomplete({
    source: function(e, t) {
      var n = Zotero.ui.getAssociatedLibrary(J(this.element.context).closest(".ajaxload"));
      var r = Zotero.utils.prependAutocomplete(e.term, n.tags.plainList);
      t(r)
    },
    select: function(e, t) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var n = t.item.value;
      Zotero.ui.addTag()
    }
  })
};
Zotero.ui.getAssociatedLibrary = function(e) {
  Z.debug("Zotero.ui.getAssociatedLibrary", 3);
  var t;
  if ( typeof e == "undefined") {
    t = J("#library-items-div")
  } else {
    t = J(e);
    if (t.length === 0) {
      t = J("#library-items-div")
    }
  }
  var n = t.data("zoterolibrary");
  if (!n) {
    var r = t.data("loadconfig");
    var i = r.libraryID;
    var s = r.libraryType;
    var o = r.libraryUrlIdentifier;
    if (Zotero.libraries[Zotero.utils.libraryString(s, i)]) {
      n = Zotero.libraries[Zotero.utils.libraryString(s, i, o)]
    } else {
      n = new Zotero.Library(s, i, o);
      Zotero.libraries[Zotero.utils.libraryString(s, i)] = n
    }
    t.data("zoterolibrary", n)
  }
  return n
};
Zotero.ui.showSpinner = function(e, t) {
  if (!t) {
    J(e).html("<img class='spinner' src='/static/images/theme/broken-circle-spinner.gif'/>")
  } else if (t == "horizontal") {
    J(e).html("<img class='spinner' src='/static/images/theme/broken-circle-spinner.gif'/>")
  }
};
Zotero.ui.appendSpinner = function(e) {
  J(e).append("<img class='spinner' src='/static/images/theme/broken-circle-spinner.gif'/>")
};
Zotero.ui.displayTagsFiltered = function(e, t, n, r) {
  Zotero.debug("Zotero.ui.displayTagsFiltered");
  Z.debug(r, 4);
  var i = J("#tag-filter-input").val();
  var s = J(e);
  var o = s.data("showmore");
  if (!o) {
    o = false
  }
  var u = [];
  var a = [];
  J.each(n, function(e, n) {
    if (t.tagObjects[n] && J.inArray(n, r) == -1) {
      u.push(t.tagObjects[n])
    }
  });
  J.each(r, function(e, n) {
    if (t.tagObjects[n]) {
      a.push(t.tagObjects[n])
    }
  });
  var f;
  if (!o) {
    f = u.slice(0, 25);
    J("#show-more-tags-link").show();
    J("#show-less-tags-link").hide()
  } else {
    f = u;
    J("#show-more-tags-link").hide();
    J("#show-less-tags-link").show()
  }
  var l = J("#tags-list").empty();
  J("#selected-tags-list").replaceWith(J.tmpl("tagunorderedlistTemplate", {
    tags: a,
    id: "selected-tags-list"
  }));
  J("#tags-list").replaceWith(J.tmpl("tagunorderedlistTemplate", {
    tags: f,
    id: "tags-list"
  }))
};
Zotero.ui.loadItemDetail = function(e, t) {
  Z.debug("Zotero.ui.loadItemDetail", 3);
  var n = J(t);
  n.empty();
  var r = false;
  if (e.parentKey) {
    r = e.owningLibrary.websiteUrl({
      itemKey: e.parentKey
    })
  }
  Z.debug(1);
  if (e.itemType == "note") {
    Z.debug("note item", 3);
    J.tmpl("itemnotedetailsTemplate", {
      item: e,
      parentUrl: r
    }).appendTo(n)
  } else {
    Z.debug("non-note item", 3);
    J.tmpl("itemdetailsTemplate", {
      item: e,
      parentUrl: r
    }).appendTo(n).trigger("create")
  }
  Z.debug(2);
  Zotero.ui.init.tinyMce("readonly");
  Zotero.ui.init.editButton();
  Zotero.ui.init.detailButtons();
  Zotero.ui.libraryBreadcrumbs();
  try {
    var i = document.createEvent("HTMLEvents");
    i.initEvent("ZoteroItemUpdated", true, true);
    document.dispatchEvent(i)
  } catch(s) {
    Zotero.debug("Error triggering ZoteroItemUpdated event")
  }
};
Zotero.ui.formatItemField = function(e, t, n) {
  if ( typeof n == "undefined") {
    n = false
  }
  var r = 0;
  var i = "";
  var s;
  if (Zotero.config.maxFieldSummaryLength[e]) {
    r = Zotero.config.maxFieldSummaryLength[e]
  }
  switch(e) {
    case"itemType":
      i = Zotero.localizations.typeMap[t["itemType"]];
      break;
    case"dateModified":
      if (!t["dateModified"]) {
        i = ""
      }
      s = Zotero.utils.parseApiDate(t["dateModified"]);
      if (s) {
        i = Globalize.format(s, "d") + " " + Globalize.format(s, "t")
      } else {
        i = t["dateModified"]
      }
      i = s.toLocaleString();
      break;
    case"dateAdded":
      if (!t["dateAdded"]) {
        i = ""
      }
      s = Zotero.utils.parseApiDate(t["dateAdded"]);
      if (s) {
        i = Globalize.format(s, "d") + " " + Globalize.format(s, "t")
      } else {
        i = t["dateAdded"]
      }
      break;
    case"title":
      i = t.title;
      break;
    case"creator":
      i = t.creatorSummary;
      break;
    case"addedBy":
      i = t.author.name;
      break;
    default:
      if ( typeof t[e] !== "undefined") {
        i = t[e]
      } else if (t.apiObject) {
        if (t.apiObject[e]) {
          i = t.apiObject[e]
        }
      } else if (t.contentRows) {
        J.each(t.contentRows, function(t, n) {
          if (n.field === e) {
            i = n.fieldValue
          }
        })
      }
  }
  if (n && r > 0 && i.length > r) {
    return i.slice(0, r) + "â€¦"
  } else {
    return i
  }
};
Zotero.ui.trimString = function(e, t) {
  var n = 35;
  var r = e;
  if (t) {
    n = t
  }
  if (n > 0 && r.length > n) {
    return r.slice(0, n) + "â€¦"
  } else {
    return r
  }
};
Zotero.ui.formatItemDateField = function(e, t) {
  var n;
  switch(e) {
    case"dateModified":
      if (!t["dateModified"]) {
        return ""
      }
      n = Zotero.utils.parseApiDate(t["dateModified"]);
      if (n) {
        return "<span class='localized-date-span'>" + Globalize.format(n, "d") + "</span> <span class='localized-date-span'>" + Globalize.format(n, "t") + "</span>"
      } else {
        return t["dateModified"]
      }
      return n.toLocaleString();
    case"dateAdded":
      if (!t["dateAdded"]) {
        return ""
      }
      n = Zotero.utils.parseApiDate(t["dateAdded"]);
      if (n) {
        return "<span class='localized-date-span'>" + Globalize.format(n, "d") + "</span> <span class='localized-date-span'>" + Globalize.format(n, "t") + "</span>"
      } else {
        return t["dateAdded"]
      }
      break
  }
  return ""
};
Zotero.ui.formatItemContentRow = function(e) {
  if (e.field == "date") {
    if (!e.fieldValue) {
      return ""
    }
    var t = Zotero.utils.parseApiDate(e.value);
    if (!t) {
      return e.fieldValue
    } else {
      return t.toLocaleString()
    }
  } else {
    return e.fieldValue
  }
};
Zotero.ui.userGroupsDisplay = function(e) {
  var t = "";
  J.each(e.groupsArray, function(e, n) {
    t += Zotero.ui.groupNugget(n)
  });
  return t
};
Zotero.ui.groupTypeMap = {
  Private: "Private",
  PublicOpen: "Public, Open Membership",
  PublicClosed: "Public, Closed Membership"
};
Zotero.ui.groupAccessMap = {
  all: {
    members: "Anyone can view, only members can edit",
    admins: "Anyone can view, only admins can edit"
  },
  members: {
    members: "Only members can view and edit",
    admins: "Only members can view, only admins can edit"
  },
  admins: {
    members: "Only admins can view, only members can edit",
    admins: "Only admins can view and edit"
  }
};
Zotero.ui.groupUrl = function(e, t) {
  var n;
  if (e.groupType == "Private") {
    n = "/groups/" + e.groupID
  } else {
    n = "/groups/" + Zotero.utils.slugify(e.groupName)
  }
  var r = "/groups/" + e.groupID;
  Zotero.debug("groupBase: " + n);
  switch(t) {
    case"groupView":
      return n;
    case"groupLibrary":
      return n + "/items";
    case"groupSettings":
      return r + "/settings";
    case"groupMembers":
      return r + "/members";
    case"groupLibrarySettings":
      return r + "/settings/library";
    case"groupMembersSettings":
      return r + "/settings/members"
  }
};
Zotero.ui.libraryBreadcrumbs = function(e, t) {
  Z.debug("Zotero.ui.libraryBreadcrumbs", 3);
  try {
    var n;
    if (!e) {
      e = Zotero.ui.getAssociatedLibrary(J("#feed-link-div"))
    }
    if (!t) {
      t = Zotero.nav.getUrlVars()
    }
    Z.debug(t, 4);
    if (e.libraryType == "user") {
      n = [{
        label: "Home",
        path: "/"
      }, {
        label: "People",
        path: "/people"
      }, {
        label: e.libraryLabel || e.libraryUrlIdentifier,
        path: "/" + e.libraryUrlIdentifier
      }, {
        label: "Library",
        path: "/" + e.libraryUrlIdentifier + "/items"
      }]
    } else {
      n = [{
        label: "Home",
        path: "/"
      }, {
        label: "Groups",
        path: "/groups"
      }, {
        label: e.libraryLabel || e.libraryUrlIdentifier,
        path: "/groups/" + e.libraryUrlIdentifier
      }, {
        label: "Library",
        path: "/groups/" + e.libraryUrlIdentifier + "/items"
      }]
    }
    if (t.collectionKey) {
      Z.debug("have collectionKey", 4);
      if (e.collections[t.collectionKey]) {
        n.push({
          label: e.collections[t.collectionKey]["name"],
          path: Zotero.nav.buildUrl({
            collectionKey: t.collectionKey
          })
        })
      }
    }
    if (t.itemKey) {
      Z.debug("have itemKey", 4);
      n.push({
        label: e.items.getItem(t.itemKey).title,
        path: Zotero.nav.buildUrl({
          collectionKey: t.collectionKey,
          itemKey: t.itemKey
        })
      })
    }
    Z.debug(n, 4);
    J("#breadcrumbs").empty();
    J.tmpl("breadcrumbsTemplate", {
      breadcrumbs: n
    }).appendTo(J("#breadcrumbs"));
    var r = J.tmpl("breadcrumbstitleTemplate", {
      breadcrumbs: n
    }).text();
    Zotero.nav.updateStateTitle(r);
    Z.debug("done with breadcrumbs", 4)
  } catch(i) {
    Zotero.debug("Error loading breadcrumbs", 2)
  }
};
Zotero.ui.createOnActivePage = function(e) {
};
Zotero.ui.zoteroItemUpdated = function() {
  try {
    var e = document.createEvent("HTMLEvents");
    e.initEvent("ZoteroItemUpdated", true, true);
    document.dispatchEvent(e)
  } catch(t) {
    Zotero.debug("Error triggering ZoteroItemUpdated event")
  }
};
Zotero.ui.init = {};
Zotero.ui.init.all = function() {
  J("#content").on("click", "a.ajax-link", function() {
    Z.debug("ajax-link clicked with href " + J(this).attr("href"), 3);
    Z.debug("pathname " + this.pathname, 4);
    var e = Zotero.nav.parsePathVars(this.pathname);
    Zotero.nav.urlvars.pathVars = e;
    Zotero.nav.pushState();
    return false
  });
  if (Zotero.config.mobile) {
    Zotero.ui.init.mobile()
  }
  Z.debug("ui init based on page", 3);
  switch(Zotero.config.pageClass) {
    case"my_library":
    case"user_library":
    case"group_library":
      Zotero.ui.init.library();
      Zotero.ui.bindItemLinks();
      Zotero.ui.bindCollectionLinks();
      Zotero.ui.bindTagLinks();
      break;
    case"default":
  }
};
Zotero.ui.init.library = function() {
  Z.debug("Zotero.ui.init.library", 3);
  Zotero.ui.init.fullLibrary();
  var e = J("textarea.tinymce").filter(".nolinks").length;
  var t = J("textarea.tinymce").filter(".readonly").length;
  var n = J("textarea.tinymce").not(".nolinks").not(".readonly").length;
  if (e) {
    Zotero.ui.init.tinyMce("nolinks")
  }
  if (t) {
    Zotero.ui.init.tinyMce("readonly")
  }
  if (n) {
    Zotero.ui.init.tinyMce("default")
  }
};
Zotero.ui.init.fullLibrary = function() {
  Z.debug("Zotero.ui.initFullLibrary", 3);
  if (J("#library").hasClass("ajaxload")) {
    Zotero.ui.init.offlineLibrary();
    return
  }
  Zotero.ui.init.libraryControls();
  Zotero.ui.init.tags();
  Zotero.ui.init.collections();
  Zotero.ui.init.items();
  Zotero.ui.init.feed();
  Zotero.ui.init.libraryTemplates()
};
Zotero.ui.init.libraryControls = function() {
  Z.debug("Zotero.ui.initControls", 3);
  J("#create-item-link").button({
    text: false,
    icons: {
      primary: "sprite-toolbar-item-add"
    }
  });
  J("#edit-collections-link").button({
    text: false,
    icons: {
      primary: "sprite-folder_edit",
      secondary: "ui-icon-triangle-1-s"
    }
  });
  J("#move-item-links-buttonset").buttonset();
  J(".add-to-collection-link").button({
    text: false,
    icons: {
      primary: "sprite-folder_add_to"
    }
  });
  J(".remove-from-collection-link").button({
    text: false,
    icons: {
      primary: "sprite-folder_remove_from"
    }
  });
  J(".move-to-trash-link").button({
    text: false,
    icons: {
      primary: "sprite-trash"
    }
  });
  J(".remove-from-trash-link").button({
    text: false,
    icons: {
      primary: "sprite-trash_remove"
    }
  });
  J("#edit-checkbox").button({
    text: false,
    icons: {
      primary: "sprite-page_edit"
    }
  });
  J("#cite-link").button({
    text: false,
    icons: {
      primary: "sprite-toolbar-cite"
    }
  });
  J("#export-link").button({
    text: false,
    icons: {
      primary: "sprite-toolbar-export"
    }
  });
  J("#library-settings-link").button({
    text: false,
    icons: {
      primary: "sprite-timeline_marker"
    }
  });
  J("#library-settings-form").hide();
  J("#control-panel-container").on("click", "#library-settings-link", Zotero.ui.callbacks.librarySettings);
  J.subscribe("loadCollectionsDone", function(e) {
    Z.debug("loadCollectionsDone callback", 4)
  });
  J("#library-items-div").on("change", ".itemlist-editmode-checkbox.all-checkbox", function(e) {
    J(".itemlist-editmode-checkbox").prop("checked", J(".itemlist-editmode-checkbox.all-checkbox").prop("checked"));
    Zotero.ui.updateDisabledControlButtons()
  });
  J("#library-items-div").on("change", "input.itemKey-checkbox", function(e) {
    Zotero.ui.updateDisabledControlButtons()
  });
  Zotero.ui.updateDisabledControlButtons();
  J("#control-panel-container").on("change", "#edit-checkbox", Zotero.ui.callbacks.toggleEdit);
  J("#collection-list-div").on("click", ".create-collection-link", Zotero.ui.callbacks.createCollection);
  J("#collection-list-div").on("click", ".update-collection-link", Zotero.ui.callbacks.updateCollection);
  J("#collection-list-div").on("click", ".delete-collection-link", Zotero.ui.callbacks.deleteCollection);
  J("#control-panel-container").on("click", ".add-to-collection-link", Zotero.ui.callbacks.addToCollection);
  J("#control-panel-container").on("click", "#create-item-link", Zotero.ui.callbacks.createItem);
  J("#control-panel-container").on("click", ".remove-from-collection-link", Zotero.ui.callbacks.removeFromCollection);
  J("#control-panel-container").on("click", ".move-to-trash-link", Zotero.ui.callbacks.moveToTrash);
  J("#control-panel-container").on("click", ".remove-from-trash-link", Zotero.ui.callbacks.removeFromTrash);
  J("#item-details-div").on("click", ".move-to-trash-link", Zotero.ui.callbacks.moveToTrash);
  J("delete-collection-dialog").on("submit", ".delete-collection-div form", function(e) {
    e.preventDefault()
  });
  J("update-collection-dialog").on("submit", ".update-collection-div form", function(e) {
    e.preventDefault()
  });
  J("create-collection-dialog").on("submit", ".new-collection-div form", function(e) {
    e.preventDefault()
  });
  if (Zotero.nav.getUrlVar("q")) {
    J("#header-search-query").val(Zotero.nav.getUrlVar("q"))
  }
  var e = "support";
  if (undefined !== window.zoterojsSearchContext) {
    e = zoterojsSearchContext
  }
  if (e == "library" || e == "grouplibrary") {
    var t = function(e) {
      Z.debug("header search changed");
      Z.debug(e);
      Z.debug("-" + J("#header-search-query").val());
      J("#header-search-query").val("");
      Z.debug("q is now empty");
      if (Zotero.nav.getUrlVar("q")) {
        Z.debug("q in url is set");
        Zotero.nav.setUrlVar("q", "");
        Zotero.nav.pushState()
      }
    };
    J("#simple-search button.clear-field-button").on("click", t)
  }
};
Zotero.ui.init.paginationButtons = function(e) {
  J("#item-pagination-div .back-item-pagination").buttonset();
  J("#item-pagination-div .forward-item-pagination").buttonset();
  J("#start-item-link").button({
    text: false,
    icons: {
      primary: "ui-icon-seek-first"
    }
  });
  J("#prev-item-link").button({
    text: false,
    icons: {
      primary: "ui-icon-triangle-1-w"
    }
  });
  J("#next-item-link").button({
    text: false,
    icons: {
      primary: "ui-icon-triangle-1-e"
    }
  });
  J("#last-item-link").button({
    text: false,
    icons: {
      primary: "ui-icon-seek-end"
    }
  });
  if (e.showFirstLink === false) {
    J("#start-item-link").button("option", "disabled", true)
  }
  if (e.showPrevLink === false) {
    J("#prev-item-link").button("option", "disabled", true)
  }
  if (e.showNextLink === false) {
    J("#next-item-link").button("option", "disabled", true)
  }
  if (e.showLastLink === false) {
    J("#last-item-link").button("option", "disabled", true)
  }
};
Zotero.ui.init.collections = function() {
  Z.debug("Zotero.ui.initCollections", 3)
};
Zotero.ui.init.tags = function() {
  Z.debug("Zotero.ui.initTags", 3);
  J("#tags-list-div").on("click", "#show-all-tags", function(e) {
    var t = J(this).prop("checked") ? true : false;
    Z.debug("showAllTags is " + t, 4);
    Zotero.utils.setUserPref("library_showAllTags", t);
    Zotero.callbacks.loadTags(J("#tags-list-div"))
  });
  J("#tags-list-div").on("click", "#show-more-tags-link", function(e) {
    e.preventDefault();
    var t = J(this).closest("#tags-list-div");
    t.data("showmore", true);
    Zotero.callbacks.loadTags(t)
  });
  J("#tags-list-div").on("click", "#show-less-tags-link", function(e) {
    e.preventDefault();
    var t = J(this).closest("#tags-list-div");
    t.data("showmore", false);
    Zotero.callbacks.loadTags(t)
  });
  J("#tags-list-div").on("keydown", ".taginput", function(e) {
    if (e.keyCode === J.ui.keyCode.ENTER) {
      e.preventDefault();
      if (J(this).val() !== "") {
        Zotero.ui.addTag();
        e.stopImmediatePropagation()
      }
    }
  });
  J("#tags-list-div").on("keyup", "#tag-filter-input", function(e) {
    Z.debug(J("#tag-filter-input").val(), 3);
    Z.debug("value:" + J("#tag-filter-input").val(), 4);
    var t = Zotero.ui.getAssociatedLibrary(J("#tag-filter-input").closest(".ajaxload"));
    var n = t.tags.plainList;
    var r = Zotero.utils.matchAnyAutocomplete(J("#tag-filter-input").val(), n);
    Zotero.ui.displayTagsFiltered(J("#tags-list-div"), t.tags, r, []);
    Z.debug(r, 4)
  });
  J("#tags-list-div").on("click", "#refresh-tags-link", function(e) {
    e.preventDefault();
    var t = Zotero.ui.getAssociatedLibrary(J("#tag-filter-input").closest(".ajaxload"));
    Zotero.callbacks.loadTags(J("#tags-list-div"), false);
    return false
  })
};
Zotero.ui.init.items = function() {
  Z.debug("Zotero.ui.initItems", 3);
  J("#item-details-div").on("click", ".saveitembutton", Zotero.ui.saveItemCallback);
  J("#item-details-div").on("submit", ".itemDetailForm", Zotero.ui.saveItemCallback);
  J("#item-details-div").on("click", ".cancelitemeditbutton", function() {
    Zotero.nav.clearUrlVars(["itemKey", "collectionKey", "tag", "q"]);
    Zotero.nav.pushState()
  });
  J("#item-details-div").on("click", ".itemTypeSelectButton", function() {
    Z.debug("itemTypeSelectButton clicked", 3);
    var e = J("#itemType").val();
    Zotero.nav.urlvars.pathVars["itemType"] = e;
    Zotero.nav.pushState();
    return false
  });
  J("#item-details-div").on("change", ".itemDetailForm #itemTypeSelect", function() {
    Z.debug("itemTypeSelect changed", 3);
    var e = J(this).val();
    Zotero.nav.urlvars.pathVars["itemType"] = e;
    Zotero.nav.pushState()
  });
  J("#item-details-div").on("keydown", ".itemDetailForm input", function(e) {
    if (e.keyCode === J.ui.keyCode.ENTER) {
      e.preventDefault();
      var t = J(this).nextAll("input, button, textarea, select");
      if (t.length) {
        t.first().focus()
      } else {
        J(this).closest("tr").nextAll().find("input, button, textarea, select").first().focus()
      }
    }
  });
  J("#item-details-div").on("click", ".add-tag-button", function() {
    Z.debug("add tag button clicked", 4);
    Zotero.ui.addTag();
    return false
  });
  J("#item-details-div").on("click", ".add-tag-link", function() {
    Z.debug("add tag link clicked", 4);
    Zotero.ui.addTag();
    return false
  });
  J("#item-details-div").on("click", ".remove-tag-link", function() {
    Z.debug("remove tag link clicked", 4);
    Zotero.ui.removeTag(J(this));
    return false
  });
  J("#item-details-div").on("click", ".add-creator-link", function() {
    Z.debug("add creator button clicked", 4);
    Zotero.ui.addCreator(this);
    return false
  });
  J("#item-details-div").on("click", ".remove-creator-link", function() {
    Z.debug("add creator button clicked", 4);
    Zotero.ui.removeCreator(this);
    return false
  });
  J("#item-details-div").on("click", ".switch-two-field-creator-link", function() {
    Z.debug("switch two field creator clicked");
    var e, t;
    var n = J(this).closest("tr.creator").find("input[id$='_name']").val();
    var r = n.split(" ");
    if (r.length > 1) {
      e = r.splice(-1,1)[0];
      t = r.join(" ")
    } else {
      e = n;
      t = ""
    }
    var i = J(this).closest("form").find("select.itemType").val();
    var s = parseInt(J(this).closest("tr.creator").attr("id").substr(8), 10);
    var o = J(this).closest("tr.creator").find("select#creator_" + s + "_creatorType").val();
    var u = J(this).closest("tr").replaceWith(J.tmpl("authorelementsdoubleTemplate", {
      index: s,
      creator: {
        firstName: t,
        lastName: e,
        creatorType: o
      },
      creatorTypes: Zotero.Item.prototype.creatorTypes[i]
    }));
    Zotero.ui.init.creatorFieldButtons()
  });
  J("#item-details-div").on("click", ".switch-single-field-creator-link", function() {
    Z.debug("switch single field clicked");
    var e;
    var t = J(this).closest("div.creator-input-div").find("input[id$='_firstName']").val();
    var n = J(this).closest("div.creator-input-div").find("input[id$='_lastName']").val();
    e = t + " " + n;
    var r = J(this).closest("form").find("select.itemType").val();
    var i = parseInt(J(this).closest("tr.creator").attr("id").substr(8), 10);
    var s = J(this).closest("tr.creator").find("select#creator_" + i + "_creatorType").val();
    var o = J(this).closest("tr").replaceWith(J.tmpl("authorelementssingleTemplate", {
      index: i,
      creator: {
        name: e
      },
      creatorTypes: Zotero.Item.prototype.creatorTypes[r]
    }));
    Zotero.ui.init.creatorFieldButtons()
  });
  J("#item-details-div").on("click", ".add-note-button", function() {
    Z.debug("add note button clicked", 3);
    Zotero.ui.addNote(this);
    return false
  });
  J("#library-items-div").on("click", ".field-table-header", function() {
    Z.debug(".field-table-header clicked", 3);
    var e = Zotero.nav.getUrlVar("order") || Zotero.config.userDefaultApiArgs.order;
    var t = Zotero.nav.getUrlVar("sort") || Zotero.config.userDefaultApiArgs.sort || Zotero.config.sortOrdering[e] || "asc";
    var n = J(this).data("columnfield");
    var r = Zotero.config.sortOrdering[n];
    if (J.inArray(n, Zotero.Library.prototype.sortableColumns) == -1) {
      return false
    }
    if (e == n && t == r) {
      if (r == "asc") {
        r = "desc"
      } else {
        r = "asc"
      }
    }
    if (!n) {
      Zotero.ui.jsNotificationMessage("no order field mapped to column");
      return false
    }
    Zotero.nav.urlvars.pathVars["order"] = n;
    Zotero.nav.urlvars.pathVars["sort"] = r;
    Zotero.nav.pushState();
    Zotero.config.userDefaultApiArgs.sort = r;
    Zotero.config.userDefaultApiArgs.order = n;
    Zotero.utils.setUserPref("library_defaultSort", n + "," + r)
  });
  J("#item-details-div").on("click", "#cite-item-link", Zotero.ui.callbacks.citeItems);
  J("#build-bibliography-link").on("click", Zotero.ui.callbacks.citeItems);
  J("#cite-link").on("click", Zotero.ui.callbacks.citeItems);
  J("#export-formats-div").on("click", ".export-link", Zotero.ui.callbacks.exportItems);
  J("#export-link").on("click", Zotero.ui.callbacks.showExportDialog);
  J("#export-dialog").on("click", ".export-link", Zotero.ui.callbacks.exportItems);
  J("#item-details-div").on("click", "#upload-attachment-link", Zotero.ui.callbacks.uploadAttachment);
  J.subscribe("hasFirstChild", function(e) {
    var t = J("#item-details-div");
    Zotero.ui.showChildren(t, e)
  })
};
Zotero.ui.init.creatorFieldButtons = function() {
  if (Zotero.config.mobile) {
    Zotero.ui.createOnActivePage(J("tr.creator"));
    return
  }
  J(".add-remove-creator-buttons-container").buttonset();
  J("a.switch-single-field-creator-link").button({
    text: false,
    icons: {
      primary: "sprite-textfield-single"
    }
  });
  J("a.switch-two-field-creator-link").button({
    text: false,
    icons: {
      primary: "sprite-textfield-dual"
    }
  });
  J("a.remove-creator-link").button({
    text: false,
    icons: {
      primary: "sprite-minus"
    }
  });
  J("a.add-creator-link").button({
    text: false,
    icons: {
      primary: "sprite-plus"
    }
  })
};
Zotero.ui.init.editButton = function() {
  Z.debug("Zotero.ui.init.editButton", 3);
  var e = J("#edit-checkbox");
  if (Zotero.nav.getUrlVar("mode") == "edit") {
    e.prop("checked", true)
  } else {
    e.prop("checked", false)
  }
  e.button("refresh");
  if (!Zotero.nav.getUrlVar("itemKey")) {
    e.button("option", "disabled", true)
  } else {
    e.button("option", "disabled", false)
  }
};
Zotero.ui.init.detailButtons = function() {
  Z.debug("Zotero.ui.init.detaButtons", 3);
  J("#upload-attachment-link").button();
  J("#cite-item-link").button()
};
Zotero.ui.init.tagButtons = function() {
  J(".add-remove-tag-container").buttonset();
  J(".remove-tag-link").button({
    text: false,
    icons: {
      primary: "sprite-minus"
    }
  });
  J(".add-tag-link").button({
    text: false,
    icons: {
      primary: "sprite-plus"
    }
  })
};
Zotero.ui.init.feed = function() {
  J("#export-section-title").bind("click", function(e) {
    e.preventDefault();
    J("#export-list").slideToggle()
  })
};
Zotero.ui.init.tinyMce = function(e, t, n) {
  if (!e) {
    e = "default"
  }
  var r = "specific_textareas";
  if (n) {
    r = "exact"
  } else {
    n = ""
  }
  Z.debug("tinyMce config of type: " + e, 3);
  var i = {
    mode: r,
    elements: n,
    theme: "advanced",
    theme_advanced_toolbar_location: "top",
    theme_advanced_buttons1: "bold,italic,underline,strikethrough,separator,sub,sup,separator,forecolorpicker,backcolorpicker,separator,blockquote,separator,link,unlink",
    theme_advanced_buttons2: "formatselect,separator,justifyleft,justifycenter,justifyright,separator,bullist,numlist,outdent,indent,separator,removeformat,code,",
    theme_advanced_buttons3: "",
    theme_advanced_toolbar_align: "left",
    theme_advanced_statusbar_location: "bottom",
    theme_advanced_resizing: true,
    relative_urls: false,
    editor_selector: "default"
  };
  if (t) {
    i.init_instance_callback = function(e) {
      e.focus()
    }
  }
  if (e != "nolinks") {
    i.theme_advanced_buttons1 += ",link"
  }
  if (e == "nolinks") {
    i.editor_selector = "nolinks"
  }
  if (e == "readonly") {
    i.readonly = 1;
    i.editor_selector = "readonly"
  }
  tinymce.init(i);
  return i
};
Zotero.ui.init.libraryTemplates = function() {
  J("#tagrowTemplate").template("tagrowTemplate");
  J("#tagslistTemplate").template("tagslistTemplate");
  J("#collectionlistTemplate").template("collectionlistTemplate");
  J("#collectionrowTemplate").template("collectionrowTemplate");
  J("#itemrowTemplate").template("itemrowTemplate");
  J("#itemstableTemplate").template("itemstableTemplate");
  J("#itempaginationTemplate").template("itempaginationTemplate");
  J("#itemdetailsTemplate").template("itemdetailsTemplate");
  J("#itemnotedetailsTemplate").template("itemnotedetailsTemplate");
  J("#itemformTemplate").template("itemformTemplate");
  J("#citeitemformTemplate").template("citeitemformTemplate");
  J("#attachmentformTemplate").template("attachmentformTemplate");
  J("#attachmentuploadTemplate").template("attachmentuploadTemplate");
  J("#datafieldTemplate").template("datafieldTemplate");
  J("#editnoteformTemplate").template("editnoteformTemplate");
  J("#itemtagTemplate").template("itemtagTemplate");
  J("#itemtypeselectTemplate").template("itemtypeselectTemplate");
  J("#authorelementssingleTemplate").template("authorelementssingleTemplate");
  J("#authorelementsdoubleTemplate").template("authorelementsdoubleTemplate");
  J("#childitemsTemplate").template("childitemsTemplate");
  J("#editcollectionbuttonsTemplate").template("editcollectionbuttonsTemplate");
  J("#choosecollectionformTemplate").template("choosecollectionformTemplate");
  J("#breadcrumbsTemplate").template("breadcrumbsTemplate");
  J("#breadcrumbstitleTemplate").template("breadcrumbstitleTemplate");
  J("#newcollectionformTemplate").template("newcollectionformTemplate");
  J("#updatecollectionformTemplate").template("updatecollectionformTemplate");
  J("#deletecollectionformTemplate").template("deletecollectionformTemplate");
  J("#tagunorderedlistTemplate").template("tagunorderedlistTemplate");
  J("#librarysettingsTemplate").template("librarysettingsTemplate");
  J("#addtocollectionformTemplate").template("addtocollectionformTemplate");
  J("#exportformatsTemplate").template("exportformatsTemplate")
};
Zotero.ui.callbacks.toggleEdit = function(e) {
  Z.debug("edit checkbox toggled", 3);
  if (J(this).prop("checked")) {
    Z.debug("has val: " + J(this).val());
    Zotero.nav.urlvars.pathVars["mode"] = "edit"
  } else {
    Z.debug("removing edit mode", 3);
    delete Zotero.nav.urlvars.pathVars["mode"]
  }
  Zotero.nav.pushState();
  return false
};
Zotero.ui.callbacks.createCollection = function(e) {
  Z.debug("create-collection-link clicked", 3);
  Z.debug(J(this));
  var t = Zotero.ui.getAssociatedLibrary(J(this).closest(".ajaxload"));
  var n = t.collections.nestedOrderingArray();
  var r = J("#create-collection-dialog").empty();
  if (Zotero.config.mobile) {
    J("#newcollectionformTemplate").tmpl({
      ncollections: n
    }).replaceAll(r)
  } else {
    J("#newcollectionformTemplate").tmpl({
      ncollections: n
    }).appendTo(r)
  }
  var i = Zotero.nav.getUrlVar("collectionKey");
  J("#new-collection-parent").val(i);
  var s = J.proxy(function() {
    var e = J("#new-collection-parent").val();
    var t = J("input#new-collection-title-input").val() || "Untitled";
    var n = Zotero.ui.getAssociatedLibrary(J(this).closest("div.ajaxload"));
    var r = n.addCollection(t, e);
    r.done(J.proxy(function() {
      n.collections.dirty = true;
      Zotero.nav.pushState(true)
    }, this));
    Zotero.ui.closeDialog(J("#create-collection-dialog"))
  }, this);
  Zotero.ui.dialog(J("#create-collection-dialog"), {
    modal: true,
    buttons: {
      Create: s,
      Cancel: function() {
        Zotero.ui.closeDialog(J("#create-collection-dialog"))
      }
    }
  });
  var o = J("#new-collection-parent").width() + 50;
  J("#create-collection-dialog").dialog("option", "width", o);
  return false
};
Zotero.ui.callbacks.updateCollection = function(e) {
  Z.debug("update-collection-link clicked", 3);
  e.preventDefault();
  e.stopImmediatePropagation();
  var t = Zotero.ui.getAssociatedLibrary(J(this).closest(".ajaxload"));
  var n = t.collections.nestedOrderingArray();
  var r = J("#modify-collection-dialog").empty();
  if (Zotero.config.mobile) {
    J("#updatecollectionformTemplate").tmpl({
      ncollections: n
    }).replaceAll(r)
  } else {
    J("#updatecollectionformTemplate").tmpl({
      ncollections: n
    }).appendTo(r)
  }
  var i = Zotero.nav.getUrlVar("collectionKey");
  var s = t.collections[i];
  var o = s.parent;
  J("#update-collection-parent-select").val(o);
  J("#updated-collection-title-input").val(t.collections[i].title);
  var u = J.proxy(function() {
    var e = J("input#updated-collection-title-input").val() || "Untitled";
    var n = J("#update-collection-parent-select").val();
    var r = s;
    if (!r) {
      Zotero.ui.jsNotificationMessage("Selected collection not found", "error");
      return false
    }
    var i = r.update(e, n);
    i.done(J.proxy(function() {
      Zotero.ui.jsNotificationMessage("Collection Saved", "confirm");
      t.collections.dirty = true;
      Zotero.nav.pushState(true);
      Zotero.ui.closeDialog(J("#modify-collection-dialog"))
    }, this));
    Zotero.ui.closeDialog(J("#modify-collection-dialog"))
  }, this);
  Zotero.ui.dialog(J("#modify-collection-dialog"), {
    modal: true,
    buttons: {
      Save: u,
      Cancel: function() {
        Zotero.ui.closeDialog(J("#modify-collection-dialog"))
      }
    }
  });
  var a = J("#update-collection-parent-select").width() + 50;
  J("#modify-collection-dialog").dialog("option", "width", a);
  J("#updated-collection-title-input").select();
  return false
};
Zotero.ui.callbacks.deleteCollection = function(e) {
  Z.debug("delete-collection-link clicked", 3);
  e.preventDefault();
  e.stopImmediatePropagation();
  var t = Zotero.ui.getAssociatedLibrary(J(this).closest(".ajaxload"));
  var n = Zotero.nav.getUrlVar("collectionKey");
  var r = t.collections[n];
  var i = J("#delete-collection-dialog").empty();
  J("#delete-collection-dialog").empty().append("");
  if (Zotero.config.mobile) {
    J("#deletecollectionformTemplate").tmpl({
      collection: r
    }).replaceAll(i)
  } else {
    J("#deletecollectionformTemplate").tmpl({
      collection: r
    }).appendTo(i)
  }
  J("#delete-collection-select").val(n);
  var s = J.proxy(function() {
    Z.debug("Zotero.ui.deleteSelectedCollection", 3);
    var e = r;
    if (!e) {
      Zotero.ui.jsNotificationMessage("Selected collection not found", "error");
      return false
    }
    var n = e.remove();
    n.done(J.proxy(function() {
      delete Zotero.nav.urlvars.pathVars["collectionKey"];
      t.collections.dirty = true;
      Zotero.nav.pushState();
      Zotero.ui.jsNotificationMessage(e.title + " removed", "confirm")
    }, this));
    Zotero.ui.closeDialog(J("#delete-collection-dialog"));
    return false
  }, this);
  Zotero.ui.dialog(J("#delete-collection-dialog"), {
    modal: true,
    buttons: {
      Delete: s,
      Cancel: function() {
        Zotero.ui.closeDialog(J("#delete-collection-dialog"))
      }
    }
  });
  return false
};
Zotero.ui.callbacks.createItem = function(e) {
  Z.debug("create-item-Link clicked", 3);
  var t = Zotero.nav.getUrlVar("collectionKey");
  if (t) {
    Zotero.nav.urlvars.pathVars = {
      action: "newItem",
      mode: "edit",
      collectionKey: t
    }
  } else {
    Zotero.nav.urlvars.pathVars = {
      action: "newItem",
      mode: "edit"
    }
  }
  Zotero.nav.pushState();
  return false
};
Zotero.ui.callbacks.citeItems = function(e) {
  Z.debug("cite-item-link clicked", 3);
  e.preventDefault();
  var t = Zotero.ui.getAssociatedLibrary();
  var n = J("#cite-item-dialog").empty();
  if (Zotero.config.mobile) {
    J("#citeitemformTemplate").tmpl({}).replaceAll(n)
  } else {
    J("#citeitemformTemplate").tmpl({}).appendTo(n)
  }
  var r = function() {
    Z.debug("citeFunction", 3);
    Zotero.ui.showSpinner(J("#cite-box-div"));
    var e = J("#cite-item-select").val();
    Z.debug(e, 4);
    var n = Zotero.ui.getSelectedItemKeys(J("#edit-mode-items-form"));
    if (n.length === 0) {
      n = Zotero.ui.getAllFormItemKeys(J("#edit-mode-items-form"))
    }
    Z.debug(n, 4);
    var r = t.loadFullBib(n, e);
    r.done(function(e) {
      J("#cite-box-div").html(e)
    })
  };
  var i = J("#cite-item-select").width() + 150;
  if (!Zotero.config.mobile) {
    i = J("#cite-item-select").width() + 300
  }
  Zotero.ui.dialog(J("#cite-item-dialog"), {
    modal: true,
    width: i
  });
  J("#cite-item-select").on("change", r);
  Z.debug("done with Zotero.ui.callbacks.citeItems");
  return false
};
Zotero.ui.callbacks.showExportDialog = function(e) {
  Z.debug("export-link clicked", 3);
  var t = Zotero.ui.getAssociatedLibrary(J("#feed-link-div"));
  var n = J("#export-dialog").empty();
  if (Zotero.config.mobile) {
    J("#export-dialog").empty().append(J("#export-list").contents().clone())
  } else {
    J("#export-dialog").empty().append(J("#export-list").contents().clone())
  }
  var r = function() {
    Z.debug("exportFunction", 3)
  };
  Zotero.ui.dialog(J("#export-dialog"), {
    modal: true,
    buttons: {
      Cancel: function() {
        Zotero.ui.closeDialog(J("#export-dialog"))
      }
    }
  });
  Z.debug("done with Zotero.ui.callbacks.exportItems");
  return false
};
Zotero.ui.callbacks.exportItems = function(e) {
  Z.debug("cite-item-link clicked", 3);
  e.preventDefault();
  var t = Zotero.ui.getAssociatedLibrary(J("#feed-link-div"));
  var n = J("#feed-link-div").data("urlconfig");
  var r = Zotero.ui.getSelectedItemKeys(J("#edit-mode-items-form"));
  var i = J(this).data("exportformat");
  var s = J.extend(n, {
    format: i,
    start: "0",
    limit: null
  });
  var o = r.join(",");
  if (o !== "") {
    s["itemKey"] = o
  }
  var u = Zotero.ajax.apiRequestUrl(s) + Zotero.ajax.apiQueryString(s);
  window.open(u, "_blank")
};
Zotero.ui.callbacks.uploadAttachment = function(e) {
  Z.debug("uploadAttachment", 3);
  e.preventDefault();
  var t = Zotero.ui.getAssociatedLibrary(J(this).closest(".ajaxload"));
  var n = J("#upload-attachment-dialog").empty();
  if (Zotero.config.mobile) {
    J("#attachmentuploadTemplate").tmpl({}).replaceAll(n)
  } else {
    J("#attachmentuploadTemplate").tmpl({}).appendTo(n)
  }
  var r = function() {
    Z.debug("uploadFunction", 3);
    var e = J("#attachmentuploadfileinfo").data("fileInfo");
    Zotero.ui.showSpinner(J("#fileuploadspinner"));
    var n = Zotero.nav.getUrlVar("itemKey");
    var r = t.items.getItem(n);
    var i = new Zotero.Item;
    i.owningLibrary = t;
    i.libraryType = t.type;
    i.libraryID = t.libraryID;
    i.parentItemKey = n;
    var s = i.initEmpty("attachment", "imported_file");
    s.done(function(t) {
      Z.debug("templateItemDeferred callback");
      t.title = J("#upload-file-title-input").val();
      t.apiObj["title"] = t.title;
      var n = t.writeItem();
      n.done(J.proxy(function(n) {
        var i = J("#upload-file-title-input").val() || e.filename;
        var s = t.getUploadAuthorization({
          md5: e.md5,
          filename: i,
          filesize: e.filesize,
          mtime: e.mtime,
          contentType: e.contentType,
          params: 1
        });
        s.done(function(e, n, i) {
          Z.debug("uploadAuth callback", 3);
          var s;
          Z.debug(e, 4);
          if ( typeof e == "string") {
            s = JSON.parse(e)
          } else {
            s = e
          }
          if (s.exists == 1) {
            Zotero.ui.closeDialog(J("#upload-attachment-dialog"));
            r.numChildren++;
            Zotero.nav.pushState(true)
          } else {
            var o = J("#attachmentuploadfileinfo").data("fileInfo").reader.result;
            var u = J("#attachmentuploadfileinfo").data("file");
            var a = Zotero.file.uploadFile(s, u);
            a.onreadystatechange = J.proxy(function(e) {
              if (a.readyState == 4 && a.status == 201) {
                Z.debug("fullUpload done", 3);
                var n = t.registerUpload(s.uploadKey);
                n.done(function() {
                  Zotero.ui.closeDialog(J("#upload-attachment-dialog"));
                  r.numChildren++;
                  Zotero.nav.pushState(true)
                }).fail(function(e, t, n) {
                  Z.debug("Upload registration failed - " + t, 3);
                  Zotero.ui.jsNotificationMessage("Error registering upload", "error");
                  if (e.status == 412) {
                    Z.debug("412 Precondition Failed on upload registration", 3);
                    Zotero.ui.jsNotificationMessage("The file has changed remotely", "error")
                  }
                  Zotero.ui.closeDialog(J("#upload-attachment-dialog"))
                })
              }
            }, this);
            a.upload.onprogress = function(e) {
              Z.debug("fullUpload.upload.onprogress");
              var t = Math.round(e.loaded / e.total * 100);
              Z.debug("Upload progress event:" + e.loaded + " / " + e.total + " : " + t + "%");
              J("#uploadprogressmeter").val(t)
            }
          }
        }).fail(function(e, t, n) {
          Z.debug("Upload authorization failed - " + t, 3);
          Zotero.ui.jsNotificationMessage("Error getting upload authorization", "error");
          switch(e.status) {
            case 400:
              Z.debug("400 Bad request on upload authorization");
              Z.debug(e.responseText);
              break;
            case 403:
              Z.debug("403 Access denied uploading attachment", 3);
              Zotero.ui.jsNotificationMessage("You do not have permission to edit files", "error");
              break;
            case 409:
              Z.debug("409 Library locked uploading attachment", 3);
              Zotero.ui.jsNotificationMessage("The library is currently locked. Please try again in a few minutes.", "error");
              break;
            case 412:
              Z.debug("412 Precondition failed uploading attachment", 3);
              Zotero.ui.jsNotificationMessage("File conflict. Remote file has changed", "error");
              break;
            case 413:
              Z.debug("413 Too large uploading attachment", 3);
              Zotero.ui.jsNotificationMessage("Requested upload would exceed storage quota.", "error");
              break;
            case 428:
              Z.debug("428 Precondition failed uploading attachment", 3);
              Zotero.ui.jsNotificationMessage("Precondition required error", "error");
              break;
            case 429:
              Z.debug("429 Too many requests uploading attachment", 3);
              Zotero.ui.jsNotificationMessage("Too many uploads pending. Please try again in a few minutes", "error");
              break
          }
          Zotero.ui.closeDialog(J("#upload-attachment-dialog"))
        })
      }))
    })
  };
  Zotero.ui.dialog(J("#upload-attachment-dialog"), {
    modal: true,
    buttons: {
      Upload: r,
      Cancel: function() {
        Zotero.ui.closeDialog(J("#upload-attachment-dialog"))
      }
    },
    width: 350
  });
  var i = J("#fileuploadinput").width() + 50;
  J("#upload-attachment-dialog").dialog("option", "width", i);
  var s = function(e) {
    Z.debug("attachmentUpload handleFiles", 3);
    if ( typeof e == "undefined" || e.length === 0) {
      return false
    }
    var t = e[0];
    J("#attachmentuploadfileinfo").data("file", t);
    var n = Zotero.file.getFileInfo(t, function(e) {
      J("#attachmentuploadfileinfo").data("fileInfo", e);
      J("#upload-file-title-input").val(e.filename);
      J("#attachmentuploadfileinfo .uploadfilesize").html(e.filesize);
      J("#attachmentuploadfileinfo .uploadfiletype").html(e.contentType);
      J("#droppedfilename").html(e.filename)
    });
    return
  };
  J("#fileuploaddroptarget").on("dragenter dragover", function(e) {
    e.stopPropagation();
    e.preventDefault()
  });
  J("#fileuploaddroptarget").on("drop", function(e) {
    Z.debug("fileuploaddroptarget drop callback", 3);
    e.stopPropagation();
    e.preventDefault();
    var t = e.originalEvent;
    var n = t.dataTransfer;
    var r = n.files;
    s(r)
  });
  J("#fileuploadinput").on("change", function(e) {
    Z.debug("fileuploaddroptarget callback 1");
    e.stopPropagation();
    e.preventDefault();
    var t = J("#fileuploadinput").get(0).files;
    s(t)
  });
  return false
};
Zotero.ui.callbacks.moveToTrash = function(e) {
  e.preventDefault();
  Z.debug("move-to-trash clicked", 3);
  var t = [];
  if (Zotero.nav.getUrlVar("itemKey")) {
    t = [Zotero.nav.getUrlVar("itemKey")]
  } else {
    t = Zotero.ui.getSelectedItemKeys(J("#edit-mode-items-form"))
  }
  Z.debug(t, 3);
  var n = Zotero.ui.getAssociatedLibrary(J(this).closest("div.ajaxload"));
  var r = [];
  Zotero.ui.showSpinner(J("#library-items-div"));
  if (Zotero.nav.getUrlVar("collectionKey") == "trash") {
    J.each(t, function(e, t) {
      var i = n.items.getItem(t);
      if (i.apiObj.deleted == 1) {
        var s = n.deleteItem(t);
        r.push(s)
      }
    })
  } else {
    J.each(t, function(e, t) {
      var i = n.trashItem(t);
      r.push(i)
    })
  }
  n.dirty = true;
  J.when.apply(J, r).then(function() {
    Zotero.nav.clearUrlVars(["collectionKey", "tag", "q"]);
    Zotero.nav.pushState(true)
  });
  return false
};
Zotero.ui.callbacks.removeFromTrash = function(e) {
  Z.debug("remove-from-trash clicked", 3);
  var t = [];
  if (Zotero.nav.getUrlVar("itemKey")) {
    t = [Zotero.nav.getUrlVar("itemKey")]
  } else {
    t = Zotero.ui.getSelectedItemKeys(J("#edit-mode-items-form"))
  }
  Z.debug(t, 4);
  var n = Zotero.ui.getAssociatedLibrary(J(this).closest("div.ajaxload"));
  var r = [];
  Zotero.ui.showSpinner(J("#library-items-div"));
  J.each(t, function(e, t) {
    var i = n.items.getItem(t);
    if (i.apiObj.deleted == 1) {
      var s = n.untrashItem(t);
      r.push(s)
    }
  });
  n.dirty = true;
  J.when.apply(J, r).then(function() {
    Zotero.nav.clearUrlVars(["collectionKey", "tag", "q"]);
    Zotero.nav.pushState(true)
  });
  return false
};
Zotero.ui.callbacks.removeFromCollection = function(e) {
  Z.debug("remove-from-collection clicked", 3);
  var t = Zotero.ui.getSelectedItemKeys(J("#edit-mode-items-form"));
  var n = Zotero.ui.getAssociatedLibrary(J(this).closest("div.ajaxload"));
  var r = Zotero.nav.getUrlVar("collectionKey");
  var i = n.collections[r];
  var s = [];
  J.each(t, function(e, t) {
    var n = i.removeItem(t);
    s.push(n)
  });
  n.dirty = true;
  J.when.apply(this, s).then(function() {
    Z.debug("removal responses finished. forcing reload", 3);
    Zotero.nav.clearUrlVars(["collectionKey", "tag"]);
    Zotero.nav.pushState(true)
  });
  return false
};
Zotero.ui.callbacks.addToCollection = function(e) {
  Z.debug("add-to-collection-link clicked", 3);
  e.preventDefault();
  var t = Zotero.ui.getAssociatedLibrary();
  var n = J("#add-to-collection-dialog").empty();
  Z.debug(t.collections.ncollections, 4);
  J("#addtocollectionformTemplate").tmpl({
    ncollections: t.collections.nestedOrderingArray()
  }).appendTo(n);
  var r = J.proxy(function() {
    Z.debug("add-to-collection-select changed", 3);
    var e = J("#target-collection").val();
    Z.debug("move to: " + e, 4);
    Zotero.ui.addToCollection(e, t);
    Zotero.ui.closeDialog(J("#add-to-collection-dialog"));
    return false
  }, this);
  Zotero.ui.dialog(J("#add-to-collection-dialog"), {
    modal: true,
    buttons: {
      Add: r,
      Cancel: function() {
        J("#add-to-collection-dialog").dialog("close")
      }
    }
  });
  var i = J("#target-collection").width() + 50;
  J("#add-to-collection-dialog").dialog("option", "width", i);
  return false
};
Zotero.ui.callbacks.librarySettings = function(e) {
  Z.debug("library-settings-link clicked", 3);
  e.preventDefault();
  var t = J("#library-settings-dialog").empty();
  J("#librarysettingsTemplate").tmpl({
    columnFields: Zotero.Library.prototype.displayableColumns
  }).appendTo(t);
  J("#display-column-field-title").prop("checked", true).prop("disabled", true);
  J.each(Zotero.prefs.library_listShowFields, function(e, t) {
    var n = "#display-column-field-" + t;
    J(n).prop("checked", true)
  });
  var n = J.proxy(function() {
    var e = [];
    J("#library-settings-form").find("input:checked").each(function() {
      e.push(J(this).val())
    });
    var t = e.join(",");
    Zotero.utils.setUserPref("library_listShowFields", t);
    Zotero.prefs.library_listShowFields = e;
    Zotero.callbacks.loadItems(J("#library-items-div"));
    Zotero.ui.closeDialog(J("#library-settings-dialog"))
  }, this);
  Zotero.ui.dialog(J("#library-settings-dialog"), {
    modal: true,
    buttons: {
      Save: n,
      Cancel: function() {
        Zotero.ui.closeDialog(J("#library-settings-dialog"))
      }
    }
  })
};
Zotero.ui.callbacks.sortBy = function(e) {
  Z.debug("sort by link clicked", 3);
  e.preventDefault();
  var t = Zotero.nav.getUrlVar("order") || Zotero.config.userDefaultApiArgs.order;
  var n = Zotero.nav.getUrlVar("sort") || Zotero.config.sortOrdering[t] || "asc";
  var r = J("#sort-dialog");
  J("#sortdialogTemplate").tmpl({
    columnFields: Zotero.Library.prototype.displayableColumns,
    currentOrderField: t
  }).replaceAll(r);
  var i = J.proxy(function() {
    Z.debug("Zotero.ui.callbacks.sortBy submit callback");
    var e = Zotero.nav.getUrlVar("order") || Zotero.config.userDefaultApiArgs.order;
    var t = Zotero.nav.getUrlVar("sort") || Zotero.config.userDefaultApiArgs.sort || Zotero.config.sortOrdering[e] || "asc";
    var n = J("#sortColumnSelect").val();
    var r = J("#sortOrderSelect").val() || Zotero.config.sortOrdering[n];
    if (J.inArray(n, Zotero.Library.prototype.sortableColumns) == -1) {
      return false
    }
    if (e == n && t == r) {
      if (r == "asc") {
        r = "desc"
      } else {
        r = "asc"
      }
    }
    if (!n) {
      Zotero.ui.jsNotificationMessage("no order field mapped to column");
      return false
    }
    Zotero.nav.urlvars.pathVars["order"] = n;
    Zotero.nav.urlvars.pathVars["sort"] = r;
    Zotero.nav.pushState();
    Zotero.config.userDefaultApiArgs.sort = r;
    Zotero.config.userDefaultApiArgs.order = n;
    Zotero.utils.setUserPref("library_defaultSort", n + "," + r);
    Zotero.ui.closeDialog(J("#sort-dialog"))
  }, this);
  Zotero.ui.dialog(J("#sort-dialog"), {
    modal: true,
    buttons: {
      Save: i,
      Cancel: function() {
        Zotero.ui.closeDialog(J("#sort-dialog"))
      }
    }
  })
};
Zotero.url.itemHref = function(e) {
  var t = "";
  var n = e.owningLibrary;
  t += n.libraryBaseWebsiteUrl + "/itemKey/" + e.itemKey;
  return t
};
Zotero.url.attachmentDownloadLink = function(e) {
  var t = "";
  if (e.links["enclosure"]) {
    var n = e.links["enclosure"]["href"].substr(-4, 4);
    if (n == "view") {
      t += '<a href="' + Zotero.config.baseWebsiteUrl + Zotero.config.nonparsedBaseUrl + "/" + e.itemKey + "/file/view" + '">' + "View Snapshot</a>"
    } else {
      var r = Zotero.utils.translateMimeType(e.links["enclosure"].type);
      var i = e.links["enclosure"];
      var s = parseInt(i["length"], 10);
      var o = "" + s + " B";
      if (s > 1073741824) {
        o = "" + (s / 1073741824).toFixed(1) + " GB"
      } else if (s > 1048576) {
        o = "" + (s / 1048576).toFixed(1) + " MB"
      } else if (s > 1024) {
        o = "" + (s / 1024).toFixed(1) + " KB"
      }
      Z.debug(r);
      t += '<a href="' + Zotero.config.baseWebsiteUrl + Zotero.config.nonparsedBaseUrl + "/" + e.itemKey + "/file" + '">';
      if (r == "undefined" || r === "" || typeof r == "undefined") {
        t += o + "</a>"
      } else {
        t += r + ", " + o + "</a>"
      }
      return t
    }
  }
  return t
};
Zotero.url.attachmentDownloadUrl = function(e) {
  var t = "";
  if (e.links["enclosure"]) {
    t = Zotero.config.baseWebsiteUrl + Zotero.config.nonparsedBaseUrl + "/" + e.itemKey + "/file";
    var n = e.links["enclosure"]["href"].substr(-4, 4);
    if (n == "view") {
      t += "/view"
    }
  } else if (e.linkMode == 2 || e.linkMode == 3) {
    if (e.apiObj["url"]) {
      t = e.apiObj["url"]
    }
  }
  return t
};
Zotero.url.attachmentFileDetails = function(e) {
  if (!e.links["enclosure"])
    return "";
  var t = Zotero.utils.translateMimeType(e.links["enclosure"].type);
  var n = e.links["enclosure"];
  var r = "";
  if (n["length"]) {
    var i = parseInt(n["length"], 10);
    r = "" + i + " B";
    if (i > 1073741824) {
      r = "" + (i / 1073741824).toFixed(1) + " GB"
    } else if (i > 1048576) {
      r = "" + (i / 1048576).toFixed(1) + " MB"
    } else if (i > 1024) {
      r = "" + (i / 1024).toFixed(1) + " KB"
    }
    if (t == "undefined" || t === "" || typeof t == "undefined") {
      return "(" + r + ")"
    } else {
      return "(" + t + ", " + r + ")"
    }
  } else {
    return "(" + t + ")"
  }
};
Zotero.url.exportUrls = function(e) {
  Z.debug("Zotero.url.exportUrls");
  var t = {};
  var n = {};
  J.each(Zotero.config.exportFormats, function(r, i) {
    n = J.extend(e, {
      format: i
    });
    t[i] = Zotero.ajax.apiRequestUrl(n) + Zotero.ajax.apiQueryString({
      format: i,
      limit: "25"
    })
  });
  Z.debug(t);
  return t
};
Zotero.url.snapshotViewLink = function(e) {
  return Zotero.ajax.apiRequestUrl({
    target: "item",
    targetModifier: "viewsnapshot",
    libraryType: e.owningLibrary.libraryType,
    libraryID: e.owningLibrary.libraryID,
    itemKey: e.itemKey
  })
};
Zotero.url.requestReadApiKeyUrl = function(e, t, n) {
  var r = Zotero.config.baseWebsiteUrl + "/settings/keys/new";
  r.replace("http", "https");
  var i = {
    name: "Private Feed"
  };
  if (e == "group") {
    i["library_access"] = 0;
    i["group_" + t] = "read";
    i["redirect"] = n
  } else if (e == "user") {
    i["library_access"] = 1;
    i["notes_access"] = 1;
    i["redirect"] = n
  }
  queryParamsArray = [];
  J.each(i, function(e, t) {
    queryParamsArray.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
  });
  queryString = "?" + queryParamsArray.join("&");
  return r + queryString
};
Zotero.callbacks.loadFullLibrary = function(e) {
  Zotero.debug("Zotero.callbacks.loadFullLibrary", 3);
  var t = Zotero.ui.getAssociatedLibrary(e);
  var n = {};
  var r = Zotero.nav.getUrlVar("tag");
  if (!J.isArray(r)) {
    if (r) {
      r = [r]
    } else {
      r = []
    }
  }
  if (J("#library").hasClass("loaded")) {
    Zotero.callbacks.chooseItemPane(J("#items-pane"));
    Zotero.ui.highlightCurrentCollection();
    Zotero.ui.nestHideCollectionTree(J("#collection-list-container"));
    var i = t.tags.plainTagsList(t.tags.tagsArray);
    Zotero.ui.displayTagsFiltered(J("#tags-list-div"), t.tags, i, r);
    Zotero.ui.displayItemOrTemplate(t);
    Z.debug("Building new items list to display", 3);
    n = J.extend({}, Zotero.config.defaultApiArgs, Zotero.config.userDefaultApiArgs, Zotero.nav.getUrlVars());
    Z.debug(n);
    t.buildItemDisplayView(n)
  } else {
    Zotero.offline.initializeOffline()
  }
};
Zotero.ui.init.offlineLibrary = function() {
  Z.debug("Zotero.ui.init.offlineLibrary", 3);
  Zotero.ui.init.libraryControls();
  Zotero.ui.init.tags();
  Zotero.ui.init.collections();
  Zotero.ui.init.items();
  J.subscribe("loadItemsFromKeysParallelDone", function() {
    J.publish("displayedItemsUpdated")
  });
  J.subscribe("displayedItemsUpdated", function() {
    Z.debug("displayedItemsUpdated triggered", 3);
    var e = Zotero.ui.getAssociatedLibrary(J("#library"));
    Zotero.ui.displayItemsFullLocal(J("#library-items-div"), {}, e)
  });
  J.subscribe("collectionsUpdated", function() {
    Z.debug("collectionsUpdated triggered", 3);
    var e = Zotero.ui.getAssociatedLibrary(J("#library"));
    Zotero.ui.displayCollections(J("#collection-list-container"), e.collections.collectionsArray)
  });
  J.subscribe("tagsUpdated", function() {
    Z.debug("tagsUpdated triggered", 3);
    var e = Zotero.ui.getAssociatedLibrary(J("#library"));
    var t = e.tags.plainTagsList(e.tags.tagsArray);
    var n = Zotero.utils.prependAutocomplete("", t);
    Zotero.ui.displayTagsFiltered(J("#tags-list-container"), e.tags, n, selectedTags)
  });
  J("#makeAvailableOfflineLink").bind("click", J.proxy(function(e) {
    e.preventDefault();
    var t = Zotero.ui.getAssociatedLibrary(J("#library"));
    var n = Zotero.nav.getUrlVar("collectionKey");
    var r;
    if (n) {
      t.saveCollectionFilesOffline(n)
    } else {
      t.saveFileSetOffline(t.itemKeys)
    }
  }, this))
};
Zotero.ui.displayItemsFullLocal = function(e, t, n) {
  Z.debug("Zotero.ui.displayItemsFullLocal", 3);
  Z.debug(t, 4);
  var r = J(e);
  var i = J.extend({}, Zotero.config.defaultApiArgs, Zotero.config.userDefaultApiArgs, t);
  var s = ["", "", ""];
  var o = Zotero.prefs.library_listShowFields;
  if (n.libraryType != "group") {
    o = J.grep(o, function(e, t) {
      return J.inArray(e, Zotero.Library.prototype.groupOnlyColumns) == -1
    })
  }
  var u = Zotero.config.librarySettings.allowEdit ? true : false;
  var a = {
    titleParts: s,
    displayFields: o,
    items: n.items.displayItemsArray,
    editmode: u,
    order: i["order"],
    sort: i["sort"],
    library: n
  };
  r.empty();
  Zotero.ui.insertItemsTable(r, a);
  if (Zotero.config.mobile) {
    Zotero.ui.createOnActivePage(e);
    return
  }
  Zotero.ui.updateDisabledControlButtons();
  Zotero.ui.libraryBreadcrumbs();
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.showChildrenLocal = function(e, t) {
  Z.debug("Zotero.ui.showChildrenLocal", 3);
  var n = Zotero.ui.getAssociatedLibrary(J(e).closest("div.ajaxload"));
  var r = n.items.getItem(t);
  var i = J(e).find(".item-attachments-div");
  Zotero.ui.showSpinner(i);
  var s = r.childItemKeys;
  var o = n.items.getItems(s);
  J("#childitemsTemplate").tmpl({
    childItems: o
  }).appendTo(J(".item-attachments-div").empty());
  Zotero.ui.createOnActivePage(e)
};
Zotero.ui.localDownloadLink = function(e, t) {
  Z.debug("Zotero.ui.localDownloadLink");
  if (e.links && e.links.enclosure) {
    Z.debug("should have local file");
    var n = e.owningLibrary.filestorage.getSavedFileObjectUrl(e.itemKey);
    n.done(function(e) {
      Z.debug("got item's object url - adding to table");
      J("table.item-info-table tbody").append("<tr><th>Local Copy</th><td><a href='" + e + "'>Open</a></td></tr>")
    })
  } else {
    Z.debug("Missing link?")
  }
};
Zotero.ui.displayItemOrTemplate = function(e) {
  if (Zotero.nav.getUrlVar("action") == "newItem") {
    var t = Zotero.nav.getUrlVar("itemType");
    if (!t) {
      J("#item-details-div").empty();
      J("#itemtypeselectTemplate").tmpl({
        itemTypes: Zotero.localizations.typeMap
      }).appendTo(J("#item-details-div"));
      return
    } else {
      var n = new Zotero.Item;
      n.libraryType = e.libraryType;
      n.libraryID = e.libraryID;
      d = n.initEmpty(t);
      J("#item-details-div").data("pendingDeferred", d);
      d.done(Zotero.ui.loadNewItemTemplate);
      d.fail(function(e, t, n) {
        Zotero.ui.jsNotificationMessage("Error loading item template", "error")
      })
    }
  } else {
    var r = Zotero.nav.getUrlVar("itemKey");
    if (r) {
      var i = e.items.getItem(r);
      if (i) {
        Z.debug("have item locally, loading details into ui", 3);
        if (Zotero.nav.getUrlVar("mode") == "edit") {
          Zotero.ui.editItemForm(J("#item-details-div"), i)
        } else {
          Zotero.ui.loadItemDetail(i, J("#item-details-div"));
          Zotero.ui.showChildrenLocal(J("#item-details-div"), r);
          Zotero.ui.localDownloadLink(i, J("#item-details-div"))
        }
      }
    }
  }
};
Zotero.offline.initializeOffline = function() {
  Z.debug("Zotero.offline.initializeOffline", 3);
  var e = new J.Deferred;
  var t = {
    target: "userlibrarydata"
  };
  var n = Zotero.cache.load(t);
  if (n) {
    Z.debug("had cached library data - resolving immediately");
    J("#library").data("loadconfig", n.loadconfig);
    e.resolve(n)
  } else {
    Z.debug("don't have cached library config data - fetching from server");
    J.getJSON("/user/userlibrarydata", J.proxy(function(t, r, i) {
      Z.debug("got back library config data from server");
      if (t.loggedin === false) {
        window.location = "/user/login";
        return false
      } else {
        J("#library").data("loadconfig", t.loadconfig);
        n = t;
        e.resolve(n)
      }
    }, this))
  }
  e.done(function(e) {
    Zotero.debug("Got library data");
    Zotero.debug(e);
    Zotero.loadConfig(e);
    var t = Zotero.ui.getAssociatedLibrary(J("#library"));
    Zotero.offline.loadAllItems(t);
    Zotero.offline.loadAllCollections(t);
    Zotero.offline.loadAllTags(t);
    Zotero.offline.loadMetaInfo(t)
  })
};
Zotero.offline.loadAllItems = function(e) {
  Z.debug("Zotero.offline.loadAllItems", 3);
  var t = {
    libraryType: e.libraryType,
    libraryID: e.libraryID,
    target: "allitems"
  };
  var n = e.loadCachedItems();
  if (n) {
    displayParams = Zotero.nav.getUrlVars();
    e.buildItemDisplayView(displayParams)
  }
  var r = e.fetchItemKeysModified();
  r.done(J.proxy(function(r, i) {
    Z.debug("Got back itemKeys ordered by modified", 3);
    var s = J.trim(r).split("\n");
    e.itemKeys = s;
    if (n === 0 && s.length > 0)
      n = false;
    if (n !== false) {
      Z.debug("have cached items", 3);
      var o = e.findMissingItems(s);
      var u = e.loadItemsFromKeysParallel(o);
      var a = e.loadModifiedItems(s);
      J.when(u, a).then(J.proxy(function() {
        Z.debug("Building new items list to display", 3);
        displayParams = Zotero.nav.getUrlVars();
        e.buildItemDisplayView(displayParams);
        Zotero.cache.save(t, e.items.dump());
        Zotero.callbacks.chooseItemPane(J("#items-pane"));
        Zotero.ui.displayItemOrTemplate(e)
      }))
    } else {
      var f = e.loadItemsFromKeysParallel(s);
      f.done(J.proxy(function() {
        var n = Zotero.nav.getUrlVars();
        Z.debug(n);
        e.buildItemDisplayView(n);
        Zotero.cache.save(t, e.items.dump())
      }, this))
    }
  }, this))
};
Zotero.offline.loadAllCollections = function(e) {
  Z.debug("Zotero.offline.loadAllCollections", 3);
  var t = {
    libraryType: e.libraryType,
    libraryID: e.libraryID,
    target: "allcollections"
  };
  var n = {
    libraryType: e.libraryType,
    libraryID: e.libraryID,
    target: "collectionmembers"
  };
  Zotero.ui.updateCollectionButtons();
  var r = e.loadCachedCollections();
  var i = J("#collection-list-container");
  if (r) {
    Z.debug("haveCachedCollections", 3);
    i.empty();
    Zotero.ui.displayCollections(i, e.collections);
    Zotero.ui.nestHideCollectionTree(i);
    Zotero.ui.highlightCurrentCollection();
    var s = e.loadCollectionMembership(e.collections.collectionsArray);
    s.done(J.proxy(function() {
      Zotero.cache.save(t, e.collections.dump())
    }, this))
  } else {
    Z.debug("dont have collections - load them", 3);
    var o = e.loadCollections();
    o.done(J.proxy(function() {
      i.empty();
      Zotero.ui.displayCollections(i, e.collections);
      Zotero.ui.highlightCurrentCollection();
      Zotero.ui.nestHideCollectionTree(i);
      Zotero.cache.save(t, e.collections.dump());
      var n = e.loadCollectionMembership(e.collections.collectionsArray);
      n.done(J.proxy(function() {
        Zotero.cache.save(t, e.collections.dump())
      }, this))
    }, this));
    o.fail(J.proxy(function(e, t, n) {
      var r = Zotero.ui.ajaxErrorMessage(e);
      jel.html("<p>" + r + "</p>")
    }))
  }
};
Zotero.offline.loadAllTags = function(e) {
  Z.debug("Zotero.offline.loadAllTags", 3);
  var t = {
    libraryType: e.libraryType,
    libraryID: e.libraryID,
    target: "alltags"
  };
  var n = J("#tags-list-container");
  var r = e.loadAllTags({});
  var i = Zotero.nav.getUrlVar("tag");
  if (!J.isArray(i)) {
    if (i) {
      i = [i]
    } else {
      i = []
    }
  }
  r.done(J.proxy(function(t) {
    Z.debug("finished loadAllTags", 3);
    n.find("div.loading").empty();
    Z.debug(t, 5);
    e.tags.loaded = true;
    e.tags.loadedConfig = {};
    n.children(".loading").empty();
    var r = e.tags.plainTagsList(e.tags.tagsArray);
    Zotero.ui.displayTagsFiltered(n, e.tags, r, i);
    Zotero.nav.doneLoading(n)
  }, this));
  r.fail(J.proxy(function(e, t, n) {
    var r = Zotero.ui.ajaxErrorMessage(e);
    jel.html("<p>" + r + "</p>")
  }));
  J("#library").addClass("loaded")
};
Zotero.offline.loadMetaInfo = function(e) {
  Z.debug("Zotero.offline.loadMetaInfo", 3);
  if (Zotero.Item.prototype.itemTypes) {
    Z.debug("have itemTypes, fetching item templates", 3);
    var t = Zotero.Item.prototype.itemTypes;
    var n;
    J.each(t, function(e, t) {
      n = t.itemType;
      if (n != "attachment") {
        Zotero.Item.prototype.getItemTemplate(n)
      }
      Zotero.Item.prototype.getCreatorTypes(n)
    });
    Zotero.Item.prototype.getItemTemplate("attachment", "imported_file");
    Zotero.Item.prototype.getItemTemplate("attachment", "imported_url");
    Zotero.Item.prototype.getItemTemplate("attachment", "linked_file");
    Zotero.Item.prototype.getItemTemplate("attachment", "linked_url")
  } else {
    Z.debug("Dont yet have itemTypes, can't fetch item templates", 3)
  }
}
