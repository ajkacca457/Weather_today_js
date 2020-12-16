(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap);"]),o.push([n.id,"body {\n  box-sizing: border-box;\n  background-color: rgba(153, 216, 250, 0.4);\n  font-family: 'Slabo 27px', serif;\n}\n\n.container {\n  width: 50%;\n  margin: 2% auto;\n  background-image: -webkit-linear-gradient(bottom, #48c6ef 0%, #6f86d6 100%);\n  background-image: -o-linear-gradient(bottom, #48c6ef 0%, #6f86d6 100%);\n  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);\n  padding: 2%;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.errordisplay {\n  margin: 2% auto;\n  width: 50%;\n  background-color: rgba(220, 117, 96, 1);\n  text-align: center;\n  padding: 10px 0;\n  color: white;\n  display: none;\n  border-radius: 5px;\n}\n\n.errordisplay.show {\n  display: block;\n}\n\n#input {\n  width: 70%;\n  display: block;\n  padding-left: 5px;\n  height: 30px;\n  border-radius: 5px;\n  border: none;\n  margin: auto;\n}\n\n.btn {\n  width: 50%;\n  margin: 10px 0;\n  border-radius: 5px;\n  border: none;\n  padding: 1% 0;\n  background-color: orange;\n  font-family: 'Slabo 27px', serif;\n}\n\n#btn2 {\n  width: 50%;\n  background-color: rgba(220, 117, 96, 1);\n  font-family: 'Slabo 27px', serif;\n  border-radius: 5px;\n  border: none;\n  padding: 1% 0;\n  color: white;\n}\n\n#btn:focus {\n  outline: none;\n}\n\n#btn2:focus {\n  outline: none;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  text-shadow: 1px 2px grey;\n}\n\n#logo {\n  width: 50px;\n  height: 50px;\n}\n\n.white-color {\n  color: white;\n}\n\n#flag {\n  margin-top: -20px;\n}\n\n#temp {\n  font-size: 300%;\n}\n\n.temperature h1 {\n  margin-top: -10px;\n}\n\n.top {\n  display: flex;\n  justify-content: space-around;\n}\n\n.middle {\n  background-color: rgba(153, 216, 250, 0.5);\n  padding: 1% 0;\n}\n\n.middle h3 {\n  margin-top: -10px;\n}\n\n#cname {\n  margin-top: -10px;\n}\n\n.other {\n  background-color: rgba(3, 134, 221, 0.4);\n  padding: 1% 0;\n}\n\n#fer {\n  margin-left:-5px;\n  background-color: #ffae1a;\n    border: 1px white solid;\n    color:white;\n    border-radius: 0 5px 5px 0;\n    padding: 5px 10px;\n    cursor: pointer;\n}\n#cel {\n  background-color: #ff6666;\n  color:white;\n  border: 1px white solid;\n  border-radius: 5px 0 0 5px ;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n#cel:focus {\n  outline: none;\n}\n#cel.active {\n  background-color: rgba(3, 134, 221, 0.40);\n}\n#fer.active{\n  background-color: rgba(3, 134, 221, 0.40);\n}\n\n#fer:focus {\n  outline:none;\n}\n\n#load{\nmargin-top: 20px;\nbackground-color: white;\nheight: 100px;\nwidth: 100px;\nborder-radius:10px;\ndisplay: none;\n}\n\n#load.load{\n  display: block;\n  margin: 20px auto;\n}\n\n.display.load {\n  display: none;\n}\n\n.btncont {\n  position:absolute;\n  top:10px;\n  right:10px;\n}\n\n@media only screen and (max-width: 800px) {\n\n  .container { width: 90%; }\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],d=e.base?c[0]+e.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:b(p,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,h=0;function b(n,e){var t,r,o;if(e.singleton){var a=h++;t=f||(f=d(e)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=d(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var d=c(n,e),s=0;s<t.length;s++){var l=i(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=d}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(426);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=t.p+"20f0cc1d2fa7fabb49bb19cba3c62d19.png",a=t.p+"2af4b484c0945aa5e20a47e1846e9589.gif";(()=>{(()=>{const n=document.createElement("div");n.classList.add("container");const e=document.createElement("div");e.classList.add("errordisplay"),n.innerHTML=`\n  <div class="header">\n    <img src="${o}" alt="weather" id="logo">\n    <h1>Weather Today</h1>\n  </div>\n\n  <form id="form">\n  <input type="text" id="input" placeholder="Search your city weather">\n  <button id="btn" class="btn" type="submit"> Search</button>\n  </form>\n  <button id="btn2"> clear</button>\n  <div class="display"></div>\n  <img src="${a}" alt="wait" id="load">\n`,e.innerHTML="<p>Here all the errors will be shown</p>",document.body.appendChild(e),document.body.appendChild(n)})();const n=document.querySelector("#input"),e=document.querySelector("#form"),t=document.querySelector(".display"),r=document.querySelector(".errordisplay"),i=document.querySelector("#btn2"),c=(document.querySelector("#load"),n=>{r.innerHTML=`${n}`,r.classList.add("show")});e.addEventListener("submit",(e=>{e.preventDefault();const t=n.value.toLowerCase();""===t?(c("please enter a city name"),setTimeout((()=>{r.classList.remove("show")}),2e3)):(async n=>{const e=`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=58e217dc39037b142756e2115c0d5722&units=metric`,t=await fetch(e);return await t.json()})(t).then((n=>{Showdata(n)})).catch((n=>{c(n),setTimeout((()=>{n.classList.remove("show")}),2e3)})),n.value=""})),i.addEventListener("click",(()=>{t.innerHTML=""}))})()})()})();