(this.webpackJsonpfra=this.webpackJsonpfra||[]).push([[8],{382:function(e,a,t){},390:function(e,a,t){"use strict";t.r(a);var n=t(40),s=t(41),i=t(43),r=t(42),c=t(10),l=(t(382),t(7)),o=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).onEmailChange=function(e){s.setState({emailInput:e.target.value})},s.onPasswordChange=function(e){s.setState({pswInput:e.target.value})},s.onSubmitSignIn=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.state.emailInput,password:s.state.pswInput})};fetch("https://face-recognition-app-backend.herokuapp.com/signin",e).then((function(e){return e.json()})).then((function(e){e.id&&(s.props.loadUser(e),s.props.onRouteChange("home"))}))},s.state={emailInput:"",pswInput:""},s}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"w-30 mw5 mw7-ns center",children:[" ",Object(l.jsxs)("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-2 center",children:[Object(l.jsx)("main",{className:"pa4 black-80",children:Object(l.jsxs)("div",{children:[" ",Object(l.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[" ",Object(l.jsx)("legend",{className:"f2 fw6 ph0 mh0 center",children:"Sign In"})," ",Object(l.jsxs)("div",{className:"mt3",children:[" ",Object(l.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"})," ",Object(l.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(l.jsxs)("div",{className:"mv3",children:[Object(l.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]})," ",Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})]}),Object(l.jsx)("div",{className:"lh-copy mt3",children:Object(l.jsx)("p",{className:"f6 link dim black db pointer",onClick:function(){return e.props.onRouteChange("register")},children:"Register"})})]})})," "]})]})}}]),t}(c.Component);a.default=o}}]);
//# sourceMappingURL=8.675c5c37.chunk.js.map