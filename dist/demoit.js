!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){e.exports=n(6)},function(e,t){function n(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var c=e.apply(t,r);function u(e){n(c,o,i,u,a,"next",e)}function a(e){n(c,o,i,u,a,"throw",e)}u(void 0)})}}},function(e,t,n){var r=n(8);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}},function(e,t,n){var r=n(9),o=n(10),i=n(11);e.exports=function(e,t){return r(e)||o(e,t)||i()}},function(e,t,n){var r=n(12),o=n(13),i=n(14);e.exports=function(e){return r(e)||o(e)||i()}},function(e,t,n){e.exports=n(15)},function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(7),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag",s="object"==typeof e,l=t.regeneratorRuntime;if(l)s&&(e.exports=l);else{(l=t.regeneratorRuntime=s?e.exports:{}).wrap=x;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},m={};m[c]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(A([])));y&&y!==r&&o.call(y,c)&&(m=y);var w=E.prototype=j.prototype=Object.create(m);S.prototype=w.constructor=E,E.constructor=S,E[a]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===S||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(w),e},l.awrap=function(e){return{__await:e}},F(k.prototype),k.prototype[u]=function(){return this},l.AsyncIterator=k,l.async=function(e,t,n,r){var o=new k(x(e,t,n,r));return l.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},F(w),w[a]="Generator",w[c]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return u.type="throw",u.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var a=o.call(c,"catchLoc"),s=o.call(c,"finallyLoc");if(a&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(e,t,n,r){var o=t&&t.prototype instanceof j?t:j,i=Object.create(o.prototype),c=new I(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var a=b(e,t,n);if("normal"===a.type){if(r=n.done?d:p,a.arg===v)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=d,n.method="throw",n.arg=a.arg)}}}(e,n,c),i}function b(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function j(){}function S(){}function E(){}function F(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var t;this._invoke=function(n,r){function i(){return new Promise(function(t,i){!function t(n,r,i,c){var u=b(e[n],e,r);if("throw"!==u.type){var a=u.arg,s=a.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,i,c)},function(e){t("throw",e,i,c)}):Promise.resolve(s).then(function(e){a.value=e,i(a)},function(e){return t("throw",e,i,c)})}c(u.arg)}(n,r,t,i)})}return t=t?t.then(i,i):i()}}function O(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function A(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:_}}function _(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),c=n.n(i),u=27;function a(e,t,n){var r,o=s("body"),i=t.find(".cancel"),c=function(e){e.keyCode===u&&(r(),a.close())},a={show:function(){t.show(),r=o.onKeyUp(c),n&&n()},close:function(){t.hide(),r()}};return e&&e.onClick(function(){return a.show()}),i&&i.onClick(function(){return a.close()}),a}function s(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(e);if(!t)throw new Error('Ops! There is no DOM element matching "'.concat(e,'" selector.'));return{e:t,show:function(){return t.style.display="block",this},hide:function(){return t.style.display="none",this},content:function(e){return t.innerHTML=e,this},appendChild:function(e){return t.appendChild(e),this},css:function(e,n){return void 0!==n?(t.style[e]=n,this):t.style[e]},prop:function(e,n){return void 0!==n?(t[e]=n,this):t[e]},onClick:function(e){return t.addEventListener("click",e),function(){return t.removeEventListener("click",e)}},onKeyUp:function(e){return t.addEventListener("keyup",e),function(){return t.removeEventListener("keyup",e)}},find:function(e){return s(e,t)}}}var l=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}},f=n(2),p=n.n(f),h="DEMOIT_v1",d={content:"",filename:"untitled.js",editing:!1},v=function(e){var t=location.hash.replace(/^#/,"");if(""!==t){var n=e.findIndex(function(e){return e.filename===t});if(n>=0)return n}return 0};function m(e){var t=l(),n=[],r=v(e.files),o=function(){return n.forEach(function(e){return e()})},i=function(){t&&localStorage.setItem(h,JSON.stringify(e))},c={getCurrentIndex:function(){return r},setCurrentIndex:function(t){r=t,location.hash=e.files[t].filename,o()},isCurrentIndex:function(e){return r===e},getCurrentFile:function(){return this.getFiles()[r]},getFiles:function(){return e.files},dump:function(){return e},getDependencies:function(){return e.dependencies},setDependencies:function(t){e.dependencies=t,i(),o()},getEditorSettings:function(){return e.editor},getFileAt:function(e){return this.getFiles()[e]},makeSureOneFileAtLeast:function(){0===this.getFiles().length&&(e.files.push(d),this.setCurrentIndex(0),i())},editFile:function(t,n){e.files[t]=p()({},e.files[t],n),i(),o(),this.setCurrentIndex(r)},editCurrentFile:function(e){this.editFile(r,e)},changeActiveFile:function(e){return this.setCurrentIndex(e),this.getCurrentFile()},addNewFile:function(){return e.files.push(d),i(),this.changeActiveFile(e.files.length-1)},deleteFile:function(t){if(t===r)e.files.splice(t,1),i(),this.setCurrentIndex(0);else{var n=this.getCurrentFile();e.files.splice(t,1),i(),this.setCurrentIndex(this.getFiles().findIndex(function(e){return e===n})||0)}},clear:function(){l&&localStorage.clear(),o()},listen:function(e){n.push(e)}};return c.makeSureOneFileAtLeast(),c}function g(e,t,n,r){return y.apply(this,arguments)}function y(){return(y=c()(o.a.mark(function e(t,n,r,i){var c,u,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=CodeMirror(s(".js-code-editor").e,p()({value:n||"",mode:"jsx",tabSize:2,lineNumbers:!1,autofocus:!0,foldGutter:!1,gutters:[],styleSelectedText:!0},t)),u=function(){return r(c.getValue())},a=function(){return i(c.getValue())},c.on("change",a),c.setOption("extraKeys",{"Ctrl-S":u,"Cmd-S":u}),CodeMirror.normalizeKeyMap(),c.focus(),e.abrupt("return",c);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function w(){var e=s(".console"),t=!0,n=function(n){var r=document.createElement("div"),o=n?function(e){return e.replace(/[&<>"']/g,function(e){return"&"+{"&":"amp","<":"lt",">":"gt",'"':"quot","'":"#39"}[e]+";"})}(n.toString()):n;r.innerHTML="<p>"+o+"</p>",t&&(e.content(""),t=!1),e.appendChild(r)};return function(){var t=console.error,r=console.log,o=console.warn,i=console.info,c=console.clear;console.error=function(e){n(e.toString()+e.stack),t.apply(console,arguments)},console.log=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t.forEach(n),r.apply(console,t)},console.warn=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(n),o.apply(console,t)},console.info=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(n),i.apply(console,t)},console.clear=function(){e.content("");for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];c.apply(console,n)}}(),function(){t=!0,e.content('<div class="hint">console.log</div>')}}var x=n(3),b=n.n(x),j="demoit-split-sizes-v2";function S(){var e=void 0!==window.localStorage,t=[25,75,75,25],n=function(){if(e){var n=localStorage.getItem(j);if(n&&4===(n=n.split(",")).length)return n.map(Number)}return t}(),r=b()(n,4),o=r[0],i=r[1],c=r[2],u=r[3],a=Split([".left",".right"],{sizes:[o,i],gutterSize:4}),s=Split([".output",".console"],{sizes:[c,u],gutterSize:4,direction:"vertical"});e&&setInterval(function(){localStorage.setItem(j,a.getSizes().join(",")+","+s.getSizes().join(","))},4e3)}function E(e,t,n,r){var o=s(".files .nav"),i=function(){var t=[];t.push("<ul>"),e.getFiles().forEach(function(n,r){var o=n.filename,i=n.editing;t.push('<li><a href="javascript:window.showFile('.concat(r,');void(0);" ').concat(e.isCurrentIndex(r)?'class="active"':"",'" oncontextmenu="javascript:window.editFile(').concat(r,');return false;">').concat(o).concat(i?" *":"","</a></li>"))}),t.push("</ul>"),t.push('<ul class="with-icons"><li><a href="javascript:window.newFile()"><svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg></a></li></ul>'),o.content(t.join(""))};i(),window.showFile=function(e){return t(e)},window.editFile=function(e){return r(e)},window.newFile=function(){return n()},e.listen(i)}var F={presets:["react",["es2015",{modules:!1}]],plugins:["transform-es2015-modules-commonjs"]};function k(e){return Babel.transform(e,F).code}function O(e,t){try{var n=t.map(function(e){var t=e.filename,n=e.content;return'\n      {\n        filename: "'.concat(t,'",\n        func: function (require, exports) {\n          ').concat(k(n),"\n        },\n        exports: {}\n      }\n    ")}),r="\n      const modules = [".concat(n.join(","),"];\n      const require = function(file) {\n        const module = modules.find(({ filename }) => filename === file);\n\n        if (!module) {\n          throw new Error('Demoit can not find \"' + file + '\" file.');\n        }\n        module.func(require, module.exports);\n        return module.exports;\n      };\n      modules[").concat(e,"].func(require, modules[").concat(e,"].exports);\n    ");new Function(k(r))()}catch(e){console.error(e)}}var C=function(e){return function(){var t=c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e(),n=s(".output"),"undefined"!=typeof ReactDOM&&ReactDOM.unmountComponentAtNode(n.e),n.content('<div class="hint">&lt;div id="output" /&gt;</div>');case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()};function L(e){var t,n,r=a(null,s(".edit-file")),o=r.show,i=r.close,c=s('.edit-file input[name="filename"]'),u=s(".edit-file .save"),l=s(".edit-file .delete");return u.onClick(function(){e.editFile(t,{filename:c.prop("value")}),c.prop("value",""),i(),n("rename")}),l.onClick(function(){e.deleteFile(t),c.prop("value",""),i(),n("delete")}),function(r,i){var u=e.getFileAt(r);o(),e.getFiles().length>1?l.show():l.hide(),t=r,n=i,c.prop("value",u.filename),c.e.focus()}}function I(e){var t=s(".settings-json"),n=s(".clear-storage");a(s(".storage"),s(".manage-storage"),function(){t.prop("value",JSON.stringify(e.dump(),null,2))}),n.onClick(function(){e.clear(),window.location.reload()})}var A=n(4),_=n.n(A),P={},N=function(e,t){if(P[e])return t();var n=document.createElement("script");n.src=e,n.addEventListener("load",function(){P[e]=!0,t()}),document.body.appendChild(n)},T=function(e,t){if(P[e])return t();var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),n.addEventListener("load",function(){P[e]=!0,t()}),document.body.appendChild(n)},q=function(){var e=c()(o.a.mark(function e(t){var n,r=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:function(){},e.abrupt("return",new Promise(function(e){!function r(o){if(n(o),o!==t.length){var i=t[o],c=i.split(".").pop().toLowerCase();"js"===c?N(i,function(){return r(o+1)}):"css"===c?T(i,function(){return r(o+1)}):r(o+1)}else e()}(0)}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function M(e){return D.apply(this,arguments)}function D(){return(D=c()(o.a.mark(function e(t){var n,r,i,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(".preloader"),r=s(".value"),i=s(".file"),c=["./vendor/codemirror/codemirror.js","./vendor/codemirror/javascript.js","./vendor/codemirror/xml.js","./vendor/codemirror/jsx.js","./vendor/codemirror/mark-selection.js","./vendor/split.js","./vendor/babel-6.26.0.min.js","./vendor/babel-polyfill@6.26.0.js","./vendor/codemirror/theme/".concat(t.getEditorSettings().theme,".css")].concat(_()(t.getDependencies())),n.css("opacity",1),e.next=7,q(c,function(e){r.css("width",e/c.length*100+"%"),e<c.length?i.content(c[e].split(/\//).pop()):(i.hide(),n.css("opacity",0))});case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function R(e){var t=s(".manage-dependencies .save"),n=s(".dependencies-list"),r=a(s(".dependencies"),s(".manage-dependencies"),function(){return n.prop("value",e.getDependencies().join("\n"))}).close;t.onClick(c()(o.a.mark(function i(){return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e.setDependencies(n.prop("value").split(/\r?\n/).filter(function(e){return""!==e||"\n"!==e})),t.content("loading dependencies ...").prop("disabled",!0),o.next=4,q(e.getDependencies());case 4:r(),t.content("Save").prop("disabled",!1);case 6:case"end":return o.stop()}},i,this)})))}var z={editor:{theme:"material"},dependencies:[],files:[]},G=function(){if(l()){var e=localStorage.getItem(h);try{if(e)return JSON.parse(e)}catch(e){console.error("There is some data in the local storage under the ".concat(h," key. However, it is not a valid JSON."))}}return null},J=function(){var e=c()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./settings.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),K=function(e){return e.map(function(e){return"&#10035; "+e.filename}).join("<br />")};function H(){return V.apply(this,arguments)}function V(){return(V=c()(o.a.mark(function e(){var t,n,r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s(".home"),n=s(".new-project"),r=s(".home-local-storage"),i=s(".local-json"),e.abrupt("return",new Promise(function(){var e=c()(o.a.mark(function e(c){var u,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(u=G())?(r.find("p").content(K(u.files)),r.onClick(function(){c(u),t.hide()})):r.find("p").content('<small class="centered">There\'s nothing saved in the local storage.</small>'),e.next=4,J();case 4:(a=e.sent)?(i.find("p").content(K(a.files)),i.onClick(function(){c(a),t.hide()})):i.find("p").content('<small class="centered">There\'s no settings.json file available.</small>'),n.onClick(function(){c(z),t.hide()});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}window.onload=c()(o.a.mark(function e(){var t,n,r,i,u,a,l,f,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return t=e.sent,n=m(t),e.next=6,M(n);case 6:return r=n.getCurrentFile(),i=r.content,u=C(w()),a=function(){return O(n.getCurrentIndex(),n.getFiles())},l=L(n),I(n),R(n),e.next=14,g(n.getEditorSettings(),i,function(){var e=c()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n.editCurrentFile({content:t,editing:!1}),a();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),function(e){n.editCurrentFile({editing:!0})});case 14:f=e.sent,p=function(){var e=c()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:f.setValue(t.content),f.focus(),n.editCurrentFile({editing:!1}),a();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),E(n,function(e){p(n.changeActiveFile(e))},function(){p(n.addNewFile())},function(e){l(e,function(){var e=c()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"delete"===t&&p(n.getCurrentFile()),f.focus();case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}),s(".container").css("visibility","visible").css("opacity",1),setTimeout(function(){return S()},100),a();case 20:case"end":return e.stop()}},e,this)}))}]);