(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(7),s=a(2),u=a.n(s),i=a(1),d=a(5),m=(a(15),a(6)),p=a.n(m),g=function(e){var t=e.character;return r.a.createElement("div",{className:"CharacterCard",style:{backgroundImage:"url(".concat(t.image,")")}},r.a.createElement("div",{className:"CharacterCard__name-container text-truncate"},t.name))},f=function(){var e=Object(d.a)(u.a.mark(function e(t,a){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(i.a)({},a,{loading:!0})),e.prev=1,e.next=4,fetch("/api/character/?page=".concat(a.nextPages),{mode:"cors",method:"GET",headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t(Object(i.a)({},a,{loading:!1,data:{info:r.info,results:[].concat(a.data.results,r.results)},nextPages:a.nextPages+1})),console.log(a.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t(Object(i.a)({},a,{loading:!1,error:e.t0}));case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(n.useState)({data:{results:[]},loading:!1,error:null,nextPages:1}),t=Object(l.a)(e,2),a=t[0],c=t[1];return function(e,t){Object(n.useEffect)(function(){return console.log("ComponentDidMount"),f(e,t),function(){console.log("CompontedWillMount"),new AbortController.abort}},[])}(c,a),a.error?r.a.createElement("div",null,r.a.createElement("h1",null,a.error.message)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"Logo",src:p.a,alt:"Rick y Morty"}),r.a.createElement("ul",{className:"row"},a.data.results.map(function(e){return r.a.createElement("li",{className:"col-6 col-md-3",key:e.id},r.a.createElement(g,{character:e}))})),a.loading&&r.a.createElement("p",null,"Cargando...."),!a.loading&&r.a.createElement("button",{onClick:function(){return f(c,a)}},"Load More")))},b=document.getElementById("root");o.a.render(r.a.createElement(E,null),b)},6:function(e,t,a){e.exports=a.p+"static/media/logo.de82c64b.png"},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.33508b17.chunk.js.map