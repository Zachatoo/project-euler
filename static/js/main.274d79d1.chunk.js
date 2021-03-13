(this["webpackJsonpproject-euler"]=this["webpackJsonpproject-euler"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){e.exports={date:"Header_date__1_KTb"}},27:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(17),a=c.n(s),i=(c(16),c(19)),l=c(5),o=c(14),d=(c(27),c(7)),j=c(3),b=c(0),u=[{key:1,title:"Multiples of 3 and 5",prompt:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.",Object(b.jsx)("br",{}),"The sum of these multiples is 23."]}),Object(b.jsx)("p",{children:"Find the sum of all the multiples of 3 or 5 below 1000."})]}),code:function(){for(var e=[],t=1;t<1e3;++t)t%3!==0&&t%5!==0||e.push(t);return e.join(", ")},codeStringified:"const MAX_NUM = 1000;\nlet result = [];\nfor (let i = 1; i < MAX_NUM; ++i) {\n  if (i % 3 === 0 || i % 5 === 0)\n    result.push(i);\n}\nreturn result.join(', ');",completed:1},{key:2,title:"Even Fibonacci numbers",prompt:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:"}),Object(b.jsx)("p",{className:"center",children:"1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..."}),Object(b.jsx)("p",{children:"By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."})]}),code:function(){return null},completed:0},{key:3,title:"Largest prime factor",prompt:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"The prime factors of 13195 are 5, 7, 13 and 29."}),Object(b.jsx)("p",{children:"What is the largest prime factor of the number 600851475143 ?"})]}),code:function(){return null},completed:0}],m={completedProblems:0,totalProblems:100,sidebarOpen:!1},x=Object(n.createContext)(),h=function(e){var t=e.children,c=Object(n.useState)(m),r=Object(j.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){var e=Object(d.a)({},s),t=0;u.forEach((function(e){e.completed&&t++})),e.completedProblems=t,a(e)}),[u]),Object(b.jsx)(x.Provider,{value:[s,a],children:t})},p=c(6),O=c(18),f=c.n(O),g=function(e){var t=Object(n.useContext)(x),c=Object(j.a)(t,2),r=c[0];c[1];return Object(b.jsxs)("div",{className:"fixed w-full top-0 pt-2 pb-1 text-gray-700 bg-blue-300",children:[Object(b.jsx)("h2",{className:"text-center text-2xl font-bold leading-8 xs:text-3xl",children:"Project Euler"}),Object(b.jsx)("div",{className:"mx-4",children:Object(b.jsxs)("div",{className:"flex flex-wrap max-w-3xl m-auto mt-1 flex justify-between text-sm text-center xs:mt-0",children:[Object(b.jsxs)("div",{className:"mt-2 flex items-center",children:[Object(b.jsx)(p.a,{icon:"address-card"}),Object(b.jsx)("span",{className:"text-gray-600 pl-2",children:"Zachary Young"})]}),Object(b.jsxs)("div",{className:"mt-2 flex items-center",children:[Object(b.jsx)(p.a,{icon:"check"}),Object(b.jsxs)("span",{className:"text-gray-600 pl-2",children:[r.completedProblems," out of ",r.totalProblems]})]}),Object(b.jsxs)("div",{className:"".concat(f.a.date," mt-2 flex items-center"),children:[Object(b.jsx)(p.a,{icon:"calendar-alt"}),Object(b.jsx)("span",{className:"text-gray-600 pl-2",children:"Started on March 7, 2021"})]})]})})]})},v=function(e){var t=e.children,c=Object(n.useContext)(x),r=Object(j.a)(c,2);r[0],r[1];return Object(b.jsxs)("div",{className:"bg-gray-50 min-h-screen min-w-screen overflow-hidden",children:[Object(b.jsx)(g,{}),Object(b.jsx)("main",{children:t})]})},w=c(32),y=function(e){var t=e.code,c=Object(n.useState)(!1),r=Object(j.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)(!1),l=Object(j.a)(i,2),o=l[0],d=l[1],u=Object(n.useState)(),m=Object(j.a)(u,2),x=m[0],h=m[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"flex mb-1 ".concat(o?"justify-between":"justify-end"),children:[o&&Object(b.jsx)("div",{className:"flex bg-gray-200 w-full rounded-md px-2 mr-1",children:Object(b.jsx)("span",{className:"my-auto",children:x?"Success! Result Below:":"Failed! Check your code and try again."})}),Object(b.jsx)(b.Fragment,{children:x?Object(b.jsx)(w.a,{variant:"secondary",onClick:function(){h(null),d(!1)},children:"Clear"}):Object(b.jsxs)(w.a,{variant:"primary",onClick:function(){var e;a(!0),d(!1);var c=null===(e=t.call())||void 0===e?void 0:e.toString();h(c),d(!0),a(!1)},children:["Run ",s&&Object(b.jsx)(F,{})]})})]}),o&&x&&Object(b.jsx)("div",{className:"flex bg-gray-300 w-full rounded-md px-2",children:x})]})},N=function(e){var t=e.children;return Object(b.jsx)("div",{className:"bg-gray-300 rounded-lg mb-1",children:Object(b.jsx)("code",{className:"flex flex-wrap whitespace-pre-wrap text-black px-3 py-2",children:t})})},F=function(e){var t=e.size;return Object(b.jsx)(p.a,{icon:"circle-notch",size:t,spin:!0})},k=function(e){var t,c=Object(n.useContext)(x),r=Object(j.a)(c,2),s=(r[0],r[1],Object(n.useState)(u[0])),a=Object(j.a)(s,2),i=a[0];a[1];return Object(b.jsx)("div",{className:"max-w-4xl mt-20 mx-auto p-4",children:i?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"text-center text-2xl pb-2",children:[Object(b.jsxs)("span",{children:["Problem ",i.key,": "]}),Object(b.jsx)("span",{children:i.title})]}),i.prompt,!!i.code&&Object(b.jsxs)("div",{className:"max-w-3xl mx-auto mb-1",children:[Object(b.jsx)(N,{children:"".concat(i.codeStringified||(null===(t=i.code)||void 0===t?void 0:t.toString()))}),Object(b.jsx)(y,{code:i.code})]})]}):Object(b.jsx)("div",{children:"Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems."})})},S=Object.keys(o).filter((function(e){return"fas"!==e&&"prefix"!==e})).map((function(e){return o[e]}));l.b.add.apply(l.b,Object(i.a)(S));var C=function(){return Object(b.jsx)(h,{children:Object(b.jsx)(v,{children:Object(b.jsx)(k,{})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),P()}},[[31,1,2]]]);
//# sourceMappingURL=main.274d79d1.chunk.js.map