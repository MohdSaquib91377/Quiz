(this.webpackJsonpreact_quiz=this.webpackJsonpreact_quiz||[]).push([[0],{43:function(e,t,o){},44:function(e,t,o){},45:function(e,t,o){},46:function(e,t,o){},61:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),i=o(13),r=o.n(i),a=(o(43),o(44),o(26)),s=o(12),l=o(78),p=(o(45),o(80)),u=o(81),h=o(79),j=o(77),d=(o(46),o(30)),b=o.n(d),f=o(3);var m=function(e){var t=e.score,o=Object(n.useRef)(""),i=Object(n.useRef)(""),r=c.a.useState(!1),a=Object(s.a)(r,2),d=a[0],m=a[1];return Object(f.jsxs)("div",{className:"User",children:[Object(f.jsxs)(p.a,{children:[Object(f.jsx)(u.a,{htmlFor:"name",children:"Name"}),Object(f.jsx)(h.a,{id:"my-input","aria-describedby":"my-helper-text",inputRef:o})]}),Object(f.jsxs)(p.a,{children:[Object(f.jsx)(u.a,{htmlFor:"email",children:"Email"}),Object(f.jsx)(h.a,{id:"my-input","aria-describedby":"my-helper-text",inputRef:i}),Object(f.jsx)(j.a,{id:"my-helper-text",children:"We'll never share your email."})]}),Object(f.jsx)("div",{className:"submit__button",children:Object(f.jsx)(l.a,{variant:"contained",color:"primary",className:"submit__button",onClick:function(){m(!0)},children:"Submit"})}),Object(f.jsx)(b.a,{isOpen:d,onAfterOpen:function(){},onRequestClose:function(){m(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},contentLabel:"Example Modal",children:Object(f.jsx)("div",{className:"modal",children:Object(f.jsxs)("h1",{children:["Hello,",Object(f.jsx)("span",{style:{color:"lightblue"},children:o.current.value}),"  your score is,  ",t]})})})]})};function O(){var e,t=Object(n.useState)(0),o=Object(s.a)(t,2),c=o[0],i=o[1],r=[{id:1,title:" How can you access the state of a component from inside of a member function?",op1:"this.values",op2:" this.prototype.stateValue",op3:"this.state",op4:"All of then",correct:"this.values"},{id:2,title:"Props are __________ into other components",op1:"Injected",op2:"All of these",op3:"Methods",op4:"All of then",correct:"Methods"},{id:3,title:"Which of the following API is a MUST for every ReactJS component?",op1:"getInitialState",op2:"renderComponent",op3:"None",op4:"All of then",correct:"renderComponent"},{id:4,title:"At the highest level, React components have lifecycle events that fall into",op1:"Initialization",op2:"State/Property Updates",op3:"Destruction",op4:"All of these",correct:"All of these"},{id:5,title:"What is a react.js in MVC?",op1:" Controller",op2:"Model",op3:"Router",op4:"All of then",correct:"Controller"},{id:6,title:"React is mainly used for building ___.",op1:" Database",op2:"User interface",op3:"Design Platform",op4:"All of then",correct:"User interface"},{id:7,title:"what is redux",op1:"State management Tool",op2:"language",op3:"Design pattern",op4:"All of then",correct:"State management Tool"},{id:8,title:"what is latest version of React.js",op1:"17.0.0",op2:"16.14.0",op3:"16.13.0",op4:"17.0.1",correct:"17.0.1"},(e={id:9,title:"how can we change state of varibale in functional component",op1:"useEffect",op2:"useState",op3:"constructor"},Object(a.a)(e,"op3","Distructor"),Object(a.a)(e,"correct","useState"),e),{id:10,title:"Who made Reactjs liabrary",op1:"Google",op2:"Facebook",op3:"Microsoft",op4:"All of then",correct:"Facebook"}],p=Object(n.useState)(""),u=Object(s.a)(p,2),h=u[0],j=u[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),O=b[0],x=b[1],g=Object(n.useState)(0),v=Object(s.a)(g,2),y=v[0],_=v[1],C=Object(n.useState)(1),S=Object(s.a)(C,2),k=S[0],A=S[1],R=function(e){A(k+1),k<=3?r[c].correct==e?(j(e),x("green"),_(y+1)):(j(e),x("red"),_(y-.25)):alert("You have maximum 3 chance to give answer")};return r[c]?Object(f.jsxs)("div",{className:"quizs",children:[Object(f.jsx)("h1",{children:r[c].title}),Object(f.jsxs)("div",{className:"options",children:[Object(f.jsx)("h4",{onClick:function(){return R(r[c].op1)},style:{backgroundColor:h===r[c].op1?O:""},children:r[c].op1}),Object(f.jsx)("h4",{onClick:function(){return R(r[c].op2)},style:{backgroundColor:h===r[c].op2?O:""},children:r[c].op2}),Object(f.jsx)("h4",{onClick:function(){return R(r[c].op3)},style:{backgroundColor:h===r[c].op3?O:""},children:r[c].op3}),Object(f.jsx)("h4",{onClick:function(){return R(r[c].op4)},style:{backgroundColor:h===r[c].op4?O:""},children:r[c].op4})]}),Object(f.jsx)(l.a,{variant:"contained",color:"primary",className:"next__button",onClick:function(){i(c+1),A(1)},children:"Next"})]}):Object(f.jsx)("div",{children:Object(f.jsx)(m,{score:y})})}var x=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(O,{})})},g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,82)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;o(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),g()}},[[61,1,2]]]);
//# sourceMappingURL=main.822bfe4c.chunk.js.map