(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},19:function(e){e.exports={}},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),o=a(1),i=a.n(o),l=a(4),u=a(5),m=a(6),h=a(9),d=a(7),p=a(10),f=(a(18),a(8)),g=a.n(f),v=function(e){var t=e.character;return r.a.createElement("div",{className:"CharacterCard",style:{backgroundImage:"url(".concat(t.image,")")}},r.a.createElement("div",{className:"CharacterCard__name-container text-truncate"},t.name))},E=(a(19),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={data:{info:[],results:[]},loading:!1,error:null,nextPage:1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchCharacters()}},{key:"fetchCharacters",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://rick-and-morty-api.now.sh/api/morty/".concat(this.state.nextPage));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({data:{info:a.info,results:[].concat(this.state.data.results,a.results)},loading:!1,nextPage:this.state.nextPage+1}),console.log(this.state.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({loading:!1,error:e.t0});case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("div",null,r.a.createElement("h1",null,this.state.error.message)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"Logo",src:g.a,alt:"Rick y Morty"}),r.a.createElement("ul",{className:"row"},this.state.data.results.map(function(e){return r.a.createElement("li",{className:"col-6 col-md-3",key:e.id},r.a.createElement(v,{character:e}))})),this.state.loading&&r.a.createElement("p",null,"Cargando...."),!this.state.loading&&r.a.createElement("button",{onClick:function(){return e.fetchCharacters()}},"Load More")))}}]),t}(r.a.Component)),b=document.getElementById("root");s.a.render(r.a.createElement(E,null),b)},8:function(e,t,a){e.exports=a.p+"static/media/logo.de82c64b.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.113ed23a.chunk.js.map