(this["webpackJsonpreactjs-state"]=this["webpackJsonpreactjs-state"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"firstName":"\u0411\u0430\u0440\u043d\u0435\u0439","lastName":"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439","phone":"+380956319521","gender":"male"},{"firstName":"\u0420\u043e\u0431\u0456\u043d","lastName":"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430","phone":"+380931460123","gender":"female"},{"firstName":"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439","lastName":"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441","phone":"+380666666666"},{"firstName":"\u041b\u0456\u043b\u0456\u044f","lastName":"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430","phone":"+380504691254","gender":"female"},{"firstName":"\u041c\u0430\u0440\u0448\u0435\u043d","lastName":"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d","phone":"+380739432123","gender":"male"},{"firstName":"\u0422\u0435\u043e\u0434\u043e\u0440","lastName":"\u041c\u043e\u0442\u0441\u0431\u0435\u0441","phone":"+380956319521","gender":"male"}]')},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(3),c=a.n(r),i=(a(10),a(5)),o=(a(11),a(12),a(0));function l(e){var t=e.firstName,a=e.lastName,n=e.phone,s=e.gender;return Object(o.jsxs)("div",{className:"contact",children:[Object(o.jsxs)("h3",{children:[t," ",a]}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{children:function(e){switch(e){case"male":return"\u2642";case"female":return"\u2640";default:return""}}(s)})]})}var m=a(4);var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("input",{className:"search-input",name:"search",type:"search",placeholder:"Search...",onChange:function(e){s(e.target.value)}}),m.filter((function(e){return""===a||e.lastName.toLowerCase().includes(a.toLowerCase())||e.firstName.toLowerCase().includes(a.toLowerCase())||e.phone.includes(a)?e:void 0})).map((function(e){return Object(o.jsx)(l,{firstName:e.firstName,lastName:e.lastName,phone:e.phone,gender:e.gender},e.lastName)}))]})};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.b0a06448.chunk.js.map