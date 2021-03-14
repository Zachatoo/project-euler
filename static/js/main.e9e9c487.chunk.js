(this["webpackJsonpproject-euler"]=this["webpackJsonpproject-euler"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){e.exports={date:"Header_date__1_KTb"}},27:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),a=c.n(s),l=(c(14),c(17)),i=c(5),o=c(13),j=(c(27),c(3)),d=c(0),b=Object(n.createContext)(),u=function(e){var t=e.children,c=Object(n.useState)(),r=Object(j.a)(c,2),s=r[0],a=r[1];return Object(d.jsx)(b.Provider,{value:[s,a],children:t})},m=function(e){var t=e.children;return Object(d.jsx)("div",{className:"bg-gray-50 min-h-screen min-w-screen overflow-hidden",children:Object(d.jsx)("main",{children:t})})},x=c(18),h=c(32),f=function(e){var t=e.code,c=Object(n.useState)(!1),r=Object(j.a)(c,2),s=r[0],a=r[1],l=Object(n.useState)(!1),i=Object(j.a)(l,2),o=i[0],b=i[1],u=Object(n.useState)(),m=Object(j.a)(u,2),x=m[0],f=m[1],p=function(){f(null),b(!1)};return Object(n.useEffect)(p,[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"flex mb-1 ".concat(o?"justify-between":"justify-end"),children:[o&&Object(d.jsx)("div",{className:"flex bg-gray-200 w-full rounded-md px-2 mr-1",children:Object(d.jsx)("span",{className:"my-auto",children:x?"Success! Result Below:":"Failed! Check your code and try again."})}),Object(d.jsx)(d.Fragment,{children:x?Object(d.jsx)(h.a,{variant:"secondary",onClick:p,children:"Clear"}):Object(d.jsxs)(h.a,{variant:"primary",onClick:function(){var e;a(!0),b(!1);var c=null===(e=t.call())||void 0===e?void 0:e.toString();f(c),b(!0),a(!1)},children:["Run ",s&&Object(d.jsx)(w,{})]})})]}),o&&x&&Object(d.jsx)("div",{className:"flex bg-gray-300 w-full rounded-md px-2",children:x})]})},p=function(e){var t=e.children;return Object(d.jsx)("div",{className:"bg-gray-300 rounded-lg mb-1",children:Object(d.jsx)("code",{className:"flex flex-wrap whitespace-pre-wrap text-black px-3 py-2",children:t})})},O=c(6),g=c(16),v=c.n(g),y=function(e){var t=e.toggleSidebar,c=e.problemCount;return Object(d.jsxs)("div",{className:"fixed w-full top-0 pt-2 pb-1 text-gray-700 bg-blue-300",children:[Object(d.jsx)(h.a,{className:"fixed ml-1 p-1",variant:"link",onClick:t,children:Object(d.jsx)(O.a,{icon:"bars",className:"text-lg"})}),Object(d.jsx)("h2",{className:"text-center text-2xl font-bold leading-8 xs:text-3xl",children:"Project Euler"}),Object(d.jsx)("div",{className:"mx-4",children:Object(d.jsxs)("div",{className:"flex flex-wrap max-w-3xl m-auto mt-1 flex justify-between text-sm text-center xs:mt-0",children:[Object(d.jsxs)("div",{className:"mt-2 flex items-center",children:[Object(d.jsx)(O.a,{icon:"address-card"}),Object(d.jsx)("span",{className:"text-gray-600 pl-2",children:"Zachary Young"})]}),Object(d.jsxs)("div",{className:"mt-2 flex items-center",children:[Object(d.jsx)(O.a,{icon:"check"}),Object(d.jsxs)("span",{className:"text-gray-600 pl-2",children:[c.completedProblems," out of ",c.totalProblems]})]}),Object(d.jsxs)("div",{className:"".concat(v.a.date," mt-2 flex items-center"),children:[Object(d.jsx)(O.a,{icon:"calendar-alt"}),Object(d.jsx)("span",{className:"text-gray-600 pl-2",children:"Started on March 7, 2021"})]})]})})]})},w=function(e){var t=e.size;return Object(d.jsx)(O.a,{icon:"circle-notch",size:t,spin:!0})},N=function(e){var t=e.setOverlayVisible;return Object(d.jsx)("div",{className:"fixed w-screen h-screen inset-0 bg-gray-600 bg-opacity-70 z-10",onClick:function(){return t(!1)}})},k=[{key:1,title:"Multiples of 3 and 5",prompt:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.",Object(d.jsx)("br",{}),"The sum of these multiples is 23."]}),Object(d.jsx)("p",{children:"Find the sum of all the multiples of 3 or 5 below 1000."})]}),code:function(){for(var e=[],t=1;t<1e3;++t)t%3!==0&&t%5!==0||e.push(t);return e.join(", ")},codeStringified:"const MAX_NUM = 1000;\nlet result = [];\nfor (let i = 1; i < MAX_NUM; ++i) {\n  if (i % 3 === 0 || i % 5 === 0)\n    result.push(i);\n}\nreturn result.join(', ');",completed:1},{key:2,title:"Even Fibonacci numbers",prompt:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:"}),Object(d.jsx)("p",{className:"text-center",children:"1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..."}),Object(d.jsx)("p",{children:"By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."})]}),code:function(){return null},completed:0},{key:3,title:"Largest prime factor",prompt:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"The prime factors of 13195 are 5, 7, 13 and 29."}),Object(d.jsx)("p",{children:"What is the largest prime factor of the number 600851475143 ?"})]}),code:function(){return null},completed:0}],S=k,F=function(e){var t=e.open,c=e.select,n=e.toggle;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform border-r-2 bg-gray-100 pt-2\n          ".concat(t?"ease-out translate-x-0":"ease-in -translate-x-full"),children:[Object(d.jsx)("div",{className:"cursor-pointer py-2 pl-4 hover:bg-gray-200",onClick:function(){return c()},children:Object(d.jsx)("span",{children:"Project Description"})}),null===S||void 0===S?void 0:S.map((function(e){return Object(d.jsx)("div",{className:"cursor-pointer py-2 pl-2 hover:bg-gray-200",onClick:function(){return c(e)},children:Object(d.jsxs)("span",{children:[e.key,". ",e.title]})},e.key)}))]}),t&&Object(d.jsx)(N,{setOverlayVisible:n})]})},P={completedProblems:0,totalProblems:100},C=function(e){var t,c=Object(n.useState)(P),r=Object(j.a)(c,2),s=r[0],a=r[1],l=Object(n.useState)(k[localStorage.getItem("currentProblem")-1||0]),i=Object(j.a)(l,2),o=i[0],b=i[1],u=Object(n.useState)(!1),m=Object(j.a)(u,2),h=m[0],O=m[1];Object(n.useEffect)((function(){var e=Object(x.a)({},s),t=0;k.forEach((function(e){e.completed&&t++})),e.completedProblems=t,a(e)}),[k]),Object(n.useEffect)((function(){g(!1),o?localStorage.setItem("currentProblem",o.key):localStorage.removeItem("currentProblem")}),[o]);var g=function(e){O(null!==e&&void 0!==e?e:!h)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(F,{open:h,select:function(e){b(e),g(!1)},toggle:g}),Object(d.jsx)(y,{toggleSidebar:g,problemCount:s}),Object(d.jsx)("div",{className:"max-w-4xl mt-20 mx-auto p-4",children:o?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"text-center text-2xl pb-2",children:[Object(d.jsxs)("span",{children:["Problem ",o.key,": "]}),Object(d.jsx)("span",{children:o.title})]}),o.prompt,!!o.code&&Object(d.jsxs)("div",{className:"max-w-3xl mx-auto mb-1",children:[Object(d.jsx)(p,{children:"".concat(o.codeStringified||(null===(t=o.code)||void 0===t?void 0:t.toString()))}),Object(d.jsx)(f,{code:o.code})]})]}):Object(d.jsx)("div",{children:"Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems."})})]})},E=Object.keys(o).filter((function(e){return"fas"!==e&&"prefix"!==e})).map((function(e){return o[e]}));i.b.add.apply(i.b,Object(l.a)(E));var M=function(){return Object(d.jsx)(u,{children:Object(d.jsx)(m,{children:Object(d.jsx)(C,{})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),I()}},[[31,1,2]]]);
//# sourceMappingURL=main.e9e9c487.chunk.js.map