(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(8),s=n.n(r),d=(n(17),n(12)),u=n(7),l=n(1);var i=function(e,t){var n=t.type,a=t.payload;switch(n){case"add-table":return Object(l.a)(Object(l.a)({},e),{},{data:Object(l.a)(Object(l.a)({},e.data),{},{tables:[].concat(Object(u.a)(e.data.tables),[a])}),isLoad:!0,isRequestSend:!1});case"replacement-table":var c=e.data.tables.map((function(e){return e.id===a.id?a:e}));return Object(l.a)(Object(l.a)({},e),{},{data:Object(l.a)(Object(l.a)({},e.data),{},{tables:c}),isLoad:!0,isRequestSend:!1});case"send-request":return Object(l.a)(Object(l.a)({},e),{},{isRequestSend:!0});case"add-col-names":return Object(l.a)(Object(l.a)({},e),{},{colNames:a});case"add-id-table":return Object(l.a)(Object(l.a)({},e),{},{tableIds:[].concat(Object(u.a)(e.tableIds),[a])});case"set-data-url":return Object(l.a)(Object(l.a)({},e),{},{dataUrl:a});default:return console.error("Unknown action"),e}},b=n(0),o=Object(a.createContext)(),j={data:{tables:[]},isLoad:!1,isRequestSend:!1,dataUrl:""},O=function(e){var t=e.children,n=Object(a.useReducer)(i,j),c=Object(d.a)(n,2),r=c[0],s=c[1];return r.addTable=function(e,t,n){return s({type:"add-table",payload:{id:e,table:t,colNames:n}})},r.replacementTable=function(e,t,n){return s({type:"replacement-table",payload:{id:e,table:t,colNames:n}})},r.sendRequest=function(){return s({type:"send-request"})},r.addColNames=function(e){return s({type:"add-col-names",payload:e})},r.setDataUrl=function(e){return s({type:"set-data-url",payload:e})},r.addIdTable=function(e){return s({type:"add-id-table",payload:e})},Object(b.jsx)(o.Provider,{value:r,children:t})},f=n(6),p=n.n(f),h=n(9),x=n(10),m=n(11),y=new(function(){function e(){Object(x.a)(this,e)}return Object(m.a)(e,[{key:"getData",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),v=function(e){var t=e.id,n=Object(a.useContext)(o),c=n.data,r=n.addTable,s=n.sendRequest,d=n.dataUrl,u=n.setDataUrl,l=n.replacementTable;return Object(b.jsx)("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),d?(s(),y.getData(d).then((function(e){t?l(t,e,Object.keys(e[0])):r(c.tables.length+"."+d,e,Object.keys(e[0])),u("")}))):alert("Enter url your json")}(e,t)},children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Add table"}),Object(b.jsxs)("label",{children:["Data Url:",Object(b.jsx)("input",{type:"text",name:"dataUrl",placeholder:"Enter url your json",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsx)("button",{type:"submit",children:"Add table"})]})})},g=function(){return Object(b.jsx)("div",{children:"Loading..."})},C=function(e){var t=e.table;return Object(b.jsx)(b.Fragment,{children:t.table.map((function(e,n){return Object(b.jsx)("tr",{children:t.colNames.map((function(t){return Object(b.jsx)("td",{children:""+e[t]},n+"."+t)}))},e.id)}))})},k=(n(20),function(e){var t=e.id,n=Object(a.useContext)(o).data;return Object(b.jsx)("div",{className:"table-container",children:n.tables.map((function(e){return Object(b.jsxs)("table",{border:"1",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:e.id===t?e.colNames.map((function(e){return Object(b.jsx)("th",{children:e},e)})):null})}),Object(b.jsx)("tbody",{children:e.id===t?Object(b.jsx)(C,{id:t,table:e}):null})]},e.id)}))})}),q=function(e){var t=e.id,n=Object(a.useContext)(o),c=n.isLoad,r=n.isRequestSend;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{id:t}),c?Object(b.jsx)(k,{id:t}):r&&Object(b.jsx)(g,{})]})};n(21);var w=function(){var e=Object(a.useContext)(o).data;return Object(b.jsxs)("main",{className:"app",children:[e.tables.length?e.tables.map((function(e){return Object(b.jsx)(q,{id:e.id},e.id)})):null,Object(b.jsx)(v,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{children:Object(b.jsx)(w,{})})}),document.getElementById("root")),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.2fa26098.chunk.js.map