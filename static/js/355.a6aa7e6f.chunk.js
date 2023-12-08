"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[355],{197:function(t,n,e){e.d(n,{Hx:function(){return p},Y5:function(){return s},qF:function(){return f},uV:function(){return o},vw:function(){return u}});var r=e(861),c=e(757),a=e.n(c),i=e(340);i.Z.defaults.baseURL="https://api.themoviedb.org";i.Z.defaults.params={api_key:"cb47733d8738b823995f01432c3cdbcf"};var u=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/3/trending/movie/week");case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/3/movie/".concat(n));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/3/movie/".concat(n,"/credits"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("3/movie/".concat(n,"/reviews"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/3/search/movie?query=".concat(n));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},355:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var r,c,a,i=e(861),u=e(439),s=e(757),o=e.n(s),p=e(791),f=e(689),v=e(87),d=e(197),l=e(168),h=e(867),x=(0,h.ZP)("div")(r||(r=(0,l.Z)(["\n  margin: 20px;\n  display: flex;\n\n  & img {\n    height: 100%;\n    width: 300px;\n    margin-right: 25px;\n  }\n\n  & p {\n    width: 400px;\n  }\n"]))),m=(0,h.ZP)("div")(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),w=(0,h.ZP)("div")(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  width: 100%;\n\n  & > * {\n    border-radius: 15%;\n    border: 1px solid #ffffff;\n    padding: 15px;\n    color: #000000;\n    background-color: #9acd32;\n  }\n"]))),g=e(184),b=function(){var t,n,e=null!==(t=null===(n=(0,f.TH)().state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/",r=(0,f.UO)().movieId,c=(0,p.useState)(""),a=(0,u.Z)(c,2),s=a[0],l=a[1];if((0,p.useEffect)((function(){var t=function(){var t=(0,i.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.Y5)(r);case 3:n=t.sent,l(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),!s)return(0,g.jsx)("div",{children:"Loading movie details..."});var h=10*s.vote_average;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v.OL,{to:e,children:(0,g.jsx)("button",{type:"button",children:"Go back"})}),(0,g.jsxs)(x,{children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:s.title}),(0,g.jsxs)(m,{children:[(0,g.jsx)("h1",{children:s.title}),(0,g.jsxs)("h3",{children:["User score:",h.toFixed(2),"%"]}),(0,g.jsx)("p",{children:s.overview})]})]}),(0,g.jsxs)(w,{children:[(0,g.jsx)(v.OL,{to:"/movies/".concat(r,"/cast"),children:"Cast"}),(0,g.jsx)(v.OL,{to:"/movies/".concat(r,"/reviews"),children:"Reviews"})]}),(0,g.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=355.a6aa7e6f.chunk.js.map