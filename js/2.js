webpackJsonp([2],{51:function(t,e,a){var r=a(11)(a(55),a(60),null,null);t.exports=r.exports},55:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{email:null,password:null,error:!1}},methods:{login:function(t){var e=this,a={email:this.email,password:this.password};window.axios.post("/auth/login",a).then(function(t){localStorage.setItem("id_token",t.data.id_token),e.$router.push("/")}).catch(function(t){e.error=!0})}}}},60:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t.error?a("div",{staticClass:"alert alert-danger"},[a("p",[t._v("There was an error, unable to sign in with those credentials.")])]):t._e(),t._v(" "),a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("E-mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign in")])]),t._v(" "),a("div",[a("hr"),t._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"pull-left"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)])])])},staticRenderFns:[]}}});