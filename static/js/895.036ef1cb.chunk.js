"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[895],{197:function(t,e,n){n.d(e,{Hx:function(){return p},Y5:function(){return s},qF:function(){return f},uV:function(){return o},vw:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org";u.Z.defaults.params={api_key:"cb47733d8738b823995f01432c3cdbcf"};var i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/3/trending/movie/week");case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/3/movie/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/3/movie/".concat(e,"/credits"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("3/movie/".concat(e,"/reviews"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/3/search/movie?query=".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},895:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r,a,c=n(861),u=n(439),i=n(757),s=n.n(i),o=n(791),p=n(689),f=n(197),l=n(168),v=n(867),h=(0,v.ZP)("ul")(r||(r=(0,l.Z)(["\n  width: 100%;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n"]))),d=(0,v.ZP)("li")(a||(a=(0,l.Z)(["\n  padding: 20px;\n  height: 100%;\n  width: 1000px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #000000;\n  border-radius: 20px;\n"]))),w=n(184),x=function(){var t=(0,p.UO)().movieId,e=(0,o.useState)([]),n=(0,u.Z)(e,2),r=n[0],a=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Hx)(t);case 3:n=e.sent,a(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,w.jsx)("div",{children:r.length>0?(0,w.jsx)(h,{children:r.map((function(t){return(0,w.jsxs)(d,{children:[(0,w.jsxs)("h3",{children:["Author: ",t.author]}),(0,w.jsx)("p",{children:t.content})]},t.id)}))}):(0,w.jsx)("div",{children:"No Reviews information available"})})}}}]);
//# sourceMappingURL=895.036ef1cb.chunk.js.map