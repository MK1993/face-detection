(this.webpackJsonpfra=this.webpackJsonpfra||[]).push([[0],{330:function(e,n,t){},331:function(e,n,t){"use strict";t.r(n);var o=t(9),i=t.n(o),a=t(45),r=t.n(a),s=t(40),c=t(41),u=t(42),l=t(44),h=t(43),d=(t(80),t(74)),f=t.n(d),g=t(7),p=i.a.lazy((function(){return t.e(11).then(t.bind(null,389))})),b=i.a.lazy((function(){return t.e(6).then(t.bind(null,400))})),m=i.a.lazy((function(){return t.e(5).then(t.bind(null,390))})),j=i.a.lazy((function(){return t.e(13).then(t.bind(null,391))})),v=i.a.lazy((function(){return t.e(4).then(t.bind(null,392))})),w=i.a.lazy((function(){return t.e(10).then(t.bind(null,393))})),O=i.a.lazy((function(){return t.e(9).then(t.bind(null,394))})),S=i.a.lazy((function(){return t.e(7).then(t.bind(null,395))})),y=i.a.lazy((function(){return t.e(8).then(t.bind(null,396))})),k={input:"",imageUrl:"",boxes:[],route:"signin",isProfileOpen:!1,isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:"",age:0,pet:""}},x=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).calculateFaceLocations=function(e){if(e){var n=document.getElementById("inputimage"),t=Number(n.width),o=Number(n.height);return e.outputs[0].data.regions.map((function(e){var n=e.region_info.bounding_box;return{leftCol:n.left_col*t,topRow:n.top_row*o,rightCol:t-n.right_col*t,bottomRow:o-n.bottom_row*o}}))}},e.displayFaceBoxes=function(n){n&&e.setState({boxes:n})},e.loadUser=function(n){e.setState({user:{id:n.id,name:n.name,email:n.email,entries:n.entries,joined:n.joined}})},e.onSubmit=function(){e.setState({imageUrl:e.state.input});var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({input:e.state.input})};fetch("https://face-recognition-app-backend.herokuapp.com/imageurl",n).then((function(e){return e.json()})).then((function(n){if(n){var t={method:"PUT",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({id:e.state.user.id})};fetch("https://face-recognition-app-backend.herokuapp.com/image",t).then((function(e){return e.json()})).then((function(n){n&&e.setState(Object.assign(e.state.user,{entries:n}))})).catch(console.log)}e.displayFaceBoxes(e.calculateFaceLocations(n))})).catch((function(e){return console.log(e)}))},e.onInputChange=function(n){return e.setState({input:n.target.value})},e.onRouteChange=function(n){if("signout"===n)return e.setState(k);"home"===n&&e.setState({isSignedIn:!0}),e.setState({route:n})},e.toggleModal=function(){e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{isProfileOpen:!e.isProfileOpen})}))},e.state=k,e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=window.sessionStorage.getItem("token");n&&fetch("https://face-recognition-app-backend.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json",Authorization:n}}).then((function(e){return e.json()})).then((function(t){t&&t.id&&fetch("https://face-recognition-app-backend.herokuapp.com/profile/".concat(t.id),{method:"GET",headers:{"Content-Type":"application/json",Authorization:n}}).then((function(e){return e.json()})).then((function(n){n&&n.email&&(e.loadUser(n),e.onRouteChange("home"))}))})).catch(console.log)}},{key:"render",value:function(){var e=this.state,n=e.isSignedIn,t=e.route,i=e.boxes,a=e.imageUrl,r=e.isProfileOpen,s=e.user;return Object(g.jsxs)("div",{className:"App",children:[" ",Object(g.jsx)(f.a,{className:"particles",params:{particles:{number:{value:150},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}})," ",Object(g.jsxs)(o.Suspense,{fallback:Object(g.jsx)("div",{children:"Chargement..."}),children:[" ",Object(g.jsx)(p,{isSignedIn:n,onRouteChange:this.onRouteChange,toggleModal:this.toggleModal})," ",r&&Object(g.jsx)(S,{children:Object(g.jsx)(y,{isProfileOpen:r,toggleModal:this.toggleModal,loadUser:this.loadUser,user:s})}),"home"===t?Object(g.jsxs)("div",{children:[" ",Object(g.jsx)(b,{})," ",Object(g.jsx)(j,{name:this.state.user.name,entries:this.state.user.entries})," ",Object(g.jsx)(m,{onInputChange:this.onInputChange,onSubmit:this.onSubmit})," ",Object(g.jsx)(v,{boxes:i,imageUrl:a})," "]}):"signin"===t?Object(g.jsx)(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(g.jsx)(O,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})]})}}]),t}(o.Component),C=function(e){e&&e instanceof Function&&t.e(14).then(t.bind(null,397)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),a(e),r(e)}))},U=(t(328),t(329),t(330),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function z(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(g.jsxs)(i.a.StrictMode,{children:[" ",Object(g.jsx)(x,{})," "]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/face-detection",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/face-detection","/service-worker.js");U?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):z(n,e)}))}}(),C()},80:function(e,n,t){}},[[331,1,2]]]);
//# sourceMappingURL=main.04829c74.chunk.js.map