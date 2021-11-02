!function(){var t={713:function(t,e,n){var o;!function(r){var i=r.Promise,s=i&&"resolve"in i&&"reject"in i&&"all"in i&&"race"in i&&function(){var t;return new i((function(e){t=e})),"function"==typeof t}();e?(e.Promise=s?i:q,e.Polyfill=q):void 0===(o=function(){return s?i:q}.call(e,n,e,t))||(t.exports=o);var c="pending",a="sealed",l="fulfilled",d="rejected",u=function(){};function f(t){return"[object Array]"===Object.prototype.toString.call(t)}var h,m="undefined"!=typeof setImmediate?setImmediate:setTimeout,p=[];function g(){for(var t=0;t<p.length;t++)p[t][0](p[t][1]);p=[],h=!1}function y(t,e){p.push([t,e]),h||(h=!0,m(g,0))}function v(t){var e=t.owner,n=e.state_,o=e.data_,r=t[n],i=t.then;if("function"==typeof r){n=l;try{o=r(o)}catch(t){L(i,t)}}_(i,o)||(n===l&&w(i,o),n===d&&L(i,o))}function _(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"==typeof e)){var o=e.then;if("function"==typeof o)return o.call(e,(function(o){n||(n=!0,e!==o?w(t,o):b(t,o))}),(function(e){n||(n=!0,L(t,e))})),!0}}catch(e){return n||L(t,e),!0}return!1}function w(t,e){t!==e&&_(t,e)||b(t,e)}function b(t,e){t.state_===c&&(t.state_=a,t.data_=e,y(E,t))}function L(t,e){t.state_===c&&(t.state_=a,t.data_=e,y(S,t))}function x(t){var e=t.then_;t.then_=void 0;for(var n=0;n<e.length;n++)v(e[n])}function E(t){t.state_=l,x(t)}function S(t){t.state_=d,x(t)}function q(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument");if(this instanceof q==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],function(t,e){function n(t){L(e,t)}try{t((function(t){w(e,t)}),n)}catch(t){n(t)}}(t,this)}q.prototype={constructor:q,state_:c,then_:null,data_:void 0,then:function(t,e){var n={owner:this,then:new this.constructor(u),fulfilled:t,rejected:e};return this.state_===l||this.state_===d?y(v,n):this.then_.push(n),n.then},catch:function(t){return this.then(null,t)}},q.all=function(t){if(!f(t))throw new TypeError("You must pass an array to Promise.all().");return new this((function(e,n){var o=[],r=0;function i(t){return r++,function(n){o[t]=n,--r||e(o)}}for(var s,c=0;c<t.length;c++)(s=t[c])&&"function"==typeof s.then?s.then(i(c),n):o[c]=s;r||e(o)}))},q.race=function(t){if(!f(t))throw new TypeError("You must pass an array to Promise.race().");return new this((function(e,n){for(var o,r=0;r<t.length;r++)(o=t[r])&&"function"==typeof o.then?o.then(e,n):e(o)}))},q.resolve=function(t){return t&&"object"==typeof t&&t.constructor===this?t:new this((function(e){e(t)}))},q.reject=function(t){return new this((function(e,n){n(t)}))}}("undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:this)},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(746);function t(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function e(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e)}n(713).Promise,window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>e(".modal",n)),3e5);(function(t,e,n,o){const r=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(n);function c(){i.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),r.forEach((t=>{t.classList.remove(o)}))}function a(t=0){i[t].classList.add("show","fade"),i[t].classList.remove("hide"),r[t].classList.add(o)}c(),a(),s.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach(((t,e)=>{n==t&&(c(),a(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,r){const i=document.querySelectorAll(n),s=document.querySelector(o);i.forEach((t=>{t.addEventListener("click",(()=>e(o,r)))})),s.addEventListener("click",(e=>{e.target!==s&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&s.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,r),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),i=o.querySelector("#hours"),s=o.querySelector("#minutes"),c=o.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}}(e);r.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(a)}l()}(t,e)}(".timer","2021-10-11"),function(){class t{constructor(t,e,n,o,r,i,...s){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=r,this.classes=s,this.parent=document.querySelector(i),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.element="menu__item",t.classList.add(this.element)):this.classes.forEach((e=>t.classList.add(e))),this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`            \n                    <img src=${this.src} alt=${this.alt}>\n                    <h3 class="menu__item-subtitle">${this.title}</h3>\n                    <div class="menu__item-descr">${this.descr}</div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${this.price}</span>грн/день</div>\n                    </div>\n                \n                `,this.parent.append(t)}}axios.get("http://localhost:3000/menu").then((e=>{e.data.forEach((({img:e,altimg:n,title:o,descr:r,price:i})=>{new t(e,n,o,r,i,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,r,i;function s(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){t.textContent=e&&n&&o&&r&&i?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*r)*i):Math.round((88.36+13.4*o+4.8*n-5.7*r)*i):"______"}function a(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid violet":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":r=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i=1.375,localStorage.setItem("ratio",1.375)),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),c(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,o){function r(n){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),e(".modal",o);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n                <div class="modal__content">\n                    <div class="modal__close" data-close>×</div>\n                    <div class="modal__title">${n}</div>\n                </div>\n            `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),r.classList.add("show"),r.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                    display: block;\n                    margin: 0 auto; \n                ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"Post",headers:{"Content-type":"aplication/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),r("Спасибо! Скоро свяжемся"),n.remove()})).catch((()=>{r("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))})),fetch("http://localhost:3000/menu").then((t=>t.json())).then((t=>console.log(t)))}("form",n),function({container:t,slide:e,nextArrow:n,prevArrow:o,totalCounter:r,currentCounter:i,wrapper:s,field:c}){const a=document.querySelectorAll(e),l=document.querySelector(t),d=document.querySelector(o),u=document.querySelector(n),f=document.querySelector(r),h=document.querySelector(i),m=document.querySelector(s),p=document.querySelector(c),g=window.getComputedStyle(m).width;let y=1,v=0;a.length<10?(f.textContent=`0${a.length}`,h.textContent=`0${y}`):(f.textContent=a.length,h.textContent=`0${y}`),p.style.width=100*a.length+"%",p.style.display="flex",p.style.transition="0.5s all",m.style.overflow="hidden",a.forEach((t=>{t.style.width=g})),l.style.position="relative";const _=document.createElement("ol"),w=[];_.classList.add("carousel-indicators"),_.style.cssText="    \n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",l.append(_);for(let t=0;t<a.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0==t&&(e.style.opacity=1),_.append(e),w.push(e)}function b(t){return+t.replace(/\D/g,"")}u.addEventListener("click",(()=>{v==b(g)*(a.length-1)?v=0:v+=b(g),p.style.transform=`translateX(-${v}px)`,y==a.length?y=1:y++,a.length<10?h.textContent=`0${y}`:h.textContent=y,w.forEach((t=>t.style.opacity=".5")),w[y-1].style.opacity=1})),d.addEventListener("click",(()=>{0==v?v=b(g)*(a.length-1):v-=b(g),p.style.transform=`translateX(-${v}px)`,1==y?y=a.length:y--,a.length<10?h.textContent=`0${y}`:h.textContent=y,w.forEach((t=>t.style.opacity=".5")),w[y-1].style.opacity=1})),w.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");y=e,v=b(g)*(e-1),p.style.transform=`translateX(-${v}px)`,a.length<10?h.textContent=`0${y}`:h.textContent=y,w.forEach((t=>t.style.opacity=".5")),w[y-1].style.opacity=1}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",slide:".offer__slide",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}()}();
//# sourceMappingURL=bundle.js.map