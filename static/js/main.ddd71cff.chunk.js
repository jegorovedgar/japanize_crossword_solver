(this.webpackJsonpjapanize_crossword_solver=this.webpackJsonpjapanize_crossword_solver||[]).push([[0],[,,,,,,,,,,,,,,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},,function(n,t,e){"use strict";e.r(t);var r,c=e(0),i=e(1),a=e.n(i),u=e(10),o=e.n(u),l=e(4),s=e(2),j=e(8),f=e(11),d=e(7),b=e.n(d);e(17);!function(n){n[n.Filled=0]="Filled",n[n.Empty=1]="Empty",n[n.Null=2]="Null"}(r||(r={}));var m=function(n){var t=n.state,e=void 0===t?r.Null:t,i=Object(f.a)(n,["state"]);return Object(c.jsx)("button",Object(s.a)(Object(s.a)({},i),{},{className:b()({"matrix-cell":!0,"matrix-cell-filled":e===r.Filled,"matrix-cell-empty":e===r.Empty})}))},O=(e(18),function(n){var t=n.matrix,e=n.onChange,i=void 0===e?function(){}:e,a=function(n,e){return function(){var c=t.map((function(n){return n.slice()}));c[n][e]=++c[n][e]>r.Null?r.Filled:c[n][e],i(c)}};return Object(c.jsx)("div",{className:"playground",children:t.map((function(n,t){return Object(c.jsx)("div",{className:"playground-row",children:n.map((function(n,e){return Object(c.jsx)(m,{state:n,onClick:a(t,e)},"playground"+e)}))},"playground"+t)}))})}),h=e(3),x=(e(19),function(n){return Object(c.jsx)("button",Object(s.a)(Object(s.a)({className:"add-cell"},n),{},{children:Object(c.jsx)("span",{})}))}),v=(e(20),function(n){return Object(c.jsx)("input",Object(s.a)({className:"definition-cell",type:"text"},n))}),p=(e(21),function(n){var t=n.definition,e=n.horizontal,r=void 0!==e&&e,a=n.onChange,u=void 0===a?function(){}:a,o=function(n,e){return function(r){var c=Object(h.a)(t);c[n][e]=Math.max(0,parseInt(r.target.value)||0),u(c)}},l=function(n,e){return function(r){if(0===Math.max(0,parseInt(r.target.value)||0)){var c=Object(h.a)(t);c[n].splice(e,1),u(c)}}},s=function(n,e){return function(){var r=Object(h.a)(t);r[n].splice(e,0,1),u(r)}};return Object(c.jsx)("div",{className:b()({"game-definition":!0,"game-definition-horizontal":r}),children:t.map((function(n,t){return Object(c.jsxs)("div",{className:"game-definition-row",children:[Object(c.jsx)(x,{onClick:s(t,0)}),n.map((function(n,e){return Object(c.jsxs)(i.Fragment,{children:[Object(c.jsx)(v,{value:n,onChange:o(t,e),onBlur:l(t,e)}),Object(c.jsx)(x,{onClick:s(t,e+1)})]},"cell"+e)}))]},"row"+t)}))})}),g=(e(22),function(n){var t=n.definition,e=n.matrix,r=n.onDefChange,i=void 0===r?function(){}:r,a=n.onPlaygroundChange,u=void 0===a?function(){}:a,o=function(n){return function(e){return i(Object(s.a)(Object(s.a)({},t),{},Object(l.a)({},n,e)))}};return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsxs)("div",{className:"game-row",children:[Object(c.jsx)("div",{className:"game-col"}),Object(c.jsx)("div",{className:"game-col",children:Object(c.jsx)(p,{definition:t.x,onChange:o("x"),horizontal:!0})})]}),Object(c.jsxs)("div",{className:"game-row",children:[Object(c.jsx)("div",{className:"game-col",children:Object(c.jsx)(p,{definition:t.y,onChange:o("y")})}),Object(c.jsx)("div",{className:"game-col",children:Object(c.jsx)(O,{matrix:e,onChange:u})})]})]})}),y=(e(23),function n(t,e){return e<=1?[[t]]:new Array(t+1).fill(null).map((function(n,e,r){return t-e})).reduce((function(r,c){return r.concat(n(t-c,e-1).map((function(n){return[c].concat(n)})))}),[])}),w=function(n,t){var e=function(n){return n.map((function(t,e){return new Array(t).fill(null).map((function(){return r.Filled})).concat(e<n.length-1?[r.Empty]:[])}))}(n),c=e.reduce((function(n,t){return n+t.length}),0);return y(t-c,e.length+1).map((function(n){return n.reduce((function(n,t,c){return n.concat(new Array(t).fill(null).map((function(){return r.Empty})).concat(e[c]||[]))}),[])}))},N=function(n,t){return function(n,t){return t.map((function(t,e){return t===r.Null&&n.every((function(t){return t[e]===n[0][e]}))?n[0][e]:t}))}(function(n,t){return n.filter((function(n){return n.every((function(n,e){return t[e]===r.Null||t[e]===n}))}))}(w(t,n.length),n),n)},C=function(n){return{x:new Array(n.width).fill(void 0).map((function(){return[]})),y:new Array(n.height).fill(void 0).map((function(){return[]}))}},A=function(n){return new Array(n.height).fill(void 0).map((function(){return new Array(n.width).fill(void 0).map((function(){return r.Null}))}))},E=function(){var n=Object(i.useState)({width:10,height:10}),t=Object(j.a)(n,2),e=t[0],r=t[1],a=Object(i.useState)(C(e)),u=Object(j.a)(a,2),o=u[0],f=u[1],d=Object(i.useState)(A(e)),b=Object(j.a)(d,2),m=b[0],O=b[1];Object(i.useEffect)((function(){f(C(e)),O(A(e))}),[e]);var x=function(n){return function(t){return r(Object(s.a)(Object(s.a)({},e),{},Object(l.a)({},n,Math.max(1,parseInt(t.target.value)||1))))}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("label",{children:["Width",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"number",value:e.width,onChange:x("width")})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Height",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"number",value:e.height,onChange:x("height")})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return O(function(n,t){var e=t.x.reduce((function(n,t,e){return function(n,t,e){return n.map((function(n,r){var c=n.slice();return c[e]=t[r],c}))}(n,N(function(n,t){return n.map((function(n){return n[t]}))}(n,e),t),e)}),Object(h.a)(n));return t.y.reduce((function(n,t,e){return function(n,t,e){var r=n.slice();return r[e]=t.slice(),r}(n,N(function(n,t){return n[t].slice()}(n,e),t),e)}),Object(h.a)(e))}(m,o))},children:"Solve"}),Object(c.jsx)("br",{}),Object(c.jsx)(g,{definition:o,matrix:m,onDefChange:f,onPlaygroundChange:O})]})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.ddd71cff.chunk.js.map