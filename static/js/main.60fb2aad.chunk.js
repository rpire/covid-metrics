(this["webpackJsonpcovid-metrics"]=this["webpackJsonpcovid-metrics"]||[]).push([[0],{38:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(11),r=t.n(s),i=t(7),o=t(8),j=(t(38),t(3)),d=t(28),l=t(20),b=t(2),h=function(e){var n=e.search,t=e.handleChange;return Object(b.jsxs)("nav",{className:"flex-box",children:[Object(b.jsx)("span",{className:"nav-title",children:"UK"}),Object(b.jsx)("span",{className:"nav-center",children:"most cases"}),Object(b.jsx)("form",{className:"input-container flex-box",children:Object(b.jsxs)("label",{htmlFor:"search",className:"flex-box",children:[Object(b.jsx)("input",{type:"text",id:"search",name:"search",value:n,onChange:t,placeholder:"Search country"}),Object(b.jsx)(l.a,{})]})})]})},x=t(21),m=function(e){var n=e.region,t=n.name,c=n.today_open_cases,a=n.id,s=e.id;return Object(b.jsxs)("div",{className:[0,3,4,7,8].includes(s)?"dark-region":"light-region",children:[Object(b.jsxs)("div",{className:"region-img-frame flex-box",children:[Object(b.jsx)("img",{src:"./media/".concat(a,".png"),alt:"Region map",className:"region-img"}),Object(b.jsx)(x.a,{className:"details-link"})]}),Object(b.jsxs)("div",{className:"region-content flex-box",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("p",{children:"Open cases"}),Object(b.jsx)("span",{children:c})]})]})},u=function(){var e=Object(o.c)((function(e){return e.data})),n=Object(c.useState)(""),t=Object(d.a)(n,2),a=t[0],s=t[1],r=e.regions.sort((function(e,n){return n.today_open_cases-e.today_open_cases})).filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{search:a,handleChange:function(e){return s(e.target.value)}}),Object(b.jsxs)("div",{className:"main-container flex-box",children:[Object(b.jsx)("img",{src:"./media/".concat(e.id,".png"),alt:"Map silhouette for ".concat(e.name),className:"main-img"}),Object(b.jsxs)("div",{className:"main-content flex-box",children:[Object(b.jsx)("h1",{children:e.name}),Object(b.jsx)("p",{children:"Open cases today"}),Object(b.jsx)("span",{children:e.today_open_cases})]})]}),Object(b.jsx)("h2",{children:"STATS BY REGION"}),Object(b.jsx)("ul",{className:"region-list",children:r.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/".concat(e.id),children:Object(b.jsx)(m,{region:e,id:r.indexOf(e)})})},e.id)}))})]})},O=t(23),p=t(24),g=function(e){var n=e.name;return Object(b.jsxs)("nav",{className:"flex-box",children:[Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)(O.a,{})}),Object(b.jsx)("span",{children:"".concat(n," metrics")}),Object(b.jsx)("button",{type:"button",children:Object(b.jsx)(p.a,{})})]})},f=function(e){var n=e.region,t=n.id,c=n.name,a=n.today_open_cases;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{name:c}),Object(b.jsx)("h1",{children:"This is the details page for ".concat(c)}),Object(b.jsx)("p",{children:"Welcome"}),Object(b.jsx)("p",{children:"Today open Cases: "}),Object(b.jsx)("span",{children:a}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{src:"./media/".concat(t,".png"),alt:"Silhoutte of ".concat(c)})]})},v=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"This is the error page"}),Object(b.jsx)("p",{children:"Welcome"})]})},y=t(17),N=t.n(y),_=t(25),C="App/data/LOAD_DATA",F=new Date,w=F.getFullYear(),S=F.getMonth()+1,T=F.getDate()-1,k="".concat(w,"-").concat(S,"-").concat(T),I="https://api.covid19tracking.narrativa.com/api/".concat(k,"/country/united_kingdom"),A={regions:[{name:"Gibraltar",id:"gibraltar"},{name:"Scotland",id:"scotland"},{name:"Channel Islands",id:"channel_islands"},{name:"North Ireland",id:"north_ireland"},{name:"Cayman Islands",id:"cayman_islands"},{name:"Montserrat",id:"montserrat"},{name:"Isle of Man",id:"isle_of_man"},{name:"Bermuda",id:"bermuda"},{name:"England",id:"england"},{name:"Wales",id:"wales"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;return n.type===C?n.payload:e},L=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e(function(){var e=Object(_.a)(N.a.mark((function e(n){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(I).then((function(e){return e.json()}));case 2:t=e.sent,n((c=t.dates[k].countries["United Kingdom"],{type:C,payload:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]);var n=Object(o.c)((function(e){return e.data.regions}));return Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(u,{})}),n.map((function(e){return Object(b.jsx)(j.a,{path:"/".concat(e.id),children:Object(b.jsx)(f,{region:e})},"".concat(e.id,"#path"))})),Object(b.jsx)(j.a,{path:"*",children:Object(b.jsx)(v,{})})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))},B=t(12),E=t(26),W=t(27),G=Object(B.b)({data:D}),J=Object(B.c)(G,Object(B.a)(E.logger,W.a));r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{basename:"/covid-metrics",children:Object(b.jsx)(o.a,{store:J,children:Object(b.jsx)(L,{})})})}),document.getElementById("root")),M()}},[[44,1,2]]]);
//# sourceMappingURL=main.60fb2aad.chunk.js.map