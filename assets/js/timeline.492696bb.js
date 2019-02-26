(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{272:function(e,t){function i(e,t){const i=[],n="Timeline:";let l,s=window.innerWidth,a=0;const o={forceVerticalMode:{type:"integer",defaultValue:600},horizontalStartPosition:{type:"string",acceptedValues:["bottom","top"],defaultValue:"top"},mode:{type:"string",acceptedValues:["horizontal","vertical"],defaultValue:"vertical"},moveItems:{type:"integer",defaultValue:1},startIndex:{type:"integer",defaultValue:0},verticalStartPosition:{type:"string",acceptedValues:["left","right"],defaultValue:"left"},verticalTrigger:{type:"string",defaultValue:"15%"},visibleItems:{type:"integer",defaultValue:3}};function r(e,t,i){t.classList.add(i),e.parentNode.insertBefore(t,e),t.appendChild(e)}function d(e,t){const i=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,l=o.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/);let s=t.unit,a=t.value,r=n;return"px"===s&&a>=n&&(console.warn('The value entered for the setting "verticalTrigger" is larger than the window height. The default value will be used instead.'),[,a,s]=l),"px"===s?r=parseInt(r-a,10):"%"===s&&(r=parseInt(r*((100-a)/100),10)),i.top<=r&&i.left<=(window.innerWidth||document.documentElement.clientWidth)&&i.top+i.height>=0&&i.left+i.width>=0}function c(e,t){e.style.webkitTransform=t,e.style.msTransform=t,e.style.transform=t}function m(e){const t=`translate3d(-${e.items[a].offsetLeft}px, 0, 0)`;c(e.scroller,t)}function u(e){a=e.settings.startIndex,e.timelineEl.classList.add("timeline--horizontal"),function(e){window.innerWidth>e.settings.forceVerticalMode&&(e.itemWidth=e.wrap.offsetWidth/e.settings.visibleItems,e.items.forEach(t=>{t.style.width=`${e.itemWidth}px`}),e.scrollerWidth=e.itemWidth*e.items.length,e.scroller.style.width=`${e.scrollerWidth}px`,function(){let t=0,i=0;e.items.forEach((e,n)=>{e.style.height="auto";const l=e.offsetHeight;n%2==0?i=l>i?l:i:t=l>t?l:t});const n=`translateY(${i}px)`;e.items.forEach((l,s)=>{s%2==0?(l.style.height=`${i}px`,"bottom"===e.settings.horizontalStartPosition?(l.classList.add("timeline__item--bottom"),c(l,n)):l.classList.add("timeline__item--top")):(l.style.height=`${t}px`,"bottom"!==e.settings.horizontalStartPosition?(l.classList.add("timeline__item--bottom"),c(l,n)):l.classList.add("timeline__item--top"))}),e.scroller.style.height=`${i+t}px`}())}(e),m(e),function(e){if(e.items.length>e.settings.visibleItems){const t=document.createElement("button"),i=document.createElement("button"),n=e.items[0].offsetHeight;t.className="timeline-nav-button timeline-nav-button--prev",i.className="timeline-nav-button timeline-nav-button--next",t.textContent="Previous",i.textContent="Next",t.style.top=`${n}px`,i.style.top=`${n}px`,0===a?t.disabled=!0:a===e.items.length-e.settings.visibleItems&&(i.disabled=!0),e.timelineEl.appendChild(t),e.timelineEl.appendChild(i)}}(e),function(e){const t=e.timelineEl.querySelector(".timeline-divider");t&&e.timelineEl.removeChild(t);const i=e.items[0].offsetHeight,n=document.createElement("span");n.className="timeline-divider",n.style.top=`${i}px`,e.timelineEl.appendChild(n)}(e),function(e){const t=e.timelineEl.querySelectorAll(".timeline-nav-button"),i=e.timelineEl.querySelector(".timeline-nav-button--prev"),n=e.timelineEl.querySelector(".timeline-nav-button--next"),l=e.items.length-e.settings.visibleItems,s=parseInt(e.settings.moveItems,10);[].forEach.call(t,t=>{t.addEventListener("click",function(t){t.preventDefault(),0===(a=this.classList.contains("timeline-nav-button--next")?a+=s:a-=s)||a<0?(a=0,i.disabled=!0,n.disabled=!1):a===l||a>l?(a=l,i.disabled=!1,n.disabled=!0):(i.disabled=!1,n.disabled=!1),m(e)})})}(e)}function h(){i.forEach(e=>{e.timelineEl.style.opacity=0,e.timelineEl.classList.contains("timeline--loaded")||function(e){e.forEach(e=>{r(e.querySelector(".timeline__content"),document.createElement("div"),"timeline__content__wrap"),r(e.querySelector(".timeline__content__wrap"),document.createElement("div"),"timeline__item__inner")})}(e.items),function(e){e.timelineEl.classList.remove("timeline--horizontal","timeline--mobile"),e.scroller.removeAttribute("style"),e.items.forEach(e=>{e.removeAttribute("style"),e.classList.remove("animated","fadeIn","timeline__item--left","timeline__item--right")});const t=e.timelineEl.querySelectorAll(".timeline-nav-button");[].forEach.call(t,e=>{e.parentNode.removeChild(e)})}(e),window.innerWidth<=e.settings.forceVerticalMode&&e.timelineEl.classList.add("timeline--mobile"),"horizontal"===e.settings.mode&&window.innerWidth>e.settings.forceVerticalMode?u(e):function(e){let t=0;e.items.forEach((i,n)=>{i.classList.remove("animated","fadeIn"),!d(i,e.settings.verticalTrigger)&&n>0?i.classList.add("animated"):t=n,n%2==("left"===e.settings.verticalStartPosition?1:0)&&window.innerWidth>e.settings.forceVerticalMode?i.classList.add("timeline__item--right"):i.classList.add("timeline__item--left")});for(let i=0;i<t;i+=1)e.items[i].classList.remove("animated","fadeIn");window.addEventListener("scroll",()=>{e.items.forEach(t=>{d(t,e.settings.verticalTrigger)&&t.classList.add("fadeIn")})})}(e),e.timelineEl.classList.add("timeline--loaded"),setTimeout(()=>{e.timelineEl.style.opacity=1},500)})}e.length&&[].forEach.call(e,function(e){const l=e.id?`#${e.id}`:`.${e.className}`,s="could not be found as a direct descendant of",a=e.dataset;let r,d,c;const m={};try{if(!(r=e.querySelector(".timeline__wrap")))throw new Error(`${n} .timeline__wrap ${s} ${l}`);if(!(d=r.querySelector(".timeline__items")))throw new Error(`${n} .timeline__items ${s} .timeline__wrap`);c=[].slice.call(d.children,0)}catch(e){return console.warn(e.message),!1}Object.keys(o).forEach(e=>{m[e]=o[e].defaultValue,a[e]?m[e]=a[e]:t&&t[e]&&(m[e]=t[e]),"integer"===o[e].type?m[e]&&function(e,t){return"number"==typeof e||e%1==0||(console.warn(`${n} The value "${e}" entered for the setting "${t}" is not an integer.`),!1)}(m[e],e)||(m[e]=o[e].defaultValue):"string"===o[e].type&&o[e].acceptedValues&&-1===o[e].acceptedValues.indexOf(m[e])&&(console.warn(`${n} The value "${m[e]}" entered for the setting "${e}" was not recognised.`),m[e]=o[e].defaultValue)});const u=o.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),h=m.verticalTrigger.match(/(\d*\.?\d*)(.*)/);let[,f,g]=h,v=!0;f||(console.warn(`${n} No numercial value entered for the 'verticalTrigger' setting.`),v=!1),"px"!==g&&"%"!==g&&(console.warn(`${n} The setting 'verticalTrigger' must be a percentage or pixel value.`),v=!1),"%"===g&&(f>100||f<0)?(console.warn(`${n} The 'verticalTrigger' setting value must be between 0 and 100 if using a percentage value.`),v=!1):"px"===g&&f<0&&(console.warn(`${n} The 'verticalTrigger' setting value must be above 0 if using a pixel value.`),v=!1),!1===v&&([,f,g]=u),m.verticalTrigger={unit:g,value:f},m.moveItems>m.visibleItems&&(console.warn(`${n} The value of "moveItems" (${m.moveItems}) is larger than the number of "visibleItems" (${m.visibleItems}). The value of "visibleItems" has been used instead.`),m.moveItems=m.visibleItems),m.startIndex>=c.length-m.visibleItems?(console.warn(`${n} The 'startIndex' setting must be between 0 and ${c.length-m.visibleItems} for this timeline. The value of ${c.length-m.visibleItems} has been used instead.`),m.startIndex=c.length-m.visibleItems):m.startIndex<0&&(console.warn(`${n} The 'startIndex' setting must be between 0 and ${c.length-m.visibleItems} for this timeline. The value of 0 has been used instead.`),m.startIndex=0),i.push({timelineEl:e,wrap:r,scroller:d,items:c,settings:m})}),h(),window.addEventListener("resize",()=>{clearTimeout(l),l=setTimeout(()=>{const e=window.innerWidth;e!==s&&(h(),s=e)},250)})}window.jQuery&&(window.jQuery.fn.timeline=function(e){return i(this,e),this})}}]);