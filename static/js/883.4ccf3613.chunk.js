"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[883],{197:function(n,t,e){e.d(t,{Hx:function(){return p},Y5:function(){return o},qF:function(){return f},uV:function(){return s},vw:function(){return i}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org";c.Z.defaults.params={api_key:"cb47733d8738b823995f01432c3cdbcf"};var i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/3/trending/movie/week");case 3:return t=n.sent,n.abrupt("return",t);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/3/movie/".concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/3/movie/".concat(t,"/credits"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("3/movie/".concat(t,"/reviews"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/3/search/movie?query=".concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},335:function(n,t,e){e.d(t,{Z:function(){return o}});e(791);var r,a=e(87),u=e(168),c=(0,e(867).ZP)("ul")(r||(r=(0,u.Z)(["\n  margin-left: 0;\n  width: 100%;\n  padding: 50px;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n  align-items: center;\n\n  & li {\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    display: flex;\n    height: 40px;\n    width: 300px;\n    border: 2px solid #006400;\n    border-radius: 20px;\n  }\n\n  & a {\n    text-decoration: none;\n    color: #008080;\n    font-weight: bold;\n    font-size: 14px;\n  }\n"]))),i=e(184),o=function(n){var t=n.movies;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c,{children:t.map((function(n){return(0,i.jsx)("li",{children:(0,i.jsx)(a.OL,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})})}},883:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a=e(861),u=e(439),c=e(757),i=e.n(c),o=e(791),s=e(87),p=e(168),f=(0,e(867).ZP)("form")(r||(r=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  & input {\n    padding: 5px;\n    border-radius: 5px;\n    border: 2px solid #006400;\n    height: 30px;\n    width: 200px;\n    background-color: white;\n    background-position: 10px 10px;\n    background-repeat: no-repeat;\n    padding-left: 40px;\n  }\n\n  & button {\n    padding: 10px;\n    border-radius: 5px;\n    border: 2px solid #006400;\n    height: 40px;\n    width: 100px;\n    background-color: #9acd32;\n    font-size: 14px;\n    font-weight: bold;\n  }\n"]))),l=e(184),d=function(n){var t=n.onSubmit,e=(0,o.useState)(""),r=(0,u.Z)(e,2),a=r[0],c=r[1];return(0,l.jsx)("div",{children:(0,l.jsxs)(f,{onSubmit:function(n){n.preventDefault(),t(a),c("")},children:[(0,l.jsx)("input",{onChange:function(n){c(n.target.value)},"aria-label":"select",className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:a}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},h=e(197),x=e(335),v=function(){var n=(0,o.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],c=(0,o.useState)(""),p=(0,u.Z)(c,2),f=(p[0],p[1]),v=(0,s.lr)(),b=(0,u.Z)(v,2),m=b[0],w=b[1],g=m.get("query");(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(g){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,(0,h.qF)(g);case 5:t=n.sent,r(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),f(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]);return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(d,{onSubmit:function(n){if(""===n)return w({});w({query:n})}}),e&&(0,l.jsx)(x.Z,{movies:e})]})})}}}]);
//# sourceMappingURL=883.4ccf3613.chunk.js.map