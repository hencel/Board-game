!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./build",n(n.s=2)}([function(t,e,n){t.exports=n.p+"css/main.blocks.css"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){n(3),t.exports=n(0)},function(t,e,n){"use strict";n.r(e);n(0),n(4),n(10);document.addEventListener("DOMContentLoaded",function(){console.log("Dom content loaded");new r;(new o).createBoard()});class r{constructor(){console.log("start game constructor"),this.state=1,this.players=[{id:0,name:"",position:0},{id:1,name:"",position:0}],this.nextPlayer=0,this.area=[],this.diceValue=0}dice(){if(0==this.state){document.getElementById("diceContainer").style.display="block";let t=document.createElement("button");t.classList.add("roll"),document.getElementById("diceContainer").appendChild(t),t.innerHTML="Rzuć kostką";let e=()=>{let t=Math.floor(6*Math.random())+1;r.innerHTML=t,this.diceValue=t,this.movement()};t.addEventListener("click",()=>{e()});let n=document.createElement("div");n.classList.add("diceArea"),document.getElementById("diceContainer").appendChild(n);let r=document.createElement("p");r.classList.add("diceParagraph"),n.appendChild(r)}}movement(){this.players[i].position+=this.diceValue,this.position,this.position>=this.gamePath.length&&alert("Gracz wygrał")}}class o extends r{constructor(){super(),console.log("start generator constructor:",this.state),this.width=10,this.height=10,this.gamePath=[],this.cellsFunc=[{description:"Dwa pola do przodu",val:2},{description:"Jedno pole do przodu",val:1},{description:"Dwa pola do tyłu",val:-2},{description:"Jedno pole do tyłu",val:-1},{description:"Strata kolejki",val:0},{description:"Dodatkowy ruch",val:"x"}]}createBoard(){let t=0;console.log(this.state);for(let e=0;e<this.width*this.height;e++){let n=document.createElement("div");document.getElementById("board").appendChild(n),n.className="cell",n.classList.add("potentialActive"),n.setAttribute("data-id",e),n.addEventListener("click",e=>{if(console.log("click",e),1==this.state){if(console.log("rysowanie"),e.target.classList.contains("potentialActive")){let n=e.target.getAttribute("data-id");console.log(n),e.target.classList.add("active"),this.gamePath.push(e.target.getAttribute("data-id")),e.target.setAttribute("data-counter",t),t++,e.target.classList.remove("potentialActive");let r=document.querySelectorAll("div.potentialActive");for(let t=0;t<r.length;t++)r[t].classList.remove("potentialActive");let o=document.querySelector('div[data-id="'+(n-10)+'"]');o.classList.contains("active")||o.classList.add("potentialActive");let i=document.querySelector('div[data-id="'+(parseInt(n)+10)+'"]');i.classList.contains("active")||i.classList.add("potentialActive");let s=document.querySelector('div[data-id="'+(parseInt(n)+1)+'"]');s.classList.contains("active")||(parseInt(n)+1)%10==0||s.classList.add("potentialActive");let a=document.querySelector('div[data-id="'+(parseInt(n)-1)+'"]');a.classList.contains("active")||(parseInt(n)-1)%10==9||a.classList.add("potentialActive")}}else if(2==this.state)for(let t=1;t<this.gamePath.length-1;t++){let e=this.cellsFuns[Math.random()*this.cellsFuns.length].val;console.log(e),this.gamePath[t].setAttribute("data-val",e)}else console.log("inny state: ",this.state);console.log("przed"),e.target.classList.remove("potentialActive"),console.log("po")});let r=document.createElement("button");document.getElementById("diceContainer").appendChild(r),r.className="roll",r.addEventListener("click",function(){state++,state>2?state=0:0===state&&(r.style.display="none")})}}}},function(t,e,n){"use strict";(function(e){var r=n(5);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function o(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function i(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var s=n(6),a=Object.prototype.hasOwnProperty,c=Array.prototype.slice,u="foo"===function(){}.name;function l(t){return Object.prototype.toString.call(t)}function f(t){return!i(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var h=t.exports=v,p=/\s*function\s+([^\(\s]*)\s*/;function d(t){if(s.isFunction(t)){if(u)return t.name;var e=t.toString().match(p);return e&&e[1]}}function m(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function y(t){if(u||!s.isFunction(t))return s.inspect(t);var e=d(t);return"[Function"+(e?": "+e:"")+"]"}function g(t,e,n,r,o){throw new h.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function v(t,e){t||g(t,!0,e,"==",h.ok)}function b(t,e,n,r){if(t===e)return!0;if(i(t)&&i(e))return 0===o(t,e);if(s.isDate(t)&&s.isDate(e))return t.getTime()===e.getTime();if(s.isRegExp(t)&&s.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(f(t)&&f(e)&&l(t)===l(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===o(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;var a=(r=r||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===r.expected.indexOf(e)||(r.actual.push(t),r.expected.push(e),function(t,e,n,r){if(null==t||null==e)return!1;if(s.isPrimitive(t)||s.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=O(t),i=O(e);if(o&&!i||!o&&i)return!1;if(o)return t=c.call(t),e=c.call(e),b(t,e,n);var a,u,l=x(t),f=x(e);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),u=l.length-1;u>=0;u--)if(l[u]!==f[u])return!1;for(u=l.length-1;u>=0;u--)if(a=l[u],!b(t[a],e[a],n,r))return!1;return!0}(t,e,n,r))}return n?t===e:t==e}function O(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function w(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function j(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&g(o,n,"Missing expected exception"+r);var i="string"==typeof r,a=!t&&o&&!n;if((!t&&s.isError(o)&&i&&w(o,n)||a)&&g(o,n,"Got unwanted exception"+r),t&&o&&n&&!w(o,n)||!t&&o)throw o}h.AssertionError=function(t){var e;this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=m(y((e=this).actual),128)+" "+e.operator+" "+m(y(e.expected),128),this.generatedMessage=!0);var n=t.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,i=d(n),s=o.indexOf("\n"+i);if(s>=0){var a=o.indexOf("\n",s+1);o=o.substring(a+1)}this.stack=o}}},s.inherits(h.AssertionError,Error),h.fail=g,h.ok=v,h.equal=function(t,e,n){t!=e&&g(t,e,n,"==",h.equal)},h.notEqual=function(t,e,n){t==e&&g(t,e,n,"!=",h.notEqual)},h.deepEqual=function(t,e,n){b(t,e,!1)||g(t,e,n,"deepEqual",h.deepEqual)},h.deepStrictEqual=function(t,e,n){b(t,e,!0)||g(t,e,n,"deepStrictEqual",h.deepStrictEqual)},h.notDeepEqual=function(t,e,n){b(t,e,!1)&&g(t,e,n,"notDeepEqual",h.notDeepEqual)},h.notDeepStrictEqual=function t(e,n,r){b(e,n,!0)&&g(e,n,r,"notDeepStrictEqual",t)},h.strictEqual=function(t,e,n){t!==e&&g(t,e,n,"===",h.strictEqual)},h.notStrictEqual=function(t,e,n){t===e&&g(t,e,n,"!==",h.notStrictEqual)},h.throws=function(t,e,n){j(!0,t,e,n)},h.doesNotThrow=function(t,e,n){j(!1,t,e,n)},h.ifError=function(t){if(t)throw t},h.strict=r(function t(e,n){e||g(e,!0,n,"==",t)},h,{equal:h.strictEqual,deepEqual:h.deepStrictEqual,notEqual:h.notStrictEqual,notDeepEqual:h.notDeepStrictEqual}),h.strict.strict=h.strict;var x=Object.keys||function(t){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e}}).call(this,n(1))},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))o.call(n,u)&&(a[u]=n[u]);if(r){s=r(n);for(var l=0;l<s.length;l++)i.call(n,s[l])&&(a[s[l]]=n[s[l]])}}return a}},function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),c=r[n];n<i;c=r[++n])m(c)||!O(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,s={};function a(t,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),l(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function u(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&x(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return g(o)||(o=l(t,o,r)),o}var i=function(t,e){if(v(e))return t.stylize("undefined","undefined");if(g(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(y(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,n);if(i)return i;var s=Object.keys(n),a=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),j(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(x(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(j(n))return f(n)}var u,O="",E=!1,S=["{","}"];(p(n)&&(E=!0,S=["[","]"]),x(n))&&(O=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(O=" "+RegExp.prototype.toString.call(n)),w(n)&&(O=" "+Date.prototype.toUTCString.call(n)),j(n)&&(O=" "+f(n)),0!==s.length||E&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),u=E?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)q(e,String(s))?i.push(h(t,e,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(h(t,e,n,r,o,!0))}),i}(t,n,r,a,s):s.map(function(e){return h(t,n,r,a,e,E)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(u,O,S)):S[0]+O+S[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),q(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=m(n)?l(t,c.value,null):l(t,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n")):a=t.stylize("[Circular]","special")),v(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function p(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function m(t){return null===t}function y(t){return"number"==typeof t}function g(t){return"string"==typeof t}function v(t){return void 0===t}function b(t){return O(t)&&"[object RegExp]"===E(t)}function O(t){return"object"==typeof t&&null!==t}function w(t){return O(t)&&"[object Date]"===E(t)}function j(t){return O(t)&&("[object Error]"===E(t)||t instanceof Error)}function x(t){return"function"==typeof t}function E(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(v(i)&&(i=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;s[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else s[n]=function(){};return s[n]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=d,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=y,e.isString=g,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=v,e.isRegExp=b,e.isObject=O,e.isDate=w,e.isError=j,e.isFunction=x,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(8);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function q(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,n;console.log("%s - %s",(t=new Date,n=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":"),[t.getDate(),A[t.getMonth()],n].join(" ")),e.format.apply(e,arguments))},e.inherits=n(9),e._extend=function(t,e){if(!e||!O(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var P="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function k(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(P&&t[P]){var e;if("function"!=typeof(e=t[P]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,P,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise(function(t,r){e=t,n=r}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(t,r){t?n(t):e(r)});try{t.apply(this,o)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),P&&Object.defineProperty(e,P,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=P,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};e.apply(this,n).then(function(e){t.nextTick(s,null,e)},function(e){t.nextTick(k,e,s)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(7))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],l=!1,f=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var t=a(h);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||l||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";var r=n(11),o=n(13);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){o.isString(t)&&(t=b(t));return t instanceof i?t.format():i.prototype.format.call(t)},e.Url=i;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(u),f=["%","/","?",";","#"].concat(l),h=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},y={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=n(14);function b(t,e,n){if(t&&o.isObject(t)&&t instanceof i)return t;var r=new i;return r.parse(t,e,n),r}i.prototype.parse=function(t,e,n){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t.indexOf("?"),a=-1!==i&&i<t.indexOf("#")?"?":"#",u=t.split(a);u[0]=u[0].replace(/\\/g,"/");var b=t=u.join(a);if(b=b.trim(),!n&&1===t.split("#").length){var O=c.exec(b);if(O)return this.path=b,this.href=b,this.pathname=O[1],O[2]?(this.search=O[2],this.query=e?v.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var w=s.exec(b);if(w){var j=(w=w[0]).toLowerCase();this.protocol=j,b=b.substr(w.length)}if(n||w||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var x="//"===b.substr(0,2);!x||w&&y[w]||(b=b.substr(2),this.slashes=!0)}if(!y[w]&&(x||w&&!g[w])){for(var E,S,A=-1,q=0;q<h.length;q++){-1!==(P=b.indexOf(h[q]))&&(-1===A||P<A)&&(A=P)}-1!==(S=-1===A?b.lastIndexOf("@"):b.lastIndexOf("@",A))&&(E=b.slice(0,S),b=b.slice(S+1),this.auth=decodeURIComponent(E)),A=-1;for(q=0;q<f.length;q++){var P;-1!==(P=b.indexOf(f[q]))&&(-1===A||P<A)&&(A=P)}-1===A&&(A=b.length),this.host=b.slice(0,A),b=b.slice(A),this.parseHost(),this.hostname=this.hostname||"";var k="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!k)for(var C=this.hostname.split(/\./),T=(q=0,C.length);q<T;q++){var I=C[q];if(I&&!I.match(p)){for(var L="",D=0,z=I.length;D<z;D++)I.charCodeAt(D)>127?L+="x":L+=I[D];if(!L.match(p)){var F=C.slice(0,q),U=C.slice(q+1),N=I.match(d);N&&(F.push(N[1]),U.unshift(N[2])),U.length&&(b="/"+U.join(".")+b),this.hostname=F.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),k||(this.hostname=r.toASCII(this.hostname));var R=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+R,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!m[j])for(q=0,T=l.length;q<T;q++){var M=l[q];if(-1!==b.indexOf(M)){var _=encodeURIComponent(M);_===M&&(_=escape(M)),b=b.split(M).join(_)}}var H=b.indexOf("#");-1!==H&&(this.hash=b.substr(H),b=b.slice(0,H));var $=b.indexOf("?");if(-1!==$?(this.search=b.substr($),this.query=b.substr($+1),e&&(this.query=v.parse(this.query)),b=b.slice(0,$)):e&&(this.search="",this.query={}),b&&(this.pathname=b),g[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){R=this.pathname||"";var J=this.search||"";this.path=R+J}return this.href=this.format(),this},i.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,s="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=v.stringify(this.query));var a=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||g[e])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),e+i+(n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(a=a.replace("#","%23"))+r},i.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},i.prototype.resolveObject=function(t){if(o.isString(t)){var e=new i;e.parse(t,!1,!0),t=e}for(var n=new i,r=Object.keys(this),s=0;s<r.length;s++){var a=r[s];n[a]=this[a]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var c=Object.keys(t),u=0;u<c.length;u++){var l=c[u];"protocol"!==l&&(n[l]=t[l])}return g[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!g[t.protocol]){for(var f=Object.keys(t),h=0;h<f.length;h++){var p=f[h];n[p]=t[p]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||y[t.protocol])n.pathname=t.pathname;else{for(var d=(t.pathname||"").split("/");d.length&&!(t.host=d.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),n.pathname=d.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var m=n.pathname||"",v=n.search||"";n.path=m+v}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var b=n.pathname&&"/"===n.pathname.charAt(0),O=t.host||t.pathname&&"/"===t.pathname.charAt(0),w=O||b||n.host&&t.pathname,j=w,x=n.pathname&&n.pathname.split("/")||[],E=(d=t.pathname&&t.pathname.split("/")||[],n.protocol&&!g[n.protocol]);if(E&&(n.hostname="",n.port=null,n.host&&(""===x[0]?x[0]=n.host:x.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===d[0]?d[0]=t.host:d.unshift(t.host)),t.host=null),w=w&&(""===d[0]||""===x[0])),O)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,x=d;else if(d.length)x||(x=[]),x.pop(),x=x.concat(d),n.search=t.search,n.query=t.query;else if(!o.isNullOrUndefined(t.search)){if(E)n.hostname=n.host=x.shift(),(k=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=k.shift(),n.host=n.hostname=k.shift());return n.search=t.search,n.query=t.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!x.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var S=x.slice(-1)[0],A=(n.host||t.host||x.length>1)&&("."===S||".."===S)||""===S,q=0,P=x.length;P>=0;P--)"."===(S=x[P])?x.splice(P,1):".."===S?(x.splice(P,1),q++):q&&(x.splice(P,1),q--);if(!w&&!j)for(;q--;q)x.unshift("..");!w||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),A&&"/"!==x.join("/").substr(-1)&&x.push("");var k,C=""===x[0]||x[0]&&"/"===x[0].charAt(0);E&&(n.hostname=n.host=C?"":x.length?x.shift():"",(k=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=k.shift(),n.host=n.hostname=k.shift()));return(w=w||n.host&&x.length)&&!C&&x.unshift(""),x.length?n.pathname=x.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},i.prototype.parseHost=function(){var t=this.host,e=a.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,n){(function(t,r){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(i){e&&e.nodeType,t&&t.nodeType;var s="object"==typeof r&&r;s.global!==s&&s.window!==s&&s.self;var a,c=2147483647,u=36,l=1,f=26,h=38,p=700,d=72,m=128,y="-",g=/^xn--/,v=/[^\x20-\x7E]/,b=/[\x2E\u3002\uFF0E\uFF61]/g,O={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=u-l,j=Math.floor,x=String.fromCharCode;function E(t){throw new RangeError(O[t])}function S(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function A(t,e){var n=t.split("@"),r="";return n.length>1&&(r=n[0]+"@",t=n[1]),r+S((t=t.replace(b,".")).split("."),e).join(".")}function q(t){for(var e,n,r=[],o=0,i=t.length;o<i;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<i?56320==(64512&(n=t.charCodeAt(o++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--):r.push(e);return r}function P(t){return S(t,function(t){var e="";return t>65535&&(e+=x((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=x(t)}).join("")}function k(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function C(t,e,n){var r=0;for(t=n?j(t/p):t>>1,t+=j(t/e);t>w*f>>1;r+=u)t=j(t/w);return j(r+(w+1)*t/(t+h))}function T(t){var e,n,r,o,i,s,a,h,p,g,v,b=[],O=t.length,w=0,x=m,S=d;for((n=t.lastIndexOf(y))<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&E("not-basic"),b.push(t.charCodeAt(r));for(o=n>0?n+1:0;o<O;){for(i=w,s=1,a=u;o>=O&&E("invalid-input"),((h=(v=t.charCodeAt(o++))-48<10?v-22:v-65<26?v-65:v-97<26?v-97:u)>=u||h>j((c-w)/s))&&E("overflow"),w+=h*s,!(h<(p=a<=S?l:a>=S+f?f:a-S));a+=u)s>j(c/(g=u-p))&&E("overflow"),s*=g;S=C(w-i,e=b.length+1,0==i),j(w/e)>c-x&&E("overflow"),x+=j(w/e),w%=e,b.splice(w++,0,x)}return P(b)}function I(t){var e,n,r,o,i,s,a,h,p,g,v,b,O,w,S,A=[];for(b=(t=q(t)).length,e=m,n=0,i=d,s=0;s<b;++s)(v=t[s])<128&&A.push(x(v));for(r=o=A.length,o&&A.push(y);r<b;){for(a=c,s=0;s<b;++s)(v=t[s])>=e&&v<a&&(a=v);for(a-e>j((c-n)/(O=r+1))&&E("overflow"),n+=(a-e)*O,e=a,s=0;s<b;++s)if((v=t[s])<e&&++n>c&&E("overflow"),v==e){for(h=n,p=u;!(h<(g=p<=i?l:p>=i+f?f:p-i));p+=u)S=h-g,w=u-g,A.push(x(k(g+S%w,0))),h=j(S/w);A.push(x(k(h,0))),i=C(n,O,r==o),n=0,++r}++n,++e}return A.join("")}a={version:"1.4.1",ucs2:{decode:q,encode:P},decode:T,encode:I,toASCII:function(t){return A(t,function(t){return v.test(t)?"xn--"+I(t):t})},toUnicode:function(t){return A(t,function(t){return g.test(t)?T(t.slice(4).toLowerCase()):t})}},void 0===(o=function(){return a}.call(e,n,e,t))||(t.exports=o)}()}).call(this,n(12)(t),n(1))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,e,n){"use strict";e.decode=e.parse=n(15),e.encode=e.stringify=n(16)},function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,i){e=e||"&",n=n||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var f,h,p,d,m=t[l].replace(a,"%20"),y=m.indexOf(n);y>=0?(f=m.substr(0,y),h=m.substr(y+1)):(f=m,h=""),p=decodeURIComponent(f),d=decodeURIComponent(h),r(s,p)?o(s[p])?s[p].push(d):s[p]=[s[p],d]:s[p]=d}return s};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,a){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?i(s(t),function(s){var a=encodeURIComponent(r(s))+n;return o(t[s])?i(t[s],function(t){return a+encodeURIComponent(r(t))}).join(e):a+encodeURIComponent(r(t[s]))}).join(e):a?encodeURIComponent(r(a))+n+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var s=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}}]);