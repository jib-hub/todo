(this["webpackJsonptodo-app-axios"]=this["webpackJsonptodo-app-axios"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),i=n.n(o),c=n(14),u=n(11),l=n(17),d=n(16),s=n(5),m=n(32),f=n(20),p=Object(f.a)(),h=n(40),b=n.n(h),g=n(66),v=n.n(g),k=n(7),C={id:"light",light:!0,backgroundColor:"#e2e2e2",backgroundColorGradientStart:"#ffdd00",backgroundColorGradientEnd:"#fbb034",textColor:"#fff",bg:"#fff",bgDarken:"lightgrey",primaryColor:"#2f2f2f",secondaryColor:"orange",darkColor:"darkorange",danger:"#ff6666",dangerDarken:"#ff2015"},y={id:"dark",dark:!0,backgroundColor:"#2f2f2f",backgroundColorGradientStart:"#0f2027",backgroundColorGradientMiddle:"#203a43",backgroundColorGradientEnd:"#2c5364",textColor:"#fff",bg:"#fff",bgDarken:"lightgrey",primaryColor:"#e2e2e2",secondaryColor:"yellow",darkColor:"#fff",danger:"#ff6666",dangerDarken:"#ff2015"};function O(){var e=Object(s.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: space-between;\n  background: none;\n  width: 2rem;\n  height: 0.875rem;\n  margin: 0;\n  border-radius: 15px;\n  border: 2px solid ",";\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  div {\n    width: 0.9rem;\n    height: 0.9rem;\n    border: none;\n    border-radius: 100%;\n    transition: all 0.3s linear;\n    &:first-child {\n      background: ",";\n      transform: ",";\n    }\n    &:nth-child(2) {\n      background: ",";\n      transform: ",";\n    }\n  }\n  &:hover {\n    border: 2px solid ",";\n  }\n  &:hover {\n    div {background: ",";}}\n"]);return O=function(){return e},e}var x=k.d.div(O(),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.light?"translateX(0)":"translateX(100px)"}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.light?"translateX(-100px)":"translateX(0)"}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),j={xs:"480px",sm:"768px",md:"992px",lg:"1200px"};function E(){var e=Object(s.a)(["\n\t\t@media (min-width: ",") {\n\t\t\t",";\n\t\t}\n\t"]);return E=function(){return e},e}var w=Object.keys(j).reduce((function(e,t){return e[t]=function(){return Object(k.c)(E(),j[t],k.c.apply(void 0,arguments))},e}),{});function S(){var e=Object(s.a)(["\n      width: 70%;\n    "]);return S=function(){return e},e}function M(){var e=Object(s.a)(["\n      max-width: 900px;\n    "]);return M=function(){return e},e}function G(){var e=Object(s.a)(["\n      text-align: center;\n    "]);return G=function(){return e},e}function D(){var e=Object(s.a)(["\n    "]);return D=function(){return e},e}function A(){var e=Object(s.a)(["\n  *, html {padding:0; margin:0;}\n  html, body {\n  height: 100%;\n  }\n  body {\n    transition: all 0.3s linear;\n    background: ",";\n    background: -moz-linear-gradient(top,  "," 0%, "," "," 100%);\n    background: -webkit-linear-gradient(top,  "," 0%, "," "," 100%);\n    background: linear-gradient(to bottom,  "," 0%, "," "," 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='","', endColorstr='","',GradientType=0 );\n    background-attachment: fixed;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: ",";\n  }\n  input {\n    color: "," !important;\n  }\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .content-body\xa0{\n    padding-top: 4em;\n  }\n\n  .boxed {\n    margin: 0 auto;\n    width: 80%;\n    ","\n    ","\n    ","\n    ","\n  }\n\n  .fullWidth {\n    width: 100%;\n  }\n\n"]);return A=function(){return e},e}var T=Object(k.b)(A(),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.backgroundColorGradientStart}),(function(e){return e.theme.backgroundColorGradientMiddle?" ".concat(e.theme.backgroundColorGradientMiddle," 50%,"):""}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.backgroundColorGradientStart}),(function(e){return e.theme.backgroundColorGradientMiddle?" ".concat(e.theme.backgroundColorGradientMiddle," 50%,"):""}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.backgroundColorGradientStart}),(function(e){return e.theme.backgroundColorGradientMiddle?" ".concat(e.theme.backgroundColorGradientMiddle," 50%,"):""}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.backgroundColorGradientStart}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.textColor}),(function(e){return e.theme.textColor}),w.xs(D()),w.sm(G()),w.md(M()),w.lg(S())),F=n(37),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(e){return a.a.createElement("div",{className:this.props.width},this.props.children)}}]),n}(a.a.Component),B=n(139);function K(){var e=Object(s.a)(["\n  background: "," !important;\n  color: "," !important;\n  border-color: "," !important;\n  padding: 4px 40px 2px 40px !important;\n  font-weight: 700 !important;\n  font-size: 1rem !important;\n  &:hover{\n    background: "," !important;\n  }\n"]);return K=function(){return e},e}var P=Object(k.d)(B.a).attrs({color:"primary"})(K(),(function(e){return e.theme.bg}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.bgDarken}));function I(){var e=Object(s.a)(["\n  width: 404px;\n  text-align: {(this.props.TextAlignCenter) ? 'center' : 'left'}\n  margin: 0 auto;\n"]);return I=function(){return e},e}var z=k.d.h1(I());function N(){var e=Object(s.a)(["\n  text-align: center;\n  margin: 30px auto;\n  font-size: 3rem;\n"]);return N=function(){return e},e}function R(){var e=Object(s.a)(["\n  border-top-left-radius: 4px !important;\n  border-bottom-left-radius: 4px !important;\n"]);return R=function(){return e},e}var W=Object(k.d)(P).attrs({color:"primary"})(R()),X=Object(k.d)(z)(N()),J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{width:"boxed"},a.a.createElement(X,null,"ERROR 404")),a.a.createElement(L,{width:"boxed"},a.a.createElement(F.b,{to:{pathname:"/"}},a.a.createElement(W,null,"Back to Start"))))}}]),n}(a.a.Component),U=n(4),Y=n(143);function $(){var e=Object(s.a)(["\n  margin-top: 1rem !important;\n  width: 90%;\n  max-width: 400px;\n"]);return $=function(){return e},e}var H=Object(U.a)({root:{marginTop:"1rem !important",width:"90%",maxWidth:"400px","& label.Mui-focused":{color:"#fff"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}}})((function(e){return a.a.createElement(Y.a,Object.assign({color:"secondary",variant:"outlined"},e))})),_=Object(k.d)(P)($()),q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={name:"",password:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{width:"boxed"},a.a.createElement(z,{TextAlignCenter:!0},"Login"),a.a.createElement(H,{hintText:"Enter your Username",label:"Name",variant:"outlined",onKeyPress:function(t){13===(t.keyCode||t.which)&&e.props.handleLoginSubmit(e.state.name,e.state.password)},onChange:function(t){e.setState({name:t.target.value})}}),a.a.createElement("br",null),a.a.createElement(H,{type:"password",hintText:"Enter your Password",label:"Password",variant:"outlined",onKeyPress:function(t){13===(t.keyCode||t.which)&&e.props.handleLoginSubmit(e.state.name,e.state.password)},onChange:function(t){e.setState({password:t.target.value})}}),a.a.createElement("br",null),a.a.createElement(_,{label:"Submit",onClick:function(t){e.props.handleLoginSubmit(e.state.name,e.state.password)}},"Login")))}}]),n}(a.a.Component),Q=n(28),V=n.n(Q),Z=n(74),ee=n.n(Z),te=n(144),ne=n(19);function re(){var e=Object(s.a)(["\n  background: "," !important;\n  color: "," !important;\n  border-color: "," !important;\n  padding: 4px 40px 2px 40px !important;\n  font-weight: 700 !important;\n  font-size: 1rem !important;\n  height: 56px;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  &:hover{\n    background: "," !important;\n  }\n"]);return re=function(){return e},e}var ae=Object(k.d)(B.a).attrs({color:"primary"})(re(),(function(e){return e.theme.bg}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.backgroundColorGradientEnd}),(function(e){return e.theme.bgDarken}));function oe(){var e=Object(s.a)(["\n  padding-bottom: 5px;\n  cursor: pointer;\n"]);return oe=function(){return e},e}function ie(){var e=Object(s.a)(["\n  padding: 5px 5px 0 5px;\n"]);return ie=function(){return e},e}var ce,ue,le=k.d.div(ie()),de=k.d.div(oe()),se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(e){var t=this;if(0!==Object.keys(this.props.data).length){for(var n=this.props.data,r=0;r<n.length;r++)!1===n[r]&&n.splice(r,1);var o=n.map((function(e){return a.a.createElement(de,{onClick:function(){return t.props.handleAutoCompleteClick(e)}},e)}));return a.a.createElement(le,null,o)}return""}}]),n}(a.a.Component);function me(){var e=Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  background: rgb(0,0,0,0.5);\n  color: #fff;\n  text-align: left;\n  width: 100%;\n  z-index: 999;\n  display: ",";\n"]);return me=function(){return e},e}function fe(){var e=Object(s.a)(["\n  width: 30%;\n\tmax-width: 150px;\n\tmargin-right: 5px;\n\tdisplay: inline-flex;\n\tposition: relative;\n"]);return fe=function(){return e},e}var pe=Object(U.a)({root:(ce={marginRight:"5px",width:"60%",maxWidth:"400px","& label.Mui-focused":{color:"#fff"}},Object(ne.a)(ce,"& fieldset",{borderRadius:"4px 0 0 4px"}),Object(ne.a)(ce,"& .MuiInput-underline:after",{borderBottomColor:"green"}),Object(ne.a)(ce,"& .MuiOutlinedInput-root",{"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}),ce)})((function(e){return a.a.createElement(Y.a,Object.assign({color:"secondary",variant:"outlined"},e))})),he=Object(U.a)({root:(ue={width:"100%","& label.Mui-focused":{color:"#fff"}},Object(ne.a)(ue,"& fieldset",{borderRadius:"0"}),Object(ne.a)(ue,"& .MuiInput-underline:after",{borderBottomColor:"green"}),Object(ne.a)(ue,"& .MuiOutlinedInput-root",{"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}),ue)})((function(e){return a.a.createElement(Y.a,Object.assign({color:"secondary",variant:"outlined"},e))})),be=k.d.div(fe()),ge=k.d.div(me(),(function(e){return e.show?"block":"none"})),ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={name:"",cat:"",user:e.props.user,autocomplete:"",showAutocomplete:!0},e.handleChangeName=function(t){e.setState({name:t.target.value})},e.handleChangeCat=function(t){e.setState({cat:t.target.value})},e.handleChangeCatKey=function(t){V.a.get("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks").then((function(t){var n=t.data.map((function(t){return t.user===e.state.user&&t.cat})).filter((function(e,t,n){return n.indexOf(e)===t}));e.setState({autocomplete:n}),e.handleAutoCompleteOpen()}))},e.handleAutoCompleteClick=function(t){e.setState({cat:t}),e.handleAutoCompleteClose()},e.handleAutoCompleteClose=function(){e.setState({showAutocomplete:!1})},e.handleAutoCompleteOpen=function(){e.setState({showAutocomplete:!0})},e.handleSubmit=function(t){if(t.preventDefault(),""!==e.state.name){var n={name:e.state.name,cat:e.state.cat,user:e.state.user};V.a.post("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks",{name:n.name,cat:n.cat,user:n.user}).then((function(t){console.log(t),console.log(t.data),e.props.handleDataChange(),e.setState({name:""}),e.setState({cat:""})}))}else alert("Task empty! Please name your task!")},e.handleSubmitByKey=function(t){if(t.preventDefault(),""!==e.state.name){var n={name:e.state.name,cat:e.state.cat,user:e.state.user};V.a.post("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks",{name:n.name,cat:n.cat,user:n.user}).then((function(t){console.log(t),console.log(t.data),e.props.handleDataChange(),e.setState({name:""}),e.setState({cat:""})}))}else alert("Task empty! Please name your task!")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(t){e.handleSubmit(t)}},a.a.createElement(pe,{hintText:"Enter new task",label:"new Task",value:this.state.name,onKeyPress:function(t){13===(t.keyCode||t.which)&&e.handleSubmitByKey(t)},onChange:this.handleChangeName}),a.a.createElement(be,null,a.a.createElement(he,Object(ne.a)({hintText:"Enter Category",label:"Category",value:this.state.cat,onKeyPress:function(t){13===(t.keyCode||t.which)&&e.handleSubmitByKey(t)},onChange:this.handleChangeCat},"onKeyPress",this.handleChangeCatKey)),a.a.createElement(ge,{show:this.state.showAutocomplete},a.a.createElement(se,{handleAutoCompleteClick:this.handleAutoCompleteClick,data:this.state.autocomplete}))),a.a.createElement(ae,{type:"submit"},"ADD")))}}]),n}(a.a.Component);function ke(){var e=Object(s.a)(["\n\tposition: absolute;\n\ttransform: translateY(-100%);\n  color: #999;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(s.a)(["\n  color: grey;\n  position: absolute;\n  right: 0;\n"]);return Ce=function(){return e},e}function ye(){var e=Object(s.a)(["\n  margin-left: auto;\n  fill: "," !important;\n  padding: 9px;\n  cursor: pointer;\n  &:hover {\n    fill: "," !important;\n  }\n"]);return ye=function(){return e},e}function Oe(){var e=Object(s.a)(["\n  transition: transform .5s ease;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 2px;\n  border-radius: 50%;\n  background: green;\n  transform: ",";\n"]);return Oe=function(){return e},e}function xe(){var e=Object(s.a)(["\n  max-width: 700px;\n  width: 100%;\n\tmargin: 50px auto;\n\tbackground: #fff;\n\tcolor: black;\n\tpadding: 20px;\n  display: ","\n"]);return xe=function(){return e},e}function je(){var e=Object(s.a)(["\n  padding: 11px 0 7px 0;\n  position: relative;\n  overflow: hidden;\n  margin-left: 5px;\n  display: flex;\n  width: 100%;\n"]);return je=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  width: 100%;\n  height: 1px;\n  background: lightgrey;\n  position: absolute;\n"]);return Ee=function(){return e},e}function we(){var e=Object(s.a)(["\n  display: flex;\n  position: relative;\n  padding-top: ",";\n  &:nth-child(1) {\n\t   padding-top: ",";\n  }\n"]);return we=function(){return e},e}var Se=Object(U.a)({root:{color:"darkgrey","&$checked":{color:"green"}},checked:{}})((function(e){return a.a.createElement(te.a,Object.assign({color:"default"},e))})),Me=k.d.div(we(),(function(e){return e.paddingTop?"40px":"0"}),(function(e){return e.paddingTop?"20px":"0"})),Ge=k.d.div(Ee()),De=k.d.div(je()),Ae=k.d.div(xe(),(function(e){return e.show?"block":"none"})),Te=k.d.div(Oe(),(function(e){return e.show?"translateX(0%)":"translateX(-100%)"})),Fe=Object(k.d)(ee.a)(ye(),(function(e){return e.theme.danger}),(function(e){return e.theme.dangerDarken})),Le=k.d.div(Ce()),Be=k.d.div(ke()),Ke=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={persons:[]},e.handleDataChange=function(){V.a.get("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks").then((function(t){var n=t.data;e.setState({persons:n})}))},e.handleDelete=function(t){console.log("key: "+t),V.a.delete("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks/".concat(t)).then((function(t){e.handleDataChange(),console.log(t),console.log(t.data)}))},e.handleChange=function(t,n){V.a.put("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks/".concat(t),{state:!n}).then((function(t){e.handleDataChange(),console.log(t),console.log(t.data)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;V.a.get("https://5eb1a93336d3ee001682e16b.mockapi.io/tasks").then((function(t){var n=t.data;e.setState({persons:n})}))}},{key:"render",value:function(){var e=this;this.state.persons.sort((function(e,t){return e.cat>t.cat?1:-1}));var t,n=!1,r=this.state.persons.filter((function(t){return t.user===e.props.user})),o=0!==Object.keys(r).length;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ve,{user:this.props.user,handleDataChange:this.handleDataChange}),a.a.createElement(Ae,{show:o},this.state.persons.map((function(r){return e.props.user===r.user?(n=t!==r.cat,t=r.cat,a.a.createElement(Me,{key:r.id,paddingTop:n},n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Be,null,r.cat),a.a.createElement(Ge,null)),a.a.createElement(Se,{checked:r.state,onChange:function(){return e.handleChange(r.id,r.state)},inputProps:{"aria-label":"primary checkbox"}}),a.a.createElement(De,null,a.a.createElement("div",{key:r.id},r.name),a.a.createElement(Le,null,r.cat),a.a.createElement(Te,{show:r.state})),a.a.createElement(Fe,{onClick:function(){return e.handleDelete(r.id)}}))):""}))))}}]),n}(a.a.Component),Pe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{width:"boxed"},a.a.createElement(Ke,{user:this.props.state.username})));return"Wally"===this.props.state.username&&"827ccb0eea8a706c4c34a16891f84e7b"===this.props.state.password||"Juli"===this.props.state.username&&"827ccb0eea8a706c4c34a16891f84e7b"===this.props.state.password?e:a.a.createElement(m.a,{to:"/"})}}]),n}(a.a.Component);function Ie(){var e=Object(s.a)(["\n  margin:0;\n  padding:0;\n"]);return Ie=function(){return e},e}var ze=k.d.div.attrs({className:"content-body"})(Ie());function Ne(){var e=Object(s.a)(["\n  text-align: center;\n  padding-top: 3rem;\n  img {\n    width: 200px;\n  }\n"]);return Ne=function(){return e},e}var Re=k.d.h1(Ne());function We(){var e=Object(s.a)(["\n  width: auto !important;\n  font-size: 0.8rem !important;\n  padding: 2px 0 1px 0 !important;\n  margin-top: 3px !important;\n"]);return We=function(){return e},e}function Xe(){var e=Object(s.a)(["\n  width: 100%;\n  background: red;\n  color: #fff;\n  padding: 10px 0;\n  text-align: center;\n  display: ",";\n"]);return Xe=function(){return e},e}function Je(){var e=Object(s.a)(["\n  font-size: 0.9rem;\n  padding: 5px;\n"]);return Je=function(){return e},e}var Ue=k.d.div(Je()),Ye=k.d.div(Xe(),(function(e){return e.loginFailure?"block":"none"})),$e=Object(k.d)(P)(We()),He=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={theme:C,username:"",password:"",loginFailure:!1},e.handleToggleTheme=function(){e.setState({theme:"light"===e.state.theme.id?y:C})},e.handleLoginSubmit=function(t,n){"Wally"===t&&"827ccb0eea8a706c4c34a16891f84e7b"===b()(n)||"Juli"===t&&"827ccb0eea8a706c4c34a16891f84e7b"===b()(n)?(e.setState({username:t,password:b()(n),loginFailure:!1}),e.props.history.push("/todo-list")):e.setState({loginFailure:!0})},e.handleLogOut=function(){e.setState({username:"",password:"",loginFailure:!1}),e.props.history.push("/")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement(k.a,{theme:this.state.theme},a.a.createElement(x,{onClick:this.handleToggleTheme},a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement(Ye,{loginFailure:this.state.loginFailure},this.state.loginFailure?"Login wrong!":""),a.a.createElement(Ue,null,"Username: ",this.state.username,a.a.createElement("br",null),this.state.username&&a.a.createElement($e,{onClick:this.handleLogOut},"LogOut")),a.a.createElement(Re,null,a.a.createElement("img",{src:v.a,alt:"Todo Logo"})),a.a.createElement(ze,null,a.a.createElement(m.d,{history:p},a.a.createElement(m.b,{path:"/",render:function(t){return a.a.createElement(q,{handleLoginSubmit:e.handleLoginSubmit})},exact:!0}),a.a.createElement(m.b,{path:"/todo-list",render:function(t){return a.a.createElement(Pe,{state:e.state})}}),a.a.createElement(m.b,{component:J}))),a.a.createElement(T,null)))}}]),n}(a.a.Component),_e=Object(m.g)(He);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(F.a,{basename:"/"},a.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,n){e.exports=n.p+"static/media/todo_logo.5dfca99b.svg"},82:function(e,t,n){e.exports=n(112)}},[[82,1,2]]]);
//# sourceMappingURL=main.628bc1af.chunk.js.map