(this.webpackJsonpgarage=this.webpackJsonpgarage||[]).push([[0],{2:function(e,t,n){e.exports={actions:"TodoList_actions__3gw_o",toDo:"TodoList_toDo__u26Jh",wrap:"TodoList_wrap__3_blZ",block:"TodoList_block__6nmvw",blockChange:"TodoList_blockChange__34x1u",red:"TodoList_red__2-6iR",save:"TodoList_save__1_1ds",Add:"TodoList_Add__3GrtY",head:"TodoList_head__1HmyR",Tab:"TodoList_Tab__jAPg1",Content:"TodoList_Content__3y9SF",button:"TodoList_button__B1YIY"}},41:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),s=n(38),i=n(33),l=n(34),u=n(40),d=n(39),m=n(11),p=n(7),f=n(2),b=n.n(f),h=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){c(e.description)}),[e.description]);return o.a.createElement("div",{className:b.a.Input},o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:b.a.head},o.a.createElement("h4",{className:"text-left "},e.name," "),o.a.createElement("h4",{onClick:function(){e.deleteTab(e.id)}},"X")),o.a.createElement("form",{className:"d-flex "},o.a.createElement("input",{type:"text",autoFocus:!0,onChange:function(e){console.log(r),c(e.currentTarget.value)},placeholder:" Start typing here to create task... ",className:"form-control"}),o.a.createElement("div",{className:"btn w-25 p-1 btn-success",onClick:function(){""!=r&&e.addnewToDo(r,e.id),c(""),console.log(r)}},"Add Task"))))},g=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(e.lists),i=Object(p.a)(s,2),l=i[0],u=i[1],d=Object(a.useState)(e.date),m=Object(p.a)(d,2),f=m[0],h=m[1],g=Object(a.useState)(e.done),E=Object(p.a)(g,2),T=E[0],_=E[1],v=new Date(f),D=new Date,O=D.getDate()+""+D.getMonth()+D.getFullYear(),j=v.getDate()+""+v.getMonth()+v.getFullYear();Object(a.useEffect)((function(){u(e.status),h(e.date),_(e.done)}),[e.status,e.date,e.done]);var N=function(t){e.movePriority(t?-1:1,e.id,e.user_id)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b.a.wrap,id:O==j?b.a.red:b.a.empty},r?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b.a.blockChange},console.log(e.date),o.a.createElement("div",{className:b.a.change},o.a.createElement("p",null,"Put changes here:"),o.a.createElement("input",{type:"text",autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},placeholder:e.lists,value:l})),o.a.createElement("div",{className:b.a.change},o.a.createElement("p",null,"Date of dead line:"),o.a.createElement("input",{type:"date",onChange:function(e){h(e.currentTarget.value)},placeholder:e.date,value:e.date})),o.a.createElement("div",{className:b.a.change},o.a.createElement("p",null,"Done:"),o.a.createElement("input",{type:"checkbox",onChange:function(e){console.log(!T),_(!T)},checked:T?"checked":""})))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b.a.block},o.a.createElement("input",{type:"checkbox",checked:T?"checked":"",readOnly:"readonly"}),o.a.createElement("p",null,l||e.lists))),r?o.a.createElement("div",{className:b.a.save}," ",o.a.createElement("pre",{onClick:function(){c(!1),e.updToDo(l||e.lists,e.id,T,f),u(l)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b.a.block},o.a.createElement("pre",{className:"",onClick:function(){c(!0)}})),o.a.createElement("div",{className:b.a.block},o.a.createElement("pre",{className:"",onClick:function(){e.deletePost(e.id)}}," ")),o.a.createElement("div",{className:b.a.block},o.a.createElement("pre",{onClick:function(){return N(1)}}," "),o.a.createElement("pre",{onClick:function(){return N(0)}})))))},E=function(e){var t=Object(a.useState)(!0),n=Object(p.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(p.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){u(e.description)}),[e.description]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Fragment,null,r?o.a.createElement("div",{className:b.a.button,onClick:function(){c(!r)}},"+ Add new tab"):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b.a.Tab},o.a.createElement("form",{className:"d-flex "},o.a.createElement("input",{type:"text",autoFocus:!0,onChange:function(e){console.log(l),u(e.currentTarget.value)},placeholder:" Start typing here to create task... ",className:"form-control"}),o.a.createElement("div",{className:"btn w-25 p-1 btn-success",onClick:function(){c(!r),e.addNewTab(e.number,e.table_group_id,l),u("")}},"New Tab "))))))},T=function(e){console.log(e);var t=function(t,n,a){var o=e.list.filter((function(e){return e.user_id==a})),r=e.list.filter((function(e){return e.user_id!=a}));for(var c in o)if(o[c].todo_id==n&&o[+c+t].user_id){var s=o[+c+t].description;o[+c+t].description=o[c].description,o[c].description=s,s=o[+c+t].date,o[+c+t].date=o[c].date,o[c].date=s,s=o[+c+t].done,o[+c+t].done=o[c].done,o[c].done=s}o.push.apply(o,Object(m.a)(r)),e.movePriorityAC(o)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"container w-50 "},e.name.map((function(n,a){return o.a.createElement("div",{key:a+n.name,className:b.a.Tab},o.a.createElement(h,{addnewToDo:e.postDescAC,name:n.name,id:n.id,deleteTab:e.deleteTab}),e.list.map((function(a,r){return a.user_id==n.id?o.a.createElement(g,{lists:a.description,id:a.todo_id,user_id:a.user_id,deletePost:e.deletePost,updToDo:e.updToDo,movePriority:t,key:r+a.description,date:a.date,done:a.done}):console.log()})))})),o.a.createElement(E,{addNewTab:e.addNewTab,number:e.name.length+1,table_group_id:e.author.id}))))},_=n(17),v=n(8),D=n.n(v),O=n(18),j=n(3),N=n(51),w={get:function(){return N.get("http://localhost:3000/todos").then((function(e){return e}))},getUser:function(e){return N.post("http://localhost:3000/users",{user:e}).then((function(e){return e}))},getTodos:function(e){return N.get("http://localhost:3000/todoList/"+e).then((function(e){return e}))},deleteId:function(e){return N.delete("http://localhost:3000/todos/"+e).then((function(e){return e}))},deleteTableId:function(e){return N.delete("http://localhost:3000/todoList/"+e).then((function(e){return e}))},addNewTab:function(e,t,n){return N.post("http://localhost:3000/todoList",{number:e,table_group_id:t,description:n}).then((function(e){return e}))},postDesc:function(e,t){return N.post("http://localhost:3000/todos/",{description:e,id:t}).then((function(e){return e.data}))},updDesc:function(e,t,n,a){return N.put("http://localhost:3000/todos/"+t,{description:e,done:n,date:a}).then((function(e){return e}))}},k={toDoList:[],todoName:null,user:null,id:null,auth:0},y=function(e){return{type:"ADD_USER",user:e}},C=function(e){return{type:"PRIORITY",newTodo:e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return Object(j.a)(Object(j.a)({},e),{},{user:t.user,auth:1});case"TODO_NAME":return Object(j.a)(Object(j.a)({},e),{},{todoName:t.name});case"TXT_ADD":return Object(j.a)(Object(j.a)({},e),{},{toDoList:t.text});case"ADD_TAB":return Object(j.a)(Object(j.a)({},e),{},{todoName:[].concat(Object(m.a)(e.todoName),[{name:t.name,user_id:t.group_id,id:t.id}])});case"DELETE":var n=e.toDoList.filter((function(e){return e.todo_id!=t.id}));return console.log(t.id),console.log(n),Object(j.a)(Object(j.a)({},e),{},{toDoList:n});case"DEL_TAB":var a=e.todoName.filter((function(e){return e.id!=t.id}));return console.log(a),Object(j.a)(Object(j.a)({},e),{},{todoName:a});case"NEW_TEXT":return Object(j.a)(Object(j.a)({},e),{},{toDoList:[].concat(Object(m.a)(e.toDoList),Object(m.a)(t.obj))});case"UPD_TEXT":for(var o in e.toDoList)e.toDoList[o].todo_id==t.id&&(e.toDoList[o].description=t.text,e.toDoList[o].done=t.done,e.toDoList[o].date=t.date);return console.log(e.toDoList),Object(j.a)(Object(j.a)({},e),{},{toDoList:e.toDoList});case"PRIORITY":console.log(t.newTodo);var r=t.newTodo;return Object(j.a)(Object(j.a)({},e),{},{toDoList:r});default:return e}},A=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){c(e.user)}),[e.user]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container w-60 "},o.a.createElement("div",{className:"text-center  pt-2"},o.a.createElement("h1",{className:"text-white"}," Please enter Parhosha user name: "),o.a.createElement("form",{action:"",className:"d-flex"},o.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){c(e.currentTarget.value)}}),o.a.createElement("div",{className:"btn w-25 p-1 btn-success",onClick:function(){var t=r;localStorage.setItem("user",t),e.getUserAC(r)}}," Enter ")," ",o.a.createElement("br",null)))))},x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user");e&&this.props.getUserAC(e),console.log(this.props)}},{key:"render",value:function(){return o.a.createElement("div",{className:b.a.Content},this.props.name?o.a.createElement(T,{list:this.props.list,postDescAC:this.props.postDescAC,deletePost:this.props.deletePost,updToDo:this.props.updToDoAC,movePriorityAC:this.props.movePriorityAC,name:this.props.name,author:this.props.author,addNewTab:this.props.addNewTabAC,deleteTab:this.props.deleteTab}):o.a.createElement(A,{getUserAC:this.props.getUserAC}))}}]),n}(o.a.Component),P=Object(_.b)((function(e){return{list:e.mainPage.toDoList,name:e.mainPage.todoName,author:e.mainPage.user}}),{deleteTab:function(e){return console.log(e),function(t){w.deleteTableId(e),t(function(e){return{type:"DEL_TAB",id:e}}(e))}},deletePost:function(e){return console.log(e),function(t){w.deleteId(e),t(function(e){return{type:"DELETE",id:e}}(e))}},postDescAC:function(e,t){return function(){var n=Object(O.a)(D.a.mark((function n(a){var o;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.postDesc(e,t);case 2:o=n.sent,console.log(o.rows),a({type:"NEW_TEXT",obj:o.rows});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},updToDoAC:function(e,t,n,a){return console.log(e,t,n,a),function(o){w.updDesc(e,t,n,a),o(function(e,t,n,a){return{type:"UPD_TEXT",text:e,id:t,done:n,date:a}}(e,t,n,a))}},movePriorityAC:function(e){return console.log(e),function(){var t=Object(O.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(C(e)),t.t0=D.a.keys(e);case 2:if((t.t1=t.t0()).done){t.next=8;break}return a=t.t1.value,t.next=6,w.updDesc(e[a].description,e[a].todo_id,e[a].done,e[a].date);case 6:t.next=2;break;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserAC:function(e){return function(){var t=Object(O.a)(D.a.mark((function t(n){var a,o,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getUser(e);case 2:if(!(a=t.sent).data.rowCount){t.next=15;break}return n(y(a.data.rows[0])),t.next=7,w.getTodos(a.data.rows[0].id);case 7:return o=t.sent,n({type:"TODO_NAME",name:o.data.rows}),t.next=11,w.get();case 11:r=t.sent,n({type:"TXT_ADD",text:r.data}),t.next=16;break;case 15:alert("Wrong User!");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addNewTabAC:function(e,t,n){return function(a){w.addNewTab(e,t,n),a({type:"ADD_TAB",id:e,group_id:t,name:n})}}})(x),F=n(10),S=n(37),I=Object(F.c)({mainPage:L}),U=Object(F.d)(I,Object(F.a)(S.a));window.store=U;var R=U,X=function(){c.a.render(o.a.createElement(s.a,null,o.a.createElement(_.a,{store:R},o.a.createElement(P,null))),document.getElementById("root"))};X(),R.subscribe((function(){X()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.f7c3e1ed.chunk.js.map