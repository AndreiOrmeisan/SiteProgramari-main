(this.webpackJsonpheroku=this.webpackJsonpheroku||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),a=c.n(i),r=(c(9),c(2)),o=(c(10),c(11),c(12),c(0)),l=function(){return Object(o.jsx)("div",{className:"footer",children:"Footer"})},j=function(e){var t=e.setLoggedIn,c=e.setRegister,s=Object(n.useState)(""),i=Object(r.a)(s,2),a=i[0],l=i[1],j=Object(n.useState)(""),u=Object(r.a)(j,2),d=u[0],b=u[1];return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"subMain",children:[Object(o.jsx)("h1",{className:"title",children:"Andrei"}),Object(o.jsxs)("div",{className:"infoInput",children:[Object(o.jsxs)("div",{className:"email",children:[Object(o.jsx)("label",{className:"label",children:"Email"}),Object(o.jsx)("input",{type:"text",id:"email",onChange:function(e){return l(e.target.value)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"label",children:"Password"}),Object(o.jsx)("input",{type:"password",id:"password",onChange:function(e){return b(e.target.value)}})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"btnLogin",onClick:function(){fetch({method:"post",url:"https://trackout.herokuapp.com/api/user/login",data:{email:a,password:d}}).then((function(e){t(!0),console.log("true")})).catch((function(e){console.log(e),alert("Nume parola gresita")}))},children:"Log in"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"register",onClick:function(){c(!0)},children:"Register now"})})]})})},u=function(){return Object(o.jsx)("div",{className:"topBar",children:"TopBar"})},d=function(e){var t=e.setLoggedIn,c=e.setRegister;return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsx)(j,{setLoggedIn:t,setRegister:c}),Object(o.jsx)(l,{})]})};var b=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),a=Object(r.a)(i,2),l=a[0],j=a[1],u=Object(n.useState)(!1),b=Object(r.a)(u,2),h=b[0],O=b[1],g=Object(n.useState)(!1),x=Object(r.a)(g,2),p=(x[0],x[1]),f=Object(n.useState)(""),m=Object(r.a)(f,2),v=m[0],w=m[1];return console.log(v),v?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Te ai logat cu succes. Aici o sa vezi programarile etc etc"}),Object(o.jsx)("button",{onClick:function(){w(!1)},children:"Logout"})]}):c?Object(o.jsxs)("div",{className:"maineRegister",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{id:"label",children:"Email"}),Object(o.jsx)("input",{id:"emailRegister",type:"text",onChange:function(e){return j(e.target.value)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{id:"label",children:"Password"}),Object(o.jsx)("input",{id:"passwor",type:"password",onChange:function(e){return O(e.target.value)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{id:"label",children:"Confirm password"}),Object(o.jsx)("input",{id:"confPassword",type:"password",onChange:function(e){return p(e.target.value)}})]}),Object(o.jsx)("button",{className:"btnRegister",onClick:function(){fetch({method:"post",url:"https://trackout.herokuapp.com/api/user/create",data:{email:l,password:h}}).then((function(e){alert("Te ai inregistrat cu succes !"),s(!1)})).catch((function(e){alert(e)}))},children:"Submit"})]}):Object(o.jsx)(d,{setRegister:s,setLoggedIn:w})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.9d078c3b.chunk.js.map