(this["webpackJsonpproject-euler"]=this["webpackJsonpproject-euler"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){e.exports={date:"Header_date__1_KTb"}},31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(9),a=n.n(s),i=(n(16),n(20)),l=n(6),o=n(15),j=(n(31),n(4)),d=n(0),u=Object(c.createContext)(),m=function(e){var t=e.children,n=Object(c.useState)(),r=Object(j.a)(n,2),s=r[0],a=r[1];return Object(d.jsx)(u.Provider,{value:[s,a],children:t})},b=function(e){var t=e.children;return Object(d.jsx)("div",{className:"bg-gray-50 min-h-screen min-w-screen overflow-hidden",children:Object(d.jsx)("main",{children:t})})},x=n(21),h=n(38),f=n(37),p=function(e){var t=e.code,n=Object(c.useState)(!1),r=Object(j.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(!1),l=Object(j.a)(i,2),o=l[0],u=l[1],m=Object(c.useState)(),b=Object(j.a)(m,2),x=b[0],p=b[1],O=Object(c.useState)(),g=Object(j.a)(O,2),v=g[0],y=g[1],N=function(){p(null),u(!1)};return Object(c.useEffect)(N,[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"flex mb-1 ".concat(o?"justify-between":"justify-end"),children:[o&&Object(d.jsx)("div",{className:"flex bg-gray-200 w-full rounded-md px-2",children:Object(d.jsx)("span",{className:"my-auto",children:x?"Success! Execution time: ".concat(v,"ms"):"Failed! Check your code and try again."})}),Object(d.jsxs)(d.Fragment,{children:[x&&Object(d.jsx)(h.a,{variant:"secondary",className:"ml-1",onClick:N,children:"Clear"}),Object(d.jsxs)(h.a,{variant:"primary",className:"ml-1",onClick:function(){a(!0),u(!1),new Promise((function(e,n){var c,r=performance.now(),s=null===(c=t.call())||void 0===c?void 0:c.toString(),a=performance.now();y(a-r),s?e(s):n()})).then((function(e){p(e)})).finally((function(){u(!0),a(!1)}))},children:["Run ",s&&Object(d.jsx)(w,{})]})]})]}),Object(d.jsx)(f.a,{in:o&&!!x,children:Object(d.jsx)("div",{className:"bg-gray-300 w-full rounded-md px-2",children:x})})]})},O=function(e){var t=e.children;return Object(d.jsx)("div",{className:"bg-gray-300 rounded-lg mb-1",children:Object(d.jsx)("code",{className:"flex flex-wrap whitespace-pre-wrap text-black px-3 py-2",children:t})})},g=n(8),v=n(19),y=n.n(v),N=function(e){var t=e.toggleSidebar,n=e.problemCount;return Object(d.jsxs)("div",{className:"fixed w-full top-0 pt-2 pb-1 text-gray-700 bg-blue-300",children:[Object(d.jsx)(h.a,{className:"fixed ml-1 p-1",variant:"link",onClick:t,children:Object(d.jsx)(g.a,{icon:"bars",className:"text-lg"})}),Object(d.jsx)("h2",{className:"text-center text-2xl font-bold leading-8 xs:text-3xl",children:"Project Euler"}),Object(d.jsx)("div",{className:"mx-4",children:Object(d.jsxs)("div",{className:"flex flex-wrap max-w-3xl m-auto mt-1 flex justify-between text-sm text-center xs:mt-0",children:[Object(d.jsxs)("div",{className:"mt-2 flex items-center",children:[Object(d.jsx)(g.a,{icon:"address-card"}),Object(d.jsx)("span",{className:"text-gray-600 pl-2",children:"Zachary Young"})]}),Object(d.jsxs)("div",{className:"mt-2 flex items-center",children:[Object(d.jsx)(g.a,{icon:"check"}),Object(d.jsxs)("span",{className:"text-gray-600 pl-2",children:[n.completedProblems," out of ",n.totalProblems]})]}),Object(d.jsxs)("div",{className:"".concat(y.a.date," mt-2 flex items-center"),children:[Object(d.jsx)(g.a,{icon:"calendar-alt"}),Object(d.jsx)("span",{className:"text-gray-600 pl-2",children:"Started on March 7, 2021"})]})]})})]})},w=function(e){var t=e.size;return Object(d.jsx)(g.a,{icon:"circle-notch",size:t,spin:!0})},S=function(e){var t=e.setOverlayVisible;return Object(d.jsx)("div",{className:"fixed w-screen h-screen inset-0 bg-gray-600 bg-opacity-70 z-10",onClick:function(){return t(!1)}})},k=[{key:1,title:"Multiples of 3 and 5",prompt:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.",Object(d.jsx)("br",{}),"The sum of these multiples is 23."]}),Object(d.jsx)("p",{children:"Find the sum of all the multiples of 3 or 5 below 1000."})]}),code:function(){for(var e=[],t=1;t<1e3;++t)t%3!==0&&t%5!==0||e.push(t);return e.join(", ")},codeStringified:"const MAX_NUM = 1000;\nlet result = [];\nfor (let i = 1; i < MAX_NUM; ++i) {\n  if (i % 3 === 0 || i % 5 === 0)\n    result.push(i);\n}\nreturn result.join(', ');",completed:!0},{key:2,title:"Even Fibonacci numbers",prompt:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:"}),Object(d.jsx)("p",{className:"text-center",children:"1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..."}),Object(d.jsx)("p",{children:"By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."})]}),code:function(){for(var e=1,t=1,n=0;t<=4e6;)t%2===0&&(n+=t),t+=e=t-e;return n},codeStringified:"const MAX_NUM = 4000000;\nlet prevNum = 1;\nlet nextNum = 1;\nlet sum = 0;\nwhile (nextNum <= MAX_NUM) {\n  if (nextNum % 2 === 0)\n    sum += nextNum;\n  prevNum = nextNum - prevNum;\n  nextNum += prevNum;\n}\nreturn sum;",completed:!0},{key:3,title:"Largest prime factor",prompt:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"The prime factors of 13195 are 5, 7, 13 and 29."}),Object(d.jsx)("p",{children:"What is the largest prime factor of the number 600851475143?"})]}),code:function(){for(var e=600851475143,t=Math.floor(Math.sqrt(e));t>=3;--t)if(e%t===0)return t},completed:!1}],F=function(e){var t=e.open,n=e.select,c=e.toggle;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform border-r-2 bg-gray-100\n          ".concat(t?"ease-out translate-x-0":"ease-in -translate-x-full"),children:[Object(d.jsx)("div",{className:"cursor-pointer py-2 pl-4 hover:bg-gray-200",onClick:function(){return n()},children:Object(d.jsx)("span",{children:"Project Description"})}),null===k||void 0===k?void 0:k.map((function(e){return Object(d.jsx)("div",{className:"cursor-pointer py-2 pl-2 hover:bg-gray-200",onClick:function(){return n(e)},children:Object(d.jsxs)("span",{children:[e.key,". ",e.title]})},e.key)}))]}),t&&Object(d.jsx)(S,{setOverlayVisible:c})]})},P={completedProblems:0,totalProblems:100},C=function(e){var t,n=Object(c.useState)(P),r=Object(j.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(k[localStorage.getItem("currentProblem")-1||0]),l=Object(j.a)(i,2),o=l[0],u=l[1],m=Object(c.useState)(!1),b=Object(j.a)(m,2),h=b[0],f=b[1];Object(c.useEffect)((function(){var e=Object(x.a)({},s),t=0;k.forEach((function(e){e.completed&&t++})),e.completedProblems=t,a(e)}),[k]),Object(c.useEffect)((function(){g(!1),o?localStorage.setItem("currentProblem",o.key):localStorage.removeItem("currentProblem")}),[o]);var g=function(e){f(null!==e&&void 0!==e?e:!h)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(F,{open:h,select:function(e){u(e),g(!1)},toggle:g}),Object(d.jsx)(N,{toggleSidebar:g,problemCount:s}),Object(d.jsx)("div",{className:"max-w-4xl mt-20 mx-auto p-4",children:o?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"text-center text-2xl pb-2",children:[Object(d.jsxs)("span",{children:["Problem ",o.key,": "]}),Object(d.jsx)("span",{children:o.title})]}),o.prompt,!!o.code&&Object(d.jsxs)("div",{className:"max-w-3xl mx-auto mb-1",children:[Object(d.jsx)(O,{children:"".concat(o.codeStringified||(null===(t=o.code)||void 0===t?void 0:t.toString()))}),Object(d.jsx)(p,{code:o.code})]})]}):Object(d.jsx)("div",{children:"Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems."})})]})},M=Object.keys(o).filter((function(e){return"fas"!==e&&"prefix"!==e})).map((function(e){return o[e]}));l.b.add.apply(l.b,Object(i.a)(M));var E=function(){return Object(d.jsx)(m,{children:Object(d.jsx)(b,{children:Object(d.jsx)(C,{})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.a2020b73.chunk.js.map