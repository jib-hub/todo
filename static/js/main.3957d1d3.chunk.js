(this["webpackJsonptodo-app-axios"]=this["webpackJsonptodo-app-axios"]||[]).push([[0],{108:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(10),i=e.n(o),c=e(15),u=e(12),l=e(18),d=e(17),s=e(6),m=e(32),f=e(20),p=Object(f.a)(),h=e(64),b=e.n(h),g=e(7),v={id:"light",light:!0,backgroundColor:"#e2e2e2",backgroundColorGradientStart:"#ffdd00",backgroundColorGradientEnd:"#fbb034",textColor:"#fff",bg:"#fff",bgDarken:"lightgrey",primaryColor:"#2f2f2f",secondaryColor:"orange",darkColor:"darkorange",danger:"#ff6666",dangerDarken:"#ff2015"},k={id:"dark",dark:!0,backgroundColor:"#2f2f2f",backgroundColorGradientStart:"#0f2027",backgroundColorGradientMiddle:"#203a43",backgroundColorGradientEnd:"#2c5364",textColor:"#fff",bg:"#fff",bgDarken:"lightgrey",primaryColor:"#e2e2e2",secondaryColor:"yellow",darkColor:"#fff",danger:"#ff6666",dangerDarken:"#ff2015"};function x(){var n=Object(s.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: space-between;\n  background: none;\n  width: 2rem;\n  height: 0.875rem;\n  margin: 0;\n  border-radius: 15px;\n  border: 2px solid ",";\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  div {\n    width: 0.9rem;\n    height: 0.9rem;\n    border: none;\n    border-radius: 100%;\n    transition: all 0.3s linear;\n    &:first-child {\n      background: ",";\n      transform: ",";\n    }\n    &:nth-child(2) {\n      background: ",";\n      transform: ",";\n    }\n  }\n  &:hover {\n    border: 2px solid ",";\n  }\n  &:hover {\n    div {background: ",";}}\n"]);return x=function(){return n},n}var C=g.d.div(x(),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.light?"translateX(0)":"translateX(100px)"}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.light?"translateX(-100px)":"translateX(0)"}),(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.secondaryColor})),O={xs:"480px",sm:"768px",md:"992px",lg:"1200px"};function y(){var n=Object(s.a)(["\n\t\t@media (min-width: ",") {\n\t\t\t",";\n\t\t}\n\t"]);return y=function(){return n},n}var j=Object.keys(O).reduce((function(n,t){return n[t]=function(){return Object(g.c)(y(),O[t],g.c.apply(void 0,arguments))},n}),{});function E(){var n=Object(s.a)(["\n      width: 70%;\n    "]);return E=function(){return n},n}function w(){var n=Object(s.a)(["\n      max-width: 900px;\n    "]);return w=function(){return n},n}function S(){var n=Object(s.a)(["\n      text-align: center;\n    "]);return S=function(){return n},n}function M(){var n=Object(s.a)(["\n    "]);return M=function(){return n},n}function G(){var n=Object(s.a)(["\n  *, html {padding:0; margin:0;}\n  html, body {\n  height: 100%;\n  }\n  body {\n    transition: all 0.3s linear;\n    background: ",";\n    background: -moz-linear-gradient(top,  "," 0%, "," "," 100%);\n    background: -webkit-linear-gradient(top,  "," 0%, "," "," 100%);\n    background: linear-gradient(to bottom,  "," 0%, "," "," 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='","', endColorstr='","',GradientType=0 );\n    background-attachment: fixed;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: ",";\n  }\n  input {\n    color: "," !important;\n  }\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .content-body\xa0{\n    padding-top: 4em;\n  }\n\n  .boxed {\n    margin: 0 auto;\n    width: 80%;\n    ","\n    ","\n    ","\n    ","\n  }\n\n  .fullWidth {\n    width: 100%;\n  }\n\n"]);return G=function(){return n},n}var D=Object(g.b)(G(),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.backgroundColorGradientStart}),(function(n){return n.theme.backgroundColorGradientMiddle?" ".concat(n.theme.backgroundColorGradientMiddle," 50%,"):""}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.backgroundColorGradientStart}),(function(n){return n.theme.backgroundColorGradientMiddle?" ".concat(n.theme.backgroundColorGradientMiddle," 50%,"):""}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.backgroundColorGradientStart}),(function(n){return n.theme.backgroundColorGradientMiddle?" ".concat(n.theme.backgroundColorGradientMiddle," 50%,"):""}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.backgroundColorGradientStart}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}),j.xs(M()),j.sm(S()),j.md(w()),j.lg(E())),T=e(29),F=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){return Object(c.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(n){return a.a.createElement("div",{className:this.props.width},this.props.children)}}]),e}(a.a.Component),L=e(135);function B(){var n=Object(s.a)(["\n  background: "," !important;\n  color: "," !important;\n  border-color: "," !important;\n  padding: 4px 40px 2px 40px !important;\n  font-weight: 700 !important;\n  font-size: 1rem !important;\n  &:hover{\n    background: "," !important;\n  }\n"]);return B=function(){return n},n}var I=Object(g.d)(L.a).attrs({color:"primary"})(B(),(function(n){return n.theme.bg}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.bgDarken}));function A(){var n=Object(s.a)(["\n  width: 404px;\n  text-align: {(this.props.TextAlignCenter) ? 'center' : 'left'}\n  margin: 0 auto;\n"]);return A=function(){return n},n}var N=g.d.h1(A());function R(){var n=Object(s.a)(["\n  text-align: center;\n  margin: 30px auto;\n  font-size: 3rem;\n"]);return R=function(){return n},n}function W(){var n=Object(s.a)(["\n  border-top-left-radius: 4px !important;\n  border-bottom-left-radius: 4px !important;\n"]);return W=function(){return n},n}var z=Object(g.d)(I).attrs({color:"primary"})(W()),X=Object(g.d)(N)(R()),K=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){return Object(c.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{width:"boxed"},a.a.createElement(X,null,"ERROR 404")),a.a.createElement(F,{width:"boxed"},a.a.createElement(T.b,{to:{pathname:"/"}},a.a.createElement(z,null,"Back to Start"))))}}]),e}(a.a.Component),P=e(4),J=e(139);function U(){var n=Object(s.a)(["\n  margin-top: 1rem !important;\n  width: 90%;\n  max-width: 400px;\n"]);return U=function(){return n},n}var Y=Object(P.a)({root:{marginTop:"1rem !important",width:"90%",maxWidth:"400px","& label.Mui-focused":{color:"#fff"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}}})((function(n){return a.a.createElement(J.a,Object.assign({color:"secondary",variant:"outlined"},n))})),$=Object(g.d)(I)(U()),H=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).state={name:"",password:""},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{width:"boxed"},a.a.createElement(N,{TextAlignCenter:!0},"Login"),a.a.createElement(Y,{hintText:"Enter your Username",label:"Name",variant:"outlined",onChange:function(t){n.setState({name:t.target.value})}}),a.a.createElement("br",null),a.a.createElement(Y,{type:"password",hintText:"Enter your Password",label:"Password",variant:"outlined",onChange:function(t){n.setState({password:t.target.value})}}),a.a.createElement("br",null),a.a.createElement($,{label:"Submit",onClick:function(t){n.props.handleLoginSubmit(n.state.name,n.state.password)}},"Login")))}}]),e}(a.a.Component),_=e(33),q=e.n(_);function Q(){var n=Object(s.a)(["\n  width: 100%;\n  height: 20px;\n  margin-top: 40px;\n  border-top: "," 1px solid;\n"]);return Q=function(){return n},n}g.d.div(Q(),(function(n){return n.theme.darkColor}));var V=e(72),Z=e.n(V),nn=e(140),tn=e(19);function en(){var n=Object(s.a)(["\n  background: "," !important;\n  color: "," !important;\n  border-color: "," !important;\n  padding: 4px 40px 2px 40px !important;\n  font-weight: 700 !important;\n  font-size: 1rem !important;\n  height: 56px;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  &:hover{\n    background: "," !important;\n  }\n"]);return en=function(){return n},n}var rn,an,on=Object(g.d)(L.a).attrs({color:"primary"})(en(),(function(n){return n.theme.bg}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.backgroundColorGradientEnd}),(function(n){return n.theme.bgDarken})),cn=Object(P.a)({root:(rn={marginRight:"5px",width:"60%",maxWidth:"400px","& label.Mui-focused":{color:"#fff"}},Object(tn.a)(rn,"& fieldset",{borderRadius:"4px 0 0 4px"}),Object(tn.a)(rn,"& .MuiInput-underline:after",{borderBottomColor:"green"}),Object(tn.a)(rn,"& .MuiOutlinedInput-root",{"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}),rn)})((function(n){return a.a.createElement(J.a,Object.assign({color:"secondary",variant:"outlined"},n))})),un=Object(P.a)({root:(an={marginRight:"5px",width:"30%",maxWidth:"150px","& label.Mui-focused":{color:"#fff"}},Object(tn.a)(an,"& fieldset",{borderRadius:"0"}),Object(tn.a)(an,"& .MuiInput-underline:after",{borderBottomColor:"green"}),Object(tn.a)(an,"& .MuiOutlinedInput-root",{"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}),an)})((function(n){return a.a.createElement(J.a,Object.assign({color:"secondary",variant:"outlined"},n))})),ln=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).state={name:"",cat:"",user:n.props.user},n.handleChangeName=function(t){n.setState({name:t.target.value})},n.handleChangeCat=function(t){n.setState({cat:t.target.value})},n.handleSubmit=function(t){t.preventDefault();var e={name:n.state.name,cat:n.state.cat,user:n.state.user};q.a.post("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks",{name:e.name,cat:e.cat,user:e.user}).then((function(t){console.log(t),console.log(t.data),n.props.handleDataChange()}))},n.handleSubmitByKey=function(t){t.preventDefault();var e={name:n.state.name,cat:n.state.cat,user:n.state.user};q.a.post("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks",{name:e.name,cat:e.cat,user:e.user}).then((function(t){console.log(t),console.log(t.data),n.props.handleDataChange()}))},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(t){n.handleSubmit(t)}},a.a.createElement(cn,{hintText:"Enter new task",label:"new Task",onKeyPress:function(t){13===(t.keyCode||t.which)&&n.handleSubmitByKey(t)},onChange:this.handleChangeName}),a.a.createElement(un,{hintText:"Enter Category",label:"Category",onKeyPress:function(t){13===(t.keyCode||t.which)&&n.handleSubmitByKey(t)},onChange:this.handleChangeCat}),a.a.createElement(on,{type:"submit"},"ADD")))}}]),e}(a.a.Component);function dn(){var n=Object(s.a)(["\n\tposition: absolute;\n\ttransform: translateY(-100%);\n  color: #999;\n"]);return dn=function(){return n},n}function sn(){var n=Object(s.a)(["\n  color: grey;\n  position: absolute;\n  right: 0;\n"]);return sn=function(){return n},n}function mn(){var n=Object(s.a)(["\n  margin-left: auto;\n  fill: "," !important;\n  padding: 9px;\n  cursor: pointer;\n  &:hover {\n    fill: "," !important;\n  }\n"]);return mn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  transition: transform .5s ease;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 2px;\n  border-radius: 50%;\n  background: green;\n  transform: ",";\n"]);return fn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  max-width: 700px;\n  width: 100%;\n\tmargin: 50px auto;\n\tbackground: #fff;\n\tcolor: black;\n\tpadding: 20px;\n"]);return pn=function(){return n},n}function hn(){var n=Object(s.a)(["\n  padding: 11px 0 7px 0;\n  position: relative;\n  overflow: hidden;\n  margin-left: 5px;\n  display: flex;\n  width: 100%;\n"]);return hn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  width: 100%;\n  height: 1px;\n  background: lightgrey;\n  position: absolute;\n"]);return bn=function(){return n},n}function gn(){var n=Object(s.a)(["\n  display: flex;\n  position: relative;\n  padding-top: ","\n"]);return gn=function(){return n},n}var vn=Object(P.a)({root:{color:"darkgrey","&$checked":{color:"green"}},checked:{}})((function(n){return a.a.createElement(nn.a,Object.assign({color:"default"},n))})),kn=g.d.div(gn(),(function(n){return n.paddingTop?"40px":"0"})),xn=g.d.div(bn()),Cn=g.d.div(hn()),On=g.d.div(pn()),yn=g.d.div(fn(),(function(n){return n.show?"translateX(0%)":"translateX(-100%)"})),jn=Object(g.d)(Z.a)(mn(),(function(n){return n.theme.danger}),(function(n){return n.theme.dangerDarken})),En=g.d.div(sn()),wn=g.d.div(dn()),Sn=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).state={persons:[]},n.handleDataChange=function(){q.a.get("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks").then((function(t){var e=t.data;n.setState({persons:e})}))},n.handleDelete=function(t){console.log("key: "+t),q.a.delete("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks/".concat(t)).then((function(t){n.handleDataChange(),console.log(t),console.log(t.data)}))},n.handleChange=function(t,e){q.a.put("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks/".concat(t),{state:!e}).then((function(t){n.handleDataChange(),console.log(t),console.log(t.data)})),console.log("Key: "+t)},n}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=this;q.a.get("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks").then((function(t){var e=t.data;n.setState({persons:e})}))}},{key:"render",value:function(){var n=this;this.state.persons.sort((function(n,t){return n.cat>t.cat?1:-1}));var t,e=!1;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ln,{user:this.props.user,handleDataChange:this.handleDataChange}),a.a.createElement(On,null,this.state.persons.map((function(r){if(n.props.user===r.user)return e=t!==r.cat,t=r.cat,a.a.createElement(kn,{key:r.id,paddingTop:e},e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(wn,null,r.cat),a.a.createElement(xn,null)),a.a.createElement(vn,{checked:r.state,onChange:function(){return n.handleChange(r.id,r.state)},inputProps:{"aria-label":"primary checkbox"}}),a.a.createElement(Cn,null,a.a.createElement("div",{key:r.id},r.name),a.a.createElement(En,null,r.cat),a.a.createElement(yn,{show:r.state})),a.a.createElement(jn,{onClick:function(){return n.handleDelete(r.id)}}))}))))}}]),e}(a.a.Component);function Mn(){var n=Object(s.a)(["\n  border-top-left-radius: 4px !important;\n  border-bottom-left-radius: 4px !important;\n"]);return Mn=function(){return n},n}Object(g.d)(I).attrs({color:"primary"})(Mn());var Gn=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){return Object(c.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var n=a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{width:"boxed"},a.a.createElement(Sn,{user:this.props.state.username})));return"Wally"===this.props.state.username&&"12345"===this.props.state.password||"Juli"===this.props.state.username&&"12345"===this.props.state.password?n:a.a.createElement(m.a,{to:"/"})}}]),e}(a.a.Component);function Dn(){var n=Object(s.a)(["\n  margin:0;\n  padding:0;\n"]);return Dn=function(){return n},n}var Tn=g.d.div.attrs({className:"content-body"})(Dn());function Fn(){var n=Object(s.a)(["\n  text-align: center;\n  padding-top: 3rem;\n  img {\n    width: 200px;\n  }\n"]);return Fn=function(){return n},n}var Ln=g.d.h1(Fn());function Bn(){var n=Object(s.a)(["\n  width: auto !important;\n  font-size: 0.8rem !important;\n  padding: 2px 0 1px 0 !important;\n  margin-top: 3px !important;\n"]);return Bn=function(){return n},n}function In(){var n=Object(s.a)(["\n  width: 100%;\n  background: red;\n  color: #fff;\n  padding: 10px 0;\n  text-align: center;\n  display: ",";\n"]);return In=function(){return n},n}function An(){var n=Object(s.a)(["\n  font-size: 0.9rem;\n  padding: 5px;\n"]);return An=function(){return n},n}var Nn=g.d.div(An()),Rn=g.d.div(In(),(function(n){return n.loginFailure?"block":"none"})),Wn=Object(g.d)(I)(Bn()),zn=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).state={theme:v,username:"",password:"",loginFailure:!1},n.handleToggleTheme=function(){n.setState({theme:"light"===n.state.theme.id?k:v})},n.handleLoginSubmit=function(t,e){"Wally"===t&&"12345"===e||"Juli"===t&&"12345"===e?(n.setState({username:t,password:e,loginFailure:!1}),n.props.history.push("/todo-list")):n.setState({loginFailure:!0})},n.handleLogOut=function(){n.setState({username:"",password:"",loginFailure:!1}),n.props.history.push("/")},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement("div",{className:"App"},a.a.createElement(g.a,{theme:this.state.theme},a.a.createElement(C,{onClick:this.handleToggleTheme},a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement(Rn,{loginFailure:this.state.loginFailure},this.state.loginFailure?"Login wrong!":""),a.a.createElement(Nn,null,"Username: ",this.state.username,a.a.createElement("br",null),this.state.username&&a.a.createElement(Wn,{onClick:this.handleLogOut},"LogOut")),a.a.createElement(Ln,null,a.a.createElement("img",{src:b.a,alt:"Todo Logo"})),a.a.createElement(Tn,null,a.a.createElement(m.d,{history:p},a.a.createElement(m.b,{path:"/",render:function(t){return a.a.createElement(H,{handleLoginSubmit:n.handleLoginSubmit})},exact:!0}),a.a.createElement(m.b,{path:"/todo-list",render:function(t){return a.a.createElement(Gn,{state:n.state})}}),a.a.createElement(m.b,{component:K}))),a.a.createElement(D,null)))}}]),e}(a.a.Component),Xn=Object(m.g)(zn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T.a,{basename:"/"},a.a.createElement(Xn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},64:function(n,t,e){n.exports=e.p+"static/media/todo_logo.5dfca99b.svg"},80:function(n,t,e){n.exports=e(108)}},[[80,1,2]]]);
//# sourceMappingURL=main.3957d1d3.chunk.js.map