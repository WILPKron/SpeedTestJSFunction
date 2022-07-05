const C=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}};C();const t=(i,o="default",l="",m=50)=>{const n=[],r=w();for(let d=0;d<m;d++)n.push(L(i));const a=w(),s=n.reduce((d,T)=>d+T,0)/n.length,f=document.querySelector("#app"),c=document.createElement("div");c.innerHTML=`
        <canvas id="${o}"></canvas>
        <div>\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438: ${s}</div>
        <!--div>\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u043F\u0430\u043C\u044F\u0442\u0438 \u0432 \u041A\u0411: ${r-a}</div-->
    `,l=l||o;const u=document.createElement("div");u.innerHTML=` ${l}:  ${s}`,document.querySelector(".info").appendChild(u);let p=!1;f.addEventListener("DOMNodeInserted",()=>{p||(x(`#${o}`,n,l),p=!0)},!1),f.appendChild(c)};function y(i){return i.map(o=>[Math.random(),o]).sort().map(o=>o[1])}const w=()=>{if(!window.performance)throw new Error("No 'performance' property");return Math.round(window.performance.memory.usedJSHeapSize*100/1024)/100},L=i=>{const o=window.performance.now();return i.call(),window.performance.now()-o},x=(i,o=[],l="")=>{let n=document.querySelector(i).getContext("2d");new Chart(n,{type:"line",data:{labels:Object.keys(o),datasets:[{label:l,backgroundColor:"rgb(255, 99, 132, 0)",borderColor:"rgb(255, 99, 132)",data:o}]},options:{}})},e={itemCount:1e4,iterationCount:100,line:{one:[],two:[]},moreToLess:{one:[],two:[]},mix:{one:[],two:[]},workCode:{find:!0,object:!0,map:!0,filter:!0,some:!0}};for(let i=0;i<e.itemCount;i++)e.line.one.push({ID:i}),e.line.two.push({ID:i});e.moreToLess.one=e.line.one;e.moreToLess.two=e.line.two.reverse();e.mix.one=y(e.line.one);e.mix.two=y(e.line.two);const I=document.querySelector("#title");I.innerHTML=`\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: ${new Intl.NumberFormat("ru-RU").format(e.itemCount)},<br> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439: ${e.iterationCount}`;t(()=>{for(let i in e.line.one)e.line.two.find(o=>o.ID===e.line.one[i].ID)},"findLineArrayTime","(find) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{for(let i in e.line.one)e.line.two.find(o=>o.ID===e.line.one[i].ID)},"findLineArrayTime2","(find) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{for(let i in e.moreToLess.one)e.moreToLess.two.find(o=>o.ID===e.moreToLess.one[i].ID)},"findArrayTime","(find) \u041C\u0430\u0441\u0441\u0438\u0432 \u0433\u0434\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u043C",e.iterationCount),t(()=>{for(let i in e.mix.one)e.mix.two.find(o=>o.ID===e.mix.one[i].ID)},"findArrayMixTime","(find) \u041F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u044B",e.iterationCount);t(()=>{e.line.one.filter(i=>e.line.two.find(o=>o.id===i.id)!==void 0)},"filterLineArrayTime","(filter) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{e.line.one.filter(i=>e.line.two.find(o=>o.id===i.id)!==void 0)},"filterLineArrayTime2","(filter) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{e.moreToLess.one.filter(i=>e.moreToLess.two.find(o=>o.id===i.id)!==void 0)},"filterArrayTime","(filter) \u041C\u0430\u0441\u0441\u0438\u0432 \u0433\u0434\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u043C",e.iterationCount),t(()=>{e.mix.one.filter(i=>e.mix.two.find(o=>o.id===i.id)!==void 0)},"filterArrayMixTime","(filter) \u041F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u044B",e.iterationCount);t(()=>{let i={};for(let o in e.line.two)i[e.line.two[o].ID]=e.line.two[o];for(let o in e.line.one)i[e.line.one[o].ID]},"objectLineArrayTime","(object) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{let i={};for(let o in e.line.two)i[e.line.two[o].ID]=e.line.two[o];for(let o in e.line.one)i[e.line.one[o].ID]},"objectLineArrayTime2","(object) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{let i={};for(let o in e.moreToLess.two)i[e.moreToLess.two[o].ID]=e.moreToLess.two[o];for(let o in e.moreToLess.one)i[e.moreToLess.one[o].ID]},"objectArrayTime","(object) \u041C\u0430\u0441\u0441\u0438\u0432 \u0433\u0434\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u043C",e.iterationCount),t(()=>{let i={};for(let o in e.mix.two)i[e.mix.two[o].ID]=e.mix.two[o];for(let o in e.mix.one)i[e.mix.one[o].ID]},"objectArrayMixTime","(object) \u041F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u044B",e.iterationCount);t(()=>{let i=e.line.two.map(o=>o.ID);for(let o in e.line.one)i.includes(e.line.one[o].ID)},"mapLineArrayTime","(map) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{let i=e.line.two.map(o=>o.ID);for(let o in e.line.one)i.includes(e.line.one[o].ID)},"mapLineArrayTime2","(map) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{let i=e.moreToLess.two.map(o=>o.ID);for(let o in e.moreToLess.one)i.includes(e.moreToLess.one[o].ID)},"mapArrayTime","(map) \u041C\u0430\u0441\u0441\u0438\u0432 \u0433\u0434\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u043C",e.iterationCount),t(()=>{let i=e.mix.two.map(o=>o.ID);for(let o in e.mix.one)i.includes(e.mix.one[o].ID)},"mapArrayMixTime","(map) \u041F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u044B",e.iterationCount);t(()=>{e.line.one.filter(i=>e.line.two.some(o=>o.id===i.id))},"someLineArrayTime","(some) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{e.line.one.filter(i=>e.line.two.some(o=>o.id===i.id))},"someLineArrayTime2","(some) \u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",e.iterationCount),t(()=>{e.moreToLess.one.filter(i=>e.moreToLess.two.some(o=>o.id===i.id))},"someArrayTime","(some) \u041C\u0430\u0441\u0441\u0438\u0432 \u0433\u0434\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u043C",e.iterationCount),t(()=>{e.mix.one.filter(i=>e.mix.two.some(o=>o.id===i.id))},"someArrayMixTime","(some) \u041F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u044B",e.iterationCount);