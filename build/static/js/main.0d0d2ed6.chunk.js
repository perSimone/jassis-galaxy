(this["webpackJsonpjassis-galaxy"]=this["webpackJsonpjassis-galaxy"]||[]).push([[0],{24:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(16),r=a.n(s),i=(a(24),a(8)),o=a(2),l=a(1);function j(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsx)(i.b,{className:"home-link",to:"/nasaphoto",children:"Reach for the stars!"})})}var h=a(14),d=a.n(h),u=a(18),p=a(19);function b(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("ul",{children:Object(l.jsx)(i.b,{className:"link",to:"/",exact:!0,children:"Take Me Home"})})})}var x="abAfXEVGzXDxOMiiaYEBKOIyk8czPsH34Q1TbUmc";function m(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(x));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a),console.log(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)("h4",{children:"Jassi's daily dose of NASA. Lots of love from your stars in Utrecht \u2764"}),Object(l.jsx)("h1",{children:a.title}),Object(l.jsxs)("div",{className:"nasa-photo",children:["image"===a.media_type?Object(l.jsx)("img",{src:a.url,alt:a.title,className:"photo"}):Object(l.jsx)("iframe",{title:"space-video",src:a.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),Object(l.jsxs)("div",{className:"nasa-info",children:[Object(l.jsx)("p",{className:"date",children:a.date}),Object(l.jsx)("p",{className:"explanation",children:a.explanation})]})]})]}):Object(l.jsx)("div",{})}a(32);function O(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o.a,{component:j,path:"/",exact:!0}),Object(l.jsx)(o.a,{component:m,path:"/nasaphoto"})]})})}var f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.0d0d2ed6.chunk.js.map