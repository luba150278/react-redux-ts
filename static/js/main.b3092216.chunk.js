(this["webpackJsonpreact-redux-ts"]=this["webpackJsonpreact-redux-ts"]||[]).push([[0],{29:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"fetchUsers",(function(){return _}));var c={};r.r(c),r.d(c,"fetchTodos",(function(){return f})),r.d(c,"setTodoPage",(function(){return h}));var a,o=r(0),s=r(7),i=r.n(s),d=(r(28),r(29),r(5)),u=r(4),O=r(3),l=r(6),E=r.n(l),S=r(8),j=r(9),p=r.n(j);!function(e){e.FETCH_USERS="FETCH_USERS",e.FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS",e.FETCH_USERS_ERROR="FETCH_USERS_ERROR"}(a||(a={}));var T,_=function(){return function(){var e=Object(S.a)(E.a.mark((function e(t){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:a.FETCH_USERS}),e.next=4,p.a.get("https://jsonplaceholder.typicode.com/users");case 4:r=e.sent,t({type:a.FETCH_USERS_SUCCESS,payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:a.FETCH_USERS_ERROR,payload:"Error. Users info don't load"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.FETCH_TODOS="FETCH_TODOS",e.FETCH_TODOS_SUCCESS="FETCH_TODOS_SUCCESS",e.FETCH_TODOS_ERROR="FETCH_TODOS_ERROR",e.SET_TODO_PAGE="SET_TODO_PAGE"}(T||(T={}));var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(){var r=Object(S.a)(E.a.mark((function r(n){var c;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:T.FETCH_TODOS}),r.next=4,p.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_page:e,_limit:t}});case 4:c=r.sent,n({type:T.FETCH_TODOS_SUCCESS,payload:c.data}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),n({type:T.FETCH_TODOS_ERROR,payload:"Error. Todos info don't load"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()};function h(e){return{type:T.SET_TODO_PAGE,payload:e}}var b=Object(O.a)(Object(O.a)({},n),c),C=function(){var e=Object(d.b)();return Object(u.b)(b,e)},R=d.c,v=r(1),g=function(){var e=R((function(e){return e.todo})),t=e.page,r=e.loading,n=e.error,c=e.limit,a=e.todos,s=C(),i=s.fetchTodos,d=s.setTodoPage;return Object(o.useEffect)((function(){i(t,c)}),[t]),r?Object(v.jsx)("h1",{children:"Loading..."}):n?Object(v.jsx)("h1",{children:n}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Todos"}),a.map((function(e){return Object(v.jsxs)("div",{children:[e.id,"-",e.title]},e.id)})),Object(v.jsx)("div",{className:"mt-2",style:{display:"flex"},children:[1,2,3,4,5].map((function(e){return Object(v.jsx)("div",{onClick:function(){return d(e)},style:{border:e===t?"2px solid green":"1px solid gray",padding:10},children:e})}))})]})},x=function(){var e=R((function(e){return e.user})),t=e.users,r=e.error,n=e.loading,c=C().fetchUsers;return Object(o.useEffect)((function(){c()}),[]),n?Object(v.jsx)("h1",{children:"Loading..."}):r?Object(v.jsx)("h1",{children:r}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Users"}),t.map((function(e){return Object(v.jsx)("div",{children:e.name},e.id)}))]})},y=function(){return Object(v.jsxs)("div",{className:"container pt-3 ",children:[Object(v.jsx)(x,{}),Object(v.jsx)("hr",{}),Object(v.jsx)(g,{})]})},F=r(23),H={todos:[],page:1,error:null,limit:10,loading:!1},U={users:[],loading:!1,error:null},m=Object(u.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FETCH_USERS:return{loading:!0,error:null,users:[]};case a.FETCH_USERS_SUCCESS:return{loading:!1,error:null,users:t.payload};case a.FETCH_USERS_ERROR:return{loading:!1,error:t.payload,users:[]};default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.FETCH_TODOS:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case T.FETCH_TODOS_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,todos:t.payload});case T.FETCH_TODOS_ERROR:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload});case T.SET_TODO_PAGE:return Object(O.a)(Object(O.a)({},e),{},{page:t.payload});default:return e}}}),D=Object(u.d)(m,Object(u.a)(F.a));i.a.render(Object(v.jsx)(d.a,{store:D,children:Object(v.jsx)(y,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.b3092216.chunk.js.map