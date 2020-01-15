(function(e){function t(t){for(var r,s,l=t[0],i=t[1],u=t[2],m=0,d=[];m<l.length;m++)s=l[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var i=a[l];0!==o[i]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},o={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view"),a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("Navigation",{attrs:{color:"primary"}})],1),a("v-spacer")],1),a("v-content")],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"lg"}},[a("b-navbar-brand",{attrs:{to:{path:"/"}}},[e._v("Home")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:{path:"signUp"}}},[e._v("Sign Up")]),a("b-nav-item",{attrs:{to:{path:"register"}}},[e._v("Register")]),a("b-nav-item",{attrs:{to:{path:"VehicleCard"}}},[e._v("Vehicles")]),a("b-nav-item",{attrs:{to:{path:"addVehicle"}}},[e._v("Add Vehicle")]),a("b-nav-item",{attrs:{to:{path:"issue"}}},[e._v("Issues")]),a("b-nav-item",{attrs:{to:{path:"addIssue"}}},[e._v("Add Issue")]),a("b-nav-item",{attrs:{to:{path:"editIssue"}}},[e._v("Edit Issue")]),a("b-nav-item",{attrs:{to:{path:"editVehicle"}}},[e._v("Edit Vehicle")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("em",[e._v("User")])]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Sign ip")])],1)],1)],1)],1)],1)},l=[],i={name:"Navigation"},u=i,c=a("2877"),m=Object(c["a"])(u,s,l,!1,null,null,null),d=m.exports,f={name:"App",components:{Navigation:d},data:function(){return{}}},v=f,p=a("6544"),h=a.n(p),b=a("7496"),x=a("40dc"),g=a("a75b"),$=a("2fa4"),k=Object(c["a"])(v,o,n,!1,null,null,null),_=k.exports;h()(k,{VApp:b["a"],VAppBar:x["a"],VContent:g["a"],VSpacer:$["a"]});var y=a("5f5b"),D=(a("f9e3"),a("2dd8"),a("bb35"),a("f309"));r["default"].use(D["a"]);var w=new D["a"]({}),C=a("8c4f"),q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vehicleCard"}},e._l(e.results,(function(t){return a("div",{key:t},[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Vehicle Details","img-src":"https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/19ZX1000Y_201GY3DRS1CG_A.png","img-alt":"Image","img-top":"",tag:"article"}},[a("div",{attrs:{id:"vdetails"}},[a("ul",[e._v(" Make: "+e._s(t.make)+" ")]),a("ul",[e._v(" Model: "+e._s(t.model)+" ")]),a("ul",[e._v(" Tax Renewal Date: "+e._s(t.taxDate)+" ")]),a("ul",[e._v(" Insurance Renewaql Date: "+e._s(t.insuranceDate)+" ")]),a("ul",[e._v(" MOT Renewal Date: "+e._s(t.motDate)+" ")])]),a("b-card-text",[e._v(" Content of vehicle ")]),a("v-text-field",[e._v("textfield")]),a("b-button",{attrs:{href:"#",variant:"primary"}},[e._v("Go somewhere")])],1)],1)})),0)},S=[],A=a("bc3a"),V=a.n(A),N="http://localhost:8081/vehicle",P={e1:"#vdetails",name:"VehicleCard",data:function(){return{results:null}},mounted:function(){var e=this;V.a.get(N).then((function(t){e.results=t.data,console.log(t)}))}},O=P,I=a("8654"),E=Object(c["a"])(O,q,S,!1,null,null,null),j=E.exports;h()(E,{VTextField:I["a"]});var M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("p",[e._v(" Welcome! ")])])}],F={name:"Home"},T=F,U=Object(c["a"])(T,M,R,!1,null,null,null),B=U.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"signUpForm"}},[a("v-text-field",{attrs:{label:"First Name",rules:[e.rules.required],type:"String"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{label:"Surname",rules:[e.rules.required]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"Street Name",rules:[e.rules.required]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"House Number",rules:[e.rules.required],type:"number"},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"Postcode",rules:[e.rules.required,e.rules.pattern]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"City",rules:[e.rules.required]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"Country",rules:[e.rules.required]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"E-mail Address",rules:[e.rules.required]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"Confirm E-mail",rules:[e.rules.required]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("v-text-field",{attrs:{label:"Password",rules:[e.rules.required,e.rules.min]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{label:"Confirm Password",rules:[e.rules.required,e.rules.min]},model:{value:e.placeholder,callback:function(t){e.placeholder=t},expression:"placeholder"}}),a("b-button",{attrs:{href:"#",variant:"outline-primary"}},[e._v("Submit")])],1)},W=[],L={data:function(){return{rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},message:"One lowercase letter required."}}},name:"SignUp"},G=L,H=Object(c["a"])(G,K,W,!1,null,null,null),J=H.exports;h()(H,{VTextField:I["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vehicleCard"}},[a("h1",{staticClass:"title"},[e._v("Create Account")]),a("h2",{staticClass:"subtitle"},[e._v(" Create an account or log in to manage your vehicles ")]),a("form",{staticClass:"form"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[e._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.firstName.$model,expression:"$v.form.firstName.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name",id:"name"},domProps:{value:e.$v.form.firstName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.firstName,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[e._v("Surname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.surname.$model,expression:"$v.form.surname.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name",id:"name"},domProps:{value:e.$v.form.surname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.surname,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.email.$model,expression:"$v.form.email.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"your@email.com",id:"email"},domProps:{value:e.$v.form.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.email,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.password.$model,expression:"$v.form.password.$model"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"password"},domProps:{value:e.$v.form.password.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.password,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"password"}},[e._v("Re-enter Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.passwordConf.$model,expression:"$v.form.passwordConf.$model"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"password"},domProps:{value:e.$v.form.passwordConf.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.passwordConf,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"postcode"}},[e._v("Postcode")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.postcode,expression:"form.postcode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Postcode",id:"postcode"},domProps:{value:e.form.postcode},on:{input:function(t){t.target.composing||e.$set(e.form,"postcode",t.target.value)}}})])]),a("button",{staticClass:"btn",on:{click:function(t){return e.postPost()}}},[e._v("submit")])])},X=[],Z=a("b5ae"),z="http://localhost:8081/user",Q={name:"Register",data:function(){return{form:{email:null,password:null,passwordConf:null,firstName:null,surname:null,postcode:null}}},validations:{form:{email:{required:Z["required"],email:Z["email"]},password:{required:Z["required"]},passwordConf:{required:Z["required"]},firstName:{required:Z["required"]},surname:{required:Z["required"]},postcode:{required:Z["required"]}}},methods:{postPost:function(){var e=this;V.a.post(z,this.form).then((function(e){console.log(e)})).catch((function(t){e.errors.push(t)}))}}},ee=Q,te=Object(c["a"])(ee,Y,X,!1,null,null,null),ae=te.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vehicleCard"}},[a("b-table",{attrs:{striped:"",hover:"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"cell(is_addressed)",fn:function(t){return[a("b-form-checkbox",{on:{change:t.toggleDetails},model:{value:t.detailsShowing,callback:function(a){e.$set(t,"detailsShowing",a)},expression:"row.detailsShowing"}},[e._v(" Issue Addressed ")])]}}])})],1)},oe=[],ne="http://localhost:8081/issue",se={name:"Issue",data:function(){return{results:null,fields:["issueName","lastAddressed","urgency","is_addressed","addressBy"],items:[{issueName:null,lastAdressed:null,urgency:null}]}},mounted:function(){var e=this;V.a.get(ne).then((function(t){e.items=t.data,console.log(t)}))}},le=se,ie=Object(c["a"])(le,re,oe,!1,null,null,null),ue=ie.exports,ce=a("1dce"),me=a.n(ce),de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vehicleCard"}},[a("h1",{staticClass:"title"},[e._v("Add a Vehicle")]),a("form",{staticClass:"form"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"make"}},[e._v("Make")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.make.$model,expression:"$v.form.make.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"make",id:"make"},domProps:{value:e.$v.form.make.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.make,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"model"}},[e._v("Model")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.model.$model,expression:"$v.form.model.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"model",id:"model"},domProps:{value:e.$v.form.model.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.model,"$model",t.target.value)}}})]),a("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,"return-value":e.form.taxDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"taxDate",t)},"update:return-value":function(t){return e.$set(e.form,"taxDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({attrs:{label:"Tax Renewal Date",readonly:""},model:{value:e.form.taxDate,callback:function(t){e.$set(e.form,"taxDate",t)},expression:"form.taxDate"}},r))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.taxDate,callback:function(t){e.$set(e.form,"taxDate",t)},expression:"form.taxDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu1=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu1.save(e.form.taxDate)}}},[e._v("OK")])],1)],1),a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.form.insuranceDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"insuranceDate",t)},"update:return-value":function(t){return e.$set(e.form,"insuranceDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({attrs:{label:"Insurance Renewal Date",readonly:""},model:{value:e.form.insuranceDate,callback:function(t){e.$set(e.form,"insuranceDate",t)},expression:"form.insuranceDate"}},r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.insuranceDate,callback:function(t){e.$set(e.form,"insuranceDate",t)},expression:"form.insuranceDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.form.insuranceDate)}}},[e._v("OK")])],1)],1),a("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":e.form.motDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"motDate",t)},"update:return-value":function(t){return e.$set(e.form,"motDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({attrs:{label:"MOT Renewal Date",readonly:""},model:{value:e.form.motDate,callback:function(t){e.$set(e.form,"motDate",t)},expression:"form.motDate"}},r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.motDate,callback:function(t){e.$set(e.form,"motDate",t)},expression:"form.motDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu2=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu2.save(e.form.motDate)}}},[e._v("OK")])],1)],1),a("div",{staticClass:"file-upload-form"},[e._v(" Upload an image file for the vehicle: "),a("input",{attrs:{type:"file",accept:"image/*"},on:{change:e.previewImage}})]),e.imageData.length>0?a("div",{staticClass:"image-preview"},[a("img",{staticClass:"preview",attrs:{src:e.imageData}})]):e._e()],1),a("button",{staticClass:"btn",on:{click:function(t){return e.postPost()}}},[e._v("submit")])])},fe=[],ve="http://localhost:8081/vehicle",pe={name:"AddVehicle",data:function(){return{form:{make:null,model:null,motDate:(new Date).toISOString().substr(0,10),insuranceDate:(new Date).toISOString().substr(0,10),taxDate:(new Date).toISOString().substr(0,10)},menu:!1,menu1:!1,menu2:!1,imageData:""}},validations:{form:{make:{required:Z["required"]},model:{required:Z["required"]},taxDate:{required:Z["required"]},motDate:{required:Z["required"]},insuranceDate:{required:Z["required"]}}},methods:{postPost:function(){var e=this;console.log(this.form.make),V.a.post(ve,this.form).then((function(e){console.log(e)})).catch((function(t){e.errors.push(t)}))},previewImage:function(e){var t=this,a=e.target;if(a.files&&a.files[0]){var r=new FileReader;r.onload=function(e){t.imageData=e.target.result},r.readAsDataURL(a.files[0])}}}},he=pe,be=a("8336"),xe=a("2e4b"),ge=a("e449"),$e=Object(c["a"])(he,de,fe,!1,null,"72ed5652",null),ke=$e.exports;h()($e,{VBtn:be["a"],VDatePicker:xe["a"],VMenu:ge["a"],VSpacer:$["a"],VTextField:I["a"]});var _e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vehicleCard"}},[a("h1",{staticClass:"title"},[e._v("Add an Issue")]),a("form",{staticClass:"form"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[e._v("Issue Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.issueName.$model,expression:"$v.form.issueName.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name",id:"name"},domProps:{value:e.$v.form.issueName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.issueName,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("b-form-select",{attrs:{options:e.options},model:{value:e.form.urgency,callback:function(t){e.$set(e.form,"urgency",t)},expression:"form.urgency"}})],1),a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.form.lastAddressed,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"lastAddressed",t)},"update:return-value":function(t){return e.$set(e.form,"lastAddressed",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({attrs:{label:"Last Addressed",readonly:""},model:{value:e.form.lastAddressed,callback:function(t){e.$set(e.form,"lastAddressed",t)},expression:"form.lastAddressed"}},r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.lastAddressed,callback:function(t){e.$set(e.form,"lastAddressed",t)},expression:"form.lastAddressed"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.form.lastAddressed)}}},[e._v("OK")])],1)],1)],1),a("button",{staticClass:"btn",on:{click:function(t){return e.postPost()}}},[e._v("submit")])])},ye=[],De="http://localhost:8081/issue",we={name:"AddIssue",data:function(){return{form:{issueName:null,urgency:null,lastAddressed:(new Date).toISOString().substr(0,10)},menu:!1,options:[{value:null,text:"Please select an option"},{value:"1",text:"Daily"},{value:"7",text:"Weekly"},{value:"14",text:"Bi-Weekly"},{value:"30",text:"Monthly"},{value:"182",text:"Semi-Annualy"},{value:"365",text:"Annualy"}]}},validations:{form:{issueName:{required:Z["required"]},selected:{required:Z["required"]},lastAddressed:{required:Z["required"]}}},methods:{postPost:function(){var e=this;V.a.post(De,this.form).then((function(e){console.log(e)})).catch((function(t){e.errors.push(t)}))}}},Ce=we,qe=Object(c["a"])(Ce,_e,ye,!1,null,"be2fd062",null),Se=qe.exports;h()(qe,{VBtn:be["a"],VDatePicker:xe["a"],VMenu:ge["a"],VSpacer:$["a"],VTextField:I["a"]});var Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vehicleCard"}},[a("h1",{staticClass:"title"},[e._v("Edit Issue")]),a("form",{staticClass:"form"},e._l(e.results,(function(t){return a("div",{key:t},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[e._v("Issue Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.issueName.$model,expression:"$v.form.issueName.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.issueName,id:"name"},domProps:{value:e.$v.form.issueName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.issueName,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("b-form-select",{attrs:{options:e.options},model:{value:e.form.urgency,callback:function(t){e.$set(e.form,"urgency",t)},expression:"form.urgency"}})],1),a("v-menu",{ref:"menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":e.form.lastAddressed,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"lastAddressed",t)},"update:return-value":function(t){return e.$set(e.form,"lastAddressed",t)}},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-text-field",e._g({attrs:{label:"Last Addressed",readonly:""},model:{value:t.lastAddressed,callback:function(a){e.$set(t,"lastAddressed",a)},expression:"issue.lastAddressed"}},o))]}}],null,!0),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.lastAddressed,callback:function(a){e.$set(t,"lastAddressed",a)},expression:"issue.lastAddressed"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return e.$refs.menu[0].save(t.lastAddressed)}}},[e._v("OK")])],1)],1)],1)})),0),a("button",{staticClass:"btn",on:{click:function(t){return e.postPost()}}},[e._v("submit")])])},Ve=[],Ne="http://localhost:8081/issue",Pe={name:"EditIssue",data:function(){return{results:null,form:{issueName:null,urgency:null,lastAddressed:(new Date).toISOString().substr(0,10)},menu:!1,options:[{value:null,text:"Please select an option"},{value:"1",text:"Daily"},{value:"7",text:"Weekly"},{value:"14",text:"Bi-Weekly"},{value:"30",text:"Monthly"},{value:"182",text:"Semi-Annualy"},{value:"365",text:"Annualy"}]}},mounted:function(){var e=this;V.a.get(Ne).then((function(t){e.results=t.data,console.log(t.data)}))},validations:{form:{issueName:{required:Z["required"]},selected:{required:Z["required"]},lastAddressed:{required:Z["required"]}}},methods:{postPost:function(){var e=this;V.a.post(Ne,this.form).then((function(e){console.log(e)})).catch((function(t){e.errors.push(t)}))}}},Oe=Pe,Ie=Object(c["a"])(Oe,Ae,Ve,!1,null,"4561b984",null),Ee=Ie.exports;h()(Ie,{VBtn:be["a"],VDatePicker:xe["a"],VMenu:ge["a"],VSpacer:$["a"],VTextField:I["a"]});var je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vehicleCard"}},[a("h1",{staticClass:"title"},[e._v("Add a Vehicle")]),a("form",{staticClass:"form"},e._l(e.results,(function(t){return a("div",{key:t},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"make"}},[e._v("Make")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.make.$model,expression:"$v.form.make.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.make,id:"make"},domProps:{value:e.$v.form.make.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.make,"$model",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"model"}},[e._v("Model")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.model.$model,expression:"$v.form.model.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.model,id:"model"},domProps:{value:e.$v.form.model.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.model,"$model",t.target.value)}}})]),a("v-menu",{ref:"menu1",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":e.form.taxDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"taxDate",t)},"update:return-value":function(t){return e.$set(e.form,"taxDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-text-field",e._g({attrs:{label:"Tax Renewal Date",readonly:""},model:{value:t.taxDate,callback:function(a){e.$set(t,"taxDate",a)},expression:"vehicle.taxDate"}},o))]}}],null,!0),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.taxDate,callback:function(a){e.$set(t,"taxDate",a)},expression:"vehicle.taxDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu1=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return e.$refs.menu1[0].save(t.taxDate)}}},[e._v("OK")])],1)],1),a("v-menu",{ref:"menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":e.form.insuranceDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"insuranceDate",t)},"update:return-value":function(t){return e.$set(e.form,"insuranceDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-text-field",e._g({attrs:{label:"Insurance Renewal Date",readonly:""},model:{value:t.insuranceDate,callback:function(a){e.$set(t,"insuranceDate",a)},expression:"vehicle.insuranceDate"}},o))]}}],null,!0),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.insuranceDate,callback:function(a){e.$set(t,"insuranceDate",a)},expression:"vehicle.insuranceDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return e.$refs.menu[0].save(t.insuranceDate)}}},[e._v("OK")])],1)],1),a("v-menu",{ref:"menu2",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":e.form.motDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"motDate",t)},"update:return-value":function(t){return e.$set(e.form,"motDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-text-field",e._g({attrs:{label:"MOT Renewal Date",readonly:""},model:{value:t.motDate,callback:function(a){e.$set(t,"motDate",a)},expression:"vehicle.motDate"}},o))]}}],null,!0),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.motDate,callback:function(a){e.$set(t,"motDate",a)},expression:"vehicle.motDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu2=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return e.$refs.menu2[0].save(t.motDate)}}},[e._v("OK")])],1)],1),a("div",{staticClass:"file-upload-form"},[e._v(" Upload an image file for the vehicle: "),a("input",{attrs:{type:"file",accept:"image/*"},on:{change:e.previewImage}})]),e.imageData.length>0?a("div",{staticClass:"image-preview"},[a("img",{staticClass:"preview",attrs:{src:e.imageData}})]):e._e()],1)})),0),a("button",{staticClass:"btn",on:{click:function(t){return e.postPost()}}},[e._v("submit")])])},Me=[],Re="http://localhost:8081/vehicle",Fe={name:"EditVehicle",data:function(){return{results:null,form:{make:null,model:null,motDate:(new Date).toISOString().substr(0,10),insuranceDate:(new Date).toISOString().substr(0,10),taxDate:(new Date).toISOString().substr(0,10)},menu:!1,menu1:!1,menu2:!1,imageData:""}},mounted:function(){var e=this;V.a.get(Re).then((function(t){e.results=t.data,console.log(t.data)}))},validations:{form:{make:{required:Z["required"]},model:{required:Z["required"]},taxDate:{required:Z["required"]},motDate:{required:Z["required"]},insuranceDate:{required:Z["required"]}}},methods:{postPost:function(){var e=this;console.log(this.form.make),V.a.post(Re,this.form).then((function(e){console.log(e)})).catch((function(t){e.errors.push(t)}))},previewImage:function(e){var t=this,a=e.target;if(a.files&&a.files[0]){var r=new FileReader;r.onload=function(e){t.imageData=e.target.result},r.readAsDataURL(a.files[0])}}}},Te=Fe,Ue=Object(c["a"])(Te,je,Me,!1,null,"f782b412",null),Be=Ue.exports;h()(Ue,{VBtn:be["a"],VDatePicker:xe["a"],VMenu:ge["a"],VSpacer:$["a"],VTextField:I["a"]}),r["default"].use(me.a),r["default"].use(y["a"]),r["default"].use(C["a"]),r["default"].config.productionTip=!1;var Ke=new C["a"]({routes:[{path:"/",component:B},{path:"/vehicleCard",component:j},{path:"/signUp",component:J},{path:"/register",component:ae},{path:"/issue",component:ue},{path:"/addVehicle",component:ke},{path:"/addIssue",component:Se},{path:"/editIssue",component:Ee},{path:"/editvehicle",component:Be}]});new r["default"]({vuetify:w,router:Ke,render:function(e){return e(_)}}).$mount("#app")},bb35:function(e,t,a){}});
//# sourceMappingURL=app.b0f2ecd5.js.map