(this.webpackJsonpwebpractice2=this.webpackJsonpwebpractice2||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),i=c.n(s),a=c(4),o=c.n(a),j=c(7),u=c(2),l=(c(13),c(0));var b=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("h1",{children:"Loading..."})})},d=c(5);var O=function(e){var t=e.id,c=e.image,r=e.info,s=e.name,i=e.price,a=e.removeTour,o=Object(n.useState)(!1),j=Object(u.a)(o,2),b=j[0],d=j[1];return Object(l.jsxs)("article",{className:"single-tour",children:[Object(l.jsx)("img",{src:c,alt:s}),Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"tour-info",children:[Object(l.jsx)("h4",{children:s}),Object(l.jsxs)("h4",{className:"tour-price",children:["$",i]})]}),Object(l.jsxs)("p",{children:[b?r:"".concat(r.substring(0,200),"..."),Object(l.jsxs)("button",{onClick:function(){return d(!b)},children:[" ",b?"show less":"  read more"]})]}),Object(l.jsx)("button",{className:"delete-btn",onClick:function(){return a(t)},children:"not interested"})]})]})};var h=function(e){var t=e.tours,c=e.removeTour;return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h2",{children:"our tours"}),Object(l.jsx)("div",{className:"underline"})]}),t.map((function(e){return Object(l.jsx)(O,Object(d.a)(Object(d.a)({},e),{},{removeTour:c}),e.id)}))]})};var x=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),a=i[0],d=i[1],O=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,r(!1),d(c),console.log(c),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),r(!1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[]),c?Object(l.jsx)("main",{children:Object(l.jsx)(b,{})}):Object(l.jsx)("main",{children:Object(l.jsx)(h,{tours:a,removeTour:function(e){var t=a.filter((function(t){return t.id!==e}));d(t)}})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e57bd47f.chunk.js.map