(this.webpackJsonpvdovoo=this.webpackJsonpvdovoo||[]).push([[8],{68:function(e,a,t){"use strict";t.r(a);var s=t(35),n=t(13),r=t(0),l=t.n(r),o=t(67),i=t(1);a.default=function(){var e=Object(r.useState)(!0),a=Object(n.a)(e,2),t=a[0],m=a[1],c=Object(o.a)({mode:"onChange"}),d=c.register,u=c.handleSubmit,f=c.errors,p=c.watch,b=c.reset,g=Object(r.useState)(!1),w=Object(n.a)(g,2),v=w[0],h=w[1],E=Object(i.f)(),N=function(e,a){if(t)return e.email===a.email&&e.password===a.password?(E.push("/home",{user:e}),void b()):(h("Please enter correct email and password."),setTimeout((function(){h("")}),2e3),void b());h("User with this email already exist."),setTimeout((function(){h("")}),2e3),b()},y=function(e,a){if(t)return h("User with this email does not exist."),setTimeout((function(){h("")}),2e3),void b()};return Object(r.useEffect)((function(){!function(e){setTimeout((function(){e.email=null,e.password=null,e.confirmPassword=null}),1e3)}(f)}),[f]),l.a.createElement("section",null,l.a.createElement("div",{className:"row content"},l.a.createElement("div",{className:"col login-bg d-lg-block d-none"}),l.a.createElement("div",{className:"col login-area py-md-5 py-3 bg-light d-flex flex-column justify-content-center align-items-center text-dark"},l.a.createElement("div",{className:"w-100 p-lg-3 p-2"},l.a.createElement("h1",{className:"font-weight-bold mb-4"},l.a.createElement("span",{className:"text-danger"},"VDO"),"VOO"),l.a.createElement("div",{className:"btn-group float-right",role:"group","aria-label":"Basic example"},l.a.createElement("button",{type:"button",onClick:function(){return m(!0)},className:t?"btn btn-sm btn-secondary":"btn btn-sm btn-outline-secondary"},"Login"),l.a.createElement("button",{type:"button",onClick:function(){return m(!1)},className:t?"btn btn-sm btn-outline-secondary":"btn btn-sm btn-secondary"},"SignUp"))),l.a.createElement("form",{className:"form w-100 p-lg-3 p-2",onSubmit:u((function(e){var a=JSON.parse(localStorage.getItem("users"));if(a){var n,r=Object(s.a)(a);try{for(r.s();!(n=r.n()).done;){var l=n.value;if(l.email===e.email)return void N(l,e);y()}}catch(v){r.e(v)}finally{r.f()}(function(e){if(!t){var a={email:e.email,password:e.password,likeVDO:[],dislikeVDO:[],saveVDO:[]},s=JSON.parse(localStorage.getItem("users"));s.push(a),localStorage.setItem("users",JSON.stringify(s)),m(!0),b()}})(e)}else!function(e){if(t)return h("You need to sign in first."),setTimeout((function(){h("")}),2e3),void b();var a={email:e.email,password:e.password,likeVDO:[],dislikeVDO:[],saveVDO:[]},s=[];s.push(a),localStorage.setItem("users",JSON.stringify(s)),b(),m(!0)}(e)}))},l.a.createElement("div",{className:"my-3"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",ref:d({required:"Email is required.",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Invalid email address"}}),placeholder:"johndoe@gmail.com",className:"form-control"}),f.email&&l.a.createElement("small",{className:"text-danger"},f.email.message)),l.a.createElement("div",{className:"my-3"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",ref:d({required:"Password is required.",minLength:{value:5,message:"Password should be 5 characters long."}}),placeholder:"**************",className:"form-control"}),f.password&&l.a.createElement("small",{className:"text-danger"},f.password.message)),t?"":l.a.createElement("div",{className:"my-3"},l.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),l.a.createElement("input",{type:"password",name:"confirmPassword",ref:d({required:"Confirm your password",validate:function(e){return e===p("password")||"Passwords don't match."}}),placeholder:"**************",className:"form-control"}),!t&&f.confirmPassword&&l.a.createElement("small",{className:"text-danger"},f.confirmPassword.message)),v&&l.a.createElement("small",{className:"text-danger"},v),l.a.createElement("button",{type:"submit",className:"btn w-100 p-2 mt-2 submit-btn"},t?"Login":"Sign Up")))))}}}]);
//# sourceMappingURL=8.fa28c110.chunk.js.map