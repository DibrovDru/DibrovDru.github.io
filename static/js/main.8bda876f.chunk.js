(this.webpackJsonpstudycards=this.webpackJsonpstudycards||[]).push([[0],{13:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},26:function(e,t,s){},35:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(27),a=s.n(i),r=s(2),l=(s(35),s(5)),j=s(0);var d=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:Object(j.jsx)("img",{className:"picture_home",src:"../picture.jpeg",alt:""})})}),Object(j.jsxs)("section",{children:[Object(j.jsx)("p",{className:"title_text",children:"StudyCards"}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/sign_up",children:Object(j.jsx)("button",{className:"button_sign_up",children:Object(j.jsx)("p",{className:"text_sign_up",children:"Sign up"})})})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/log_in",children:Object(j.jsx)("button",{className:"button_log_in",children:Object(j.jsx)("p",{className:"text_log_in",children:"Log in"})})})})]}),Object(j.jsxs)("section",{className:"description",children:["Hello! ",Object(j.jsx)("br",{}),"Here you can create your own cards with therms, theorems, rules and so on to learn them up"]})]})},o=(s(26),s(3)),b=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(o.d,{initialValues:{email:"",password:"",rp_password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.rp_password!==e.password&&(t.rp_password="Doesn'match"),t},onSubmit:function(e,t){var s=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),400)},children:function(e){var t=e.isSubmitting;return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.b,{type:"email",name:"email",className:"email_sign_up",placeholder:"Enter email"}),Object(j.jsx)(o.a,{name:"email",component:"div",className:"error_email"}),Object(j.jsx)(o.b,{type:"password",name:"password",className:"password_sign_up",placeholder:"Enter password"}),Object(j.jsx)(o.a,{name:"password",component:"div"}),Object(j.jsx)(o.b,{type:"rp_password",name:"rp_password",className:"rp_password_form",placeholder:"Repeat password"}),Object(j.jsx)(o.a,{name:"rp_password",component:"div",className:"error_pswd"}),Object(j.jsx)(l.b,{to:"/my_folders",children:Object(j.jsx)("button",{type:"submit",disabled:t,className:"sign_up_button",children:"Submit"})})]})}})})};var m=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:Object(j.jsx)("img",{className:"picture",src:"../picture.jpeg",alt:""})})}),Object(j.jsx)("section",{className:"name_sign_up",children:"StudyCards"}),Object(j.jsxs)("section",{children:[Object(j.jsx)("article",{className:"form_sign_up"}),Object(j.jsx)("p",{className:"sign_up_text",children:"Sign up"}),Object(j.jsx)(b,{})]})]})},u=(s(13),function(){return Object(j.jsx)("div",{children:Object(j.jsx)(o.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){var s=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),400)},children:function(e){var t=e.isSubmitting;return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.b,{type:"email",name:"email",className:"email_form",placeholder:"Enter email"}),Object(j.jsx)(o.a,{name:"email",component:"div",className:"error_email"}),Object(j.jsx)(o.b,{type:"password",name:"password",className:"password_form",placeholder:"Enter password"}),Object(j.jsx)(o.a,{name:"password",component:"div"}),Object(j.jsx)(l.b,{to:"/my_folders",children:Object(j.jsx)("button",{type:"submit",disabled:t,className:"log_in_button",children:"Submit"})})]})}})})});var O=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:Object(j.jsx)("img",{className:"picture",src:"../picture.jpeg",alt:""})})}),Object(j.jsx)("section",{className:"name_log_in",children:"StudyCards"}),Object(j.jsxs)("section",{className:"table",children:[Object(j.jsx)("article",{className:"form"}),Object(j.jsx)("article",{children:Object(j.jsx)("p",{className:"log_in_text",children:"Log in"})}),Object(j.jsx)(u,{})]})]})},x=s(16),p=s(7),h=(s(19),function(e){var t=e.addItem;return Object(j.jsxs)("div",{children:[Object(j.jsx)(o.d,{initialValues:{name:""},onSubmit:function(e,s){var c=s.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),c(!1)}),400),t(Date.now(),e.name)},children:function(e){var t=e.isSubmitting;return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.b,{type:"name",name:"name",className:"new_name_form"}),Object(j.jsx)("button",{type:"submit",disabled:t,className:"ok_fold",children:"OK"})]})}}),Object(j.jsx)("button",{className:"fn_cancel_fold",id:"cancel_button",children:"Cancel"})]})});var f=function(e){var t=e.item,s=e.deleteItem,c=t.id,n=t.title;return Object(j.jsx)("div",{children:Object(j.jsx)(l.b,{to:"/my_folders/folder",children:Object(j.jsx)("button",{className:"folder",onDoubleClick:function(){return s(c)},children:n})})})};var _=function(e){var t=e.state,s=e.deleteItem;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(f,{item:e,deleteItem:s},e.id)}))})};var v=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),s=t[0],n=t[1];return Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:Object(j.jsx)("img",{className:"menu_pic",src:"../picture2.jpeg",alt:""})})}),Object(j.jsx)("section",{children:Object(j.jsx)("p",{className:"name",children:"StudyCards"})}),Object(j.jsx)("section",{className:"down_line"}),Object(j.jsx)("section",{className:"up_line"}),Object(j.jsx)(l.b,{to:"/profile",children:Object(j.jsx)("button",{className:"profile_button",children:"Profile"})}),Object(j.jsx)("section",{className:"folders_list",children:Object(j.jsx)(_,{state:s,deleteItem:function(e){n((function(){return s.filter((function(t){return t.id!==e}))}))}})}),Object(j.jsx)("button",{className:"add_folder_button",id:"add_button",children:"Add folder..."}),Object(j.jsx)("section",{className:"add_fold_name",id:"form",children:Object(j.jsx)(h,{addItem:function(e,t){n((function(){return[].concat(Object(x.a)(s),[{id:e,title:t}])}))}})})]})},N=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(o.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){var s=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),400)},children:function(e){var t=e.isSubmitting;return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.b,{type:"email",name:"email",className:"email_form",placeholder:"Change email"}),Object(j.jsx)(o.a,{name:"email",component:"div",className:"error_email"}),Object(j.jsx)(o.b,{type:"password",name:"password",className:"password_form",placeholder:"Change password"}),Object(j.jsx)(o.a,{name:"password",component:"div"}),Object(j.jsx)("button",{type:"submit",disabled:t,className:"log_in_button",children:"Submit"})]})}})})};var g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:Object(j.jsx)("img",{className:"picture",src:"../picture.jpeg",alt:""})})}),Object(j.jsx)("section",{className:"name",children:"StudyCards"}),Object(j.jsxs)("section",{className:"table",children:[Object(j.jsx)("article",{className:"form"}),Object(j.jsx)("article",{children:Object(j.jsx)("p",{className:"profile",children:"Your profile"})}),Object(j.jsx)(N,{})]})]})},w=(s(20),s(30)),y=function(e){return Object(j.jsx)("textarea",Object(w.a)({type:"text"},e))},S=function(e){var t=e.addItem;return Object(j.jsxs)("div",{children:[Object(j.jsx)(o.d,{initialValues:{name:"",description:""},onSubmit:function(e,s){var c=s.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),c(!1)}),400),t(Date.now(),e.name,e.description,!1)},children:function(e){var t=e.isSubmitting;return Object(j.jsxs)(o.c,{children:[Object(j.jsx)("section",{className:"name_title",children:"New card"}),Object(j.jsx)(o.b,{type:"name",name:"name",as:y,className:"new_name_card",placeholder:"Enter name"}),Object(j.jsx)(o.b,{type:"description",name:"description",as:y,className:"description_title",placeholder:"Enter description"}),Object(j.jsx)("button",{type:"submit",disabled:t,className:"ok",children:"OK"})]})}}),Object(j.jsx)("button",{className:"fn_cancel",id:"cancel_button",children:"Cancel"})]})},C=s(22),k=s(23),I=s(12),A=s(25),T=s(24),Z=function(e){Object(A.a)(s,e);var t=Object(T.a)(s);function s(e){var c;return Object(C.a)(this,s),(c=t.call(this,e)).state={isToggleOn:!0,title:e.data.title,description:e.data.description,show:!1},c.handleClick=c.handleClick.bind(Object(I.a)(c)),c}return Object(k.a)(s,[{key:"handleClick",value:function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))}},{key:"render",value:function(){return Object(j.jsx)("button",{onClick:this.handleClick,className:"card_data",children:this.state.isToggleOn?this.state.title:this.state.description})}}]),s}(n.a.Component),E=function(e){Object(A.a)(s,e);var t=Object(T.a)(s);function s(e){var c;return Object(C.a)(this,s),(c=t.call(this,e)).state=e.state,c.handleClick=c.handleClick.bind(Object(I.a)(c)),c}return Object(k.a)(s,[{key:"handleClick",value:function(){this.setState({title:this.state.title,show:!this.state.show,description:this.state.description,id:this.state.id})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:this.handleClick,className:"card",children:this.state.title}),Object(j.jsx)("section",{style:{display:this.state.show?"block":"none"},children:Object(j.jsx)(Z,{data:this.state})})]})}}]),s}(n.a.Component);var J=function(e){var t=e.item;return Object(j.jsx)("div",{children:Object(j.jsx)(E,{state:t})})};var V=function(e){var t=e.state,s=e.deleteItem;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(J,{item:e,deleteItem:s},e.id)}))})};var D=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),s=t[0],n=t[1];return Object(j.jsxs)("div",{className:"menu_card",children:[Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:Object(j.jsx)("img",{className:"card_pic",src:"../picture2.jpeg",alt:""})})}),Object(j.jsx)("section",{children:Object(j.jsx)("p",{className:"name",children:"StudyCards"})}),Object(j.jsx)("section",{className:"down_line"}),Object(j.jsx)("section",{className:"up_line"}),Object(j.jsx)(l.b,{to:"/profile",children:Object(j.jsx)("button",{className:"profile_button",children:"Profile"})}),Object(j.jsx)("section",{className:"cards_list",children:Object(j.jsx)(V,{state:s})}),Object(j.jsx)("button",{className:"add_card_button",id:"add_button",children:"Add card..."}),Object(j.jsx)("section",{className:"add_card_name",id:"form",children:Object(j.jsx)(S,{addItem:function(e,t,c,i){n((function(){return[].concat(Object(x.a)(s),[{id:e,title:t,description:c,show:i}])}))}})})]})};var R=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/sign_up",element:Object(j.jsx)(m,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/log_in",element:Object(j.jsx)(O,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/my_folders",element:Object(j.jsx)(v,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/profile",element:Object(j.jsx)(g,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/my_folders/folder",element:Object(j.jsx)(D,{})})]})})};a.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8bda876f.chunk.js.map